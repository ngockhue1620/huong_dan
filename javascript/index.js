// array
// find => tim kiem => tra ve duy nhat 1 phan tu
// findindex => tra ve vi tri cua phan tu duoc tim thay
// map // giong voi for cung la duyet
// fillter // tim kiem nhung hen tra ve 1 cai [,]
// reduce // thuc hien thay doi gia tri hay cai chi do cua cai tham
// so tryen vao
// array object
let data = [
    {name: 'a', age:19},
    {name: 'b', age:19},
    {name: 'c', age:29},
    {name: 'c', age:13},
    {name: 'f', age:15},
    {name: 'g', age:12}
]
// for(let i =0 ; i< data.length ;i++){
    //...
// }


// find tra phan tu duoc tim thay
let result = data.find((item, index) => {
    if(item.age === 29){
        console.log(`item thu ${index}:` , item);
        return item;
    }
})
// findIndex tra ve vi tri cua phan tu duoc tim thay
let resultFindIndex = data.findIndex(item => item.name === "g" )

// map 
let resultMap = data.map(item => {
    if(item.name === "c"){
        console.log(item)
    }
})
// fillter tra ve tat ca phan tu nao ma no tim thay la dung
let resultFillter  = data.filter(item => item.name === "c")
console.log(resultFillter)

// reduce . thuong dung de thay doi du lieu

const totalAge = (first , second) => first + second.age
let resultReduce = data.reduce(totalAge,0)
console.log(resultReduce)






