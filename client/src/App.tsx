import { Footer } from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Routes>
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/milk/:id" element={<Product />}></Route> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
