// import { useDispatch } from "react-redux";
// import { openMessage } from "../../store/helpers/helpersSlice";

const useSearch = () => {
  // const dispatch = useDispatch();
  function filterNameVideo(data, find) {
    return data.filter((el) => {
      return el?.name.toLowerCase().includes(find.toLowerCase());
    });
  }

  function filterName(data, find) {
    return data.filter((el) => {
      return (
        el?.first_name.toLowerCase().includes(find.toLowerCase()) ||
        el?.last_name.toLowerCase().includes(find.toLowerCase())
      );
    });
  }

  function filterCurrency(data, find) {
    return data?.filter((el) => {
      return el.currency.toLowerCase().includes(find.toLowerCase());
    });
  }

  function filterReport(data, find) {
    return data?.filter((el) => {
      return el.balance.toLowerCase().includes(find.toLowerCase());
    });
  }

  return { filterName, filterCurrency, filterReport, filterNameVideo };
};

export default useSearch;
