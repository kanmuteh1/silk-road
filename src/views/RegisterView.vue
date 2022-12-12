<template>
    <div class="register-container">
        <div class="register">
            <p class="register-txt"><b>Register</b></p>
            <div class="name">
                <div class="contact-icon-register">
                    <i class="fas fa-user"></i>
                </div>
                <div class="register-password">
                    <input type="text" placeholder="Full name">
                </div>
            </div>
            <div class="phone-number-register">
                <div class="country-code-register">
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
                <div class="phone-icon-register">
                    <i class="fas fa-phone-alt"></i>
                </div>
                <div class="register-contact">
                    <input type="text" name="num" placeholder="Phone number" class="Phone-number-register-input">
                </div>
            </div>
            <div class="password-register">
                <div class="lock-icon-register">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="register-password">
                    <input type="password" placeholder="Password">
                </div>
            </div>
            <div class="agree-to-register-policy">
                <a href="#" class="agree-to-register-policy-input">Forget password?</a>
            </div>
            <div class="register-btn">
                <button><b>Register</b></button>
            </div>
            <div class="social-media-register-icon">
                <p>
                    Register With
                    <i class="fab fa-facebook-square" id="facebook-icon-register"></i>  
                    <i class="fab fa-twitter-square" id="twitter-icon-register"></i>
                </p>
            </div>
        </div>
        <div class="login-your-account">
            <h2>Already have an account?</h2>
            <p class="login-account-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facere placeat rerum tempore a voluptas optio voluptatem
                sit maiores.
            </p>
            <div class="login-account-btn">
                <a href="/login">
                    <button><b>Login</b></button>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
    .body{
        font-family: Helvetica, Arial, sans-serif !important;
        margin: 0%;
        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=5");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
    }

    .register-container{
        margin-top: 5%;
        margin-left: 15%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
    }

    .register{
        margin-left: 5%;
        width: 30%;
        height: 51.5vh;
        padding: 1% 3% 3% 3%;
        background-color: white;
        color: black;
        position: absolute;
        z-index: 3;
    }

    .register .register-txt{
        color: gray;
        font-size: 1.5em;
    }

    ::placeholder{
        color: white;
    }

    .name{
        display: flex;
        margin-bottom: 5%;
    }

    .contact-icon-register{
        width: 12%;
    }

    .contact-icon-register i{
        width: 100%;
        background-color: lightgray;
        padding: 19.5% 2% 19.5%  40%;
    }

    .register-password{
        width: 82%;
    }

    .register-password input{
        width: 100%;
        border: none;
        outline: none;
        background-color: lightgray;
        padding: 3% 6% 3% 1%;
    }

    .phone-number-register{
        display: flex;
        margin-bottom: 4%;
    }

    .country-code-register{
        width: 20%;
    }

    .country-code-register select{
        width: 100%;
        background-color: gray;
        color: white;
        outline: none;
        padding: 10%;
    }
    
    .phone-icon-register{
        width: 10%;
    }

    .phone-icon-register i{
        width: 100%;
        background-color: lightgray;
        padding: 25.3% 2% 25%  40%;
    }

    .register-contact{
        width: 63%;
    }

    .Phone-number-register-input{
        width: 100%;
        outline: none;
        border: none;
        background-color: lightgray;
        padding: 4.4% 6% 4% 5%;
    }

    .password-register{
        display: flex;
        margin-bottom: 5%;
    }

    .lock-icon-register{
        width: 12%;
    }

    .lock-icon-register i{
        width: 100%;
        background-color: lightgray;
        padding: 19.4% 2% 19.5%  40%;
    }

    .register-password{
        width: 82%;
    }

    .register-password input{
        width: 100%;
        border: none;
        outline: none;
        background-color: lightgray;
        padding: 3% 6% 3% 1%;
    }

    .agree-to-register-policy{
        width: 100%;
        text-align: right;
        margin-bottom: 4%;
    }

    .agree-to-register-policy a{
        text-decoration: none;
        font-size: small;
    }

    .register-btn{
        width: 100%;
        text-align: right;
    }

    .register-btn button{
        outline: none;
        border: 2px solid gray;
        border-radius: 5px 5px 5px 5px;
        width: 40%;
        background-color: gray;
        padding: 2%;
        color: white;
    }

    .social-media-register-icon{
        margin-bottom: 5%;
    }

    .social-media-register-icon p i{
        font-size: 1.5em;
    }

    #facebook-icon-register{
        margin-right: 2%;
    }

    .login-your-account{
        margin-top: 6.5%;
        padding: 5% 0% 5% 90%;
        border: .5px solid lightgray;
        height: 38vh;
        color: white;
        background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7));
        width: 70%;
        position: relative;
        z-index: 1;
    }

    .login-account-txt{
        width: 90%;
    }

    .login-account-btn{
        width: 32%;
        margin-top: 5%;
    }

    .login-account-btn button{
        width: 100%;
        padding: 5% 15% 5% 15%;
        border: 2px solid white;
        color: white;
        border-radius: 5px 5px 5px 5px;
        background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));

    }
</style>

<script>
    export default {
        beforeCreate(){
            document.body.className = "body"
        }
    
    };
</script>