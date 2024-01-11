const data = [{ 'word': '我', 'src': 'pic1.png' }, { 'word': '好', 'src': 'pic2-1.png' }, { 'word': '喜', 'src': 'pic2-2.png' }, { 'word': '欢', 'src': 'pic2-3.png' }, { 'word': '你', 'src': 'pic2-4.png' }, { 'word': '跟', 'src': 'pic2.png' }, { 'word': '我', 'src': 'pic3-1.png' }, { 'word': '在', 'src': 'pic3-2.png' }, { 'word': '一', 'src': 'pic3-3.png' }, { 'word': '起', 'src': 'pic3-4.png' }, { 'word': '好', 'src': 'pic3.png' }, { 'word': '吗', 'src': 'pic4.png' }];
var output = [];
data.forEach(d => {
    output.push(`<li>
        <div class="picBox">
            <div class="show">
            <image height="180px" width="180px" src="./image/${d.src}"></image>
            </div>
            <div class="hide">
            <h3>♥${d.word}♥</h3>
            </div>
        </div>
        </li>`)
});
document.getElementById('wrapper').innerHTML = output.join('');