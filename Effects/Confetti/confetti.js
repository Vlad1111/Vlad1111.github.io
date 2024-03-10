class ConfettiClass{
    node;
    x; y;
    rotation;
    rotation_speed;
    dirX; dirY;
    time;
    is_deleted;

    constructor(_node, _x, _y, _rotation, _dirX, _dirY, _time){
        this.node = _node;
        this.x = _x;
        this.y = _y;
        this.rotation = _rotation;
        this.rotation_speed = Math.random() * 20 + 8;
        this.dirX = _dirX;
        this.dirY = _dirY;
        this.time = _time;
        this.is_deleted = false;
    }
}
let ConfettiSpawn = []

function registerConfettiSpawnPoints(parent)
{
    let conBody = parent.getElementsByTagName('confetti_body')[0];
    if(conBody != null && conBody != undefined)
    {
        conBody.classList.add("ConfettiBody");
    
        let myTags = conBody.getElementsByTagName('confetti');
        ConfettiSpawn = [];
        if(myTags)
            for(let i=0;i<myTags.length;i++){
                let tag = myTags[i];
                tag.classList.add("Confetti");
                ConfettiSpawn[i] = tag;
            }
    }
}

function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
}
function calcMagnitude(x, y)
{
    return Math.sqrt(x * x + y * y);
}

function updateConfetti(confetti)
{
    let are_there_more = false;
    for(let i = 0; i < confetti.length; i++){
        let conf = confetti[i];

        if(conf.is_deleted)
            continue;
        are_there_more = true;

        conf.node.style.top = conf.x / 10 + "vh";
        conf.node.style.right = conf.y / 10 + "vw";
        conf.node.style.rotate = conf.rotation + "deg";
        conf.x += conf.dirX * 10;
        conf.y += conf.dirY * 10;
        conf.dirX += 0.1;
        conf.rotation += conf.rotation_speed;
        conf.time -= 20;
        if(conf.time <= 0)
            conf.node.remove(); 
    }

    if(are_there_more)
    {
        setTimeout(function() { updateConfetti(confetti);}, 20);
    }
}

function fireConfetti()
{
    let confetti = [];
    for(let i=0;i<ConfettiSpawn.length;i++)
    {
        let dirX = Number(ConfettiSpawn[i].getAttribute("dirx"));
        let dirY = Number(ConfettiSpawn[i].getAttribute("diry"));
        
        let angle = Math.atan2(dirX, dirY);
        let spread = ConfettiSpawn[i].getAttribute("spread");
        if(spread == null || spread == undefined)
            spread = 10;
        else spread = Number(spread);
        const magnitude = calcMagnitude(dirX, dirY);
        
        for(let nrC = 0; nrC < 50; nrC++)
        {
            const node = document.createElement("div");
            node.style.backgroundColor = getRandomColor(150, 1);
            ConfettiSpawn[i].appendChild(node);

            let newAngle = angle + (Math.random() - 0.5) * 2 * spread * Math.PI / 180;
            let newMagnitude = (Math.random() * 0.4 + 0.8) * magnitude;
            let newDirX = Math.sin(newAngle) * newMagnitude;
            let newDirY = Math.cos(newAngle) * newMagnitude;

            confetti.push(new ConfettiClass(node, 0, 0, Math.random() * 180, newDirX, newDirY, 2000 + Math.random() * 200));
        }
    }
    updateConfetti(confetti);
}

window.addEventListener("load", function(event) {
    registerConfettiSpawnPoints(document.body);
},false);