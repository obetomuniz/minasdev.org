import aws from "aws-sdk"

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const s3 = new aws.S3()

export default async (name) => {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve(require(`../fixtures/data/${name}`))
  }

  return new Promise((resolve, reject) => {
    s3.getObject(
      {
        Bucket: process.env.S3_BUCKET,
        Key: name,
      },
      (err, data) => {
        if (err) reject(err)
        else resolve(JSON.parse(data.Body.toString("utf-8")))
      }
    )
  })
}
