import React from "react";
import './portfolio.css';
import goImg from '../../assets/chatapp.png'
import graphqlImg from '../../assets/Graphql.png'
import devopsImg from '../../assets/devops.png'
import pernImg from '../../assets/pern.png'

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
                        <img src={graphqlImg} alt="" />
                    </div>

                    <h3>GraphlQL API w. React tsx frontend</h3>
                    <a href="https://github.com/Ghmeding/GraphQLAPI" className="btn" target="_blank">Go to repo</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={devopsImg} alt="" />
                    </div>
                    <h3>DevOps Project w. Golang (GORM), Docker and CI/CD via Github Actions</h3>
                    <a href="https://github.com/DevOps-Adventure/DevOps-Adventure" className="btn" target="_blank">Go to repo</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={pernImg} alt="" />
                    </div>
                    <h3>To-do Application w. PERN-stack <br></br> (IN PROGRESS)</h3>
                    <a href="https://github.com/Ghmeding/to-do-app" className="btn" target="_blank">Go to repo</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;