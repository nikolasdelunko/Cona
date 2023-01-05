import "./App.css";
import Main from "./pages/Main";
import Modal from "./components/Modal/Modal";
import Message from "./components/Modal/Message";
import { useSelector } from "react-redux";
import Faq from "./components/Faq/Faq";
import Balance from "./components/Balance/Balance";

function App() {
  const modal = useSelector((state) => state.helpers.modal);
	const message = useSelector((state) => state.helpers.message);

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

			{message && <Message error={message.error} text={message.text} />}
    </div>
  );
}

export default App;
