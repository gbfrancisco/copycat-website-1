const HomePage = () => {
  return (
    <div className="home-page flex flex-col flex-grow">
      <section className="home-section home-section-1 w-full bg-gray-100">
        <img className="max-h-72 w-full" alt="hero-wave" src="/banner1.png" />
        <div className="sub-section mt-[-7rem] flex justify-center items-center">
          <img className="w-[30rem] animate-bounce-slow" alt="hero-img" src="/banner-hero.png" />
          <div className="min-w-[32rem]">
            <h1 className="text-6xl text-left font-semibold font-mono mb-4">
              JUST A <span className="underline">PARODY</span>😉
            </h1>
            <p className="text-3xl text-justify">
              This is merely a mock copy that is <br />
              intended for educational purposes only.
            </p>
          </div>
        </div>
        <img className="w-full" alt="hero-wave" src="/banner2.png" />
      </section>
      <section className="mt-10 home-section home-section-2 w-full bg-yellow-400">
        <div>test</div>
      </section>
    </div>
  );
};

export default HomePage;
