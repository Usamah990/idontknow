const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "styles/firefox2.png") {
    myImage.setAttribute("src", "styles/Google-Apps.jpeg");
  } else {
    myImage.setAttribute("src", "styles/firefox2.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Chrome is BETTER AND BETTER, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  
  
  