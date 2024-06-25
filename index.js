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

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollButton = document.querySelector('.scroll-to-top');
    if (scrollPosition > 300) { 
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });
  
  document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });