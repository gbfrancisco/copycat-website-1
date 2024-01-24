import { HomePageClasses } from '../utils/css';

const HomePage = () => {
  return (
    <>
      <section className="home-section home-section-1 flex flex-col flex-grow">
        <div className={HomePageClasses.SUB_SECTION_HERO_WAVE}>
          <h1>SERVICE</h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;
