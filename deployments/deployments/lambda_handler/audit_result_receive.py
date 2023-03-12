import json
import boto3

def handler(event, context):
    client = boto3.client('iot')
    client.create_job(
        jobId='id111',
        targets=[
            'arn:aws:iot:ap-northeast-1:216518755561:thinggroup/test-group',
        ],
        description='cert_rotation_job',
        targetSelection='CONTINUOUS',
        jobTemplateArn='arn:aws:iot:ap-northeast-1:216518755561:jobtemplate/d43c07e8-ae67-4750-81b3-0f01931cee8f',
    )
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
