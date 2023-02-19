from aws_cdk import (
    # Duration,
    Stack,
    aws_lambda,
    aws_apigateway as apigateway
    # aws_sqs as sqs,
)
from deployments.s3BucketStack import S3BucketStack
from constructs import Construct

env = "dev"
systemName = "message-app"

class APIGatewayPostArticleStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        
        api = apigateway.LambdaRestApi(self, f'{env}-{systemName}-api-gateway-post-article',
            handler=aws_lambda.Function.from_function_arn(
                self,
                f'{env}-{systemName}-article-post-lambda',
                "arn:aws:lambda:ap-northeast-1:216518755561:function:dev-message-app-post-article"),
            proxy=True
        )
        
        articles = api.root.add_resource("articles")
        articles.add_method("POST") # POST /articles
    
