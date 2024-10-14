import React, { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from './sections/About';
import CanvasLoader from './components/CanvasLoader'
import { Suspense } from "react";


const App = () => {

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <Suspense fallback={<CanvasLoader loading={loading} />}>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
      </main>
    </Suspense>
  );
};

export default App;
