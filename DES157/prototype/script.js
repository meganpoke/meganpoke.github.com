(function () {

    'use strict';

    document.querySelector('.open1').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'showing';
    });

    document.querySelector('.close1').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
        }
    }); //first pic overlay

    document.querySelector('.open2').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay2').className = 'showing';
    });

    document.querySelector('.close2').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay2').className = 'hidden';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay2').className = 'hidden';
        }
    }); //second pic overlay

    document.querySelector('.open3').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay3').className = 'showing';
    });

    document.querySelector('.close3').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('overlay3').className = 'hidden';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('overlay3').className = 'hidden';
        }
    }); //third pic overlay

})();