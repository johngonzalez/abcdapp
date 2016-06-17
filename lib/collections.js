import {Mongo} from 'meteor/mongo';

export const Responses = new Mongo.Collection('responses');
export const Questions = new Mongo.Collection('questions');
export const Classes = new Mongo.Collection('classes');
export const Sessions = new Mongo.Collection('sessions');
export const Invitations = new Mongo.Collection('invitations');
