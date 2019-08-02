import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


class ListingCategory6 extends Component {
    handleClick = () =>{ 
        this.props.history.push('/ListingContract')
    }
    render() {
        return (
            <Container component="main">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div align="left" className="Button">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}
                        >
                            Back
                </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div align="right" className="Button">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}
                        >
                            Save
                </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory6));