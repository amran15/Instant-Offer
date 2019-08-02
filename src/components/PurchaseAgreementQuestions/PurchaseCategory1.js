import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import swal from 'sweetalert';
import { TextField } from '@material-ui/core';


class PurchaseCategory1 extends Component {

    render() {
        return (
            <>
                <p>Buyer's Name</p>
                <TextField
                    // label="Song Title"
                    id="buyers_name"
                    value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                />
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory1));