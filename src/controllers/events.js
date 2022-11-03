const SPEED = 480;

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
}

export default fireEvent;