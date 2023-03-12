from constructs import Construct
import aws_cdk as core
from aws_cdk import(
    aws_lambda,
    aws_iam as iam,
    aws_ec2
)

class AuditResultReceiveLambdaStack(core.Stack):
    
    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        
        post_article_lambda = aws_lambda.Function(
            self,
            "dev-message-app-audit-result-receive-lambda",
            function_name = "dev-message-app-audit-result-receive-lambda",
            runtime = aws_lambda.Runtime.PYTHON_3_8,
            code=aws_lambda.Code.from_asset("../deployments/deployments/lambda_handler"),
            handler = "audit_result_receive.handler"
        )
        post_article_lambda.role.add_to_principal_policy(
            # resources = ["*"]でいいのか？
            iam.PolicyStatement(actions=["iot:CreateJob"], resources=["*"])
        )