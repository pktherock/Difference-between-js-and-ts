function addTwoNum(num1: number, num2: number) {
  return num1 + num2;
}

const result = addTwoNum(5, 10); // 5

console.log(result);

interface userModel {
  name: String;
  age: number;
  addr?: string;
}

const user: userModel = {
  name: 'prashant',
  age: 30,
  addr: 'kahalgow',
};

const arrayOfUsers: userModel[] = [
  {
    name: 'prashant',
    age: 30,
    addr: 'Kahalgow',
  },
  {
    name: 'shubham',
    age: 30,
    addr: 'Kahalgow',
  },
];
