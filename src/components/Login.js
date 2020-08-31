import React from "react";
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/es/Paper/Paper";
import './Login.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Button, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }    

    render() {
        return (
            <Paper className="paper">
                <Typography variant="h4" color="primary">Task Planner</Typography>
                <AssignmentIcon color="primary" style={{ fontSize: 60 }} />
                <form className="form">
                    <TextField required label="Username" margin="normal" variant="filled" onChange={this.handleUsername} />
                    <br />
                    <TextField required type="password" label="Password" margin="normal" variant="filled" onChange={this.handlePassword} />
                    <br />
                    <Button type="submit" variant="outlined" color="primary" className="submit"
                        onClick={this.handleSubmit} >Login</Button>
                </form>
                <br />
                <Link href="#" variant="body2">Create Account</Link>
            </Paper>
        );


    }
    handleSubmit() {
        if (this.state.username == localStorage.getItem('username') && this.state.password == localStorage.getItem('password')) {
            localStorage.setItem('page', 'drawer');
            
        }
        this.setState({
            username: "",
            password: ""
        });
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
}