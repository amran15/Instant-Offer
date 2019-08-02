import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//Material UI
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// // import swal from 'sweetalert';
// import Checkbox from '@material-ui/core/Checkbox';
import { TextField, Checkbox } from '@material-ui/core';





class ListingCategory2 extends Component {
    render() {
        return (
            <>
             
               <p>Option 1. List</p>

               <Checkbox
                               // checked={state.checkedB}
                    // onChange={handleChange(‘checkedB’)}
                            //    value=
                            //    color=
                           /> 
            {/* <TextField
                    // label="Song Title"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth
                    variant="outlined"
                    input type="date"
                /> */}
                
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory2));