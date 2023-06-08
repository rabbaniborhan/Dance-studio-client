import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          src="https://thumbs.dreamstime.com/b/cartoon-computer-error-text-illustration-robot-theme-51089924.jpg"
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="error text-4xl font-bold">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="btn bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;