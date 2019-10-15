import Link from 'next/link';
import { withRouter } from 'next/router';

const Home = ({ router }) => {
  const { route } = router;
  return (
    <>
      <h1>Home page</h1>
      <Link href={`${route}/about`}>
        <a>About page</a>
      </Link>
      <br />
      <Link href={`${route}/contact`}>
        <a>contact page</a>
      </Link>
      <br />
      <Link href={`${route}/projects`}>
        <a>projects page</a>
      </Link>
      <br />
    </>
  );
};

export default withRouter(Home);
