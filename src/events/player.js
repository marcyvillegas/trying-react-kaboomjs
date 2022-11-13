const SPEED = 400;

import addSmallBullet from "../game_objects/small_bullet";

const fireEvent = (gameObj) => {

    onKeyPress("up", () => {
        if (gameObj.isGrounded()) gameObj.jump();
    });

    onKeyDown("left", () => {
        gameObj.move(-SPEED, 0);
    });

    onKeyDown("right", () => {
        gameObj.move(SPEED, 0);
    });

    onKeyPress("space", () => {
        addSmallBullet(gameObj.pos.add(50, 30));
    });
}

export default fireEvent;