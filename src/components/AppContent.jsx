import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function AppContent() {
  const todoList = useSelector(state => state.todo.todoList);
  const filterStatus = useSelector(state => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter(todo => {
    if (filterStatus === "all") {
      return true;
    }
    return todo.status === filterStatus;
  });

  return (
    <div>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map(todo => <TodoItem key={todo.id} todo={todo} />)
        : "nothing"}
    </div>
  );
}
