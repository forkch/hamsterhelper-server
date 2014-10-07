/**
 * Created by fork on 07.10.14.
 */
var aws = require('aws-sdk');
var Uploader = require('s3-streaming-upload').Uploader;

module.exports = {

  store : function (file, filename) {

    var config = require('../../config/environment');
    upload = new Uploader({
      // credentials to access AWS
      accessKey: config.s3.awsAccessKey,
      secretKey: config.s3.awsSecretKey,
      bucket:     config.s3.s3BucketHamsterImages,
      objectName: filename,
      stream:     file
    });

    upload.on('completed', function (err, res) {
      console.log('upload completed');
    });

    upload.on('failed', function (err) {
      console.log('upload failed with error', err);
    });
  }
}