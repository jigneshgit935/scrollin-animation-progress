import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('progress', {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <progress max={100} value={0}></progress>
      <nav
        style={{
          height: '80px',
          width: '100%',
          marginTop: '10px',
          zIndex: '1000',
          padding: '20px 0px',
          position: 'fixed',
        }}
      >
        <h1>Dashboard</h1>
      </nav>
      <div>
        <section></section>
        <section></section>
        <section></section>
      </div>
    </>
  );
}

export default App;
