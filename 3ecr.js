const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// const pdfDocument=require('node-fpdf')
const app = express();








//Pdf kit=



app.get('/generate-pdf3', (req, res) => {
  // Create a new PDF document
  const doc = new PDFDocument();

  // Set the content type to PDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="example.pdf"');

  // Pipe the PDF document to the response
  doc.pipe(res);


  function drawRectangleAndText(doc, x, y, width, height, text) {
    doc.rect(x, y, width, height).stroke();
    doc.text(text, x + 8, y + 25);
  }

  //Image 
 
  doc.image('logo.png',18,2,{
    fit: [100, 50], 
  });
  doc.image('logo2.png',15,63,{
    fit: [85, 28], 
  });
  doc.fontSize(19);
  doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',120,25);
  doc.fontSize(10);
  doc.text('(An Autonomous Institution)',170,48)
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)',69,63)
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu',128,78)

  

doc.rect(200,100,120,25).stroke()
doc.text('EVENT PROPOSAL',215,110)

doc.text('CSE',28,128);
doc.text('2023-24',500,128);



doc.rect(30,160,25,40).stroke()
doc.text('1',40,180)
doc.rect(55,160,255,40).stroke()
doc.text((`Nature of the Event:\nConference/Technical Symposium/Workshop/Seminar/\nGuest Lecture/FDP/Any other`),60,165)
doc.rect(310,160,260,40).stroke()
doc.text('workshop',312,177)


doc.rect(30,200,25,28).stroke()
doc.text('2',40,210)
doc.rect(55,200,255,28).stroke()
doc.text('Title of the event',60,210)
doc.rect(310,200,260,28).stroke()
doc.text('cloud',312,210)


doc.rect(30,228,25,28).stroke()
doc.text('3',40,239)
doc.rect(55,228,255,28).stroke()
doc.text('Organized by',60,239)
doc.rect(310,228,260,28).stroke()
doc.text('CSE',312,239)



doc.rect(30,256,25,28).stroke()
doc.text('4',40,267)
doc.rect(55,256,255,28).stroke()
doc.text('Collaboratiion/Sponsoring Agency',60,267)
doc.rect(310,256,260,28).stroke()
doc.text('IEI & Management',312,267)


doc.rect(30,284,25,28).stroke()
doc.text('5',40,295)
doc.rect(55,284,255,28).stroke()
doc.text('Date of Event Planned',60,295)
doc.rect(310,284,260,28).stroke()
doc.text('2023',312,295)


doc.rect(30,312,25,28).stroke()
doc.text('6',40,322)
doc.rect(55,312,255,28).stroke()
doc.text('Venue',60,322)
doc.rect(310,312,260,28).stroke()
doc.text('Seminar hall ',312,322)





doc.rect(30,312,25,168).stroke()
doc.text('7',40,409)
doc.rect(55,312,255,168).stroke()
doc.text('Details of the Guest',60,409)

doc.rect(310,340,80,28).stroke()
doc.text('Name',315,352)
doc.rect(390,340,180,28).stroke()
doc.text('Eniyaa',395,352)


doc.rect(310,368,80,28).stroke()
doc.text('Designation',312,380)
doc.rect(390,368,180,28).stroke()
doc.text('student',395,380)




doc.rect(310,396,80,28).stroke()
doc.text('Address',312,408)
doc.rect(390,396,180,28).stroke()
doc.text('5/72 aandalore gate rasipuram namakkal',395,400)


doc.rect(310,424,80,28).stroke()
doc.text('Contact No',312,436)
doc.rect(390,424,180,28).stroke()
doc.text('8765428267',395,436)


doc.rect(310,452,80,28).stroke() 
doc.text('Mail id',312,464)
doc.rect(390,452,180,28).stroke()
doc.text('Karthika@gmail.com',395,464)


doc.rect(30,480,25,28).stroke()
doc.text('8',40,492)
doc.rect(55,480,255,28).stroke()
doc.text('Proposal Budget',60,492)
doc.rect(310,480,260,28).stroke()
doc.text('1000',312,492)


doc.rect(30,508,25,112).stroke()
doc.text('9',40,570)
doc.rect(55,508,255,112).stroke()
doc.text('Co-ordinator of the Event',60,570)
doc.rect(310,508,80,28).stroke()
doc.text('Name',312,520)
doc.rect(390,508,180,28).stroke()
doc.text('k',395,520)


doc.rect(310,536,80,28).stroke()
doc.text('Designation',312,548)
doc.rect(390,536,180,28).stroke()
doc.text('',395,548)


doc.rect(310,564,80,28).stroke()
doc.text('Contact No',312,576)
doc.rect(390,564,180,28).stroke()
doc.text('',395,576)


doc.rect(310,592,80,28).stroke()
doc.text('Co-ordinator Sign',311,604)
doc.rect(390,592,180,28).stroke()
doc.text('',395,604)



doc.text('* Attach Invitation/Brochure',60,634)
doc.font('Times-Bold');
doc.text('HOD',400,654)

doc.text('Approved/Not Approved',60,684)

doc.font('Times-Bold');
doc.text('Principal',400,708)



  doc.end();


  // Close the response stream
  res.on('finish', () => {
    console.log('PDF generated and sent');
  });
});

app.listen(3100,()=>{
    console.log("pdf generated");
  })

