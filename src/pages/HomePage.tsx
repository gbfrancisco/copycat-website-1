const HomePage = () => {
  return (
    <div className="home-page flex flex-col flex-grow">
      <section className="home-section home-section-1 w-full bg-gray-100">
        <img className="max-h-72 w-full" alt="hero-wave" src="/banner1.png" />
        <div className="sub-section mt-[-7rem] flex justify-center items-center">
          <img className="w-[30rem] animate-bounce-slow" alt="hero-img" src="/banner-hero.png" />
          <div className="min-w-[32rem]">
            <h1 className="text-6xl text-left font-semibold font-mono mb-4">
              JUST A{' '}
              <a
                href="https://en.wikipedia.org/wiki/Parody"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                PARODY
              </a>
              😉
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
        <h1 className="flex justify-center py-10 text-4xl font-bold">Join in the Fun! 🎉</h1>
        <div className="container px-5 pb-24 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-3 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-14 h-14 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              <img alt="1" className="w-10 h-10" src="/01.png" />
            </div>
            <div className="flex-grow md:pl-12 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-32 h-32 bg-indigo-100 text-indigo-500 rounded-full overflow-hidden inline-flex items-center justify-center">
                <img alt="point1" src="/point1.png" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold title-font text-gray-900 mb-1 text-2xl">Request</h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo
                  offal.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-3 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-14 h-14 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              <img alt="2" className="w-10 h-10" src="/02.png" />
            </div>
            <div className="flex-grow md:pl-12 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-32 h-32 bg-indigo-100 text-indigo-500 rounded-full overflow-hidden inline-flex items-center justify-center">
                <img alt="point1" src="/point2.png" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold title-font text-gray-900 mb-1 text-2xl">Select</h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo
                  offal.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-3 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-14 h-14 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              <img alt="3" className="w-10 h-10" src="/03.png" />
            </div>
            <div className="flex-grow md:pl-12 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-32 h-32 bg-indigo-100 text-indigo-500 rounded-full overflow-hidden inline-flex items-center justify-center">
                <img alt="point1" src="/point3.png" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-bold title-font text-gray-900 mb-1 text-2xl">Enjoy</h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo
                  offal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
