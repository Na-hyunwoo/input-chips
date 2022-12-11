# input-chips

## 계기
input에 따른 chips 기능을 제품에 실으려고 여러가지 기능을 찾아보다가. 

이미 존재하는 material-ui-chip-input 라이브러리의 UI가 맘에들지 않았고, 사용하기 불편했기에,

내가 더 잘 만들 수 있겠다는 생각을 했다. 

또한, 매주 5만명 정도의 유저가 원하고 있고 마지막 개발이 3년전 이었다. 

그래서 이참에 내가 만들어보자고 생각하게 되었다. 

불편했던 라이브러리
https://www.npmjs.com/package/material-ui-chip-input
## 중점을 둔 점
- 예쁜 UI 

- 한국어 두 번 입력되는 버그 없애기 
![](https://velog.velcdn.com/images/dusdjeks/post/77db6d3b-6be7-4c3c-9ec3-8a0c5b093add/image.gif)

- tsdoc, storybook을 통한 dx 향상

## 주소

https://www.npmjs.com/package/input-chips

## 추가 구현이 필요한 사항

- 확장성
- 기타 라이센스 등록 등등 

## 사용법

```js

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.includes(action.keyword) ? state : [...state, action.keyword];
    case "DELETE":
      return state.filter((existing) => existing !== action.keyword);
    default: 
      return state;
  }
}

const App = () => {

  const [ keywords, dispatch ] = useReducer(reducer, []);

  const handleAdd = ( keyword: string ) => {
    dispatch({type: "ADD", keyword: keyword});
  }

  const handleDelete = ( keyword: string ) => {
    dispatch({type: "DELETE", keyword: keyword});
  }

  return (
    <InputChips 
      id={id}
      title={title} 
      tip={tip}
      placeholder={inputChips.placeholder}
      keywords={keywords}
      onDelete={handleDelete}
      onAdd={handleAdd}
    />
  );
}

export default App;

```

## 결과물

![](https://velog.velcdn.com/images/dusdjeks/post/979bc831-f884-4ec6-8f0c-a85589fc54a2/image.gif)

## 특이점

- 이걸 도입하려는 사람 입장에서 생각했을 때, 사용할 이유가 없다. 그 이유는 다음과 같다. 
- 처음에 내가 이걸 만들면 사람들이 쓸 것이라고 생각했던 지점은 기존에 존재하는 material-ui-input-chip의 UI가 마음에 들지 않았고, 
- input안에 keyword가 나열되는 형태가 이상하다고 생각했다. input은 input의 역할만 해야하지 않나? 라는 생각이었다. 
- 그리고, placeholder를 지정하고 동시에 alwaysShowPlaceholder=true를 주면 placeholder의 위치가 계속해서 바뀌는것도 이상하다고 생각이들었고, 이런 것들이 불편하다고 여겨졌다. 
- 그런데, 다시 생각해보니 사람들이 이를 쓰는 이유는 materail-ui를 쓰고 있으면서 동시에 input 안에 keyword를 넣고 싶을 때 쓰지 않을까? 라는 생각이 들었다.
- 왜 그렇게 생각했냐면, 만약 나처럼 input 바깥에 chips를 나열하고 싶으면 그냥 chip을 나열하면 되기 때문... 
- 며칠을 고민하다 이런 결론에 도달했고, 여기서 생각이 진전되지 않기 때문에 다른 라이브러리를 생각하다가 돌파구를 찾으면 다시 이 프로젝트를 진행해야겠다.

## 배운 점
- 모든 경험에는 배움이 있다. 
- 이 프로젝트를 진행하면서 material-ui-input-chip이라는 라이브러리를 아주 깊이있게 이해하게 되었고, 의문들을 issue에 올리면서 만든 사람의 입장을 이해하려 노력했다. 추가적으로 이걸 사용하려는 사람의 생각도 이해하려 노력했다. 따라서, 다음에 만들 라이브러리에서는 시행착오를 조금은 줄일 수 있겠다고 생각하게 되었다. 
- 뿐만 아니라, 나만의 라이브러리를 배포하는 방법을 알게 되었고, form, input 과 같은 기본적인 html 태그에 대해서 몰랐던 부분을 개선할 수 있었다. 그리고 내가 기존에 하던 props 네이밍에 대한 개선점을 찾을 수 있었다.  
- 그리고 컴포넌트 설계 패턴에 대해서 다시 학습하면서 compound component pattern, custom hook pattern, state reducer pattern에 대해서 다시 학습하고 적용하는 시간을 가질 수 있었다. 
