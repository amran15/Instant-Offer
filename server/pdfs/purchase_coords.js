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

  var page3coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L118, x_coord: 75, y_coord: 322 },
    { text: answers.L133, x_coord: 310, y_coord: 120 },

  ]
  // if (answers.L114) {
  page3coords.push(boolCoords(answers.L114, 20, 388))
  // }
  // if (answers.L115) {
  page3coords.push(boolCoords(answers.L115, 20, 370))
  // }
  // if (answers.L127) {
  page3coords.push(boolCoords(answers.L127, 78, 207))
  // }

  var page4coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L141, x_coord: 435, y_coord: 675 },
    { text: answers.L145A, x_coord: 78, y_coord: 612 },
    { text: answers.L146, x_coord: 78, y_coord: 595 },
    { text: answers.L156, x_coord: 280, y_coord: 445 },
    { text: answers.L160B, x_coord: 90, y_coord: 364 },
    { text: answers.L161B, x_coord: 90, y_coord: 348 },
  ]
  // if (answers.L145B) {
  page4coords.push(boolCoords(answers.L145B, 275, 610))
  // }
  // if (answers.L159) {
  page4coords.push(boolCoords(answers.L159, 74, 390))
  // }
  // if (answers.L160A) {
  page4coords.push(boolCoords(answers.L160A, 20, 364))
  // }
  // if (answers.L161A) {
  page4coords.push(boolCoords(answers.L161A, 20, 345))
  // }
  // if (answers.L170) {
  page4coords.push(boolCoords(answers.L170, 424, 215))
  // }
  // if (answers.L172) {
  page4coords.push(boolCoords(answers.L172, 165, 180))
  // }
  // if (answers.L178) {
  page4coords.push(boolCoords(answers.L178, 96, 93))
  // }

  var page5coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L184, x_coord: 425, y_coord: 673 },
    { text: answers.L192, x_coord: 210, y_coord: 565 },
    { text: answers.L215E, x_coord: 430, y_coord: 212 },
    { text: answers.L217E, x_coord: 398, y_coord: 175 },
  ]
  // if (answers.L198) {
  page5coords.push(boolCoords(answers.L198, 20, 465))
  // }
  // if (answers.L201) {
  page5coords.push(boolCoords(answers.L201, 20, 422))
  // }
  // if (answers.L210) {
  page5coords.push(boolCoords(answers.L210, 20, 295))
  // }
  // if (answers.L215A) {
  page5coords.push(boolCoords(answers.L215A, 90, 210))
  // }
  // if (answers.L215B) {
  page5coords.push(boolCoords(answers.L215B, 277, 210))
  // }
  // if (answers.L215C) {
  page5coords.push(boolCoords(answers.L215C, 313, 210))
  // }
  // if (answers.L215D) {
  page5coords.push(boolCoords(answers.L215D, 357, 210))
  // }
  // if (answers.L217A) {
  page5coords.push(boolCoords(answers.L217A, 84, 172))
  // }
  // if (answers.L217B) {
  page5coords.push(boolCoords(answers.L217B, 250, 172))
  // }
  // if (answers.L217C) {
  page5coords.push(boolCoords(answers.L217C, 290, 172))
  // }
  // if (answers.L217D) {
  page5coords.push(boolCoords(answers.L217D, 330, 172))
  // }
  // if (answers.L219) {
  page5coords.push(boolCoords(answers.L219, 462, 133))
  // }


  var page6coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L251, x_coord: 365, y_coord: 280 },
    { text: answers.L252, x_coord: 365, y_coord: 260 },
    { text: answers.L258B, x_coord: 125, y_coord: 175 },
    { text: answers.L264, x_coord: 125, y_coord: 93 },
    { text: answers.L266, x_coord: 125, y_coord: 57 },

  ]
  // if (answers.L226) {
  page6coords.push(boolCoords(answers.L226, 135, 677))
  // }
  // if (answers.L228) {
  page6coords.push(boolCoords(answers.L228, 395, 638))
  // }
  // if (answers.L231) {
  page6coords.push(boolCoords(answers.L231, 155, 585))
  // }
  // if (answers.L233) {
  page6coords.push(boolCoords(answers.L233, 155, 545))
  // }
  // if (answers.L239) {
  page6coords.push(boolCoords(answers.L239, 391, 452))
  // }
  // if (answers.L250) {
  page6coords.push(boolCoords(answers.L250, 400, 300))
  // }
   // if (answers.L257A) {
    page6coords.push(boolCoords(answers.L257A, 20, 190))
    // }
     // if (answers.L257B) {
  page6coords.push(boolCoords(answers.L257B, 120, 190))
  // }
   // if (answers.L257C) {
    page6coords.push(boolCoords(answers.L257C, 315, 190))
    // }
     // if (answers.L257D) {
  page6coords.push(boolCoords(answers.L257D, 435, 190))
  // }
       // if (answers.L258A) {
        page6coords.push(boolCoords(answers.L258A, 20, 175))
        // }

  return [page1coords, page2coords, page3coords, page4coords, page5coords, page6coords, page7coords]

}

module.exports = purchaseCoords
