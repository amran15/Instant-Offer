import React, { Component } from 'react';
import { connect } from 'react-redux';

//Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '25px',
    marginTop: '150px',
    color: '#FFF',
  },
  button: {
    marginTop: '15px',
    color: 'white',
  },
  TextField: {
    borderColor: 'white',
  },
  link: {
    margin: '20px',
  }
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000080' },
  },
});

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            {this.props.errors.loginMessage && (
              <h2
                className="alert"
                role="alert"
              >
                {this.props.errors.loginMessage}
              </h2>
            )}
            <form onSubmit={this.login}>
              <center>
                <h1>Instant Offer</h1>
              </center>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                  style={styles.TextField}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                  }}
                  InputProps={{
                    style: {
                      color: "black"
                    }
                  }}
                />
              </div>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                  color="primary"
                  style={styles.TextField}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                  }}
                  InputProps={{
                    style: {
                      color: "black"
                    }
                  }}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={styles.button}
                  value="Log In"
                  color="primary"
                >
                  Sign In
                </Button>
              </div>
            </form>
            {/* <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </button>
        </center> */}
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
