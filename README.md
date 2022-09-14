# verification
Simple test server

I'm just using this try out setting up a server on AWS.

Log into the ec2 instance ssh -i <key name> ec2-user@<IP address>
  
cd to the repo
  
To get the app working with port 3000, and have the server running in the background, use pm2:
  
  pm2 start app.js (or npm run start-watch)
 
  Then navigate to
  
  http://3.26.184.200:3000/
  
  
  Stop the pm2 process with pm2 stop app.js (or npm run stop)


Currently working through https://aws.plainenglish.io/deploying-a-nodejs-application-in-aws-ec2-c1618b9b3874


