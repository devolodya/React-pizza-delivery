import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/Shop/List";
import Error from "./components/Error";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
