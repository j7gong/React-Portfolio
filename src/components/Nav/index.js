import React from 'react';

function Nav() {
  
const categories = [
    { name: "AboutMe", description: "port 1 description"},
    { name: "Portfolio", description: "port 2 description" },
    { name: "Contact", description: "port 3 description" },
    { name: "Resume", description: "port 4 description" },
    ];  

function categorySelected(name) {
    console.log(`${name} clicked`)
    }  

  return (
    <header>
    <h2>
        Jingsi Gong
    </h2>
    <nav>
        <ul className="flex-row">
        {/* <li className="mx-2">
            <a href="#about">
            About me
            </a>
        </li>
        <li>
            <span>Portfolio</span>
        </li>
        <li>
            <span>Contact</span>
        </li>
        <li>
            <span>Resume</span>
        </li> */}
        {categories.map((category) => (
            <li
            className="mx-1"
            key={category.name}
            >
            <span onClick={() => categorySelected(category.name)} >
            {category.name}
            </span>
            </li>
        ))}
        </ul>
    </nav>
    </header>
  );
}

export default Nav;