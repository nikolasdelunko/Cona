// import { useDispatch } from "react-redux";
// import { openMessage } from "../../store/helpers/helpersSlice";

const useSearch = () => {
  // const dispatch = useDispatch();

  function filterData(data, find) {
    return data.filter((el) => {
      return el.name.toLowerCase().includes(find.toLowerCase());
    });
  }

  return { filterData };
};

export default useSearch;
