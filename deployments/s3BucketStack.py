from aws_cdk import core
from aws_cdk import aws_s3 as s3
from aws_cdk import aws_s3_deployment as s3_deploy



class S3BucketStack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # The code that defines your stack goes here
        bucket = s3.Bucket(self, "MyFirstBucket", bucket_name="kimi-first-cdk-bucket")
        s3_deploy.BucketDeployment(self, "DeployWebsite",
            sources=[s3_deploy.Source.asset("./job_doc/JobDocument.json")],
            destination_bucket=bucket,
            destination_key_prefix="iot/jobs"
        )
