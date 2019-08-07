import React from 'react';
import { connect } from 'react-redux';
import ListingContractButton from '../ListingContractButton/ListingContractButton';
import PurchaseAgreementButton from '../PurchaseAgreementButton/PurchaseAgreementButton';

//Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const styles = {
  Grid: {
    margin: '100px 0px 0px 0px',
  },
};

const UserPage = (props) => (
  <div>
    <Grid
      item xs={12}
      style={styles.Grid}
    >
      <center>
        <h1>Welcome, {props.user.username}!</h1>
        <h4>Please select one of the forms below to begin.</h4>
      </center>
      <br />
      <div align="center">
        <Container component="main" maxWidth="xs">
          <Grid item xs={12}>
            <ListingContractButton />
            <br />
            <br />
          </Grid>
          <Grid item xs={12}>
            <PurchaseAgreementButton />
          </Grid>
        </Container>
      </div>
    </Grid>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
