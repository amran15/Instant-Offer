import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//Material UI       
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import InputAdornment from '@material-ui/core/InputAdornment';
import { Checkbox } from '@material-ui/core';





class ListingCategory2 extends Component {



    render() {
        return (
            <>
               <p>Option 1. Listing display on the internet.</p>
               <Checkbox/>
               <span>Yes<Checkbox/></span>
               <span>No</span>

               <p>If "No" was selected at Option 1,skip Options 2-4. If "Yes" was selected for option 1, continue to Option 2.</p>
               <p>Option 2. Listing address(house and unit numbers  and street name) display on the internet.</p>
               <Checkbox/>
               <span>Yes<Checkbox/></span>
               <span>No</span>

               <p>Option 3. An automated valuation of the Property listing or a link to an automated valuation of it may be displayed adjacent to the listing.</p>
               <Checkbox/>
               <span>Yes<Checkbox/></span>
               <span>No</span>

               <p>Option 4. Comments or reviews of the Property by persons other than the displaying broker maybe displayed with or attached as a ling to the listing data of the property.</p>
               <Checkbox/>
               <span>Yes<Checkbox/></span>
               <span>No</span>
            <br/>
            <br/>
            <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div align="left">
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Back
                        </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="right">
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Save
                        </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory2));