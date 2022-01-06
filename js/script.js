"use strict"

document.addEventListener('DOMContentLoaded', function () {

    const container = document.querySelector('.container');
    const image = document.querySelector('.image');

    document.body.onmousemove = (e) => {
        let x = e.pageX;
        let y = e.pageY;
        image.style.top = y + "px";
        image.style.left = x + "px";
        image.style.display = "block";
    };

    container.querySelectorAll('.title').forEach(title => {
        title.onmousemove = () => {
            image.src = title.getAttribute('data-src') + ".jpg";
            image.previousElementSibling.srcset = title.getAttribute('data-src') + ".webp";
        };
    });

});
