let Display=document.querySelector("#display");
let Btn=document.querySelector("#btn");
let Btn2=document.querySelector("#reset")
const generator=["i am abhishek","i am the best","i can do anything","practice can make a man perfect"];
function randomGenerator() {
    let index=Math.floor(Math.random()*generator.length);
    Display.value=generator[index];
}
Btn.addEventListener("click",randomGenerator);
Btn2.addEventListener("click", function() {
    Display.value = "";
});
