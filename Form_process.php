<?php
//This code makes sure the form input validation; the form remembers the information when it is incorrectly entered
// make sure the required fields stays; at last, sends the form data to the developer email address.

// Code help from: https://www.youtube.com/watch?v=1CkBsGhux9U

//define variable and set it to empty value
$firstName_error = $middleName_error = $lastName_error = $email_error = $phone_error= $message_error= "";
$firstName = $middleName = $lastName = $email = $phone = $message = $success_message = "";

// error messages trigger when the form is submitted
//The form is submitted with method POST
if( $_SERVER["REQUEST_METHOD"] == "POST" ){
    if(empty($_POST["firstName"])){
        $firstName_error = "*Please enter your first name - Required!";
    }
    else{
        $firstName = test_input($_POST["firstName"]);
        //check if name only contains letters and whitespace
        if(!preg_match( "/^[a-zA-Z ]*$/", $firstName)){
            $firstName_error = "*Only letters are allowed";
        }
    }

    if(!empty($_POST["middleName"])){
        $middleName = test_input($_POST["middleName"]);
        //check if name only contains letters and whitespace
        if(!preg_match( "/^[a-zA-Z ]*$/", $middleName)){
            $middleName_error = "*Only letters are allowed";
        }
    }

    if(empty($_POST["lastName"])){
        $lastName_error = "*Please enter your last name - Required!";
    }
    else{
        $lastName = test_input($_POST["lastName"]);
        //check if name only contains letters and whitespace
        if(!preg_match( "/^[a-zA-Z ]*$/", $lastName)){
            $lastName_error = "*Only letters are allowed";
        }
    }

    if(empty($_POST["phone"])){
        $phone_error = "*Please enter your phone number - Required!";
    }
    else{
        $phone = test_input($_POST["phone"]);
        //check if the phone number is valid
        if(!preg_match( "/^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i", $phone)){
            $phone_error = "*Invalid phone number";
        }
    }

    if(!empty($_POST["email"])){
        $email = test_input($_POST["email"]);
        //check if the email address is well formatted
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $email_error = "Invalid e-mail format";
        }
    }

    if(empty($_POST["message"])){
        $message = "";
    }
    else{
        $message = test_input($_POST["message"]);
    }

    // send the data to receiver email address
    if( $firstName_error == "" && $middleName_error == "" && $lastName_error == "" && $email_error == ""
        && $phone_error == "" && $message_error == "" ){
        $message_body= "";
        //unset the post submit because there is gonna be nothing in it
        unset($_POST['submit']);
        //loop through the submitted code
        foreach ($_POST as $key => $value){
            $message_body .= "$key: $value\n";
        }

        $to= "lucy.test.no1@gmail.com";
        $subject= "Contact Form Submit";

        //use mail function
        if(mail($to, $subject, $message_body)){
            $success_message = "Message successfully sent, Thank you for contacting us!";
            $firstName = $middleName = $lastName = $email = $phone = $message = "";
        }
        // else{
        //     $success_message = "Please Try Again!";
        //     $firstName = $middleName = $lastName = $email = $phone = $message = "";
        // }
    }
}

function test_input($data){
    $data= trim($data);
    $data= stripslashes($data);
    $data= htmlspecialchars($data);
    return $data;
}
