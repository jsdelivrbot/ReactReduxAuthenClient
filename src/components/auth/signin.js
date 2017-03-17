import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form'; // Old version 4.1.3
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    handleFormSubmit({ email, password }) {
        //console.log(email, password);
        //console.log(this.context.store.getState());
        this.props.signinUser({ email, password });
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

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <label>Email:</label>
                    <Field name="email" component="input" className='form-control' />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password:</label>
                    <Field name="password" component="input" type="password" className='form-control' />
                </fieldset>
                {this.renderAlert()}
                <button action='submit' className='btn btn-primary'>Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error
    }
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'signinForm'
})(Signin));