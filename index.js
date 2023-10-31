// const PDFDocument = require('node-fpdf');
const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// const pdfDocument=require('node-fpdf')
const app = express();


//Pdf kit




app.get('/generate-pdf', (req, res) => {
  // Create a new PDF document
  const doc = new PDFDocument();

  // Set the content type to PDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="example.pdf"');

  // Pipe the PDF document to the response
  doc.pipe(res);



  function drawRectangleAndText(doc, x, y, width, height, text) {
    doc.rect(x, y, width, height).stroke();
    doc.text(text, x + 4, y + 15);
  }

  //Image 
 
  doc.image('logo.png',30,30,{
    fit: [100, 65], 
  });

  doc.fontSize(19);
  doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',110,25);
  doc.fontSize(10);
  doc.text('(An Autonomous Institution)',210,48)
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)',94,63)
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu',160,78)

    doc.image('logo2.png',490,30,{
      fit: [100, 50], 
    });

    doc.fontSize(16);
   // doc.font('times-Bold');
   doc.text('Budget Proposal',200,100) 
   //doc.font('times-Roman');
   
  
   doc.fontSize(14)
   doc.text('Date of the Event:',30,150)

   doc.fontSize(13)
   doc.text('To the Management through Principle',30,180)



   doc.fontSize(14)
   doc.text('Total Participants:',30,260)



  doc.fontSize(12);
  drawRectangleAndText(doc, 30, 310, 40, 40, 'S.No');
  drawRectangleAndText(doc, 70, 310, 330, 40, 'Details');
  drawRectangleAndText(doc, 400, 310, 100, 40, 'Cost(in Rs)');
  drawRectangleAndText(doc,30, 350, 40, 40, '1');
  drawRectangleAndText(doc, 70, 350, 330, 40, 'Chief Guest Remuneration');
  drawRectangleAndText(doc, 400, 350, 100, 40, '1000');
  drawRectangleAndText(doc, 30, 390, 40, 40, '');
  drawRectangleAndText(doc, 70, 390, 330, 40, 'Total');
  drawRectangleAndText(doc, 400, 390, 100, 40, '1000');
  
  drawRectangleAndText(doc, 30, 430, 470, 40, 'In Words');

  doc.fontSize(14)
  doc.text('Event Coordinator(s)',30,650)
  doc.text('HOD',270,650)
  doc.text('Principle',440,650)

 doc.end();

  // Close the response stream
  res.on('finish', () => {
    console.log('PDF generated and sent');
  });
});

app.listen(3000,()=>{
  console.log("pdf generated");
})