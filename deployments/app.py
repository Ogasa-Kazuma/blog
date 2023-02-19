#!/usr/bin/env python3
import os

import aws_cdk as cdk

from deployments.deployments_stack import DeploymentsStack
from deployments.s3BucketStack import S3BucketStack
from deployments.post_article_lambda import PostArticleLambdaStack

env = "dev"
systemName = "message-app"

app = cdk.App()
DeploymentsStack(app, "DeploymentsStack")
S3BucketStack(app, "dev-message-app-s3-bucket")
PostArticleLambdaStack(app, f'{env}-{systemName}-post-article-lambda')

app.synth()
