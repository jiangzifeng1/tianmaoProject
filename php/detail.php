<?php
include "connect.php";
if (isset($_POST['sid'])) {
    $sid = $_POST['sid'];
    $result = $link->query("select * from list where id=$sid");
    echo json_encode($result->fetch_assoc());
}
?>