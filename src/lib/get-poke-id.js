export default function getPokeId(url) {
    const array = url.split("/");
    return array[array.length - 2];
}