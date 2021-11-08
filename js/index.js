document.addEventListener('DOMContentLoaded', () => {
    
    const contact_button = document.querySelector('#contact-button');
    contact_button.onclick = (event) => {
        event.preventDefault();
        let containers = [document.querySelector('footer'), document.querySelector('.footer__form-container')]

        containers[0].style.height = "435px";
        containers[1].style.height = "320px";

        let scrollToOptions = {
            top: document.body.clientHeight
        }
        window.scrollTo(scrollToOptions);
    }

    //flip animation
    const profile_image = document.querySelector(".about__container__profile--img");
    profile_image.onclick = () => {
        profile_image.classList.add('flip-animation');
        profile_image.onclick = undefined;
    }
});