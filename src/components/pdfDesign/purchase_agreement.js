import React, {Component}from 'react';
import jsPDF from 'jspdf';
import axios from 'axios'


class Purchase_agreement extends Component {

  state={
    purchase_agreement_pages: []
  }

  componentDidMount(){
    axios.get(`/api/purchase/PDF_pages`)
    .then(response =>{
      console.log(response.data)
      this.setState({
        purchase_agreement_pages: response.data
      })
    }).catch(error =>{
      console.log('WHY ARENT YOU WORKING? purchase agreement', error)
    })
  }

  handleClick=()=>{
     alert('banger')
    let doc = new jsPDF()

    // -----------------------------------------------------------------------------------------
    //                              page # 1
    // ------------------------------------------------------------------------------------------
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_1, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 2
    // -----------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_1, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 3
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_3, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 4
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_4, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 5
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_5, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 6
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_6, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 7
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_7, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 8
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_8, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 9
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_9, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 10
    // ------------------------------------------------------------------------------------------    
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_10, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 11
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_11, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 12
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_12, 'JPEG',0,0,210,297)
    // -----------------------------------------------------------------------------------------
    //                              page # 13
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_13, 'JPEG',0,0,210,297)

    doc.save('a4.pdf')
  }

  render(){
    return (
      <div className="purchase_agreement">
        <button onClick={this.handleClick}>download Purchase Agreement PDF</button>
        {/* {JSON.stringify(this.state)} */}
      </div>
    );  
  }
}

export default Purchase_agreement;
