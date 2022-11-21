import "../styles/item.scss";
import { format } from "date-fns/esm";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/todoSlice";
import toast from "react-hot-toast";
import TodoModal from "./TodoModal";
import { useEffect, useState } from "react";
import ButtonCheck from "./ButtonCheck";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };

  const handleEdit = () => {
    setUpdateModalOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };

  return (
    <>
      <div className="item">
        <div className="item-details">
          <ButtonCheck checked={checked} handleCheck={handleCheck} />
          <div className="item-content">
            <p
              className={`item-text ${
                // this checks if todo is complete, and applies additional class
                todo.status === "complete" && "item-text--completed"
              }`}
            >
              {todo.title}
            </p>
            <p className="item-time">
              {todo.time}
              {/* {format(new Date(todo.time), "p, dd MMM yyyy")} */}
            </p>
          </div>
        </div>
        <div className="item-actions">
          <MdDelete
            className="icon"
            onClick={handleDelete}
            role="button"
            tabIndex={0}
          />
          <MdEdit
            className="icon"
            onClick={handleEdit}
            role="button"
            tabIndex={0}
          />
        </div>
      </div>

      <TodoModal
        // this will update text to 'Update' instead of 'Add'
        type="update"
        oldTodo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
}
