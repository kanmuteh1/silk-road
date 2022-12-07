<template>
    <div class="login-container">
        <div class="create-an-account">
            <h2>Don't have an account?</h2>
            <p class="create-an-account-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere placeat rerum tempore a voluptas optio voluptatem
                sit maiores.
            </p>
            <div class="create-an-account-btn">
                <a href="/register">
                    <button><b>Register</b></button>
                </a>
            </div>
        </div>
        <div class="login">
            <p class="login-txt"><b>Login</b></p>
            <div class="phone-number">
                <div class="country-code-login">
                    <select name="country-code" value="+231">
                        <option value="+231">
                            <p>+ 231</p>
                        </option>
                        <option value="+231">+ 123</option>
                        <option value="+231">+ 232</option>
                        <option value="+231">+ 1</option>
                        <option value="+231">+ 223</option>
                        <option value="+231">+ 332</option>
                        <option value="+231">+ 323</option>
                    </select>
                </div>
                <div class="phone-icon">
                    <i class="fas fa-phone-alt"></i>
                </div>
                <div class="login-contact">
                    <input type="text" name="num" placeholder="Phone number" class="Phone-number-login">
                </div>
            </div>
            <div class="password">
                <div class="lock-icon">
                    <i class="fas fa-lock" id="lock"></i>
                </div>
                <div class="login-password">
                    <input type="password" placeholder="Password" class="password-login">
                </div>
            </div>
            <div class="forget-password">
                <a href="#" class="forget-password-login">Forget password?</a>
            </div>
            <div class="login-btn">
                <button><b>Login</b></button>
            </div>
            <div class="social-media-login-icon">
                <p>
                    Login With
                    <i class="fab fa-facebook-square" id="facebook-icon"></i>  
                    <i class="fab fa-twitter-square" id="twitter-icon"></i>
                </p>
            </div>
        </div>
    </div>
</template>

<style>
    .login-container {
        margin-top: 5%;
        margin-left: 15%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
    }

    .create-an-account{
        margin-top: 6%;
        padding: 5% 50% 5% 10%;
        border: .5px solid lightgray;
        height: 38vh;
        color: white;
        background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7));
        width: 100%;
        position: relative;
        z-index: 1;
    }

    .create-an-account-txt{
        width: 65%;
    }

    .create-an-account-btn{
        width: 28%;
        margin-top: 5%;
    }

    .create-an-account-btn button{
        width: 100%;
        padding: 5% 15% 5% 15%;
        border: 2px solid white;
        color: white;
        border-radius: 5px 5px 5px 5px;
        background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));

    }

    .login {
        width: 30%;
        margin-left: 40%;
        height: 48vh;
        padding: 3%;
        background-color: white;
        color: black;
        position: absolute;
        z-index: 3;
    }

    .login .login-txt{
        color: gray;
        font-size: 1.5em;
    }

    ::placeholder{
        color: white;
    }

    .phone-number {
        display: flex;
        margin-bottom: 4%;
    }

    .country-code-login{
        width: 20%;
    }

    .country-code-login select{
        width: 100%;
        background-color: gray;
        color: white;
        outline: none;
        padding: 10%;
    }
    
    .phone-icon{
        width: 10%;
    }

    .phone-icon i{
        width: 100%;
        background-color: lightgray;
        padding: 25.3% 2% 25%  40%;
    }

    .login-contact{
        width: 63%;
    }

    .Phone-number-login{
        width: 100%;
        outline: none;
        border: none;
        background-color: lightgray;
        padding: 4.4% 6% 4% 5%;
    }

    .password {
        display: flex;
        margin-bottom: 5%;
    }


    .lock-icon{
        width: 12%;
    }

    .lock-icon i{
        width: 100%;
        background-color: lightgray;
        padding: 19.5% 2% 19.5%  40%;
    }

    .login-password{
        width: 82%;
    }

    .login-password input{
        width: 100%;
        border: none;
        outline: none;
        background-color: lightgray;
        padding: 3% 6% 3% 1%;
    }

    .forget-password{
        width: 100%;
        text-align: right;
        margin-bottom: 4%;
    }

    .forget-password a{
        text-decoration: none;
        font-size: small;
    }

    .login-btn{
        width: 100%;
        text-align: right;
    }

    .login-btn button{
        outline: none;
        border: 2px solid gray;
        border-radius: 5px 5px 5px 5px;
        width: 40%;
        background-color: gray;
        padding: 2%;
        color: white;
    }

    .social-media-login-icon p i{
        font-size: 1.5em;
    }

    #facebook-icon{
        margin-right: 2%;
    }
</style>

<script>

</script>