const app = new Vue({
    el: "#app",

    data:{
        images : slides,
        counter : 2,
        smallImgActive : 0
    },

    methods: {
        
    },

    

    mounted() {
        console.log("working");
        console.log(this.images, "imges now");
    }

})