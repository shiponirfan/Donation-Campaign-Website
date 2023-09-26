import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container flex flex-col justify-center items-center min-h-screen mx-auto p-8">
      <img className="md:w-2/5 p-8" src="./404Error.png" alt="" />
      <div className="text-center justify-center flex flex-col items-center">
        <h1 className="my-2 text-gray-800 font-bold text-3xl md:text-6xl">
          Page Not Found
        </h1>
        <p className="my-5 text-gray-800">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link to="/">
          <button className="flex items-center gap-2 my-2 rounded-lg py-4 px-8 text-center bg-red-600 text-white hover:bg-red-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Return Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
