<?php

ini_set('session.use_only_cookies', 1);
ini_set('session.use_strict_mode', 1);

session_set_cookie_params
(
    [
        'lifetime' => 1800,
        'domain' => 'localhost',
        'path' => '/',
        'secure' => true,
        'httponly' => true
    ]
);

session_start();

// function to regenerate session id
function regenerate_session_id()
{
    //update the session id
    session_regenerate_id(true);

    //tracks time to know when to update id again
    $_SESSION['last_regeneration'] = time();
}

function regenerate_session_id_loggedin()
{
    //update the session id
    session_regenerate_id(true);

    $userId = $_SESSION["user_id"];
    $newSessionId = session_create_id();
    $sessinId = $newSessionId . "_" . $userId;
    session_id($sessionId);

    //tracks time to know when to update id again
    $_SESSION['last_regeneration'] = time();
}


// user logged in
if (isset($_SESSION["user_id"]))
{
    //if updated id does not exist then update id
    if (!isset($_SESSION['last_regeneration']))
    {
        regenerate_session_id_loggedin();
    }

    else
    {
        $interval = 60*30; //interval of 30 min

        // if time > 30 min then regenerate id
        if (time() - $_SESSION['last_regeneration'] >= $interval)
        {
            regenerate_session_id_loggedin();
        }
    }
}

// user not logged in
else
{
    //if updated id does not exist then update id
    if (!isset($_SESSION['last_regeneration']))
    {
        regenerate_session_id();
    }

    else
    {
        $interval = 60*30; //interval of 30 min

        // if time > 30 min then regenerate id
        if (time() - $_SESSION['last_regeneration'] >= $interval)
        {
            regenerate_session_id();
        }
    }
}