import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


// Material UI
import Button from '@material-ui/core/Button';
import { TextField, Checkbox } from '@material-ui/core';




class ListingCategory3 extends Component {
    render() {
        return (
            <>
                <p>LISTED FOR LEASE: the property <Checkbox/>
               <span>IS<Checkbox/></span>
               <span>IS NOT</span> currently listed for lease. If <strong>IS</strong>, the listing broker is</p>
               <TextField
                    // label="Song Title"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                    placeholder="Broker's Name"
                />
                <p>If <strong>IS NOT</strong> Seller <Checkbox/>
               <span><strong>MAY</strong><Checkbox/></span>
               <span><strong>MAY NOT</strong></span> list the Property for lease during the terms of this Contract with another broker.</p>
               <br/>
               <Button variant="contained">Back</Button>
               <Button variant="contained">Save</Button>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory3));