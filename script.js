var buttons=document.getElementsByClassName('nav');
initialise();
var animation=false;
window.addEventListener('scroll',checkscroll);
console.log(buttons);
function smoothScroll(required)
{
var scrolling=setInterval(function()
{
    var coordinates= required.getBoundingClientRect();
    if(coordinates.top<=0)
    {
       clearInterval(scrolling);
       return;
    }
    
    window.scrollBy(0,40);
},40);
}
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        var currButton=this.getAttribute('data-value');
        var requiredSection= document.getElementById(currButton);
        console.log(requiredSection);
        smoothScroll(requiredSection);

});

}
function initialise()
{
    var initial= document.getElementsByClassName('skill-bar');
    for(var i=0;i<initial.length;i++)
    {
        initial[i].style.width=0+'%';
    }
}

function helper(currlevel,currelement)
{
    var count=0;
    var currfill=setInterval(function()
    {
        if(count>=currlevel)
        {
            clearInterval(currfill);
            return;
        }
        count+=1;
        currelement.style.width=count+'%';
    },10);




}

function fillbar()
{
   console.log('Reached');
   var temp=document.getElementsByClassName('skill-bar');

   for(var i=0;i<temp.length;i++)
   {
    var currlevel=temp[i].getAttribute('data-value');
       helper(currlevel,temp[i]);
   }

}
function checkscroll()
{
var skills= document.getElementById('skills');

    var skills_coordinates= skills.getBoundingClientRect();
    if(!animation && skills_coordinates.top<=window.innerHeight)
    {
        animation=true;
        fillbar();
        
    }
    else if(skills_coordinates.top>window.innerHeight)
    {
        animation=false;
        initialise();
    }

}





