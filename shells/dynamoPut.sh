tableName=$1
messageID=$2
echo $(printf '{"messageID":{"S": "%s"}}' $messageID)
aws dynamodb put-item --table-name $tableName --item '{"messageID":{"S": "'$messageID'"}}'