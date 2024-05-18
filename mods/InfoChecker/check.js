decide()
function decide() {
    let version = info.version;
    let versionCommand = version.slice(0, 8);
    let versionAddressRout = version.slice(8,13);
    let versionAddress = version.substr(-8, 8)
    const dom = document;


    if(versionCommand===`control ` || versionCommand==`control  ` || versionCommand==`control   ` || versionCommand==`control    `){
        if(versionAddressRout==="/ark ") {
            if(versionAddress.length===8){
                if(versionAddress==="65.67.87"){
                    console.log("accessed")
                }else{
                    versionError("Address hasn't been connected")
                }
            }
        }
     }
     
    
    let mods = {
        version, versionAddress, versionAddressRout, versionCommand
    }

    return mods;
}

function versionError(error) {

    document.querySelector('[address-data="76-HERE_TENT"]').innerHTML=
   `
    <style>
      .error-h2 {
        background:rgb(255, 255, 255); 
        padding:2px; 
        display:inline-block;
        transition:0.2s;
        color:red;
        font-family:monospace;
        border:2px solid rgba(0,0,0,0.3);
      } 
      .error-h2:hover {
        background:white; 
        padding:2px; 
        color:red;
      }
    </style>
    
    <p class="error-h2">
    ${error}
    </p>
    `;
}
// function sample(content) {
//     if(!content){
//         alert("sample() has no value or parametre")
//     }else{
//         document.body.innerHTML = "<pre>"+content+"</pre>";
//     }
// }

document.querySelector("title").innerHTML = info.title;