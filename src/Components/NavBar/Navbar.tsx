import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div>
      <span className="x-logo"/>
      <nav className="nav nav-pills nav-fill">
        <NavLink to="/" className="nav-link" href="#">Posts</NavLink>
        <NavLink to="/new-post" className="nav-link" href="#">Add Post</NavLink>
        <NavLink to="/about-us" className="nav-link" href="#">About</NavLink>
        <NavLink to="/contacts" className="nav-link" href="#">Contacts</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;