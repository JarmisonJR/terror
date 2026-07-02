const heartContainer = document.getElementById('heart');
const phrase = " EU TE AMO ";
const totalLetters = 180; // Quantidade de letras que vão formar o contorno do coração

// Loop para calcular a posição de cada letra usando a equação do coração
for (let i = 0; i < totalLetters; i++) {
    // t varia de 0 a 2*PI para completar uma volta ao redor do coração
    let t = (i / totalLetters) * 2 * Math.PI;
    
    // Fórmula matemática paramétrica do formato de coração
    // O multiplicador 12 serve para aumentar o tamanho do desenho na tela
    let x = 16 * Math.pow(Math.sin(t), 3) * 12;
    let y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * 12;
    
    // Cria o elemento de texto (span) para a letra atual
    const span = document.createElement('span');
    span.className = 'letter';
    
    // Define qual letra da frase será usada (repete a frase ciclicamente)
    span.innerText = phrase[i % phrase.length];
    
    // Distribui as letras levemente no eixo Z (profundidade) para dar volume ao contorno
    let z = Math.sin(t * 2) * 15; 

    // Aplica a posição calculada usando coordenadas 3D do CSS
    span.style.transform = `translate3d(${x}px, ${y}px, ${z}px) translate(-50%, -50%)`;
    
    // Cria um efeito suave de degradê mudando o tom do rosa/vermelho baseado na posição
    span.style.color = `hsl(${340 + Math.sin(t) * 20}, 100%, 60%)`;
    
    // Adiciona a letra dentro do container do coração
    heartContainer.appendChild(span);
}
