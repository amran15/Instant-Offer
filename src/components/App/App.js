import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Documents from '../Documents/Documents';
import Drafts from '../Drafts/Drafts';

import ListingDrafts  from '../ListingDrafts/ListingDrafts';
// import Signature from '../Signature/Signature';
import PurchaseAgreement from '../PurchaseAgreement/PurchaseAgreement';

import './App.css';
import ListingContract from '../ListingContract/ListingContract';
import ListingCategories from '../ListingQuestions/ListingCategories';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/documents"
              component={Documents}
            />
            <ProtectedRoute
              exact
              path="/listingDrafts"
              component={ListingDrafts}
            />
            <ProtectedRoute
              exact
              path="/ListingContract"
              component={ListingContract}
            />
            <ProtectedRoute
              exact
              path="/PurchaseAgreement"
              component={PurchaseAgreement}
            />
            <ProtectedRoute
              exact
              path="/ListingCategories"
              component={ListingCategories}
            />
            {/* <ProtectedRoute
              exact
              path="/Signature"
              component={Signature}
            /> */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
