import styles from './TopNavigation.module.scss';

const TopNavigation = () => {
  return (
    <header className={styles.topNav}>
      <div className={styles.logo}>
        <img src='http' />
      </div>
      <ul className={styles.paths}>
        <li>Home</li>
        <li className={styles.dropdown}>
          <a>Movies</a>
          <ul>
            <li>
              <a>Sub-1</a>
            </li>
            <li>
              <a>Sub-2</a>
            </li>
            <li>
              <a>Sub-3</a>
            </li>
          </ul>
        </li>
        <li>Cinemas</li>
        <input type='text' placeholder='Search Theater, Film' />
      </ul>
    </header>
  );
};

export default TopNavigation;
