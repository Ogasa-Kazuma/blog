from aws_cdk import aws_s3 as _s3
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
        