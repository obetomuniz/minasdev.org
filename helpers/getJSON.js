import aws from "aws-sdk"

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  S3_BUCKET,
  NODE_ENV,
} = process.env

aws.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
})

const s3 = new aws.S3()

export default async (name) => {
  if (NODE_ENV === "development") {
    return Promise.resolve(require(`../fixtures/data/${name}`))
  }

  return new Promise((resolve, reject) => {
    s3.getObject(
      {
        Bucket: S3_BUCKET,
        Key: name,
      },
      (err, data) => {
        if (err) reject(err)
        else resolve(JSON.parse(data.Body.toString("utf-8")))
      }
    )
  })
}
