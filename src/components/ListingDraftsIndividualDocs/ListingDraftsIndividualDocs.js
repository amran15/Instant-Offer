import React, { Component } from "react";
// import { connect } from 'react-redux';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

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
                <CardActionArea>
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={11}>
                                <div style={styles.title}>
                                    <h2>Bob's Listing Contract</h2>
                                    <h2>August 1, 2019</h2>
                                </div>
                            </Grid>
                            <Grid
                                item xs={1}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i class="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                </CardActionArea>
                <br />
            </div>
        )
    }
}
export default ListingDraftsIndividualDocs;