<template>
    <div class="home-location">
        <div id="select-county">
            <p><b>Select County</b></p>
            <hr>
            <p><b>Counties</b></p>
            <div class="countiesAndOptions">
                <div class="counties">
                    <div class="county"><p>Bomi</p></div>
                    <div class="county"><p>Bong</p></div>
                    <div class="county"><p>Gbarpolu</p></div>
                    <div class="county"><p>Grand Bassa</p></div>
                    <div class="county"><p>Grand Cape Mount</p></div>
                    <div class="county"><p>Grand Gedeh</p></div>
                    <div class="county"><p>Grand Kru</p></div>
                    <div class="county"><p>Lofa</p></div>
                    <div class="county"><p>Margibi</p></div>
                    <div class="county"><p>Montserrado</p></div>
                    <div class="county"><p>Maryland</p></div>
                    <div class="county"><p>Nimba</p></div>
                    <div class="county"><p>Rivercess</p></div>
                    <div class="county"><p>River Gee</p></div>
                    <div class="county"><p>Sinoe</p></div>
                </div>
                <div class="options">
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                </div>
            </div>
        </div>
        <div id="district-select">
            <p><b>Select a District with in Grand Cape Mount</b></p>
            <hr>
            <p><b>Popular Areas</b></p>
            <div class="districtAndOptions">
                <div class="districts">
                    <div class="district"><p>Commonwealth</p></div>
                    <div class="district"><p>Garwula District</p></div>
                    <div class="district"><p>Gola Konneh</p></div>
                    <div class="district"><p>Porkpa District</p></div>
                    <div class="district"><p>Tewor District</p></div>
                </div>
                <div class="options">
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                    <div class="option">
                        <p><i class="fa-solid fa-circle-chevron-right"></i></p>
                    </div>
                </div>
            </div>
            <p>Other areas within the county</p>
            <div class="other-areas">
                <div class="areas-input">
                    <input type="text" class="input-for-areas" placeholder="Other areas (A-Z)">
                </div>
                <div class="area-select">
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Area</option>
                        <option value="">Area</option>
                        <option value="">Area</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .home-location{
        margin-bottom: 4%;
    }

    #select-county, #select-district {
        width: 45%;
    }
    

    #select-county hr, #district-select hr{
        margin-left: 0;
        width: 82%;
    }

    .countiesAndOptions, .districtAndOptions{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5%;
    }

    .home-location{
        display: flex;
    }

    .other-areas{
        display: flex;
    }

    .areas-input input{
        width: 98%;
        padding: 2.5%;
        border: none;
        outline: none;
        background-color: lightgrey;
        color: gray;
    }

    .input-for-areas::placeholder{
        color: gray !important;
    }

    .area-select select{
        width: 50%;
        padding: 7%;
        border: none;
        outline: none;
        color: white;
        background-color: gray;
    }
</style>

<script>
    export default {
        name: "Location",
    }
</script>