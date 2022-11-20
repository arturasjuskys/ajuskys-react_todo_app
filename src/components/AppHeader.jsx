import React, { useState } from "react";
import Button from "./Button";
import ButtonSelect from "./ButtonSelect";
import TodoModal from "./TodoModal";

export default function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app-header">
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <ButtonSelect id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </ButtonSelect>

      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
