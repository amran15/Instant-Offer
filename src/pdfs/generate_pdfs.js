const hummus = require("hummus")

const generateListing = (file_name) => {
  const source_file = __dirname + "/original_pdfs/listing_contract.pdf"
  const destination_path = __dirname + "/signed_pdfs/" + file_name

  // create a pdf writer with path to pdf file
  var pdfWriter = hummus.createWriterToModify(source_file, {modifiedFilePath: destination_path})

  // load the font you want to use
  var font = pdfWriter.getFontForFile(__dirname + "/fonts/Arial.ttf")

  const page1Content = [
    { text: "test test test", x_coord: 75, y_coord: 680 }
  ]
  writeTextToPage(pdfWriter, 0, page1Content, font)

  // close the pdfwriter
  pdfWriter.end();
}

// expect content to be an array of text and x, y coordinates
const writeTextToPage = (pdfWriter, page, content, font) => {
  // PDFPageModifier takes a PDFWriter, the page number
  var pageModifier = new hummus.PDFPageModifier(pdfWriter, 0, true);

  // get the context. you will use this to write as much as you need
  var pageContext = pageModifier.startContext().getContext()

  // data has text, x_coord, and y_coord keys
  content.map(data => {
    pageContext.writeText(data.text, data.x_coord, data.y_coord, { font: font, size: 10 });

  })
  // close the context and write the page
  pageModifier.endContext().writePage();
}


module.exports = {
  generateListing: generateListing
}
