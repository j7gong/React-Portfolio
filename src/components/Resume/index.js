import React from "react";

const Resume = () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Resume_Jingsi Gong.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume_Jingsi Gong.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
        <center>
            <p>Click on below button to download my resume in PDF format</p>
            <button onClick={onButtonClick}>
                Download PDF
            </button>
        </center>
        </>
    );
};
  
export default Resume;