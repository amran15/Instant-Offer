import React, {Component}from 'react';
import jsPDF from 'jspdf';
import axios from 'axios'


class Listing_contract extends Component {

  state={
    listing_contract_pages: []
  }

  componentDidMount(){
    axios.get(`/api/listing/PDF_pages`)
    .then(response =>{
      console.log(response.data)
      this.setState({
        listing_contract_pages: response.data
      })
    }).catch(error =>{
      console.log('WHY ARENT YOU WORKING listing contract?', error)
    })
  }

  handleClick=()=>{
    // alert('banger')
    let doc = new jsPDF()

// -----------------------------------------------------------------------------------------
//                              page # 1
// ------------------------------------------------------------------------------------------
doc.addImage(this.state.listing_contract_pages[0].PAGE_1, 'JPEG',0,0,210,297)
// -----------------------------------------------------------------------------------------
//                              page # 2
// ------------------------------------------------------------------------------------------
doc.addPage()
doc.addImage(this.state.listing_contract_pages[0].PAGE_2, 'JPEG',0,0,210,297)
// -----------------------------------------------------------------------------------------
//                              page # 3
// ------------------------------------------------------------------------------------------
doc.addPage()
doc.addImage(this.state.listing_contract_pages[0].PAGE_3, 'JPEG',0,0,210,297)
// -----------------------------------------------------------------------------------------
//                              page # 4
// ------------------------------------------------------------------------------------------
doc.addPage()
doc.addImage(this.state.listing_contract_pages[0].PAGE_4, 'JPEG',0,0,210,297)
// -----------------------------------------------------------------------------------------
//                              page # 5
// ------------------------------------------------------------------------------------------
doc.addPage()
doc.addImage(this.state.listing_contract_pages[0].PAGE_5, 'JPEG',0,0,210,297)
// -----------------------------------------------------------------------------------------
//                              page # 6
// ------------------------------------------------------------------------------------------
doc.addPage()
doc.addImage(this.state.listing_contract_pages[0].PAGE_6, 'JPEG',0,0,210,297)
// -----------------------------------------------------------------------------------------
//                              page # 7
// ------------------------------------------------------------------------------------------
doc.addPage()
doc.addImage(this.state.listing_contract_pages[0].PAGE_7, 'JPEG',0,0,210,297)
    
    doc.save('a4.pdf')
  }

  render(){
    return (
      <div className="listing_contract">
        <button onClick={this.handleClick}>download Listing Contract PDF</button>
        {/* {JSON.stringify(this.state)} */}
      </div>
    );  
  }
}

export default Listing_contract;