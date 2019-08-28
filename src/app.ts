import { getRandomInt } from './random';

export function runApp() {
    const secretNumber = getRandomInt(1, 6);
    const squares = document.querySelectorAll('.square');
    let currentSquare = 1;
    squares.forEach((s: HTMLDivElement, k) => {
        if (currentSquare === secretNumber) {
            s.dataset.secret = 'true';
        }
        s.addEventListener('click', handleClick);
        currentSquare++;
    });
}
function handleClick() {
    const clickedSquare = this as HTMLDivElement;
    const isSpecial = clickedSquare.dataset.secret === 'true';
    if (isSpecial) {
        clickedSquare.classList.add('winner');
        setLosers(document.querySelectorAll('.square'));
    } else {
        clickedSquare.classList.add('loser');
    }
    clickedSquare.removeEventListener('click', handleClick);
}
function setLosers(squares: NodeList) {
    squares.forEach((s: HTMLDivElement) => {
        if (s.dataset.secret !== 'true') {
            s.classList.add('loser');
            s.removeEventListener('click', handleClick);
        }
    });
}
