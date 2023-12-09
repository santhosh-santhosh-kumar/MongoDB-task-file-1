/* 1. Find all the information about each products*/
    db.products.find({}, { _id: 0 });

/* 2. Find the product price which are between 400 to 800*/

    db.projects.find({
        $and:[
            {product_price:{$gt:400}},
            {product_price:{$lt:800}}
        ]
    })


/* 3.Find the product price which are not between 400 to 600*/

    db.projects.find({
        $or:[
            {product_price:{$lt:400}},
            {product_price:{$gt:600}}
        ]
    })


/* 4. List the four product which are greater than equal 500 in price */

db.projects.find({product_price:{$gte:500}})

/* 5 .Find the product name and product material of each products */

    db.projects.find({},{product_name:1,product_material:1,_id:0})

/* 6 .Find the product with a row id of 10 */
    
    db.projects.find({id:"10"})

/* 7. Find only the product name and product material */

    db.projects.find({},{product_name:1,product_material:1})

/* 8. Find all products which contain the value of soft in product material */

    db.projects.find({ product_material: "Soft" })

/* 9. Find products which contain product color indigo  and product price 492.00 */

    db.projects.find({$or:[{ product_color: "indigo" },{product_price:492}]})

/* 10 .Delete the products which product price value are same */

    db.Product.deleteMany({ "product_price": { $eq: db.products.distinct("product_price") } })