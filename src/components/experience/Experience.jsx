import React from "react";
import { useState } from "react";
import "./experience.css";

const Experience = () => {
    const [c1, setC1] = useState(true);
    const [c2, setC2] = useState(false);

    return (
        <section id="experience">
            <h5>My Work Places</h5>
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
                                    <h2>Codexpert Inc.</h2>
                                    <h5>August, 2022 - Present</h5>
                                </div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Ad alias magni quaerat
                                    magnam ratione!
                                </p>
                            </>
                        )}

                        {c2 && (
                            <>
                                <div>
                                    <h2>Syscon Solutions Ltd.</h2>
                                    <h5>October, 2021 - June, 2022</h5>
                                </div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Ad alias magni quaerat
                                    magnam ratione!
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
