import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'
import Tabview from '../views/TabView.js'
const tag = '[MainController]'


export default {
    init(){
        FormView.setup(document.querySelector('form'))
        .on('@submit', e => this.onSubmit(e.detail.input))
        //on 메소드에 @submit을 받았을 떼 event(onSubmit) 호출해주기
        .on('@reset', e => this.onResetForm())

        Tabview.setup(document.querySelector('#tabs'))
        .on('@change', e => this.onChangeTab(e.detail.tabName))
        ResultView.setup(document.querySelector('#search-result'))
        this.selectedTab = '추천 검색어'
        this.renderView()

    },

    renderView(){
     Tabview.setActiveTab(this.selectedTab)
     ResultView.hide()
    },

    search(query){
        console.log(tag,'search()', query)
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
        this.onSearchResult([])
    },
    
    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },
    // const FormView = Object.create(View)
    //view라는 객체 생성하는 변수 formView
    //setup() Function. The setup() function runs when the program starts. 
    //It is used to set the initial environment properties such as text-color, screen size, background-color and load the media file such as images and fonts. 
    //The program contains only one setup() function.

    onResetForm(){
        console.log(tag, 'onResetForm()')
        ResultView.hide()
    },

    onSearchResult(data){
        ResultView.render(data)
    },

    onChangeTab(tabName){
        debugger
    }
}