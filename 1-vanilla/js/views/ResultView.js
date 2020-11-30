import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function(el) {
    this.init(el)
}

ResultView.render = function(data = []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHTML(data) : "검색 결과가 없습니다."
    this.show()
}

ResultView.getSearchResultsHTML = function (data){
    return data.reduce((html, item)  => {
    html += this.getSearchResultsHTML(item)
    return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchResultsHTML = function (item) {
    return `<li>
    <img src="${item.image}">
    <p>${item.name}</p>
    </li>`
}

export default ResultView