import {DocHead} from 'meteor/kadira:dochead';

export default function () {
  // head
  DocHead.setTitle('abcdapp');
  DocHead.addMeta({name: 'viewport', content: 'width=device-width, initial-scale=1.0'});
}
