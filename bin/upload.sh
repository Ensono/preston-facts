cd build
aws lambda update-function-code --function-name PrestonFacts --zip-file fileb://lambda.zip
cd ../
