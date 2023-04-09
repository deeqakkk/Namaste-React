import React from 'react';
import ReactDOM from 'react-dom';
const Title = <h1>Hello World!</h1>;
const HeaderComponent = () => {
  return (
    <div>
      {Title}
      <h2>This is a level 2 heading</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<HeaderComponent />);
