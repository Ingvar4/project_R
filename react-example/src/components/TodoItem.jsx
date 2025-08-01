
export const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  const handleToggle = () => {
    onToggleComplete(todo.id)
  };

  return (
    <div className="group flex items-center justify-between p-4
    gap-3 bg-white dark:bg-page-dark rounded-lg h-12 
    shadow-sm hover:shadow-md transition-shadow duration-300
    border border-gray-100">
      <div className="flex items-center gap-3">
        <button 
          onClick={handleToggle}
          className={`p-1 rounded-full border-2 cursor-pointer ${
            todo.completed 
              ? 'border-green-500 bg-green-500' 
              : 'border-gray-300 hover:border-gray-400'
            } transition-colors duration-300`}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${
              todo.completed ? "text-white" : "text-transparent"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          </button>
        <span
          className={`text-1 ${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {todo.text}
        </span>

        <div className="flex flex-col">
          <span className="text-xs text-gray-400">
            Создано:{' '}
            {new Date(todo.createdAt).toLocaleString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          {todo.deadline && (
          <span
            className={`text-xs ${
              todo.completed
                ? 'text-gray-400'
                : new Date(todo.deadline) < new Date()
                ? 'text-red-500'
                : 'text-gray-500'
            }`}
          >
            Сделать до:{' '}
            {new Date(todo.deadline).toLocaleString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        )}
        </div>

      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 
        transition-all duration-300 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}