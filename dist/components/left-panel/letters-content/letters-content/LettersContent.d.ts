export default LettersContent;
declare class LettersContent extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    chronology: {
        value: string;
        title: string;
    }[];
    handleChronologySelect: (props: any) => void;
    chronologySort: (titles: any, state: any) => any;
    handleTitleSelect: (props: any) => void;
    updateContents: () => void;
}
import React from "react";
