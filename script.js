// Conteúdos para cada tópico (em HTML simples com atividades interativas)
const contents = {
    probabilidade: `
        <h2>Probabilidade</h2>
        <p>A probabilidade é a medida da chance de um evento ocorrer. Ela varia de 0 (impossível) a 1 (certo). É fundamental em estatística e jogos de azar.</p>
        <p><strong>Fórmula básica:</strong> P(E) = (Número de resultados favoráveis) / (Número total de resultados possíveis)</p>
        <p><strong>Exemplo detalhado:</strong> Em um dado de 6 faces, a probabilidade de tirar um número par (2, 4, 6) é 3/6 = 1/2. Para um baralho de 52 cartas, a probabilidade de tirar um ás é 4/52 = 1/13.</p>
        <p><strong>Tipos de probabilidade:</strong> Clássica (eventos equiprováveis), Frequentista (baseada em experimentos) e Subjetiva (baseada em crenças).</p>
        <img src="https://via.placeholder.com/300x200?text=Dado+de+6+faces" alt="Exemplo de dado" style="max-width: 100%; height: auto;">
        
        <h3>Atividade: Quiz de Probabilidade</h3>
        <p>Qual é a probabilidade de tirar um número ímpar em um dado de 6 faces?</p>
        <input type="radio" id="p1a" name="probQuiz" value="1/2"><label for="p1a">1/2</label><br>
        <input type="radio" id="p1b" name="probQuiz" value="1/3"><label for="p1b">1/3</label><br>
        <input type="radio" id="p1c" name="probQuiz" value="1/6"><label for="p1c">1/6</label><br>
        <button onclick="checkAnswer('probQuiz', '1/2')">Verificar Resposta</button>
        <p id="probResult"></p>
    `,
    '4casos': `
        <h2>4 Casos de Congruência em Triângulos</h2>
        <p>Dois triângulos são congruentes se têm os mesmos lados e ângulos. Os 4 casos principais são baseados em critérios para provar congruência:</p>
        <ul>
            <li><strong>LAL (Lado-Ângulo-Lado):</strong> Dois lados e o ângulo entre eles iguais. Exemplo: Triângulos com lados 5cm, 7cm e ângulo 60°.</li>
            <li><strong>ALA (Ângulo-Lado-Ângulo):</strong> Dois ângulos e o lado entre eles iguais. Exemplo: Ângulos de 45° e 90°, lado de 10cm.</li>
            <li><strong>LLL (Lado-Lado-Lado):</strong> Todos os três lados iguais. Exemplo: Triângulos equiláteros.</li>
            <li><strong>AA (Ângulo-Ângulo):</strong> Dois ângulos iguais (garante similaridade, não congruência, pois pode haver diferença de tamanho).</li>
        </ul>
        <p>Esses casos são usados em geometria para resolver problemas de construção e prova.</p>
        <img src="https://via.placeholder.com/300x200?text=Tri%C3%A2ngulos+Congruentes" alt="Triângulos congruentes" style="max-width: 100%; height: auto;">
        
        <h3>Atividade: Identifique o Caso</h3>
        <p>Em um triângulo com dois lados de 8cm e 10cm, e ângulo de 50° entre eles, qual caso de congruência se aplica?</p>
        <input type="text" id="congInput" placeholder="Digite LAL, ALA, LLL ou AA"><br>
        <button onclick="checkTextAnswer('congInput', 'LAL')">Verificar Resposta</button>
        <p id="congResult"></p>
    `,
    pitagoras: `
        <h2>Teorema de Pitágoras</h2>
        <p>Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. Fórmula: a² + b² = c², onde c é a hipotenusa.</p>
        <p><strong>Exemplo detalhado:</strong> Catetos 3 e 4 → 3² + 4² = 9 + 16 = 25 = 5². Aplicações: cálculo de distâncias em mapas ou construção.</p>
        <p><strong>Recíproco:</strong> Se a² + b² = c², o triângulo é retângulo.</p>
        <img src="https://via.placeholder.com/300x200?text=Tri%C3%A2ngulo+Ret%C3%A2ngulo" alt="Triângulo retângulo" style="max-width: 100%; height: auto;">
        
        <h3>Atividade: Calcule a Hipotenusa</h3>
        <p>Catetos: 6 e 8. Qual é a hipotenusa?</p>
        <input type="text" id="pitInput" placeholder="Digite o valor"><br>
        <button onclick="checkTextAnswer('pitInput', '10')">Verificar Resposta</button>
        <p id="pitResult"></p>
    `,
    fracoes: `
        <h2>Frações</h2>
        <p>Frações representam partes de um todo. Uma fração a/b significa a partes de b iguais. Exemplo: 3/4 é três quartos.</p>
        <p><strong>Operações:</strong> Soma: a/b + c/d = (ad + bc)/bd. Subtração: Similar. Multiplicação: (a/b) * (c/d) = ac/bd. Divisão: (a/b) / (c/d) = a/b * d/c.</p>
        <p><strong>Simplificação:</strong> Divida numerador e denominador pelo MDC. Exemplo: 8/12 = 2/3.</p>
        <img src="https://via.placeholder.com/300x200?text=Fra%C3%A7%C3%B5es+Exemplo" alt="Exemplo de frações" style="max-width: 100%; height: auto;">
        
        <h3>Atividade: Simplifique a Fração</h3>
        <p>Simplifique 12/18.</p>
        <input type="text" id="fracInput" placeholder="Digite como 2/3"><br>
        <button onclick="checkTextAnswer('fracInput', '2/3')">Verificar Resposta</button>
        <p id="fracResult"></p>
    `,
    equacoes: `
        <h2>Equações Lineares</h2>
        <p>Equações do tipo ax + b = c, onde x é a incógnita. Para resolver: Isolar x. Exemplo: 2x + 3 = 7 → 2x = 4 → x = 2.</p>
        <p><strong>Aplicações:</strong> Problemas do dia a dia, como calcular custos ou distâncias.</p>
        <p><strong>Sistema de equações:</strong> Duas equações com duas incógnitas, resolvidas por substituição ou eliminação.</p>
        <img src="https://via.placeholder.com/300x200?text=Equa%C3%A7%C3%B5es+Lineares" alt="Exemplo de equações" style="max-width: 100%; height: auto;">
        
        <h3>Atividade: Resolva a Equação</h3>
        <p>Resolva: 3x - 5 = 10.</p>
        <input type="text" id="eqInput" placeholder="Digite o valor de x"><br>
        <button onclick="checkTextAnswer('eqInput', '5')">Verificar Resposta</button>
        <p id="eqResult"></p>
    `,
    'area-perimetro': `
        <h2>Área e Perímetro</h2>
        <p><strong>Perímetro:</strong> Soma dos lados de uma figura. Quadrado: 4l. Círculo: 2πr.</p>
        <p><strong>Área:</strong> Espaço interno. Quadrado: l². Retângulo: base x altura. Círculo: πr². Triângulo: (base x altura)/2.</p>
        <p><strong>Exemplo:</strong> Retângulo 5x3: Perímetro = 16, Área = 15.</p>
        <img src="https://via.placeholder.com/300x200?text=%C3%81rea+e+Per%C3%ADmetro" alt="Exemplo de área e perímetro" style="max-width: 100%; height: auto;">
        
        <h3>Atividade: Calcule a Área</h3>
        <p>Área de um triângulo com base 6 e altura 4.</p>
        <input type="text" id="areaInput" placeholder="Digite o valor"><br>
        <button onclick="checkTextAnswer('areaInput', '12')">Verificar Resposta</button>
        <p id="areaResult"></p>
    `
};

// Função para carregar conteúdo
function loadContent(topic) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = contents[topic] || '<p>Conteúdo não encontrado.</p>';
}

// Função para verificar respostas de quiz (múltipla escolha)
function checkAnswer(quizName, correctValue) {
    const selected = document.querySelector(`input[name="${quizName}"]:checked`);
    const resultId = quizName.replace('Quiz', 'Result');
    const resultEl = document.getElementById(resultId);
    if (selected && selected.value === correctValue) {
        resultEl.textContent = 'Correto! Parabéns.';
        resultEl.style.color = 'green';
    } else {
        resultEl.textContent = 'Incorreto. Tente novamente.';
        resultEl.style.color = 'red';
    }
}

// Função para verificar respostas de texto
function checkTextAnswer(inputId, correctValue) {
    const input = document.getElementById(inputId).value.trim();
    const resultId = inputId.replace('Input', 'Result');
    const resultEl = document.getElementById(resultId);
    if (input === correctValue) {
        resultEl.textContent = 'Correto! Parabéns.';
        resultEl.style.color = 'green';
    } else {
        resultEl.textContent = 'Incorreto. Tente novamente.';
        resultEl.style.color = 'red';
    }
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
    document.getElementById('fracoes').addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('fracoes');
    });
    document.getElementById('equacoes').addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('equacoes');
    });
    document.getElementById('area-perimetro').addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('area-perimetro');
    });
});
