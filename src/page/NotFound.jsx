import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';

// import BlogHeaderImg from '~/images/blog_header.png';
// import Header from '~/component/Header';


const styles = (theme) => ({
  // Divider: {
  //   'height': 0,
  //   'border': 'none',
  //   'margin-top': '15px',
  //   'margin-bottom': '15px',
  // },
  pageWidthLimit: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});


@withStyles(styles)
class NotFound extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className={classes.pageWidthLimit}>
          <p>Error: Page not found</p>
        </div>
      </div>
    );
  }
}


export default NotFound;
