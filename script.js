//hamburger

const elementoMovido = false; 
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const bar = hamburger.children;



function hamburgerClick() {
    if (menu.classList.contains("expansao")) {
        menu.classList.remove("expansao");
        for (let i = 0; i < bar.length; i++) {
            bar[i].style.backgroundColor = "var(--branco)";
          }
    } else {
        menu.classList.add("expansao");
        for (let i = 0; i < bar.length; i++) {
            bar[i].style.backgroundColor = "var(--roxo3)";
          }
    }
}

document.addEventListener('click', function(e) {
    const target = e.target
    const hamburgerChildren1 = document.getElementById('spanHamburger1')
    const hamburgerChildren2 = document.getElementById('spanHamburger2')
    const hamburgerChildren3 = document.getElementById('spanHamburger3')
    if (target !== menu && target !== hamburger && target !== hamburgerChildren1 && target !== hamburgerChildren2 && target !== hamburgerChildren3) {
        menu.classList.remove("expansao");
        for (let i = 0; i < bar.length; i++) {
            bar[i].style.backgroundColor = "var(--branco)";
          }
    }
  });

function clickLink() {
    menu.classList.remove("expansao");
    for (let i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor = "var(--branco)";
      }
}

// habilidades

const descTitle = document.getElementById("descTitle");
const descP = document.getElementById("descP");

function clickHtml() {
    descTitle.innerHTML = 'HTML (Hypertext Markup Language): <br> AVANÇADO';
    descP.innerHTML = '-HTML é a linguagem de marcação usada para estruturar o conteúdo de uma página da web. <br> -Ela fornece os elementos que definem a estrutura do documento, como cabeçalhos, parágrafos, listas, imagens, links, tabelas, formulários, etc.'
}

function clickCss() {
    descTitle.innerHTML = 'CSS (Cascading Style Sheets): <br> AVANÇADO';
    descP.innerHTML = '-CSS é uma linguagem de estilo usada para controlar a apresentação e o layout de elementos HTML em uma página da web. <br> -Ele permite definir o estilo visual dos elementos, como cores, fontes, margens, espaçamento, tamanhos, posicionamento e muito mais.'
}

function clickJs() {
    descTitle.innerHTML = 'JS (JavaScript) <br> BÁSICO';
    descP.innerHTML = '-JavaScript é uma linguagem de programação de alto nível que é usada para adicionar interatividade e funcionalidade dinâmica a páginas da web. <br> -Ele permite que você crie scripts que respondem a eventos do usuário, como cliques, movimentos do mouse e entrada de teclado. <br> -Com JavaScript, você pode criar recursos como validação de formulários, animações, atualizações de conteúdo em tempo real, jogos e muito mais.'
}