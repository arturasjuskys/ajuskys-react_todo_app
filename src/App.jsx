import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import "./styles/app.scss";

function App() {
  return (
    <div className="container">
      <PageTitle>Todo List</PageTitle>
      <div className="app-wrapper">
        <AppHeader></AppHeader>
        <AppContent></AppContent>
      </div>
    </div>
  );
}

export default App;
