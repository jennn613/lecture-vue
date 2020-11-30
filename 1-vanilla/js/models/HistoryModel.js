export default {
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  //검색 기록과 날짜 받을 배열 생성

  list() {
    return Promise.resolve(this.data)
    //promse 불러오기 성공 > data에 keyword 추가
  },

  
  add(keyword = '')
  //keyword에 ''추가
   {
    keyword = keyword.trim()
    //추가 후 trim > 문자열 공백 없애줌
    if (!keyword) return 
    //keyword가 아닐 때 return
    if (this.data.some(item => item.keyword === keyword)) {
    // some 함수는 배열의 요소 중 하나라도 
    //callbackFunction에서 true를 리턴하면 true를 리턴
    //item의 keyword가 keyworkd라면 this data에 keyword true 를 리턴

      this.remove(keyword)
      //keyword 제거
    }

    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]

  },
  
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
    //filter는 걸러주는 것. item.keyword 에서 keyword가 아니면 remove
  }
}