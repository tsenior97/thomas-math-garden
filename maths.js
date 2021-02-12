var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 10);
    const n2 = Math.floor(Math.random() * 10);
    const add = '+';
    const minus = '-';


    if ((n1 + n2) > 9) {
        document.getElementById('oper').innerHTML = minus;
        if (n1 > n2) {
            document.getElementById('n1').innerHTML = n1;
            document.getElementById('n2').innerHTML = n2;
            answer = n1 - n2;
        } else {
            document.getElementById('n2').innerHTML = n1;
            document.getElementById('n1').innerHTML = n2;
            answer = n2 - n1;
        };
    } else {
        document.getElementById('oper').innerHTML = add;
        document.getElementById('n1').innerHTML = n1;
        document.getElementById('n2').innerHTML = n2;
        answer = n1 + n2;
    };

}


function checkAnswer() {
    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`Correct!. Score ${score}`);
        if (score > 6) {
            alert('Congrats you completed the garden! Start again?')
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
        } else {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        }
    } else {
        if (score != 0) { score--; }
        console.log(`Wrong!. Score ${score}`);
        alert("Your garden is dying, check your calculations or try writing neater next time");
        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }
}