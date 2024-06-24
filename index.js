document.getElementById('openModal1').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('openModal2').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('openModal3').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('openModal4').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('openModal5').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    var items = document.querySelectorAll('.items img');
    var isInViewport = function(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    var showItems = function() {
        items.forEach(function(item) {
            if (isInViewport(item)) {
                item.style.opacity = "1";
            }
        });
    };
    window.addEventListener('scroll', showItems);
    window.addEventListener('resize', showItems);
    showItems();
});

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(function(question) {
        const plusIcon = question.querySelector('.plus-icon');
        const answer = question.querySelector('.answer');

        plusIcon.addEventListener('click', function() {
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                plusIcon.src = 'img/minus.png';
            } else {
                answer.style.display = 'none';
                plusIcon.src = 'img/plus.png';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(function(question) {
        const plusIcon = question.querySelector('.plus-icon');
        const questionText = question.querySelector('.question-text');
        const answer = question.querySelector('.answer');

        questionText.addEventListener('click', function() {
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                plusIcon.src = 'img/minus.png';
            } else {
                answer.style.display = 'none';
                plusIcon.src = 'img/plus.png';
            }
        });
    });
});