import React from 'react';
import Slider from 'react-slick';
import './Committee.css'
const Committee = ({committee}) => {
    const committeeList = committee.map(member => {
        const jobList = member.jobs.map(job => {
            return job.id > 0 ? (
                <h4 key={job.id}>{job.job}</h4>
            ) : null;
        });
        return member.id > 0 ? (
            <div key={member.id} className="member">
                <img src={ member.image } alt={member.name}/>
                <div className="member-content">
                    <h3>{member.name}</h3>
                    {
                        jobList
                    }
                    <p>{member.quote}</p>
                </div>
            </div>
        ) : null;
    });
    var settings = {
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div className="committee">
            <h2>Our Committee</h2>
            <Slider {...settings}>
            { committeeList }
            </Slider>
        </div>
    );
}
export default Committee;