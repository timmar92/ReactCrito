import React from 'react';
import { Link } from 'react-router-dom';
import MemberData from './MemberData';

const TeamMembers = ({ sectionId }) => {
  const memberData = MemberData();

  return (
    <div id={sectionId} className="team-members">
      {memberData.map((member, index) => (
        <Link className='link' to={member.path} key={index}>
          <div className="member">
            <img src={member.image} alt={`Image of ${member.name}`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TeamMembers;