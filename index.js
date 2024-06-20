document.getElementById('openModal1').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('openModal2').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('openModal3').addEventListener('click', function() {
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
