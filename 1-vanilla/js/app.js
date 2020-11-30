import MainController from './controllers/MainController.js'

document.addEventListener('DOMContentLoaded', () => {
    MainController.init()
    //DOMContentLoaded 이벤트는 DOM Tree 분석이 끝나면 발생한다.
    //DOM Tree가 다 만들어진 후에 DOM API를 이용하여 DOM에 접근할 수 있기 때문에, 
    //보통 자바스크립트 코드는 DOMContentLoaded 이후에 동작하도록 구현(로딩 속도 성능에 유리)
})