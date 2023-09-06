<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP learning</title>
</head>
<body>
    <div class="container">
        This is my first php file.
        <?php
        echo "Hello world and this is printed using PHP";
        $variable1=23;
        $variable2=56;
        echo"<br>";
        echo "the value of variable1 is ";
        echo $variable1;
        echo"<br>";
        echo "the value of variable1 is ";
        echo $variable2;
        echo"<br>";
        echo "the value of variable1 + variable2 is ";
        echo $variable2 +$variable1;
        echo"<br>";
        echo "the value of variable1 - variable2 is ";
        echo $variable2 - $variable1;
        echo"<br>";
        echo "the value of variable1 * variable2 is ";
        echo $variable2*$variable1;
        echo"<br>";
        echo "the value of variable1 / variable2 is ";
        echo $variable2 / $variable1;
        echo"<br>";
        $newvar=$variable1;
        $newvar+=1;
        echo "the value of newvariable is ";
        echo $newvar;
        echo"<br>";
        echo "the value of 1==4 is ";
        echo var_dump(1==4);
        echo"<br>";
        echo "the value of 1!=4 is ";
        echo var_dump(1!=4);
        echo"<br>";
        echo "the value of 1>=4 is ";
        echo var_dump(1>=4);
        echo"<br>";
        echo "the value of 1<=4 is ";
        echo var_dump(1<=4);
        echo"<br>";
        //increment operators in php
        echo "variable1++ =";
        echo $variable1++;
        echo"<br>";
        echo "++variable1 =";
        echo ++$variable1;
        echo"<br>";

        ?>

</body>
</html>