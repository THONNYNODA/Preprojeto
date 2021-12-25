import React from 'react';
import { BoxCard } from './styles';


function Card(props) {


  return (
      <BoxCard>
        {props.children}
      </BoxCard>
  );
}

export default Card;