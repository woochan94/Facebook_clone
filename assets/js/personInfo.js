const personInfo = document.getElementById("personInfo_contents");
const menu1 = document.getElementById("person_infoWrap_menu1");
const menu2 = document.getElementById("person_infoWrap_menu2");
const menu3 = document.getElementById("person_infoWrap_menu3");
const menu4 = document.getElementById("person_infoWrap_menu4");
const menu5 = document.getElementById("person_infoWrap_editInfo"); 

const menu1Block = document.getElementById("person_content_menu1");
const menu2Block = document.getElementById("person_content_menu2");
const menu3Block = document.getElementById("person_content_menu3");
const menu4Block = document.getElementById("person_content_menu4");
const menu5Block = document.getElementById("person_content_changePassword");

const handleMenu1 = () => {
    // display 
    menu1Block.style.display = "block";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";

    // border & color 
    menu1.style.borderLeft = "4px solid black";
    menu1.style.color = "black";
    menu2.style.borderLeft = "none"; 
    menu2.style.color = "#484f56";
    menu3.style.borderLeft = "none"; 
    menu3.style.color = "#484f56";
    menu4.style.borderLeft = "none"; 
    menu4.style.color = "#484f56";
    menu5.style.borderLeft = "none"; 
    menu5.style.color = "#484f56";
}

const handleMenu2 = () => {
    menu1Block.style.display = "none";
    menu2Block.style.display = "block";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";

    menu1.style.borderLeft = "none";
    menu1.style.color = "#484f56";
    menu2.style.borderLeft = "4px solid black"; 
    menu2.style.color = "black";
    menu3.style.borderLeft = "none"; 
    menu3.style.color = "#484f56";
    menu4.style.borderLeft = "none"; 
    menu4.style.color = "#484f56";
    menu5.style.borderLeft = "none"; 
    menu5.style.color = "#484f56";
}

const handleMenu3 = () => {
    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "block";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";

    menu1.style.borderLeft = "none";
    menu1.style.color = "#484f56";
    menu2.style.borderLeft = "none"; 
    menu2.style.color = "#484f56";
    menu3.style.borderLeft = "4px solid black"; 
    menu3.style.color = "black";
    menu4.style.borderLeft = "none"; 
    menu4.style.color = "#484f56";
    menu5.style.borderLeft = "none"; 
    menu5.style.color = "#484f56";
}

const handleMenu4 = () => {
    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "block";
    menu5Block.style.display = "none";

    menu1.style.borderLeft = "none";
    menu1.style.color = "#484f56";
    menu2.style.borderLeft = "none"; 
    menu2.style.color = "#484f56";
    menu3.style.borderLeft = "none"; 
    menu3.style.color = "#484f56";
    menu4.style.borderLeft = "4px solid black"; 
    menu4.style.color = "black";
    menu5.style.borderLeft = "none"; 
    menu5.style.color = "#484f56";
}

const handleMenu5 = () => {
    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "block";

    menu1.style.borderLeft = "none";
    menu1.style.color = "#484f56";
    menu2.style.borderLeft = "none"; 
    menu2.style.color = "#484f56";
    menu3.style.borderLeft = "none"; 
    menu3.style.color = "#484f56";
    menu4.style.borderLeft = "none"; 
    menu4.style.color = "#484f56";
    menu5.style.borderLeft = "4px solid black"; 
    menu5.style.color = "black";
}

const init = () => {
    menu1.addEventListener("click", handleMenu1);
    menu2.addEventListener("click", handleMenu2);
    menu3.addEventListener("click", handleMenu3);
    menu4.addEventListener("click", handleMenu4);
    menu5.addEventListener("click", handleMenu5);
}

if(personInfo) {
    init();
}