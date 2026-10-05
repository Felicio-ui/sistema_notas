import { test } from "node:test";
import assert from "node:assert";
import { calcularMedia, verificarSituacao, validarNota } from "../js/notas.js";

test("deve calcular corretamente a média de três notas", () => {
    assert.strictEqual(calcularMedia(10, 20, 15), 15);
});

test("deve retornar Aprovado quando média é maior ou igual a 10", () => {
    assert.strictEqual(verificarSituacao(15), "Aprovado");
});

test("deve retornar Reprovado quando média é menor que 10", () => {
    assert.strictEqual(verificarSituacao(8), "Reprovado");
});

test("deve validar nota dentro do intervalo 0-20", () => {
    assert.strictEqual(validarNota(10), true);
    assert.strictEqual(validarNota(0), true);
    assert.strictEqual(validarNota(20), true);
});

test("deve invalidar nota fora do intervalo", () => {
    assert.strictEqual(validarNota(-1), false);
    assert.strictEqual(validarNota(25), false);
});