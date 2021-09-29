import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            
            <div className="hero-row">
            <div className="col1">
            <h1>Delay in justice is injustice</h1>
            <p>-Walter Savage Landor</p>
            <div className="hero-btn">
                <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--medium">Schedule Consultation</Button>
            </div>
            </div>

            <div className="col2">
                <div className="hero-img-wrapper">
                    <img src="/images/WWL3.jpg" alt="WWL3" className="hero-img" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
