import "./App.css";
import Main from "./pages/Main";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";

function App() {
  const modal = useSelector((state) => state.helpers.modal);
  return (
    <div>
      <Main />
      {modal && (
        <Modal name={"Все балансы"} btnName={"Смотреть по порядку"}>
          <div>
            <p>asdadsds</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
