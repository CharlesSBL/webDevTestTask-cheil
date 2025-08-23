

export default function dateToStr(date: Date) {
    return String(date).split("-").reverse().join(".");
}