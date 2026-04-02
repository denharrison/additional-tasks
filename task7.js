const items = [
  { name: "A", type: "tool", active: true },
  { name: "B", type: "tool", active: false },
  { name: "C", type: "part", active: true },
];

const criteria = { type: "tool", active: true };

const findByCriteria = (obj1, criteria) => {

   let result = obj1.find((element) => element.type === criteria.type && element.active === criteria.active )
         
    return result

   }
   

console.log(findByCriteria(items, criteria));