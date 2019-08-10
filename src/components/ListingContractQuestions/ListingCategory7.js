import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class ListingCategory7 extends Component {

    state = {
        id: this.props.reduxState.activeUserReducer.id,
        answers: {
            L175: null
        }  
    }

    handleClickForCheckbox = (propertyName, event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event,
            }
        })
    }

    handleClick = () => {
        this.props.history.push('/ListingCategory6')
    }

    handleClickToSave = () => {
        this.props.dispatch({type:'SAVE_ANSWERS', payload: this.state})
    }

    handleClickNext = () => {
        this.props.dispatch({type:'SAVE_ANSWERS', payload: this.state})
        this.props.history.push('/ListingCategory8')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Foreign Investment</h2>
                            </center>
                            <h4>Seller represents and warrants that seller is a foreign person for purpose of income taxation</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L175 === true}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L175', true) }}
                                />
                            }
                            label="Yes"
                        />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L175 === false}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L175', false) }}
                                />
                            }
                            label="No"
                        />
                        <h4>Due to the complexity and potential risks of failing to comply with FIRPTA, Seller should <b>seek appropiate legal and tax advice regarding FIRPTA compliance, as Broker will be unable to confirm whether Seeker is a foreign person or whether the withholding requirements of FIRPTA apply.</b> </h4>
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div align="left" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClick}
                                >
                                    Back
                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="right" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickNext}
                                >
                                    Next
                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div >
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory7));