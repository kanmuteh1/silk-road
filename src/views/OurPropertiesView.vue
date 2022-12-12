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
        <div class="grid-head">
            <div class="grid-head-nav">
                <div class="grid-nav-links">
                    <div class="grid-nav-link"><b><a href="#">All</a></b></div>
                    <div class="grid-nav-link"><b><a href="#">Rent</a></b></div>
                    <div class="grid-nav-link"><b><a href="#">Sale</a></b></div>
                </div>
                <div class="views">
                    <div class="view-txt"><span>View</span></div>
                    <div class="view-list"><span id="list"><i class="fa fa-list" aria-hidden="true"></i></span></div>
                    <div class="view-grid"><span id="grid"><i class="fa fa-grip" aria-hidden="true"></i></span></div>
                </div>
                <div class="sort">
                    <div class="sort-txt"><span>Sort by</span></div>
                    <div class="sort-input">
                        <div class="input-sort">
                            <input type="text" class="sort-input" placeholder="Most Recent">
                        </div>
                        <div class="sort-select">
                            <select name="" id="">
                                <option value=""></option>
                                <option value="">Recent</option>
                                <option value="">Recent</option>
                                <option value="">Recent</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-houses-wrapper"> 
            <Grid />
            <Grid />
            <Grid />
        </div>
        <div class="grid-adv">
            <h3>Advertisements</h3>
        </div>
    </div>
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

    .grid-head-nav{
        width: 92%;
        height: 5vh;
        margin: 1.5% auto 0% auto;
        display: grid;
        grid-template-columns: 50% 20% 30%;
    }

    .grid-nav-links{
        display: flex;
    }

    .grid-nav-link{
        margin-top: 3.5%;
        margin-right: 8%;
    }

    .grid-nav-link a{
        text-decoration: none;
        color: gray;
    }


    .views{
        display: flex;
    }

    .view-txt{
        margin-top: 7%;
        margin-right: 6%;
    }

    .view-txt span{
        color: gray;
    }

    .view-list{
        margin-top: 5%;
        margin-right: 6%;
    }

    .view-list span{
        color: gray;
    }

    .view-grid{
        margin-top: 2%;
        margin-right: 6%;
    }

    .view-grid span{
        color: gray;
    }

    #list{
        font-size: 1.5em;
    }

    #grid{
        font-size: 2em;
    }

    .sort{
        display: flex;
        margin-top: 4%;
    }

    .sort-txt{
        width: 43%;
        text-align: right;
        margin-right: 4%;
    }

    .sort-txt span{
        color: gray;
    }

    .sort-input{
        width: 85%;
        display: flex;
    }

    .input-sort{
        width: 100%;
    }   

    .input-sort input{
        width: 100%;
        border: none;
        outline: none;
        padding: 2%;
        color: gray;
    }

    .sort-input::placeholder{
        color: gray !important;
    }


    .sort-select{
        width: 18%;
    }

    .sort-select select{
        width: 100%;
        padding: 4%;
        background-color: gray;
        color: white;
    }

    .grid-houses-wrapper{
        width: 100%;
        height: 14vh;
        grid-column-start: 2;
        grid-column-end: 4;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2%;
    }

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
</style>

<script>
    import Grid from "../components/Grid.vue";

    export default {
        name: "App",
        beforeCreate(){
            document.body.className = "properties-body"
        },
        components: {
            Grid,
        },
    };
</script>

