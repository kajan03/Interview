import React, {Component} from 'react';
import {PostData} from '../services/PostData';
import {Redirect} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Col,FormText } from 'reactstrap';


class Signup extends Component {
constructor(props){
super(props);
this.state = {
username: '',
password: '',
email: '',
name: '',
redirectToReferrer: false
};
this.signup = this.signup.bind(this);
this.onChange = this.onChange.bind(this);
}

signup() {
if(this.state.username && this.state.password && this.state.email && this.state.name){
PostData('signup',this.state).then((result) => {
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
            <Form onSubmit={this.signup}>
                <FormGroup row>
                    <Label htmlFor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Input type="text" id="email" name="email"
                            placeholder="Email"
                            onChange={this.onChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="name" md={2}>Name</Label>
                    <Col md={10}>
                        <Input type="text" id="name" name="name"
                            placeholder="Name"
                            onChange={this.onChange} />
                    </Col>                        
                </FormGroup>
                <FormGroup row>
                <Label htmlFor="username" md={2}>Contact Tel.</Label>
                    <Col md={10}>
                        <Input type="tel" id="username" name="username"
                            placeholder="username"
                            onChange={this.onChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="password" md={2}>Email</Label>
                    <Col md={10}>
                        <Input type="password" id="password" name="password"
                            placeholder="Password"
                            onChange={this.onChange} />
                    </Col>
                </FormGroup>
                   
                  
                
                <FormGroup row>
                    <Col md={{size: 10, offset: 2}}>
                        <Button type="submit" color="primary">
                            SignUp
                        </Button>
                        <a href="/login">Login</a>
                    </Col>
                </FormGroup>
            </Form>
        </div>
   </div>


);
}
}

export default Signup;