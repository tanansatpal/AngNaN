var existing= [
  { name : "John", values_:{id:1, cat:true} },
  {  name : "Alice", values_:{id:2, cat:false} }
];

var newdata= [
  { name : "Mike", properties:{id:7, cat:true} },
  {  name : "Jenny", properties:{id:2, cat:false} }
];

existing.forEach((existingitem, existingindex, existingfeatures) => {
  newdata2 = newdata.filter(item => (existingitem.values_.id != item.properties.id &&  existingitem.values_.cat != item.properties.cat));
});

// var newdata2= [
//   { name : "Mike", properties:{id:7, cat:true} }
// ];
console.log(newdata2)
