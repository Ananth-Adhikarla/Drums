var sounds = 
{
    w : "sounds/tom-1.mp3",
    a : "sounds/tom-2.mp3",
    s : "sounds/tom-3.mp3",
    d : "sounds/tom-4.mp3",
    j : "sounds/snare.mp3",
    k : "sounds/crash.mp3",
    l : "sounds/kick-bass.mp3"
}
document.querySelectorAll('.drum') .forEach(btn => btn .addEventListener('click', 
    function (){
        PlaySound(this.innerHTML);
        ButtonAnimation(this.innerHTML)
    }));


document.addEventListener("keydown" , function (e) 
{
    PlaySound(e.key);
    ButtonAnimation(e.key)
})

function PlaySound(mySource)
{
    if(mySource in sounds)
    {
        var audio = new Audio(sounds[mySource]);
        audio.play();
    }
    else
    {
        return false;
    }
}

function ButtonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}