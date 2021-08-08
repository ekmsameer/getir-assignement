# Getir Assignement
A simple restful NodeJS CRUD, with expressJS and mongoDB.

## Resources

- Node.Js
- Express.Js
- MongoDb
- Mongoose
- Postman
- BodyParser

## Routes

|          ROUTE            |       HTTP        |      DESCRIPTION      | 
| ------------------------- | ----------------- | --------------------- | 
| /record                   |       POST        | Get records based on filter| 

## Request Payload
The request payload will include a JSON with 4 fields.
“startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You should filter the data using “createdAt”
“minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the documents should be between “minCount” and “maxCount”.

Sample:
```json
{
	"startDate": "2017-01-26",
	"endDate": "2017-02-02",
	"minCount": 10,
	"maxCount": 3000.98
}
```

## Response Payload

Sample:
```json
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 310
        },
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 170
        },
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 120
        }
    ]
}
```

## Running

```
npm install
```
npm start
```
npm run dev
```


## Author

Mohamed Sameer
