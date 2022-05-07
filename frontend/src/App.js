
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import MealDeal from "./pages/MealDeal"
import KindMoments from "./pages/KindMoments"
import { Recipes } from "./pages/Recipes";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mealdeal" element={<MealDeal />}/>
        <Route path="/kindmoments" element={<KindMoments />}/>
        <Route path="/Recipes" element={<Recipes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
