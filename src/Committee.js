import React from 'react';
import Slider from 'react-slick';
import './Committee.css'

import { BrowserRouter } from 'react-router-dom'
const Committee = ({committee}) => {
    const committeeList = committee.map(member => {
        const jobList = member.jobs.map(job => {
            return job.id > 0 ? (
                <h4 key={job.id}>{job.job}</h4>
            ) : null;
        });
        return member.id > 0 ? (
            <div key={member.id} className="member">
                <div className="member-container">
                    <img src={ member.image } alt={member.name}/>
                    <div className="member-content">
                        <h3>{member.name}</h3>
                        {
                            jobList
                        }
                        <p>{member.quote}</p>
                    </div>
                </div>
            </div>
        ) : null;
    });
    var settings = {
        focusOnSelect: false,
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 6000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <BrowserRouter basename="/" >
            <div className="committee" to="/suhpa-dev">
                <div className="curly-plane"></div>
                <h2>Our Committee</h2>
                <Slider {...settings}>
                { committeeList }
                </Slider>
            </div>
        </BrowserRouter>
    );
}
export default Committee;