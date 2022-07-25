import { saveAs } from "file-saver";
import { CSSProperties } from "react";
import download from '../Assets/downloadPdf.png'


export default function DownloadPdf() {
    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/11yaBIRAReeVWmRIrwtbHST4prj9ccRw0/view?usp=sharing",
            "CVMalinÖsterberg"
        );
    };
    return (
        <div style={divStyle}>
            <img src={download} alt="download cv" style={downloadStyle} onClick={saveFile} className="downloadBubble" />

        </div>
    );
}

const downloadStyle: CSSProperties = {
    width: '150px',


}
const divStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',


}