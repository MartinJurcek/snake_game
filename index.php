<?php require ("db_config.php")?>
<!DOCTYPE html>
<html>
<head>
    <title>Snake Game</title>
    <link href="style.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>
<div id="game-field">
    <canvas id="mycanvas">
        <div class='unsupported'>
            Sorry, this example cannot be run because your browser does not support the &lt;canvas&gt; element
        </div>
    </canvas>
    <script>
        sWel = new Audio();
        sWel.src = "sounds/welcome.mp3";
    </script>



    <div><input type="image" id="optionbtn" alt="settings" src="picture.png"></div>
    <div><button id="btn" onclick="this.style.display='none'; hideSleepIn()" onmousedown = "sWel.play()" >Start Game</button></div>
    <div><input type="button" id="high" name="answer" value="Highscore"/></div>
    <a href="https://www.google.rs/?gws_rd=cr&ei=-rpRUr62KeqH4ASv2IDwBg">
    <div><input type="button" id="exit" name="answer"  value="Exit" /></div>
    </a>
    <script src="btnnone.js"></script>



    <div id="endgame" class="modall">
        <div class="modal-cont">
            <h3>You lose</h3>
            <form id="content" method="post">

                <label  id="sn">username: </label><input type="text" name="username" id="un"><br><br>
                <!--<label  id="sn">high: </label><input type="text" name="score" id="hs"><br><br>-->
                <p id="score"></p>
                <input type="hidden" id="score2" name="score">

                <input id="save" type="submit" name="sb" value="Save" onclick="insertScore()">

            </form>
        </div>
        <script src="ajax.js"></script>

    </div>


<div id="option" class="opt">
    <div class="modal-content1">
        <div id="th">
        <span class="closee">&times;</span>
        <h2 id="h2">Select theme</h2><br><br><br>
            <input type="radio" id="img1" name="th" value="bac.jpg" onclick="changeImg1()">Theme_1<br><br><br>
            <input type="radio" id="img2" name="th" value="bac2.jpg" onclick="changeImg2()"checked>Theme_2<br><br><br>
            <input type="radio" id="img3" name="th" value="bac3.jpeg" onclick="changeImg3()">Theme_3
        </div>
    </div>
        <script>
            function changeImg1(){
                document.getElementById('game-field').style.backgroundImage="url(bac.jpg)";
            }
            function changeImg2(){
                document.getElementById('game-field').style.backgroundImage="url(bac2.jpg)";
            }
            function changeImg3(){
                document.getElementById('game-field').style.backgroundImage="url(bac3.jpeg)";
            }

        </script>

    <script>
    var modall = document.getElementById("option");
    var btnn = document.getElementById("optionbtn");
    var spann = document.getElementsByClassName("closee")[0];

    btnn.onclick = function () {
        modall.style.display="block";
    }

    spann.onclick = function () {
        modall.style.display="none";
    }

    </script>
</div>





    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <?php
            echo '<div class=box6>';


            $sql = "SELECT username,highscore FROM about_user";
            if ($res = mysqli_query($connection, $sql)) {
                if (mysqli_num_rows($res) > 0) {
                    echo "<table width='500px'>";
                    echo "<tr>";
                    echo "<th>username</th>";
                    echo "<th>highscore</th>";
                    echo "</tr>";
                    while ($row = mysqli_fetch_array($res)) {
                        echo "<tr>";
                        echo "<td>".$row['username']."</td>";
                        echo "<td>".$row['highscore']."</td>";
                        echo "</tr>";
                    }
                    echo "</table>";
                }
                else {
                    echo "No matching records are found.";
                }
            }
            else {
                echo "ERROR: Could not able to execute $sql. "
                    .mysqli_error($connection);
            }
            mysqli_close($connection);
            echo "</div>";
            ?>
        </div>
        <script src="highscore.js"></script>

    </div>
</div>
<script src="game.js"></script>

</body>
</html>