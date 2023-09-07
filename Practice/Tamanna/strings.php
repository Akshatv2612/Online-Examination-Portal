<?php
    $str="THIS IS STRING";
    echo "<br>";
    echo $str;
    $lenn=strlen($str);
    echo "<br>";
    echo"The length of the string". $lenn;
    echo "<br>";
    echo "The numbers of words in string is" .str_word_count($str);
    echo "<br>";
    echo "The reversed string is " .strrev($str);
    echo "<br>";
    echo "The search for is in the string ".strpos($str,"IS");
    echo "<br>";
    echo "The string replaced is ".str_replace("IS","AT",$str);
    echo "<br>";
    echo "The search for is in the string ".strpos($str,"IS");