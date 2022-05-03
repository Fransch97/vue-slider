const app = new Vue({
    el: "#app",

    data:{
        images : slides,
        counter : 2,
        smallImgActive : 0
    },

    methods: {
        nextImg(){
            
            this.counter++
            console.log()
            const lengths = slides.length
            if(this.counter === this.images.length  ){
                this.counter = 0
            }
        }
    },

    

    mounted() {
        console.log("working");
        console.log(this.images, "imges now");
    }

})