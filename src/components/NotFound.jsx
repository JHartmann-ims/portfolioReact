import React from "react";
import { useNavigate } from "react-router-dom";
import { Frown } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-130px)]">
      <div className="lg:w-[850px] w-[90%] text-center">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse w-full items-center">
            <Frown size={256} />
            <div>
              <h1 className="text-5xl font-bold">Ooops!</h1>
              <p className="py-6">The page you're looking for isn't here.</p>
              <button
                onClick={handleReturnHome}
                className="btn btn-primary w-full"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
