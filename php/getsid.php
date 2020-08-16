<?php

include "connect.php";

if (isset($_POST['sid'])) {
    $sidArr = json_decode($_POST['sid']);
    $dataArr=array();
    for($i=0;$i<count($sidArr);$i++){
        $result = $link->query("select * from list where id={$sidArr[$i]}");
        array_push($dataArr,$result->fetch_assoc());
    }
    echo json_encode($dataArr);
}