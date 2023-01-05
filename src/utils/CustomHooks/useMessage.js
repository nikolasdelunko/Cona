import { useDispatch } from "react-redux";
import { openMessage } from "../../store/helpers/helpersSlice";

const useMessage = () => {
  const dispatch = useDispatch();

  const showMessage = (error, text, icon) => {
    return dispatch(
      openMessage({
        open: true,
        text: text,
        error: error,
        icon: icon,
      })
    );
  };

  return { showMessage };
};

export default useMessage;
