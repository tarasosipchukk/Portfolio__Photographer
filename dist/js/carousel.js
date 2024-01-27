const marqueeArr = document.querySelectorAll('.marquee');
marqueeArr.forEach(marquee => {
    const marqueeRow = marquee.querySelector('.marquee__row');
    const marqueeItem = marqueeRow.querySelector('.marquee__item');
    const cloneNum = Number(marqueeItem.getAttributeNode('data-clone').value);
    for (let i = 1; i < cloneNum; i++) {
        const clone = marqueeItem.cloneNode(true);
        marqueeRow.appendChild(clone);
    }
    for (let i = 0; i < 2; i++) {
        const clone = marqueeRow.cloneNode(true);
        marquee.appendChild(clone);
    }

    const marqueeMove = (dir) => {
        const rows = marquee.querySelectorAll('.marquee__row');
        const rowWidth = rows[0].getBoundingClientRect().width;
        let currentX = Number(getComputedStyle(marquee).getPropertyValue('--pos-x'));
        let newX = 0;
        switch (dir) {
            case 'left':
                newX = currentX ? (currentX - 1) : -rowWidth;
                (newX < (-2 * rowWidth)) && (newX = -rowWidth);
                break;
            default:
                newX = currentX ? (currentX + 1) : -rowWidth;
                (newX > 0) && (newX = -rowWidth);
        }
        marquee.style.setProperty('--pos-x', newX);
    };


    let speed = Number(marquee.getAttributeNode('data-speed').value);
    let direction = 'right';
    let marqueeInterval = setInterval(marqueeMove, speed, direction);
    marquee.onmouseenter = () => {
        clearInterval(marqueeInterval);
    }
    marquee.onmousemove = () => {
        clearInterval(marqueeInterval);
    }
    marquee.onmouseleave = () => {
        clearInterval(marqueeInterval);
        marqueeInterval = setInterval(marqueeMove, speed, direction);
    }

    let posY = 0;
    const changeDir = () => {
        clearInterval(marqueeInterval);
        let scrollTop = document.documentElement.scrollTop;
        direction = (scrollTop > posY) ? 'right' : 'left';
        marqueeMove(direction);
        marqueeMove(direction);
        marqueeInterval = setInterval(marqueeMove, speed, direction);
        posY = scrollTop;
    };
    window.addEventListener('scroll', changeDir);

});


const burger = document.querySelector('.burger')
const burgermenu = document.querySelector('.header__whenTapOnBurger')

burger.addEventListener('click', () => {
    burgermenu.style.display = 'flex'

})
burgermenu.addEventListener('click', () => {
    burgermenu.style.display = 'none'

})
