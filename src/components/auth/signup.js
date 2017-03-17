import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as action from '../../actions';

class Signup extends Component {
    handleFormSubmit(e) {
        e.preventDefault();
    }

    renderField({ input, label, type, x, meta: { touched, error, warning } }) {
        return (
            <fieldset className="form-group">
                {/*<label>{label + ' | ' + (x || '')}</label>*/}
                <label>{label} :</label>
                <div>
                    <input {...input} placeholder={label} type={type} className="form-control" />
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </fieldset>
        );
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="email" type="text" component={this.renderField} label="Email" x="eeeee" />
                <Field name="password" type="password" component={this.renderField} label="Password" />
                <Field name="passwordConfrim" type="password" component={this.renderField} label="Confirm Password" />
                <button type="submit" className="btn btn-primary" disabled={submitting}>Sing Up</button>
                <button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </form>
        );
    }
};

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required Email !'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required Password !'
    } else if (values.password != values.passwordConfrim) {
        errors.password = 'Not Matching Password !'
    }

    if (!values.passwordConfrim) {
        errors.passwordConfrim = 'Required Confirm Password !'
    } else if (values.password != values.passwordConfrim) {
        errors.passwordConfrim = 'Not Matching Password !'
    }
    return errors;
}

export default connect()(
    reduxForm({
        form: 'signup',
        validate
    })(Signup)
);