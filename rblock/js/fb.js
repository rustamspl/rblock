var map = [].map;

function hidePages() {
    map.call(document.querySelectorAll('.ego_section'), (el) => {
        if (el.innerText.match(/^Рекомендуемые Страницы/i)) {
            el.parentNode.style.display = 'none';
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    hidePages();
    var observer = new MutationObserver(function (muts, observer) {
        map.call(muts, function (mut) {
            hidePages();
        })
    });
    observer.observe(document, {
        subtree: true, //attributes: true,
        //characterData: true,
        childList: true
    });
});
