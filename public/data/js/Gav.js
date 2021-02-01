(function () {
    if($.define.name != 'avail.js') {
        console.error('missing avail.js');
        return false;
    }
    const ga = function (cfg = {
        container: $('body')[0],
        width: window.innerWidth / 2,
        height: window.innerHeight / 2,
    }) {
        const self = this;
        
        let canvas = document.createElement('canvas');
        canvas.width = cfg.width;
        canvas.height = cfg.height;
        cfg.contaier.appendChild(canvas);
    };
})();