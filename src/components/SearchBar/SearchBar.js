import styles from './SearchBar.module.scss';

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
          <button>Toronto</button>
          <div className={styles.dropdownContent}>
            {mapLocations(locations)}
          </div>
          <button className={styles.findBtn}>Find</button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
