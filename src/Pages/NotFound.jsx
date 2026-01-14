import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-400 font-sans">
      <div className="w-[550px] h-[350px] rounded-[50px] bg-[#e0e0e0] shadow-[12px_12px_23px_#bebebe,-12px_-12px_23px_#ffffff] text-center pt-5">
        <h1 className="text-[10rem] font-extrabold bg-gradient-to-br from-green-500 to-emerald-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-[#204829] text-xl -mt-2 mb-2">
          Oops, Page Not Found
        </h2>

        <p className="text-[#204829] font-medium mb-4 px-4">
          Page that you're looking for isn't found
        </p>

        <button className="px-6 py-3 rounded-[20%] bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-[length:200%] text-white transition-all duration-300 hover:bg-right">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-[20%] bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-[length:200%] text-white transition-all duration-300 hover:bg-right"
          >
            Go Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
