import styles from './TopNavigation.module.scss';
import { MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
const TopNavigation = () => {
  return (
    <header className={styles.topNav}>
      >
      <img src='http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png' />
      <ul className={styles.paths}>
        <li>Home</li>
        <li className={styles.dropdown}>
          <a>
            Movies
            <MdArrowDropDown />
          </a>
          <ul>
            <li>
              <a>Link-1</a>
            </li>
            <li>
              <a>Link-2</a>
            </li>
            <li>
              <a>Link-3</a>
            </li>
          </ul>
        </li>
        <li>Cinemas</li>
        <div className={styles.inputIcon}>
          <i className={styles.icon}>
            <BiSearch />
          </i>
          <input
            className={styles.inputField}
            type='text'
            placeholder='Search Theater, Film'
          />
        </div>
      </ul>
    </header>
  );
};

export default TopNavigation;
