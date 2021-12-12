import React, { Component } from "react";
import "./LeftPanel.css";
declare class LeftPanel extends Component {
    setState: any;
    props: any;
    isAbout: any;
    contentsState: any;
    refToContentsUpdate: React.RefObject<unknown>;
    state: {
        isAbout: boolean;
        contentsState: any;
    };
    showAbout: () => void;
    beforeLettersContentsUnMount: (contentsState: any) => void;
    updateContents: () => any;
    render(): JSX.Element;
}
export default LeftPanel;
