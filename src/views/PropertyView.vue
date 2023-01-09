<template>
    <div class="properties-container">
        <div class="search-column">
            <div class="search-txt">
                <p><b>Search</b></p>
            </div>
            <div class="search">
                <div class="search-input">
                    <input type="text" placeholder="Search">
                </div>
                <div class="search-icon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>

            <div class="category-txt">
                <span>Category</span>
            </div>
            <div class="category">
                <div class="category-input">
                    <input type="text" class="input-category" placeholder="Most Recent">
                </div>
                <div class="category-select">
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Recent</option>
                        <option value="">Recent</option>
                        <option value="">Recent</option>
                    </select>
                </div>
            </div>

            <div class="category-txt">
                <span>Category</span>
            </div>
            <div class="category">
                <div class="category-input">
                    <input type="text" class="input-category" placeholder="Most Recent">
                </div>
                <div class="category-select">
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Recent</option>
                        <option value="">Recent</option>
                        <option value="">Recent</option>
                    </select>
                </div>
            </div>

            <div class="category-txt">
                <span>Category</span>
            </div>
            <div class="category">
                <div class="category-input">
                    <input type="text" class="input-category" placeholder="Most Recent">
                </div>
                <div class="category-select">
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Recent</option>
                        <option value="">Recent</option>
                        <option value="">Recent</option>
                    </select>
                </div>
            </div>

            <div class="category-txt">
                <span>Category</span>
            </div>
            <div class="category">
                <div class="category-input">
                    <input type="text" class="input-category" placeholder="Most Recent">
                </div>
                <div class="category-select">
                    <select name="" id="">
                        <option value=""></option>
                        <option value="">Recent</option>
                        <option value="">Recent</option>
                        <option value="">Recent</option>
                    </select>
                </div>
            </div>

            <div class="price-range">
                <div class="category-price">
                    <span>Price: $<output id="rangevalue">00.00</output> - $10,000.00</span>
                </div>
                <div class="range">
                    <input type="range" min="0" max="10000" oninput="rangevalue.value=value"/>
                </div>
            </div>
            <div class="search-done">
                <button><b>Done</b></button>
            </div>
        </div>
        
        <div class="houses-wrapper"> 
            <div class="single-house">
                <div class="single-house-img">
                    <img src="../../images/living-room.jpg" alt="">
                </div>
                <div class="next-house">
                    <div class="go-left"><span><b>&lt;</b></span></div>
                    <div class="go-right"><span><b>&gt;</b></span></div>
                </div>
                <div class="carousel">
                    <div class="crousel-scroll">
                        <div class="scroll-left"><span><b>&lt;&lt;</b></span></div>
                        <div class="scroll-right"><span><b>&gt;&gt;</b></span></div>
                    </div>
                   <div class="carousel-images">
                        <div class="carousel-img">
                            <img src="../../images/living-room.jpg" alt="">
                        </div>
                        <div class="carousel-img">
                            <img src="../../images/living-room.jpg" alt="">
                        </div>
                        <div class="carousel-img">
                            <img src="../../images/living-room.jpg" alt="">
                        </div>
                        <div class="carousel-img">
                            <img src="../../images/living-room.jpg" alt="">
                        </div>
                        <div class="carousel-img">
                            <img src="../../images/living-room.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-house-position">
                <div class="pos"></div>
                <div class="pos"></div>
                <div class="pos"></div>
                <div class="pos"></div>
                <div class="pos"></div>
                <div class="pos"></div>
                <div class="pos"></div>
                <div class="pos"></div>
                <div class="pos"></div>
            </div>
            <div class="single-house-details">
                <div class="single-house-discription">
                    <span class="size"><b>3 Bedroom house</b></span>
                    <br>
                    <span class="location"><i class="fa-solid fa-location-dot"></i> 45 Circle Dr, Monrovia, Liberia</span>
                </div>
                <div class="single-house-price">
                    <p><sup>$</sup><b>500/</b>month</p>
                </div>
            </div>
            <div class="single-house-reaction-buttons">
                <div id="triangle" class="reaction-btn">
                    <div class="icon">
                        <span class="material-symbols-outlined">change_history</span>
                    </div>
                    <div class="count">
                        <span>2</span>
                    </div>
                </div>
                <div class="reaction-btn">
                    <div class="icon" id="book">
                        <span><i class="fa-solid fa-book"></i></span>
                    </div>
                    <div class="count">
                        <span>3</span>
                    </div>
                </div>
                <div id="memory" class="reaction-btn">
                    <div class="icon">
                        <span class="material-symbols-outlined">memory</span>
                    </div>
                    <div class="count">
                        <span>4</span>
                    </div>
                </div>
                <div id="views" class="reaction-btn">
                    <div class="icon">
                        <span class="material-symbols-outlined">desktop_windows</span>
                    </div>
                    <div class="count">
                        <span>4</span>
                    </div>
                </div>
            </div>
            <div class="single-house-owner">
                <span>Peter Wayne</span>
            </div>
            <div class="single-house-owner-contacts">
                <div id="owner-contacts-phone" class="owner-contact-btn"><button><i class="fa fa-phone" aria-hidden="true"></i> Give Peter a Call</button></div>
                <div id="owner-contacts-email" class="owner-contact-btn"><button><i class="fa fa-at" aria-hidden="true"></i> Send Peter an Email</button></div>
            </div>
            <div class="single-house-description">
                <p><b>Property Description</b></p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo qui a ratione culpa quasi delectus. Vero, ipsam? 
                    Magni, totam! Assumenda deserunt recusandae quas vitae 
                    magnam eligendi quo quis quidem voluptatem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo qui a ratione culpa quasi delectus. Vero, ipsam? 
                    Magni, totam! Assumenda deserunt recusandae quas vitae 
                    magnam eligendi quo quis quidem voluptatem!
                </p>
            </div>
            <div class="available-amenities">
                <p><b>Available Amenities</b></p>
                <div class="amenities-div">
                    <div class="amenities">
                        <p>Garage</p>
                        <p>Swimming pool</p>
                        <p>Lundry Room</p>
                        <p>Advertisements</p>
                        <p>Garden</p>
                        <p>Generator</p>
                    </div>
                    <div class="amenities">
                        <p>Study</p>
                        <p>Internet Access</p>
                        <p>Satellite Television</p>
                        <p>Fatted Kitchen</p>
                        <p>Water Reservoir</p>
                        <p>Store Room</p>
                    </div>
                    <div class="amenities">
                        <p>Running Water</p>
                        <p>Electricity</p>
                        <p>Generator</p>
                        <p>Gazebo</p>
                        <p>Blacony</p>
                        <p>Security Fance</p>
                    </div>
                </div>
            </div>
            <div class="share-property">
                <p><b>Share Property</b></p>
                <i class="fa fa-facebook" id="facebook-icon"></i>  
                <i class="fa fa-instagram" id="instagram-icon"></i>
                <i class="fa fa-twitter" id="twitter-icon"></i>
                <p><b>Share Property</b></p>
            </div>
            <div class="mapouter">
                <div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org"></a><br>
                    <a href="https://www.embedgooglemap.net">responsive google map embed</a>
                </div>
            </div>
        </div>

        <div class="grid-adv">
            <h3>Advertisements</h3>
        </div>
    </div>

    <Footer />
</template>

<style>
    .properties-body{
        background-color: rgb(241, 237, 237);
    }

    .properties-container{
        width: 92%;
        margin: 2% auto 0% auto;
        display: grid;
        row-gap: 4%;
        column-gap: 2%;
        grid-template-columns: .68fr 1fr 1fr .68fr;
    }

    .search-column{
        width: 100%;
        height: 75vh;
        padding: auto;
        grid-row-start: 1;
        grid-row-end: 4;
        background-color: lightgrey;
    }

    .search-txt{
        margin: auto;
        width: 90%;
        color: gray;
    }

    .search{
        margin: auto;
        width: 90%;
        display: flex;
    }

    .search-input{
        width: 85%;
    }

    .search-input input{
        width: 100%;
        outline: none;
        border: none;
        background-color: gray;
        color: white;
        padding: 4%;
    }
    
    ::placeholder {
        color: white;
    }

    .search-icon{
        width: 10%;
    }

    .search-icon i{
        color: white;
        padding: 32.5%;
        background-color: gray;
    }

    .category-txt{
        margin: 4% auto 4% auto;
        width: 90%;
    }

    .category-txt span{
        font-size: .9em;
        color: gray;
    }

    .category{
        margin: auto;
        width: 90%;
        display: flex;
    }

    .category-input{
        width: 90%;
    }

    .category-input input{
        width: 100%;
        outline: none;
        border: none;
        background-color: white;
        color: gray;
        padding: 4%;
    }

    .input-category::placeholder{
        color: gray !important;
    }

    .category-select{
        width: 10%;
        background-color: gray;
    }

    .category-select select{
        width: 100%;
        border: none;
        outline: none;
        color: white;
        padding: 51% 40% 13% 30%;
        background-color: gray;
    }

    .category-price{
        margin: 4% auto 4% auto;
        width: 88%;
    }

    .category-price span{
        font-size: 1em;
        color: gray;
    }

    .range{
        margin: 4% auto 4% auto;
        width: 90%;
    }

    .range input{
        width: 98%;
        height: .5vh;
        background-color: rgb(115, 183, 115);
    }

    input[type="range"]::-webkit-slider-thumb{
        background-color: rgb(115, 183, 115);
    }

    .search-done{
        width: 90%;
        margin: auto;
    }

    .search-done button{
        width: 100%;
        padding: 5%;
        font-size: .8em;
        background-color: gray;
        color: white;
        border: 1px solid gray;
        border-radius: 5px 5px 5px 5px;
    }

    .grid-head{
        width: 100%;
        height: 11vh;
        grid-column-start: 2;
        grid-column-end: 5;
        background-color: lightgray;
    }

    .houses-wrapper{
        width: 100%;
        grid-column-start: 2;
        grid-column-end: 4;
    }

    /* code here */
    .single-house{
        width: 100%;
        position: relative;
    }

    .single-house-img{
        position: relative;
        z-index: 1;
    }

    .single-house-img img{
        width: 100%;
    }

    .next-house{
        width: 98%;
        margin: -35% 1% 0% 1%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        z-index: 3;
    }

    .go-left, .go-right {
        width: 3%;
        text-align: center;
        padding: 1%;
        background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8));
    }

    .carousel{
        background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8));
        width: 100%;
        height: 15vh;
        margin-top: -13.8%;
        position: absolute;
        z-index: 3;
    }

    .crousel-scroll{
        width: 98%;
        margin: 5.3% auto 0% auto;
        display: flex;
        justify-content: space-between;
    }

    .carousel-images{
        width: 90%;
        height: 13vh;
        margin: -7.4% auto 0% auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 1%;
    }

    .carousel-img{
        width: 98%;
        height: 12vh;
        margin: auto;
    }
    

    .carousel-img img{
        width: 100%;
        height: 12vh;
    }

    .single-house-position{
        text-align: center;
        width: 18%;
        margin: auto;
        display: flex;
        margin-top: 1%;
        padding-left: 3%;
    }

    .pos{
        width: 3%;
        border: 1px solid black;
        border-radius: 100%;
        height: .8vh;
        margin-right: 5%;
    }

    .single-house-details{
        width: 100%;
        margin-top: 1.5%;
        display: flex;
        justify-content: space-between;
    }

    .size{
        color: gray;
    }

    .single-house-details .location{
        color: gray;
        font-size: small;
    }

    .single-house-price {
        background-color: #025942;
        color: white;
        width: 30%;
        text-align: center;
    }

    .single-house-reaction-buttons{
        display: flex;
    }
    
    .reaction-btn{
        display: flex;
        margin-right: 3%;
    }

    .reaction-btn .icon span{
        color: gray;
    }

    .reaction-btn #book{
        margin-top: 14%;
    }

    .reaction-btn .count{
        margin-top: 13%;
        padding-left: 15%;
    }

    .reaction-btn .count span{
        color: rgb(147, 196, 147);
        font-size: 1em;
    }

    .single-house-owner{
        margin-top: .9%;
    }

    .single-house-owner span{
        color: gray;
        font-size: medium;
    }

    .single-house-owner-contacts{
        display: flex;
        width: 100%;
        margin-top: 1%;
    }

    .owner-contact-btn{
        width: 25%;
    }
    .owner-contact-btn button{
        padding: 5% 10% 5% 10%;
        background-color: gray;
        color: white;
        border: 2px solid gray;
        border-radius: 5px 5px 5px 5px;
    }

    .single-house-description p{
        color: gray;
    }

    .available-amenities{
        color: gray;
    }

    .amenities-div{
        display: flex;
        margin-top: -2%;
    }

    .amenities{
        margin-right: 10%;
    }

    .amenities p{
        line-height: 70%;
    }

    .share-property{
        color: gray;
    }

    .share-property i{
        margin-right: 3%;
        font-size: 1.5em;
    }

    .singlehouse-map img{
        width: 100%;
        margin-bottom: 2%;
    }

    /* code above */

    .grid-adv{
        width: 100%;
        height: 80vh;
        background-color: white;
        text-align: center;
    }

    .grid-adv h3{
        margin-top: 100%;
        color: gray;
        font-size: 1.5em;
    }

    .load-more{
        width: 100%;
        text-align: center;
    }

    .load-more-btn{
        padding: .5% 4% .5% 4%;
        margin-top: 3.2%;
        margin-bottom: 1.8%;
        color: white;
        background-color: gray;
        border: 1px solid gray;
        border-radius: 5px 5px 5px 5px;
    }

    /* google mmap */
    /* .singlehouse-map{
        width: 100%;
        margin-bottom: 10%;
        background-color: red;
        margin-left: 0px;
    } */

    .mapouter{
        position:relative;
        text-align:right;
        height:500px;
        width:600px;
        margin-bottom: 10%;
    }

    .gmap_canvas {
        overflow:hidden;
        background:none!important;
        height:500px;
        width:600px;
    }

    /* google map */

</style>

<script>
    import  Footer from "../components/Footer.vue";


    export default {
        name: "App",
        beforeCreate(){
            document.body.className = "properties-body"
        },
        components: {
            Footer,
        },
    };
</script>

