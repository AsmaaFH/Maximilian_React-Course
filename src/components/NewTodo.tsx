import { FormEvent, useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    } else {
      props.onAddTodo(enteredText);
      todoTextInputRef.current!.value = '';
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      {/* <button>Add Todo</button> */}
    </form>
  );
};

export default NewTodo;
