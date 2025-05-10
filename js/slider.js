(function(){

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    // Evento para siguiente y anterior
    buttonNext.addEventListener('click', () => {
        changePosition(1);
        restartAutoSlide();
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
        restartAutoSlide();
    });

    // Función para cambiar de slide
    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('testimony__body--show');
    }

    // Movimiento automático cada 5 segundos
    let autoSlide = setInterval(() => {
        changePosition(1);
    }, 5000);

    // Reinicia el intervalo si el usuario hace clic
    const restartAutoSlide = () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            changePosition(1);
        }, 5000);
    }

})();
