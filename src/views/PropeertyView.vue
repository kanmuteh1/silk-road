<template>
    <h1>Hello world Property</h1>
</template>

<style>
    .property-body{
        background-color: blueviolet;
    }
</style>

<script>
    export default {
        beforeCreate(){
            document.body.className = "property-body"
        }
    
    };
</script>