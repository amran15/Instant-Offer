import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';






class PurchaseAgreement extends Component {
    render() {
        return (
            <p>
                This is the Purchase Agreement 
            </p>
        )
    }
}


const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(PurchaseAgreement);
// export default PurchaseAgreement;