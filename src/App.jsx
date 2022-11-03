import { useState, useEffect, useRef } from 'react'
import k from './controllers/main.js';
import loadPlayer from './game_objects/player.js';

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

    // const player = add([
    //   sprite("toast"),
    //   pos(center()),
    //   area(),
    //   // body() component gives the ability to respond to gravity
    //   body(),
    // ]);

    const player = loadPlayer();

    const SPEED = 480;

    // Set the gravity acceleration (pixels per second)
    gravity(1000);

    onKeyPress("space", () => {
      // .isGrounded() is provided by body()
      if (player.isGrounded()) {
        // .jump() is provided by body()
        player.jump()
      }
    });

    onKeyDown("left", () => {
      player.move(-SPEED, 0)
    });

    onKeyDown("right", () => {
      player.move(SPEED, 0)
    });

    

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
