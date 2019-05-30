<<<<<<< HEAD
import React from 'react';
import {
  Form, Icon, Input, Button,
=======
import React, { Component } from 'react';
import {
  Alert, Form, Icon, Input, Button,
>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
} from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {

<<<<<<< HEAD
=======
  

>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
<<<<<<< HEAD
        this.props.setIsLogin(true,values.userName);
=======
        this.props.setIsLogin(true);
        localStorage.setItem("userName",values.userName);
>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
        window.location.href=`/?username=${values.userName}`;
      }
    });
    
  }

  handleLogout = (e) =>{
    e.preventDefault();
<<<<<<< HEAD
    this.props.setIsLogin(false,"")
=======
    this.props.setIsLogin(false)
    localStorage.removeItem("userName");
>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
    window.location.href="/";
  }

  render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input style={{ display: this.props.isLogin?"none":"" }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Username"/>
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input style={{ display: this.props.isLogin?"none":"" }} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>

          {this.props.isLogin?
          <Button
            type="danger"
            onClick = {this.handleLogout}
            //disabled={hasErrors(getFieldsError())}
          >
            Log out
          </Button>:
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        }
          
        </Form.Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;
