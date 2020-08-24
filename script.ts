let myth_elements: any = document.getElementsByClassName("myth")

function toggle_cards(card: HTMLElement) {
    card.childNodes.forEach((el_cn) => {

        let el = <HTMLElement>el_cn;

        if (!(el_cn.nodeType == Node.ELEMENT_NODE &&
            (el.classList.contains("question") || el.classList.contains("answer"))))
            return 0;

        if (el.classList.contains("answer")) {
            el.classList.toggle("is-not-visible");
        }
        if (el.classList.contains("question")) {
            el.classList.toggle("is-full-size");
        }
    })

    card.classList.toggle("purple-card");
}

function flip(event) {
    for (let el of myth_elements) {
        if (el == event.currentTarget || el.classList.contains("purple-card")) {
            toggle_cards(el)
        }
    }
}

for (let el of myth_elements) {
    el.addEventListener("click",flip)
}