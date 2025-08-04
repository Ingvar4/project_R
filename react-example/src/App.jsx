import { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { AddTodo } from "./components/AddTodo";
import ToggleTheme from "./components/ToggleTheme";
import { getInitialTheme } from "./helpers/getInitialTheme";
import { toggleTheme } from "./helpers/toggleTheme";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import { useTodoManagement } from "./hooks/useTodoManagement";
import Header from "./components/Header";
import TodoList from "./components/TodoList";


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

      <div className="mx-auto flex flex-col gap-3">
        <Header/>
        <AddTodo onAdd={onAdd}/>
        <TodoList 
          todos={todos} 
          handleUpdate={handleUpdate} 
          toggleComplete={toggleComplete} 
          setDeletingId={setDeletingId}
        />
      </div>
      {deletingId && (
        <DeleteConfirmModal 
          onCancel={() => setDeletingId(null)} 
          onConfirm={() => {
            handleDelete(deletingId);
            setDeletingId(null);
          }} 
          message='Вы уверены, что хотите удалить эту задачу?'
        />
      )}

      {isDeletingCompleted && (
        <DeleteConfirmModal 
          onCancel={() => setIsDeletingCompleted(false)} 
          onConfirm={confirmDeleteCompleted} 
          message='Вы уверены, что хотите удалить все выполненые задачи?'
        />
      )}

      {hasCompletedTodos && (
        <button onClick={handleDeleteCompleted} className="px-4 py-2 mt-4 bg-red-500 text-white rounded 
              hover:bg-red-600 transition-colors cursor-pointer">Удалить выполненные</button>
      )}
    </div>
  );
}

export default App;