import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        secondary: { main: '#3CAEA3' },
    },
});

const styles = {
    button: {
        color: 'white',
    },
};


class PurchaseAgreement extends Component {
    // on the Onclick of this, we will be routed to the Purchase Agreement page
    handleClickForPurchaseAgreementDocuments = () => {
        this.props.history.push('/PurchaseAgreement')
        console.log('our PurchaseAgreement documents go here in  a drop down')
    }


    render() {
        return (
            <ThemeProvider theme={theme}>
                <center>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={styles.button}
                        onClick={this.handleClickForPurchaseAgreementDocuments}
                        id="PurchaseAgreementDocButton"
                    >
                        Purchase Agreement
                    </Button>
                </center>
            </ThemeProvider>

        )
    }
}

//bring in redux store to access to it and use props
const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseAgreement));


