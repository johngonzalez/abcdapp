import {Slingshot} from 'meteor/edgee:slingshot';
import {Meteor} from 'meteor/meteor';

export default function () {
  // Slingshot: Package to upload files to cloud
  Slingshot.fileRestrictions('uploadToS3', {
    allowedFileTypes: [ 'image/png', 'image/jpeg', 'image/jpg' ],
    maxSize: 1 * 1024 * 1024
  });

  Slingshot.createDirective('uploadToS3', Slingshot.S3Storage, {
    bucket: 'mimentor',
    region: 'sa-east-1',
    acl: 'public-read',
    authorize: () => true,
    key: (file) => `${Meteor.uuid()}_${file.name}`
  });
}
