import React, { Component } from "react";
import { connect } from 'react-redux';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import axios from 'axios';

const styles = {
    title: {
        // textAlign: 'center',
        // fontSize: '20px',
        margin: '25px 0px 25px 40px',
    },
};

class ListingContractSignedIndividualDocs extends Component {

  getPdf = () => {
    window.open('http://localhost:5000/api/listing/pdf')
  }
 
    componentDidMount = () => {
        this.props.dispatch({
            type: 'GET_LISTING_SIGNED_DOCS'
        });
    }

    handleClick = (id) => {
        this.props.dispatch({ type: 'FETCH_LISTING', payload: id })
    }

    render() {
        return (
            <div>
                <button onClick={this.getPdf}/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                {this.props.listingSignedDocs.map(signed => (
                    <div>
                        <CardActionArea>
                            <Card onClick={() => { this.handleClick(signed.id) }}>
                                <Grid item xs={12} container spacing={3}>
                                    <Grid item xs={11}>
                                        <div style={styles.title}>
                                            <h2>{signed.BUYER_1}'s Listing Contract</h2>
                                            <h2>{signed.date}</h2>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item xs={1}
                                        className="arrow"
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center">
                                        <i className="material-icons">arrow_forward_ios</i>
                                    </Grid>
                                </Grid>
                            </Card>
                        </CardActionArea>
                        <br />
                    </div>
                ))}
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(ListingContractSignedIndividualDocs);
