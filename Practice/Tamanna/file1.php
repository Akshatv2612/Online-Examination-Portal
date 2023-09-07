<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .container {
            max-width: 80%;
            background-color: grey;
            margin: auto;
            padding: 23px; /* Use a colon instead of equal sign here */
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Lets learn about PHP</h1>
        <p> Your party status is here :</p>
        <?php
        $age = 14;
        if ($age > 18) {
            echo "You can go to the party";
        } 
        else {
            echo "You can't go to the party";
        }
        echo "<br>";
        $languages=array("Python","C++","Java","PHP","SQL");
        echo count($languages);
        echo "<br>";
        echo ($languages[0]);
        $a=0;
        while($a<10)
        {
            echo "<br> The value of a is: ";
            echo $a;
            $a++;
        }
        echo "<br>";
        $a=0;
        while($a<count($languages))
        {
            echo "<br> The value of languages is: ";
            echo $languages[$a];
            $a++;
        }
        echo "<br>";
        for($i=0;$i<5;$i++)
        {
            echo "<br> The value of i using for loop is: ";
            echo $i;   
        }
        function printnum($num)
        {
            echo "<br> The number is ";
            echo $num;
        }
        printnum(21);
        printnum(26);
        
        ?>
    </div>
</body>
</html>
