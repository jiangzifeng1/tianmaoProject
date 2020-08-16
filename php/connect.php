<?php
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect("localhost","root","","tianmao");
if($link->connect_errno){
    echo "连接失败{$link->connect_errno}";
}
$link->query('SET NAMES UTF8');
?>