import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descrition = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descrition} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
