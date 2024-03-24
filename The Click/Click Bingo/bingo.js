let BingoTable = [];
let BingoTableBlobCount = [];

function reinitializeBingoTable()
{
    for(let i=0;i<5;i++)
    {
        BingoTable[i] = [];
        BingoTableBlobCount[i] = [];
        for(let j=0;j<5;j++)
        {
            BingoTable[i][j] = -1;
            BingoTableBlobCount[i][j] = 0;
        }
    }

    let constElms = TableTypeElement[BingoType]["const_elms"];
    if(constElms != null && constElms != undefined && constElms.length > 0)
        constElms.forEach((elm) =>{
            if(elm != null){
                const i = parseInt(elm[0]*4);
                const j = parseInt(elm[1]*4);
                BingoTable[i][j] = elm[2];
            }
        });
    for(let i=0;i<5;i++)
        for(let j=0;j<5;j++)
            if(BingoTable[i][j] == -1)
            {
                for(let nr_tries=0;nr_tries<50;nr_tries++)
                {
                    item = Math.floor(Math.random()*(TableTypeElement[BingoType]["items"].length));
                    let its_not_used = true;
                    for(let k=0;k<5;k++)
                        for(let l=0;l<5;l++)
                            if(BingoTable[k][l] == item)
                            {
                                its_not_used = false;
                                break;
                            }
                    if(its_not_used)
                        break;
                }
                BingoTable[i][j] = item;
                //TableTypeElement[BingoType][Math.floor(Math.random()*(TableTypeElement[BingoType].length-2))+2];
            }
    for(let i=0;i<5;i++)
        for(let j=0;j<5;j++)
           {
                if(BingoTable[i][j] <= -2)
                    BingoTable[i][j] = ConstantElms[-BingoTable[i][j]];
                else
                    BingoTable[i][j] = TableTypeElement[BingoType]["items"][BingoTable[i][j]];
           } 
}

function getCircleHtml()
{
    let html =  "<li><div class=\"Circle\" ";

    html += "style=\"margin: ";

    var angle = Math.random() * Math.PI;
    var x = Math.sin(angle);
    var y = Math.cos(angle);
    if(x > 0)
        html += x + "vw ";
    else html += "0 ";

    if(y > 0)
        html += y + "vw ";
    else html += "0 ";

    if(x < 0)
        html += (-x) + "vw ";
    else html += "0 ";

    if(y < 0)
        html += (-y) + "vw ";
    else html += "0 ";

    html += "\"></div></li>";
    return html;
}

function addCircle(i, j)
{
    BingoTableBlobCount[i][j] += 1;
    const list = document.getElementsByName("cell " + i + " " + j)[0];
    list.innerHTML = getCircleHtml() + list.innerHTML;

    if(verifyBingo(i, j))
    {
        fireConfetti();
    }
}

function verifyBingo(i, j)
{
    let verticalBingo = 0;
    let horizontalBingo = 0;
    let lineBingo1 = 0;
    let lineBingo2 = 0;
    for(let d = -5; d <= 5; d++)
    {
        let x = i + d;
        let y = j;
        if(x>=0 && x<5)
            if(BingoTableBlobCount[x][y] != 0)
                verticalBingo += 1;
        x = i;
        y = j + d;
        if(y>=0 && y<5)
            if(BingoTableBlobCount[x][y] != 0)
                horizontalBingo += 1;
        x = i + d;
        y = j + d;
        if(x>=0 && x<5)
            if(y>=0 && y<5)
                if(BingoTableBlobCount[x][y] != 0)
                    lineBingo1 += 1;
        x = i + d;
        y = j - d;
        if(x>=0 && x<5)
            if(y>=0 && y<5)
                if(BingoTableBlobCount[x][y] != 0)
                    lineBingo2 += 1;
    }

    return verticalBingo == 5 ||
            horizontalBingo == 5 ||
            lineBingo1 == 5 ||
            lineBingo2 == 5;
}

function getRandomColor(base, alpha)
{
    return "rgb(" +
        Math.floor(Math.random() * (255 - base) + base) + "," +
        Math.floor(Math.random() * (255 - base) + base) + "," +
        Math.floor(Math.random() * (255 - base) + base) +
        "," + alpha + ")";
}

function remakeBingoTableInnerHtml(bT)
{
    let innerHtml = ""
    innerHtml = "<table>";
    for(let i=0;i<5;i++)
    {
        innerHtml += "<tr>";
        for(let j=0;j<5;j++)
        {
            innerHtml += "<td  onClick=\"addCircle(" + i + ", " + j + ")\" ";

            let back_color = BingoTable[i][j][1];
            if(back_color == "random")
            {
                back_color = getRandomColor(100, 0.8);
                //BingoTable[i][j][1] = back_color;
            }
            innerHtml += "style=\"background-color: " + back_color + ";";
            const back_image = BingoTable[i][j][2];
            if(back_image != "")
                innerHtml += "background-image: url(" + back_image + ");";
            innerHtml += "\"><div><ul name=\"cell " + i + " " + j + "\">";

            for(let k=0;k<BingoTableBlobCount[i][j];k++)
                innerHtml += getCircleHtml();
            innerHtml += "<li><div>" + BingoTable[i][j][0] + "</div></li>";
            innerHtml += "</ul></div></td>";
        }
        innerHtml += "</tr>"
    }
    innerHtml += "</table>";
    bT.innerHTML = innerHtml;
}

function editCell(i, j, part){
    const input = document.getElementsByName("cell " + i + " " + j)[0];

}

function onCellTextareaChangeInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + "px";
}

function applyCellColor(td, back_color){
    if(back_color == "random")
    {
        back_color = getRandomColor(100, 0.8);
    }
    td.style.backgroundColor = back_color;
}

function remakeEditableBingoTableInnerHtml(bT){
    let innerHtml = "";
    innerHtml += "<div>The tree inputs:";
    innerHtml += "<ol>";
    innerHtml += "<li>Cell text (can inject html code using this)</li>";
    innerHtml += "<li>Cell color (put 'random' for random color)</li>";
    innerHtml += "<li>Cell background url</li>";
    innerHtml += "</ol></div>";
    bT.innerHTML = innerHtml;
    
    let table = document.createElement('table');
    bT.appendChild(table);

    for(let i=0;i<5;i++)
    {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for(let j=0;j<5;j++)
        {
            let td = document.createElement('td');
            tr.appendChild(td);
            applyCellColor(td, BingoTable[i][j][1])
            if(BingoTable[i][j][2] != "")
                td.style.backgroundImage = "url("+BingoTable[i][j][2]+")";
            
            let input = document.createElement('textarea');
            input.setAttribute("placeholder", "cell text")
            input.setAttribute('i', i);
            input.setAttribute('j', j);
            input.setAttribute('t', 0);
            input.value = BingoTable[i][j][0];
            input.addEventListener("input", onCellTextareaChangeInput, false);
            const textarea = input;
            setTimeout(()=>{
                    textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;overflow-y:hidden;");
                }, 100);
            td.appendChild(input);

            input = document.createElement('input');
            input.setAttribute("placeholder", "back color")
            input.setAttribute('i', i);
            input.setAttribute('j', j);
            input.setAttribute('t', 1);
            input.value = BingoTable[i][j][1];
            const back_color = input;
            input.addEventListener("input", () => {applyCellColor(td, back_color.value)}, false);
            td.appendChild(input);

            input = document.createElement('input');
            input.setAttribute("placeholder", "back image url")
            input.setAttribute('i', i);
            input.setAttribute('j', j);
            input.setAttribute('t', 2);
            input.value = BingoTable[i][j][2];
            const back_image = input;
            input.addEventListener("input", () => {
                td.style.backgroundImage = "url("+back_image.value+")";
            }, false);
            td.appendChild(input);
        }
    }
}

function instantiateBingoTable(bT)
{
    bT.classList.add("ClickBingo");
    reinitializeBingoTable();
    remakeBingoTableInnerHtml(bT);
}

function resetCurrentBoard(){
    let bT = document.body.getElementsByTagName('bingo')[0];
    if(bT != null && bT != undefined)
    {
        for(let i=0;i<5;i++)
            for(let j=0;j<5;j++)
                BingoTableBlobCount[i][j] = 0;
        remakeBingoTableInnerHtml(bT);
    }
    let button = document.getElementById('edit_button');
    button.removeAttribute("hidden");
    button = document.getElementById('save_button');
    button.setAttribute("hidden", true);
}

function editBoard(){
    let bT = document.body.getElementsByTagName('bingo')[0];
    if(bT != null && bT != undefined){
        remakeEditableBingoTableInnerHtml(bT);
    }
    let button = document.getElementById('edit_button');
    button.setAttribute("hidden", true);
    button = document.getElementById('save_button');
    button.removeAttribute("hidden"); 
}

function makeNewBoard(){
    let bT = document.body.getElementsByTagName('bingo')[0];
    if(bT != null && bT != undefined){
        instantiateBingoTable(bT);
    }
}

function saveBoard(){
    let bT = document.body.getElementsByTagName('bingo')[0];
    if(bT != null && bT != undefined){
        let inputs = document.body.getElementsByTagName('input');
        let textareaInputs = document.body.getElementsByTagName('textarea');
        if(inputs != null && inputs != undefined){
            inputs = Array.from(inputs);
            if(textareaInputs != null && textareaInputs != undefined)
                Array.prototype.push.apply(inputs, textareaInputs);
            inputs.forEach((inp) => {
                let i = Number(inp.getAttribute('i'));
                let j = Number(inp.getAttribute('j'));
                let t = Number(inp.getAttribute('t'));
                BingoTable[i][j][t] = inp.value;
            });
        }

        remakeBingoTableInnerHtml(bT);
    }
    let button = document.getElementById('edit_button');
    button.removeAttribute("hidden");
    button = document.getElementById('save_button');
    button.setAttribute("hidden", true);
}

function changeTags(parent){
    let myTypeSelect = document.getElementById("bingo_type");
    for(let key in TableTypeElement)
    {
        myTypeSelect.innerHTML += "<option value=\"" + key + "\">" + key + "</option>"
    }
    myTypeSelect.value = BingoType;

    let myTags = parent.getElementsByTagName('bingo');
    if(myTags)
        for(let i=0;i<myTags.length;i++){
            let tag = myTags[i];
            tag.innerHTML = ""
            instantiateBingoTable(tag);

            myTypeSelect.onchange= () => {
                BingoType = myTypeSelect.value;
                instantiateBingoTable(tag);
                sessionStorage.setItem("BingoType", BingoType);
            };
        }
}

window.addEventListener("load", function(event) {
    changeTags(document.body);
},false);