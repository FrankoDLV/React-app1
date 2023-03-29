import "./App.css";
import Navbar from "../Componentes/CardWidget/ItemsListContainer/Navbar/Navbar";
import ItemsListContainer from "../Componentes/CardWidget/ItemsListContainer/Navbar/ItemsListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemsListContainer greting={"bienvenidos"} />
    </div>
  );
};

export default App;
