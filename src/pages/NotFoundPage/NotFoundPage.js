import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class NotFoundPage extends Component {
  render() {
    return (
      <>
        <p className="title">404 Page Not Found!</p>
        <p className="subtitle">
          You’re either misspelling the URL <br /> or requesting a page that's
          no longer here.
        </p>
        <div align="center">
          <Link className="btn-back" to="/">
            Back to Homepage
          </Link>
        </div>
      </>
    );
  }
}

export default NotFoundPage;
