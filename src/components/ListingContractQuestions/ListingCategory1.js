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
        generalInformation: {
            L3: '',
            city: '',
            county: '',
            L4: '',
            L6: '',
            L7: '',
            L8: '',
            L9: '',
            L12: '',
            L13: '',
        }
    }

    componentDidMount() {
        axios.get(`/api/listing/answers?id=${this.props.reduxState.createNewListingForm.id}`)
        .then(({data})=>{
            this.setState({
                generalInformation: { ...data[0]}
            })
        })
    }

    handleChangeForGeneralInfo = (propertyName) => (event) => {
        this.setState({
            generalInformation: {
                ...this.state.generalInformation, [propertyName]: event.target.value,
            }
        })
    }



    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickToSave = () => {
        // this.props.dispatch({type:'PUT', payload:this.state.generalInformation})
        //PUT request to update general info 
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
                            <h4>Property Address</h4>
                            <TextField
                                id="street_address"
                                label="Street Address"
                                fullWidth
                                variant="outlined"
                                value={this.state.generalInformation.L3}
                                onChange={this.handleChangeForGeneralInfo('streetAddress')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                id="city"
                                fullWidth
                                variant="outlined"
                                value={this.state.generalInformation.city}
                                onChange={this.handleChangeForGeneralInfo('city')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="County"
                                id="county"
                                fullWidth
                                variant="outlined"
                                value={this.state.generalInformation.county}
                                onChange={this.handleChangeForGeneralInfo('county')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Legal description of property</h4>
                            <TextField
                                id="legal_description"
                                fullWidth
                                variant="outlined"
                                value={this.state.generalInformation.L4}
                                onChange={this.handleChangeForGeneralInfo('legalDescription')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who is the Seller?</h4>
                            <TextField
                                id="seller_name"
                                fullWidth
                                variant="outlined"
                                value={this.state.generalInformation.L6}
                                onChange={this.handleChangeForGeneralInfo('seller')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who is the Broker?</h4>
                            <TextField
                                id="broker_name"
                                fullWidth
                                variant="outlined"
                                value={this.state.generalInformation.L7}
                                onChange={this.handleChangeForGeneralInfo('broker')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Contract Start Date</h4>
                            <TextField
                                id="start_date"
                                variant="outlined"
                                type="date"
                                value={this.state.generalInformation.L8}
                                onChange={this.handleChangeForGeneralInfo('L8')}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Contract End Date</h4>
                            <TextField
                                id="end_date"
                                variant="outlined"
                                type="date"
                                value={this.state.generalInformation.L9}
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
                                value={this.state.generalInformation.L12}
                                onChange={this.handleChangeForGeneralInfo('propertyPrice')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Additional Terms</h4>
                            <TextField
                                id="following_terms"
                                fullWidth
                                variant="outlined"
                                value={this.state.generalInformation.L13}
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