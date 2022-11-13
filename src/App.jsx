import { useEffect, useRef } from 'react'
import k from './main.js';
import loadAssests from './loader/loader'
import loadGameScene from './scenes/game'

function App() {

  const canvasRef = useRef(null);

  useEffect(() => {

    // Start kaboom
    k(canvasRef);
    
    // Load assests
    loadAssests();

    // Load game scenes
    loadGameScene();

    go("game");

  }, []);

  return (
    <>
      <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
        <canvas style={{ display: "inline-block" }} ref={canvasRef}></canvas>
      </div>
    </>
  )
}

export default App
