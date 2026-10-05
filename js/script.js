import { calcularMedia, verificarSituacao, validarNota } from "./notas.js";

window.calcular = function () {
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);

    if (!validarNota(n1) || !validarNota(n2) || !validarNota(n3)) {
        document.getElementById("resultado").textContent = "Notas inválidas (0-20)";
        return;
    }

    const media = calcularMedia(n1, n2, n3);
    const situacao = verificarSituacao(media);

    document.getElementById("resultado").textContent =
        `Média: ${media.toFixed(2)} — ${situacao}`;
};