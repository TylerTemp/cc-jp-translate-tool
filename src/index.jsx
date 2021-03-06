import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

import 'typeface-roboto';
// import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '~/page/Home';
// import Header from '~/component/Header';
import NotFound from '~/page/NotFound';
//  import Layout from './component/Layout'
//  import {default as PostList} from './component/page/post/List'
// import PostListWithPagination from '~/component/page/post/PostListWithPagination';
// import RedirectPostSlug from '~/component/page/post/RedirectPostSlug';
// import PostListWithHeaderPagination from '~/component/page/post/PostListWithHeaderPagination';
// import PostWithComment from '~/component/page/post/PostWithComment';
//  import TieListWithHeaderPagination from './component/page/tie/TieListWithHeaderPagination';
//  import TieWithComment from './component/page/tie/TieWithComment';
// import TieModalSwitch from '~/component/page/tie/TieModalable';

import '~/css/index.css';

class App extends Component {

  render() {

    return (<React.Fragment>
      {/* <CssBaseline></CssBaseline> */}
      <Router>
        <Switch >
          <Route exact path="/" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </React.Fragment>);
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
