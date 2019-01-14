import {Component} from '@angular/core';

const todos = [
  {id: 1, title: 'html', done: true},
  {id: 2, title: 'css', done: false},
  {id: 3, title: 'js', done: false},
  {id: 4, title: 'vue', done: true},
]

// 装饰器
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inputVal: string;  // 输入框内容
  public list: {   // :{}[]  列表
    id: number,
    title: string,
    done: boolean
    // }[] = todos
  }[] = JSON.parse(window.localStorage.getItem('ngList') || '[]')
  public currentEdit: {   // 被编辑的一条数据
    id: number,
    title: string,
    done: boolean
  } = null

  /*  public filterList:{   // all active complete 过滤后的数据
      id: number,
      title: string,
      done: boolean
    }[]*/

  public currentStyle: string = 'all'

  // 生命周期 初始化
  ngOnInit() {
    // 当 地址栏 /#/xx 变化时，触发
    window.onhashchange = () => {
      console.log(this.currentStyle);
    }
  }

  // 当组件数据变化时，会触发
  ngDoCheck() {
    localStorage.setItem('ngList', JSON.stringify(this.list))
  }

  get filterList() {    // 使用get属性，就不用定义 public filterList{}
    if (this.currentStyle === 'all') {
      return this.list
    } else if (this.currentStyle === 'active') {
      return this.list.filter(val => !val.done)
    } else if (this.currentStyle === 'complete') {
      return this.list.filter(val => val.done)
    }
  }


  // 添加列表
  addList(e): void {
    console.log('val', this.inputVal);
    const title = e.target.value
    if (!title) return;
    const last = this.list[this.list.length - 1]
    this.list.push({
      id: last ? last.id + 1 : 1,
      title: title,
      done: false
    })
    e.target.value = ''
  }

  get allDone() {   // 属性 方法   get函数 可以当属性
    return this.list.every(res => res.done)
    // true or false
  }

  set allDone(val) {   // 属性方法
    this.list.forEach(res => {
      res.done = val
    })
  }

  // 删除
  remove(index: number, e) {
    e.stopPropagation()  // 防止冒泡
    this.list.splice(index, 1)
    console.log(index);
  }

  // edit
  edit(val, e) {
    console.log(val);
    val.title = e.target.value
    this.currentEdit = null
  }

  // 取消esc
  cancel(e) {
    const {keyCode, target} = e
    if (keyCode === 27) {
      // esc
      target.value = this.currentEdit.title
      this.currentEdit = null
    }
  }

  // get 函数   可以直接渲染出来，不用放data()
  get remainData() {
    // filter 返回一个数组，直接length
    return this.list.filter(val => !val.done).length
  }

  // 清除已完成
  clearAll() {
    this.list = this.list.filter(val => !val.done)  //  过滤出来赋值给 list
  }

}
