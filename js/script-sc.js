const app = new Vue({
    el: "#app",

    data:{
        images : slides,
        counter : 0,
        smallImgActive : 0,
        next : null,
        pre: null
        
    },

    methods: {


        nextImg(){
            
            this.counter++
            console.log()
            if(this.counter === this.images.length  ){
                this.counter = 0
            }
        },

        nextInterval(){
                this.next = setInterval(()=>{
                    this.nextImg()
                },3000)
            
        },

        preInterval(){
            this.pre = setInterval(()=>{
                this.nextImg()
            },3000)
        
        },

        stopNextInterval(){
            clearInterval(this.next)
            console.log("stop NEXT")

        },
        
        stopPreInterval(){
            clearInterval(this.pre)
            console.log("stop PRE")

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
        this.nextInterval();
    }

})