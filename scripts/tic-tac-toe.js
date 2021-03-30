var player1 = "X", player2 = "O", flag = true, 
    gameOver = false, turnNum = 0, rulesFlag = true;

function turn(el) {
    if(!gameOver) {
        if(el.innerHTML == '') {
            el.innerHTML = currentTurn();
            turnNum++;
            if(checkGameOver(el)) {
                document.getElementById('gameEnded').innerHTML = "Player " + currentTurn() + " wins!";
                document.getElementById('newGame').style.visibility = "visible";
                gameOver = true;
            } else if(turnNum == 9) {
                document.getElementById('gameEnded').innerHTML = "It's a tie!";
                document.getElementById('newGame').style.visibility = "visible";
                gameOver = true;
            } else {
                swapTurns();
                document.getElementById('gameEnded').innerHTML = "Player " + currentTurn() + "'s turn";
            }
        }
    }
}

function newGame() {
    var arr = document.getElementsByClassName('space');
    for(var i=0; i<arr.length; i++) {
        arr[i].innerHTML = '';
    }
    document.getElementById('gameEnded').innerHTML = "Player X starts first";
    document.getElementById('gameEnded').style.visibility = "visible";
    document.getElementById('newGame').style.visibility = "hidden";
    document.getElementById('newGame').innerHTML = "New Game";
    flag = true;
    gameOver = false;
    turnNum = 0;
}

function swapTurns() {
    flag = !flag;
}

function currentTurn() {
    if(flag)
        return player1;
    else
        return player2;
}

function checkGameOver(el) {
    if(turnNum < 5)
        return false;

    tL = document.getElementById('tL').innerHTML;
    tM = document.getElementById('tM').innerHTML;
    tR = document.getElementById('tR').innerHTML;
    mL = document.getElementById('mL').innerHTML;
    m = document.getElementById('m').innerHTML;
    mR = document.getElementById('mR').innerHTML;
    bL = document.getElementById('bL').innerHTML;
    bM = document.getElementById('bM').innerHTML;
    bR = document.getElementById('bR').innerHTML;

    let elementID = el.id;

    switch(elementID) {
        case "tL":
            if(tL == tM && tL == tR || tL == m && tL == bR || tL == mL && tl == bL)
                return true;
            else
                return false;
        case "tM":
            if(tM == m && tM == bM || tM == tL && tM == tR)
                return true;
            else
                return false;
        case "tR":
            if(tR == m && tR == bL || tR == mR && tR == bR || tR == tM && tR == tL)
                return true;
            else
                return false;
        case "mL":
            if(mL == m && mL == mR || mL == tL && mL == bL)
                return true;
            else
                return false;
        case "m":
            if(m == tL && m == bR || m == tR && m == bL || m == mL && m == mR || m == tM && m == bM)
                return true;
            else
                return false;
        case "mR":
            if(mR == m && mR == mL || mR == tR && mR == bR)
                return true;
            else
                return false;
        case "bL":
            if(bL == bM && bL == bR || bL == m && bL == tR || bL == mL && bL == tL)
                return true;
            else
                return false;
        case "bM":
            if(bM == bL && bM == bR || bM == m && bM == tM)
                return true;
            else
                return false;
        case "bR":
            if(bR == bM && bR == bL || bR == m && bR == tL || bR == mR && bR == tR)
                return true;
            else
                return false;
        default:
            return false;
    }
}

function rules(el) {
    if(rulesFlag) {
        document.getElementById('rules').style.visibility = "hidden";
        el.innerHTML = "Show Rules";
    } else {
        document.getElementById('rules').style.visibility = "visible";
        el.innerHTML = "Hide Rules";
    }
    rulesFlag = !rulesFlag;
}