import styles from './SearchBar.module.scss';
import { RiArrowDropDownLine } from 'react-icons/ri';

const mapLocations = (locations) => {
  return locations.map((item, i) => (
    <a key={i} value={item}>
      {item}
    </a>
  ));
};

const SearchBar = ({ title, locations }) => {
  return (
    <div className={styles.searchBar}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.searchCard}>
        <div className={styles.dropdown}>
          <p>Choose Location:</p>
          <button>
            Toronto
            <i className={styles.icon}>
              <RiArrowDropDownLine />
            </i>
          </button>
          <div className={styles.dropdownContent}>
            {mapLocations(locations)}
          </div>
        </div>
        <button className={styles.findBtn}>Find</button>
      </div>
    </div>
  );
};
export default SearchBar;
