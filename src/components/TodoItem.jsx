import "../styles/item.scss";
import { format } from "date-fns/esm";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";
import toast from "react-hot-toast";
import TodoModal from "./TodoModal";
import { useState } from "react";

export default function TodoItem({ todo }) {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };
  const handleEdit = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <div className="item">
        <div className="item-details">
          [ ]
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
              {format(new Date(todo.time), "p, dd MMM yyyy")}
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
