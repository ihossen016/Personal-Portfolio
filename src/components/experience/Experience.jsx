import React from "react";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import "./experience.css";

const Experience = () => {
    const [c1, setC1] = useState(true);
    const [c2, setC2] = useState(false);

    return (
        <section id="experience">
            <h5>My Work</h5>
            <h2>Experience</h2>

            <div className="experience__container">
                <div className="experience__wrapper">
                    <ol className="ex_company">
                        <li
                            className={c1 ? "ex_active" : ""}
                            onClick={() => {
                                setC1(true);
                                setC2(false);
                            }}
                        >
                            Codexpert Inc.
                        </li>
                        <li
                            className={c2 ? "ex_active" : ""}
                            onClick={() => {
                                setC1(false);
                                setC2(true);
                            }}
                        >
                            Syscon Solutions Ltd.
                        </li>
                    </ol>
                    <div className="ex_company_details">
                        {c1 && (
                            <>
                                <div>
                                    <h2>Jr. Software Engineer</h2>
                                    <h5>August, 2022 - Present</h5>
                                </div>
                                <ul>
                                    <h4>Responsibilties</h4>
                                    <li>
                                        <BiRightArrow />
                                        <p>
                                            Develope frontend application using
                                            React, NextJs.
                                        </p>
                                    </li>
                                    <li>
                                        <BiRightArrow />
                                        <p>Create & integrate REST API.</p>
                                    </li>
                                    <li>
                                        <BiRightArrow />
                                        <p>Write SEO optimized code.</p>
                                    </li>
                                    <li>
                                        <BiRightArrow />
                                        <p>Debugging and fixing issues.</p>
                                    </li>
                                    <li>
                                        <BiRightArrow />
                                        <p>
                                            Add new features to existing
                                            softwares.
                                        </p>
                                    </li>
                                </ul>
                            </>
                        )}

                        {c2 && (
                            <>
                                <div>
                                    <h2>Frontend Developer</h2>
                                    <h5>October, 2021 - June, 2022</h5>
                                </div>
                                <ul>
                                    <h4>Responsibilties</h4>
                                    <li>
                                        <BiRightArrow />
                                        <p>
                                            Developed responsive frontend
                                            application using HTML, CSS,
                                            Bootstrap.
                                        </p>
                                    </li>
                                    <li>
                                        <BiRightArrow />
                                        <p>Developed admin panel using React</p>
                                    </li>
                                    <li>
                                        <BiRightArrow />
                                        <p>Integrated REST API</p>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
