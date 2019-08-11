import axios from 'axios';
import jsPDF from 'jspdf';
import { takeLatest } from 'redux-saga/effects';

function* fetchOffer(action) {
  try {
      // gets the base64 img files
      yield console.log('hit pdf offer')
      const response = yield axios.get(`/api/purchase/PDF_pages`)
      .catch(error =>{
      console.log('WHY ARENT YOU WORKING purchase contract?', error)
    })
    //gets all data from row ${see page info pages for params details}
    yield 
      const answers = yield axios({ method: 'get', url:`/api/purchase/answers/${action.payload}`})
      .catch(error =>{
        console.log('error in pdf offer getting answers?', error)
      })
    yield
    console.log(answers.data[0].id)
    const answer = answers.data[0];
    let doc = new jsPDF()
    // -----------------------------------------------------------------------------------------
    //                              page # 1
    // ------------------------------------------------------------------------------------------
    
    doc.addImage(response.data[0].PAGE_1, 'JPEG',0,0,210,297)
    if(answer.id)doc.text(`${answers.id}`, 10,10)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.BUYER_1)doc.text(`${answers.BUYER_1}`, 10,10)
    if(answer.L6A)doc.text(`${answers.L6A}`, 10,10)
    if(answer.L6B)doc.text(`${answers.L6B}`, 10,10)
    if(answer.L7A)doc.text(`X`, 10,10)
    if(answer.L7B)doc.text(`${answers.L7B}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L14)doc.text(`${answers.L14}`, 10,10)
    if(answer.L29)doc.text(`${answers.L29}`, 10,10)
    if(answer.L32)doc.text(`${answers.L32}`, 10,10)
    if(answer.L34)doc.text(`${answers.L34}`, 10,10)
    if(answer.L35)doc.text(`${answers.L35}`, 10,10)
    if(answer.L39)doc.text(`${answers.L39}`, 10,10)
    if(answer.L40)doc.text(`${answers.L40}`, 10,10)
    if(answer.L41)doc.text(`${answers.L41}`, 10,10)
    if(answer.L45)doc.text(`${answers.L45}`, 10,10)
    // -----------------------------------------------------------------------------------------
    //                              page # 2
    // -----------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_2, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    // L49
    answer.L49 ?  doc.text(`X`, 10,10)   :   doc.text(`X`, 10,10)
    // L53
    answer.L53  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L54
    answer.L54  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    if(answer.L55)doc.text(`${answers.L55}`, 10,10)
    if(answer.L57)doc.text(`X`, 10,10)
    if(answer.L58)doc.text(`X`, 10,10)
    if(answer.L59)doc.text(`X`, 10,10)
    if(answer.L60)doc.text(`X`, 10,10)
    if(answer.L61)doc.text(`X`, 10,10)
    if(answer.L62A)doc.text(`X`, 10,10)
    if(answer.L62B)doc.text(`${answers.L62B}`, 10,10)
    if(answer.L63)doc.text(`${answers.L63}`, 10,10)
    if(answer.L64)doc.text(`${answers.L64}`, 10,10)
    if(answer.L70)doc.text(`X`, 10,10)
    // L73
    answer.L73  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    if(answer.L76)doc.text(`X`, 10,10)
    if(answer.L77)doc.text(`${answers.L77}`, 10,10)
    // -----------------------------------------------------------------------------------------
    //                              page # 3
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_3, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L114)doc.text(`X`, 10,10)
    if(answer.L115)doc.text(`X`, 10,10)
    if(answer.L118)doc.text(`${answers.L118}`, 10,10)
    // L127
    answer.L127   ?   doc.text(`X`, 10,10)  :   doc.text(`X`, 10,10)
    if(answer.L133)doc.text(`${answers.L133}`, 10,10)
    // -----------------------------------------------------------------------------------------
    //                              page # 4
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_4, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 5
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_5, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 6
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_6, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 7
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_7, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 8
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_8, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 9
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_9, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 10
    // ------------------------------------------------------------------------------------------    
    doc.addPage()
    doc.addImage(response.data[0].PAGE_10, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 11
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_11, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 12
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_12, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 13
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_13, 'JPEG',0,0,210,297)

    doc.save('a4.pdf')

        
  } catch (error) {
    console.log('pdfOffer listing failed', error);
  }
}

function* pdfOffer() {
  yield takeLatest('FETCH_OFFER', fetchOffer);
}

export default pdfOffer;
