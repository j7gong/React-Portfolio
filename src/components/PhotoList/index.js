import React, {useState} from "react";

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
          name: 'Password Generator',
          category: 'Portfolio',
          web: "https://j7gong.github.io/week3Challenge/",
          repo: "https://github.com/j7gong/week3Challenge",
          description: 'p1 description',
        },
        {
          name: 'Coding Quiz Challenge',
          category: 'Portfolio',
          web: "https://j7gong.github.io/week4Challenge/",
          repo: "https://github.com/j7gong/week4Challenge",
          description: 'p2 description',
        },
        {
          name: 'Workday Scheduler',
          category: 'Portfolio',
          web: "https://j7gong.github.io/week5Challenge/",
          repo: "https://github.com/j7gong/week5Challenge",
          description: 'p3 description',
        },
        {
          name: 'Weather Dashboard',
          category: 'Portfolio',
          web: "https://j7gong.github.io/week6Challenge/",
          repo: "https://github.com/j7gong/week6Challenge",
          description: 'p4 description',
        },
        {
          name: 'Food Print',
          category: 'Portfolio',
          web: "https://food-print-farm.herokuapp.com/",
          repo: "https://github.com/Racheldeng1995/Food-Print",
          description: 'p5 description',
        },
        {
          name: 'Event Hunter',
          category: 'Portfolio',
          web: "https://racheldeng1995.github.io/EventHunter/",
          repo: "https://github.com/Racheldeng1995/EventHunter",
          description: 'p6 description',
        }
      ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                  <div className="flex-row">
                    <img
                    src={require(`../../assets/Img/${category}/${i}.JPG`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                    />
      
                  <a
                    className="my-5"
                    href={image.web}
                    target="_blank"
                    rel="noopener noreferrer"
                >Deployed Application - {image.name}</a>
                  <a
                    className="my-5"
                    href={image.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >Github Repository - {image.name}</a>
                  </div>
                ))}

                {/* {currentPhotos.map((image, i) => (
                  <ul className="flex-row">
                  <li className="mx-2">          
                  <a
                    className="my-5"
                    href={image.web}
                    target="_blank"
                    rel="noopener noreferrer"
                >Deployed Application - {image.name}</a></li>
                  <li className="mx-2">          
                  <a
                    className="my-5"
                    href={image.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >Github Repository - {image.name} </a></li>
              </ul>      
                ))} */}
                
            </div>
        </div>
    )
}

export default PhotoList;