import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import "./styles/app.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div className="app-wrapper">
          <AppHeader></AppHeader>
          <AppContent></AppContent>
        </div>
      </div>
      {/* display action messages */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { fontSize: "1.4rem" },
        }}
      />
    </>
  );
}

export default App;
