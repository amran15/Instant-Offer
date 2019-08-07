import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#3CAEA3' },
    },
});

class ListingContractButton extends Component {
    //this will push us to the ListingContract page
    handleClickForListingDocuments = () => {
        this.props.history.push('/ListingContract')
        console.log('our listing documents go here in  a drop down')
    }


    render() {
        return (
            <ThemeProvider theme={theme}>
                <center>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleClickForListingDocuments}
                        id="listingDocButton"
                    >
                        Listing Contract
                        </Button>
                </center>
            </ThemeProvider>
        )
    }
}

// bringing redux store so we can have access to it
const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingContractButton));


