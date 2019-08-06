import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Documents from '../Documents/Documents';
import Drafts from '../Drafts/Drafts';
// import Signature from '../Signature/Signature';
import PurchaseAgreement from '../PurchaseAgreement/PurchaseAgreement';

import './App.css';
import Signature from '../Signature/Signature';

// these are the listing question categories
import ListingContract from '../ListingContract/ListingContract';
import ListingCategory1 from '../ListingContractQuestions/ListingCategory1';
import ListingCategory2 from '../ListingContractQuestions/ListingCategory2';
import ListingCategory3 from '../ListingContractQuestions/ListingCategory3';
import ListingCategory4 from '../ListingContractQuestions/ListingCategory4';
import ListingCategory5 from '../ListingContractQuestions/ListingCategory5';
import ListingCategory6 from '../ListingContractQuestions/ListingCategory6';
import ListingCategory7 from '../ListingContractQuestions/ListingCategory7';
import ListingCategory8 from '../ListingContractQuestions/ListingCategory8';
import ListingReview from '../ListingReview/ListingReview';

//this will hold purchase categories/questions
// import PurchaseCategories from '../PurchaseAgreementQuestions/PurchaseCategories';
import PurchaseCategory1 from '../PurchaseAgreementQuestions/PurchaseCategory1';
import PurchaseCategory2 from '../PurchaseAgreementQuestions/PurchaseCategory2';
import PurchaseCategory3 from '../PurchaseAgreementQuestions/PurchaseCategory3';
import PurchaseCategory4 from '../PurchaseAgreementQuestions/PurchaseCategory4';
import PurchaseCategory5 from '../PurchaseAgreementQuestions/PurchaseCategory5';
import PurchaseCategory6 from '../PurchaseAgreementQuestions/PurchaseCategory6';
import PurchaseCategory7 from '../PurchaseAgreementQuestions/PurchaseCategory7';
import PurchaseCategory8 from '../PurchaseAgreementQuestions/PurchaseCategory8';
import PurchaseCategory9 from '../PurchaseAgreementQuestions/PurchaseCategory9';
import PurchaseAgreementReview from '../PurchaseAgreementReview/PurchaseAgreementReview';


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          {this.props.user.id && <Nav />}
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
              path="/Drafts"
              component={Drafts}
            />
            <ProtectedRoute
              exact
              path="/ListingContract"
              component={ListingContract}
            />
             <ProtectedRoute
              exact
              path="/ListingCategory1"
              component={ListingCategory1}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory2"
              component={ListingCategory2}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory3"
              component={ListingCategory3}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory4"
              component={ListingCategory4}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory5"
              component={ListingCategory5}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory6"
              component={ListingCategory6}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory7"
              component={ListingCategory7}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory8"
              component={ListingCategory8}
            />
              <ProtectedRoute
              exact
              path="/ListingReview"
              component={ListingReview}
            />
            <ProtectedRoute
              exact
              path="/PurchaseAgreement"
              component={PurchaseAgreement}
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
            <ProtectedRoute
              exact
              path="/PurchaseCategory9"
              component={PurchaseCategory9}
            />
             <ProtectedRoute
              exact
              path="/PurchaseAgreementReview"
              component={PurchaseAgreementReview}
            />
            <ProtectedRoute
              exact
              path="/Signature"
              component={Signature}
            />
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
          {/* <Footer /> */}
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
