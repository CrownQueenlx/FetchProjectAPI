let driverUrl = "http://ergast.com/api/f1/drivers.json"

async function fetchDrivers() {
    // fetch(zenUrl)
    // .then(res => res.json())
    // .then(res => {
    //     // console.log(res)
    //     return res[0]
    // })
    // await is another promise resolver
    const response = await fetch(driverUrl);
    let data = await response.json(); 
    //await instead of .then allows continued use of "data" inside the scope

    return data;
}

runDriver()
let driversArray = []

async function runDriver() {
    const drivers = await fetchDrivers();
    //get the input number from the input element
    let driverIndex = 0
    // document.getElementById("adjust").value-1
    driversArray = drivers.MRData.DriverTable.Drivers
    //pass the index to our drivers array
    displayFirstDriver (driversArray[driverIndex]);
}

function newDriver(){
    let indexDriver = document.getElementById("adjust").value-1
    driversArray[indexDriver]
    createDriver(driversArray[indexDriver])
}

// let document = driverUrl
const parentDiv = document.getElementById("driverList");  //div

function displayFirstDriver(driver) {
    
    createDriver(driver)
}

const createDriver = (driver) => {
    console.log(driver);
    parentDiv.innerHTML = "";
    let div = document.createElement("div");
    div.innerText = `${driver.givenName} ${driver.familyName} ${driver.nationality} ${driver.dateOfBirth}`;
    parentDiv.appendChild(div);
}

let button = document.getElementById("refresh");
button.addEventListener("click", runDriver());
document.body.appendChild(button)

myImages = 
    [{img: "../assets/pexels-scott-foltz-13237906.jpg"},
    {img: "../assets/pexels-senior-jone-4147877.jpg"},
    {img: "../assets/pexels-tamuka-xulu-16268467.jpg"},
    {img: "../assets/pexels-telmo-antunes-10373651.jpg"},
    {img: "../assets/pexels-telmo-antunes-10373654.jpg"},
    {img: "../assets/pexels-telmo-antunes-10373677.jpg"},
    {img: "../assets/pexels-telmo-antunes-10373685.jpg"},
    {img: "../assets/pexels-tom-fisk-11149041.jpg"},
    {img: "../assets/pexels-tom-fisk-11149058.jpg"},
    {img: "../assets/pexels-cuma-ersöz-14154347.jpg"},
    {img: "../assets/pexels-jacob-moore-12330596.jpg"},
    {img: "../assets/pexels-jacob-moore-12565882.jpg"},
    {img: "../assets/pexels-jenda-kubeš-13641535.jpg"},
    {img: "../assets/pexels-jenda-kubeš-14079604.jpg"},
    {img: "../assets/pexels-laura-paredis-13207679.jpg"},
    {img: "../assets/pexels-leif-bergerson-9567289.jpg"},
    {img: "../assets/pexels-mike-bird-12736948.jpg"},
    {img: "../assets/pexels-scott-foltz-13237576.jpg"}
]
function ImageIterator(){
const random = () => {return Math.floor(Math.random() * myImages.length)};
let imageOne = document.getElementById("imageOne")
imageOne.src = myImages[random()].img
let imageTwo = document.getElementById("imageTwo")
imageTwo.src = myImages[random()].img;
}
ImageIterator();

function displayImages() {
    const myImages =  ImageIterator();
     let imageIndex = (myImages[0].img);
    
    document.getElementById[imageIndex]
}
function OptImages(myImages){
    let parentDiv = document.getElementById("imageOne", "imageTwo");
    parentDiv.innerHTML = "";
    showImage (parentDiv, myImages);    
    }
    const showImage = (myImages) => {
        
        div.innerHTML = HTMLImageElement[0]
        newParentDiv.appendChild(div);
    }