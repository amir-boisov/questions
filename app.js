//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");
const questionText = document.querySelectorAll(".question");
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const eventTar = event.currentTarget;

        if (eventTar) {
            const hasClass = eventTar.closest(".question").classList;
            if (hasClass.contains("show-text")) {
                hasClass.remove("show-text");
            } else hasClass.add("show-text");
        }
    });
});
