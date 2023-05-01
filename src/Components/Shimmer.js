const Shimmer = () => {
  let i=1;
  return (
    <div className='restaurant-list' data-testid='shimmer'>
      {Array(10)
        .fill('')
        .map((e) => (
          <div className='shimmer-card' key={i++}></div>
        ))}
    </div>
  );
};
export default Shimmer;
