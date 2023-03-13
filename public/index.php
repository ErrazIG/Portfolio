<?php


if(isset($_GET['p'])){
    
    switch($_GET['p']){
        case 'home':
            include '../view/homepage.php';
            break;
        case 'work':
            include '../view/work.php';
            break;
        case 'tuto':
            include "../view/tuto.php";
                break;
        case 'links':
            include '../view/links.php';
                break;
        case 'cv':
            include '../view/cv.php';
                break;
        case 'contact':
            include '../view/contact.php';
                break;
        case 'admin':
            include '../view/admin.php';
                break;
        default:
            include_once '../view/homepage.php';
    }
  
}else{
    include_once "../view/homepage.php";
}
