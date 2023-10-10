export function mixText(button) {
    let oldText = button.textContent;
    let letters = oldText.split('');

    let interval = setInterval(function () {
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }
        button.textContent = letters.join('');
    }, 50);

    setTimeout(function () {
        clearInterval(interval);
        button.textContent = oldText;
    }, 400);
}