 // getelementbyid

// const mainheading = document.getElementById("main-heading");
// console.log(mainheading);


 // select elemet by query selector
//  const mainheading = document.querySelector(".header");
//  console.log(mainheading)


// change text 

// const mainheading = document.getElementById("main-heading");
// console.log(mainheading.textContent);
// mainheading.textContent= "this is something else";
// console.log(mainheading.textContent);

// change the style element 

// const mainheading = document.querySelector("div.headline h2");
// console.log(mainheading.style);
// mainheading.style.backgroundColor = "blue"

// we cant use foreach loop 
const navItem = document.getElementsByTagName("a");

for(let i=0 ; i< navItem.length ; i++){
    // console.log(navItem[i]);
    const navItem = navItem[i];
    navItem.style.backgroundcolor = "#fff";
    navItem.style.color = "green";
}