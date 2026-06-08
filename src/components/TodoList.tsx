import { useState } from "react";

type Todo = {
  id: Date;
  text: string;
  checked: boolean;
};

export default function TodoList() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (): void => {
    if (input === "") return;
    const todo_item: Todo = {
      id: new Date(),
      text: input,
      checked: false,
    };
    setTodos([...todos, todo_item]);
    setInput("");
  };

  // 1. del_index의 타입을 Date에서 number로 수정
  const delTodo = (del_index: number) => {
    const newTodos = todos.filter((todo, idx) => {
      return idx !== del_index; // 2. == 대신 엄격한 일치 연산자 !== 사용
    });
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2>할 일 목록</h2>
      <div className="input-container">
        {/* 3. changeInput을 setInput으로 변경 */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo.text}
            <button
              onClick={() => {
                delTodo(index);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}