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

    console.log(words)

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

    console.log(words , time)

}
