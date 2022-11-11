import React from 'react';

function Footer() {
  return (
    <nav>
      <ul className="flex-row">
          <li className="mx-2">          
          <a
            className="my-5"
            href="https://github.com/j7gong"
            target="_blank"
            rel="noopener noreferrer"
        > Github</a></li>
          <li className="mx-2">          
          <a
            className="my-5"
            href="https://www.linkedin.com/in/jingsi-g-75337473/"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn</a></li>

          <li className="mx-2">          
          <a
            className="my-5"
            href="https://twitter.com/gongjingsi"
            target="_blank"
            rel="noopener noreferrer"
          >Twitter</a></li>

      </ul>
    </nav>
  );
}

export default Footer;