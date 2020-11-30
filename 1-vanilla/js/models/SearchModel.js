const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://cdn.bmf.kr/_data/product/H1821/5a4ed4e8a6751cb1cc089535c000f331.jpg'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://cdn.bmf.kr/_data/product/H503E/300d931e3b8252ed628b6a3c2f56936b.jpg'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
        //res를 data에 200ms 후 리턴
         //history model.js에
        // list() {
        //   return Promise.resolve(this.data)
        // } 함수가 있음.
      }, 200);
    })
  }
}