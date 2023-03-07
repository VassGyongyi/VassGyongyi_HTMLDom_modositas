
window.addEventListener("load", init);
function init(){
  const LISTA =["futás","túrázás","olvasás", "filmek","csillagászat"];
  const felsorolas=document.getElementById("felsorolas");
 
  let htmlValtozo=listabaKiir(LISTA);
  let htmlValtozo2 =divKiir(LISTA);
  const maskepp=document.getElementsByClassName("maskepp")
 kiir(htmlValtozo, felsorolas);
 kiir(htmlValtozo2, maskepp[0]);

 //rátesszük az eseménykezelőt a button elemekre
 const gombElemek = document.querySelectorAll(".maskepp button");
 for (let index=0; index< LISTA.length; index++){  
    gombElemek[index].addEventListener("click",divHatter)
 }

//   let htmlValtozo = "<ul>"
//   for (let index =0; index < LISTA.length; index++){
//     htmlValtozo +=`<li> $[LISTA[Index]]} </li>`
//   }
//  htmlValtozo+="</ul>"
//  felsorolas.innerHTML+= htmlValtozo
}
function kiir(mit, hova){
    hova.innerHTML += mit;
}
function listabaKiir(LISTA){
    let htmlValtozo = "<ul>";
  for (let index =0; index < LISTA.length; index++){
    htmlValtozo +=`<li>  ${LISTA[index]} </li>`;
  
  }
 htmlValtozo+="</ul>";
 felsorolas.innerHTML+=htmlValtozo;
 return htmlValtozo;
}
//div-be beágyazott p tagbe rakva
function divKiir(LISTA){
    let htmlValtozo = ""; //üres sztringgel inicializáljuk
    for (let index =0; index < LISTA.length; index++){
      htmlValtozo +=`<div><p> ${LISTA[index]}</p> <button>OK</button></div>`;
      
    }
   htmlValtozo+="";
   return htmlValtozo;
  }
  //rátesszük az eseménykezelőt a gombelemekre
function divHatter(event){
    const ELEM = event.target.parentNode;
    ELEM.classList.add("hatter") // az elemre ráteszem a "hatter" css classt
    //console.log(event.target.parentNode) //div elem elérése

    

}