import kaboom from "kaboom";

export const k = (ref) => {

    return kaboom({
        width: 900,
        height: 600,
        canvas: ref.current
    });
};