import { withRouter } from 'next/router';

const Trips = ({ router }) => {
  const { count } = router.query;
  const countToNum = count ? parseInt(count, 10) : 0;
  return (
    <>
      <h1>Projects page</h1>
      <button
        onClick={() => {
          router.push({
            pathname: router.route,
            query: { count: countToNum + 1 },
          });
        }}
      >
        +1
      </button>
      <p>{`Count = ${countToNum}`}</p>
    </>
  );
};

export default withRouter(Trips);
