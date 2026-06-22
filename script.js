document.getElementById('btn-analisar').addEventListener('click', function() {
    // Seleciona os checkboxes
    const checkFonte = document.getElementById('check-fonte').checked;
    const checkEmocao = document.getElementById('check-emocao').checked;
    const checkRosto = document.getElementById('check-rosto').checked;
    const checkAudio = document.getElementById('check-audio').checked;

    // Contador de pontos de suspeita
    let pontosSuspeita = 0;

    if (checkFonte) pontosSuspeita++;
    if (checkEmocao) pontosSuspeita++;
    if (checkRosto) pontosSuspeita++;
    if (checkAudio) pontosSuspeita++;

    // Caixa onde o resultado será exibido
    const caixaResultado = document.getElementById('resultado-analise');
    caixaResultado.style.display = 'block'; // Torna a caixa visível

    // Lógica para definir a mensagem baseada nos pontos
    if (pontosSuspeita === 0) {
        caixaResultado.innerHTML = "🟢 Baixo Risco: Esta mídia parece segura, mas lembre-se de sempre checar fontes oficiais antes de partilhar!";
        caixaResultado.style.backgroundColor = "#d4edda";
        caixaResultado.style.color = "#155724";
    } else if (pontosSuspeita <= 2) {
        caixaResultado.innerHTML = "🟡 Atenção Média: Existem alguns sinais suspeitos. Recomenda-se pesquisar em agências de checagem (como Fato ou Fake) antes de enviar a qualquer pessoa.";
        caixaResultado.style.backgroundColor = "#fff3cd";
        caixaResultado.style.color = "#856404";
    } else {
        caixaResultado.innerHTML = "🔴 Alto Risco de Fake/Deepfake! Vários sinais de manipulação detetados. NÃO partilhe este conteúdo em grupos escolares ou redes sociais!";
        caixaResultado.style.backgroundColor = "#f8d7da";
        caixaResultado.style.color = "#721c24";
    }
});
