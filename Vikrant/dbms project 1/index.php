<?php
    require_once 'includes/config_session.inc.php';
    require_once 'includes/login_view.inc.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login_css.css">
    <title>MUJ Page</title>
    <link rel="icon" href="Manipal_logo.png" type = "image/x-icon">
</head>

<body>

    <h3>
        <?php
            output_username();
        ?>
    </h3>

    <div class="container" id="container">
        <div class="form-container Student">

            <form action="includes/login.inc.php" method = 'post'>
                <h1>Student Login</h1>
                <input type="text" name = "username" placeholder = "Username">
                <input type="password" name = "pwd" placeholder = "Password">
                <button>Login</button>
            </form>
        </div>
        <div class="form-container Professor">

        <form action="includes/login.inc.php" method = 'post'>
                <h1>Professor</h1>
                <input type="text" name = "username" placeholder = "Username">
                <input type="password" name = "pwd" placeholder = "Password">
                <button>Login</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-right">
                    <h1>Welcome Student</h1>
                    <p>Enter your details</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Professor</h1>
                    <p>Enter your details</p>
                    <button class="hidden" id="register">Sign In</button>
                </div>
            </div>
        </div>
    </div>

    <script src="login_js.js"></script>
</body>

</html>
