import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDeal from "./pages/MealDeal";
import KindMoments from "./pages/KindMoments";
import { ProductHotPics } from "./components/ProductHotPics";
import { ButtonsHot } from "./components/ButtonsHot";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealdeal" element={<MealDeal />} />
        <Route path="/kindmoments" element={<KindMoments />} />
        <Route path="/hotpicks" element={<ButtonsHot />}></Route>
        <Route path="/hotpicks/:id" element={<ProductHotPics />}></Route>
      </Routes>
    </div>
  );
}

export default App;

/* 
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AllCategory } from "./components/AllCategory";
import { ButtonsHot } from "./components/ButtonsHot";
import { HotPicsButton } from "./components/HotPicsButton";
import { ProductHotPics } from "./components/ProductHotPics";

function App() {
  return (
    <div className="App">
      <HotPicsButton />
      <Routes>
        <Route path="/" element={<ButtonsHot />}></Route>
        <Route path="/product/:id" element={<ProductHotPics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
*/
