const arr = [1, 2, 3, 4, 5, 6]
const arr2 = [
    {
        id: 1,
        nombre: "Ornella"
    },
    {
        id: 2,
        nombre: "Martin"
    },
    {
        id: 3,
        nombre: "Oriana"
    }
]

//const result = arr.find( (el) => el === 4)
//const result = equipo.find( (el) => el.nombre === "Ornella")
//console.log(result)

//function encontrar(arr, fn) {
//   for(let i = 0; i < arr.length; i++){
//        //console.log(arr[i]);
//        //fn( arr[i] )
//       if(fn(arr[i])===true){
//            return arr[i]
//       }
//   }
//}
//encontrar(arr, (el) => console.log(el === 1))
//console.log(encontrar(equipo, (el)=>el.nombre==="Ornella"));

Array.prototype.encontrar= function(fn){
    for (let i = 0; i < this.length; i++) {
        if ( fn(this[i]) === true) {
            return this[i]
        }
    }
}