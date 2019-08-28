const boolCoords = require("./bool_coords.js")
const purchaseCoords = (answers) => {

  // page#coords is an array of objects representing coordinates.
  // page1coords = coordinates for Page 1
  // Each object has three keys: text (column from database), x & y coordinates
  // If the column is a boolean, use the boolCoords() function below and then
  // push it to the page#coords array.
  var page1coords = [
    { text: answers.BUYER_1, x_coord: 125, y_coord: 670 },
    { text: answers.DATE, x_coord: 390, y_coord: 704 },
    { text: answers.L6A, x_coord: 75, y_coord: 620 },
    { text: answers.L6B, x_coord: 425, y_coord: 620 },
    { text: answers.L7B, x_coord: 300, y_coord: 600 },
    { text: answers.L12, x_coord: 140, y_coord: 523 },
    { text: answers.L13A, x_coord: 105, y_coord: 507 },
    { text: answers.L13B, x_coord: 375, y_coord: 507 },
    { text: answers.L14, x_coord: 250, y_coord: 487 },
    { text: answers.L29, x_coord: 75, y_coord: 302 },
    { text: answers.L32, x_coord: 75, y_coord: 260 },
    { text: answers.L34, x_coord: 350, y_coord: 226 },
    { text: answers.L35, x_coord: 75, y_coord: 210 },
    { text: answers.L37, x_coord: 95, y_coord: 180 },
    { text: answers.L39, x_coord: 95, y_coord: 150 },
    { text: answers.L40, x_coord: 95, y_coord: 133 },
    { text: answers.L41, x_coord: 95, y_coord: 104 },
    { text: answers.L45, x_coord: 200, y_coord: 55 },
  ]
  // if (answers.L41) {
  page1coords.push(boolCoords(answers.L7A, 237, 598))
  // }

  var page2coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L55, x_coord: 150, y_coord: 570 },
    { text: answers.L62B, x_coord: 130, y_coord: 463 },
    { text: answers.L63, x_coord: 545, y_coord: 447 },
    { text: answers.L64, x_coord: 310, y_coord: 430 },
    { text: answers.L77, x_coord: 125, y_coord: 225 },
  ]
  // if (answers.L49) {
  page2coords.push(boolCoords(answers.L49, 168, 670))
  // }
  // if (answers.L53) {
  page2coords.push(boolCoords(answers.L53, 20, 605))
  // }
  // if (answers.L54) {
  page2coords.push(boolCoords(answers.L54, 70, 587))
  // }
  // if (answers.L57) {
  page2coords.push(boolCoords(answers.L57, 20, 537))
  // }
  // if (answers.L58) {
  page2coords.push(boolCoords(answers.L58, 20, 522))
  // }
  // if (answers59) {
  page2coords.push(boolCoords(answers.L59, 20, 508))
  // }
  // if (answers.L60) {
  page2coords.push(boolCoords(answers.L60, 20, 495))
  // }
  // if (answers.L61) {
  page2coords.push(boolCoords(answers.L61, 20, 480))
  // }
  // if (answers.L62A) {
  page2coords.push(boolCoords(answers.L62A, 20, 463))
  // }
  // if (answers.L70) {
    page2coords.push(boolCoords(answers.L70, 20, 336))
    // }
      // if (answers.L73) {
        page2coords.push(boolCoords(answers.L73, 165, 297))
        // }
              // if (answers.L76) {
                page2coords.push(boolCoords(answers.L76, 20, 240))
                // }

  return [page1coords, page2coords]

}

module.exports = purchaseCoords
