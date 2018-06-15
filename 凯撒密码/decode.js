var key = Math.round(Math.random() * 100) + 1;
$('#key-input:text').val(key);
$('.encrypt').click(function () {
    var Plaintext = $('#m').val();
    var ciphertext = encrypt(Plaintext, key);
    console.log(ciphertext);

    $("#mm").val(ciphertext);
});


$('.decrypt').click(function () {
    var ciphertext = $('#mm').val();
    var Plaintext = decrypt(ciphertext, key);
    console.log(Plaintext);

    $("#m").val(Plaintext);
});

function encrypt(str, key) {
    var result = '';
    var code;
    for (var i = 0; i < str.length; ++i) {
        code = str[i].charCodeAt();
        if (code < 127) {
            result = result + String.fromCharCode((code - 32 + key) % (126 - 32 + 1) + 32);
        } else {
            result = result + String.fromCharCode(code + key);
        }

    }
    return result;
}


function decrypt(str, key) {
    var result = '';
    var code;
    for (var i = 0; i < str.length; ++i) {
        code = str[i].charCodeAt();
        if (code < 127) {
            result = result + String.fromCharCode((code - 32 - key + 126 - 32 + 1) % (126 - 32 + 1) + 32);
        } else {
            result = result + String.fromCharCode(code - key);
        }
    }
    return result;
}


$('.key-create').click(function () {
    key = Math.round(Math.random() * 10) + 1;

    $('#key-input:text').val(key);

    console.log(key);
})


function copy(txt) {
    var oInput = document.createElement('input');
    oInput.value = txt;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    alert('复制成功');
}


$('.copy1').click(function () {
    var txt = $('#m').val();
    copy(txt);
});


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

function jsReadFiles2(files) {
    if (files.length) {
        var file = files[0];
        var reader = new FileReader(); //new一个FileReader实例
        if (/text+/.test(file.type)) { //判断文件类型，是不是text类型
            reader.onload = function () {
                $('#mm').val(this.result);
            }
            reader.readAsText(file);
        }
    }
}