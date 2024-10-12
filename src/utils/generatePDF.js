import { jsPDF } from 'jspdf';
import { formatDate } from './TimeDate';
export const generatePDF = (data) => {
  const {
    personName = 'NA',
    personPhoto,
    mobileNo = 'NA',
    gender = 'NA',
    panNo = 'NA',
    panUpload,
    aadharNo = 'NA',
    aadharFront,
    aadharBack,
    emailID = 'NA',
    address = 'NA',
    cityName = 'NA',
    pinCode = 'NA',
    registrationNo = 'NA',
    purchaseDate = 'NA',
    bikeNo = 'NA',
    bikeUpload = 'NA',
    remarks = 'NA',
    engineNo = 'NA',
    chasisNo = 'NA'
  } = data;
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text(`Purchase Date: ${formatDate(purchaseDate)}`, 10, 10);
  // Left column fields
  doc.text(`Name: ${personName}`, 10, 15);
  doc.text(`Mobile No: ${mobileNo}`, 10, 20);
  doc.text(`Gender: ${gender}`, 10, 25);
  doc.text(`PAN No: ${panNo}`, 10, 30);
  doc.text(`Aadhar No: ${aadharNo}`, 10, 35);
  doc.text(`Email ID: ${emailID}`, 10, 40);
  doc.text(`Address: ${address}`, 10, 45);
  doc.text(`City: ${cityName}`, 10, 50);
  doc.text(`Pin Code: ${pinCode}`, 10, 55);
  // Right column fields
  doc.text(`Registration No: ${registrationNo}`, 110, 25);
  doc.text(`Bike No: ${bikeNo}`, 110, 35);
  doc.text(`Engine No: ${engineNo}`, 110, 45);
  doc.text(`Chasis No: ${chasisNo}`, 110, 55);

  //
  doc.text(`Remarks: ${remarks}`, 10, 65);
  // Add PAN upload (if available) --- left
  if (panUpload) {
    doc.text('PAN Upload:', 10, 140);
    doc.addImage(panUpload, 'JPEG', 10, 150, 40, 50); // Adjust as necessary
  }
  // Add bike photo (if available) --- center
  if (aadharFront) {
    doc.text('Bike Upload:', 80, 140);
    doc.addImage(aadharFront, 'JPEG', 80, 150, 40, 50); // Adjust as necessary
  }
  // Add PAN upload (if available) --- right
  if (aadharBack) {
    doc.text('Bike Upload:', 150, 140);
    doc.addImage(aadharBack, 'JPEG', 150, 150, 40, 50); // Adjust as necessary
  }
  // Add Aadhar upload (if available) --- left
  if (bikeUpload) {
    doc.text('Bike Upload:', 10, 210);
    doc.addImage(bikeUpload, 'JPEG', 10, 220, 40, 50); // Adjust as necessary
  }
  // Add person photo (if available) --- center
  if (personPhoto) {
    doc.text('Person Photo:', 80, 210);
    doc.addImage(personPhoto, 'JPEG', 80, 220, 40, 50); // Adjust x, y, width, and height as necessary
  }
  // Save the generated PDF to the user’s computer
  doc.save('Purchase_Bike.pdf');
};
