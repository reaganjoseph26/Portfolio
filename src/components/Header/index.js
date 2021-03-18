import React from 'react';
import Nav from '../Nav/index'
function Header(props) {
    return (
          <Nav setRenderedComponent={props.setRenderedComponent}></Nav>
    );
}


export default Header;