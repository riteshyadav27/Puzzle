// declarations

const controlBox = document.getElementById('controlBox')
const speed = 10


main() //Main function starts


async function main() {

  setTimeout(thanos_obj, 1000)
  setTimeout(() => { scene1() }, 5000)
  setTimeout(() => { thanos_choice() }, 7000)


}


// Show Thanos Objective
async function thanos_obj() {

  await dialouge("../Images/thanos.png").then((res) => {

    controlBox.appendChild(res)

    console.log("Appended");

    const dialougeCon = document.getElementById('dialouge')

    let txt = ` I am Thanos ! My Planet got destroyed beacuse of depreciating resources ! I am going to bring balance by Killing the Half Universe So that Peace can be RESTOTRED ! 
  But For this I need 6 INFINITY STONES !
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


//Scene 1 ==> Loki and Thor Appears
async function scene1() {

  console.log("In scene 1");
  //Creating Scene 1
  let scene = document.createElement('p')
  scene.id = "dialouge"


  controlBox.innerHTML = scene.outerHTML
  let txt = "Loki and Thor Arrives at the Scene ! Loki has SPACE STONE"

  scene = document.getElementById('dialouge')

  typeWriter(scene, txt, 0)
  document.getElementById('heroesCon').style.width = "30%"

}

//Choice for thanos 
async function thanos_choice() {

  //Create HTML BODY
  let Choicebox = document.createElement('div')
  Choicebox.className = " thanosChoiceCon "

  //Dialouge 
  let choiceTitle = document.createElement('p')
  choiceTitle.id = "dialouge"

  let txt = "You need to get the SPACE STONE from LOKI"

  // Button Container
  let choiceBtnCon = document.createElement('div')
  choiceBtnCon.className = " choiceBtnCon "

  let killLokiBtn = document.createElement('button')
  killLokiBtn.id = "killLokiBtn"
  killLokiBtn.textContent = "Kill Loki And Get the Stone"


  let askLokiBtn = document.createElement('button')
  askLokiBtn.id = "askLokiBtn"
  askLokiBtn.textContent = "Ask Loki Nicely to get the Stone"


  //Appending All the Components
  choiceBtnCon.append(killLokiBtn, askLokiBtn)
  Choicebox.append(choiceTitle, choiceBtnCon)

  controlBox.innerHTML = Choicebox.outerHTML

  // Create Event Listeners for Buttons
  document.getElementById('killLokiBtn').onclick = () => { killLokiAction() }
  document.getElementById('askLokiBtn').onclick = () => { console.log("Asked"); }

  typeWriter(document.getElementById('dialouge'), txt, 0)

}

//Loki gets Killed
async function killLokiAction() {

  let loki = document.getElementById('lokiChar')
  loki.src = '../Images/Round1/dead_loki.png'

  let thor = document.getElementById('thorChar')
  thor.src = '../Images/Round1/thor_screaming.png'
  thor.style.height = "40%"

  loki.style.animation = "2s ease-in-out loki_killed  "

  setTimeout( ()=>stoneAcquired('../Images/Stones/space_stone.png', "Space") , 2000)

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
  msg.textContent = `You have acquired ${stone} Stone`

  //Append All Elements
  acquirePage.append(title , stoneImg , msg)

  document.body.innerHTML = acquirePage.outerHTML

}

//TypeWriter Function
function typeWriter(textCon, txt, i) {


  if (i < txt.length) {

    textCon.innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => { typeWriter(textCon, txt, i) }, speed);

  }


}


