const promsie = require("promise");

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("nikhil");
    }, 3000);
  });
}
function getAge() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("29");
    }, 2000);
  });
}
 
async function user() {
   
  const name = await getName()
  console.log(name);
  
}
user()