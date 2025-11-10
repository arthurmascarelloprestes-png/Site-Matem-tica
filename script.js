// Conteúdos para cada tópico (em HTML simples)
const contents = {
    probabilidade: `
        <h2>Probabilidade</h2>
        <p>A probabilidade é a medida da chance de um evento ocorrer. Ela varia de 0 (impossível) a 1 (certo).</p>
        <p><strong>Fórmula básica:</strong> P(E) = (Número de resultados favoráveis) / (Número total de resultados possíveis)</p>
        <p>Exemplo: Em um dado de 6 faces, a probabilidade de tirar um 4 é 1/6.</p>
        <img src="https://via.placeholder.com/300x200?text=Dado+de+6+faces" alt="Exemplo de dado" style="max-width: 100%; height: auto;">
    `,
    '4casos': `
        <h2>4 Casos de Congruência em Triângulos</h2>
        <p>Dois triângulos são congruentes se têm os mesmos lados e ângulos. Os 4 casos principais são:</p>
        <ul>
            <li><strong>LAL (Lado-Ângulo-Lado):</strong> Dois lados e o ângulo entre eles iguais.</li>
            <li><strong>ALA (Ângulo-Lado-Ângulo):</strong> Dois ângulos e o lado entre eles iguais.</li>
            <li><strong>LLL (Lado-Lado-Lado):</strong> Todos os três lados iguais.</li>
            <li><strong>AA (Ângulo-Ângulo):</strong> Dois ângulos iguais (não garante congruência, mas similaridade).</li>
        </ul>
        <p>Esses casos ajudam a provar que triângulos são idênticos em forma e tamanho.</p>
        <img src="https://via.placeholder.com/300x200?text=Tri%C3%A2ngulos+Congruentes" alt="Triângulos congruentes" style="max-width: 100%; height: auto;">
    `,
    pitagoras: `
        <h2>Teorema de Pitágoras</h2>
        <p>Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos.</p>
        <p><strong>Fórmula:</strong> a² + b² = c²</p>
        <p>Onde c é a hipotenusa (lado oposto ao ângulo reto).</p>
        <p>Exemplo: Em um triângulo com catetos 3 e 4, a hipotenusa é 5 (3² + 4² = 9 + 16 = 25 = 5²).</p>
        <img src="https://via.placeholder.com/300x200?text=Tri%C3%A2ngulo+Ret%C3%A2ngulo" alt="Triângulo retângulo" style="max-width: 100%; height: auto;">
    `
};

// Função para carregar conteúdo
function loadContent(topic) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = contents[topic] || '<p>Conteúdo não encontrado.</p>';
}

// Adicionar event listeners aos links da sidebar
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('probabilidade').addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('probabilidade');
    });
    document.getElementById('4casos').addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('4casos');
    });
    document.getElementById('pitagoras').addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('pitagoras');
    });
}); 