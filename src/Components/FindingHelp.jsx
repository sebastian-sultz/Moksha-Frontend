import LOGO from "../assets/Images/Logo2.png";
import { SiQuizlet } from "react-icons/si";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext";
const FindingHelp = () => {
  const { loggedInUser, setLoggedInUser } = useUser();

  return (
    <div>
      <div className="py-6 text-center tracking-wide leading-snug text-4xl font-libre text-gray-700 md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal">
        Finding Help
      </div>
      <p className="text-center leading-tight font-normal text-base md:text-lg md:leading-snug md:text-justify">
        <p className="pb-3">
          Taking the first step toward better mental health can feel
          overwhelming, but you don't have to do it alone. Our "Finding Help"
          section guides you through a simple, confidential quiz that helps
          identify areas where you may need support.
        </p>
        <p className="pb-3">
          {" "}
          Based on your responses, you’ll be redirected; if needed, where you
          can connect with experienced mental health professionals for therapy,
          counseling, or simply someone to talk to. Mental health is just as
          important as physical health, and reaching out for help is a brave and
          positive step toward improving your well-being.
        </p>
      </p>

      <div className="flex justify-center h-56 opacity-50">
        <img src={LOGO} />
      </div>
      {loggedInUser ? (
        <Link to={"/quiz"}>
          <div className="flex justify-center p-5">
            <button className="flex items-center bg-prim rounded-3xl py-1 px-4 text-bgcolor md:py-2">
              <div>
                <SiQuizlet className="h-7 w-7" />
              </div>
              <div className="pl-2 text-sm md:text-base ">
                Try Our Online Quiz
              </div>
            </button>
          </div>
        </Link>
      ) : (
        <Link to={"/login"}>
          <div className="flex justify-center p-5">
            <button className="flex items-center bg-prim rounded-3xl py-1 px-4 text-bgcolor md:py-2">
              <div>
                <SiQuizlet className="h-7 w-7" />
              </div>
              <div className="pl-2 text-sm md:text-base ">
                Try Our Online Quiz
              </div>
            </button>
          </div>
        </Link>
      )}
    </div>
  );
};
export default FindingHelp;
