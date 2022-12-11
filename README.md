# input-chips
Contributions of any kind welcome!
## Motivation
This project provides a input with chips. It is inspired by [material-ui-chip-input](https://www.npmjs.com/package/material-ui-chip-input)

But this package is deprecated, and I wanted a different design.

I thought the form with chips inside the input was inappropriate and it was strange that the position of the placeholder kept changing.

If you want to try the component yourself instead of watching a gif, head over to the storybook for a live demo !

## Installation

```js
npm i input-chips
```

## Point Of Focus
- Pretty UI 

- Easy use

- Eliminate the bug from material-ui-chip-input where Korean is entered twice
![](https://velog.velcdn.com/images/dusdjeks/post/77db6d3b-6be7-4c3c-9ec3-8a0c5b093add/image.gif)

- Improving developer experience through tsdoc and storybook

## [npm address](https://www.npmjs.com/package/input-chips)

## Usage

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

## Result

![](https://velog.velcdn.com/images/dusdjeks/post/4d2bf199-0679-4e01-8a36-7f08960d65f9/image.gif)


## Properties
|Name|Type|Default|Description|
|---|---|---|---|
|id|`string`||string key for input-label coupling
|title|`string`||enter your input label
|tip|`string`||enter tip for using input. It's located next to title.
|placeholder|`string`||enter the placeholder showed by input
|keywords|`string[]`||it will return pretty chips
|onAdd|`function(arg0: string)`||this will send you a keyword, so you should manage it using hook like useState.
|onDelete|`function(arg0: string)`||this will send you a keyword, so you should manage it using hook like useState.
|disabled|`boolean`||true if you want to make disable input
|autoFocus|`bool`||A Boolean attribute which, if present, indicates that the input should automatically have focus when the page has finished loading
|maxLength|`number`||It defines the maximum number of characters
|minLength|`number`||It defines the minimum number of characters
|name|`string`||A string specifying a name for the input control.
|readonly|`boolean`||A Boolean attribute which, if present, indicates that the user should not be able to edit the value of the input.
|required|`boolean`||required is a Boolean attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted.