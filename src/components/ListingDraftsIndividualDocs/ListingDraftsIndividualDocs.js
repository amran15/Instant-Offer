import React, { Component } from "react";
// import { connect } from 'react-redux';

//Material UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

const styles = {
    title: {
        // textAlign: 'center',
        // fontSize: '20px',
        margin: '25px 0px 25px 40px',
        // marginTop: '40px',
    },
};

class ListingDraftsIndividualDocs extends Component {
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
             
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h3>Bob's Purchase Agreement</h3>
                                    <p>August 1, 2019</p>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i class="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
            </div>
        )
    }
}
export default ListingDraftsIndividualDocs;