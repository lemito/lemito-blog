export default ImgUploader;
declare class ImgUploader extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    fileInputHandler: (event: any) => void;
    onImgOver: () => void;
    onImgLeave: () => void;
    removeCurrentImg: () => void;
    fileInput: HTMLInputElement;
}
import React from "react";
