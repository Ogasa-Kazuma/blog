#!/usr/bin/env python3
import os

import aws_cdk as cdk

from deployments.deployments_stack import DeploymentsStack
from deployments.s3BucketStack import S3BucketStack
from deployments.post_article_lambda import PostArticleLambdaStack
from deployments.api_gateway_post_article import APIGatewayPostArticleStack
from deployments.iot_job_template import IotJobTemplateStack
from deployments.audit_result_receive_lambda import AuditResultReceiveLambdaStack

env = "dev"
systemName = "message-app"

app = cdk.App()
DeploymentsStack(app, "DeploymentsStack")
S3BucketStack(app, "dev-message-app-s3-bucket")
PostArticleLambdaStack(app, f'{env}-{systemName}-post-article-lambda')
APIGatewayPostArticleStack(app, f'{env}-{systemName}-post-article-api')
IotJobTemplateStack(app, f'{env}-{systemName}-iot-job-template')
AuditResultReceiveLambdaStack(app, f'{env}-{systemName}-audit-result-receive-lambda')

app.synth()
