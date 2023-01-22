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
import LimitOrder from "./components/LimitOrder/LimitOrder";
import InvestReport from "./components/Report/InvestReport";
import Invest from "./components/Invest/Invest";
import OpenInvest from "./components/Invest/OpenInvest";
import UserInvest from "./components/Invest/UserInvest";
import PartnersReport from "../src/components/Report/PartnersReport";
import PartnersTree from "../src/components/Partners/PartnersTree";
import PartnersStatistic from "./components/Partners/PartnersStatistic";
import {
  MessageDiv,
  TextError,
  IconBox,
} from "./components/Style/MessageStyle";
import ChevronUp from "./components/icons/ChevronUp";

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
          {modal.page === "LimitOrder" && (
            <LimitOrder
              placeHolder={modal.placeHolder}
              sellCurrency={modal.link}
            />
          )}
          {modal.page === "Investment" && (
            <InvestReport placeHolder={modal.placeHolder} />
          )}
          {modal.page === "Invest" && (
            <Invest placeHolder={modal.placeHolder} />
          )}
          {modal.page === "OpenInvest" && (
            <OpenInvest placeHolder={modal.placeHolder} link={modal.link} />
          )}
          {modal.page === "UserInvest" && <UserInvest />}

          {modal.page === "ReportPartners" && (
            <PartnersReport placeHolder={modal.placeHolder} />
          )}
          {modal.page === "PartnersTree" && (
            <PartnersTree placeHolder={modal.placeHolder} />
          )}
          {modal.page === "PartnerStatistic" && (
            <PartnersStatistic partner={modal.link} />
          )}
        </Modal>
      )}

      {message.element === "SuccesCopy" && (
        <Message error={message.error}>
          <MessageDiv>
            <TextError>{message.text}</TextError>
            <IconBox>
              <ChevronUp />
            </IconBox>
          </MessageDiv>
        </Message>
      )}
    </div>
  );
}

export default App;
