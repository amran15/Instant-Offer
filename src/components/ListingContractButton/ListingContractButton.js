import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';

//Material UI
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#173F5F' },
    },
});

class ListingContractButton extends Component {
    handleClickForListingDocuments = () => {
        axios.post('api/listing/save')
        .then(response => {
            console.log(response.data[0].id)
            this.props.history.push(`/ListingContract/${response.data[0].id}`)
        })
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <center>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
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


