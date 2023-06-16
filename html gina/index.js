class Song{
    constructor(name,singer){
        this.name = name
        this.singer = singer
    }
    describe(){
        console.log("${this.name} is for ${this.singer}");
    }
    }
    let song = new Song("little me" ,"jjk");
console.log(this.describe());