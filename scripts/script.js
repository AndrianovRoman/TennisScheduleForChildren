
// Программа для автоматического скрывания текста внутри блока Внимание!

let date = new Date();
let month = date.getMonth();

let attentionText1 = document.getElementById('attention-text-1');
let attentionText2 = document.getElementById('attention-text-2');
let attentionText3 = document.getElementById('attention-text-3');

if (month !== 7 && month !== 8) {
    attentionText1.style.display = 'none';
    attentionText2.style.display = 'none';
    attentionText3.style.display = 'none';
} else {
    attentionText1.style.display = 'block';
    attentionText2.style.display = 'block';
    attentionText3.style.display = 'block';
}