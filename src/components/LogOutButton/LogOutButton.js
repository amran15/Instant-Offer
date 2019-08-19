import React from 'react';
import { connect } from 'react-redux';

//Material UI
import ListItemText from '@material-ui/core/ListItemText';

const LogOutButton = props => (
  <ListItemText  
  className={props.className}
  onClick={() => props.dispatch({ type: 'LOGOUT' })}
  primary="Log Out">
  </ListItemText>
);

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
