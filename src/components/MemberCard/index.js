// This card will be what is shown on the actual tree page 
import React from 'react';

const MemberCard = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.birth} - {props.death}</p>
    </div>
  )
}

export default MemberCard;