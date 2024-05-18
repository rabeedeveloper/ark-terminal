function listFoldersFiles() {
    

    const binary = info.bin.folder;
    const ff = binary.split(" ");
    const ffCommand = ff[0];
    const ffYey = ff[1];
    const ffType = ff[2];
    const terminal = document.querySelector("[terminal='true']")
    const terval = terminal.value;
    const errConsole = document.querySelector(".error-console");
     
    let binaryNames = info.bin.folderNames;
    let ffn = binaryNames.split(" ");
    let tervalcut = terval.split(" ")

    
    if(ffCommand==="control"){
        if(ffYey === "~"){
            if(ffType==="folder"){


                listingTheFolders(true)
                



            }
        }
    }




function listingTheFolders(check600) {


    var view = {}
    view.folders = "";
    
    for (let terrorist = 0; terrorist < ffn.length; terrorist++){
        view.folders+= "<td style='padding:1px 9px;'>" + ffn[terrorist] + "</td>";
    }
    
    var viewFolders =   `
    <table>
        <tbody>
            <tr>
                ${view.folders}
            </tr>
        </tbody>
    </table>
    `;
    

    if (check600===true){
        errConsole.innerHTML = viewFolders;
    }
    
}


function workAfterListCommands(check700) {
    function unik(msg) {
        errConsole.innerHTML = `

<span style="color:white">
  ${msg}
</span>

        `
    }


function AfterListOperations() {

    let ffns = ffn.search(tervalcut[1])

    if(ffns){
        enterFolder()
        function enterFolder() {
            errConsole.innerHTML="";
            enterFolder_Beta()
            function enterFolder_Beta() {
                errConsole.innerHTML = `
<h3> style="color:white;"${ffns}</h3>
<p style="color: yellow;">
You're entered to this folder
</p>
                

                `
            }
        }
    }else{
        errConsole.innerHTML= `
        <s style="color:red">This folder could see in this directory/</s>
        `
    }


}
     



    
    const mainLimits1 = setTimeout(() => {
        unik("Wait for it..")
        const mainLimits2 = setTimeout(() => {
            unik("proccessing in background ..")
            const mainLimits3 = setTimeout(() => {
                unik("Almost Done..")
                const mainLimits4 = setTimeout(() => {
                    unik("work finished..")
                    const mainLimits5 = setTimeout(() => {
                        unik("")
                    }, 1500)
                    terminal.addEventListener("keydown", (ev)=> {
                        if(ev.key = "Enter"){
                            clearTimeout(mainLimits5)
                        }else if((ev.key==="Shift") && (ev.key=="e") && (ev.key=="y")){
                            AfterListOperations()
                        }
                    })
                }, 1600)  
                terminal.addEventListener("keydown", (ev)=> {
                    if(ev.key = "Enter"){
                        clearTimeout(mainLimits4)
                    }
                })

            }, 2000)

            terminal.addEventListener("keydown", (ev)=> {
                if(ev.key = "Enter"){
                    clearTimeout(mainLimits3)
                }
            })

        }, 1500)

        terminal.addEventListener("keydown", (ev)=> {
            if(ev.key = "Enter"){
                clearTimeout(mainLimits2)
            }
        })

    }, 1500)
    terminal.addEventListener("keydown", (ev)=> {
        if(ev.key = "Enter"){
            clearTimeout(mainLimits1)
        }
    })
    
    


}


return {
    workAfterListCommands
}


}