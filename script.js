const contents = {
    probabilidade: `
        <h2>Probabilidade</h2>
        <p>Medida de chance de eventos. Fórmula: P(E) = favoráveis/total. Ex.: Dado par: 3/6=1/2. Aplicações: Jogos, previsões.</p>
        <p><strong>Tipos:</strong> Clássica, Frequentista, Subjetiva. Exemplo avançado: Probabilidade condicional P(A|B) = P(A∩B)/P(B).</p>
        <img src="images/dado.png" alt="Dado">
        <h3>Atividades</h3>
        <p>Quiz: Probabilidade de cara em moeda?</p>
        <input type="radio" name="prob" value="1/2"><label>1/2</label><br>
        <input type="radio" name="prob" value="1/4"><label>1/4</label><br>
        <button onclick="checkQuiz('prob', '1/2')">Verificar</button>
        <p id="probResult"></p>
        <p>Calcule: 2 dados, soma 7.</p>
        <input id="probCalc" placeholder="Digite 6/36"><button onclick="checkAnswer('probCalc', '6/36')">Verificar</button>
        <p id="probCalcResult"></p>
    `,
    '4casos': `
        <h2>4 Casos de Congruência</h2>
        <p>LAL, ALA, LLL, AA. Ex.: LAL para prova em geometria. Aplicações: Construção, engenharia.</p>
        <p><strong>Detalhes:</strong> AA garante similaridade, não congruência. Exemplo: Triângulos com ângulos 30° e 60°.</p>
        <img src="https://via.placeholder.com/300x200?text=Triângulos" alt="Triângulos">
        <h3>Atividades</h3>
        <p>Identifique: Dois lados e ângulo oposto.</p>
        <input id="cong" placeholder="Caso"><button onclick="checkAnswer('cong', 'ALA')">Verificar</button>
        <p id="congResult"></p>
        <p>Quiz: Qual não garante congruência?</p>
        <input type="radio" name="congQuiz" value="AA"><label>AA</label><br>
        <input type="radio" name="congQuiz" value="LLL"><label>LLL</label><br>
        <button onclick="checkQuiz('congQuiz', 'AA')">Verificar</button>
        <p id="congQuizResult"></p>
    `,
    pitagoras: `
        <h2>Teorema de Pitágoras</h2>
        <p>a² + b² = c². Ex.: 3-4-5. Aplicações: Distâncias, física.</p>
        <p><strong>Recíproco:</strong> Se a²+b²=c², retângulo. Exemplo: Verificar 5-12-13.</p>
        <img src="https://via.placeholder.com/300x200?text=Triângulo" alt="Triângulo">
        <h3>Atividades</h3>
        <p>Calcule hipotenusa: 6-8.</p>
        <input id="pit" placeholder="Valor"><button onclick="checkAnswer('pit', '10')">Verificar</button>
        <p id="pitResult"></p>
        <p>Quiz: Qual é o cateto?</p>
        <input type="radio" name="pitQuiz" value="Oposto"><label>Oposto</label><br>
        <input type="radio" name="pitQuiz" value="Adjacente"><label>Adjacente</label><br>
        <button onclick="checkQuiz('pitQuiz', 'Oposto')">Verificar</button>
        <p id="pitQuizResult"></p>
    `,
    fracoes: `
        <h2>Frações</h2>
        <p>Partes de um todo. Operações: Soma (ad+bc)/bd, Mult ac/bd. Simplificação: MDC.</p>
        <p><strong>Exemplo:</strong> 1/2 + 1/3 = 5/6. Aplicações: Receitas, finanças.</p>
        <img src="https://via.placeholder.com/300x200?text=Frações" alt="Frações">
        <h3>Atividades</h3>
        <p>Simplifique 8/12.</p>
        <input id="frac" placeholder="2/3"><button onclick="checkAnswer('frac', '2/3')">Verificar</button>
        <p id="fracResult"></p>
        <p>Some 3/4 + 1/4.</p>
        <input id="fracSum" placeholder="1"><button onclick="checkAnswer('fracSum', '1')">Verificar</button>
        <p id="fracSumResult"></p>
    `,
    equacoes: `
        <h2>Equações Lineares</h2>
        <p>ax + b = c. Resolver: Isolar x. Ex.: 2x=6 → x=3.</p>
        <p><strong>Sistemas:</strong> Substituição/eliminação. Aplicações: Custos, distâncias.</p>
        <img src="https://via.placeholder.com/300x200?text=Equações" alt="Equações">
        <h3>Atividades</h3>
        <p>Resolva 5x - 3 = 12.</p>
        <input id="eq" placeholder="x"><button onclick="checkAnswer('eq', '3')">Verificar</button>
        <p id="eqResult"></p>
        <p>Quiz: Tipo de equação?</p>
        <input type="radio" name="eqQuiz" value="Linear"><label>Linear</label><br>
        <input type="radio" name="eqQuiz" value="Quadrática"><label>Quadrática</label><br>
        <button onclick="checkQuiz('eqQuiz', 'Linear')">Verificar</button>
        <p id="eqQuizResult"></p>
    `,
    'area-perimetro': `
        <h2>Área e Perímetro</h2>
        <p>Perímetro: Soma lados. Área: Espaço interno. Quadrado: P=4l, A=l². Círculo: P=2πr, A=πr².</p>
        <p><strong>Exemplo:</strong> Retângulo 4x6: P=20, A=24. Aplicações: Construção, agricultura.</p>
        <img src="https://via.placeholder.com/300x200?text=Figuras" alt="Figuras">
        <h3>Atividades</h3>
        <p>Área triângulo: base 8, altura 5.</p>
        <input id="area" placeholder="20"><button onclick="checkAnswer('area', '20')">Verificar</button>
        <p id="areaResult"></p>
        <p>Perímetro quadrado lado 7.</p>
        <input id="peri" placeholder="28"><button onclick="checkAnswer('peri', '28')">Verificar</button>
        <p id="periResult"></p>
    `,
    trigonometria: `
        <h2>Trigonometria Básica</h2>
        <p>Sen=op/hip, Cos=adj/hip, Tan=op/adj. Ex.: 30°: sen=1/2.</p>
        <p><strong>Aplicações:</strong> Navegação, ondas. Exemplo: Altura de prédio com ângulo.</p>
        <img src="https://via.placeholder.com/300x200?text=Trig" alt="Trig">
        <h3>Atividades</h3>
        <p>Calcule tan(45°).</p>
        <input id="trig" placeholder="1"><button onclick="checkAnswer('trig', '1')">Verificar</button>
        <p id="trigResult"></p>
        <p>Quiz: Função para ângulo reto?</p>
        <input type="radio" name="trigQuiz" value="Sen"><label>Sen</label><br>
        <input type="radio" name="trigQuiz" value="Cos"><label>Cos</label><br>
        <button onclick="checkQuiz('trigQuiz', 'Cos')">Verificar</button>
        <p id="trigQuizResult"></p>
    `,
    estatistica: `
        <h2>Estatística Descritiva</h2>
        <p>Média: Soma/n. Mediana: Central. Moda: Mais frequente.</p>
        <p><strong>Exemplo:</strong> 1,2,3,4: Média=2.5, Mediana=2.5. Aplicações: Pesquisas.</p>
        <img src="https://via.placeholder.com/300x200?text=Estat" alt="Estat">
        <h3>Atividades</h3>
        <p>Média de 5,10,15.</p>
        <input id="stat" placeholder="10"><button onclick="checkAnswer('stat', '10')">Verificar</button>
        <p id="statResult"></p>
        <p>Moda de 2,2,3,4.</p>
        <input id="statModa" placeholder="2"><button onclick="checkAnswer('statModa', '2')">Verificar</button>
        <p id="statModaResult"></p>
    `,
    sequencias: `
        <h2>Sequências e Progressões</h2>
        <p>PA: Dif constante (a_n = a1+(n-1)d). PG: Razão (a_n = a1*r^(n-1)).</p>
        <p><strong>Exemplo:</strong> PA 1,3,5 (d=2). Aplicações: Juros, população.</p>
        <img src="https://via.placeholder.com/300x200?text=Seq" alt="Seq">
        <h3>Atividades</h3>
        <p>Próximo PA: 4,7,10.</p>
        <input id="seq" placeholder="13"><button onclick="checkAnswer('seq', '13')">Verificar</button>
        <p id="seqResult"></p>
        <p>Quiz: Tipo de 2,6,18?</p>
        <input type="radio" name="seqQuiz" value="PA"><label>PA</label><br>
        <input type="radio" name="seqQuiz" value="PG"><label>PG</label><br>
        <button onclick="checkQuiz('seqQuiz', 'PG')">Verificar</button>
        <p id="seqQuizResult"></p>
    `
};

function loadContent(topic) {
    document.getElementById('content-area').innerHTML = contents[topic] || '<p>Conteúdo não encontrado.</p>';
}

function checkAnswer(id, correct) {
    const val = document.getElementById(id).value.trim();
    document.getElementById(id + 'Result').textContent = val === correct ? 'Correto!' : 'Incorreto.';
    document.getElementById(id + 'Result').style.color = val === correct ? 'green' : 'red';
}

function checkQuiz(name, correct) {
    const sel = document.querySelector(`input[name="${name}"]:checked`);
    const res = document.getElementById(name + 'Result');
    res.textContent = sel && sel.value === correct ? 'Correto!' : 'Incorreto.';
    res.style.color = sel && sel.value === correct ? 'green' : 'red';
}

document.addEventListener('DOMContentLoaded', () => {
    ['probabilidade', '4casos', 'pitagoras', 'fracoes', 'equacoes', 'area-perimetro', 'trigonometria', 'estatistica', 'sequencias'].forEach(id => {
        document.getElementById(id).addEventListener('click', e => {
            e.preventDefault();
            loadContent(id);
        });
    });
});
