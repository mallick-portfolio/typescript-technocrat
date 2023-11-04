{
  // union type
  type FrontendDeveloper = "Fakibaz" | "Junior";
  type FullStackDeveloper = "FontendDeveloper" | "BackendDeveloper";
  type Developer = FrontendDeveloper | FullStackDeveloper;
  const newDeveloper: Developer = "BackendDeveloper";

  // intersection type
  type Frontend = {
    skills: string[];
    designation1: "Frontend developer";
  };
  type Backend = {
    skills: string[];
    designation2: "Backend developer";
  };
  type Dev = Frontend & Backend;
  let myDev: Dev = {
    skills: ["Html", "CSS"],
    designation1: "Frontend developer",
    designation2: "Backend developer",
  };

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };
}
