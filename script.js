function openSideBar()

{

document.getElementById("sideBar").style.right = "0px";
document.getElementById("body").style.positon = "fixed";
document.getElementById("body").style.overflow = "hidden"
document.getElementById("overlay").style.opacity = '100%';
console.log("sideBar opened");
  document.getElementById("overlay").style.visibility = "visible"
document.getElementById("sideButton").setAttribute("onclick", "closeSideBar()");
}

function closeSideBar()

{

    document.getElementById("sideBar").style.right = "-28vw";
    document.getElementById("body").style.positon = "";
      document.getElementById("overlay").style.visibility = "hidden"
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("overlay").style.opacity = '0%';
    console.log("sideBar closed");
    document.getElementById("sideButton").setAttribute("onclick", "openSideBar()")
    

}


function openMoreModal()

{
    document.getElementById("moreButtonModal").style.visibility = "visible"
document.getElementById('moreButtonModal').style.height = '6.5vh';
document.getElementById('moreButton').setAttribute("onclick", 'closeMoreModal()');
   document.getElementById("moreButtonModal").style.opacity = "100%"




}

function closeMoreModal()

{
     document.getElementById("moreButtonModal").style.opacity = "0%"
    document.getElementById("moreButtonModal").style.visibility = "hidden"
      
document.getElementById('moreButtonModal').style.height = '0vh';
document.getElementById('moreButton').setAttribute("onclick", 'openMoreModal()');




}