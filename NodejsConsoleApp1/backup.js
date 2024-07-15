const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    region: 'YOUR_AWS_REGION'
});
const bucketName = 'business-backups';

const backupData = async (req, res) => {
    try {
        const data = req.body.data;
        const fileName = `backup-${Date.now()}.json`;
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: data,
            ContentType: 'application/json'
        };
        await s3.upload(params).promise();
        res.status(200).send(`Backup created with name ${fileName}`);
    } catch (error) {
        res.status(500).send('Error creating backup');
    }
};

module.exports = { backupData };
