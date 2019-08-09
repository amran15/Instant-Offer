import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField, InputAdornment } from '@material-ui/core';

class ListingCategory1 extends Component {
    state = {
        id: this.props.reduxState.activeUserReducer.id,
        answers: {
            L3: '',
            L4: '',
            BUYER_1: '',
            L7: '',
            L8A: '',
            L8C: '',
            L12: '',
            L13: ''
        }
    }

    
    // componentDidMount() {
    //     axios.get(`/api/listing/answers?id=${this.props.reduxState.createNewListingForm.id}`)
    //     .then(({data})=>{
    //         this.setState({
    //             answers: { ...data[0]}
    //         })
    //     })
    // }

    handleChangeForGeneralInfo = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }



    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickToSave = () => {
        this.props.dispatch({type:'SAVE_ANSWERS', payload: this.state})
    }


    handleClickNext = () => {
        this.props.history.push('/ListingCategory2')
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>General Information</h2>
                            </center>
                            <h4>Property Address <i>(street address, city, state, zip code)</i></h4>
                            <TextField
                                id="street_address"
                                label="Street Address"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L3}
                                onChange={this.handleChangeForGeneralInfo('L3')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Legal description of property</h4>
                            <TextField
                                id="legal_description"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L4}
                                onChange={this.handleChangeForGeneralInfo('L4')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who is the Seller?</h4>
                            <TextField
                                id="seller_name"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.BUYER_1}
                                onChange={this.handleChangeForGeneralInfo('BUYER_1')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who is the Broker?</h4>
                            <TextField
                                id="broker_name"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L7}
                                onChange={this.handleChangeForGeneralInfo('L7')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Contract Start Date</h4>
                            <TextField
                                id="start_date"
                                variant="outlined"
                                type="date"
                                value={this.state.answers.L8A}
                                onChange={this.handleChangeForGeneralInfo('L8A')}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Contract End Date</h4>
                            <TextField
                                id="end_date"
                                variant="outlined"
                                type="date"
                                value={this.state.answers.L8C}
                                onChange={this.handleChangeForGeneralInfo('L8C')}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>What is the property price?</h4>
                            <TextField
                                id="property_price"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L12}
                                onChange={this.handleChangeForGeneralInfo('L12')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Additional Terms</h4>
                            <TextField
                                id="following_terms"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L13}
                                onChange={this.handleChangeForGeneralInfo('L13')}

                            />
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
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
                        <Grid item xs={4}>
                            <div align="center" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickToSave}
                                >
                                    Save
                </Button>

                            </div>
                        </Grid>
                        <Grid item xs={4}>
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
                <pre>{JSON.stringify(this.props.reduxState.activeUserReducer, null, 2)}</pre>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })

export default connect(mapReduxStateToProps)(withRouter(ListingCategory1));