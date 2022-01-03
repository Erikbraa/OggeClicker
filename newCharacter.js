//template ('namn', 'när man håller över och det är 1 st|när man håller över och det är fler än 1|*antal* kart (made), namn på bild som visas små karaktär, namn på iconbild, bakgrundsbildnamn, pris, function())

new Game.Object('Albin Olsson','Albin|Albin|made','Albin används för att tillverka fler kart.','albin','albinIcon','grandmaBackground',100,function(){
    var mult=0;
    var add=0;
    if (Game.Has('One mind')) add+=Game.Objects['Albin Olsson'].amount*0.02;
    if (Game.Has('Communal brainsweep')) add+=Game.Objects['Albin Olsson'].amount*0.02;
    if (Game.Has('Elder Pact')) add+=Game.Objects['Portal'].amount*0.05;
    return Game.ComputeCps(0.5,Game.Has('Forwards from grandma')*0.3+add,Game.Has('Steel-plated rolling pins')+Game.Has('Lubricated dentures')+Game.Has('Prune juice')+mult);
//När den ritar ut figuren.

//Game.NewDrawFunction=function(pic,xVariance,yVariance,w,shift,heightOffset)
//{
    //pic : either 0 (the default picture will be used), a filename (will be used as override), or a function to determine a filename
    //xVariance : the pictures will have a random horizontal shift by this many pixels
    //yVariance : the pictures will have a random vertical shift by this many pixels
    //w : how many pixels between each picture (or row of pictures)
    //shift : if >1, arrange the pictures in rows containing this many pictures
    //heightOffset : the pictures will be displayed at this height, +32 pixels

},Game.NewDrawFunction(function(){
    var list=['albin'];
    //slumpmässig figur
    return choose(list);
},8,8,32,3,16),function(){
    if (this.amount>=1) Game.Unlock(['Forwards from grandma','Steel-plated rolling pins']);
    if (this.amount>=10) Game.Unlock('Lubricated dentures');if (this.amount>=50) Game.Unlock('Prune juice');
    if (this.amount>=1) Game.Win('Grandma\'s kart');if (this.amount>=50) Game.Win('Sloppy kisses');if (this.amount>=100) Game.Win('Retirement home');
});

Game.Objects['Albin Olsson'].sellFunction=function()
{
    Game.Win('lol');
    if (this.amount==0)
    {
        //gör den oköp bar
        // Game.Lock('Elder Pledge');
        // Game.pledgeT=0;
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//template ('namn', 'när man håller över och det är 1 st|när man håller över och det är fler än 1|*antal* kart (made), namn på bild som visas små karaktär, namn på iconbild, bakgrundsbildnamn, pris, function())

new Game.Object('Starke man','starke man|starke man|made','Starke man är väldigt stark!','linus','linusIcon','grandmaBackground',100,function(){
    var mult=0;
    var add=0;
    if (Game.Has('One mind')) add+=Game.Objects['Albin Olsson'].amount*0.02;
    if (Game.Has('Communal brainsweep')) add+=Game.Objects['Albin Olsson'].amount*0.02;
    if (Game.Has('Elder Pact')) add+=Game.Objects['Portal'].amount*0.05;
    return Game.ComputeCps(0.5,Game.Has('Forwards from grandma')*0.3+add,Game.Has('Steel-plated rolling pins')+Game.Has('Lubricated dentures')+Game.Has('Prune juice')+mult);
//När den ritar ut figuren.

//Game.NewDrawFunction=function(pic,xVariance,yVariance,w,shift,heightOffset)
//{
    //pic : either 0 (the default picture will be used), a filename (will be used as override), or a function to determine a filename
    //xVariance : the pictures will have a random horizontal shift by this many pixels
    //yVariance : the pictures will have a random vertical shift by this many pixels
    //w : how many pixels between each picture (or row of pictures)
    //shift : if >1, arrange the pictures in rows containing this many pictures
    //heightOffset : the pictures will be displayed at this height, +32 pixels

},Game.NewDrawFunction(function(){
    var list=['albin'];
    //slumpmässig figur
    return choose(list);
},8,8,32,3,16),function(){
    if (this.amount>=1) Game.Unlock(['Forwards from grandma','Steel-plated rolling pins']);
    if (this.amount>=10) Game.Unlock('Lubricated dentures');if (this.amount>=50) Game.Unlock('Prune juice');
    if (this.amount>=1) Game.Win('Grandma\'s kart');if (this.amount>=50) Game.Win('Sloppy kisses');if (this.amount>=100) Game.Win('Retirement home');
});

Game.Objects['Albin Olsson'].sellFunction=function()
{
    Game.Win('lol');
    if (this.amount==0)
    {
        //gör den oköp bar
        // Game.Lock('Elder Pledge');
        // Game.pledgeT=0;
    }
};