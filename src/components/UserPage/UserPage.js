import React from 'react';
import { connect } from 'react-redux';
import ListingContractButton from '../ListingContractButton/ListingContractButton';
import PurchaseAgreementButton from '../PurchaseAgreementButton/PurchaseAgreementButton';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Checkbox, FormControlLabel } from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    {/* <p>Your ID is: {props.user.id}</p> */}
    <ListingContractButton />
    <br/>
    <PurchaseAgreementButton />
    <br/>
    
    {/* <LogOutButton className="log-in" /> */}


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
