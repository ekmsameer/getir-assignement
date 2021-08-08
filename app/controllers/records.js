

import moment from 'moment'
const Records = require('../models/records');


let handleError = (res, statusCode) => {
    statusCode = statusCode || 500;
    return (err) => {
        let error = {
            code: statusCode, 
            msg: err.message, 
        }
        res.status(statusCode).send(error);
    };
};
function sum(a, b) {
    return a + b;
}

let getRecords = (req, res) =>{
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const minCount = req.body.minCount;
    const maxCount = req.body.maxCount;
    const dateFormat = 'YYYY-MM-DD'
    //validate required parameter is missing
    if(!startDate || !endDate || !minCount || !maxCount){
        return handleError(res, 400)({message: 'Required parameter missing'})
    }
    // checking date is valid format using moment
    // else if(!moment(startDate, dateFormat, true).isValid() || !moment(endDate, dateFormat, true).isValid()){
    //     return handleError(res, 400)({message: 'Invalid date format! Please check startDate/endDate, Format should be YYYY-MM-DD'})
    // }
    //validate minCount/maxCount should be number
    else if (typeof(minCount) != 'number' || typeof(maxCount) != 'number'){
        return handleError(res, 400)({message: 'Parameter minCount/maxCount should be number'})
    }
    return Records.aggregate([
        {
            $match: { 
                createdAt: { 
                    $gte: new Date(startDate), 
                    $lt: new Date(endDate)
                }
            }
        },
        { 
            $project : { 
                totalCount : { 
                    $sum : "$counts"
                }, 
                createdAt : 1, 
                key : 1,
                _id: 0
            }
        }, 
        { 
            $match : { 
                totalCount : { 
                    $gte : minCount, 
                    $lte : maxCount
                }
            }
        }
    ]).exec((err, records) => {
        if (err) return handleError(res, 500)(err)
        const response = {
            code: 0, 
            msg: "Success", 
            records: records
        }
        return res.json(response)
    });
}
module.exports = {
    getRecords,
    sum
};