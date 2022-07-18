import { saveAs } from "file-saver";
import { CSSProperties } from "react";
import download from '../Assets/downloadPdf.png'


export default function DownloadPdf() {
    const saveFile = () => {
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "CVMalinÖsterberg.pdf"
        );
    };
    return (
        <div style={divStyle}>
            <img src={download} alt="download cv" style={downloadStyle} onClick={saveFile} />

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