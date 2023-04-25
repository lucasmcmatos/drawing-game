header = document.getElementById('headerContent');
content = document.getElementById('content');
footer = document.getElementById('footerContent');
contentConfig = document.getElementById('contentConfig');
footerConfig = document.getElementById('footerConfig');
bodyConfig = document.getElementById('bodyConfig');
headerConfig = document.getElementById('headerConfig');
headerWords = document.getElementById('headerWords');
bodyWords = document.getElementById('bodyWords');
footerWords = document.getElementById('footerWords');
confirmButtom = document.getElementById('confirmButtom');
wordsSelect = document.getElementById('wordsSelect');
timeSelect = document.getElementById('timeSelect');
h6HeaderWords = document.getElementById('h6HeaderWords');
s = 0;
d = 0;


function playToConfigGame(){
    header.style.display = 'none';
    footer.style.display = 'none';
    content.style.height = '0';

    
    setTimeout(function(){
        content.style.display = 'none';
        contentConfig.style.display = 'flex';
    }, 400);

    setTimeout(function(){
        contentConfig.style.height = '500px';
    }, 450);

    setTimeout(function(){
        footerConfig.style.display = 'flex';
        bodyConfig.style.display = 'flex';
        headerConfig.style.display = 'flex';
    }, 900); 
    
}

function configGameToPlay(){
    footerConfig.style.display = 'none';
    bodyConfig.style.display = 'none';
    headerConfig.style.display = 'none';
    contentConfig.style.height = '0px';

    setTimeout(function(){
        content.style.display = 'flex';
        contentConfig.style.display = 'none';
    }, 500);

    setTimeout(function(){
        content.style.height = '500px';
    }, 550);

    setTimeout(function(){
        header.style.display = 'flex';
        footer.style.display = 'flex';
    }, 900); 
}

function confirmTimeWords() {
    headerWords.style.display = 'flex';
    bodyWords.style.display = 'flex';
    footerWords.style.display = 'flex';
    confirmButtom.style.display = 'none'; 

    number = parseInt(document.getElementById('wordsSelect').value.slice(0,-5));
    
    if (number == 3) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" >'
        Accountant = 3
    }else if (number == 4) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" >'
        Accountant = 4
    } else if (number == 5) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" >  <input class="textInputPlayer1" type="text" value="Word 5" >'
        Accountant = 5
    } else if (number == 6) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" >'
        Accountant = 6
    } else if (number == 7) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" > <input class="textInputPlayer1" type="text" value="Word 7" >'
        Accountant = 7
    } else if (number == 8) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" > <input class="textInputPlayer1" type="text" value="Word 7" > <input class="textInputPlayer1" type="text" value="Word 8" >'
        Accountant = 8
    } else if (number == 9) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" > <input class="textInputPlayer1" type="text" value="Word 7" > <input class="textInputPlayer1" type="text" value="Word 8" > <input class="textInputPlayer1" type="text" value="Word 9" >'
        Accountant = 9
    } else{
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" > <input class="textInputPlayer1" type="text" value="Word 7" > <input class="textInputPlayer1" type="text" value="Word 8" > <input class="textInputPlayer1" type="text" value="Word 9" > <input class="textInputPlayer1" type="text" value="Word 10" >'
        Accountant = 10
    }

    wordsSelect.disabled = true;
    timeSelect.disabled = true;

}

function cancelconfirmTimeWordsPlayer1() {
    headerWords.style.display = 'none';
    bodyWords.style.display = 'none';
    footerWords.style.display = 'none';
    confirmButtom.style.display = 'flex'; 

    wordsSelect.disabled = false;
    timeSelect.disabled = false;

    time = -1

    words.splice(0 ,  Accountant)

}

function cancelconfirmTimeWordsPlayer2() {
    words.splice(0 ,  Accountant)
    document.getElementById('confirmbutton').setAttribute('onclick', 'player1append()')
    document.getElementById('cancelbutton').setAttribute('onclick', 'cancelconfirmTimeWordsPlayer1()')
    document.getElementById('confirmbutton').innerText = 'Confirm'

    h6HeaderWords.innerHTML = 'Player 1, write your words!'
}

words = []


function player1append() {

    if (Accountant == 3){
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value   
        )  
    } else if (Accountant == 4) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value)
    } else if (Accountant == 5) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value)
    } else if (Accountant == 6) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value ,
            document.getElementsByClassName('textInputPlayer1')[5].value)
    } else if (Accountant == 7) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value ,
            document.getElementsByClassName('textInputPlayer1')[5].value ,
            document.getElementsByClassName('textInputPlayer1')[6].value )
    } else if (Accountant == 8) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value ,
            document.getElementsByClassName('textInputPlayer1')[5].value ,
            document.getElementsByClassName('textInputPlayer1')[6].value ,
            document.getElementsByClassName('textInputPlayer1')[7].value)
    } else if (Accountant == 9) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value ,
            document.getElementsByClassName('textInputPlayer1')[5].value ,
            document.getElementsByClassName('textInputPlayer1')[6].value ,
            document.getElementsByClassName('textInputPlayer1')[7].value ,
            document.getElementsByClassName('textInputPlayer1')[8].value)
    } else if (Accountant == 10) {
    words.push(
        document.getElementsByClassName('textInputPlayer1')[0].value ,
        document.getElementsByClassName('textInputPlayer1')[1].value ,
        document.getElementsByClassName('textInputPlayer1')[2].value ,
        document.getElementsByClassName('textInputPlayer1')[3].value ,
        document.getElementsByClassName('textInputPlayer1')[4].value ,
        document.getElementsByClassName('textInputPlayer1')[5].value ,
        document.getElementsByClassName('textInputPlayer1')[6].value ,
        document.getElementsByClassName('textInputPlayer1')[7].value ,
        document.getElementsByClassName('textInputPlayer1')[8].value ,
        document.getElementsByClassName('textInputPlayer1')[9].value ,
    )

    }

    h6HeaderWords.innerHTML = 'Player 2, write your words!'

    if (number == 3) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" >'
        Accountant = 3
    }else if (number == 4) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" >'
        Accountant = 4
    } else if (number == 5) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" >  <input class="textInputPlayer1" type="text" value="Word 5" >'
        Accountant = 5
    } else if (number == 6) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" >'
        Accountant = 6
    } else if (number == 7) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" > <input class="textInputPlayer1" type="text" value="Word 7" >'
        Accountant = 7
    } else if (number == 8) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" > <input class="textInputPlayer1" type="text" value="Word 7" > <input class="textInputPlayer1" type="text" value="Word 8" >'
        Accountant = 8
    } else if (number == 9) {
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" > <input class="textInputPlayer1" type="text" value="Word 7" > <input class="textInputPlayer1" type="text" value="Word 8" > <input class="textInputPlayer1" type="text" value="Word 9" >'
        Accountant = 9
    } else{
        bodyWords.innerHTML = '<input class="textInputPlayer1" type="text" value="Word 1" > <input class="textInputPlayer1" type="text" value="Word 2" > <input class="textInputPlayer1" type="text" value="Word 3" > <input class="textInputPlayer1" type="text" value="Word 4" > <input class="textInputPlayer1" type="text" value="Word 5" > <input class="textInputPlayer1" type="text" value="Word 6" > <input class="textInputPlayer1" type="text" value="Word 7" > <input class="textInputPlayer1" type="text" value="Word 8" > <input class="textInputPlayer1" type="text" value="Word 9" > <input class="textInputPlayer1" type="text" value="Word 10" >'
        Accountant = 10
    }

    document.getElementById('cancelbutton').setAttribute('onclick' , 'cancelconfirmTimeWordsPlayer2()')
    document.getElementById('confirmbutton').setAttribute('onclick' , 'play()')
    document.getElementById('confirmbutton').innerText = 'Play'


    time = parseInt(document.getElementById('timeSelect').value.slice(0,-3));
}



function play() {

    if (Accountant == 3){
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value   
        )  
    } else if (Accountant == 4) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value)
    } else if (Accountant == 5) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value)
    } else if (Accountant == 6) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value ,
            document.getElementsByClassName('textInputPlayer1')[5].value)
    } else if (Accountant == 7) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value ,
            document.getElementsByClassName('textInputPlayer1')[5].value ,
            document.getElementsByClassName('textInputPlayer1')[6].value )
    } else if (Accountant == 8) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value ,
            document.getElementsByClassName('textInputPlayer1')[5].value ,
            document.getElementsByClassName('textInputPlayer1')[6].value ,
            document.getElementsByClassName('textInputPlayer1')[7].value)
    } else if (Accountant == 9) {
        words.push(
            document.getElementsByClassName('textInputPlayer1')[0].value ,
            document.getElementsByClassName('textInputPlayer1')[1].value ,
            document.getElementsByClassName('textInputPlayer1')[2].value ,
            document.getElementsByClassName('textInputPlayer1')[3].value ,
            document.getElementsByClassName('textInputPlayer1')[4].value ,
            document.getElementsByClassName('textInputPlayer1')[5].value ,
            document.getElementsByClassName('textInputPlayer1')[6].value ,
            document.getElementsByClassName('textInputPlayer1')[7].value ,
            document.getElementsByClassName('textInputPlayer1')[8].value)
    } else if (Accountant == 10) {
    words.push(
        document.getElementsByClassName('textInputPlayer1')[0].value ,
        document.getElementsByClassName('textInputPlayer1')[1].value ,
        document.getElementsByClassName('textInputPlayer1')[2].value ,
        document.getElementsByClassName('textInputPlayer1')[3].value ,
        document.getElementsByClassName('textInputPlayer1')[4].value ,
        document.getElementsByClassName('textInputPlayer1')[5].value ,
        document.getElementsByClassName('textInputPlayer1')[6].value ,
        document.getElementsByClassName('textInputPlayer1')[7].value ,
        document.getElementsByClassName('textInputPlayer1')[8].value ,
        document.getElementsByClassName('textInputPlayer1')[9].value ,
    )

    }

    document.getElementById('headerConfig').style.display = 'none';
    document.getElementById("bodyConfig").style.display = 'none';
    document.getElementById("footerConfig").style.display = 'none';
    document.getElementById('contentConfig').style.height = '0';
    document.getElementById('contentConfig').style.width = '0';

    setTimeout(function(){
        document.getElementById("playScream").style.display = 'flex';
    }, 400);

    setTimeout(function(){
        document.getElementById('contentConfig').style.display = 'none';
        document.getElementById("playScream").style.height = '800px';
        document.getElementById("playScream").style.width = '1000px';
    }, 500);

    setTimeout(function(){
        document.getElementById("PSheader").style.display = 'flex';
        document.getElementById("PSbody").style.display = 'flex';
        document.getElementById("PSfooter").style.display = 'flex';
    }, 900);

    document.getElementById("timerContent").innerText = time + ":" + d + s ;

    updatedWord = words[Math.floor(Math.random()*Accountant)]


}

function reload(){
    window.location.reload();
}

function start() {

    time2 = time;

    document.querySelector("#tela").style.display = "flex";
    document.querySelector("#tela").style.position = "absolute";
    setTimeout(()=>{
        document.querySelector("#tela").style.width = "700px";
        document.querySelector("#tela").style.height = "500px";
    }, 5)
    


    document.getElementById("PSfooter").innerHTML = '<button id="buttonRestart" class="footerButtom" onclick="reload()">Reconfig</button>' + 
                                                    '<button id="buttonNext" class="footerButtom" onclick="nextPlayer()">Next Player</button>' +
                                                    '<button id="buttonClear" class="footerButtom" onclick="clearScream()">Clear</button>'

    a = setInterval(function(){
        
        document.getElementById("timerContent").innerText = time + ":" + d + s ;

        if(time==0) {
            if(d==0) {
                if (s==0) {
                    clearInterval()
                } else {
                    s = s - 1;
                } 
            } else {
                if(s==0){
                    d = d - 1;
                    s = 9;
                } else {
                    s = s - 1;
                }
            }
    
        } else {
            if(d==0){
                if(s==0){
                    time = time - 1;
                    d = 5;
                    s = 9;
                } else {
                    s = s - 1;
                }
            } else {
                if (s==0){
                    d = d - 1;
                    s = 9;
                } else {
                    s = s - 1;
                }
            }
            
        } 


    },1000)

    setTimeout(()=>{
        console.log("O tempo acabou, click em prox player")
    }, time2*60000 + 2000)
}

function showWord(){
    document.getElementById("theWord").innerText = updatedWord
}

function hiddenWord(){
    document.getElementById("theWord").innerText = "The word"
}

countPlayer = 1;
debug = 0;

const canvas = document.querySelector('canvas');

canvas.width = 700;
canvas.height = 500;

const ctx = canvas.getContext("2d");

function drawLine(ctx , line) {

    const{
        start,
        end,
        lineWidth,
        lineCap,
        strokeStyle
    } = line

    if(!start || !end) {
        throw new Error("Start or end of line not define")
    }

    ctx.beginPath()
    ctx.moveTo(line.start.x , line.start.y)
    ctx.lineTo(line.end.x , line.end.y)
    ctx.lineWidth = line.lineWidth
    ctx.lineCap = line.lineCap 
    ctx.strokeStyle = line.strokeStyle
    ctx.stroke()
}

const line = {
    start:{
        x:0,
        y:0
    },end:{
        x:0,
        y:0
    },
    lineWidth: 8,
    lineCap: "round",
    lineJoin: "round",
    strokeStyle: "white"

}

drawLine(ctx , line)

let isPressed = false;
let mouseDownPos = null;

canvas.addEventListener("mousedown", function(e){

    isPressed = true;

    mouseDownPos = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
    }

    const line =  {
        start: mouseDownPos,
        end: mouseDownPos,
    }

    drawLine(ctx , line)

})

canvas.addEventListener("mouseup" , ()=>{
    isPressed = false;

})

canvas.addEventListener("mousemove" , function(e){
    
    if(isPressed) {
        let currentPos = {
            x: e.clientX - canvas.offsetLeft,
            y: e.clientY - canvas.offsetTop
        }

        let line = {
            start: currentPos,
            end: currentPos
        }

        drawLine(ctx , line)
    }
})


function nextPlayer() {

    if (countPlayer == 1) {

        clearInterval(a);

        if (debug == 1) {
            clearInterval(c);
        }

        updatedWord = words[Math.floor(Math.random()*Accountant)]
        countPlayer = 2;
        document.getElementById("playerTime").innerText = "Player 2 is Drawing !"

        time = time2;
        d = 0;
        s = 0;

        b = setInterval(function(){
        
            document.getElementById("timerContent").innerText = time + ":" + d + s ;
    
            if(time==0) {
                if(d==0) {
                    if (s==0) {
                        clearInterval()
                    } else {
                        s = s - 1;
                    } 
                } else {
                    if(s==0){
                        d = d - 1;
                        s = 9;
                    } else {
                        s = s - 1;
                    }
                }
        
            } else {
                if(d==0){
                    if(s==0){
                        time = time - 1;
                        d = 5;
                        s = 9;
                    } else {
                        s = s - 1;
                    }
                } else {
                    if (s==0){
                        d = d - 1;
                        s = 9;
                    } else {
                        s = s - 1;
                    }
                }
                
            } 
    
    
        },1000)

        debug = 0;

    } else {

        clearInterval(b);

        updatedWord = words[Math.floor(Math.random()*Accountant)]
        countPlayer = 1;
        debug = 1;
        document.getElementById("playerTime").innerText = "Player 1 is Drawing !"

        time = time2;
        d = 0;
        s = 0;

        c = setInterval(function(){
        
            document.getElementById("timerContent").innerText = time + ":" + d + s ;
    
            if(time==0) {
                if(d==0) {
                    if (s==0) {
                        clearInterval()
                    } else {
                        s = s - 1;
                    } 
                } else {
                    if(s==0){
                        d = d - 1;
                        s = 9;
                    } else {
                        s = s - 1;
                    }
                }
        
            } else {
                if(d==0){
                    if(s==0){
                        time = time - 1;
                        d = 5;
                        s = 9;
                    } else {
                        s = s - 1;
                    }
                } else {
                    if (s==0){
                        d = d - 1;
                        s = 9;
                    } else {
                        s = s - 1;
                    }
                }
                
            } 
    
    
        },1000)
    }


    ctx.clearRect(0 , 0, canvas.width , canvas.height) 

}

function clearScream(){
    ctx.clearRect(0 , 0, canvas.width , canvas.height)
}

