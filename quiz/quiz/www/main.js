var q=["What is the name of the bookstore where students buy their books? ","Name the founders of Hogwarts (first and last names). ","Where is the secret passage under Hogwarts? Where does it start and where does it end? ","What are the true identities of the makers of the marauder’s map? Mooney, Wormtail, padfood, and prongs. "];
var a=["Florish and Blotts","Godrick Griffyndor, Rowena Ravenclaw,Salazar Slytherin, and Helga Hufflepuff","From the Whomping Willow to the Shrieking Shack","Remus Lupin,Peter Pettigrew, Sirius Black, and James Potter"];
var i,j,k=0,l=0;
var used=[0,0,0,0];
function myload(){
i=Math.floor(Math.random()*4);
j=Math.floor(Math.random()*4);
used[i]=1;
    document.getElementById('q').innerHTML=q[i];
    document.getElementById(j).innerText=a[i];
     document.getElementById((j+1)%4).innerText="abra";
     document.getElementById((j+2)%4).innerText="ka";
     document.getElementById((j+3)%4).innerText="dabra";
    
}
/*function animationm(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 500);         
        });
}*/
function check(m){

    if(j==m){
        k++;
        document.getElementById(m).style.color = "blue";
        /*element=$(ans);
        element.addClass(' animated hinge');*/
        setTimeout(function(){
            document.getElementById(m).style.color = "black";
            /*element.removeClass(' animated hinge');*/
            did();
            },500);
    }else{
        k--;
       document.getElementById(m).style.color = "red";
        setTimeout(function(){
            document.getElementById(m).style.color = "black";
            did();
            },500);
    }
}
function did(){
    var t=0;
    for(;used[t]==1&&t<4;t++);
    document.getElementById('score').innerHTML='Score<br/>'+k;
    if(t==4){
        document.getElementById('all').innerHTML='<div id="all"<div class="dropdown"><button onclick="myFunction()" class="dropbtn">Menu</button><div id="myDropdown" class="dropdown-content"><a href="index.html">Home</a><a href="about.html">About</a><a href="contact.html">Contact</a><a href="setting.html">Setting</a></div></div><div id="score">Score<br/>'+k+'</div><div id="main">';
        
        return;
    }
    do{
        i=Math.floor(Math.random()*4);
        j=Math.floor(Math.random()*4);
    }while(used[i]);
    used[i]=1;
    document.getElementById('q').innerHTML=q[i];
    document.getElementById(j).innerText=a[i];
    document.getElementById((j+1)%4).innerText="abra";
    document.getElementById((j+2)%4).innerText="ka";
    document.getElementById((j+3)%4).innerText="dabra";

}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function music(){
    if(l==0){
        l=1;
        
    }
}