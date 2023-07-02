# React Hooks : useEffect

1. 컴포넌트가 Mount(화면에 첫 렌더링) ,2. Update(다시 렌더링), 3. Unmount(화면에서 사라질 때) ==> useEffect 사용 

## useEffect의 형태 

### 1. useEffect의 인자로 callback 함수만 받는 경우

useEffect(() => { // 작업... })

컴포넌트가 렌더링될 때 마다 렌더링이 이루어짐 (1,2)

### 2. useEffect의 인자로 callback 함수, dependency array를 받는 경우 

useEffect(() => { // 작업... },[value])

컴포넌트가 화면에 최초 렌더링 될때(1), value 값이 바뀔때마다 실행 

dependency array가 비어있는 형태이면 컴포넌트가 최초 렌더링 될 때만! 
(ex. useEffect(() => { // 작업... },[]))


## 컴포넌트가 unMount, 화면에서 사라질 때 어떠한 동작을 하고싶다면 useEffect 내부 return에 callback 함수 호출(clean up function)

(ex. useEffect(() => { // 타이머 시작.. } return () => { // 타이머 멈추기...} ,[]))
