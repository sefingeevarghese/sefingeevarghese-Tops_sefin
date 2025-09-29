import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OurTeam() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/team').then(res => {
            const data = res.data;
            if (data) {
                setTeam(data);
            } else {
                setTeam([]);
            }
        }).catch(error => {
            console.error('Error fetching team:', error);
            setTeam([]);
        });
    }, []);

    return (
        <div>
            {/* Team Start */}
            <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Our Bakers</h6>
                            <h1 className="mb-5">Expert Plum Cake Bakers</h1>
                        </div>
                        <div className="row g-4">
                            {team.length === 0 ? (
                                <div className="text-center">No team members found.</div>
                            ) : team.map((member, idx) => (
                                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`0.${idx + 1}s`} key={member.id || idx}>
                                    <div className="team-item bg-light">
                                        <div className="overflow-hidden">
                                            <img className="img-fluid" src={member.image || 'img/team-1.jpg'} alt={member.name} />
                                            <div className="social-buttons-container">
                                                <div className="social-buttons">
                                                    <a 
                                                        className="btn btn-sm-square btn-primary"
                                                        href="#"
                                                        title="Facebook"
                                                    >
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a 
                                                        className="btn btn-sm-square btn-primary"
                                                        href="#"
                                                        title="Twitter"
                                                    >
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a 
                                                        className="btn btn-sm-square btn-primary"
                                                        href="#"
                                                        title="Instagram"
                                                    >
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center p-4">
                                            <h5 className="mb-0">{member.name}</h5>
                                            <small>{member.role}</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            {/* Team End */}
        </div>
    );
}

export default OurTeam;
