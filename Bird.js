class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");

    this.arr = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var array = [this.body.position.x,this.body.position.y];
    this.arr.push(array);
    }
    for(var ab = 0; ab<this.arr.length; ab++){
     image(this.image1, this.arr[ab][0], this.arr[ab][1]);
    }
  }
}
