import aws from "aws-sdk"

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET } = process.env

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
})

const s3 = new aws.S3()

export default async (name) => {
  return new Promise((resolve, reject) => {
    s3.getObject(
      {
        Bucket: S3_BUCKET,
        Key: name,
      },
      (err, data) => {
        if (err) reject(err)
        else resolve(data.Body.toString("utf-8"))
      }
    )
  })
}
