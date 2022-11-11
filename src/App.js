import React, {useState} from "react";
import About from './components/About';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    { name: "About Me", description: "port 1 description" },
    { name: "Portfolio", description: "port 2 description" },
    { name: "Contact", description: "port 3 description" },
    { name: "Resume", description: "port 4 description" },
    ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav         
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
        <Portfolio currentCategory={currentCategory}></Portfolio>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
