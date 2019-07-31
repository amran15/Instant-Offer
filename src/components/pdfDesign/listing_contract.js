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

    doc.addImage(this.state.listing_contract_pages[0].img, 'JPEG',0,0,210,297)
    for(let i=1; i<7; ++i){
      doc.addPage()
      doc.addImage(this.state.listing_contract_pages[i].img, 'JPEG',0,0,210,297)
    }
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