import React, { Component } from 'react';
import './CommentsBoard.css';
import FilterBar from '../filter-bar/FilterBar.js';
import Comment from '../comment/Comment.js';
import { getComments } from '../../Services/commentsAPI.js';

class CommentsBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    getComments()
      .then(result => {
        this.setState({
          isLoading: false
        });
        this.props.onCommentsFetched(result.data.comments);
      })
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>An error occurred while loading the comments: {error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <FilterBar onCommentsFiltered={this.props.onCommentsFiltered} allComments={this.props.allComments}/>
        <div className="comments-board">
          {this.props.showedComments.map(comment =>
            <Comment mail={comment.mail}
             message={comment.message}
             image={comment.gravatar}
             key={comment._id} />
          )}
        </div>
      </div>
    );


    return (
      <div className="comments-board">
        <Comment />
      </div>
    );
  }
}

export default CommentsBoard;
