class Paper
{
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
            //set the desity property to 1.2	
		}
        this.x=x;
		this.y=y;
		this.r=r
		//load the paper.png image
        this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, this.body);
	}
	display()
	{
		var paperpos=this.body.position;		
		fill(255,0,255)
        //ellipseMode(RADIUS)
        imageMode(CENTER)
	    //ellipse(paperpos.x,paperpos.y,(this.r-10)/2, (this.r-10)/2);			
        //use image instruction to add the image
        image(this.image,paperpos.x,paperpos.y,this.r, this.r);			
	}

}