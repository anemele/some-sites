function Index(node) {
    this.node = node;
    this.init();
}

Index.prototype.init = function () {
    const self = this;
    this.nodes = [];
    Array.prototype.slice.call(self.node, 0).forEach(function (item, index) {
        self.nodes.push(self.update(item));
        self.bindEvents(item, index);
    });
};
Index.prototype.update = function (item) {
    return {
        w: item.offsetWidth,
        h: item.offsetHeight,
        l: item.offsetLeft,
        t: item.offsetTop
    }
};
Index.prototype.bindEvents = function (item, index) {
    const self = this;
    $(item).on('mouseenter', function (e) {
        self.addClass(e, item, 'in', index);
        return false;

    })
    $(item).on('mouseleave', function (e) {
        self.addClass(e, item, 'out', index);
        return false;
    })
};
Index.prototype.addClass = function (e, item, state, index) {
    const direction = this.getDirection(e, index);
    let class_suffix = '';
    switch (direction) {
        case 0:
            class_suffix = '-top';
            break;
        case 1:
            class_suffix = '-right';
            break;
        case 2:
            class_suffix = '-bottom';
            break;
        case 3:
            class_suffix = '-left';
            break;
    }
    item.className = '';
    item.classList.add(state + class_suffix);
};
Index.prototype.getDirection = function (e, index) {
    const w = this.nodes[index].w,
        h = this.nodes[index].h,
        x = e.pageX - this.nodes[index].l - w / 2,
        y = e.pageY - this.nodes[index].t - h / 2;
    // 取到x,y两点坐标
    return (Math.round(((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;//d的数值用于判断方向上下左右。
};
new Index($('li'));