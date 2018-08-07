import React, { Component } from 'react';
import './App.css';
import ComposingBoard from '../composing-board/ComposingBoard.js';
import CommentsBoard from '../comments-board/CommentsBoard.js';
import _ from 'lodash';
import Snackbar from '@material-ui/core/Snackbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showedComments: [],
      allComments: [],
      mailToFilter: '',
      isSnackBarOpened: false,
      snackBarMessage: ''
    };
  }

  onCommentsFetched = (comments) => {
    this.setState({ allComments: comments, showedComments: comments });
  };

  onCommentSubmit = (newComment) => {
    let mailToFilter = this.state.mailToFilter;
    let updatedComments = _.concat(this.state.allComments, newComment);
    let updatedShowedComments = _.concat(this.state.showedComments, newComment);
    this.setState({ allComments: updatedComments });

    if (((mailToFilter.length > 0)
      && (newComment.mail.toLowerCase().indexOf(mailToFilter.toLowerCase()) > -1))
      || mailToFilter.length === 0) {
      this.setState({ showedComments: updatedShowedComments });
    }
  };

  onCommentsFiltered = (filteredComments, mailToFilter) => {
    this.setState({
      showedComments: filteredComments,
      mailToFilter: mailToFilter
    });
  };

  showSnackBar = (message) => {
    this.setState({
      isSnackBarOpened: true,
      snackBarMessage: message
    })
  };

  onSnackBarClose = () => {
    this.setState({
      isSnackBarOpened: false
    })
  };

  render() {
    return (
      <div className="app">
        <ComposingBoard onCommentSubmit={this.onCommentSubmit} showSnackBar={this.showSnackBar} />
        <CommentsBoard showedComments={this.state.showedComments}
          allComments={this.state.allComments}
          onCommentsFetched={this.onCommentsFetched}
          onCommentsFiltered={this.onCommentsFiltered} />
        <Snackbar open={this.state.isSnackBarOpened}
          message={this.state.snackBarMessage}
          autoHideDuration={3000}
          onClose={this.onSnackBarClose}
        />
      </div>
    );
  }
}

export default App;