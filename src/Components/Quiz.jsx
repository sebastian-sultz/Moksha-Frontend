import QuizImg from "../assets/Images/Quiz.png";

const Quiz = () => {
  return (
    <div className="h-screen bg-bgcolor">
      <div className="text-gray-500 max-w-md mx-auto px-10 overflow-hidden md:max-w-4xl lg:max-w-6xl">
        <div>
          <div className="pt-2 text-center tracking-wide leading-snug text-4xl font-libre text-gray-700 md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal">
            Quiz
          </div>
          <div className="md:flex md:justify-between">
            <div className="md:shrink-0 md:content-center">
              <img
                className="hidden mx-auto h-72 w-72 rounded-2xl object-cover opacity-70 md:block md:h-72 md:w-72 lg:h-96 lg:w-96"
                src={QuizImg}
                alt="Moksha"
              />
            </div>
            <div className="px-10 text-justify md:text-left lg:max-w-2xl">
              <div className="pt-6 tracking-wide leading-snug text-base font-libre text-gray-700 md:pt-10 md:text-lg md:leading-normal md:text-left lg:text-xl lg:leading-normal">
                As Albus Dumbledore said: "Happiness can be found even in the
                darkest of times, if one only remembers to turn on the light."
                <span>~Albus Dumbledore</span>
              </div>
              <p className=" text-gray-500 py-7 leading-tight font-normal text-base md:text-lg md:leading-snug md:text-left">
                <div className="relative flex flex-col rounded-lg  shadow-sm border border-gray-400">
                  <nav className="flex min-w-[240px] flex-col gap-1 p-1.5 divide-y">
                    <div
                      role="button"
                      className="text-gray-700 flex w-full items-center rounded-md p-3 transition-all hover:bg-sec hover:text-bgcolor focus:bg-sec active:bg-sec"
                    >
                      Inbox
                    </div>
                    <div
                      role="button"
                      className="text-gray-700  flex w-full items-center rounded-md p-3 transition-all hover:bg-sec hover:text-bgcolor focus:bg-sec active:bg-sec"
                    >
                      Trash
                    </div>
                    <div
                      role="button"
                      className="text-gray-700 flex w-full items-center rounded-md p-3 transition-all hover:bg-sec hover:text-bgcolor focus:bg-sec active:bg-sec"
                    >
                      Settings
                    </div>
                    <div
                      role="button"
                      className="text-gray-700 flex w-full items-center rounded-md p-3 transition-all hover:bg-sec hover:text-bgcolor focus:bg-sec active:bg-sec"
                    >
                      Settings
                    </div>
                  </nav>
                </div>
              </p>
              <div className="flex justify-end">
                <button
                  className="flex items-center rounded-md border border-gray-400 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-prim hover:border-sec focus:text-white focus:bg-prim focus:border-prim active:border-prim active:text-white active:bg-prim disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 ml-1.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
