 
document.addEventListener('DOMContentLoaded', function () {
    let speech = new SpeechSynthesisUtterance();
    let textarea = document.querySelector("textarea");
    let ss = document.querySelector("button");

    ss.addEventListener("click", () => {
        speech.text = textarea.value;
        window.speechSynthesis.speak(speech);
        console.log("hello");
    });
});

