import { useDispatch } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";

const useModal = () => {
  const dispatch = useDispatch();

  const showModal= (open, page, name, btnName, placeHolder, link) => {
    return dispatch(
			openModal({
				open: open,
				page: page,
				name: name,
				btnName: btnName,
				placeHolder: placeHolder,
				link: link
			})
    );
  };

  return { showModal };
};

export default useModal;
