import React, { Component } from 'react';
import './ComposingBoard.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import config from '../../config/config.js';
import { addComment } from '../../Services/commentsAPI.js';

class ComposingBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      message: '',
      isLoading: false,
      error: null,
    };
  }

  onSubmitClicked = () => {
    this.setState({ isLoading: true });

    addComment(this.state.mail, this.state.message)
      .then(result => {
        this.setState({ isLoading: false });
        this.props.onCommentSubmit(result.data.comment);
        this.setState({
          message: '',
          mail: ''
        });
        this.props.showSnackBar('Comment added!');
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false
        });
        this.props.showSnackBar('An error occurred while adding comment: ' + error);
      }
      );
  };

  onMailChanged = (e) => {
    this.setState({ mail: e.target.value });
  };

  onMessageChanged = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div>
        <TextField
          label="Email"
          className="text-fields"
          margin="normal"
          onChange={this.onMailChanged}
          value={this.state.mail}
        />
        <br />
        <TextField
          label="message"
          multiline
          rows="4"
          className="text-fields"
          margin="normal"
          onChange={this.onMessageChanged}
          value={this.state.message}
        />
        <br />
        <div className="loading" hidden={this.state.isLoading === false ? 'hidden' : null}>
          Adding comment...
        </div>
        <div className="submit-button">
          <Button variant="contained" color="primary"
            disabled={this.state.mail.length === 0 || this.state.message.length === 0}
            onClick={this.onSubmitClicked}>
            Submit
        </Button>
        </div>
      </div>
    );
  }
}

export default ComposingBoard;
