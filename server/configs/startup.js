import {Meteor} from 'meteor/meteor';

export default function () {
  const address = Meteor.settings.MAILAddress;
  const password = Meteor.settings.MAILPassword;
  process.env.MAIL_URL = `smtp://postmaster%40${address}.mailgun.org:${password}@smtp.mailgun.org:587`;
}
