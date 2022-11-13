const addPlayer = () => {

    return add([
        sprite("toast"),
        pos(center()),
        area(),
        // body() component gives the ability to respond to gravity
        body(),
    ]);
}

export default addPlayer