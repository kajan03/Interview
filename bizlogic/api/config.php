<?php
$db = new mysqli("localhost","root","","testreg");
echo "success";
if(!$db) {
    die("database connection error");
    echo "failed";
}
?>