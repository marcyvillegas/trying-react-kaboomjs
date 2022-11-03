import { useState, useEffect, useRef } from 'react'
import k from './controllers/main.js';
import loadPlayer from './game_objects/player.js';
import fireEvent from './controllers/events.js';

function App() {

  const canvasRef = useRef(null);

  useEffect(() => {

    // Start kaboom
    k(canvasRef);

    // Add text
    add([
      text("hello"),
      pos(1, 2),
    ]);

    // Add a platform to hold the player
    add([
      rect(width(), 48),
      outline(4),
      area(),
      pos(0, height() - 48),
      // Give objects a solid() component if you don't want other solid objects pass through
      solid(),
    ]);

    const player = loadPlayer(); // load player game object

    gravity(1000); // Set the gravity acceleration (pixels per second)

    fireEvent(player); // fire events when triggered

  }, []);

  return (
    <>
      <div>
        <canvas style={{ margin: "auto" }} ref={canvasRef}></canvas>
        <p style={{}}>sample sample</p>
      </div>
    </>
  )
}

export default App
