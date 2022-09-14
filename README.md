# verification
Simple test server

I'm just using this try out setting up a server on AWS.

cd to your key (or just use the relative path from your current location).

Double check your current IP address from the ec2 info (Public IPV4)

Log into the ec2 instance ssh -i name-of-key(pem)-file ec2-user@current-ip-address
  
cd to the repo
  
To get the app working with port 3000, and have the server running in the background, use pm2:
  
  pm2 start app.js (or npm run start-watch)
 
  Then navigate to
  
  http://3.26.184.200:3000/
  
  
  Stop the pm2 process with pm2 stop app.js (or npm run stop)


Currently working through https://aws.plainenglish.io/deploying-a-nodejs-application-in-aws-ec2-c1618b9b3874


