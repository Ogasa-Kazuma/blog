from aws_cdk import (
    # Duration,
    Stack,
    # aws_sqs as sqs,
)
from deployments.s3BucketStack import S3BucketStack
from constructs import Construct

class DeploymentsStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        

        # The code that defines your stack goes here

        # example resource
        # queue = sqs.Queue(
        #     self, "DeploymentsQueue",
        #     visibility_timeout=Duration.seconds(300),
        # )
