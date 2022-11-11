import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/Img/portfolio/1.JPG";

function Portfolio(props) {
    const {currentCategory }= props; 
    // {   name: "application name 1",
    //     web: "https://j7gong.github.io/week3Challenge/",
    //     repo: "https://github.com/j7gong/week3Challenge"
    // };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <PhotoList category={currentCategory.name} />
            {/* <div>
                <ul >
                    <li >
                    <img 
                    src={photo}
                    alt={currentCategory.name}
                    className="img-thumbnail mx-1"/>
                    </li>
                    <li >
                    <a className="my-5" href={currentCategory.web}
                    target="_blank" rel="noopener noreferrer">
                    Deployed application</a>
                    </li>
                    <li>
                    <a className="my-5" href={currentCategory.repo}
                    target="_blank" rel="noopener noreferrer">
                    Github Repository</a>
                    </li>
                </ul>
            </div> */}
        </section>
    );
}

export default Portfolio;