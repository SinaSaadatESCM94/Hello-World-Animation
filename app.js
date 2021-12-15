const pageWidth=document.querySelector("body").clientWidth;
const rainDrop=document.querySelector(".drop-ball");
const rainDropWidth=rainDrop.clientWidth;
const dropBallNo=Math.floor(pageWidth/rainDropWidth);

if(rainDropWidth===0){
    rainDropWidth=10;
};

for(let i=0; i<dropBallNo; i++){
    document.addEventListener("DOMContentLoaded" , function(){
    
        // creating a function to generate random delay
        const randomNumber=Math.random();
        const randomAnimationDelay=`${(randomNumber)*1.5}s`;
        const randomAnimationDuration=`${(randomNumber)*1.5+1}s`;

        // creating div.drop-ball as parent
        const newDivParent=document.createElement("div");
        newDivParent.id=`${i}`
        newDivParent.className="drop-ball";
        newDivParent.style.animationDelay=randomAnimationDelay;
        newDivParent.style.animationDuration=randomAnimationDuration;
        document.body.appendChild(newDivParent);

        // creating div.drop-shape as child
        const newDivChild=document.createElement("div");
        newDivChild.id=`${i}`
        newDivChild.className="drop-shape";
        newDivParent.appendChild(newDivChild);


    })
}


console.log(pageWidth);
console.log(dropBallNo);
