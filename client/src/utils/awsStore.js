const AWS = require('aws-sdk');
const fs = require('fs');

// Configure AWS credentials
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_REGION' // e.g., 'us-east-1'
});

// Create S3 instance
const s3 = new AWS.S3();

// Function to upload image to S3
function uploadImageToS3(imagePath, bucketName, keyName) {
  const fileContent = fs.readFileSync(imagePath);

  const params = {
    Bucket: bucketName,
    Key: keyName,
    Body: fileContent
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Error uploading image to S3:', err);
        reject(err);
      } else {
        console.log('Image uploaded successfully:', data.Location);
        resolve(data.Location);
      }
    });
  });
}

// Example usage
const imagePath = 'path/to/your/image.jpg';
const bucketName = 'rapidroad-images';
const keyName = 'image.jpg';

uploadImageToS3(imagePath, bucketName, keyName)
  .then(location => {
    console.log('Image uploaded to S3 location:', location);
  })
  .catch(error => {
    console.error('Error:', error);
  });