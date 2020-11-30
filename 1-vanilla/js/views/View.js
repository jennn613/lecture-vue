const tag = '[View]'

export default {
  init(el) {
    if (!el) throw el
    //throw - 강제로 예외를 발생시킴
    //el이 아니라면 예외(아래 코드)를 발생
    //main controller에
  //   init(){
  //     console.log(tag, 'init()')
  //     FormView.setup(document.querySelector('form'))
  // } 함수가 있음

    this.el = el
    return this
  },

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
    //el에 event 발생했을 때 handler
  },

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    //event와 data받는 인자
    this.el.dispatchEvent(evt)
    //생성된 evt에 evnt 붙임
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}