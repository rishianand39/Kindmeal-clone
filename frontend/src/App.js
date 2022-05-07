
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import MealDeal from "./pages/MealDeal"
import KindMoments from "./pages/KindMoments"
import MealDealDetail from "./pages/MealDealDetail"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mealdeal" element={<MealDeal />}/>
        <Route path="/kindmoments" element={<KindMoments />} />
        <Route path="/mealdeal/:id" element={<MealDealDetail/>}/>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
