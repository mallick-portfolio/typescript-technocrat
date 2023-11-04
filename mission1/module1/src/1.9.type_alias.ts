{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };
  const student1: Student = {
    name: "Tamal Mallick",
    age: 25,
    gender: "male",
    contactNo: "0123456",
    address: "Dhaka",
  };
  type UserName = string;
  let userName: UserName = "Tamal";

  // type alias for function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => {
    return num1 + num2;
  };
}
