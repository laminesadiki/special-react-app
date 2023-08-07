import "./App.css";
import PremierComposant from "./components/PremierComposant/PremierComposant";
import Card from "./components/Card/Card";
import { phones } from "./phones";

function App() {
  return (
    <div className="App grid-container">
      {phones.map((phone) => (
        <Card title={phone.title} img={phone.img} price={phone.price} />
      ))}
    </div>
  );
}

export default App;
