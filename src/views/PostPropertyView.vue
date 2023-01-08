<template>
    <div class="posting-proesses">
        <div class="posting-proesses-nav">
            <div class="property-category" @click="toCategory"><b>Category</b></div>
            <div class="property-location" @click="toLocation"><b>Location</b></div>
            <div class="property-details" @click="toPropertyDetail"><b>Property Details</b></div>
            <div class="property-contact-details" @click="toContact"><b>Contact Details</b></div>
            <hr>
        </div>
        <div id="current-step">
            <Category v-if="isCategory"/>
            <Contact v-if="isContact"/>
            <Location v-if="isLocation"/>
            <PropertyDetail v-if="isPropertyDetail"/>
        </div>
    </div>
    <Footer />
</template>

<style>
    .posting-proesses{
        width: 64%;
        margin: 2% auto 0% 20%;
    }

    .posting-proesses-nav{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .posting-proesses-nav div :hover{
        cursor: pointer;
    }

    .posting-proesses-nav div:active{
        text-decoration: underline;
    }

    .posting-proesses hr{
        width: 399%;
    }

    #current-step{
        width: 100%;
    }
    
</style>

<script>
    import Footer from "@/components/Footer.vue";
    import Category from "@/components/post-a-property/Category.vue";
    import Contact from "@/components/post-a-property/Contact.vue";
    import Location from "@/components/post-a-property/Location.vue";
    import PropertyDetail from "@/components/post-a-property/PropertyDetail.vue";

    export default {        
        beforeCreate(){
            document.body.className = "post-a-property-body"
        },
        components: {
            Category,
            Contact,
            Location,
            PropertyDetail,
            Footer,
        },
        data:function (){
            return{
                isCategory: true,
                isContact: false,
                isLocation: false,
                isPropertyDetail: false
            }
        },
        methods:{
            toCategory(){
                this.isCategory = true
                this.isContact = false
                this.isLocation = false
                this.isPropertyDetail = false
            },
            toContact(){
                this.isContact = true
                this.isCategory = false
                this.isLocation = false
                this.isPropertyDetail = false
            },
            toLocation(){
                this.isLocation = true
                this.isContact = false
                this.isCategory = false
                this.isPropertyDetail = false
            },
            toPropertyDetail(){
                this.isPropertyDetail = true
                this.isLocation = false
                this.isContact = false
                this.isCategory = false
            }
        },
    }
</script>