<?php
	if(isset($POST['submit']))
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$email=$_POST['email'];
		$password=$_POST['password'];
		$repeat_password=$_POST['repeat_password'];

	$host='localhost';
	$username='root';
	$password='';
	$dbname='penmonk';

	$con=mysqli_connect($host,$username,$password,$dbname);

	if(!$con){
		die('connection failed'.mysqli_connect_error());
	}

	$sql="INSERT INTO user1(fname, lname, email, password, repeat_password) VALUES ('$fname','$lname','$email','$password','$repeat_password')";

	$rs=mysqli_query($con,$sql);
	if($rs){
		echo "Entries Added!";
	}
	?>