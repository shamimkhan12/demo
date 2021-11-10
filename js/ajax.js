/*console.log("Hellow World");

let fetchData = document.querySelector('.btn');
fetchData.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
     //console.log('You have clicked');

     const xhr = new XMLHttpRequest;

     xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

     xhr.onprogress = function(){
         console.log("progress");
     }

     xhr.onload = function(){
        if(this.status === 200)
        {
           var x = this.responseText;
            document.querySelectorAll('.dtdisplay').innerHTML = x;
            console.log(x);
        } 
        else
        {
            document.write('Error Occurrred');
        }
         
     }

     xhr.send();
    
}

setTimeout(onloadingw, 5000)

function onloadingw(){
    document.getElementById('modal_blk').style.display = 'block';
}*/
function resizefunction(){
    console.clear();
    var iHeight = window.innerHeight;
    console.log("Innner Hieght : " + iHeight);

    var OHeight = window.outerHeight;
    console.log("Outer Hieght : " + OHeight);
}

