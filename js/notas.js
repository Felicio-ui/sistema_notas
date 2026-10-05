export function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

export function verificarSituacao(media) {
    if (media >= 10) {
        return "Aprovado";
    }

    return "Reprovado";
}

export function validarNota(nota) {
    return nota >= 0 && nota <= 20;
}