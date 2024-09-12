document.getElementById('content1').style.display = 'block';
document.getElementById('content2').style.display = 'block';
document.getElementById('content3').style.display = 'block';

document.getElementById('tab1').onclick = function() {
    hideAllContents();
    document.getElementById('content1').style.display = 'block';
}

document.getElementById('tab2').onclick = function() {
    hideAllContents();
    document.getElementById('content2').style.display = 'block';
}

document.getElementById('tab3').onclick = function() {
    hideAllContents();
    document.getElementById('content3').style.display = 'block';
}

function hideAllContents() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
}
