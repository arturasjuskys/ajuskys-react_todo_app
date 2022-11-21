import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../store/todoSlice";
import Button from "./Button";
import ButtonSelect from "./ButtonSelect";
import TodoModal from "./TodoModal";

export default function AppHeader() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector(state => state.todo.filterStatus);

  const updateFilter = e => {
    dispatch(updateFilterStatus(e.target.value));
    console.log("updating filter");
  };

  return (
    <div className="app-header">
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <ButtonSelect id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </ButtonSelect>

      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
