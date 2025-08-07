import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useTodoApi } from "./useTodoApi";
import { useTodoHelpers } from "./todoHelpers";
import { useTodoActions } from "./useTodoActions";

export const useTodoManagement = () => {
  const [todos, setTodos] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [isDeletingCompleted, setIsDeletingCompleted] = useState(false);
  const {loadFromLocalStorage, saveToLocalStorage} = useLocalStorage();
  const {fetchTodos, createTodo, updateTodo, deleteTodo} = useTodoApi();
  const {createNewTodo, sortedSavedTodos, updateTodoData, toggleTodoCompletion} = useTodoHelpers();

  useEffect(() => {
    const loadInitialData = async () => {
      const savedTodos = sortedSavedTodos(loadFromLocalStorage());

      setTodos(savedTodos);

      try {
          const serverTodos = await fetchTodos();
          const sortedServerTodos = sortedSavedTodos(serverTodos);
          setTodos(sortedServerTodos);
          saveToLocalStorage(sortedServerTodos);
      } catch (error) {
        console.error('Ошибка загрузки данных', error);
      }
    };
    loadInitialData();
  }, []);

  const actions = useTodoActions({
    todos, 
    setTodos, 
    createNewTodo, 
    createTodo, 
    saveToLocalStorage, 
    updateTodo, 
    updateTodoData,
    toggleTodoCompletion,
    deleteTodo,
    setIsDeletingCompleted
  });

  return { 
    todos, 
    setTodos, 
    deletingId, 
    setDeletingId, 
    setIsDeletingCompleted,
    isDeletingCompleted,
    ...actions,
  };
}