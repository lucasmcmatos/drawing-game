header = document.getElementById('headerContent');
content = document.getElementById('content');
footer = document.getElementById('footerContent');

function playToConfigGame(){
    header.style.display = 'none';
    footer.style.display = 'none';
    content.style.height = '0';
    content.style.boxShadow = 'none';
}