import React from 'react'

const Login = () => {
  return (
    <div>Login</div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    <link rel="stylesheet" href="Login.css" />
  </head>
  
  <body>
    <div class="login_form_container">
      <div class="login_form">
        <h2>Login</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input type="text" placeholder="Username" class="input_text" autocomplete="off" />
        </div>
        <div class="input_group">
          <i class="fa fa-unlock-alt"></i>
          <input type="password" placeholder="Password" class="input_text" autocomplete="off" />
        </div>
        <div class="button_group" id="login_button">
          <a>Submit</a>
        </div>
        <div class="fotter">
          <a>Forgot Password ?</a>
          <a>SingUp</a>
        </div>
      </div>
    </div>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="script.js"></script>
  </body>
  )
}

export default Login

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Animated Login From</title>
  

</html>