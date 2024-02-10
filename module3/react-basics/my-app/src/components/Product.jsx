
export default function Product(){
    let products = [{id:789,name:"Laptop",price:"20k"},
                    {id:654,name:"Mobile",price:"30k"},
                    {id:439,name:"VR",price:"10k"},
                    {id:353,name:"Headphones",price:"5k"},
                    {id:235,name:"Charger",price:"30k"}]
    return(
        <>
            {
             products.map(function(product){
                return <div key={product.id} > Name: {product.name} 
                        and Price : {product.price} </div>
             })   
            }
        </>
        
        //output of map similiar to this and it shows on UI
        // [
        // <div>{products[0].name}</div>,
        // <div>{products[1].name}</div>,
        // <div>{products[2].name}</div>,
        // <div>{products[3].name}</div>,
        // <div>{products[4].name}</div>
        // ]
    )
}