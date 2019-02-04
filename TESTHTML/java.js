window.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector("#btn"),
    txt = document.querySelector("#en"),
    ru = document.querySelector("#ru") ;
    btn.addEventListener("click", function() {
var select = document.getElementById("sele");
var val = select.value;
var request = new XMLHttpRequest();
var text = encodeURIComponent(txt.value);
var key = "trnsl.1.1.20190204T134244Z.cbb90abf77f9ffce.4745335122996d2851888242018bbf3227717c77";
var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key="+key+"&text="+text+"&lang="+val+"&format=plain&options=1"
request.open('GET', url, true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    ru.value = data.text;
  }
};
request.send();
    });
});
