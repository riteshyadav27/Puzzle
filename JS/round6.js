var rows=3;
var columns=3;

var currTile;
var blanktile;

var turns=0;

//var sol = ["Images/1","Images/2","Images/3","Images/4","Images/5","Images/6","Images/7","Images/8","Images/9"];

var imgOrder = ["/Images/round 6/3","/Images/round 6/4","/Images/round 6/5","/Images/round 6/6","/Images/round 6/9","/Images/round 6/7","/Images/round 6/1","/Images/round 6/2","/Images/round 6/8"];

window.onload = function(){
    for(let r=0;r<rows;r++){
        for(let c=0;c<columns;c++){

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src= imgOrder.shift() + ".jpg";
            
            tile.addEventListener("dragstart",dragStart);
            tile.addEventListener("dragover",dragOver);
            tile.addEventListener("dragenter",dragEnter);
            tile.addEventListener("dragleave",dragLeave);
            tile.addEventListener("drop",dragDrop);
            tile.addEventListener("dragend",dragEnd);


            document.getElementById("board").append(tile);
        }
    }

    function dragStart(){
        currTile=this;
    }

    function dragOver(e){
        e.preventDefault();
    }
    function dragEnter(e){
        e.preventDefault();
    }
    function dragLeave(e){
        e.preventDefault();
    }
    function dragDrop(e){
        otherTile=this;
    }
    function dragEnd(e){

        if(!otherTile.src.includes("9.jpg")){
            return;
        }
        
        let currCords= currTile.id.split("-");
        let r1 =parseInt(currCords[0]);
        let c1 =parseInt(currCords[1]);

        let otherCords= otherTile.id.split("-");
        let r2 =parseInt(otherCords[0]);
        let c2 =parseInt(otherCords[1]);

        let moveleft = r1==r2 && c1==c2-1;
        let moveright = r1==r2 && c1==c2+1;
        let moveup = r1==r2-1 && c1==c2;
        let movedown = r1==r2+1 && c1==c2;

        let isAdjacent = movedown || moveleft || moveright || moveup;
        if(isAdjacent){
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src=otherImg;
        otherTile.src=currImg;

        turns++;
        document.getElementById("turns").innerText = turns;
        }
    }
}

