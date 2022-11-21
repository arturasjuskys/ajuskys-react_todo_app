import "../styles/modal.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../store/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

export default function TodoModal({ type, modalOpen, setModalOpen, oldTodo }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && oldTodo) {
      setTitle(oldTodo.title);
      setStatus(oldTodo.status);
    } else {
      // sets add values to default
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, oldTodo, modalOpen]);

  const handleSubmit = e => {
    e.preventDefault();

    if (title === "") {
      toast.error("Please Enter Title");
      // to prevent two error messages
      return;
    }

    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            // time: new Date(),
            time: new Date().toLocaleString(),
          })
        );

        // display success messageon the screen
        toast.success("Task Added Successfully");
      }

      if (type === "update") {
        if (oldTodo.title !== title || oldTodo.status !== status) {
          dispatch(
            updateTodo({
              ...oldTodo,
              title,
              status,
            })
          );
        } else {
          toast.error("No Changes Made");
          // fixes modal close issue
          return;
        }
      }
      setModalOpen(false);
    } else {
      toast.error("Title field should not be empty");
    }
  };

  return (
    <>
      {/* if modal state us true => visible */}
      {/* else hidden */}
      {modalOpen && (
        <div className="modal-wrapper">
          <div className="modal-container">
            <div
              className="close-button"
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button"
            >
              <MdOutlineClose />
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <h1 className="form-title">
                {type === "update" ? "Update " : "Add "} Task
              </h1>

              <label htmlFor="title">
                Title
                <input
                  autoFocus
                  type="text"
                  id="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </label>

              <label htmlFor="status">
                Status
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>

              <div className="button-container">
                <Button type="submit" variant="primary">
                  {type === "update" ? "Update " : "Add "} Task
                </Button>
                <Button
                  type="submit"
                  variant="secondary"
                  onClick={() => setModalOpen(false)}
                  onKeyDown={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
