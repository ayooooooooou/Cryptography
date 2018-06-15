$('.analyse').click(function () {
    var c = $('#m').val();
    var arr = [];
    for (var i = 0; i < c.length; ++i) {
        var mark = 0;
        for (var j = 0; j < arr.length; ++j) {
            if (arr[j][0] == c[i]) {
                arr[j][1]++;
                mark = 1;
                break;
            }
        }
        if (!mark) {
            arr.push([c[i], 1]);
        }
    }
    arr.sort(function (x, y) {
        return y[1] - x[1];
    });
    var str_sort = '';
    for (var i = 0; i < arr.length; ++i) {
        arr[i][1] = arr[i][1] * 100 / c.length;
        str_sort = str_sort + arr[i][0] + ':' + arr[i][1].toFixed(1) + '% → ';
    }
    $("#mm").val(c);
    var $p = $('.show-array');
    $p.html(str_sort);
});
$('#btn-replace').click(() => {
    var a = $('#input-replaceleft:text').val();
    var b = $('#input-replaceright:text').val();
    b = b.toLowerCase();
    var buttom = $('#mm').val();
    var temp = '';
    var str = buttom;
    for (var i = 0; i < buttom.length; ++i) {
        var tep = a.charAt(i);
        var tmp = b.charAt(i);
        var pattern = new RegExp(tep, '\g');
        str = str.replace(pattern, tmp)
    }
    $("#mm").val(str);
})

function copy(txt) {
    var oInput = document.createElement('input');
    oInput.value = txt;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    alert('success');
}
$('.copy2').click(function () {
    var txt = $('#mm').val();
    copy(txt);
});

function jsReadFiles(files) {
    if (files.length) {
        var file = files[0];
        var reader = new FileReader(); //new一个FileReader实例
        if (/text+/.test(file.type)) { //判断文件类型，是不是text类型
            reader.onload = function () {
                $('#m').val(this.result);
            }
            reader.readAsText(file);
            $(this).val("");
        }
    }
}