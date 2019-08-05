import axios from 'axios';
import jsPDF from 'jspdf';
import { takeLatest } from 'redux-saga/effects';

function* fetchListing(action) {
  try {
      // gets the base64 img files
      yield console.log('hit pdf listing')
      const response = yield axios.get(`/api/listing/PDF_pages`)
      .catch(error =>{
      console.log('WHY ARENT YOU WORKING listing contract?', error)
    })
    yield 
      //gets all data from row ${see page info pages for params details}
      const answers = yield axios({ method: 'get', url:`/api/listing/answers/${action.payload}`})
      .catch(error =>{
        console.log('error in pdf listing getting answers?', error)
      })
    yield
      console.log(answers.data[0].id)//
      const answer = answers.data[0]
        let doc = new jsPDF()
    
    // --------------------------------------------------------------------------------------
    //                              page # 1
    // ------------------------------------------------------------------------------------------
    doc.addImage(response.data[0].PAGE_1, 'JPEG',0,0,210,297)
    // doc.text(`${answer.id}`, 10,10)
    doc.text(`${answer.DATE}`,130,38)
    doc.text(`${answer.DATE}`,136,45)
    doc.text(`${answer.L3}`,117,52)
    doc.text(`${answer.L4}`,52,59)
    doc.text(`${answer.L5}`,35,66)
    doc.text(`${answer.BUYER_1}`,35,73)
    doc.text(`${answer.L7}`,35,80)
    doc.text(`${answer.L8A}`,60,90)
    doc.text(`${answer.L8B}`,105,90)
    doc.text(`${answer.L8C}`,160,90)
    doc.text(`${answer.L9}`,26,97)
    doc.text(`${answer.L12}`,115,113)
    doc.text(`${answer.L13}`,35,120)
    //logic
    answer.L41?
    doc.text(`X`,189,262)//true    
    :
    doc.text(`X`,173,262)//false
    // -----------------------------------------------------------------------------------------
    //                              page # 2
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_2, 'JPEG',0,0,210,297)
    doc.text(`${answer.L3}`,55,35)
    answer.L54 ?
    doc.text(`X`,189,82)//true 
    :
    doc.text(`X`,173,82)//false
    answer.L63 ?
    doc.text(`X`,189,127)//true 
    :
    doc.text(`X`,173,127)//false
    answer.L71 ?
    doc.text(`X`,189,169)//true 
    :
    doc.text(`X`,173,169)//false
    answer.L72 ?
    doc.text(`X`,95,178)//true 
    :
    doc.text(`X`,83,178)//false
    doc.text(`${answer.L7}`,25,185)
    answer.L73 ?
    doc.text(`X`,124,187)//true 
    :
    doc.text(`X`,111,187)//false
    // -----------------------------------------------------------------------------------------
    //                              page # 3
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_3, 'JPEG',0,0,210,297)
    doc.text(`${answer.L3}`,55,35)
    doc.text(`${answer.L115}`,99,148)
    doc.text(`${answer.L118}`,115,164)
    doc.text(`${answer.L119}`,30,170)
    doc.text(`${answer.L121}`,35,183)
    doc.text(`${answer.L131}`,35,233)
    // -----------------------------------------------------------------------------------------
    //                              page # 4
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_4, 'JPEG',0,0,210,297)
    doc.text(`${answer.L3}`,55,35)
    if(answer.L146){ 
      doc.text(`X`,85,57)
      //  line 148
      if(answer.L148A){doc.text(`X`,21,71)}
      if(answer.L148B){doc.text(`${answer.L148B}`,28,70)}
      if(answer.L148C){doc.text(`${answer.L148C}`,92,70)}
      // line 150
      if(answer.L150A){doc.text(`X`,21,82)}
      if(answer.L150B){doc.text(`${answer.L150B}`,28,81)}
      if(answer.L150C){doc.text(`${answer.L150C}`,92,81)}
      // line 152
      if (answer.L152A){doc.text(`X`,21,94)}
      if(answer.L152B){doc.text(`${answer.L152B}`,38,93)}
    }else doc.text(`X`,103,57)//false
    // we did need line 164 in the DB
    answer.L163 ?
    doc.text(`X`,21,159)//true 
    :
    doc.text(`X`,21,165)//false
    // initials
    if(answer.L165A){doc.text(`${answer.L165A}`,21,172)}
    if(answer.L165A){doc.text(`${answer.L165A}`,49,172)}
    answer.L175 ?
    doc.text(`X`,88,231)//true 
    :
    doc.text(`X`,98,231)//false
    // -----------------------------------------------------------------------------------------
    //                              page # 5
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_5, 'JPEG',0,0,210,297)
    doc.text(`${answer.L3}`,55,33)
    // -----------------------------------------------------------------------------------------
    //                              page # 6
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_6, 'JPEG',0,0,210,297)
    doc.text(`${answer.L3}`,55,35)
    // -----------------------------------------------------------------------------------------
    //                              page # 7
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_7, 'JPEG',0,0,210,297)
        
        doc.save('a4.pdf')
  } catch (error) {
    console.log('pdfListing listing failed', error);
  }
}

function* pdfListing() {
  yield takeLatest('FETCH_LISTING', fetchListing);
}

export default pdfListing;

