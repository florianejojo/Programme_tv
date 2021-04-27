import "./App.css";
import Logo from "./logo.png";

import Sections from "./components/Sections";

function App() {
    return (
        <div className="container">
            <img src={Logo} alt="Logo" className="logo" />
            <Sections />
        </div>
    );
}

export default App;
