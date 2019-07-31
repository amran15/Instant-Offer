import React from 'react';
import {Component} from  'react';
import {connect} from 'react-redux';
import SignatureCanvas from 'react-signature-canvas';

class Signature extends Component {
    
    state = {
        trimmedDataURL: null
    }

    sigPad = {}

    //this will clear the signature if a mistake was made when signing
    clearSig = () => {
        this.sigPad.clear();
        console.log('OnClick:', this.state.trimmedDataURL);
    }

    //this will trim down the signature and get rid of the white space
    //it will capture the signature and save it as image with a png extension
    trimSignature = () => {
        this.setState({
            trimmedDataUR: this.sigPad.getTrimmedCanvas().toDataURL('image/PNG')
        })
    }

    //this will save the signature once it has been trimmed
    handleClickToSaveSignature = () => {
        console.log('we can save the signature now');
        //POST_SIGNATURE action goes to the sagas with a generator function sendSignatureToDatabase
        // this.props.dispatch ({type:'POST_SIGNATURE', payload:this.state.trimmedDataURL})
        }


    render() {
        const { trimmedDataURL } = this.state;
        return(
            <>
            <div className="sig-canvas">
                <SignatureCanvas penColor="black" canvasProps={{width: 500, height:150, className:'sigCanvas'}} ref={(ref) => {this.sigPad = ref}}/>
            </div>
            <div>
                <button onClick={this.clearSig}>Clear</button>
                <button onClick={this.handleClickToSaveSignature}>Confirm</button>
                <button onClick={this.trimSignature}>Trim</button>
            </div>
            {
                trimmedDataURL ? <img src={trimmedDataURL} alt=""/> : null
            }
            </>
        )
    }

}


const mapReduxToStateToProps = reduxState => ({reduxState})
export default connect(mapReduxToStateToProps)(Signature);
