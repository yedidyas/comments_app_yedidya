import React, { Component } from 'react';
import './FilterBar.css';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

class FilterBar extends Component {

  filterComments = (mailToFilter) => {
    let filteredComments = this.props.allComments.filter((comment) => {
      return comment.mail.toLowerCase().indexOf(mailToFilter.target.value.toLowerCase()) > -1;
    });

    this.props.onCommentsFiltered(filteredComments, mailToFilter.target.value);
  };

  render() {
    return (
      <div>
        <TextField
          onChange={this.filterComments}
          className="text-fields"
          label="Filter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
}

export default FilterBar;
