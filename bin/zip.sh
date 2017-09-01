mkdir -p build
rm -rf build/lambda.zip
cd src
zip -r ../build/lambda.zip . -x *package.json* -x *__tests__* -x *yarn.lock*
cd ../
