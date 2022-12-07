<template>
    <section class="find-a-property">
        <div class="caption">
            <b>Real estate without hassle</b>
        </div>
        <div class="find">
            <input class="fas fa-search" placeholder="FIND A PROPERTY" type="text">
        </div>
        <div id="filfer-icon">
            <a href="/filter">
                <i class="fas fa-filter"></i> Filter
            </a>
        </div>
        <div class="latest">
            <div class="latest-txt">
                OUR LATEST POSTING
            </div>
            <i class="fas fa-arrow-down" id="arrow"></i>
        </div>
    </section>
</template>

<style>
    #body{
        font-family: Helvetica, Arial, sans-serif !important;
        margin: 0%;
        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=5");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
    }

    .find-a-property{
        width:40%;
        margin: 10% auto 0% auto;
    }

    .caption{
        font-family: Helvetica, Arial, sans-serif !important;
        color: white;
        font-size: 2.7rem;
    }

    .find{
        width: 100%;
        margin-bottom: 1.5%;
    }

    .find input{
        font-family: Helvetica, Arial, sans-serif !important;
        width: 100%;
        padding: 1.5%;
        background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5));
        color: white;
        outline: none;
        border: none;
    }

    ::placeholder{
        color: white;
    }

    #filfer-icon{
        width: 103%;
        text-align: right;
    }

    #filfer-icon a{
        text-decoration: none;
        color: #fff;
    }

    path{
        color:black;
    }

    .cls-1{
        fill:#fff;
    }

    #Layer_1{
        font-size: 12px;
    }

    .latest{
        margin-top: 35%;
        text-align: center;
        color: white;
    }
</style>

<script>
    
</script>