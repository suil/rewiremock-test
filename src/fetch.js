export default function fetch(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('good data');
        }, 1000);
    });
}