import uuid
from constructs import Construct
from aws_cdk import (
    # Duration,
    aws_iot as iot,
    aws_iam as iam,
    Stack,
    # aws_sqs as sqs,
)

class IotJobTemplateStack(Stack):

    def __init__(self, scope: Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)
        
        assume_role_document = iam.PolicyDocument(
            statements=[
                iam.PolicyStatement(
                    actions=["sts:AssumeRole"],
                    principals=[iam.ServicePrincipal("iot.amazonaws.com")],
                )
            ]
        )
        get_job_doc_role = iam.CfnRole(
        self,
        "get-job-doc",
        assume_role_policy_document = assume_role_document,
        # managed_policy_arns = [
        #     "arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess"
        # ],
        policies=[
            iam.CfnRole.PolicyProperty(
                policy_document = iam.PolicyDocument(
                    statements=[
                        iam.PolicyStatement(
                            actions=["s3:GetObject"],
                            resources=[
                                "arn:aws:s3:::dev-message-app-bucket/iot/*"
                            ],
                        )
                    ]
                ),
                policy_name = f'get-bucket-iot',
            )
        ]
        )
        cfn_job_template = iot.CfnJobTemplate(self, "MyCfnJobTemplate",
            description="cert_rotation",
            job_template_id=str(uuid.uuid4()),
        
            document_source="s3://dev-message-app-bucket/iot/JobDocument.json",
            presigned_url_config={
              "ExpiresInSec" : 3600,
              "RoleArn" : get_job_doc_role.attr_arn
            },

        )