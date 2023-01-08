<template>
    <div id="contact">
        <p><b>Provide contact addional details</b></p>
        <hr>
        <div class="owner-name">
            <p><b>Name</b></p>
            <p>Peter Wayne</p>
        </div>
        <div class="owner-email">
            <p><b>Email</b></p>
            <p>peter.wayne@gmail.com</p>
        </div>

        <div class="more-personal-contact">
            <p><b>Provide contact addional details</b></p>
            <div class="owner-contact">
                <div class="owner-country-code">
                    <select name="" value="+231">
                        <option value="+231"><p>+ 231</p></option>
                        <option value="+231">+ 123</option>
                        <option value="+231">+ 232</option>
                        <option value="+231">+ 1</option>
                        <option value="+231">+ 223</option>
                        <option value="+231">+ 332</option>
                        <option value="+231">+ 323</option>
                    </select>
                </div>
                <div class="owner-phone-icon">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div class="owner-login-contact">
                    <input type="text" name="num" placeholder="Phone number">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    #contact {
        width: 45%;
        margin-bottom: 12%;
    }
    #contact hr{
        margin-left: 0;
        width: 82%;
    }

    .owner-contact{
        display: flex;
    }

    .owner-country-code{
        width: 16%;
    }

    .owner-country-code select{
        width: 100%;
        background-color: gray;
        padding: 8%;
    }

    .owner-phone-icon{
        width: 8%;
    }

    .owner-phone-icon i{
        width: 100%;
        background-color: lightgray;
        padding: 18%;
    }

    .owner-login-contact input{
        padding: 3.4%;
    }
</style>

<script>
    export default {
        name: "Contact",
    }
</script>