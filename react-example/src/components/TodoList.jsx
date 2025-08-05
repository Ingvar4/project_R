import { TodoItem } from "./TodoItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const TodoList = ({todos, handleUpdate, toggleComplete, setDeletingId}) => {
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleGragEnd}>
      <SortableContext
        items={todos.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onDelete={() => setDeletingId(todo.id)} 
              onToggleComplete={toggleComplete}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default TodoList;