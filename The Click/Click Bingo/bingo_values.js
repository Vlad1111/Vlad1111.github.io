const ConstantElms = {
    2: ["<div style=\"font-size: calc(80vmin/10);\">😐</div>", "white", ""],
    3: ["✨ actually wholesome ✨", "lightblue", ""],
    4: ["actually cursed</br><p style='line-height:0.5;'>😲</br>🙏</p>", "red", ""],
    5: ["doing voices while reading", "white", ""],
    6: ["", "", "https://cdn3.emoji.gg/emojis/5870_open_eye_crying_laughing.png"],
};
let BingoType = sessionStorage.getItem("BingoType");
if(BingoType == null)
    BingoType = "bad female anatomy";
const InitialTableTypeElement = 
{
    "click video (beta version)":{
        "const_elms": [[1,0,-4], [1,1,-3], [0.5,0.5,-5]],
        "items":[
                ["inhuman sounds", "random", ""],
                ["click academy", "random", ""],
                ["hail satan!", "random", ""],
                ["WTF?!", "random", ""],
                ["\"this can't be real!\"", "random", ""],
                ["today I learned something new", "random", ""],
                ["good life advice", "random", ""],
                ["bad advice (not indorsed)", "random", ""],
                ["good evil advice", "random", ""],
                ["so. much. f**king. censuring!", "random", ""],
                ["quality facebook trash", "random", ""],
                ["literally laughing on the floor", "random", ""],
                ["\"it's still going?!\"", "random", ""],
                ["\"sir, that's a child!\"", "random", ""],
                ["plushy mentioned", "random", ""],
                ["going outside on a trip", "random", ""],
                ["meme with overly bad grammar", "random", ""],
                ["unhinge bible stuff", "random", ""],
                ["kids being kids", "random", ""],
                ["cringe youtube comments", "random", ""],
                ["<div style=\"font-size: calc(80vmin/15);\">😬</div>", "random", ""],
                ["just click being a nerd", "random", ""],
                ["click speaking swedish", "random", ""],
                ["that's not how a body works", "random", ""],
                ["<div style='font-size: calc(80vmin/15);'>🥵</div>", "random", ""],
                ["\"what is a furry?\"", "random", ""],
                ["true gender equality", "random", ""],
                ["lil' cute animal", "random", ""],
                ["\"fellas, is it gay to _____\"", "random", ""],
                ["brand new sentence", "random", ""],
            ]
    },
    "bad female anatomy" : {
        "const_elms": [[0.5,0.5,-2], [1,1,-3]],
        "items":[
                ["a man wrote this", "random", ""],
                ["victim blaming", "random", ""],
                ["made up stats", "random", ""],
                ["bad anatomy", "random", ""],
                ["twitter alpha male", "random", ""],
                ["fake s** facts", "random", ""],
                ["I made this up to get mad about", "random", ""],
                ["no means \"_____\"", "random", ""],
                ["something something kids n' family", "random", ""],
                ["WTF", "random", ""],
                ["Barely literate", "random", ""],
                ["I can tell you're gay", "random", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png"],
                ["period \"facts\"", "random", ""],
                ["\"I can turn you straight\"", "random", ""],
                ["sloot \"logic\"", "random", ""],
                ["purity", "random", ""],
                ["endorse abuse", "random", ""],
                ["gate-keep", "random", ""],
                ["down bad", "random", ""],
                ["pickup artistry", "random", ""],
                ["age stuff", "random", ""],
                ["sloot shaming", "random", ""],
                ["pointless gender war", "random", ""],
                ["\"traditional values\"", "random", ""],
                ["SMV", "random", ""],
                ["bad analogy", "random", ""],
                ["\"why won't she love me?\"", "random", ""],
                ["\"asking for it\"", "random", ""],
                ["fake stats", "random", ""],
                ["excusing cheating", "random", ""],
                ["s**ualizing non s**ual things", "random", ""],
                ["women vs women", "random", ""]
            ]
    },
    "insane parents" : {
        "const_elms": [[0.5,0.5,-2], [1,1,-3]],
        "items":[
                ["trashing property", "random", ""],
                ["political nonsense", "random", ""],
                ["anger issues", "random", ""],
                ["oddly explicit rants", "random", ""],
                ["overbearing or controlling", "random", ""],
                ["treating adult like child", "random", ""],
                ["overblowing small issues", "random", ""],
                ["religious nonsense", "random", ""],
                ["homophobia", "random", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png"],
                ["it's all about me", "random", ""],
                ["gay agenda", "white", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png"],
                ["drunk texts", "random", ""],
                ["creeping on family", "random", ""],
                ["anti-vax", "random", ""],
                ["transphobia", "random", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1920px-Transgender_Pride_flag.svg.png"],
                ["body shaming", "random", ""],
                ["dismiss mental health", "random", ""],
                ["threatening housing", "random", ""],
                ["invading privacy / intimacy", "random", ""],
                ["stalker warning", "random", ""],
                ["conspiracy rant", "random", ""],
                ["location tracking", "random", ""],
                ["ignoring big issue", "random", ""],
                ["\"come to church\"", "random", ""],
                ["acting like children", "random", ""],
                ["bully your child", "random", ""],
                ["bad anatomy", "random", ""],
                ["sh**ty home remedies", "random", ""],
                ["guilt trip", "random", ""],
                ["satanic panic", "random", ""],
                ["call the cops", "random", ""],
                ["fights about nothing", "random", ""],
                ["mask slip", "random", ""],
                ["facebook mom", "random", ""],
                ["kicking out", "random", ""],
                ["sus contact", "random", ""],
                ["cult vibes", "random", ""],
                ["child neglect", "random", ""],
                ["✨ violent ✨", "random", ""],
                ["WTF", "random", ""],
            ]
    },
    "accidental ally": {
        "const_elms": [[0.5,0.5,-6], [1,1,-3]],
        "items":[
            ["trans flag", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1920px-Transgender_Pride_flag.svg.png"],
            ["tiktok gets it ... right", "random", ""],
            ["gender affirming", "random", ""],
            ["\"you will never be a ...\"", "random", ""],
            ["comic get it right", "random", ""],
            ["double down", "random", ""],
            ["\"I made this up to get mad about\"", "random", ""],
            ["mockery that's badass", "random", ""],
            ["gender isn't real", "random", ""],
            ["WTF", "random", ""],
            ["trans women are women", "random", ""],
            ["rainbow flag", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1920px-Gay_Pride_Flag.svg.png"],
            ["trans men are men", "random", ""],
            ["oops I helped them", "random", ""],
            ["gender reveal", "random", ""],
            ["<text style='line-height:0;'><text style='font-size:calc(80vmin/8)'>🔥</text></br>HOT</text>", "random", ""],
            ["back-words", "random", ""],
            ["<text style='line-height:0;'><text style='font-size:calc(80vmin/8)'>😈</text></br>Hail satan</text>", "random", ""],
            ["non binary flag", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nonbinary_flag.svg/1920px-Nonbinary_flag.svg.png"],
            ["ace flag", "random", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Asexual_Pride_Flag.svg/320px-Asexual_Pride_Flag.svg.png"],
            ["accidental compliment", "random", ""],
            ["be gay do crime", "random", ""],
            ["that's the point", "random", ""],
        ]
    }
};

let TableTypeElement = InitialTableTypeElement;
loadList();

function saveNewList(){
    let keys = Object.keys(TableTypeElement);
    let json = JSON.stringify(TableTypeElement);
    sessionStorage.setItem("ClickBingoTableTypeElements", json);

    eraseAllCookiesStartingWith("ClickBingoTableTypeElements");
    setCookie("ClickBingoTableTypeElements_keys", JSON.stringify(keys));
    keys.forEach(k => {
        setCookie("ClickBingoTableTypeElements_"+k, JSON.stringify(TableTypeElement[k]));
    });
}

function loadList(){
    let board_json = sessionStorage.getItem("ClickBingoTableTypeElements");
    if(board_json == null || board_json == undefined){
        board_json = getCookie("ClickBingoTableTypeElements_keys");
        if(board_json != null && board_json != undefined){
            let keys = JSON.parse(board_json);
            let original_keys = Object.keys(InitialTableTypeElement);

            keys.forEach(k => { if(!(k in InitialTableTypeElement)) original_keys.push(k)})
            keys = original_keys;

            TableTypeElement = {};
            keys.forEach(k => {
                board_json = getCookie("ClickBingoTableTypeElements_"+k);
                if(board_json != null && board_json != undefined)
                    TableTypeElement[k] = JSON.parse(board_json);
                else if(k in InitialTableTypeElement)
                    TableTypeElement[k] = InitialTableTypeElement[k];
            });
        }
    }
    else{
        TableTypeElement = JSON.parse(board_json);
        for(k in InitialTableTypeElement){
            if(TableTypeElement[k] == null || TableTypeElement[k] == undefined)
                TableTypeElement[k] = InitialTableTypeElement[k];
        }
    }
}

function populateOneElementOfList(parentUl, list, i, li_list, list_type){
    const l = list[i];
    const li = document.createElement('li');
    li_list[i] = li;
    li.style.paddingBottom = "30px";
    parentUl.appendChild(li);
    let indexD = 0;
    if(list_type == 1)
        indexD = 1;
    for(let j = 0; j < l.length - indexD; j++){
        let input = document.createElement('input');
        input.value = l[j];
        const input_value = input;
        input.addEventListener("input", () => {
            l[j] = input_value.value; 
            saveNewList();
        }, false);
        li.appendChild(input);
    }
    if(list_type == 1){
        //Create and append select list
        var selectList = document.createElement("select");
        //selectList.id = "mySelect";
        selectList.style.width = "100%";
        li.appendChild(selectList);
        
        //Create and append the options
        for (j in ConstantElms) {
            var option = document.createElement("option");
            option.value = -j;
            option.innerHTML = ConstantElms[j][0];
            selectList.appendChild(option);
        }
        selectList.value = l[2];
        selectList.onchange = () => {
            l[2] = selectList.value;
            saveNewList();
        }
    }
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = " remove ";
    deleteButton.onclick = () => {
        list.splice(i, 1);
        li_list.forEach(elm => elm.remove());
        saveNewList();
        populateEditableListToNode(parentUl, list, list_type);
    }
    deleteButton.style.width = "25%";
    li.appendChild(deleteButton);
}

function populateEditableListToNode(parentUl, list, list_type){
    const li_list = [];
    for(let i = 0; i < list.length; i++){
        //console.log(list);
        //console.log(i + " " + list[i]);
        populateOneElementOfList(parentUl, list, i, li_list, list_type);
    }

    const li = document.createElement('li');
    li_list[list.length] = li;
    li.style.paddingBottom = "30px";
    parentUl.appendChild(li);
    
    let addButton = document.createElement("button");
    addButton.innerHTML = " add ";
    addButton.onclick = () => {
        if(list.length > 0)
            list[list.length] = structuredClone(list[list.length - 1])
        else list[list.length] = ["", "", ""];
        li_list.forEach(elm => elm.remove());
        saveNewList();
        populateEditableListToNode(parentUl, list, list_type);
    }
    addButton.style.width = "25%";
    li.appendChild(addButton);
}

function addEditableListToNode(node, list, label_text, list_type){
    const ul = document.createElement('ul');
    node.appendChild(ul);
    ul.innerHTML = "<br/>" + label_text;
    populateEditableListToNode(ul, list, list_type);
}

function populateElement(elm_key, elm_item, show){
    let pElement = document.createElement('span');
    let hideButton = document.createElement('button');
    let emlContent = document.createElement('div');
    
    pElement.appendChild(hideButton);
    hideButton.onclick = function(){
        if(emlContent.getAttribute("hidden")){
            emlContent.removeAttribute("hidden");
            hideButton.innerHTML = "| v |";
        }
        else{
            emlContent.setAttribute("hidden", true);
            hideButton.innerHTML = "| > |";
        }
    };
    if(!show){
        hideButton.onclick();
    }
    else
        hideButton.innerHTML = "| v |";
    hideButton.style.width = "15%";

    elm_item.appendChild(pElement);
    elm_item.appendChild(emlContent);

    if(elm_key in InitialTableTypeElement){
        pElement.appendChild(document.createTextNode(" " + elm_key));
        let button = document.createElement('button');
        button.innerHTML = "Reset";
        button.onclick = function() {
            TableTypeElement[elm_key] = structuredClone(InitialTableTypeElement[elm_key]);
            elm_item.innerHTML = "";
            saveNewList();
            populateElement(elm_key, elm_item, true);
        };
        emlContent.appendChild(button);
    }
    else{
        let input_name = document.createElement('input');
        input_name.value = elm_key;
        input_name.style.width = "60%";
        input_name.addEventListener("input", () => {
            TableTypeElement[input_name.value] = TableTypeElement[elm_key];
            delete TableTypeElement[elm_key];
            if(BingoType == elm_key){
                BingoType = input_name.value;
            }
            let myTypeSelect = document.getElementById("bingo_type");
            myTypeSelect.innerHTML = "";
            for(let key in TableTypeElement)
            {
                myTypeSelect.innerHTML += "<option value=\"" + key + "\">" + key + "</option>"
            }
            myTypeSelect.value = BingoType;
            elm_key = input_name.value;
            saveNewList();
        }, false);
        pElement.appendChild(input_name);
        
        let button = document.createElement('button');
        button.innerHTML = " Remove";
        button.onclick = function() {
            delete TableTypeElement[elm_key];
            saveNewList();
            elm_item.remove();
        };
        pElement.appendChild(button);
    }

    addEditableListToNode(emlContent, TableTypeElement[elm_key]["const_elms"], "Constants:", 1);
    addEditableListToNode(emlContent, TableTypeElement[elm_key]["items"], "Elements:", 0);
}

function editTableTypeElements(){
    let bT = document.body.getElementsByTagName('bingo')[0];
    if(bT != null && bT != undefined){
        bT.innerHTML = "";
        
        const instructions = document.createElement('span');
        bT.appendChild(instructions);
        instructions.innerHTML += "Constants are the cells that have always the same values<br/>";
        instructions.innerHTML += " -the first 2 are the indexes (from 0 to 1)<br/>";
        instructions.innerHTML += " -the first 3rd is constant message (at the moment you can't add new constants)<br/>";
        instructions.innerHTML += "<br/>";
        instructions.innerHTML += "Elements are the cell values list from which it will be selected random<br/>";
        instructions.innerHTML += " -the first is the text (you can inject html code in this one)<br/>";
        instructions.innerHTML += " -the second is the background color (put 'random' to have a random color)<br/>";
        instructions.innerHTML += " -the third is the background image url<br/>";

        const elms_list = document.createElement('ul');
        bT.appendChild(elms_list);
        for(let elm_key in TableTypeElement){
            let elm_item = document.createElement('li');
            elm_item.style.minWidth = "80vw";
            elms_list.appendChild(elm_item);
            populateElement(elm_key, elm_item, false);
        }
        let add_item = document.createElement('li');
        elms_list.appendChild(add_item);
        let addButton = document.createElement('button');
        addButton.innerHTML = "| + |";
        addButton.onclick = function(){
            //alert("at the moment you can't add a new category. I'm working on that");
            let elm_key = "type " + Object.keys(TableTypeElement).length;
            TableTypeElement[elm_key] = {
                "const_elms": [],
                "items": []
            };
            let elm_item = document.createElement('li');
            elm_item.style.minWidth = "80vw";
            elms_list.appendChild(elm_item);
            populateElement(elm_key, elm_item, false);
            elms_list.appendChild(add_item);
            //editTableTypeElements();
        };
        addButton.style.width = "15%";
        let p = document.createElement('span');
        p.appendChild(addButton);
        add_item.appendChild(p);
    }
}