var connection = require("../db/conn");

module.exports.productList=function(req,res){
    console.log(req.body);
    
    table = req.body.table,
    columns = req.body.columns    
    
    connection.query(`SELECT ${columns} FROM ${table}  `,function(err,results,feilds){

        if(err){
            res.json({
                status : false,
                data : err,
                message : 'There is some error in response'
            })
        }else{
            if(results.length > 0){                
                res.json({
                    status : true,
                    data :  results                        
                })                
            }else{
                res.json({
                    status : false,
                    message : "User not found, Please try again"
                })
            }

        }        
    } );
}


