# useRef

const ref = useRef(value)

==> value에 초기값 설정

ref = {current : value}

==> ref object는 언제든 수정가능함 (ex. ref.current = "hello")

ref는 해당 컴포넌트가 unMount 되기 전까지는 값을 계속 유지해서 가지고 있음 

## 1. 저장공간으로 사용 

state의 변화 ==> 렌더링 ==> 컴포넌트 내부 변수들 초기화 

Ref의 변화 ==> No Render ==> 변수들의 값이 유지됨

State의 변화 ==> 렌더링 ==> 그래도 Ref의 값은 유지 

➡️ 변경 시 렌더링을 발생시키지 말아야 하는 값을 다룰 때 사용

## 2. DOM 요소에 접근 

document.querySelector 처럼 원하는 DOM 요소에 접근이 가능 

const ref = useRef(value)

<input ref={ ref }/>
