const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// const pdfDocument=require('node-fpdf')
const app = express();






//Pdf kit



app.get('/generate-pdf4', (req, res) => {
  // Create a new PDF document
 const doc = new PDFDocument();

 // Set the content type to PDF
 res.setHeader('Content-Type', 'application/pdf');
 res.setHeader('Content-Disposition', 'inline; filename="example.pdf"');

 doc.pipe(res);



 function drawRectangleAndText(doc, x, y, width, height, text) {
    doc.rect(x, y, width, height).stroke();
    doc.text(text, x + 4, y + 15);
 }

 //Image 

 doc.image('logo.png',18,15,{
 fit: [100, 70], 
 });
  doc.font('Times-Bold');
  doc.fontSize(19);
  doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',100,25);
  doc.fontSize(10);
  doc.text('(An Autonomous Institution)',250,48)

    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)',110,63)
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu',130,78)
  doc.font('Times-Roman');
  
  doc.image('logo2.png',500,25,{
  fit:[100,60],
});
 
  doc.fontSize(14);
doc.font('Times-Bold');
doc.text('Event Planner',250,120)
doc.fontSize(14);

doc.text('DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING',90,150)
doc.text('Event Date:2023-09-12',30,180)
doc.text('2023-24',490,180)
doc.font('Times-Roman');
doc.x=50;
doc.y=220;
doc.text('\tThis is to inform the Faculty member that,the following committees have been formed for smooth conductance of workshop has organize by our Department of Computer Science and Engineering,the commitee memmber are requested to carry out their resposibilities to perfection.',{width:500,align:'justify'});
 
drawRectangleAndText(doc, 30, 300, 50, 40, 'S.NO');
doc.font('Times-Bold');
 drawRectangleAndText(doc, 80, 300, 270, 40, ' Name of committee');
  drawRectangleAndText(doc, 350, 300, 120, 40, 'In charge(s)');
drawRectangleAndText(doc, 470, 300, 80, 40, 'Remarks');
doc.font('Times-Roman');
drawRectangleAndText(doc, 30, 340, 50, 40, '1.');
 drawRectangleAndText(doc, 80,340, 270, 40, ' Organizing Secretary');
  drawRectangleAndText(doc,350,340, 120,40, 'Dr.G.Kavitha');
drawRectangleAndText(doc, 470, 340, 80, 80, '');

drawRectangleAndText(doc, 30, 380, 50, 40, '2.');
 drawRectangleAndText(doc, 80,380, 270, 40, ' ');
doc.text('Permission & report preparation ,inviation/\nflux designing',84,390)
  drawRectangleAndText(doc, 350, 380, 120, 40, 'Dr.G.kavitha');

doc.font('Times-Bold');
doc.text('Coordinated',60,600)
doc.text('HOD',450,600)

 
  // End the PDF document
  
  doc.end();



  // Close the response stream
  res.on('finish', () => {
    console.log('PDF generated and sent');
  });
});

app.listen(2000,()=>{
    console.log("pdf generated")
})