var myth_elements = document.getElementsByClassName("myth");
function toggle_cards(card) {
    card.childNodes.forEach(function (el_cn) {
        var el = el_cn;
        if (!(el_cn.nodeType == Node.ELEMENT_NODE &&
            (el.classList.contains("question") || el.classList.contains("answer"))))
            return 0;
        if (el.classList.contains("answer")) {
            el.classList.toggle("is-not-visible");
        }
        if (el.classList.contains("question")) {
            el.classList.toggle("is-full-size");
        }
    });
    card.classList.toggle("purple-card");
}
function flip(event) {
    for (var _i = 0, myth_elements_2 = myth_elements; _i < myth_elements_2.length; _i++) {
        var el = myth_elements_2[_i];
        if (el == event.currentTarget || el.classList.contains("purple-card")) {
            toggle_cards(el);
        }
    }
}
for (var _i = 0, myth_elements_1 = myth_elements; _i < myth_elements_1.length; _i++) {
    var el = myth_elements_1[_i];
    el.addEventListener("click", flip);
}
