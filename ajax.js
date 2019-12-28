
function insertScore(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState ==4 && xmlhttp.status == 200){
            alert( xmlhttp.responseText);
        }
    };
    var user = document.getElementsByName('username')[0].value;

    var score = document.getElementById('score2').value;
    
    xmlhttp.open("POST", "add.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("score="+score+"&username="+user);
}