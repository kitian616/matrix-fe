import utils from './utils.js';
class Cell {
    constructor(dom, charset) {
        this.dom = dom;
        this.timerId = 0;
        this.maxChangeTime = 5000;
        this.charset = charset;
    }
    setChar(char) {
        this.dom.textContent = char;
    }
    getChar() {
        return this.dom.textContent || '';
    }
    on() {
        this.setChar(utils.getRandomfromArray(this.charset));
        var timeout = utils.getRandomInt(0, this.maxChangeTime);
        var classList = this.dom.classList;
        classList.remove('off');
        classList.add('on');
        if(this.timerId === 0) {
            this.timerId = setInterval(() => {
                this.setChar(utils.getRandomfromArray(this.charset));
            }, timeout);
        }
    }
    off() {
        var classList = this.dom.classList;
        classList.remove('on');
        classList.add('off');
        if(this.timerId !== 0) {
            clearInterval(this.timerId);
            this.timerId = 0;
        }
    }
}

class Array2D {
    constructor(width ,height) {
        this.array = [];
        this.width = width;
        this.height = height;
    }
    // x form 0 to width - 1
    get(x, y) {
        return this.array[this.width * y + x];
    }
    push(cell) {
        this.array.push(cell);
    }
}

class TheMatrix {
    constructor(cell2D) {
        this.cell2D = cell2D;
        this.itervalTime = 100;
        this.maxWaitingTime = 5000; 
    }
    lineGrow(x, y, l) {
        var y = y;
        utils.setIntervalTimes(() => {
            this.cell2D.get(x, y).on();
            y++;
        }, l, this.itervalTime);
    }
    lineFade(x, y, l) {
        var y = y;
        utils.setIntervalTimes(() => {
            this.cell2D.get(x, y).off();
            y++;
        }, l, this.itervalTime);
    }
    start() {
        function timeoutCallback(isGrow, x, y, l) {
            var lastingTime = (l + 1) * this.itervalTime;
            var waitingTime = 0;
            var maxFGTime= this.cell2D.height / 4 * this.itervalTime;
            var maxGFTime= this.maxWaitingTime;
            if (isGrow === true) {
                this.lineGrow.call(this, x, y, l);
                waitingTime = utils.getRandomInt(0, maxGFTime);
            } else {
                this.lineFade.call(this, x, y, l);
                waitingTime = utils.getRandomInt(0, maxFGTime);
            }
            setTimeout(timeoutCallback.bind(this, !isGrow, x, y, l), lastingTime + waitingTime);
            isGrow = !isGrow;
        }
        for(var x = 0; x < this.cell2D.width; x++) {
            var y = utils.getRandomInt(0, this.cell2D.height * 3 / 4);
            var lastL = this.cell2D.height - y;
            var l = utils.getRandomInt(Math.floor(lastL / 3), lastL);
            var time0 = utils.getRandomInt(0, this.maxWaitingTime);
            this.lineGrow(x, y, l);
            setTimeout(timeoutCallback.bind(this, false, x, y, l), time0);
        }
    }
}

export default {Cell, Array2D, TheMatrix};