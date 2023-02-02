import { Footer } from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hompage from './pages/Hompage';
import { PostContestProvider } from './context/product';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <PostContestProvider>
          <Routes>
            <Route path="/" element={<Hompage />}></Route>
            {/* <Route path="/milk/:id" element={<Product />}></Route> */}
          </Routes>
        </PostContestProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
