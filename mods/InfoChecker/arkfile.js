function arkFileConstruction(src) {


let fr = src.fr;
let file = src.file;

let res = fr.result;
let cutSeperate = res.split(" ");
let cs = cutSeperate;
let impo = cs.indexOf("#impo");
let impoVersion = cs[impo+1];

// let dcr = res.match(/"/g);

// let dcrFirstOne = dcr[0]
// let dcrFirstTwo = dct[1]

// let dcrSecondOne = dct[2]
// let dcrSecondTwo = dct[3]


let impoP = res.indexOf("#impo");
let impoL = impoP+4;
let impoLength = (impoL-impoP)+1
let impoX = res.slice(impoP, impoLength)

let version = res.substr(6, 35);
let versionP = version.search('"control');
let versionL = versionP+version.length;
let versionLength = (versionL-versionP)+1;
let versionX  = res.slice()



function mila() {
    if(impoX.length===5){
        
    }
}

versionPickup()
function versionPickup() {
    let versionv = version.replaceAll('"', "")
    let vs = versionv.split(" ")
    if(vs[0]==="control"){
        if(vs[1]==="./ark"){
            if(vs[2]==="65.67.87"){
                if(vs[3]==="file"){
                    if(vs[4]==="~"){
                        if(vs[5]==="ark"){
                            yeppy()
                        }
                    }
                }
            }
        }
    }
    


}



let impoInt = res.indexOf("#impo")
if(impoInt === 0){
    if(res.indexOf('"')===6){
      if (res.search(/"/g)[1]){
        alert("it being worked")
      }
    }
}





function alertBeta(content) {
    let errorConsole= document.querySelector(".error-console");
    errorConsole.innerText = content;
   
}

function yeppy() {

    let rew = res.indexOf("rew");
    let rewL = rew+3;
    let rewLength = (rewL-rew)+1;
    let rewX = res.substr(rew, 3);

    let rewAfter = rewL+1;
    let rewAfterCommandsLast = rewAfter+11;
    let rewAfterCommandsX = res.substr(rewAfter, rewAfterCommandsLast);

    let blockPos = res.indexOf("//");
    let contentPos = blockPos;
    let content = res.slice(rewAfter, contentPos);

    setColorToHTML(content)
    




}


function setColorToHTML(cont) {
    
    document.querySelector("body").setAttribute("style",  `background:${cont};`)


}


// alert(cs[impoVersionInt])

checkZero()
function checkZero() {
  
    if(impo){
        if(impoVersion){
           alert("main")
        }
    }


}





}