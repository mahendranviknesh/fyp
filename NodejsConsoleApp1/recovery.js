const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    region: 'YOUR_AWS_REGION'
});
const bucketName = 'business-backups';

const recoverData = async (req, res) => {
    try {
        const fileName = req.query.file;
        const params = {
            Bucket: bucketName,
            Key: fileName
        };
        const data = await s3.getObject(params).promise();
        res.status(200).send(data.Body.toString());
    } catch (error) {
        res.status(500).send('Error recovering data');
    }
};

module.exports = { recoverData };
