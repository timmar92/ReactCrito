import React from 'react';
import TeamMembers from './generics/TeamMembers';
import SectionTitle from './generics/SectionTitle';
import Button from './generics/Button';

const MeetOurTeamSection = () => {
    return (
        <section className="meet-our-team">
            <div className="container">
                <div className="header">
                    <div className="section-title">
                        <SectionTitle title='Meet Our Team' description='Experienced Team Members' />
                    </div>
                    <Button to='/team' type='transparent' title='Browse Team'/>
                </div>
                <TeamMembers />
            </div>
        </section>
    );
};

export default MeetOurTeamSection;