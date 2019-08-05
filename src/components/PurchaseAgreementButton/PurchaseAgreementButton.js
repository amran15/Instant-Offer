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
        secondary: { main: '#E09E19' },
    },
});

class PurchaseAgreementButton extends Component {

    // on the Onclick of this, we will be routed to the Purchase Agreement page
    handleClickOfferDocuments = () => {
        this.props.history.push('/PurchaseAgreement')
    }


    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Button
                        id="OfferDocButton"
                        variant="contained"
                        color="secondary"
                        style={styles.button}
                        onClick={this.handleClickOfferDocuments}
                    >
                        Purchase Agreement
                    </Button>
                </ThemeProvider>
            </div>
        )
    }
}

//bring in redux store to access to it and use props
const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseAgreementButton));


