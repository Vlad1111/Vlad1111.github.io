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

    BingoTable[0][0] = TableTypeElement[BingoType]["left_upper_piece"];
    BingoTable[2][2] = TableTypeElement[BingoType]["center_piece"];
    BingoTable[4][4] = TableTypeElement[BingoType]["right_lower_piece"];
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
                if(BingoTable[i][j] == -2)
                    BingoTable[i][j] = FaceConstantElm;
                else if(BingoTable[i][j] == -3)
                    BingoTable[i][j] = WholesomeConstantElm;
                else if(BingoTable[i][j] == -4)
                    BingoTable[i][j] = CursedConstantElm;
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
        Math.floor(Math.random() * (255 - base) + base) + ", " +
        Math.floor(Math.random() * (255 - base) + base) + ", " +
        Math.floor(Math.random() * (255 - base) + base) +
        ", " + alpha + ")";
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
                BingoTable[i][j][1] = back_color;
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