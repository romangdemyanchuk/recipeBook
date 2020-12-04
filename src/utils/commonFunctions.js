export const loadImg = (src) => {
    return new Promise(function(resolve, reject) {
        let img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
    });
}
