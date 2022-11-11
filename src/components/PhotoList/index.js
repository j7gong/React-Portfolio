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
          web: "https://j7gong.github.io/week3Challenge/",
          repo: "https://github.com/j7gong/week3Challenge",
          description: 'p2 description',
        },
        {
          name: 'Workday Scheduler',
          category: 'Portfolio',
          web: "https://j7gong.github.io/week3Challenge/",
          repo: "https://github.com/j7gong/week3Challenge",
          description: 'p3 description',
        },
        {
          name: 'Weather Dashboard',
          category: 'Portfolio',
          web: "https://j7gong.github.io/week3Challenge/",
          repo: "https://github.com/j7gong/week3Challenge",
          description: 'p4 description',
        },
        {
          name: 'Food Print',
          category: 'Portfolio',
          web: "https://j7gong.github.io/week3Challenge/",
          repo: "https://github.com/j7gong/week3Challenge",
          description: 'p5 description',
        },
        {
          name: 'Event Hunter',
          category: 'Portfolio',
          web: "https://j7gong.github.io/week3Challenge/",
          repo: "https://github.com/j7gong/week3Challenge",
          description: 'p6 description',
        },

        // {
        //   name: 'Photo',
        //   category: 'About Me',
        //   web: "",
        //   repo: "",
        //   description: 'p6 description',
        // }
      ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    
    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                <img
                    src={require(`../../assets/Img/${category}/${i}.JPG`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                />
                ))}
                
            </div>
        </div>
    )
}

export default PhotoList;