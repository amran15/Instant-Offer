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
import ListingDrafts  from '../ListingDrafts/ListingDrafts';
// import Signature from '../Signature/Signature';
import PurchaseAgreement from '../PurchaseAgreement/PurchaseAgreement';

import './App.css';
import ListingContract from '../ListingContract/ListingContract';
import PurchaseCategories from '../PurchaseAgreementQuestions/PurchaseCategories';
import PurchaseCategory1 from '../PurchaseAgreementQuestions/PurchaseCategory1';
import PurchaseCategory2 from '../PurchaseAgreementQuestions/PurchaseCategory2';
import PurchaseCategory3 from '../PurchaseAgreementQuestions/PurchaseCategory3';
import PurchaseCategory4 from '../PurchaseAgreementQuestions/PurchaseCategory4';
import PurchaseCategory5 from '../PurchaseAgreementQuestions/PurchaseCategory5';
import PurchaseCategory6 from '../PurchaseAgreementQuestions/PurchaseCategory6';
import PurchaseCategory7 from '../PurchaseAgreementQuestions/PurchaseCategory7';
import PurchaseCategory8 from '../PurchaseAgreementQuestions/PurchaseCategory8';

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
              path="/PurchaseCategories"
              component={PurchaseCategories}
            /> 
             <ProtectedRoute
              exact
              path="/PurchaseCategory1"
              component={PurchaseCategory1}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory2"
              component={PurchaseCategory2}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory3"
              component={PurchaseCategory3}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory4"
              component={PurchaseCategory4}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory5"
              component={PurchaseCategory5}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory6"
              component={PurchaseCategory6}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory7"
              component={PurchaseCategory7}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory8"
              component={PurchaseCategory8}
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
