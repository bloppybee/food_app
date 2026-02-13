import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./components/MainLayout/MainLayout";
import Header from "./components/Header/Header";
import MenuBar from "./components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
import AppDownload from "./components/AppDownload/AppDownload";
import Cart from "./components/Cart/Cart";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [category, setCategory] = useState("All");


  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <Routes>
        <Route element={<MainLayout setShowLogin={setShowLogin} />}>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <MenuBar category={category} setCategory={setCategory} />
                <FoodDisplay category={category} />
                <AppDownload />
              </>
            }
          />
          <Route path="/mobile-app" element={<AppDownload />} />
          {/* CART PAGE */}
          <Route path="/cart" element={<Cart />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
