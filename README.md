Preston Facts
=======================
## Introduction

Random facts about Preston

## Dev

**Prerequisites**

* [Node] (https://nodejs.org/)
* [yarn] (https://yarnpkg.com/)

* `yarn` This will install all required development packages as well as run-time package requirements inside `src`. Packages inside `src` are published to AWS.

## Run unit tests

* `yarn test`

## Deploy

**Prerequisites**

* AWS CLI via [brew] (https://github.com/hydrajump/homebrew/blob/ec1379d4df6e436142ef3f84d56eb68a62dd7ffa/Library/Formula/awscli.rb) or [pip] (http://docs.aws.amazon.com/cli/latest/userguide/installing.html)

* `yarn deploy` This will zip up the lambda function and deploy it to AWS

## Publish new version

* Ensure all changes are merged to `master` branch
* Update version number with `yarn version <version>`
* Update release history below with new version number & description
* Commit & push above changes to `master`
* Push tag: `git push origin v<version>`
* Log into AWS console and publish a new version of the lambda
* `yarn deploy` This will zip up the lambda function and deploy it to AWS

## Release History

* 0.1.0 Create repo

## Road map