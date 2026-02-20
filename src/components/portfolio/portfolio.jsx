import React from "react";
import './portfolio.css';
import goImg from '../../assets/chatapp.png'
import thesisImg from '../../assets/thesis.png'
import devopsImg from '../../assets/devops.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={goImg} alt="" />
                    </div>

                    <h3>Go & React Typescript - Chat Application</h3>
                    <a href="https://github.com/Ghmeding/ChatApp" className="btn" target="_blank">Go to repo</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={thesisImg} alt="" />
                    </div>

                    <h3>Thesis project - Energy Consumption in Web Applications</h3>
                    <a href="https://github.com/WAEC-T/codebase" className="btn" target="_blank">Go to repo</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={devopsImg} alt="" />
                    </div>
                    <h3>DevOps Project w. Golang (Gin), Docker and CI/CD via Github Actions</h3>
                    <a href="https://github.com/DevOps-Adventure/DevOps-Adventure" className="btn" target="_blank">Go to repo</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;