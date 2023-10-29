import React from 'react';

const Header = (props) => {
  if(props.sectionTitle==true)
  {
        return ( <h3 className='subTitle'>{props.name} </h3> );
  }
  else
  {
        return ( <h1>{props.name} {props.surname}</h1> );

  }
}

export default Header;










