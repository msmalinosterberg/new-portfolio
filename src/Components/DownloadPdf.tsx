import { saveAs } from "file-saver";
import { CSSProperties } from "react";
import download from '../Assets/downloadPdf.png'


export default function DownloadPdf() {
    const saveFile = () => {
        saveAs(
            "https://github.com/msmalinosterberg/new-portfolio/blob/7ea613ce1089a86ba37ced57bb49192de21e2d3d/CVMalinO%CC%88sterberg.pdf",
            "CVMalinÖsterberg.pdf"
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