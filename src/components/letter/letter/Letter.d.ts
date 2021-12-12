import { Component } from "react";
import "./Letter.css";
declare class Letter extends Component {
    props: any;
    setState: any;
    id: any;
    title: any;
    dateOfPublication: any;
    htmlText: any;
    pictureName: any;
    pictureURL: any;
    isLoading: any;
    state: {
        id: number;
        title: string;
        dateOfPublication: number;
        htmlText: string;
        pictureURL: string;
        isLoading: boolean;
    };
    componentDidMount: () => Promise<void>;
    render(): JSX.Element;
}
export default Letter;
