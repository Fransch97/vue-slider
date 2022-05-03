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
            if(this.counter === this.images.length  ){
                this.counter = 0
            }
        },
        preImg(){
            
            this.counter--
            console.log()
            if(this.counter < 0  ){
                this.counter = this.images.length -1
            }
        }
    },

    

    mounted() {
        console.log("working");
        console.log(this.images, "imges now");
        const nextInterval = setInterval(()=>{
            this.preImg()
        },3000)
    }

})