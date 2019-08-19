import React, { Component } from "react";
import { connect } from 'react-redux';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
  title: {
    margin: '25px 0px 25px 40px',
  },
};

class ListingContractSignedIndividualDocs extends Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'GET_LISTING_SIGNED_DOCS'
    });
  }

  handleClick = (id) => {
    window.open(`http://localhost:5000/api/listing/pdf/${id}`)

  }

  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        {this.props.listingSignedDocs.map(signed => (
          <div>
            <CardActionArea>
              <Card onClick={() => { this.handleClick(signed.id) }}>
                <Grid item xs={12} container spacing={3}>
                  <Grid item xs={11}>
                    <div style={styles.title}>
                      <h3>{signed.BUYER_1}'s Listing Contract</h3>
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
