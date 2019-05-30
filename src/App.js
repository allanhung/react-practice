import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WrappedHorizontalLoginForm from './LoginForm';
import { Row, Col } from 'antd';
<<<<<<< HEAD
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class App extends Component { 

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props){
    super(props);
    const { cookies } = props;
    this.state = {
      isLogin: false,
      username: cookies.get('usernmae')
=======

const Logined = React.createContext(false);
class App extends Component { 

  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
    }
  }

  componentDidMount(){
    var url_string = window.location.href;
    let url = new URL(url_string);
    let urlUserName = url.searchParams.get("username");
    let localUserName = localStorage.getItem("userName");
    if(!localUserName){
      this.setState({isLogin: false});
    } else {
      this.setState({isLogin: urlUserName === localUserName});
    } 
  }

<<<<<<< HEAD
  setIsLogin = (xLogin, xUsername) =>{
    const { cookies } = this.props;
    this.setState({isLogin : xLogin});
    this.setState({username : xUsername});
    if(xLogin){ 
      localStorage.setItem("userName",xUsername);
      cookies.set('usernmae', xUsername, { path: '/' });
      console.log('Cookie value username :', cookies.get("username"));
    } else {
      cookies.remove('usernmae')
      localStorage.removeItem("userName");
    }
=======
  setIsLogin = (xLogin) =>{
    this.setState({isLogin : xLogin});
>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
  }

  render() {
    return (
      <div className="App">
      <Row>
        <Col span={12} offset={0}></Col>
<<<<<<< HEAD
        <Col span={12} offset={0}><WrappedHorizontalLoginForm isLogin={this.state.isLogin} setIsLogin={this.setIsLogin}/></Col>
=======
        <Col span={12} offset={0}><WrappedHorizontalLoginForm isLogin={this.state.isLogin} setIsLogin={this.setIsLogin}/></Col>            
>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
      </Row>       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Version: 1.0.1
        </p>
<<<<<<< HEAD
        <p>
          Env: Production
        </p>
=======
>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
      </header>        
      </div>
    );
  }
}

<<<<<<< HEAD
export default withCookies(App);
=======
export default App;
>>>>>>> 520cbc3f5432c21f0449b31cda8dd1ef5bdda860
