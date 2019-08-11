import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI       
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class PurchaseCategory6 extends Component {

        state ={
            inspections:{
                propertyInspetion:'',
                purchaseAgreementContigent:'',
                intrusiveTesting:'',
                inspectionDate:'',
                otherInspectionItem:'',

            }
        }


        handleChangeForInspections = (propertyName) => (event) => {
            this.setState({
                inspections:{
                    ...this.state.inspections, [propertyName]:event.target.value,
                }
            })
        }


        handleChangeForCheckbox = (propertyName) => (event) => {  
            this.setState({
                inspections:{
                    ...this.state.inspections,[propertyName]:true,
                }
            })
        } 
    
        handleChangeForCheckboxNo = (propertyName) => (event) => {  
            this.setState({
                inspections:{
                    ...this.state.inspections,[propertyName]:false,
                }
            })
        } 

    handleClick = () => {
        this.props.history.push('/PurchaseAgreement')
    }

    handleClickNext = () => {
        this.props.history.push('/PurchaseCategory7')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Inspections</h2>
                            </center>
                            <h4>Does the buyer agree to have a Property inspection performed at Buyer's expense?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Yes"
                                value={this.state.propertyInspetion}
                                onChange={this.handleChangeForCheckbox('propertyInspetion')}

                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="No"
                                value={this.state.propertyInspetion}
                                onChange={this.handleChangeForCheckboxNo('propertyInspetion')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Is this Purchase Agreement contingent upon any inspections(s) of the Property obtained by Buyer to determine its condition, including any non-intrusive testing or any intrusive testing as allowed pursuant to this Purchase Agreement?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Yes"
                                value={this.state.purchaseAgreementContigent}
                                onChange={this.handleChangeForCheckbox('purchaseAgreementContigent')}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="No"
                                value={this.state.purchaseAgreementContigent}
                                onChange={this.handleChangeForCheckboxNo('purchaseAgreementContigent')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Does the Seller agree to allow Buyer to perform intrusive testing or inspection(s).</h4>                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Yes"
                                value={this.state.intrusiveTesting}
                                onChange={this.handleChangeForCheckbox('intrusiveTesting')}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="No"
                                value={this.state.intrusiveTesting}
                                onChange={this.handleChangeForCheckboxNo('intrusiveTesting')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>All inspection(s), test(s), and resulting negotiations, if any, shall be done within how many Calendar Days of Final Acceptance Date of this Purchase Agreement ("Inspection Period")?</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.inspectionDate}
                                onChange={this.handleChangeForInspections('inspectionDate')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Other Inspection Items:</h4>
                            <TextField
                                id="other_inspection_items"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                value={this.state.otherInspectionItem}
                                onChange={this.handleChangeForInspections('otherInspectionItem')}
                            />
                        </Grid>
                    </Grid>
                </Container>
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
                        <pre>
                            {JSON.stringify(this.state, null, 2)}
                            </pre>         
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory6));