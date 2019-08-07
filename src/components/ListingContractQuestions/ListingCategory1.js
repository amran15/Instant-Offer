import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField, InputAdornment } from '@material-ui/core';

class ListingCategory1 extends Component {
    state = {
        generalInfo : {
            streetAddress :'',
            city:'',
            county:'',
            legalDescription:'',
            seller:'',
            broker:'',
            startDate:'',
            endDate: '',
            propertyPrice:'',
            additionalTerms:'',
        }
    }

    handleChangeForGeneralInfo = (propertyName) => (event) => {
        this.setState({
            generalInfo:{
                ...this.state.generalInfo, [propertyName]:event.target.value,
            }
        })
    }



    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickToSave = () => {
        this.props.dispatch({type:'SAVE_LISTING_ANSWER', payload:this.state.generalInfo})
    }


    handleClickNext = () => {
        this.props.history.push('/ListingCategory2')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <center>
                                <h2>General Information</h2>
                            </center>
                            <h4>Property Address</h4>
                            <TextField
                                id="street_address"
                                label="Street Address"
                                fullWidth
                                variant="outlined"
                                value ={this.state.streetAddress}
                                onChange={this.handleChangeForGeneralInfo('streetAddress')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                id="city"
                                fullWidth
                                variant="outlined"
                                value ={this.state.city}
                                onChange={this.handleChangeForGeneralInfo('city')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="County"
                                id="county"
                                fullWidth
                                variant="outlined"
                                value ={this.state.county}
                                onChange={this.handleChangeForGeneralInfo('county')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Legal description of property</h4>
                            <TextField
                                id="legal_description"
                                fullWidth
                                variant="outlined"
                                value ={this.state.legalDescription}
                                onChange={this.handleChangeForGeneralInfo('legalDescription')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who is the Seller?</h4>
                            <TextField
                                id="seller_name"
                                fullWidth
                                variant="outlined"
                                value ={this.state.seller}
                                onChange={this.handleChangeForGeneralInfo('seller')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who is the Broker?</h4>
                            <TextField
                                id="broker_name"
                                fullWidth
                                variant="outlined"
                                value ={this.state.broker}
                                onChange={this.handleChangeForGeneralInfo('broker')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Contract Start Date</h4>
                            <TextField
                                id="start_date"
                                variant="outlined"
                                type="date"
                                value ={this.state.startDate}
                                onChange={this.handleChangeForGeneralInfo('startDate')}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Contract End Date</h4>
                            <TextField
                                id="end_date"
                                variant="outlined"
                                type="date"
                                value ={this.state.endDate}
                                onChange={this.handleChangeForGeneralInfo('endDate')}

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
                                value ={this.state.propertyPrice}
                                onChange={this.handleChangeForGeneralInfo('propertyPrice')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Additional Terms</h4>
                            <TextField
                                id="following_terms"
                                fullWidth
                                variant="outlined"
                                value ={this.state.additionalTerms}
                                onChange={this.handleChangeForGeneralInfo('additionalTerms')}

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
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })

export default connect(mapReduxStateToProps)(withRouter(ListingCategory1));