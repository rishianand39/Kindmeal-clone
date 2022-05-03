import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
     <Navbar />
    </div>
  );
}

export default App;
