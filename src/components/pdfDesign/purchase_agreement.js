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

    doc.addImage(this.state.purchase_agreement_pages[0].PAGE_1, 'JPEG',0,0,210,297)
    // for(let i=1; i<13; ++i){
    //   doc.addPage()
    //   doc.addImage(this.state.purchase_agreement_pages[i].PAGE_[i], 'JPEG',0,0,210,297)
    // }
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
