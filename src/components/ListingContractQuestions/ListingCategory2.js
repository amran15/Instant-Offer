import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
​
​
//Material UI       
import { FormControlLabel, RadioGroup, Radio, Button, Container, Grid } from '@material-ui/core';
​
class ListingCategory2 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
        L41: (typeof this.props.listingAnswers.L41 === 'undefined') ? null : this.props.listingAnswers.L41,
        L54: (typeof this.props.listingAnswers.L54 === 'undefined') ? null : this.props.listingAnswers.L54,
        L63: (typeof this.props.listingAnswers.L63 === 'undefined') ? null : this.props.listingAnswers.L63,
        L71: (typeof this.props.listingAnswers.L71 === 'undefined') ? null : this.props.listingAnswers.L71,
        }
    }
​
  handleChangeForRadioButtons = (propertyName) => (event) => {
    this.setState({
      ...this.state, 
      answers: {
        ...this.state.answers, [propertyName]: event.target.value,
      }
    })
  }
​
    handleClick = () => {
        this.props.history.push(`/ListingContract/${this.state.id}`)
    }
​
    handleClickNext = () => {
        console.log("payload", this.state)
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
        this.props.history.push(`/ListingCategory3/${this.state.id}`)
    }
​
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
                            <RadioGroup
                                value={this.props.listingAnswers.L41}
                                onChange={this.handleChangeForRadioButtons('L41')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display listing address on the internet?</h4>
                            <RadioGroup
                                value={this.props.listingAnswers.L54}
                                onChange={this.handleChangeForRadioButtons('L54')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display link of automated valuation of the property on the internet?</h4>
                            <RadioGroup
                                value={this.props.listingAnswers.L63}
                                onChange={this.handleChangeForRadioButtons('L63')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display comments or reviews about property by persons other than Broker on the internet?</h4>
                            <RadioGroup
                                value={this.props.listingAnswers.L71}
                                onChange={this.handleChangeForRadioButtons('L71')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
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
                                    onClick={this.handleClickNext}
                                >
                                    Next
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}
​
const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(ListingCategory2));