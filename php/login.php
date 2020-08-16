<?php
include "connect.php";

if (isset($_POST['username']) && isset($_POST['password'])) {
    $user = $_POST['username'];
    $pass = sha1($_POST['password']);
    $result = $link->query("select * from userinfor where username='$user' and password='$pass'");
    if ($result) { //匹配成功
        echo json_encode($result->fetch_assoc());
    } else { //匹配不成功
        echo false;
    }
}