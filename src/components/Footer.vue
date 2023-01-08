<template>
    <div class="footer">
        <div class="footer-details">
            <div class="contact-us">
                <p><b>CONTACT US</b></p>
                <p class="location">6116 Second W Gore Crescent,<br> Monrovia,Liberia, West Africa</p>
                <p class="contact">+231 777524524 <br> silkroad@kwagei.com</p>
                <p class="social-media">
                    <i class="fa fa-instagram" id="instagram-icon"></i>
                    <i class="fa fa-facebook" id="facebook-icon"></i>  
                    <i class="fa fa-twitter" id="twitter-icon"></i>
                </p>
            </div>
            <div class="quick-links">
                <p><b>QUICK LINKS</b></p>
                <div class="footer-nav">
                    <div class="left-nav">
                        <p>Register</p>
                        <p>Login</p>
                        <p>Post Property</p>
                        <p>Our Recent Postings</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                    </div>
                    <div class="right-nav">
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
            <div class="our-recent-postings">
                <p><b>OUR RECENT POSTINGS</b></p>
                <div class="post">
                    <p>
                        <b>3 Bedroom Apartment at siakor Height</b> <br>
                        <span><i class="fa-solid fa-location-dot"></i> 45 Circle Dr, Monrovia, Liberia</span>
                    </p>
                </div>

                <div class="post">
                    <p>
                        <b>3 Bedroom Apartment at siakor Height</b> <br>
                        <span><i class="fa-solid fa-location-dot"></i> 45 Circle Dr, Monrovia, Liberia</span>
                    </p>
                </div>

                <div class="post">
                    <p>
                        <b>3 Bedroom Apartment at siakor Height</b> <br>
                        <span><i class="fa-solid fa-location-dot"></i> 45 Circle Dr, Monrovia, Liberia</span>
                    </p>
                </div>
                
            </div>
        </div>

        <hr>
        <div class="footer-copyright">
            <div class="copyright">
                <p>Copyright &COPY;2017-Kwagei Group - All rights reserved</p>
            </div>
            <div class="copyright-company">
                <h3>SILKROAD</h3>
            </div>
        </div>
    </div>
</template>

<style>
    .footer{
        width: 100%;
        background-color: gray;
        color: white;
        margin: auto;
    }

    .footer-details{
        width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .contact-us .location{
        font-size: .96rem;
    }

    .contact-us .contact{
        font-size: .96rem;
    }

    .contact-us .social-media i{
        padding-right: 6%;
        font-size: .96rem;
    }

    .footer-nav{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: -5%;
    }

    .left-nav{
        font-size: .96rem;
    }

    .right-nav{
        font-size: .96rem;
    }

    .quick-links{
        margin-left: 15%;
    }

    .our-recent-postings{
        margin-left: 25%;
    }

    .post{
        margin-bottom: 10%;
    }

    .post p b{
        font-size: .9em;
    }

    .post p span{
        font-size: small;
    }

    .footer-copyright{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
</style>

<script>
    export default {
        name: "Footer_component",
    };
</script>