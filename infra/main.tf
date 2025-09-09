terraform {
  required_version = ">= 1.6.0"
  required_providers { aws = { source = "hashicorp/aws", version = "~> 5.0" } }
}
provider "aws" { region = var.region }

variable "region" { type = string }
variable "stripe_secret_key" { type = string, default = "" }
variable "stripe_webhook_secret" { type = string, default = "" }
variable "bucket_media" { type = string, default = "pawstay-media" }
variable "os_domain_name" { type = string, default = "pawstay-os" }

module "cognito"   { source = "./modules/cognito" }
module "s3"        { source = "./modules/s3"  bucket_media = var.bucket_media }
module "dynamodb"  { source = "./modules/dynamodb" }
module "opensearch"{ source = "./modules/opensearch" domain_name = var.os_domain_name }
module "lambdas"   {
  source = "./modules/lambdas"
  bucket_media = var.bucket_media
  os_endpoint  = "https://example.com" # replace with module.opensearch.endpoint
  stripe_secret_key = var.stripe_secret_key
  stripe_webhook_secret = var.stripe_webhook_secret
}
module "apigw"     { source = "./modules/apigw" }
module "appsync"   { source = "./modules/appsync" }

output "notes" { value = "Fill real implementations in modules/*; this is a skeleton." }
