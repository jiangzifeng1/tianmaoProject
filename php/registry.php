<?php
include "connect.php";
if (isset($_POST['usernames'])) {
    $user = $_POST['usernames'];
    $result = $link->query("select * from userinfor where username='$user'");
    if ($result->fetch_assoc()) { //存在
        echo true; //1
    } else {
        echo false; //空
    }
}

//接收前端表单提交的数据
if (isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    $nickname=$_POST['nickname'];
    $link->query("insert userinfor values(null,'$username','$password','$nickname')");
}
?>