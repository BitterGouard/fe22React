import React from 'react';

//这是es6 写组件的方法
class Timer extends React.Component {
  constructor(props) {
    super(props);
    // console.log('this到底是', this) 是Timer组件
    this.state = {
      secondsElapsed: 0
    };
  }
 // 也可以这么写setState
  // tick() {
  //   this.setState(
  //           // 这里面是一个对象
  //           {secondsElapsed: this.state.secondsElapsed + 1}
  //
  //       )
  // }
  //this.setState( {key: value} )  原括号里面是一个字典(表示state的字典)
 tick() {
    //  console.log('我是this的', this)  Timer 组件
    // tick 会调用 setState
        this.setState((prevState) => ({
        //这个 key 还是要写的 不能用 prevState 来替代(其实用 prevState 得到state 中的 value )
    secondsElapsed: prevState.secondsElapsed + 1
  }))
  }


  // function (prevState) {
  //     // prevState 是上一个state的值 是一个字典 也就是 {secondsElapsed: 0}
    //   console.log('prevState', prevState)
  //     return {
  //         secondsElapsed: prevState.secondsElapsed + 1
  //
  //     }
  // }
  // componentDidMount 会在组件 render 之后执行, 并且永远都只执行一次
  componentDidMount() {
    console.log('定时器组件 did mount', this)

    // setInterval 的返回值保存下来, 以后可以删掉
    //this.interval 相当于给Timer组件增加了一个属性(在外面增加的),否则你在这里定时, 这个定时器的id 你没法在外面获取到,
    // 就没法取消, 所以要加 this.interval, 这样外面也可以获取到.并且可以取消定时器
    this.interval = setInterval(() => {
        // console.log('我this', this)
        return this.tick()}, 1000);
    console.log('Timer', this, Object.keys(this), this.interval)

  }

  // componentWillUnmount 会在组件 移除 之后执 行, 并且永远都只执行一次
  componentWillUnmount() {
    // 组件被干掉的时候会调用这个函数
    // 所以在这里清掉定时函数
    console.log('定时器组件 will unmount')
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>启动时间: {this.state.secondsElapsed}</div>
    );
  }
}

module.exports = Timer
