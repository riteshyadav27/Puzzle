// declarations

const controlBox = document.getElementById('controlBox')
const speed = 75


main() //Main function starts

async function main() {

    setTimeout(thanos_obj, 1000)
    setTimeout(collector_dialouge, 8000)
    setTimeout(display_encyption, 16000)


}


// Show Thanos Objective
async function thanos_obj() {

    await dialouge("../Images/thanos.png").then((res) => {

        controlBox.appendChild(res)

        console.log("Appended");

        const dialougeCon = document.getElementById('dialouge')

        let txt = ` Collector I am here to collect the REALITY STONE ! Give it to me Now !!
    `
        typeWriter(dialougeCon, txt, 0)

    })
}

//Collector Gives the Encryption
async function collector_dialouge(){

    await dialouge("../Images/Round2/Collector_head.png").then((res) => {

        controlBox.innerHTML = res.outerHTML

        const dialougeCon = document.getElementById('dialouge')

        let txt = `Not so easy THANOS !! You need to break the Encryption of the password to get the REALITY Stone !`
        typeWriter(dialougeCon, txt, 0)

    }) 

}

async function display_encyption(){

    await dialouge("../Images/Round2/Collector_head.png").then((res) => {

        controlBox.innerHTML = res.outerHTML
    
        console.log("Appended");
    
        const dialougeCon = document.getElementById('dialouge')
    
        const riddleBox = document.createElement('input')
        riddleBox.className = "user_input"
        riddleBox.id = "loki_riddle_ans"
    
    
        txt = `Encyption : REALITY !!! I will always be a STEP AHEAD of you !! hahahhaha `
    
          dialougeCon.innerHTML = ""
          typeWriter(dialougeCon, txt, 0)
          controlBox.append(riddleBox)
    
          //Event Listeners
          document.getElementById('loki_riddle_ans').onchange = (e) => { checkAns(e.target.value) }
    

    
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
  

//CheckAns Function
async function checkAns( ans ){

    console.log(ans);

    ans = ans.trim()
    ans = ans.toLowerCase()
  
    if( ans === "qdzkhsx" ){
       stoneAcquired('../Images/Stones/reality_stone.png', "REALI<span class='purple' >T</span>Y ")
       setTimeout( ()=> window.location.href = '/HTML/round3.html' , 2000 )
    }
    else alert( "Wrong Ans Try Again !" )
  
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