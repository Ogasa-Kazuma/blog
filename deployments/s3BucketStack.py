from aws_cdk import core
from aws_cdk import aws_s3 as _s3


class S3BucketStack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # The code that defines your stack goes here
        bucket = _s3.Bucket(self, "MyFirstBucket", bucket_name="kimi-first-cdk-bucket")