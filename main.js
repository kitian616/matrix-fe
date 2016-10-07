function BlocksArray(m ,n) {
    this.array = [];
    this.m = m;
    this.n = n;
}
BlocksArray.prototype.getBlock = function(x, y) {
    return this.array[this.m * y + x];
}
BlocksArray.prototype.pushBlock = function(block) {
    this.array.push(block);
}

//(function() {
    /////
    var charHeight = 14;
    var blocksArray;
    ///
    function initDivs() {
        var mainDom = document.getElementById('main');
        var width = mainDom.clientWidth;
        var height = mainDom.clientHeight;
        var m = parseInt(width / charHeight);
        var n =  parseInt(height / charHeight);
        blocksArray = new BlocksArray(m ,n);
        for (var i = 0; i < m * n; i++) {
            var textBlockDom = document.createElement('div');
            textBlockDom.setAttribute('class', 'cell');
            blocksArray.pushBlock(textBlockDom);
            mainDom.appendChild(textBlockDom);
        }
    }
    initDivs();
    blocksArray.getBlock(9,4);
//})();