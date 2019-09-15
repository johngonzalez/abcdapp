# abcdapp
A application to create and answer multiple selection question

# Run using meteor
## 1. Install dependences:
meteor npm install

## 2. Run:
meteor --settings settings.json

### 2.1. Settings File:
This contains private informations with follow structure:
```{json}
{
  "AWSAccessKeyId": "Accesskey",
  "AWSSecretAccessKey": "SecretAccessKey",
  "MAILAddress": "sandboxSecret",
  "MAILPassword": "Password",
  "galaxy.meteor.com": {
     "env": {
       "MONGO_URL": "mongodb://johngonzalez:password@key.mlab.com:port/mimentor"
     }
   },
   "DOMAIN_URL": "yourapp.meteorapp.com"
}

```
