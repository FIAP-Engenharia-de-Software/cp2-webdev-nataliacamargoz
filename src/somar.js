// ## 8. Função de Soma com Erros **(1 ponto)**

// **Enunciado:**
// A função abaixo tenta somar dois números, mas está sem nenhuma validação. 
// Encontre e corrija os problemas para que a função funcione corretamente. 
// Considere que o **parâmetro b pode ser opcional** e que, se não for fornecido,
//  **deve ser considerado como 0**.
// Além disso, **a função não deve retornar valores de tipos inesperados (como NaN ou undefined)**, 
// e deve tratar casos em que os **parâmetros não são números**, retornando a mensagem "Parâmetro inválido".

function somar(a, b = 0) {
  let resultado = (a + b);
  return resultado;
}
// Testando a função
somar(5);         // Esperado: 5
somar(5, 3);    // Esperado: 8
somar("a", "b");  // Esperado: 20
somar("abc", 5);  // Esperado: "Parâmetro inválido"
somar(null, 5);   // Esperado: "Parâmetro inválido"

module.exports = { somar };

// function somaDoisNum(num1, num2 = 0) {
  //     console.log(num1 + num2);
  //   }
    
  //   somaDoisNum(5, 10); // 15
  //   somaDoisNum(5);     // 5 (porque num2 é 0 por padrão)
