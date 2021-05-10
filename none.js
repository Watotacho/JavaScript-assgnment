class Mkulima{
   constructor(product,vendor,farms){
       this.product=product;
       this.vendor=vendor;
       this.farms=farms;
   }

   addFarm(farmerId,farmerName,phoneNumber,address){
       var ShadowRoot={
           farmerId:farmerId,
           farmerName:farmerName,
           address:address,
           farmerName:farmerName,
           phoneNumber:phoneNumber

       }
       this.farms.push(ShadowRoot)
       return this.farms
}
removeFarm(farmerId){
    let newFarm=this.farms.find(newFarm=>newFarm.farmerId==farmerId)
    return delete this.farms[newFarm]

}
updateFarm(farmerId,farmerName,phoneNumber,address){
    let theFarm=this.farms.find(theFarm=>theFarm.farmerId==farmerId);
     theFarm={
        farmerId:farmerId,
        farmerName:farmerName,
        phoneNumber:phoneNumber,
        address:address,
        farmerName:farmerName,

    }
    return theFarm

}
getFarm(farmerId){
   let theFarm=this.farms.find(theFarm=>theFarm.farmerId==farmerId)
   return theFarm
}
addProduct(productId,name,price,){
    var p={
        productId:productId,
        name:name,
        price:price
}
    this.products.push(p)
    return this.products
}
 removeProductId(productId){
        let remove=this.products.find(remove=>remove.removeProductId==productId)
        return delete this.products[remove]
    }
updateProduct(productId,name,price){
        let update=this.products.find(update=>productId==productId)
        update={
            productId:productId,
            name:name,
            price:price,
        }
        return update
    }
getProduct(productId){
        let newProduct=this.products.find(newProduct=>newProduct.productId==productId)
        return newProduct
    }
 printProduct(){
        for(let items of this.products){
            console.log(items.name + "," + items.price)
        }
    }
calculateOrderCost(productId,quality){
 }
}
let mkulima=new Mkulima([],[],[]);
console.log(mkulima.addFarm(345678,"james","0789564932","3467","same"))
console.log(mkulima.addFarm(345678,"stella","0745673289","4532","scheme"))
console.log(mkulima.addFarm(35678,"sarah","076845632","2345","some"))

console.log(mkulima.removeFarm(3456))
console.log(mkulima.updateFarm(3456789,"grace","0789456234","3467","farmer"))
console.log(mkulima.getFarm(34567))
console.log(mkulima.addProduct(234,"cassava",123))
console.log(mkulima.addProduct(245,"onion",257))
console.log(mkulima.addProduct(122,"pawpaw",235))
console.log(mkulima.removeProductId(236))
console.log(mkulima.updateProduct(2345,"tomato",600))
console.log(mkulima.getProduct(467))
console.log(mkulima.printProduct())

