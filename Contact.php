<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Homepage</title>
    <?php include('Form_process.php'); ?>
    <link rel="stylesheet" type="text/css" href="CSS/styleSheet.css">
    <link rel="stylesheet" type="text/css" href="CSS/Normalize.css">
</head>
<body>

<header>
    <div id="logoDiv"> <a href="Homepage.html" alt="homepage" >
            <img src="Images/companyLogo.png" alt="logo image" style = "border-radius: 50%;"> </a>
    </div>

    <div id="nameDiv">
        <h1> <a href="Homepage.html" > RS Cleaning Services </a> </h1>
    </div>

    <nav>
        <list> <b>
                <ul> <a href="Contact.php" alt="contact webpage"> CONTACT </a></ul>
                <ul> <a href="Services.html" alt="services webpage"> SERVICES </a></ul>
                <ul> <a href="About.html" alt="about us webpage"> ABOUT </a> </ul></b>
        </list>
    </nav>

    <div id="search">

    </div>

</header>
<br>

<section id="contactSec">
    <form id="myForm" action="<?= $_SERVER['PHP_SELF']; ?>"  method="POST">
        <label for="firstName"> First Name </label>
        <input type="text" id="firstName" name="firstName" value="<?= $firstName ?>" size="10"/>
        <span class="error"><?= $firstName_error ?></span> <br>

        <label for="middleName"> Middle Name </label>
        <input type="text" id="middleName" name="middleName" value="<?= $middleName ?>" size="10"/>
        <span class="error"><?= $middleName_error ?></span> <br>

        <label for="lastName"> Last Name </label>
        <input type="text" id="lastName" name="lastName" value="<?= $lastName ?>" size="10"/>
        <span class="error"><?= $lastName_error ?></span> <br>

        <label for="email"> E-mail </label>
        <input type="text" id="email" name="email" value="<?= $email ?>" size="20"/>
        <span class="error"><?= $email_error ?></span><br>

        <label for="phone"> Phone </label>
        <input type="text" id="phone" name="phone" value="<?= $phone ?>"/>
        <span class="error"><?= $phone_error ?></span><br>

        <label for="Message"> Message </label><br><br>
        <textarea id="Message" name="message" placeholder="Please type your message here..." value="<?= $message ?>"></textarea><br><br>
        <span class="error"><?= $message_error ?></span> <br>

        <label for="file"> Upload your resume </label>
        <input type="file" name="file"/>

        <div id="success"> <?= $success_message ?></div>
        
        <input type="reset"/>
        <input type="submit"/>
        <br>
        <div>
            <fieldset>
                <legend><h3> Contact Info: </h3></legend>
                <p> Phone: (902) 410-7130 <br>
                    <span> E-mail: lucy.test.no1@gmail.com </span> </p>
            </fieldset>
        </div>
    </form>

</section>


<footer>
    <div id="facebookLogo"> <a href="https://www.facebook.com/RS-cleaning-services-110872600352850/" target="_blank" >
            <img src="Images/facebookIcon.png" alt="facebook logo"> </a>
    </div>
    <div class="footerDiv">
        Developer Info
    </div>
    <div class="footerDiv"> <a href="About.html" alt="link">
            About us </a>
    </div>
    <div class="footerDiv"> <a href="Contact.php" alt="contact link">
            Contact </a>
    </div>
    <div class="footerDiv"> <a href="Contact.php" alt="contact webpage">
            Apply here</a>
    </div>
    <p id="copy"> &copy; Sanam Rai</p>
</footer>
<script src="JS/script.js"></script>
</body>
</html>
