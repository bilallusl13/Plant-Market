import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';          // 🔹 Redux Provider'ı ekle
import store from '../src/store/store'             // 🔹 Store'u içeri aktar

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';
import Comments from './components/Comments';
import Feedback from './components/Feedback';
import Plantstore from './components/Plantstore';
import Baskets from './components/Baskets';
import Endcredits from './components/Endcredits';

function App() {
  return (
    <Provider store={store}> {/* 🔹 Redux Store burada tanıtılıyor */}
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <section id="home">
                    <Homepage />
                  </section>
                  <section id="about">
                    <Aboutus />
                  </section>
                  <section id="comments">
                    <Comments />
                  </section>
                  <section id="feedback">
                    <Feedback />
                  </section>
                  <section>
                    <Endcredits />
                  </section>
                </div>
              }
            />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/store" element={<Plantstore />} />
            <Route path="/basket" element={<Baskets />} />
            <Route path='/end' element={<Endcredits />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
