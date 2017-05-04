#!/bin/bash

curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "ann@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'


echo

# sh scripts/sign-up.sh
