import React from 'react'
import { Link } from 'react-router-dom'
import './AboutSection.css'
// import { Link } from 'react-router-dom'

const AboutSection = () => {
    return (
        <div className="about-section">
        <div className="about-headline">
            <h3>ABOUT US</h3>
            <h2>Get to know <strong>our firm</strong></h2>
        </div>
        

            <div className="about-row">
                <div className="about-col1">
                    <div className="about-img-wrapper">
                        <img src="/images/bg-home-history.jpg" alt="History" className="about-img" />
                    </div>
                </div>

                <div className="about-col2">
                    <p>Westwood Law Firm was established in August 1998 by the following founding partners coming from four different law firms of their own, with varied law practice specialities.</p>
                    <br />
                    <p>Westwood Law Firm is a law firm that deals with the specialized practice of law to ensure that all cases are handled by the experts in the field of law where case fall under.</p>
                    
                    <li className='about-item'>
                        <Link to='/aboutUs' className="about-link">
                            Read more
                        </Link>
                    </li>

                </div>
            </div>
        </div>
    )
}

export default AboutSection
