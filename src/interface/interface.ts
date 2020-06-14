// Todo interface
export interface TodoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
  }
  // Todo form interface
  export interface TodoFormInterface {
    handleUpdateList: (todo: TodoInterface) => void;
  }
  // Todo list interface
  export interface TodoListInterface {
    handleComplete: (id:string) => void;
    todoList: TodoInterface[]
  }
