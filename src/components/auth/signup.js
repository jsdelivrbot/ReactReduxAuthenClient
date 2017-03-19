import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className='alert alert-danger'>
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    renderField({ input, label, type, test_property, meta: { touched, error, warning } }) {
        return (
            <fieldset className="form-group">
                <label>{label} :</label>
                <input {...input} placeholder={label} type={type} className="form-control" />
                {touched && ((error && <div className='error'>{error}</div>) || (warning && <span>{warning}</span>))}
            </fieldset>
        );
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="email" type="text" component={this.renderField} label="Email" test_property="eeeee" />
                <Field name="password" type="password" component={this.renderField} label="Password" />
                <Field name="passwordConfrim" type="password" component={this.renderField} label="Confirm Password" />
                {this.renderAlert()}
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

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    }
}

export default connect(mapStateToProps, actions)(
    reduxForm({
        form: 'signup',
        validate
    })(Signup)
);