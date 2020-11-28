import React from 'react';
import MemberCard from '../../components/MemberCard';

const Lineage = props => {
  return (
    <div>
      {props.parents.map(parent => {
        return (
          <MemberCard 
            name={parent}
            birth={props.birth}
            death={props.death}
          />
        )
      })}
    </div>
  )
}

export default Lineage;