import React, { useEffect} from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;
    
    useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    //     };

  return (
    <header className="flex-row px-1">
    <h2>Jingsi Gong</h2>
    <nav>
        <ul className="flex-row">
        <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
            About me</a>
        </li>
        <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
        </li>
        {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
                key={category.name}>
                
                <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
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