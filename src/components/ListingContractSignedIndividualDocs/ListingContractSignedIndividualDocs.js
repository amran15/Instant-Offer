import React, { Component } from "react";
import { connect } from 'react-redux';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PreviewIcon from '@material-ui/icons/OpenInNew';
// import DownloadIcon from '@material-ui/icons/SaveAlt';
import swal from 'sweetalert';

const styles = {
  title: {
    fontSize: '10px',
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

  handleDelete = (doc) => {
    swal({
      title: "Confirm Delete",
      text: "Once deleted, you will not be able to recover this file.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your file has been deleted!", {
            icon: "success",
          });
          this.props.dispatch({ type: 'DELETE_LISTING_DOC', payload: doc })
        } else {
          swal("Your file is safe!");
        }
      });
  }

  render() {
    return (
      <div>
        {this.props.listingSignedDocs.map(signed => (
          <div>
            <Card>
              <Grid item xs={12} container spacing={3}>
                <Grid item xs={10}>
                  <div style={styles.title}>
                    <h2>{signed.BUYER_1}'s Listing Contract</h2>
                  </div>
                </Grid>
                <Grid
                  item xs={2}
                  container
                  direction="row"
                  justify="right"
                  alignItems="center"
                >
                  <IconButton onClick={() => { this.handleDelete(signed) }}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => { this.handleClick(signed.id) }}>
                    <PreviewIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Card>
            <br />
          </div>
        ))}
      </div>
    )
  }
}

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(ListingContractSignedIndividualDocs);
