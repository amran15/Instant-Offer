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
    if(answer.id)doc.text(`${answers.id}`, 10,10,)
    if(answer.DATE)doc.text(`${answers.DATE}`, 132,33)//132, 33
    if(answer.BUYER_1)doc.text(`${answers.BUYER_1}`, 40,46)//40, 46
    if(answer.L6A)doc.text(`${answers.L6A}`, 30,66)//40, 53 number 6 on the pdf page
    if(answer.L6B)doc.text(`${answers.L6B}`, 145,66) //dollar amount on number 6
    if(answer.L7A)doc.text('X', 105,32) // if(answer.L7A)doc.text(`X`, 135,42) /// does this line exist? i don't see it on the DOM/PDF 
    if(answer.L7B)doc.text(`${answers.L7B}`, 110,72) //110, 72
    if(answer.L12)doc.text(`${answers.L12}`, 45,102) //
    if(answer.L13A)doc.text(`${answers.L13A}`, 42,108)
    if(answer.L13B)doc.text(`${answers.L13B}`, 127,108)
    if(answer.L14)doc.text(`${answers.L14}`, 35,118)
    // if(answer.L29)doc.text(`${answers.L29}`, 127,108)


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
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L141)doc.text(`${answers.L141}`, 10,10)
    if(answer.L145A)doc.text(`${answers.L145A}`, 10,10)
    // L145 B
    answer.L145B  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    if(answer.L146)doc.text(`${answers.L146}`, 10,10)
    if(answer.L156)doc.text(`${answers.L156}`, 10,10)
    // L159
    answer.L159  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    if(answer.L160A)doc.text(`${answers.L160A}`, 10,10)
    if(answer.L160B)doc.text(`${answers.L160B}`, 10,10)
    if(answer.L161A)doc.text(`${answers.L161A}`, 10,10)
    if(answer.L161B)doc.text(`${answers.L161B}`, 10,10)
    // L170
    answer.L170  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L172
    answer.L172  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L178
    answer.L178  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // -----------------------------------------------------------------------------------------
    //                              page # 5
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_5, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L192)doc.text(`${answers.L192}`, 10,10)
    if(answer.L198)doc.text(`X`, 10,10)
    if(answer.L201)doc.text(`X`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L210)doc.text(`X`, 10,10)

    // NEED TO LOOK INTO L215 AND L217
    // L215
    if(answer.L215A)doc.text(`X`, 10,10)
    if(answer.L215B)doc.text(`X`, 10,10)
    if(answer.L215C)doc.text(`X`, 10,10)
    if(answer.L215D)doc.text(`X`, 10,10)
    if(answer.L215E)doc.text(`${answers.L215E}`, 10,10)
    // L217
    if(answer.L217A)doc.text(`X`, 10,10)
    if(answer.L217B)doc.text(`X`, 10,10)
    if(answer.L217C)doc.text(`X`, 10,10)
    if(answer.L217D)doc.text(`X`, 10,10)
    if(answer.L217E)doc.text(`${answers.L217E}`, 10,10)

    // L219
    answer.L219  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // -----------------------------------------------------------------------------------------
    //                              page # 6
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_6, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    // l226
    answer.l226  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L228
    answer.L228  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L231
    answer.L231  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L233
    answer.L233  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L239
    answer.L239  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L250
    answer.L250  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)

    if(answer.L251)doc.text(`${answers.L251}`, 10,10)
    if(answer.L252)doc.text(`${answers.L252}`, 10,10)

    if(answer.L257A)doc.text(`X`, 10,10)
    if(answer.L257B)doc.text(`X`, 10,10)
    if(answer.L257C)doc.text(`X`, 10,10)
    if(answer.L257D)doc.text(`X`, 10,10)

    if(answer.L258A)doc.text(`X`, 10,10)
    if(answer.L258B)doc.text(`${answers.L258B}`, 10,10)

    if(answer.L264)doc.text(`${answers.L264}`, 10,10)

    if(answer.L266)doc.text(`${answers.L266}`, 10,10)

    // -----------------------------------------------------------------------------------------
    //                              page # 7
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_7, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L270)doc.text(`X`, 10,10)
    if(answer.L271)doc.text(`X`, 10,10)

    // -----------------------------------------------------------------------------------------
    //                              page # 8
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_8, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L359)doc.text(`X`, 10,10)
    if(answer.L360)doc.text(`X`, 10,10)
    // -----------------------------------------------------------------------------------------
    //                              page # 9
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_9, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)

    // L371 A
    answer.L371A  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L371 B
    answer.L371B  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L373 
    answer.L373  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L377
    answer.L377  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L379
    answer.L379  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    
    if(answer.L388A)doc.text(`X`, 10,10)
    // L388 B
    answer.L388B  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)
    // L389 
    answer.L389  ?  doc.text(`X`, 10,10)  :  doc.text(`X`, 10,10)

    if(answer.L391)doc.text(`X`, 10,10)

    if(answer.L394)doc.text(`${answer.L394}`, 10,10)
    if(answer.L394)doc.text(`X`, 10,10)
    if(answer.L394)doc.text(`X`, 10,10)
    if(answer.L394)doc.text(`X`, 10,10)
    if(answer.L394)doc.text(`X`, 10,10)
    if(answer.COMPANY_1)doc.text(`${answer.COMPANY_1}`, 10,10)

    if(answer.L396)doc.text(`${answer.L396}`, 10,10)
    if(answer.L396)doc.text(`X`, 10,10)
    if(answer.L396)doc.text(`X`, 10,10)
    if(answer.L396)doc.text(`X`, 10,10)
    if(answer.L396)doc.text(`X`, 10,10)
    if(answer.COMPANY_2)doc.text(`${answer.COMPANY_2}`, 10,10)
    // -----------------------------------------------------------------------------------------
    //                              page # 10
    // ------------------------------------------------------------------------------------------    
    doc.addPage()
    doc.addImage(response.data[0].PAGE_10, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L403)doc.text(`X`, 10,10)
    if(answer.L404)doc.text(`X`, 10,10)
    if(answer.SIGNATURE_BUYER_1)doc.text(`${answers.SIGNATURE_BUYER_1}`, 10,10)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)

    // -----------------------------------------------------------------------------------------
    //                              page # 11
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_11, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L454)doc.text(`${answers.L454}`, 10,10)

    // -----------------------------------------------------------------------------------------
    //                              page # 12
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_12, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)
    if(answer.L12)doc.text(`${answers.L12}`, 10,10)
    if(answer.L490)doc.text(`${answers.L490}`, 10,10)
    if(answer.L494)doc.text(`${answers.L494}`, 10,10)
    if(answer.SIGNATURE_BUYER_1)doc.text(`${answers.SIGNATURE_BUYER_1}`, 10,10)
    if(answer.BUYER_1)doc.text(`${answers.BUYER_1}`, 10,10)
    if(answer.SIGNATURE_BUYER_1)doc.text(`${answers.SIGNATURE_BUYER_1}`, 10,10)



    // -----------------------------------------------------------------------------------------
    //                              page # 13
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_13, 'JPEG',0,0,210,297)
    if(answer.SIGNATURE_BUYER_1)doc.text(`${answers.SIGNATURE_BUYER_1}`, 10,10)
    if(answer.DATE)doc.text(`${answers.DATE}`, 10,10)


    doc.save('a4.pdf')

        
  } catch (error) {
    console.log('pdfOffer listing failed', error);
  }
}

function* pdfOffer() {
  yield takeLatest('FETCH_OFFER', fetchOffer);
}

export default pdfOffer;
