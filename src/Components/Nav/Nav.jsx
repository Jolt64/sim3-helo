import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <div className="flexRow">
        <div>
          <Link to="/dashboard">
            <button>Home</button>
          </Link>
          <Link to="new">
            <button>New Post</button>
          </Link>
          <Link to="/">
            <button>Logout</button>
          </Link>
        </div>
      </div>
    )
  }
}
export default Nav