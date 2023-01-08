<template>
    <div id="select-category">
        <p><b>Select Category</b></p>
        <hr>
        <div class="categoriesAndOptions">
            <div class="categories">
                <div class="category"><p>House</p></div>
                <div class="category"><p>Apartment</p></div>
                <div class="category"><p>Office Space</p></div>
                <div class="category"><p>Storage Space</p></div>
                <div class="category"><p>Rooms</p></div>
                <div class="category"><p>Land</p></div>
                <div class="category"><p>Commercial Properties</p></div>
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
        </div>
        </div>
    </div>
</template>

<style>
    #select-category {
        width: 45%;
        margin-bottom: 12%;
    }
    #select-category hr{
        margin-left: 0;
        width: 82%;
    }
    .categoriesAndOptions{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5%;
    }
</style>

<script>
    export default {
        name: "Category",
    }
</script>