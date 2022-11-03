import kaboom from "kaboom";

const k = (ref) => {

    return kaboom({
        width: 900,
        height: 600,
        canvas: ref.current
    });
};

export default k