const terminal = document.querySelector("[terminal='true']")
let version = info.version;
let versionCommand = version.slice(0, 7);

terminal.addEventListener("keydown", (event) => {
    let terval = terminal.value;
    let key = event.key;
    let tervaluecut = terval.split(" ");




    if (key === "Enter") {

        checking()

        function checking() {


            let ErrorConsoleAccession = document.querySelector(".error-console");

            if (tervaluecut[0] === versionCommand) {
                shjf()
                function shjf() {

                    if (tervaluecut[1] === "open") {
                        let openLink = tervaluecut[2];
                        let openLinkInDoubleCourtsStart = tervaluecut[2].slice(0, 1)
                        let openLinkInDoubleCourtsEnd = tervaluecut[2].substr(tervaluecut.length - 1, 1)
                        let openLinkInDoubleCourtsSplit = tervaluecut[2].split('"')
                        let openLinkInSingleCourtsSplit = tervaluecut[2].split("'")
                        let openLinkInDoubleCourtsFind = tervaluecut[2].search('"')
                        let openLinkInSingleCourtsFind = tervaluecut[2].search("'")

                        if ((typeof openLinkInDoubleCourtsStart === "'") && (typeof openLinkInDoubleCourtsStart === '"') && (typeof openLinkInDoubleCourtsEnd === "'") && (typeof openLinkInDoubleCourtsEnd === '"')) {
                            window.open(openLinkInDoubleCourtsSplit, "_blank")
                        }
                        // You can uncomment this if needed...

                        // else if(openLinkInDoubleCourtsFind){
                        //     let openLinkInDoubleCourtsFinded = openLinkInDoubleCourtsFind.replace('"', "")
                        //     window.open(openLinkInDoubleCourtsFinded, "_blank")
                        // }
                        // else if(openLinkInSingleCourtsFind){
                        //     let openLinkInSingleCourtsFinded = openLinkInSingleCourtsFind.replace("'", "")
                        //     window.open(openLinkInSingleCourtsFinded, "_blank")
                        // }

                        else {
                            window.open(openLink, "_blank");
                        }
                    }


                    ljflkjdf9853948534()
                    function ljflkjdf9853948534() {
                        terminal.value = "";


                    }
                }


            }

            else if (tervaluecut[0] === "") {
                document.querySelector(".error-console").style.color = "yellow";
                document.querySelector(".error-console").innerHTML =
                    `Type the version command to access this terminal with your other operations`
            }

            else if ((tervaluecut[0] === "--help") || (tervaluecut[0] === "--h")) {
                document.querySelector(".error-console").style.color = "white";
                document.querySelector(".error-console").innerHTML = `
how can I help you
                `;



            }

            else if (tervaluecut[0] === "clear") {


                ClearTerminalByClearCommand()
                function ClearTerminalByClearCommand() {
                    terminal.value = "";
                    ClearConsoleByClearCommand()
                    function ClearConsoleByClearCommand() {
                        ErrorConsoleAccession.innerHTML = ""
                    }

                }



            }





            else if (tervaluecut[0] === "ls") {



                if (tervaluecut.length === 1) {
                    listFoldersFiles()
                } else {
                    listFoldersFiles().workAfterListCommands(true)

                }


            }

            else if (tervaluecut[0] === "get") {

                document.querySelector(".error-console").innerHTML = `
                <input onchange="imgRead()" type="file" accept=".ark">
                
                `




            }

            else if(tervaluecut[0]==="new") {
                errConsole("You have not created any new commands. Our now conditions is very bad. we will bring command creation option or feature in this whatever.")
            }

            else if (tervaluecut[0] === "terminal") {

                let ts = tervaluecut[1]
                if (tervaluecut[1] === "--color") {


                    if (!(tervaluecut[2]) || (tervaluecut[2] === "")) {
                        errConsole("Enter a text colour to this terminal")
                    } else {
                        terminal.setAttribute("style", `color:${tervaluecut[2]}`);
                    }
                    ClearTerminalByClearCommand()
                    function ClearTerminalByClearCommand() {
                        terminal.value = "";
                        ClearConsoleByClearCommand()
                        function ClearConsoleByClearCommand() {
                            ErrorConsoleAccession.innerHTML = ""
                        }

                    }

                } else if (tervaluecut[1] === "--clr") {


                    if (!(tervaluecut[2]) || (tervaluecut[2] === "")) {
                        errConsole("Enter a text colour to this terminal")
                    } else {
                        terminal.setAttribute("style", `color:${tervaluecut[2]}`);
                    }
                    ClearTerminalByClearCommand()
                    function ClearTerminalByClearCommand() {
                        terminal.value = "";
                        ClearConsoleByClearCommand()
                        function ClearConsoleByClearCommand() {
                            ErrorConsoleAccession.innerHTML = ""
                        }

                    }

                }

                else if (ts === "--bgcolor") {
                    terminal.setAttribute("style", `background:${tervaluecut[2]}`);
                    ClearTerminalByClearCommand()
                    function ClearTerminalByClearCommand() {
                        terminal.value = "";
                        ClearConsoleByClearCommand()
                        function ClearConsoleByClearCommand() {
                            ErrorConsoleAccession.innerHTML = ""
                        }

                    }

                }
                else if (ts === "--bgclr") {
                    terminal.setAttribute("style", `background:${tervaluecut[2]}`);
                    ClearTerminalByClearCommand()
                    function ClearTerminalByClearCommand() {
                        terminal.value = "";
                        ClearConsoleByClearCommand()
                        function ClearConsoleByClearCommand() {
                            ErrorConsoleAccession.innerHTML = ""
                        }

                    }
                }

                else if (ts === "--fw") {
                    terminal.setAttribute("style", `font-weight:${tervaluecut[2]}`)
                    ClearTerminalByClearCommand()
                    function ClearTerminalByClearCommand() {
                        terminal.value = "";
                        ClearConsoleByClearCommand()
                        function ClearConsoleByClearCommand() {
                            ErrorConsoleAccession.innerHTML = ""
                        }

                    }
                }

                else if (ts === "--repo") {


                    repoOperations(true)

                    ClearTerminalByClearCommand()
                    function ClearTerminalByClearCommand() {
                        terminal.value = "";
                        ClearConsoleByClearCommand()
                        function ClearConsoleByClearCommand() {
                            ErrorConsoleAccession.innerHTML = ""
                        }

                    }

                }

                else {
                    errConsole("This is not a terminal settings command");
                }

            }


            else {
                shjf()
                function shjf() {
                    document.querySelector(".error-console").style.color = "red";
                    document.querySelector(".error-console").innerHTML = `
The term '${tervaluecut[0]}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a 
path was included, verify that the path is correct and try again.
At line:1 char:1
+ ${tervaluecut[0]}
+ ~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (${tervaluecut[0]}:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException             `


                    ljflkjdf9853948534()
                    function ljflkjdf9853948534() {
                        terminal.value = "";

                    }

                    return {
                        errorTerminal: `
Some uncaught error showing in system. Check the titleInfo.js file and check 
whether the versionCommand is inserted correctly, if not, you should restart your system or redownload the file from server
At line:1 char:1
+ <b>version command is not inserted correctly</b>
+ check the titleInfo.js file and check the versionCommand
    + CategoryInfo          : ObjectNotFound: (${tervaluecut[0]}:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException`
                    }
                }


                if (!(version.slice(0, 8) === "control ") || !(version.slice(0, 7) === "control")) {
                    document.querySelector(".error-console").style.color = "red";
                    document.querySelector(".error-console").innerHTML = shjf().errorTerminal;
                }


            }
        }

    }



})

function errConsole(error) {
    document.querySelector(".error-console").innerHTML = error;
}



function repoOperations(trueO) {

    let modalSeat = document.querySelector(".modal_design");


    let modalFirstAnime = `
<style>
.modal_design {
    font-family:monospace;
    
}
.modal_design * {
    user-select:none;
}
.modal_design_In {
    background:rgba(40, 40, 40, 0.7);
    width:100%;
    min-height:100vh;
    position:absolute;
    z-index:76;
    top:0;
    right: 0%;
    left: 0%;
    bottom: 0%;
    animation: gero 1 0.5s;
}
@keyframes gero {

    0% {
        opacity:0;
    }
    50% {
        opacity:.5;
    }
    100% {
        opacity:1;
    }
}
@media screen and (min-width:1000px) {
    .modal_design_In {
        background:rgba(40, 40, 40, 0.7);
        width:100%;
        min-height:120vh;
        position:absolute;
        z-index:76;
        top:0;
        right: 0%;
        left: 0%;
        bottom: 0%;
    }
}
.modal_design .modal_main {
    background:rgb(66, 65, 65);
    color:white;
    z-index: 78;
    position:absolute;
    animation:yame 1 .5s;
    top:25%;
    left:50%;
 }

@keyframes yame {
    0% {
        top:-50%;
        left:50%;
    }
    100% {
        top:25%;
        left:50%;
    }
}

.modal_design .modal_main .modal-header {
    background:rgb(46, 46, 46);
    padding:4px 2px 4px 11px;
}
.modal_design .modal_main .modal-body {
    padding: 8px;
}
.modal_design .modal_main .modal-body li{
    list-style:none;
    padding:1px;
}
.modal_design .modal_main .modal-body li:hover{
    background:white;
    color:black;

}
.modal_design .modal_main .suggest {
    font-size:.6rem;
    padding:8px;
    color:red;
    border-top:1px solid rgba(125, 125, 125, 0.5);
}
.modal_design .modal_main .suggest li{
    list-style:none;
}

</style>

`
    let modalSecondAnime = `
<style>
.modal_design {
    font-family:monospace;
    
}
.modal_design * {
    user-select:none;
}
.modal_design_In {
    background:rgba(40, 40, 40, 0.7);
    width:100%;
    min-height:100vh;
    position:absolute;
    z-index:76;
    top:0;
    right: 0%;
    left: 0%;
    bottom: 0%;
    animation: gero 1 .6s;
}
@keyframes gero {

    0% {
        opacity:1;
    }
    50% {
        opacity:.5;
    }
    100% {
        opacity:0;
    }
}
@media screen and (min-width:1000px) {
    .modal_design_In {
        background:rgba(40, 40, 40, 0.7);
        width:100%;
        min-height:120vh;
        position:absolute;
        z-index:76;
        top:0;
        right: 0%;
        left: 0%;
        bottom: 0%;
    }
}
.modal_design .modal_main {
    background:rgb(66, 65, 65);
    color:white;
    z-index: 78;
    position:absolute;
    animation:friend 1 .6s;
    top:25%;
    left:50%;
 }

@keyframes friend {
    0% {
        top:25%;
        left:50%;
    }
    100% {
        top:-50%;
        left:50%;
    }
}

.modal_design .modal_main .modal-header {
    background:rgb(46, 46, 46);
    padding:4px 2px 4px 11px;
}
.modal_design .modal_main .modal-body {
    padding: 8px;
}
.modal_design .modal_main .modal-body li{
    list-style:none;
    padding:1px;
}
.modal_design .modal_main .modal-body li:hover{
    background:white;
    color:black;

}
.modal_design .modal_main .suggest {
    font-size:.6rem;
    padding:8px;
    color:red;
    border-top:1px solid rgba(125, 125, 125, 0.5);
}
.modal_design .modal_main .suggest li{
    list-style:none;
}


</style>

`
    let repoOptions = "";
    for (let infor = 0; infor < info.repo.options.length; infor++) {

        repoOptions += "<li class='repo-opt-" + infor + "'>" + info.repo.options[infor] + "</li>"

    }

    let modalTemp = `
<div class="modal_design_In">
<div class="modal_main">
    <div class="modal-header">
        <h3>Set Repository</h3>
    </div>
    <div class="modal-body">
        ${repoOptions}
    </div>
    <div class="suggest">
        <li>Click the <b>Alt + M</b> to exit</li>
        <li>Click a option to set the terminal settings</li>
    </div>
</div>
</div>
`

    if (trueO) {
        first()
        setRepositoryByOptions()
        second()

        function first() {
            modalSeat.innerHTML = modalFirstAnime + modalTemp;
            modalSeat.style.display = "block";

        }
        function second() {
            document.querySelector("*").addEventListener("keydown", (event) => {
                if ((event.altKey) && (event.key === "m")) {
                    const undisplayingREPO = setTimeout(() => {

                        modalSeat.innerHTML = modalSecondAnime + modalTemp;
                        const undisplay = setTimeout(() => {
                            modalSeat.style.display = "none";
                        }, 100)
                    }, 600)



                }
            })
        }

    }

    return;

}







function setRepositoryByOptions() {

    let modalFirstAnime = `
    <style>
    .modal_design {
        font-family:monospace;
        
    }
    .modal_design * {
        user-select:none;
    }
    .modal_design_In {
        background:rgba(40, 40, 40, 0.7);
        width:100%;
        min-height:100vh;
        position:absolute;
        z-index:79;
        top:0;
        right: 0%;
        left: 0%;
        bottom: 0%;
        animation: gero 1 0.5s;
    }
    @keyframes gero {
    
        0% {
            opacity:0;
        }
        50% {
            opacity:.5;
        }
        100% {
            opacity:1;
        }
    }
    @media screen and (min-width:1000px) {
        .modal_design_In {
            background:rgba(40, 40, 40, 0.7);
            width:100%;
            min-height:120vh;
            position:absolute;
            z-index:79;
            top:0;
            right: 0%;
            left: 0%;
            bottom: 0%;
        }
    }
    .modal_design .modal_main {
        background:rgb(66, 65, 65);
        color:white;
        z-index: 80;
        position:absolute;
        animation:yame 1 .5s;
        top:25%;
        left:50%;
     }
    
    @keyframes yame {
        0% {
            top:-50%;
            left:50%;
        }
        100% {
            top:25%;
            left:50%;
        }
    }
    
    .modal_design .modal_main .modal-header {
        background:rgb(46, 46, 46);
        padding:4px 2px 4px 11px;
    }
    .modal_design .modal_main .modal-body {
        padding: 8px;
    }
    .modal_design .modal_main .modal-body li{
        list-style:none;
        padding:1px;
    }
    .modal_design .modal_main .modal-body li:hover{
        background:white;
        color:black;
    
    }
    .modal_design .modal_main .suggest {
        font-size:.6rem;
        padding:8px;
        color:red;
        border-top:1px solid rgba(125, 125, 125, 0.5);
    }
    .modal_design .modal_main .suggest li{
        list-style:none;
    }
    input[yero="mela"] {
        background: black;
        color: white;
        padding:11px;
        border:none;
        outline:none;

    }
    seme {
        display:inline-block;
        padding:3px;
        background:lightgreen;
        color:black;
        font:8px;
        margin-right:-50%;
    }
    seme:hover {
        opacity:0.6;
    }
    </style>
    
    `
    let modalSecondAnime = `
    <style>
    .modal_design {
        font-family:monospace;
        
    }
    .modal_design * {
        user-select:none;
    }
    .modal_design_In {
        background:rgba(40, 40, 40, 0.7);
        width:100%;
        min-height:100vh;
        position:absolute;
        z-index:79;
        top:0;
        right: 0%;
        left: 0%;
        bottom: 0%;
        animation: gero 1 .6s;
    }
    @keyframes gero {
    
        0% {
            opacity:1;
        }
        50% {
            opacity:.5;
        }
        100% {
            opacity:0;
        }
    }
    @media screen and (min-width:1000px) {
        .modal_design_In {
            background:rgba(40, 40, 40, 0.7);
            width:100%;
            min-height:120vh;
            position:absolute;
            z-index:79;
            top:0;
            right: 0%;
            left: 0%;
            bottom: 0%;
        }
    }
    .modal_design .modal_main {
        background:rgb(66, 65, 65);
        color:white;
        z-index: 80;
        position:absolute;
        animation:friend 1 .6s;
        top:25%;
        left:50%;
     }
    
    @keyframes friend {
        0% {
            top:25%;
            left:50%;
        }
        100% {
            top:-50%;
            left:50%;
        }
    }
    
    .modal_design .modal_main .modal-header {
        background:rgb(46, 46, 46);
        padding:4px 2px 4px 11px;
    }
    .modal_design .modal_main .modal-body {
        padding: 8px;
    }
    .modal_design .modal_main .modal-body li{
        list-style:none;
        padding:1px;
    }
    .modal_design .modal_main .modal-body li:hover{
        background:white;
        color:black;
    
    }
    .modal_design .modal_main .suggest {
        font-size:.6rem;
        padding:8px;
        color:red;
        border-top:1px solid rgba(125, 125, 125, 0.5);
    }
    .modal_design .modal_main .suggest li{
        list-style:none;
    }
    input[yero="mela"] {
        background: black;
        color: white;
        padding:11px;
        border:none;
        outline:none;

    }
    seme {
        display:block;
        padding:1px;
        background:lightgreen;
        color:black;
        width:25%;
        font:8px;
        margin-right:-50%;
    }
    seme:hover {
        opacity:0.6;
    }
    </style>
    
    `

    let modalTemp = `
<div class="modal_design_In">
<div class="modal_main">
    <div class="modal-header">
        <h3>Create command</h3>
    </div>
    <div class="modal-body">
        <input type = "text" yero="mela">
        <div style='font:12px monospace; padding:3px 0;' rame-number='677483'></div>
        <span click-button="true"></span>
    </div>
    <div class="suggest">
        <li>Click the <b>Alt + M</b> to exit</li>
        <li>Click a option to set the terminal settings</li>
    </div>
</div>
</div>
`





    rewt(0).addEventListener("click", () => {
          
          document.querySelector(".modal_design").innerHTML = modalFirstAnime + modalTemp;
                let yero = document.querySelector("[yero='mela']");
                yero.addEventListener("input", function () {
                    checkAvailabiliyOfcommand()
                    
                })
    })





}

function openInputOptionbyClickTheCreateCommand() {

}

function rewt(content98) {
    return document.querySelector(`.repo-opt-${content98}`);
}

function imgRead() {


    // let image = document.querySelector("img");
    let fr = new FileReader()
    let file = document.querySelector("input[type='file']").files[0];


    fr.addEventListener("load", () => {




        arkFileConstruction({ fr, file })


    }, false)




    fr.readAsText(file)


}