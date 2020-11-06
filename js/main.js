/*      _________________     _ _.-''''''--. 
        FFFFFFFFFFFreedom   .` `.  ...------.\   
       /FFFFFFFFFFFactory  / |O :-`   _,.,---.)
       FFFFF/              '     ;--''      
      /FFFFF               | _.' (        
      FFFFFFFFFFF          ,' _,' `-.
     /FFFFFFFFFF/          : /       '.
     FFFFF/                    code  ' 
    /FFFFF                  `.|    to   `-.
    FFFFF/                    `-._  be    \
   /FFFFF                         '.  ,-.  \
   FFFFF/                          _`...` \
   FFFFF                       .,-'.,-'  ``: \
 ==============================((=((======== \== bobo le plus beau fait du js
                                              \
                                               \
                                              ` \
                                                -*/

const words = [
  "couleurs",
  "inventivite",
  "creativite",
  "contrastes"
]

const writing = document.getElementById('writing');

function modulator(){
  let possibilies = [
    "X",
    "Y"
  ]
  return(possibilies[(Math.round(Math.random() * 1000) %2)])
}
let name = document.getElementById('name');
async function setup(){
  window.scrollTo(0, 0)
   let text = name.innerText.split('');
   name.innerText = ""
   while(text != 0){
     let s = document.createElement("span");
     s = name.appendChild(s)
     s.innerText = text.shift()
     s.style.transform = `translate${modulator()}(${(Math.round(Math.random() * 1000) %3 - 2) * window.innerWidth*((Math.random()) * 0.5 + 1 )}px) scale(0)`
     s.classList.add("out")
   }

   name.childNodes.forEach(async function(element){
    await wait(Math.random() * 850)
    element.style.filter = "blur(0px)"
    element.style.transform = ""
  });

  let underline = name.appendChild(document.createElement("div"))
  underline.classList.add("underline");
  let pen = document.createElement("img")
  pen = underline.appendChild(pen)
  pen.classList.add("pen-tool")
  pen.style.display = "none"
  pen.src = "ressources/pen-tool.svg"
  await wait(2000)
  pen.style.display = "block"
  underline.style.width = "100%"
  type()
 }

 async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function type(){
  word = words[(Math.round(Math.random()*100)%words.length)]
  while (writing.innerText.length > 0 ){
    str = writing.innerText.split('');
    str.pop();
    writing.innerText = str.join('');
    await wait(100)
  }

  word = word.split('')
  while(word.length > 0){
    writing.innerText += word.shift();
    await wait(Math.random()*1000/3)
  }
  type()
}

setup()