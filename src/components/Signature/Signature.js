import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import SignatureCanvas, { canvas } from 'react-signature-canvas';

//Material UI       
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



class Signature extends Component {

    state = {
        trimmedDataURL: null
    }

    sigPad = {}

    //this will clear the signature if a mistake was made when signing
    clearSig = () => {
        this.sigPad.clear();
        // console.log('OnClick:', this.state.trimmedDataURL);
    }

    //exit out of the signature page. return to the review page without saving.
    returnToReview = () => {
        this.props.history.push('/ListingContract')
    }

    //this will trim down the signature and get rid of the white space
    //it will capture the signature and save it as image with a png extension
    trimSignature = () => {
        this.setState({
            trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/PNG')
        })
    }

    //this will save the signature once it has been trimmed
    handleClickToSaveSignature = () => {
        console.log('we can save the signature now');
        //POST_SIGNATURE action goes to the sagas with a generator function sendSignatureToDatabase
        this.props.dispatch({ type: 'POST_SIGNATURE', payload: this.state.trimmedDataURL })
    }


    render() {
        const { trimmedDataURL } = this.state;
        return (
            <>
                <div className="sig-canvas">
                    <SignatureCanvas penColor="black"
                        canvasProps={{ width: 500, height: 150, className: 'sigCanvas' }}
                        ref={(ref) => { this.sigPad = ref }} />

    
                    {
                        trimmedDataURL ? <img src={trimmedDataURL} alt="" /> : null
                    }

                   
                </div>
                <Container component="main">
                    <Grid container spacing={4}>
                        <Grid item xs={3}>
                            <div align="left" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.returnToReview} >
                                
                                    Back
                             </Button>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div align="center" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.clearSig}
                                >
                                    Clear
                             </Button>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div align="right" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.trimSignature}
                                >
                                    Trim
                            </Button>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div align="right" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickToSaveSignature}
                                >
                                    Confirm
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }

}


const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(Signature); 
