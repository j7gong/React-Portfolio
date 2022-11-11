import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/applicationImg/1.JPG";

function Portfolio(props) {
    const currentCategory = {
        name: "application 1",
        web: "https://j7gong.github.io/week3Challenge/",
        repo: "https://github.com/j7gong/week3Challenge"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <a className="my-5" href={currentCategory.web}
                target="_blank" rel="noopener noreferrer">
                deployed application</a>
            <a className="my-5" href={currentCategory.repo}
            target="_blank" rel="noopener noreferrer">
            Github Repository</a>
            <div>
                <img 
                    src={photo}
                    alt={currentCategory.name}
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Portfolio;