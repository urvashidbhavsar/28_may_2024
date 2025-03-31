import Myapi from "./component/Myapi";
import Nav from "./nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Myapi />
      <h1 className="text-success">Hello World</h1>
    </>
  );
}
