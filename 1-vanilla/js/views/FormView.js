import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)
//view라는 객체 생성하는 변수 formView

FormView.setup = function(el){
    this.init(el)
    //객체의 init
    //main controller에 init 함수에 el 을

    // init(){
    //     FormView.setup(document.querySelector('form'))
    // }

    this.inputEl = el.querySelector('[type=text]')
    //this(init(el))에 text받을 변수
    this.resetEl = el.querySelector('[type=reset]')
    //this(init(el)) reset 할 변수
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true) {
    this.resetEl.style.display  = show ? 'block' : 'none'
    //resetEl 이 block일 때 none 
}

FormView.bindEvents = function() {
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    //inputEl (사용자가 입력한 텍스트가 keypup일 때)
    //keyup - 어떤 키를 눌렀는지 나타내는 코드를 제공
    //onKeyup - 키를 눌렀다가 땠을 때 이벤트이다
    this.resetEl.addEventListener('click', e => this.onClickReset())
    //x 버튼 클릭시 onreset 함수 실행
}

FormView.onKeyup = function(e) {
    const enter = 13 //enter key의 값 = 13
    this.showResetBtn(this.inputEl.value.length)
    //키눌렀다 뗐을 때 showResetBtn에 입력한 텍스트 (inputEl)의 문자열 길이 반환
    if(!this.inputEl.value.length) this.emit('@reset')
    if (e.keyCode !== enter) return
    this.emit('@submit', {input: this.inputEl.value})
    //form view 에서 enter key 쳐짐 >
    // controller로 전달
    // resultview (다른 파일)에서 처리해주기
    //emit은 view.js
}

FormView.onClickReset = function(){
this.emit('@reset')
this.showResetBtn(false)
//x 버튼 숨기기
}

export default FormView