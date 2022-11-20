import "../styles/modal.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";

export default function TodoModal({ modalOpen, setModalOpen }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const handleSubmit = e => {
    e.preventDefault();
    console.log({ title, status });
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
              <h1 className="form-title">Add Task</h1>

              <label htmlFor="title">
                Title
                <input
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
                  Add Task
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
