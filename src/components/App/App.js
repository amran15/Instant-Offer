import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import './App.css';

import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Drafts from '../Drafts/Drafts';
import PurchaseAgreement from '../PurchaseAgreement/PurchaseAgreement';
import Signature from '../Signature/Signature';
import PurchaseSignature from '../Signature/PurchaseSignature';
import SignedDocs from '../SignedDocs/SignedDocs';

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
// import ListingReview from '../ListingReview/ListingReview';

//this will hold purchase categories/questions
import PurchaseCategory1 from '../PurchaseAgreementQuestions/PurchaseCategory1';
import PurchaseCategory2 from '../PurchaseAgreementQuestions/PurchaseCategory2';
import PurchaseCategory3 from '../PurchaseAgreementQuestions/PurchaseCategory3';
import PurchaseCategory4 from '../PurchaseAgreementQuestions/PurchaseCategory4';
import PurchaseCategory5 from '../PurchaseAgreementQuestions/PurchaseCategory5';
import PurchaseCategory6 from '../PurchaseAgreementQuestions/PurchaseCategory6';
import PurchaseCategory7 from '../PurchaseAgreementQuestions/PurchaseCategory7';
import PurchaseCategory8 from '../PurchaseAgreementQuestions/PurchaseCategory8';
import PurchaseCategory9 from '../PurchaseAgreementQuestions/PurchaseCategory9';
// import PurchaseAgreementReview from '../PurchaseAgreementReview/PurchaseAgreementReview';

//this component will hold all of our protected and unprotected routes
//protected routes can only be accessed if and when logged in
//upon logging in, we dispatch 'FETCH_USER' saga/reducer.


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
              path="/signed-documents"
              component={SignedDocs}
            />
            <ProtectedRoute
              exact
              path="/Drafts"
              component={Drafts}
            />
            <ProtectedRoute
              exact
              path="/ListingContract/:id"
              component={ListingContract}
            />
             <ProtectedRoute
              exact
              path="/ListingCategory1/:id"
              component={ListingCategory1}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory2/:id"
              component={ListingCategory2}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory3/:id"
              component={ListingCategory3}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory4/:id"
              component={ListingCategory4}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory5/:id"
              component={ListingCategory5}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory6/:id"
              component={ListingCategory6}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory7/:id"
              component={ListingCategory7}
            />
            <ProtectedRoute
              exact
              path="/ListingCategory8/:id"
              component={ListingCategory8}
            />
              {/* <ProtectedRoute
              exact
              path="/ListingReview"
              component={ListingReview}
            /> */}
            <ProtectedRoute
              exact
              path="/PurchaseAgreement/:id"
              component={PurchaseAgreement}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory1/:id"
              component={PurchaseCategory1}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory2/:id"
              component={PurchaseCategory2}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory3/:id"
              component={PurchaseCategory3}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory4/:id"
              component={PurchaseCategory4}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory5/:id"
              component={PurchaseCategory5}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory6/:id"
              component={PurchaseCategory6}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory7/:id"
              component={PurchaseCategory7}
            />
             <ProtectedRoute
              exact
              path="/PurchaseCategory8/:id"
              component={PurchaseCategory8}
            />
            <ProtectedRoute
              exact
              path="/PurchaseCategory9/:id"
              component={PurchaseCategory9}
            />
             {/* <ProtectedRoute
              exact
              path="/PurchaseAgreementReview"
              component={PurchaseAgreementReview}
            /> */}
            <ProtectedRoute
              exact
              path="/Signature/:id"
              component={Signature}
            />
             <ProtectedRoute
              exact
              path="/PurchaseSignature/:id"
              component={PurchaseSignature}
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
