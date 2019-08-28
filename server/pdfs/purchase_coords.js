const boolCoords = require("./bool_coords.js")
const purchaseCoords = (answers) => {

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

  return [page1coords, page2coords]

}

export default purchaseCoords
