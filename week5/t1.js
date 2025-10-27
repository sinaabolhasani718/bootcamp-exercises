const user = prompt("you are email");
const userName = user.split("@");
const fullName = userName[0];
if (user.includes("@gmail.com") && userName[0] !== "") {
  alert(`you are name : ${fullName}`);
} else {
  alert(`soryyy`);
}