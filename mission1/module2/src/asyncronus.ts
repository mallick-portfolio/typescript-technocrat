{
  type Todo = {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonData: Todo = await rawData.json();
    console.log(jsonData);
    return jsonData;
  };
  getTodo();
}
