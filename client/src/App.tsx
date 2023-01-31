import { Footer } from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hompage from './pages/Hompage';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hompage />}></Route>
          {/* <Route path="/milk/:id" element={<Product />}></Route> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
