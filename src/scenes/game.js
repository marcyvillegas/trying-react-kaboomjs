
import addPlayer from '../game_objects/player';
import fireEvent from '../events/player';

export default () => scene("game", () => {

    // Add text
    add([
        text("toast me"),
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

    // add vertical platform
    add([
        area(),
        rect(0, height()),
        pos(0, 0),
        solid()
    ]);

    // add vertical platform
    add([
        area(),
        rect(0, height()),
        pos(width(), 0),
        solid()
    ]);

    gravity(1000); // Set the gravity acceleration (pixels per second)

    const player = addPlayer(); // load player game object

    fireEvent(player); // fire events when triggered
});
