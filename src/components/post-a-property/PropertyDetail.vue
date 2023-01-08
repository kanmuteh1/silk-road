<template>
    <div class="property-details-form">
        <div id="head-of-detail-form">
            <p><b>Provide Property Details</b></p>
            <hr>
        </div>
        <div class="property-details-form-body">
            <div class="title">
                <input type="text" placeholder="Title">
            </div>
            <div class="property-details-section">
                <div class="detail-section-left">
                    <div class="detail-section-bedrooms">
                        <div class="bedrooms-input">
                            <input type="text" placeholder="Bedrooms">
                        </div>
                        <div class="bedrooms-select">
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="detail-section-livingrooms">
                        <div class="livingrooms-input">
                            <input type="text" placeholder="Livingrooms">
                        </div>
                        <div class="livingrooms-select">
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="detail-section-size">
                        <div class="size-input">
                            <input type="text" placeholder="Size">
                        </div>
                        <div class="size-select">
                            <select name="" id="">
                                <option value="" selected>Unit</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="detail-section-right">
                    <div class="detail-section-bathrooms">
                        <div class="bathrooms-input">
                            <input type="text" placeholder="Bathrooms">
                        </div>
                        <div class="bathrooms-select">
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="detail-section-kitchens">
                        <div class="kitchens-input">
                            <input type="text" placeholder="Kitchens">
                        </div>
                        <div class="kitchens-select">
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="detail-section-price">
                        <div class="price-input">
                            <input type="text" placeholder="Price ($)">
                        </div>
                        <div class="price-select">
                            <select name="" id="">
                                <option value="">/ month</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-section-address">
                <input type="text" placeholder="Physical Address / Landmarks">
            </div>
            <div class="detail-section-description">
                <textarea name="" id="" cols="30" rows="10" placeholder="Description"></textarea>
            </div>
            <div class="upload">
                <button><i class="fa-solid fa-arrow-up-from-bracket"></i> Upload Photo</button>
            </div>
            <div class="uploaded-imgs">
                <div class="uploaded-img"><img src="../../../images/living-room.jpg" alt=""></div>
                <div class="uploaded-img"><img src="../../../images/living-room.jpg" alt=""></div>
                <div class="uploaded-img"><img src="../../../images/living-room.jpg" alt=""></div>
                <div class="uploaded-img"><img src="../../../images/living-room.jpg" alt=""></div>
                <div class="uploaded-img"><img src="../../../images/living-room.jpg" alt=""></div>
            </div>
            <div class="amenities">
                <p><b>AMENITIES</b></p>
                <div class="amenities-grid">
                    <div class="amenities-section">
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="garage1">
                                    Garage
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="garage1">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="swimming-pool1">
                                    Swimming pool
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="swimming-pool1">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="laundry-room1">
                                    Laundry Room
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="laundry-room1">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="advertisment1">
                                    Advertisment
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="advertisment1">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="garden">
                                    Garden
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="garden">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="generator">
                                    Generator
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="generator">
                            </div>
                        </div>
                    </div>
                    <div class="amenities-section">
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="garage2">
                                    Garage
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="garage2">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="swimming-pool2">
                                    Swimming pool
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="swimming-pool2">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="laundry-room2">
                                    Laundry Room
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="laundry-room2">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="advertisment2">
                                    Advertisment
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="advertisment2">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="garden2">
                                    Garden
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="garden2">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="generator2">
                                    Generator
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="generator2">
                            </div>
                        </div>
                    </div>
                    <div class="amenities-section">
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="garage3">
                                    Garage
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="garage3">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="swimming-pool3">
                                    Swimming pool
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="swimming-pool3">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="laundry-room3">
                                    Laundry Room
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="laundry-room3">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="advertisment3">
                                    Advertisment
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="advertisment3">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="garden3">
                                    Garden
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="garden3">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="generator3">
                                    Generator
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="generator3">
                            </div>
                        </div>
                    </div>
                    <div class="amenities-section">
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="garage4">
                                    Garage
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="garage4">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="swimming-pool4">
                                    Swimming pool
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="swimming-pool4">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="laundry-room4">
                                    Laundry Room
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="laundry-room4">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="advertisment4">
                                    Advertisment
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="advertisment4">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="garden4">
                                    Garden
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="garden4">
                            </div>
                        </div>
                        <div class="amenity-block">
                            <div class="amenity">
                                <label for="generator4">
                                    Generator
                                </label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" id="generator4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="continue">
                <button>Continue</button>
            </div>
        </div>
    </div>
</template>

<style>
    .property-details-form{
        width: 60%;
        margin-bottom: 3%;
    }

    #head-of-detail-form {
        width: 50%;
    }
    
    #head-of-detail-form hr{
        margin-left: 0;
        width: 82%;
    }

    .property-details-form-body{
        width: 100%;
    }

    .property-details-section{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2%;
    }

    .detail-section-bedrooms,.detail-section-livingrooms,
    .detail-section-size,.detail-section-bathrooms,
    .detail-section-kitchens,.detail-section-price
    {
        display: flex;
    }

    ::placeholder{
        color: gray;
    }

    input,textarea{
        background-color: lightgrey;
        border: none;
        outline: none;
        color: gray;
    }

    select{
        background-color: gray;
        border: none;
        outline: none;
        color: white;
    }

    .title input, .detail-section-address input, .detail-section-description textarea{
        width: 96.8%;
        padding: 1% 0% 1% 3%;
        margin-bottom: 4%;
    }

    .detail-section-livingrooms,.detail-section-bedrooms,
    .detail-section-bathrooms,.detail-section-kitchens,
    .detail-section-size,.detail-section-price{
        width: 100%;
    }
    
    .livingrooms-input,.bedrooms-input{
        width: 80%;
    }

    .livingrooms-input input,.bedrooms-input input{
        width: 100%;
        padding: 2.7% 0% 2.8% 5%;
        margin-bottom: 7%;
    }

    .livingrooms-select select,.bedrooms-select select{
        padding: 23%;
    }

    .bathrooms-input,.kitchens-input{
        width: 87.8%;
    }

    .bathrooms-input input, .kitchens-input input{
        width: 100%;
        padding: 2.6% 0% 2.8% 5%;
        margin-bottom: 6%;
    }

    .bathrooms-select select{
        padding: 24%;
    }

    .kitchens-select select{
        padding: 25%;
    }

    .size-input,.price-input{
        width: 71%;
    }

    .size-input input, .price-input input{
        width: 100%;
        padding: 3.5% 0% 2.8% 5%;
        margin-bottom: 12%;
    }

    .size-select select{
        padding: 10%;
        margin-bottom: 12%;
    }

    .price-select select{
        padding: 6.5%;
        margin-bottom: 12%;
    }

    .upload{
        width: 30%;
    }

    .continue{
        width: 30%;
        margin-top: 4%;
        margin-left: 70%;
    }

    .upload button, .continue button{
        width: 100%;
        outline: none;
        padding: 5%;
        color: white;
        background-color: gray;
        border: none;
        border-radius: 5px 5px 5px 5px;
    }

    .uploaded-imgs{
        width: 98%;
        margin-top: 4%;
        padding: 2% 0% 1% 2.3%;
        background-color: lightgray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 1%;
    }

    .uploaded-img img{
        width: 85%;
        height: 8vh;
    }

    .amenities p{
        font-size: medium;
        color: rgb(192, 190, 190);
    }

    .amenities-grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .amenities-section{
        margin-right: 12%;
    }

    .amenity-block{
        margin-right: 4%;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .amenity{
        font-size: small;
        color: rgb(192, 190, 190);
    }
</style>

<script>
    export default {
        name: "PropertyDetail",
    }
</script>