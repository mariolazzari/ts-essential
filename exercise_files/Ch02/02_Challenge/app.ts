enum ItemStatus {
  Done = "done",
  InProgress = "in-progress",
  ToDo = "todo",
}

// type ItemStatus = "done" | "in-progress" | "todo";

interface Item {
  id: number;
  title: string;
  status: ItemStatus;
  completedOn?: Date;
}

const todoItems: Item[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: ItemStatus.Done, //"done",
    completedOn: new Date("2021-09-11"),
  },
  {
    id: 2,
    title: "Learn TypeScript",
    status: ItemStatus.InProgress, //"in-progress"
  },
  {
    id: 3,
    title: "Write the best app in the world",
    status: ItemStatus.ToDo, // "todo"
  },
];

function addTodoItem(todo: string): Item {
  const id: number = getNextId(todoItems);

  const newTodo: Item = {
    id,
    title: todo,
    status: ItemStatus.ToDo, //"todo",
  };

  todoItems.push(newTodo);

  return newTodo;
}

const getNextId = <T extends { id: number }>(items: T[]): number =>
  items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
