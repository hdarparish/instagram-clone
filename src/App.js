//import styles
import Feed from "./components/Feed";
import Header from "./components/Header";
import Modal from "./components/Modal";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      <Modal />
    </div>
  );
}

export default App;
