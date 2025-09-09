import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ok, bad } from '../common/response';
import { s3 } from '../common/s3';
const BUCKET = process.env.BUCKET_MEDIA || 'pawstay-media';
export const handler = async (event: any) => {
  const fileName = event.queryStringParameters?.fileName;
  const contentType = event.queryStringParameters?.contentType;
  if (!fileName || !contentType) return bad('missing params');
  const key = `uploads/${Date.now()}-${fileName}`;
  const cmd = new PutObjectCommand({ Bucket: BUCKET, Key: key, ContentType: contentType });
  const uploadUrl = await getSignedUrl(s3, cmd, { expiresIn: 900 });
  const publicUrl = `https://${BUCKET}.s3.amazonaws.com/${key}`;
  return ok({ uploadUrl, key, publicUrl });
};
