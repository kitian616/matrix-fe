//Returns a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min)) + min);
}
function getRandomfromArray(arr) {
    var i = getRandomInt(0, arr.length);
    return arr[i];
}
//定时器
function setIntervalTimes(fun, num, layout) {
    if (num === 0) {
        num = 1;
    }
    var c = 0;
    var id = setInterval(function () {
        fun.apply(this, arguments);
        c++;
        if (c == num) {
            clearInterval(id);
        }
    }, layout);
}
export default {getRandomInt, getRandomfromArray, setIntervalTimes};
