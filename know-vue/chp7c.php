<?php
$people = [
    ['name'=>'Chichi', 'job'=>'Teacher', 'city'=>'Lagos'],
    ['name'=>'Tochukwu', 'job'=>'Developer', 'city'=>'Cape Town'],
    ['name'=>'Anthonia', 'job'=>'Teacher', 'city'=>'Lagos'],
    ['name'=>'Chukwudi', 'job'=>'Doctor', 'city'=>'Kaduna'],
    ['name'=>'Cooper', 'job'=>'Lecturer', 'city'=>'Johannesburg'],
    ['name'=>'Briam', 'job'=>'Student', 'city'=>'Durban'],
];
if(isset($_GET['search']) && strtolower($_GET['search']) == 'people'){
    sleep(rand(1,3));
    echo json_encode($people);
}else{
    echo "What are you looking for?";
}
