import Link from 'next/link';
import { withRouter } from 'next/router';

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/app/about">
        <a>About page</a>
      </Link>
      <br />
      <Link href="/app/counter">
        <a>counter page</a>
      </Link>
      <br />
      <Link href="/app/images">
        <a>images page</a>
      </Link>
      <br />
    </>
  );
};

export default withRouter(Home);
