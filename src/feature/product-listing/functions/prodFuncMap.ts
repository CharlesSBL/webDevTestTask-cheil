export default function prodFuncMap(array: string[]) {
    if (array.length == 0) return null;

    return array.map((item, index) => index == -1 || index == array.length - 1 ? item : item + ',').join(' ');
}