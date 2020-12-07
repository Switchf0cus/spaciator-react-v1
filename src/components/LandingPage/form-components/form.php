<?php
    if(isset($_GET["username"])) {
        $user =$_GET['username'];
        $pass =$_GET['password'];

        $server = "www.ugamer.gr/spaciators/register.php?username=" . $user ."&password=" . $pass;

        $ch = curl_init();
        curl_setopt($ch , CURLOPT_URL , $server);
        curl_setopt($ch , CURLOPT_RETURNTRANSFER , true);

        $result = curl_exec($ch);
        echo $result;

        curl_close($ch);

    }
?>

<div>
      <!-- <a href="ugamer.gr/spaciators/index.php"> </a> -->
      <form action="index.php" method="get">

        <input
          type="text"
          autoComplete="off"
          placeholder="username"
          name="username"
        ></input>
        <br></br>

        <input
          type="password"
          autoComplete="off"
          placeholder="password"
          name="password"
        ></input>
        <br></br>
        <button type="submit"> Register </button>
      </form>
    </div>