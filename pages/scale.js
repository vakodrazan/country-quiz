

export default function scale(scale, container) {
    // const container = document.querySelector(".container");
        console.log(container.current.style.scale);
    // console.log(container.style);


    if (scale > 0 && container.current.clientHeight > window.outerHeight) {
        // console.log(scale);
        container.current.style.scale = scale - 0.1;
        // console.log(container.style.scale);
        return scale - 0.1
    }
    // console.log(container.style.scale);

    return scale
}