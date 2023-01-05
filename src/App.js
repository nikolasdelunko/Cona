import "./App.css";
import Main from "./pages/Main";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";
import Faq from "./components/Faq/Faq";
import Balance from "./components/Balance/Balance";

function App() {
  const modal = useSelector((state) => state.helpers.modal);
  return (
    <div>
      <Main />
      {modal && (
        <Modal name={modal.name} btnName={modal.btnName}>
          {modal.page === "FAQ" && <Faq placeHolder={modal.placeHolder} />}
          {modal.page === "AllBalance" && (
            <Balance placeHolder={modal.placeHolder} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
