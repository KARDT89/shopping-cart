import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground text-lg mb-6">
        Oops! The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="text-primary underline hover:text-primary/80 transition-colors"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
