import { Component } from "react";
import "./Login.css";
declare class Login extends Component {
    setState: any;
    props: any;
    showPassword: any;
    hidePassword: any;
    username: any;
    password: any;
    state: {
        username: string;
        password: string;
    };
    handleUsernameChange: (event: any) => void;
    handlePasswordChange: (event: any) => void;
    handleSubmit: () => void;
    render(): JSX.Element;
}
export default Login;
