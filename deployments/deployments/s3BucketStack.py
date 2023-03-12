from aws_cdk import aws_s3 as _s3
from aws_cdk import aws_s3_deployment as s3_deploy
from constructs import Construct
from aws_cdk import (
    # Duration,
    Stack,
    # aws_sqs as sqs,
)
class S3BucketStack(Stack):

    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # The code that defines your stack goes here
        bucket = _s3.Bucket(self, "MyFirstBucket", bucket_name="dev-message-app-bucket")
        s3_deploy.BucketDeployment(self, "DeployWebsite",
            sources=[s3_deploy.Source.asset("./job_doc")],
            destination_bucket=bucket,
            destination_key_prefix="iot"
        )
        