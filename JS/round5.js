speed = 75


// Running Main Function
main()

async function main() {

    setTimeout(thanos_obj, 1000)
    setTimeout(vision_obj, 7000)

}


// Show Thanos Objective
async function thanos_obj() {

    await dialouge("../Images/thanos.png").then((res) => {

        controlBox.appendChild(res)

        console.log("Appended");

        const dialougeCon = document.getElementById('dialouge')

        let txt = ` Vision !! Get Ready. I am here to get the MIND Stone !!
    `
        typeWriter(dialougeCon, txt, 0)

    })
}

// Show Thanos Objective
async function vision_obj() {

    await dialouge("../Images/round5/vision_head.png").then((res) => {

        controlBox.innerHTML = res.outerHTML

        console.log("Appended");

        const dialougeCon = document.getElementById('dialouge')

        let txt = `I have hidden the stone in this room. You cannot find it!!
    `
        typeWriter(dialougeCon, txt, 0)

    })
}


// Creates HTML Body to add Dialouge
const dialouge = (headSrc) => {

    return new Promise((resolve, reject) => {

        const dialougeCon = document.createElement('div')
        dialougeCon.className = " dialougeCon "

        const headCon = document.createElement('div')
        headCon.className = " headCon"

        const head = document.createElement('img')
        head.className = " dialougeHead "
        head.src = headSrc

        headCon.appendChild(head)

        const dialouge = document.createElement('p')
        dialouge.className = " dialouge "
        dialouge.id = "dialouge"

        dialougeCon.appendChild(headCon)
        dialougeCon.appendChild(dialouge)


        resolve(dialougeCon)

    })

}

//TypeWriter Function
function typeWriter(textCon, txt, i) {


    if (i < txt.length) {

        textCon.innerHTML += txt.charAt(i);
        i++;
        setTimeout(() => { typeWriter(textCon, txt, i) }, speed);

    }


}

//Show StoneAcquired Function
async function stoneAcquired(stoneSrc, stone) {

    //create another section
    let acquirePage = document.createElement('section')
    acquirePage.className = "acquirePage"

    //Add Stone Image
    let stoneImg = document.createElement('img')
    stoneImg.src = stoneSrc
    stoneImg.style.height = "20rem"

    //Add Title and Msg
    let title = document.createElement('p')
    title.textContent = `CONGRATULATIONS !`

    let msg = document.createElement('p')
    msg.innerHTML = `You have acquired ${stone} Stone`

    //Append All Elements
    acquirePage.append(title, stoneImg, msg)

    document.body.innerHTML = acquirePage.outerHTML

}


document.getElementById('mind-stone').onclick = () => {
    stoneAcquired('../Images/Stones/mind_stone.png', "MI<span class='purple'>N</span>D")
    setTimeout(()=> window.location.href = '/HTML/location.html' , 2000)
}