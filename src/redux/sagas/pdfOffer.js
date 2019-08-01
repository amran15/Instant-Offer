import axios from 'axios';
import jsPDF from 'jspdf';
import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchListing() {
  try {
    yield console.log('hit pdf offer')
    const response = yield axios.get(`/api/listing/PDF_pages`)
    .catch(error =>{
      console.log('WHY ARENT YOU WORKING listing contract?', error)
    })
    yield

        let doc = new jsPDF()
    
    // --------------------------------------------------------------------------------------
    //                              page # 1
    // ------------------------------------------------------------------------------------------
    doc.addImage(response.data[0].PAGE_1, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 2
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_2, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 3
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_3, 'JPEG',0,0,210,297)
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
        
        doc.save('a4.pdf')
  } catch (error) {
    console.log('pdfListing listing failed', error);
  }
}

function* pdfListing() {
  yield takeLatest('FETCH_OFFER', fetchListing);
}

export default pdfListing;
