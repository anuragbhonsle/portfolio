import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center bg-transparent mt-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-3">404</h1>
        <p className="text-xl mb-4 font-semibold">Oops! Page not found</p>
        <Link to="/" className="underline underline-offset-4 font-semibold">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
