import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import SignatureCanvas, { canvas } from 'react-signature-canvas';

//Material UI       
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';


const styles = {
    Container: {
        marginTop: '465px',
    },
};

class Signature extends Component {

    state = {
        trimmedDataURL: null
    }

    sigPad = {}

    //this will clear the signature if a mistake was made when signing
    clearSig = () => {
        this.sigPad.clear();
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
        swal({
            title: "Signature Saved!",
            text: "",
            icon: "success",
            button: "Ok",
        }).then(() => { 
            this.props.history.push('/signed-documents')
        })
    }


    render() {
        const { trimmedDataURL } = this.state;
        return (
            <div>
                <div className="sig-canvas">
                    <SignatureCanvas penColor="black"
                        canvasProps={{ width: 1598, height: 300, className: 'sigCanvas' }}
                        ref={(ref) => { this.sigPad = ref }} />
                    {
                        trimmedDataURL ? <img src={trimmedDataURL} alt="" /> : null
                    }
                </div>
                <Container
                    component="main"
                    style={styles.Container}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={3}>

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.returnToReview}
                            >
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.clearSig}
                            >
                                Clear
                                </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.trimSignature}
                            >
                                Trim
                                </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.handleClickToSaveSignature}
                            >
                                Confirm
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }

}


const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(Signature); 
