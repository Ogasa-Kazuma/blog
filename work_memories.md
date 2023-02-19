
message読み取り用 Lambda


プレースホルダとは
* https://qiita.com/pinecode1/items/cc4826e546d6231e1d2b
* message tableを参照するAPIのAPI Gateway
    * https://ap-northeast-1.console.aws.amazon.com/apigateway/home?region=ap-northeast-1#/apis/ctuvwoyayc/resources/59mmom/methods/GET
* LambdaからのレスポンスはAPI Gateway用の形式で返す必要がある
    * https://aws.amazon.com/jp/premiumsupport/knowledge-center/malformed-502-api-gateway/
* API Gateway経由でLambdaを呼び出した際に Internal server errorとなる原因
    * https://aws.amazon.com/jp/premiumsupport/knowledge-center/malformed-502-api-gateway/
* lambdaからDynamoDB Tableにデータを登録する
    * https://confrage.jp/lambdanode-js%E3%81%8B%E3%82%89dynamodb%E3%81%AE%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B/
* メッセージ登録lambda
    * https://ap-northeast-1.console.aws.amazon.com/lambda/home?region=ap-northeast-1#/functions/dev-message-app-post-message?newFunction=true&tab=code]

* PC 台　肩こり　引き出し
    * https://www.amazon.co.jp/FITUEYES-%E6%9C%BA%E4%B8%8A%E3%83%A9%E3%83%83%E3%82%AF-%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC%E5%8F%B0-%E5%B9%85425mm-DT204201WO/dp/B07X3R9QTY/ref=sr_1_29?adgrpid=118064499046&hvadid=620429536703&hvdev=c&hvqmt=b&hvtargid=kwd-4618123911&hydadcr=22321_13408320&jp-ad-ap=0&keywords=%E3%83%91%E3%82%BD%E3%82%B3%E3%83%B3%E5%8F%B0&qid=1676784106&s=computers&sr=1-29
* Lambda mindmap
    * https://gitmind.com/app/docs/mg6lrjvr
* CDK マインドマップ
    * https://gitmind.com/app/docs/mo9hmavb
* PutItemとUpdateItemの違い
    * https://www.bing.com/search?q=dynamo+%E4%B8%8A%E6%9B%B8%E3%81%8D&cvid=779df45344604ed2b6236a6ba54bc2c3&aqs=edge..69i57.2847j0j4&FORM=ANAB01&PC=LCTS
* Lambda側でNo CORSを設定する方法
    * https://zenn.dev/masaino/articles/dd9ee709799af0#%E3%81%A9%E3%81%86%E3%81%99%E3%82%8C%E3%81%B0%E3%81%84%E3%81%84%E3%81%AE%E3%81%8B%EF%BC%9F
* イベント発生時(onClickなど)に呼び出される関数に引数を渡しておく方法
    * https://github.com/Ogasa-Kazuma/blog/blob/main/pages/posts/first-post.tsx#L42
* next.jsのfetchメソッドでbodyやHTTPメソッドを設定する方法
    * https://stackoverflow.com/questions/56892082/how-to-fix-typeerror-failed-to-fetch
* next.jsからmessageをPOSTする
    * https://github.com/Ogasa-Kazuma/blog/commit/1bd6468e098ada63ea07a40fc07f68dd94316280
* なぜCDKにはnodeが必要なのか？
    * https://qiita.com/kimisaki/items/5906b15e39384c33450b#nodejs%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
* Python CDKによるLambda実装の最低限のコード
    * スタック: https://github.com/Ogasa-Kazuma/blog/blob/main/deployments/deployments/post_article_lambda.py#L9
    * handler: https://github.com/Ogasa-Kazuma/blog/blob/main/deployments/deployments/lambda_handler/post_article.py
* CDK APIGateway Lambdaプロキシ統合
    * https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_apigateway/LambdaRestApi.html
* CDKで上手にLambdaとPythonを組み合わせる方法
    * https://dev.classmethod.jp/articles/apig-and-lambda-best-stack-configuration-with-aws-cdk/
* ARNからLambda Functionをimportする方法
    * https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_lambda/Function.html#aws_cdk.aws_lambda.Function.from_function_arn
* AWS コンソールでAPI Gateway + Lambdaを作成
    * https://qiita.com/tamura_CD/items/46ba8a2f3bfd5484843f
* GET/message Lambda
    * https://ap-northeast-1.console.aws.amazon.com/lambda/home?region=ap-northeast-1#/functions/test_access_message_table?tab=code
* POST/article Lambda
    * https://ap-northeast-1.console.aws.amazon.com/lambda/home?region=ap-northeast-1#/functions/dev-message-app-post-article?tab=configure

##### API Gateway エラー
* APIのデプロイは行ったか？

### GitHub
* Blog リポジトリ
    * https://github.com/Ogasa-Kazuma/blog

### 2022/02/19
どうやらエラーハンドリングされてないと、Lambda内でDynamoの操作とかでエラーでてもAPI Gatewayから200帰ってきちゃうっぽい
LambdaからNo CORSのヘッダーを付ける方式だと、Lambdaまで届かなかった場合のエラーを受け取ることが出来なくなる

## 疑問点
コンテナからどうやってLambdaを呼び出してる？トリガは？
Lambdaのエンドポイントタイプとは
無題のマップ.jpg
* .\..\..\Users\knct0\Downloads\無題のマップ.jpg
verification lambdaの

### issue
post-messageのlambdaからどのdynamo tableにもputできるポリシーがついてる(resource "*")