window.onload = function(){

    var ran = Math.floor(Math.random()*5+1)
    var str;

    switch(ran){
        case 1:
            str = "大吉！";
            break;
        case 2:
            str = "吉！";
            break;
        case 3:
            str = "中吉！";
            break;
        case 4:
            str = "小吉！";
            break;
        case 5:
            str = "大凶！";
            break;
    }

    document.getElementById("message").innerText = str;
}
