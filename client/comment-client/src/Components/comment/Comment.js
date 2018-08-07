import React, { Component } from 'react';
import './Comment.css';
import config from '../../config/config';
import Tooltip from '@material-ui/core/Tooltip';
import { getNewestComment } from '../../Services/commentsAPI.js';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastActiveTime: 'Retrieving last active time...'
    };
  }

  retriveLastActiveTime = () => {
    getNewestComment(this.props.mail)
      .then(result => {
        this.setState({ lastActiveTime: 'last active: ' + result.data.comment[0].date });
      })
      .catch(error =>
        this.setState({ lastActiveTime: 'An error occurred while retrieving last active time:' + error })
      );
  };

  render() {
    return (
      <div className="comment">
        <div className="profile-pic">
          <Tooltip onOpen={this.retriveLastActiveTime}
            title={this.state.lastActiveTime}>
            <img src={config.gravatarURL + this.props.image + '?s=' + config.imageSize} />
          </Tooltip>
        </div>
        <div className="comment-content">
          <div className="email">
            {this.props.mail}
          </div>
          <div>
            {this.props.message}
          </div>
        </div >
      </div >
    );
  }
}

export default Comment;
