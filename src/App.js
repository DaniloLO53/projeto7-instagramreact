import React from "react";
import Corpo from "./components/Corpo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Corpo />
      <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div >
  )
};

export default App;
