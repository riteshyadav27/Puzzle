// declarations

const controlBox = document.getElementById('controlBox')
const speed = 10


main() //Main function starts


async function  main(){

  setTimeout( thanos_obj , 1000)
  setTimeout( ()=>{ scene1() } , 5000)
  // setTimeout( ()=>{ thanos_choice() } , 10000)

  
}


// Show Thanos Objective
async function thanos_obj(){

  await dialouge( "../Images/thanos.png").then((res) => {

  controlBox.appendChild(res)

  console.log("Appended");

  const dialougeCon = document.getElementById('dialouge')

  let txt = ` I am Thanos ! My Planet got destroyed beacuse of depreciating resources ! I am going to bring balance by Killing the Half Universe So that Peace can be RESTOTRED ! 
  But For this I need 6 INFINITY STONES !
  `
  typeWriter(dialougeCon , txt , 0)

}) 
}

// Creates HTML Body to add Dialouge
const dialouge = ( headSrc )=>{

    return new Promise(( resolve , reject)=>{


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

    dialougeCon.appendChild( headCon )
    dialougeCon.appendChild( dialouge )


    resolve(dialougeCon)

  })

}


//Scene 1 ==> Loki and Thor Appears
async function scene1(){

  console.log("In scene 1");
  //Creating Scene 1
  let scene = document.createElement('p')
  scene.id = "dialouge"

  
  controlBox.innerHTML = scene.outerHTML
  let txt = "Loki and Thor Arrives at the Scene ! Loki has SPACE STONE"

  scene = document.getElementById('dialouge')

  typeWriter( scene , txt , 0 )

}

async 


//TypeWriter Function
function typeWriter( textCon, txt ,i ) {
  
  
    if (i < txt.length) {

      textCon.innerHTML += txt.charAt(i);
      i++;
      setTimeout( ()=>{ typeWriter( textCon, txt , i ) }, speed );

    }
    

  }


