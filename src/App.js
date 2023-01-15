import { Route, Routes } from "react-router-dom";
import "./scss/App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/Shop/List";
import Error from "./components/Error";
import Sale from "./components/Navigation/Sale";
import Delivery from "./components/Navigation/Delivery";
import Contacts from "./components/Navigation/Contacts";
import Order from "./components/Cart/Order";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/order" element={<Order />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
