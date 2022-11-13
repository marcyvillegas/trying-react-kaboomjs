import kaboom from "kaboom";

const k = (ref) => {

    return kaboom({
        width: 700,
        height: 700,
        canvas: ref.current
    });
};

export default k