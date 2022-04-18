var linksDeNav=['Home', 'Notícias', 'Curiosidades', 'Forum', 'Fale conosco', 'Quem Somos',];
var links=['', '','' ,'', '', '', '','' ,'', ''];
var barraDeNavegação = document.getElementById ("navbar"); 
var cabecalho = document.getElementById ('top');
var corpo = document.getElementById ('body');

for (let i = 0; i < linksDeNav.length; i += 1) {
    var novoLink= document.createElement('a');
    novoLink.href=links[i];
    novoLink.innerText=linksDeNav[i];
    novoLink.setAttribute('class', '');
    barraDeNavegação.appendChild(novoLink);
    } 