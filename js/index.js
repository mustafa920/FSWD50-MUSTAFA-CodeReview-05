 var Cart = [];
 var Item = function(name, text, image) {
     this.name = name
     this.text = price
     this.image = count

 };

 for (var i = 0; i < movie.length; i++) {


     var a = document.getElementById("content");
     a.innerHTML += "<div id='colum' class='col-lg-6 col-md-6 col-xs-12'><div id='main'><div><img id='img' src='" + movie[i].image +
      "'width='250' height='250'></div><div id='section-div'><h4>"+movie[i].name+"</h4><p>" 
     + movie[i].text +"</p><div id='like'><span class='result'>"+ movie[i].like+"</span><button class='click'>👍</button></div></div></div></div>";

 }

 function like(like, c) {
     var sum = like + 1;
     document.getElementsByClassName("result")[c].innerHTML = sum;
 }

 for (let x = 0; x < movie.length; x++) {
     document.getElementsByClassName('click')[x].onclick = function() {
         like(movie[x].like,x);
     }
 }
//here is the sort

const propComparator = (proplike) =>
  (a, b) => a[proplike] == b[proplike] ? 0 : a[proplike] > b[proplike] ? -1 : 1

movie.sort(propComparator('like'))
console.log("By like", movie);


function Movie(){
    var a = document.getElementById('demo11').value;
    var b = document.getElementById('demo22').value;
    var c = document.getElementById('demo33').value;
    document.getElementById('colum').innerHTML += " this is the name  of the movie " +  a  + b + " $<img src='"+ c +"'>" ;
};

$(document).ready(function() {

    $('#sort').on('click', function() {
        $("#conet").text("☞  it is working on console log  ☜");
    })

    });


 