# About This Service:
This web service is built on AWS, using API Gateway, Lambda, and NodeJS v8.10.

# Using This Service:
Make an HTTP POST request to: <br> https://ag9tqmnvdj.execute-api.us-east-1.amazonaws.com/dev/contains-alphabet-service <br>
The request body should be:
```
{
  "input": "Your Input String Here!"
}
```

For successful requests, the response will appear as so:
```
{
  "success": true,
  "result": true||false
}
```
Where result is either true or false, depending on if the input string contains every letter of the alphabet atleast once. 

For invalid requests, such as requests that have invalid JSON or no request body at all, the response will appear as so:
```
{
  "success": false,
  "error": "Some error message here, relevant to the error"
}
```

# Self-Hosting This Service Yourself
This service was packaged and deployed using the Serverless framework. To quickly and easily deploy this service to your own AWS account, please execute the following commands on your CLI (assuming you have nodeJS/NPM already installed):

1. `git clone https://github.com/mullinsr/cleardata-containsAlphabet.git`
2. `cd cleardata-containsAlphabet`
3. `npm install -g serverless`
4. `serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET_KEY`
5. `serverless deploy`

Successful deploy should look like:
```
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (1.56 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............
Serverless: Stack update finished...
Service Information
service: contains-alphabet-service
stage: dev
region: us-east-1
stack: contains-alphabet-service-dev
api keys:
  None
endpoints:
  POST - https://your-unique-api-gateway-url/for-this-service
functions:
  contains-alphabet-service: contains-alphabet-service-dev-contains-alphabet-service
```
