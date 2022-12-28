import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./skills.css";

const Skills = () => {
    return (
        <section id="experience">
            <h5>The Skills I Have</h5>
            <h2>Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    {/* <h3>Front-end Development</h3> */}
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>JavaScript</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>ReactJs</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>Redux-toolkit</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>RTK</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>Next Js</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>SASS/SCSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>Tailwind</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>Material UI</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>NodeJs</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>ExpressJs</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>MySQL</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>Firebase</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>MongoDB</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>WordPress</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
