import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/Shop/List";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
