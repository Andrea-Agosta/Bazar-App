import { Footer } from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hompage from './pages/Hompage';
import { ProductContestProvider } from './context/product';
import { TagContestProvider } from './context/tag';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <ProductContestProvider>
          <TagContestProvider>
            <Routes>
              <Route path="/" element={<Hompage />}></Route>
              {/* <Route path="/milk/:id" element={<Product />}></Route> */}
            </Routes>
          </TagContestProvider>
        </ProductContestProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
