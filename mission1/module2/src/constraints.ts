{
  //

  type Student = { name: string; age: number; id: number };
  const addStudent = <T extends Student>(student: T) => {
    let course = "Next level developer";
    return {
      ...student,
      course,
    };
  };

  let student1 = addStudent({
    id: 1,
    name: "Tamal",
    age: 25,
    ja: "skddjf",
  });
  let student2 = addStudent({
    id: 1,
    name: "Tamal",
    age: 25,
    ja: "skddjf",
  });
}
