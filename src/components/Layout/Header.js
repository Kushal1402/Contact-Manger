import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './Header.css';

const Header = (props) => {
    const { branding } = props;
    
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
      <div className='container'>
        <Link to="/" className="navbar-brand">
            {branding} 
        </Link>

        <div className='row'>
            <ul className="navbar nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link" style={ {color:'white'} }> <i className='fa fa-home'></i> Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link" style={ {color:'white'} }> <i className='fa fa-info-circle'></i> About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact/add" className="nav-link" style={ {color:'white'} }><i className='fa fa-plus'></i> Add Contact</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/test" className="nav-link" style={ {color:'white'} }><i className='fa fa-check'></i> Test</Link>
                </li> */}
            </ul>
        </div>
      </div>  
    </nav>
  );
};

Header.defaultProps = {
    branding : 'My App'
}
Header.propTypes = {
    branding : PropTypes.string.isRequired
}


export default Header