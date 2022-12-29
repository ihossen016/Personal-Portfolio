import React from "react";
import IMG1 from "../../assets/dashboard.png";
import IMG2 from "../../assets/entertainment.png";
import IMG3 from "../../assets/userlist.png";
import IMG4 from "../../assets/movielist.png";
import IMG5 from "../../assets/travel.png";
import IMG6 from "../../assets/product.png";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
    const soloProjects = [
        {
            id: 1,
            title: "Admin Dashboard",
            img: IMG1,
            description:
                "This is an demo admin dashboard design which contains multiple tables, different types of charts.",
            technologies: "ReactJs | MUI | Nivo Chart | Full Calender",
            link: "https://admin-dashboard-six-dun.vercel.app/",
            github: "https://github.com/ihossen016/Admin-Dashboard",
        },
        {
            id: 2,
            title: "Entertainment",
            img: IMG2,
            description:
                "This is a movies directory where you can find all the latest Movies and TV Series",
            technologies: "ReactJs | MUI | TMDB API",
            link: "https://entertainment-blue.vercel.app/",
            github: "https://github.com/ihossen016/Entertainment",
        },
        {
            id: 3,
            title: "User List Dashboard",
            img: IMG3,
            description:
                "It's a dashboard where you can find all the users of an platform altogether",
            technologies: "ReactJS | REST API | Tailwind CSS",
            link: "https://hypescout-six.vercel.app/hypesocial",
            github: "https://github.com/Rasif-Taghizada/RubyCode-Blog",
        },
        {
            id: 4,
            title: "MovieList",
            img: IMG4,
            description:
                "It's a movie listing application where you can create your own watchlist",
            technologies: "ReactJs | Context API | TMDB API | Local Storage",
            link: "https://react-movie-watchlist-nine.vercel.app/",
            github: "https://github.com/ihossen016/react-movie-watchlist-using-context-api",
        },
        {
            id: 5,
            title: "Travel Website",
            img: IMG5,
            description: "It's a landing page for a travel website.",
            technologies: "HTML | CSS | Javascript",
            link: "https://demo-travel-website-landing-page.netlify.app/",
            github: "https://github.com/ihossen016/travel_website",
        },
        {
            id: 6,
            title: "Product Landing Page",
            img: IMG6,
            description: "This a landing page design for a movie application.",
            technologies: "HTML | CSS | Javascript",
            link: "https://ihossen016-product-landing-page.netlify.app/",
            github: "https://github.com/ihossen016/product-landing-page",
        },
    ];

    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {soloProjects.map(pro => (
                    <article className="portfolio__item" key={pro.id}>
                        <div className="portfolio__item-image">
                            <img src={pro.img} alt={pro.title} />
                        </div>
                        <div className="portfolio__item-content">
                            <h3>{pro.title}</h3>
                            <p>{pro.description}</p>
                            <p>{pro.technologies}</p>
                        </div>
                        <div className="portfolio__item-cta">
                            <a
                                href={pro.github}
                                target="_blank"
                                className="btn"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href={pro.link}
                                target="_blank"
                                className="btn btn-primary"
                                rel="noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
