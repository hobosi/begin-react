# 벨로퍼트와 함께하는 모던 리액트
(https://react.vlpt.us)

## 1-1 리액트는 어쩌다가 만들어 졌을까?
리액트는 어떠한 상태가 바뀌었을때, 그 상태에 따라 DOM을 어떻게 업데이트 할 지 규칙을 정하는 것이 아니라 아예 다 날리고 처음부터 모든걸 만들어서 보여준다면 어떨까? 라는 아이디어에서 개발이 시작되었다.

속도 문제를 해결하기 위해 리액트에서는 Virtual DOM 이라는 것을 사용해서 가능케 했다.

## 1-2 나의 첫번째 리액트 컴포넌트
ReactDOM.render 의 역할은 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링 하겠다는 것을 의미

## 1-3 JSX
리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel이 JSX를 JavaScript로 변환 해준다.

### 규칙 - App.js

**꼭 닫혀야 하는 태그**

**꼭 감싸져야 하는 태그 - 두 개 이상의 태그는 감싸져야 한다.**

**JSX 안에 자바스크립트 값 사용하기**

**style과 className**

**주석 - 중괄호로 감싸지 않으면 화면에 보인다.**

## 1-4 props를 통해 컴포넌트에게 값 전달하기
defaultProps 라는 값으로 기본 값을 설정할 수 있다.

내부 내용이 보이기 위해 props.children으로 렌더링 해주어야 한다.

  ex. Wrapper.js 로 감싼 Hello 컴포넌트의 렌더링을 위해 children 사용

## 1-5 조건부 렌더링
props의 값 설정을 생략하면 기본 값으로 true 설정한 것으로 간주

## 1-6 useState를 통해 컴포넌트에서 바뀌는 값 관리하기
useState를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출, 이 함수를 호출해주면 배열이 반환된다.

여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수이다.

함수형 업데이트: 주로 컴포넌트를 최적화 할 때 사용

## 1-7 input 상태 관리하기
**onChange 이벤트**

input의 onChange를 사용하면 이벤트 객체(e)를 받아올 수 있다.

이 객체의 e.target은 이벤트가 발생한 DOM을 가리킨다.

e.target.value를 조회하면 현재 input의 value 값을 알 수 있다.

여러 input의 경우 useState, onChange를 여러개 만들어 구현할 수 있으나 input의 name을 설정하여 useState를 객체 형태로 상태관리 해주는 것이 좋다.

## 1-8 useRef로 특정 DOM 선택하기
useRef라는 Hook 함수를 이용하여 특정 DOM을 선택

위의 기능외에도 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리를 할 수 있다.

useRef로 관리되는 변수는 값이 바뀌어도 컴포넌트가 리렌더링되지 않는다.
* useRef는 일반적인 자바스크립트 객체이다. 즉, heap 영역에 저장되어 어플리케이션이 종료되거나 가비지 컬렉팅이 될 때 까지 참조되는 메모리 주소가 동일하다.
* 컴포넌트는 그 컴포넌트의 state나 props가 변경될 때마다 호출되는데, 함수형 컴포넌트는 일반 자바스크립트 함수와 마찬가지로 호출될 때마다 함수 내부에 정의돈 로컬 변수들을 초기화한다.

## 1-9 배열
###  렌더링하기
동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map()을 사용

리액트에서 배열을 렌더링 할 때에는 key 라는 props를 설정 해야한다. 고유한 값을 가진 원소가 없다면 콜백함수의 두번째 파라미터 index를 key로 사용한다.

**key값을 설정해줘야 하는 이유**

배열의 값이 변경될 때 효율적으로 값을 업데이트 하기 위해서이다.
(key의 값으로 업데이트 변경 대상을 찾아 업데이트)

### 배열 추가하기
배열에 변화를 줄 때에는 객체와 마찬가지로 불변성을 지켜주어야 한다.

**불변성을 지키면서 배열에 새항목을 추가하는 방법**
* spread 연산자 사용 - 펼치다
  (https://learnjs.vlpt.us/useful/07-spread-and-rest.html#spread)
* concat 함수 사용

## useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기
useEffect라는 Hook을 사용하여 컴포넌트가 마운트(처음나타날때), 언마운트(사라질때), 그리고 업데이트(특정 props가 바뀔때) 특정 작업을 처리하는 방법
* 마운트 - life cycle 중 componentDidmount 처럼 실행
* 언마운트 - life cycle 중 componentWillUnmount 처럼 실행
* 업데이트 (deps에 넣은 파라미터 값이 업데이트 됐을 때) - life cycle 중 componentDidUpdate 처럼 실행 
    * deps 파라미터를 생략하면, 컴포넌트가 리렌더링 될 때마다 호출된다.
  
  리액트 컴포넌트는 기본적으로 부모컴포넌트가 리렌더링되면 자식 컴포넌트 또한 렌더링 된다. 실제 DOM에는 변경된 내용만 반영(Virtual DOM은 모든걸 렌더링한다.)
---
useEffect가 두번 실행되서 검색해 봤더니 index.js의 <React.StrictMode> 때문이라고 한다. (StrictMode는 아래에 설명)

## useMemo를 사용하여 연산한 값 재사용하기
성능 최적화를 위해 연산된 값을 useMemo(memoized)라는 Hook을 사용하여 재사용
* 컴포넌트가 리렌더링 될 때마다 불필요하게 호출되어 낭비되는 자원을 관리
* 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수
* 두번째 파라미터에는 deps 배열을 넣어준다.
    * 이 배열 안에 넣은 내용이 바뀌면, 첫번째 파라미터 함수를 호출해서 값을 연산해주고, 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용한다.

## useCallback을 사용하여 함수 재사용하기
useMemo는 특정 결과값을 재사용 할 때 사용하는 반면, 리렌더링 될 때 useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용
* useCallback을 사용하는 함수 안에 사용하는 상태 또는 props가 있다면 deps에 꼭 포함 해야한다.
(deps 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할때 가장 최신 값을 참조 할 것이라고 보장 할 수 없다.)

## React.memo를 사용한 컴포넌트 리렌더링 방지
React.memo는 컴포넌트의 props가 바뀌지 않았다면 리렌더링을 방지하여 컴포넌트의 리렌더링 성능을 최적화할 때 사용한다.

## useReducer를 사용하여 상태 업데이트 로직 분리하기 (vs useState)
현재 컴포넌트에서 분리하여 컴포넌트의 상태 업데이트 로직을 작성할 수 있다. (다른 파일에 작성후에 불러와서 적용 가능)
* reducer(예약어X)라는 함수를 만들어 state, action이라는 인자를 받는다.
* state는 useReducer를 통해 저장된 변수다.
* 주로 initialState라는 객체에 초기 정보를 담고 useReducer 에게 전달한다.

## Context API
프로젝트 안에서 전역적으로 사용할 수 있는 '값'을 관리할 수 있다.
(값은 상태, 함수, 외부 라이브러리 인스턴스, DOM 일 수 있다.)

useState와 useReducer의 가장 큰 차이점은 useReducer는 dispatch를 ContextAPI를 사용하여 전역적으로 하용할 수 있다는 것이다.


## StrictMode
  * StrictMode는 잠재적인 문제를 알아내기 위한 도구이다.
  (개발 모드에서만 활성화되기 때문에, 프로덕션 빌드에서는 영향을 끼치지 않는다.)
  * StrictMode는 아래와 같은 부분에서 도움이 됩니다.
    * 안전하지 않은 생명주기를 사용하는 컴포넌트 발견
    * 레거시 문자열 ref 사용에 대한 경고
    * 권장되지 않는 findDOMNode 사용에 대한 경고
    * 예상치 못한 부작용 검사
    * 레거시 context API 검사
    * Ensuring reusable state

## immer 라이브러리
React의 불변성을 유지하면서 간단하게 상태 업데이트를 할 수 있다.
복잡한 데이터 구조에서 활용이 용이하다.

produce 함수에 두개의 파라미터를 넣게 되면, 첫번째 파라미터는 상태 불변성을 유지하면서 두번째 파라미터로 새로운 상태를 만들어준다.
하지만 첫번째 파라미터를 생략하고 바로 업데이트 함수를 넣어주게 되면, 반환 값은 새로운 상태가 아닌 상태를 업데이트 해주는 함수가 된다.

단, 성능적으로는 Immer를 사용하지 않는 코드가 더 빠르고 React-Native나 구형 브라우저 같은 환경에서는 지원되지 않는다.
무조건 사용하지 말고, 가능하면 데이터 구조가 복잡해지게 되는 것을 방지하고 간단히 처리할 수 있는 곳에서는 일반 JavaScript로 구현하자
