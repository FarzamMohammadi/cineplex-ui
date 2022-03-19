import styles from '../styles/Home.module.scss';

import TopNavigation from '../components/TopNavigation';
import SearchBar from '../components/SearchBar';

const locations = ['Toronto', 'Aurora', 'Newmarket'];

export default function Home() {
  return (
    <div className={styles.container}>
      <TopNavigation />
      <SearchBar
        locations={locations}
        title='Check movie schedule with your choice
        Movie, Cinema, Show Type or Time.'
      />
      <main className={styles.main}></main>
    </div>
  );
}
