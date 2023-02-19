from constructs import Construct
import aws_cdk as core
from aws_cdk import(
    aws_lambda,
    aws_iam,
    aws_ec2
)

class PostArticleLambdaStack(core.Stack):
    
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        
        post_article_lambda = aws_lambda.Function(
            self,
            "dev-message-app-article-post-lambda",
            function_name = "dev-message-app-post-article",
            runtime = aws_lambda.Runtime.PYTHON_3_8,
            code=aws_lambda.Code.from_asset("../deployments/deployments/lambda_handler"),
            handler = "post_article.handler"
        )