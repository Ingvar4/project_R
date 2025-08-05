import { useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { getInitialTheme } from "./helpers/getInitialTheme";
import { toggleTheme } from "./helpers/toggleTheme";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import { useTodoManagement } from "./hooks/useTodoManagement";
import DeleteCompletedButton from "./components/DeleteCompletedButton";
import MainContent from "./components/MainContent";

function App() {
  const [theme, setTheme] = useState(getInitialTheme());

  const {
    todos, 
    deletingId, setDeletingId, setIsDeletingCompleted, isDeletingCompleted,
    onAdd, 
    handleUpdate, 
    toggleComplete, 
    handleDelete,
    handleDeleteCompleted, 
    confirmDeleteCompleted, 
    hasCompletedTodos, 
  } = useTodoManagement();

  return (
    <div 
      data-theme={theme} 
      className="flex flex-col min-h-screen justify-center items-center 
      bg-page-light dark:bg-page-dark p-6"
    >
      <ToggleTheme toggleTheme={() => toggleTheme(setTheme)} theme={theme}/>

      <MainContent 
        onAdd={onAdd}
        todos={todos}
        handleUpdate={handleUpdate} 
        toggleComplete={toggleComplete} 
        setDeletingId={setDeletingId}
      />

      <DeleteConfirmModal 
        deletingId={deletingId}
        onCancel={() => setDeletingId(null)} 
        onConfirm={() => {
          handleDelete(deletingId);
          setDeletingId(null);
        }} 
        message='Вы уверены, что хотите удалить эту задачу?'
      />
    
      <DeleteConfirmModal isDeletingCompleted={isDeletingCompleted}
        onCancel={() => setIsDeletingCompleted(false)} 
        onConfirm={confirmDeleteCompleted} 
        message='Вы уверены, что хотите удалить все выполненые задачи?'
      />
      
      <DeleteCompletedButton 
        onClick={handleDeleteCompleted}
        hasCompletedTodos={hasCompletedTodos}
      />
    </div>
  );
}

export default App;