document.querySelector('#caretWhite').addEventListener('click', () => {
    onClickCaretWhite();
})
document.querySelector('#caretBlack').addEventListener('click', () => {
    onClickCaretBlack();
})
function onClickCaretWhite() { //todo fix animation
    if (document.getElementById("whitePieceContainer").style.display === "inherit") {
        document.getElementById("whitePieceContainer").style.display = "none";
        document.getElementById("caretWhite").style.transform = "rotateZ(180deg)"
    }
    else {
        document.getElementById("whitePieceContainer").style.display = "inherit";
        document.getElementById("caretWhite").style.transform = "rotateZ(0)"
    }
}
function onClickCaretBlack() {
    if (document.getElementById("blackPieceContainer").style.display === "inherit") {
        document.getElementById("blackPieceContainer").style.display = "none";
        document.getElementById("caretBlack").style.transform = "rotateZ(180deg)"
    }
    else {
        document.getElementById("blackPieceContainer").style.display = "inherit";
        document.getElementById("caretBlack").style.transform = "rotateZ(0)"
    }
}
