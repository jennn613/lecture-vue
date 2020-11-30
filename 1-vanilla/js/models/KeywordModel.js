export default {
  data: [
    {keyword: '이탈리아'}, 
    {keyword: '세프의요리'}, 
    {keyword: '제철'}, 
    {keyword: '홈파티'}
  ],
  //추천  keyword 생성

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
        //res data를 data 배열에 return
        //res > resolve 약어
        //history model.js에
        // list() {
        //   return Promise.resolve(this.data)
        // } 함수가 있음.
      }, 200)
    })
  }
}
