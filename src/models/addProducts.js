const conn = require("../db/conn");
module.exports.addProduct = function(req,res){
    var today = new Date();
    console.log("body",req.body);
    const productValues = {
        "product_id" : req.body.product_id,
        "product_title" : req.body.product_title,
        "product_handle" : req.body.product_handle,
        "product_created_at " : today ,
        "product_updated_at" : today,
        "product_published_scope" : req.body.product_published_scope,
        "product_inventory_item_id" : req.body.product_inventory_item_id,
        "product_inventory_quantity" : req.body.product_inventory_quantity,
        "variant_id" : req.body.variant_id,
        "variant_title" : req.body.variant_title,
        "variant_price" : req.body.variant_price,
        "variant_sku" : req.body.variant_sku,
        "variant_barcode" : req.body.variant_barcode,
        "variant_weight" : req.body.variant_weight,
        "variant_weight_unit" : req.body.variant_weight_unit,
        "variant_option1_name" : req.body.variant_option1_name,
        "variant_option1" : req.body.variant_option1,
        "variant_option2_name" : req.body.variant_option2_name,
        "variant_option2" : req.body.variant_option2,
        "variant_option3_name" : req.body.variant_option3_name,
        "variant_option3" : req.body.variant_option3,
        "variant_image" : req.body.variant_image
    }

    conn.query('INSERT INTO shopify_App_lyn_all_products SET ?',productValues, function (error, results, fields) {
        if (error) {
            res.json({
              status:false,
              data:error,
              message:'there are some error with query'
            })
        }else{
            res.json({
              status:true,
              data:results, 
              message:'user registered sucessfully'
            })
        }
    });
}