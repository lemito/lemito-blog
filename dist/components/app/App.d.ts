import { Component } from "react";
import './App.css';
declare class App extends Component {
    setState: any;
    state: {
        isAuthenticated: boolean;
    };
    componentWillReceiveProps: () => Promise<void>;
    handleLogIn: (history: any) => void;
    handleLogOut: (history: any) => void;
    render(): JSX.Element;
}
export default App;
