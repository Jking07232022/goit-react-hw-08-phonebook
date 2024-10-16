import { searchValue } from "../../redux/contacts/searchSlice";
import { useDispatch } from "react-redux";
import css from '../ContactWrapper/ContactWrapper.module.css';

export const Search = () => {
   const dispatch = useDispatch();
   const handleOnChange = e => dispatch(searchValue(e.target.value));


   return (
      <div className={css.searchWrapper}>
         <input
            className={css.searchInput}
            type="text"
            name="searchBar"
            placeholder="Search here..."
            onChange={handleOnChange}
            autoComplete="off"
         />
      </div>
   );
}