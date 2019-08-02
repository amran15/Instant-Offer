import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI 
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';



class ListingCategory8 extends Component {
    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Agency Representation</h2>
                            </center>
                        </Grid>
                    </Grid>
                    <p>Seller's Instructions to Broker:</p>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Checkbox
                                value="checkedB"
                                color="primary"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory8));