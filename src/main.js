// main.js
import '../style/main.css';
import model from './model.js';

var charset = [ 
                //Katakana
                'ア','イ','ウ','エ','オ',
                'カ','ガ','キ','ギ','ク','グ','ケ','ゲ','コ','ゴ',
                'サ','ザ','シ','ジ','ス','ズ','セ','ゼ','ソ','ゾ',
                'タ','ダ','チ','ヂ','ツ','ヅ','テ','デ','ト','ド',
                'ナ','ニ','ヌ','ネ','ノ',
                'ハ','バ','パ','ヒ','ビ','ピ','フ','ブ','プ','ヘ','ベ','ペ','ホ','ボ','ポ',
                'マ','ミ','ム','メ','モ',
                'ヤ','ユ','ヨ',
                'ラ','リ','ル','レ','ロ',
                'ワ','ヰ','ヱ','ヲ','ン','ヴ',
                //Suzhou numerals ,SHU1ZHOU1MA3ZI3
                '〇','〡','〢','〣','〤','〥','〦','〧','〨','〩','十','卄','卅', 
                //Mathematical operators
                '＋','／','％','！','＞','＜','＝'];

function intervalCells() {
    var nodes = document.getElementsByClassName('text');
    for (var i = 0; i < nodes.length; i++) {
        (function(cell) {
            var flag = true;
            setInterval(function() {
                if (flag) {
                    cell.on();
                } else {
                    cell.off();
                }
                flag = !flag;
            }, 3000);
            ///end显示和消失
        })(new model.Cell(nodes[i], charset));
    }
}

function main() {
    var charSize = 16;
    var cell2D;
    var mainDom = document.getElementById('main');
    var width = mainDom.clientWidth;
    var height = mainDom.clientHeight;
    var m = parseInt(width / charSize);
    var n =  parseInt(height / charSize);
    cell2D = new model.Array2D(m ,n);
    for (var i = 0; i < m * n; i++) {
        var cellDom = document.createElement('div');
        cellDom.setAttribute('class', 'cell');
        cellDom.style.width = charSize + 'px';
        cellDom.style.height = charSize + 'px';
        cellDom.style.fontSize = charSize * 0.8 + 'px';
        mainDom.appendChild(cellDom);
        var cell = new model.Cell(cellDom, charset);
        cell2D.push(cell);
    }
    var theMatrix = new model.TheMatrix(cell2D);
    theMatrix.start();
}

main();