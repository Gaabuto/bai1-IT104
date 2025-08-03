let response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com",
    },
  },
};
let arr = ({ a, ...rest } = response.data);
console.log(...rest);
