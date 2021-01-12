import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Pages from './pages';
import { ROUTES } from './constants';
import '../css/index.scss';

const Root = (
  <div>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path={ROUTES.CAT_IMAGES.UPLOAD}>
            <Pages.UploadCatImages />
          </Route>
          <Route path={ROUTES.CAT_IMAGES.VIEW}>
            <Pages.ViewCatImages />
          </Route>
        </Switch>
      </Provider>
    </Router>
  </div>
);

ReactDOM.render(Root, document.getElementById('app-container'));
