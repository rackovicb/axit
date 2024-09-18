document.getElementById('content1').classList.add('active');

let tabs = document.querySelectorAll('.tab');

tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        hideAllContents();
        let target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});

function hideAllContents() {
    let contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });
}
