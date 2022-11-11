import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    //     };

  return (
    <header className="flex-row px-1">
    <h2>Jingsi Gong</h2>
    <nav>
        <ul className="flex-row">
        {/* <li className="mx-2">
            <a href="#about" onClick={() => handleClick("About")}>
            About me</a>
        </li>
        <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>Contact</span>
        </li> */}
        {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
                key={category.name}>
                
                <span onClick={() => setCurrentCategory(category)} >

                {capitalizeFirstLetter(category.name)}
                </span>
            </li>
        ))}
        </ul>
    </nav>
    </header>
  );
}

export default Nav;