//todo
//fix div is undefined typeError
//win animation

const board = document.querySelector('[data-board]');
const children = Array.from(board.children);

const boardAr =
    ['', '', '',
        '', '', '',
        '', '', ''];

children.forEach(div => {
    div.addEventListener('click', () => {
        play(div);
    })
})

let i = 0;
function play(div) {
    if (i % 2 == 0) {
        const pos = div.getAttribute('data-square') - 1;
        if (boardAr[pos] === "") {
            div.classList.add('checked');
            div.textContent = 'x';
            boardAr.splice(pos, 1, "p1");
        } else {
            console.log("Choose other square");
            i--;
        }
    } else {
        const pos = div.getAttribute('data-square') - 1;
        if (boardAr[pos] === "") {
            div.classList.add('checked');
            div.textContent = '0';
            boardAr.splice(pos, 1, "p2");
        } else {
            alert("Square is taken, pick another!");
            i--;
        }
    }
    //wincondition p1
    if ((boardAr[0] === "p1" && boardAr[1] === "p1" && boardAr[2] === "p1") ||
        (boardAr[3] === "p1" && boardAr[4] === "p1" && boardAr[5] === "p1") ||
        (boardAr[6] === "p1" && boardAr[7] === "p1" && boardAr[8] === "p1")) {
        if (!alert("Player 1 wins")){
            window.location.reload();
        }
    } else if ((boardAr[0] === "p1" && boardAr[3] === "p1" && boardAr[6] === "p1") ||
        (boardAr[1] === "p1" && boardAr[4] === "p1" && boardAr[7] === "p1") ||
        (boardAr[2] === "p1" && boardAr[5] === "p1" && boardAr[8] === "p1") === "p1") {
            if (!alert("Player 1 wins")){
                window.location.reload();
            }
    } else if ((boardAr[0] === "p1" && boardAr[4] === "p1" && boardAr[8] === "p1") ||
        (boardAr[2] === "p1" && boardAr[4] === "p1" && boardAr[6] === "p1")) {
            if (!alert("Player 1 wins")){
                window.location.reload();
            }
    }
    //wincondition p2
    if ((boardAr[0] === "p2" && boardAr[2] === "p2" && boardAr[2] === "p2") ||
        (boardAr[3] === "p2" && boardAr[4] === "p2" && boardAr[5] === "p2") ||
        (boardAr[6] === "p2" && boardAr[7] === "p2" && boardAr[8] === "p2")) {
            if (!alert("Player 2 wins")){
                window.location.reload();
            }
    } else if ((boardAr[0] === "p2" && boardAr[3] === "p2" && boardAr[6] === "p2") ||
        (boardAr[2] === "p2" && boardAr[4] === "p2" && boardAr[7] === "p2") ||
        (boardAr[2] === "p2" && boardAr[5] === "p2" && boardAr[8] === "p2") === "p2") {
            if (!alert("Player 2 wins")){
                window.location.reload();
            }
    } else if ((boardAr[0] === "p2" && boardAr[4] === "p2" && boardAr[8] === "p2") ||
        (boardAr[2] === "p2" && boardAr[4] === "p2" && boardAr[6] === "p2")) {
            if (!alert("Player 2 wins")){
                window.location.reload();
            }
    }
    i++;
}

play();
