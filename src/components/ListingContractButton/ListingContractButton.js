import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const styles = {
    button: {
        color: 'white',
    },
};

const theme = createMuiTheme({
    palette: {
        primary: { main: '#000080' },
    },
});

class ListingContractButton extends Component {

    //this will push us to the ListingContract page
    handleClickListingDocuments = () => {
        this.props.history.push('/ListingContract')
    }

    render() {
        return (
            <div className="ListingDiv">
                <ThemeProvider theme={theme}>
                    <Button
                        id="listingDocButton"
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        onClick={this.handleClickListingDocuments}
                    >
                        Listing Contract
                    </Button>
                </ThemeProvider>
            </div>
        )
    }
}

// bringing redux store so we can have access to it
const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingContractButton));


