import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error Occured</h1>
        <p>This url does not exist</p>
      </main>
    </>
  );
};

export default ErrorPage;
