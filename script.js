function openSideBar()

{

document.getElementById("sideBar").style.right = "0px";
document.getElementById("body").style.positon = "fixed";
document.getElementById("body").style.overflow = "hidden"
document.getElementById("overlay").style.visibility = "visible";
console.log("sideBar opened");
document.getElementById("sideButton").setAttribute("onclick", "closeSideBar()");
}

function closeSideBar()

{

    document.getElementById("sideBar").style.right = "-28vw";
    document.getElementById("body").style.positon = "";
    document.getElementById("body").style.overflow = "scroll"
    document.getElementById("overlay").style.visibility = "hidden"
    console.log("sideBar closed");
    document.getElementById("sideButton").setAttribute("onclick", "openSideBar()")
    

}
