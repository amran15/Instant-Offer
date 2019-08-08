import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//Material UI       
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Checkbox, FormControlLabel } from '@material-ui/core';


class ListingCategory2 extends Component {
    state = {
        dataFeedOptions: {
            L41:'',
            L54:'',
            L63:'',
            L71:'',
        }
    }


    handleChangeForDataFeedOptions = (propertyName) => (event) => {
        this.setState({
            dataFeedOptions: {
                ...this.state.dataFeedOptions, [propertyName]:true,
            }
        })
    }


    handleChangeForDataNo = (propertyName) => (event) => {
        this.setState({
            dataFeedOptions: {
                ...this.state.dataFeedOptions, [propertyName]:false,
            }
        })
    }




    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickToSave = () => {
        this.props.dispatch({type:'POST_DATA_FEED_OPTIONS', payload:this.state.dataFeedOptions})
    }


    handleClickNext = () => {
        this.props.history.push('/ListingCategory3')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>MLS Data Feed Options</h2>
                            </center>
                            <h4>Display listing on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="Yes"
                                value={this.state.dataFeedOptions.L41}
                                onChange={this.handleChangeForDataFeedOptions('L41')}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="No"
                                value={this.state.dataFeedOptions.L41}
                                onChange={this.handleChangeForDataFeedOptions('L41')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display listing address on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="Yes"
                                value={this.state.dataFeedOptions.L54}
                                onChange={this.handleChangeForDataFeedOptions('L54')}

                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="No"
                                value={this.state.dataFeedOptions.L54}
                                onChange={this.handleChangeForDataNo('L54')}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display link of automated valuation of the property on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="Yes"
                                value={this.state.dataFeedOptions.L63}
                                onChange={this.handleChangeForDataFeedOptions('L63')}

                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="No"
                                value={this.state.dataFeedOptions.L63}
                                onChange={this.handleChangeForDataFeedOptions('L63')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display comments or reviews about property by persons other than Broker on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="Yes"
                                value={this.state.dataFeedOptions.L63}
                                onChange={this.handleChangeForDataFeedOptions('L71')}

                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="No"
                                value={this.state.dataFeedOptions.L63}
                                onChange={this.handleChangeForDataFeedOptions('L71')}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
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
                        <Grid item xs={4}>
                            <div align="center" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickToSave}
                                >
                                    Save
                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="right" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickNext}
                                >
                                    Next
                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>

            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory2));