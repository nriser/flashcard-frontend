#!/bin/bash

curl --include --request PATCH http://localhost:4741/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "hi"
    }
  }'

echo


# ID=18 TOKEN=BAhJIiVlNmQyNzI2ZDg4YTJlZjg2ZTVjMDFmZTM0YzAyNTNkOAY6BkVG--0c60800e7e514bfeb73e7d14f3788ea0e5d784a8 sh scripts/change-password.sh
