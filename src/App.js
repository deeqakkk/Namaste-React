import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Footer } from './Components/Footer';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
