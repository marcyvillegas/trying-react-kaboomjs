const addSmallBullet = (player_position) => {

     add([
        sprite("small_bullet"),
        pos(player_position),
        area(),
        origin("center"),
        move(RIGHT, 1200),
        cleanup(),
        "small_bullet"
    ]);
}

export default addSmallBullet