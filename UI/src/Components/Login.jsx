import React, {Component} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {PostData} from '../services/PostData';
import { Button, Form, FormGroup, Label, Input, Col,FormText } from 'reactstrap';



class Login extends Component {
constructor(){
super();
this.state = {
username: '',
password: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
if(this.state.username && this.state.password){
PostData('login',this.state).then((result) => {
let responseJson = result;
if(responseJson.userData){
sessionStorage.setItem('userData',JSON.stringify(responseJson));
this.setState({redirectToReferrer: true});
}
else
alert(result.error);
});
}
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
    return (<Redirect to={'/home'}/>)
    }
return (
    <div className="row row-content">
    <div className="col-12">
       <h3>Welcome</h3>
    </div>
     <div className="col-12 col-md-9">
         <Form onSubmit={this.login}>
             
             <FormGroup row>
             <Label htmlFor="username" md={2}>Username</Label>
                 <Col md={10}>
                     <Input type="tel" id="username" name="username"
                         placeholder="username"
                         onChange={this.onChange} />
                 </Col>
             </FormGroup>
             <FormGroup row>
                 <Label htmlFor="password" md={2}>Password</Label>
                 <Col md={10}>
                     <Input type="password" id="password" name="password"
                         placeholder="Password"
                         onChange={this.onChange} />
                 </Col>
             </FormGroup>
                
               
             
             <FormGroup row>
                 <Col md={{size: 10, offset: 2}}>
                     <Button type="submit" color="primary">
                         Login
                     </Button>
                     <a href="/signup">Create an account</a>
                 </Col>
             </FormGroup>
         </Form>
     </div>
</div>
);
}
}
export default Login;