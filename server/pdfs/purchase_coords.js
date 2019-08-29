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
    { text: answers.L7A, x_coord: 282, y_coord: 600 },
    { text: answers.L7B, x_coord: 330, y_coord: 600 },
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
  page2coords.push(boolCoords(answers.L49, 185, 670))
  // }
  // if (answers.L53) {
  page2coords.push(boolCoords(answers.L53, 65, 605))
  // }
  // if (answers.L54) {
  page2coords.push(boolCoords(answers.L54, 110, 587))
  // }
  // if (answers.L57) {
  page2coords.push(boolCoords(answers.L57, 65, 537))
  // }
  // if (answers.L58) {
  page2coords.push(boolCoords(answers.L58, 65, 522))
  // }
  // if (answers59) {
  page2coords.push(boolCoords(answers.L59, 65, 508))
  // }
  // if (answers.L60) {
  page2coords.push(boolCoords(answers.L60, 65, 495))
  // }
  // if (answers.L61) {
  page2coords.push(boolCoords(answers.L61, 65, 480))
  // }
  // if (answers.L62A) {
  page2coords.push(boolCoords(answers.L62A, 65, 463))
  // }
  // if (answers.L62A) {
  page2coords.push(boolCoords(answers.L62B, 75, 463))
    // }
  // if (answers.L70) {
  page2coords.push(boolCoords(answers.L70, 65, 336))
  // }
  // if (answers.L73) {
  page2coords.push(boolCoords(answers.L73, 82, 297))
  // }
  // if (answers.L76) {
  page2coords.push(boolCoords(answers.L76, 65, 240))
  // }

  var page3coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L118, x_coord: 75, y_coord: 322 },
    { text: answers.L133, x_coord: 310, y_coord: 120 },

  ]
  // if (answers.L114) {
  page3coords.push(boolCoords(answers.L114, 65, 388))
  // }
  // if (answers.L115) {
  page3coords.push(boolCoords(answers.L115, 65, 370))
  // }
  // if (answers.L127) {
  page3coords.push(boolCoords(answers.L127, 66, 207))
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
  page4coords.push(boolCoords(answers.L145B, 315, 610))
  // }
  // if (answers.L159) {
  page4coords.push(boolCoords(answers.L159, 91, 389.5))
  // }
  // if (answers.L160A) {
  page4coords.push(boolCoords(answers.L160A, 65, 364))
  // }
  // if (answers.L161A) {
  page4coords.push(boolCoords(answers.L161A, 65, 345))
  // }
  // if (answers.L170) {
  page4coords.push(boolCoords(answers.L170, 412, 215))
  // }
  // if (answers.L172) {
  page4coords.push(boolCoords(answers.L172, 182, 180))
  // }
  // if (answers.L178) {
  page4coords.push(boolCoords(answers.L178, 96, 93))
  // }

  var page5coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L184, x_coord: 420, y_coord: 673 },
    { text: answers.L192, x_coord: 210, y_coord: 565 },
    { text: answers.L215E, x_coord: 430, y_coord: 212 },
    { text: answers.L217E, x_coord: 398, y_coord: 175 },
  ]
  // if (answers.L198) {
  page5coords.push(boolCoords(answers.L198, 65, 462))
  // }
  // if (answers.L201) {
  page5coords.push(boolCoords(answers.L201, 65, 420))
  // }
  // if (answers.L210) {
  page5coords.push(boolCoords(answers.L210, 65, 295))
  // }
  // if (answers.L215A) {
  page5coords.push(boolCoords(answers.L215A, 133.5, 210))
  // }
  // if (answers.L215B) {
  page5coords.push(boolCoords(answers.L215B, 323, 210))
  // }
  // if (answers.L215C) {
  page5coords.push(boolCoords(answers.L215C, 358, 210))
  // }
  // if (answers.L215D) {
  page5coords.push(boolCoords(answers.L215D, 403, 210))
  // }
  // if (answers.L217A) {
  page5coords.push(boolCoords(answers.L217A, 134, 172))
  // }
  // if (answers.L217B) {
  page5coords.push(boolCoords(answers.L217B, 296, 170.5))
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
  page6coords.push(boolCoords(answers.L226, 65, 677))
  // }
  // if (answers.L228) {
  page6coords.push(boolCoords(answers.L228, 65, 638))
  // }
  // if (answers.L231) {
  page6coords.push(boolCoords(answers.L231, 65, 585))
  // }
  // if (answers.L233) {
  page6coords.push(boolCoords(answers.L233, 65, 545))
  // }
  // if (answers.L239) {
  page6coords.push(boolCoords(answers.L239, 395, 452))
  // }
  // if (answers.L250) {
  page6coords.push(boolCoords(answers.L250, 448, 300))
  // }
  // if (answers.L257A) {
  page6coords.push(boolCoords(answers.L257A, 65, 190))
  // }
  // if (answers.L257B) {
  page6coords.push(boolCoords(answers.L257B, 163, 190))
  // }
  // if (answers.L257C) {
  page6coords.push(boolCoords(answers.L257C, 358, 190))
  // }
  // if (answers.L257D) {
  page6coords.push(boolCoords(answers.L257D, 478, 190))
  // }
  // if (answers.L258A) {
  page6coords.push(boolCoords(answers.L258A, 65, 173))
  // }


  var page7coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L271B, x_coord: 120, y_coord: 664 },
  ]
  // if (answers.L270) {
  page7coords.push(boolCoords(answers.L270, 65, 677))
  // }
  // if (answers.L271A) {
  page7coords.push(boolCoords(answers.L271A, 65, 660))
  // }


  var page8coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
  ]
  // if (answers.L359) {
  page8coords.push(boolCoords(answers.L359, 312, 155))
  // }
  // if (answers.L360) {
  page8coords.push(boolCoords(answers.L360, 213.5, 142))
  // }

  var page9coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    { text: answers.L389B, x_coord: 280, y_coord: 348 },
    { text: answers.L390, x_coord: 200, y_coord: 320 },
    { text: answers.COMPANY_1, x_coord: 70, y_coord: 218 },
  ]
  // if (answers.L371A) {
  page9coords.push(boolCoords(answers.L371A, 128, 654))
  // }
  // if (answers.L371B) { this is 373 on the PDF currently
  page9coords.push(boolCoords(answers.L371B, 111.5, 621))
  // }
   // if (answers.L371B) {
    // page9coords.push(boolCoords(answers.L373, 115, 600))
    // }
  // if (answers.L377) {
  page9coords.push(boolCoords(answers.L377, 117.5, 553.5))
  // }
  // if (answers.L379) {
  page9coords.push(boolCoords(answers.L379, 213.5, 518))
  // }
  // if (answers.L388A) {
  page9coords.push(boolCoords(answers.L388A, 65, 368))
  // }
  // if (answers.L388B) {
  page9coords.push(boolCoords(answers.L388B, 385, 368))
  // }
  // if (answers.L389A) {
  page9coords.push(boolCoords(answers.L389A, 86, 344))
  // }
  // if (answers.L391) {
  page9coords.push(boolCoords(answers.L391, 20, 300))
  // }
  // if (answers.L394A) {
  page9coords.push(boolCoords(answers.L394A, 280, 242))
  // }
  // if (answers.L394B) {
  page9coords.push(boolCoords(answers.L394B, 364, 242))
  // }
  // if (answers.L394C) {
  page9coords.push(boolCoords(answers.L394C, 400, 242))
  // }
  // if (answers.L394D) {
  page9coords.push(boolCoords(answers.L394D, 470, 242))
  // }
  // if (answers.L396A) {
  page9coords.push(boolCoords(answers.L396A, 280, 188))
  // }
  // if (answers.L396B) {
  page9coords.push(boolCoords(answers.L396B, 364, 188))
  // }
  // if (answers.L396C) {
  page9coords.push(boolCoords(answers.L396C, 400, 188))
  // }
  // if (answers.L396D) {
  page9coords.push(boolCoords(answers.L396D, 470, 188))
  // }


  var page10coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 715 },
    // if (answers.L403) {
    { text: "X", x_coord: 65, y_coord: 652 },
    // if (answers.L404D {
    { text: "X", x_coord: 65, y_coord: 632 },
    { text: "sig_path", x_coord: 380, y_coord: 448 },
  ]

  var page11coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 708 },
    { text: answers.L454, x_coord: 110, y_coord: 584 },
  ]

  var page12coords = [
    { text: answers.DATE, x_coord: 425, y_coord: 731 },
    { text: answers.L12, x_coord: 160, y_coord: 708 },
     
 
    { text: "sig_path", x_coord: 375, y_coord: 483 },
    { text: "sig_path", x_coord: 395, y_coord: 135 },
  ]
  page12coords.push(boolCoords(answers.L494, 153, 578))

  var page13coords = [
    { text: "sig_path", x_coord: 56, y_coord: 135 },
    {text:answers.DATE, x_coord: 225 , y_coord: 134},
     // if (answers.L494) {
  // page12coords.push(boolCoords(answers.L494, 470, 188))
  // }
  ]

  return [page1coords, page2coords, page3coords, page4coords, page5coords, page6coords, page7coords, page8coords, page9coords, page10coords, page11coords, page12coords, page13coords]

}

module.exports = purchaseCoords
