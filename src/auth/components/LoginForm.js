import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';
import { FormHelperText } from 'material-ui/Form';

import * as actions from '../actions/authActions';

class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.signinUser(values);
    }

    renderError() {
        const { errorMessage } = this.props;

        return (
            errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>
        );
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field name="username" component={({input})=><TextField label="username" placeholder="Username" {...input} />}/>
                </div>
                <div >
                    <Field name="password" component={({input})=><TextField label="Password" type="password"  {...input} />}/>
                </div>
                <div >
                    <Button raised color="primary" type="submit" disabled={submitting} >
                        Sign in
                    </Button>
                </div>
                {this.renderError()}
            </form>

        );
    }
}

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.error
    };
  }

export default reduxForm({
    form: 'loginForm'
})(connect(mapStateToProps, actions)(LoginForm));