const hummus = require("hummus")
const fs = require('fs')

const generateListing = (file_name, answers) => {

  const signed_pdfs_dir = __dirname + "/signed_pdfs/"
  if ( !fs.existsSync(signed_pdfs_dir) ) {
    fs.mkdirSync(signed_pdfs_dir);
  }
  const source_file = __dirname + "/original_pdfs/listing_contract.pdf"
  const destination_path = signed_pdfs_dir + file_name

  // create a pdf writer with path to pdf file
  var pdfWriter = hummus.createWriterToModify(
    source_file, {modifiedFilePath: destination_path}
  )

  // load the font you want to use
  var font = pdfWriter.getFontForFile(__dirname + "/fonts/Arial.ttf")

  // page#coords is an array of objects representing coordinates.
  // page1coords = coordinates for Page 1
  // Each object has three keys: text (column from database), x & y coordinates
  // If the column is a boolean, use the boolCoords() function below and then
  // push it to the page#coords array.
  var page1coords = [
    { text: "8", x_coord: 428, y_coord: 670 },
    { text: answers.DATE, x_coord: 390, y_coord: 689 },
    { text: answers.L3, x_coord: 350, y_coord: 652 },
    { text: answers.L4, x_coord: 200, y_coord: 630 },
    { text: answers.BUYER_1, x_coord: 120, y_coord: 597 },
    { text: answers.L7, x_coord: 140, y_coord: 577 },
    { text: answers.L8A, x_coord: 175, y_coord: 551 },
    { text: answers.L8C, x_coord: 475, y_coord: 551 },
    { text: answers.L12, x_coord: 340, y_coord: 487 },
    { text: answers.L13, x_coord: 105, y_coord: 468 }
  ]
  // if (answers.L41) {
  page1coords.push(boolCoords(answers.L41, 507, 93))
  // }

  var page2coords = [
    { text: answers.L3, x_coord: 160, y_coord: 699 },
  ]
  // if (answers.L54) {
  page2coords.push(boolCoords(answers.L54, 507, 575))
  // }
  // if (answers.L63) {
  page2coords.push(boolCoords(answers.L63, 507, 454))
  // }
  // if (answers.L71) {
  page2coords.push(boolCoords(answers.L71, 507, 345))
  // }
  // if (answers.L72) {
  page2coords.push(boolCoords(answers.L72, 236, 321))
  // }
  // if (answers.L72) {
  page2coords.push(boolCoords(answers.L72, 326, 297, 38))
  // }

  var page3coords = [
    { text: answers.L3, x_coord: 160, y_coord: 699 },
    { text: answers.L115, x_coord: 300, y_coord: 400},
    { text: answers.L118, x_coord: 355, y_coord: 358},
    { text: answers.L119, x_coord: 80, y_coord: 340},
    { text: answers.L121, x_coord: 100, y_coord: 306},
    { text: answers.L121, x_coord: 110, y_coord: 173},
  ]

  var page4coords = [
    { text: answers.L3, x_coord: 160, y_coord: 699 },
    { text: answers.L148B, x_coord: 90, y_coord: 606 },
    { text: answers.L148C, x_coord: 275, y_coord: 606 },
    { text: answers.L150B, x_coord: 90, y_coord: 577 },
    { text: answers.L150C, x_coord: 275, y_coord: 577 },
    { text: answers.L152B, x_coord: 120, y_coord: 544 },
    { text: answers.L165A, x_coord: 80, y_coord: 333 },
  ]
  page4coords.push(boolCoords(answers.L146, 258, 642))
  page4coords.push(boolCoords(answers.L148A, 20, 604))
  page4coords.push(boolCoords(answers.L150A, 20, 575))
  page4coords.push(boolCoords(answers.L152A, 20, 544))
  page4coords.push(boolCoords(answers.L163, 20, 370))
  page4coords.push(boolCoords(answers.L164, 20, 354))
  page4coords.push(boolCoords(answers.L175, 215, 178))

  var page5coords = [
    { text: answers.L3, x_coord: 160, y_coord: 701 },
    { text: answers.COMPANY, x_coord: 200, y_coord: 472 },
    { text: answers.SIGNATURE_BUYER_1, x_coord: 375, y_coord: 454 },
    { text: answers.DATE, x_coord: 375, y_coord: 415 },
  ]
  page5coords.push(boolCoords(answers.L196, 20, 524))
  page5coords.push(boolCoords(answers.L198, 20, 498))

  var page6coords = [
    { text: answers.L3, x_coord: 160, y_coord: 702 },
    { text: answers.L237, x_coord: 110, y_coord: 621 },
    { text: answers.SIGNATURE_BUYER_1, x_coord: 425, y_coord: 492 },
    { text: answers.DATE, x_coord: 340, y_coord: 454 },
    { text: answers.BUYER_1_ADDRESS, x_coord: 340, y_coord: 415 },
    { text: answers.BUYER_1_PHONE, x_coord: 340, y_coord: 377 },
    { text: answers.BUYER_1_EMAIL, x_coord: 340, y_coord: 337 },
  ]

  var page7coords = [
    { text: answers.SIGNATURE_BUYER_1, x_coord: 50, y_coord: 134 },
    { text: answers.DATE, x_coord: 225 , y_coord: 134 },
  ]

  writeTextToPage(pdfWriter, 0, page1coords, font)
  writeTextToPage(pdfWriter, 1, page2coords, font)
  writeTextToPage(pdfWriter, 2, page3coords, font)
  writeTextToPage(pdfWriter, 3, page4coords, font)
  writeTextToPage(pdfWriter, 4, page5coords, font)
  writeTextToPage(pdfWriter, 5, page6coords, font)
  writeTextToPage(pdfWriter, 6, page7coords, font)

  // close the pdfwriter
  pdfWriter.end();
}

const generatePurchase = (file_name, answers) => {

  const signed_pdfs_dir = __dirname + "/signed_pdfs/"
  if ( !fs.existsSync(signed_pdfs_dir) ) {
    fs.mkdirSync(signed_pdfs_dir);
  }
  const source_file = __dirname + "/original_pdfs/purchase_agreement.pdf"
  const destination_path = signed_pdfs_dir + file_name

  // create a pdf writer with path to pdf file
  var pdfWriter = hummus.createWriterToModify(
    source_file, {modifiedFilePath: destination_path}
  )

  // load the font you want to use
  var font = pdfWriter.getFontForFile(__dirname + "/fonts/Arial.ttf")

  // page#coords is an array of objects representing coordinates.
  // page1coords = coordinates for Page 1
  // Each object has three keys: text (column from database), x & y coordinates
  // If the column is a boolean, use the boolCoords() function below and then
  // push it to the page#coords array.
  var page1coords = [
    { text: "8", x_coord: 428, y_coord: 670 },
    { text: answers.DATE, x_coord: 390, y_coord: 689 },
    { text: answers.L3, x_coord: 350, y_coord: 652 },
    { text: answers.L4, x_coord: 200, y_coord: 630 },
    { text: answers.BUYER_1, x_coord: 120, y_coord: 597 },
    { text: answers.L7, x_coord: 140, y_coord: 577 },
    { text: answers.L8A, x_coord: 175, y_coord: 551 },
    { text: answers.L8C, x_coord: 475, y_coord: 551 },
    { text: answers.L12, x_coord: 340, y_coord: 487 },
    { text: answers.L13, x_coord: 105, y_coord: 468 }
  ]
  // if (answers.L41) {
  page1coords.push(boolCoords(answers.L41, 507, 93))
  // }

  var page2coords = [
    { text: answers.L3, x_coord: 160, y_coord: 699 },
  ]
  // if (answers.L54) {
  page2coords.push(boolCoords(answers.L54, 507, 575))
  // }
  // if (answers.L63) {
  page2coords.push(boolCoords(answers.L63, 507, 454))
  // }
  // if (answers.L71) {
  page2coords.push(boolCoords(answers.L71, 507, 345))
  // }
  // if (answers.L72) {
  page2coords.push(boolCoords(answers.L72, 242, 321))
  // }
  // if (answers.L72) {
  page2coords.push(boolCoords(answers.L72, 326, 297, 38))
  // }

  writeTextToPage(pdfWriter, 0, page1coords, font)
  writeTextToPage(pdfWriter, 1, page2coords, font)
  // writeTextToPage(pdfWriter, 2, page3coords, font)
  // writeTextToPage(pdfWriter, 3, page4coords, font)
  // writeTextToPage(pdfWriter, 4, page5coords, font)
  // writeTextToPage(pdfWriter, 5, page6coords, font)
  // writeTextToPage(pdfWriter, 6, page7coords, font)

  // close the pdfwriter
  pdfWriter.end();
}

// expect content to be an array of text and x, y coordinates
const writeTextToPage = (pdfWriter, page, content, font) => {
  // PDFPageModifier takes a PDFWriter, the page number
  var pageModifier = new hummus.PDFPageModifier(pdfWriter, page, true);

  // get the context. you will use this to write as much as you need
  var pageContext = pageModifier.startContext().getContext()

  // data has text, x_coord, and y_coord keys
  // will remove red color and add logic to handle null after dropping coords
  content.map(data => {
    // if (data.text != null) {
    pageContext.writeText(data.text, data.x_coord, data.y_coord, { color: "red", font: font, size: 10 });

  })
  // close the context and write the page
  pageModifier.endContext().writePage();
}

// Function to handle booleans. Will place the X in the correct spot. If the
// column = false, the function adds the adjustment to the x_coord to push the X
// to the right box. If the adjustment is wrong, change the number.
const boolCoords = (bool, x_coord, y_coord, adjustment = 45) => {
  if (!bool) {
    x_coord += adjustment
  }
  return { text: "X", x_coord: x_coord, y_coord: y_coord }
}

module.exports = {
  generateListing: generateListing,
  generatePurchase: generatePurchase
}
