# React-hooks <useState>

## const [state,setState] = useState(초기값);

useState hook은 state와 setState를 배열 형태로 return 
- state : 현재 상태값
- useState : 상태값을 바꿀 수 있는 함수 (setState를 사용해 state를 변경할 때마다 component re-render


## 새로 변경될 state값이 이전 state 값과 연관
setState((prevState) => {
  //some works...
  return newState
})

setState의 인자로 새로운 state를 return 하는 callback 함수를 넣어주는 것이 좋음 


## useState를 이용해 초기값을 받아올 때 무거운 일을 해야한다면?

ussState(() => {
  return heavyWork()
})

useState의 인자로 callback 함수를 넣어주게 된다면 최초 렌더링 시에만 실행되게 할 수 있음 
