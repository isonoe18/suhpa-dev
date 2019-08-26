import React from 'react';
import './Committee.css'

const Committee = ({committee}) => {
    const committeeList = committee.map(member => {
        return member.id > 0 ? (
            <div className="member" key={member.id}>
                <img src={ member.image } alt={member.name}/>
                <div className="member-content">
                    <h3>{member.name}</h3>
                    <h4>{member.job}</h4>
                    <p>{member.quote}</p>
                </div>
            </div>
        ) : null;
    });
    return(
        <div className="committee">
            <h2>Our Committee</h2>
            { committeeList }
        </div>
    );
}
export default Committee;