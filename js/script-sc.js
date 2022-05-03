const app = new Vue({
    el: "#app",

    data:{
        images : slides,
        counter : 0
    },

    methods: {
        
    },

    

    mounted() {
        console.log("working");
        console.log(this.images, "imges now");
    }

})