import cssGeral from "./css/cssGeral.css";
import cssHomePage from './css/homePage.css';

import Header from "./components/header.js";
import MainContent from "./components/mainContent.js";

function App() {
  return (
    <div style={cssGeral}>
      <Header></Header>
      <MainContent style={cssHomePage}></MainContent>
    </div>
  )
}

export default App;
