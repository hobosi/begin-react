import { produce } from 'immer';

// 객체 업데이트
const state = {
  number: 1,
  dontChangeMe: 2
};

const nextState = produce(state, draft => {
  draft.number++;
})

console.log(nextState);

// 함수 업데이트
const todo = {
  text: 'hello',
  done: false
};

const updater = produce(draft => {
  draft.done = !draft.done;
});

const nextTodo = updater(todo);

console.log(nextTodo);
