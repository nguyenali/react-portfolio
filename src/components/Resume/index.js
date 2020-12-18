import React from 'react';
import MyPDF from '../files/ncunanan-resume-2020.pdf';


function Resume() {
  
  return (
    <div>
      <h1>resume</h1>
      <p><a href={MyPDF} download="My_File.pdf">resume. </a></p>
    </div>
  )
}

export default Resume;