import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


// Material UI
// import Button from '@material-ui/core/Button';
import { TextField, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


class ListingCategory3 extends Component {
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory3));