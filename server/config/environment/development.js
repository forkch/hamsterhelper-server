'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/hamsterhelper-dev'
  },

  seedDB: false,
  //filestorage : require('../../components/filestorage/s3.js'),
  filestorage : require('../../components/filestorage/local.js'),
  s3: {
    awsAccessKey: process.env.AWS_ACCESS_KEY,
    awsSecretKey: process.env.AWS_SECRET_KEY,
    s3BucketHamsterImages: process.env.S3_BUCKET_HAMSTER_IMAGES
  }
};
