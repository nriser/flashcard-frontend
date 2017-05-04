#!/bin/bash

curl --include --request DELETE http://localhost:4741/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"


echo


# ID=18 TOKEN=BAhJIiVlNmQyNzI2ZDg4YTJlZjg2ZTVjMDFmZTM0YzAyNTNkOAY6BkVG--0c60800e7e514bfeb73e7d14f3788ea0e5d784a8 sh scripts/sign-out.sh
