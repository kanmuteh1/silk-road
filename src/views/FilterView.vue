<template>
    <section class="filter">
        <div class="filter-nav">
            <div class="filter-nav-icon">
                <i class="fas fa-filter" id="filter"> Filter</i>
            </div>
            <div class="filter-nav-links">
                <a href="#">All</a>
                <a href="#">Rent</a>
                <a href="#">Sale</a>
            </div>
        </div>
        <div class="keywords">
            <input type="text" placeholder="KEYWORD">
        </div>
        <div class="cat-searches">
            <div class="cat-left">
                <select class="cat-selesion">
                    <option value="category">Category</option>
                    <option value="category">Category</option>
                    <option value="category">Category</option>
                    <option value="category">Category</option>
                </select>
                <select class="cat-selesion">
                    <option value="1">No. of Bedrooms</option>
                    <option value="2">No. of Bedrooms</option>
                    <option value="3">No. of Bedrooms</option>
                    <option value="4">No. of Bedrooms</option>
                    <option value="5">No. of Bedrooms</option>
                </select>
                <br />
                <b class="cat-price">Price: $<output id="rangevalue">00,00</output> - $10,000.00</b>
                <br />
                <input type="range" min="0" max="10000" class="cat-range" oninput="rangevalue.value=value"/>
            </div>
            <div class="cat-right">
                <select class="cat-selesion">
                    <option value="monrovia">Location</option>
                    <option value="monrovia">Location</option>
                    <option value="monrovia">Location</option>
                    <option value="monrovia">Location</option>
                    <option value="monrovia">Location</option>
                    <option value="monrovia">Location</option>
                </select>
                <select class="cat-selesion">
                    <option value="1">No. of Bedrooms</option>
                    <option value="2">No. of Bedrooms</option>
                    <option value="3">No. of Bedrooms</option>
                    <option value="4">No. of Bedrooms</option>
                    <option value="5">No. of Bedrooms</option>                        
                </select>                        
                <button class="cat-find"><b>Find it</b></button>
            </div>
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

    .filter{
        padding: 2% 6% 2% 6%;
        width: 40%;
        margin: 8% auto 0% auto;
        background: linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7));
    }

    .filter-nav{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .filter-nav-icon{
        color: white;
    }

    .filter-nav-links{
        text-align: right;
    }

    .filter-nav-links a{
        text-decoration: none;
        color: white;
        margin-left: 12%;
    }

    .keywords{
        padding: 2% 1% 0% 1%;
    }

    .keywords input{
        width: 97%;
        outline: none;
        font-weight: bold;
        padding: 1.3% .5% 1.3% 4%;
        background-color: black;
        border: none;
    }

    ::placeholder{
        color: white;
    }

    .cat-searches{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8%;
        width: 99.5%;
        padding: 3.5% 0% 1.3% 0%;
        margin-left: 1%;
    }

    .cat-selesion{
        text-align: left;
        width: 100%;
        outline: none;
        font-weight: bold;
        padding: 2% 4% 2% 8%;
        background-color: gray;
        color: white;
        border: none;
        margin-bottom: 6%;
    }

    .cat-right{
        text-align: right;
    }

    .cat-price{
        color: white;
        font-size: small;
    }

    .cat-find{
        width: 50%;
        background-color: blue;
        color: white;
        padding: 2%;
        border: 2px solid blue;
        border-radius: 5px 5px 5px 5px;
        cursor: pointer;
    }

    .cat-range{
        margin-left: 0%;
        width: 100%;
    }
</style>

<script>

</script>