import React, { Component } from 'react';
// import React from 'react';  class App extends React.Component {
import logo from './logo.svg';
import './App.css';

import Message from './message'
import Timer from './timer'
import TodoApp from './todo'
import MarkdownEditor from './editor'


// 程序的主入口
// class 是 es6 的语法
//这是创建类    this还是留给实例用的
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    }
    this.age = 11
  }
  // this 所在的函数定义在哪个对象下, 则 this 就指向哪个对象. this 为 App
  handleToggleTimer = (e) => {
    console.log('handleToggleTimer', this)
    var show = !this.state.showTimer
    this.setState({
        //我们必须使用 setState 来改变 this.state
        // 让后程序会自动重新调用 render
        showTimer: show
    })
  }
  // 下面的 show 函数 好像只能插入到标签中(不确定) ,而不能插入到组件中
  show = () => {
      console.log(123)

  }

  // 下面的 {timer} 就是  var timer = this.state.showTimer ? <Timer /> : null
  // 为真的时候就会渲染进去一个<Timer /> 组件
  // render 就是渲染的意思. 就是我页面要显示的东西  (有注释的话 也会把注释显示出来)
  render() {

    // 用一个变量来决定是否显示 timer 组件  this.state.showTimer是一个布尔值  17行
    //this.state.showTimer 相当于在类里面引用一个变量
    var timer = this.state.showTimer ? <Timer /> : null
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={this.show}>Welcome to React</h2>
        </div>
        <p className="App-intro" >
          To get started, edit <code>src/App.js</code> and reload.
        </p>
        <Message name='gua' />
        <Message name='瓜' />
        <button onClick={this.handleToggleTimer}>开关 timer {this.age}</button>
        {timer}
        <TodoApp />
        <MarkdownEditor />
      </div>
    )
    // *** 需要注意的是, 组件必须 /> 结尾, 规定
  }


}

export default App;
