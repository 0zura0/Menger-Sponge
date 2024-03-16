class Box{
    constructor(x,y,z,Side){
        this.pos =createVector(x,y,z);
        this.side =Side;
    }

    generate(){
        let  boxes =[];
        for(let x=-1;x<2;x++){
            for(let y =-1;y<2;y++){
                for(let z=-1;z<2;z++){
                    let  sum = abs(x) + abs(y) + abs(z);
                    let smallBoxRadius = this.side/3;
                    if(sum>1){
                        let b = new Box(this.pos.x+x*smallBoxRadius, this.pos.y+y*smallBoxRadius, this.pos.z+z*smallBoxRadius, smallBoxRadius);
                        boxes.push(b);
                    }

            }
        }
    }
    return boxes;
}

    show(){
        push();
        fill(255);
        translate(this.pos.x,this.pos.y,this.pos.z);
        box(this.side)
        pop();
    }

}