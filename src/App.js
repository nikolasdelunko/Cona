import "./App.css";
import Main from "./pages/Main";
import Modal from "./components/Modal/Modal";
import Message from "./components/Modal/Message";
import { useSelector } from "react-redux";
import Faq from "./components/Faq/Faq";
import Exchange from "./components/Exchannge/Exchange";
import Balance from "./components/Balance/Balance";
import Report from "./components/Report/Report";
import DataPicker from "./components/DatePicker/DataPicker";
import Deposit from "./components/Deposit/Deposit";
import Withdraw from "./components/Withdraw/Withdraw";
import Send from "./components/Send/Send";
import Invite from "./components/Invite/Invite";

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
          {modal.page === "AssetExchange" && (
            <Exchange
              placeHolder={modal.placeHolder}
              sellCurrency={modal.link}
            />
          )}
          {modal.page === "Report" && (
            <Report placeHolder={modal.placeHolder} />
          )}

          {modal.page === "DataPicker" && <DataPicker />}
          {modal.page === "Deposit" && <Deposit sellCurrency={modal.link} />}
          {modal.page === "Withdraw" && (
            <Withdraw
              sellCurrency={modal.link}
              placeHolder={modal.placeHolder}
            />
          )}
          {modal.page === "Send" && (
            <Send sellCurrency={modal.link} placeHolder={modal.placeHolder} />
          )}
          {modal.page === "Invite" && <Invite link={modal.page} />}
        </Modal>
      )}

      {message && <Message error={message.error} text={message.text} />}
    </div>
  );
}

export default App;
