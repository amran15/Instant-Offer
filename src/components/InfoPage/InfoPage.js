import React, {Component} from 'react';
import {connect} from 'react-redux'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  componentDidMount(){
 this.props.dispatch({type: 'FETCH_LISTING', payload: 3})
//  this.props.dispatch({type: 'FETCH_OFFER', payload: 3})
  }
    render() {
        return (
            <p>
                This is the InfoPage page
            </p>
        )
    }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(InfoPage);
