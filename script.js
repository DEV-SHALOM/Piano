document.addEventListener("DOMContentLoaded", ()=> {

    const keyC = document.getElementById("keyC");
const keyCSharp = document.getElementById("cSharpKey");
const keyD = document.getElementById("keyD");
const keyDSharp = document.getElementById("dSharpKey");
const keyE = document.getElementById("keyE");
const keyF = document.getElementById("keyF");
const keyFSharp = document.getElementById("fSharpKey");
const keyG = document.getElementById("keyG");
const keyGSharp = document.getElementById("gSharpKey");
const keyA = document.getElementById("keyA");
const keyASharp = document.getElementById("aSharpKey");
const keyB = document.getElementById("keyB");
const keyC1 = document.getElementById("keyC1");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const keyCSound = new Audio("./sound/key09.mp3");
const keyCSharpSound = new Audio("./sound/key10.mp3");
const keyDSound = new Audio("./sound/key11.mp3");
const keyDSharpSound = new Audio("./sound/key12.mp3");
const keyESound = new Audio("./sound/key13.mp3");
const keyFSound = new Audio("./sound/key14.mp3");
const keyFSharpSound = new Audio("./sound/key15.mp3");
const keyGSound = new Audio("./sound/key16.mp3");
const keyGSharpSound = new Audio("./sound/key17.mp3");
const keyASound = new Audio("./sound/key18.mp3");
const keyASharpSound = new Audio("./sound/key19.mp3");
const keyBSound = new Audio("./sound/key20.mp3");
const keyC1Sound = new Audio("./sound/key21.mp3");


// ~~~~~~~~~~~~~~~~Key C~~~~~~~~~~~~~~~~~~~

keyC.addEventListener("mousedown", () =>{
    keyCSound.currentTime = 0;
    keyCSound.play();
    keyC.classList.add("darkKey")
})
keyC.addEventListener("mouseup", () =>{
    keyC.classList.remove("darkKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key C Sharp~~~~~~~~~~~~~~~~~~~

keyCSharp.addEventListener("mousedown", () =>{
    keyCSharpSound.currentTime = 0;
    keyCSharpSound.play();
    keyCSharp.classList.add("lightKey")
})
keyCSharp.addEventListener("mouseup", () =>{
    keyCSharp.classList.remove("lightKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key D~~~~~~~~~~~~~~~~~~~

keyD.addEventListener("mousedown", () =>{
    keyDSound.currentTime = 0;
    keyDSound.play();
    keyD.classList.add("darkKey")
})
keyD.addEventListener("mouseup", () =>{
    keyD.classList.remove("darkKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key D Sharp~~~~~~~~~~~~~~~~~~~

keyDSharp.addEventListener("mousedown", () =>{
    keyDSharpSound.currentTime = 0;
    keyDSharpSound.play();
    keyDSharp.classList.add("lightKey")
})
keyDSharp.addEventListener("mouseup", () =>{
    keyDSharp.classList.remove("lightKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key E~~~~~~~~~~~~~~~~~~~

keyE.addEventListener("mousedown", () =>{
    keyESound.currentTime = 0;
    keyESound.play();
    keyE.classList.add("darkKey")
})
keyE.addEventListener("mouseup", () =>{
    keyE.classList.remove("darkKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key F~~~~~~~~~~~~~~~~~~~

keyF.addEventListener("mousedown", () =>{
    keyFSound.currentTime = 0;
    keyFSound.play();
    keyF.classList.add("darkKey")
})
keyF.addEventListener("mouseup", () =>{
    keyF.classList.remove("darkKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key F Sharp~~~~~~~~~~~~~~~~~~~

keyFSharp.addEventListener("mousedown", () =>{
    keyFSharpSound.currentTime = 0;
    keyFSharpSound.play();
    keyFSharp.classList.add("lightKey")
})
keyFSharp.addEventListener("mouseup", () =>{
    keyFSharp.classList.remove("lightKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key G~~~~~~~~~~~~~~~~~~~
keyG.addEventListener("mousedown", () =>{
    keyGSound.currentTime = 0;
    keyGSound.play();
    keyG.classList.add("darkKey")
})
keyG.addEventListener("mouseup", () =>{
    keyG.classList.remove("darkKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key G Sharp~~~~~~~~~~~~~~~~~~~

keyGSharp.addEventListener("mousedown", () =>{
    keyGSharpSound.currentTime = 0;
    keyGSharpSound.play();
    keyGSharp.classList.add("lightKey")
})
keyGSharp.addEventListener("mouseup", () =>{
    keyGSharp.classList.remove("lightKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key A~~~~~~~~~~~~~~~~~~~
keyA.addEventListener("mousedown", () =>{
    keyASound.currentTime = 0;
    keyASound.play();
    keyA.classList.add("darkKey")
})
keyA.addEventListener("mouseup", () =>{
    keyA.classList.remove("darkKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key A Sharp~~~~~~~~~~~~~~~~~~~

keyASharp.addEventListener("mousedown", () =>{
    keyASharpSound.currentTime = 0;
    keyASharpSound.play();
    keyASharp.classList.add("lightKey")
})
keyASharp.addEventListener("mouseup", () =>{
    keyASharp.classList.remove("lightKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key B~~~~~~~~~~~~~~~~~~~

keyB.addEventListener("mousedown", () =>{
    keyBSound.currentTime = 0;
    keyBSound.play();
    keyB.classList.add("darkKey")
})
keyB.addEventListener("mouseup", () =>{
    keyB.classList.remove("darkKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~Key C1~~~~~~~~~~~~~~~~~~~

keyC1.addEventListener("mousedown", () =>{
    keyC1Sound.currentTime = 0;
    keyC1Sound.play();
    keyC1.classList.add("darkKey")
})
keyC1.addEventListener("mouseup", () =>{
    keyC1.classList.remove("darkKey")
})

// ~~~~~~~~~~~~~~~~~~End~~~~~~~~~~~~~~~~~~~

})

