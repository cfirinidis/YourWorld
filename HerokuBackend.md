Chris update 5/11/18

Newest update to my branch

I have integrated the back end with heroku. 

In order to run the backend on the heroku remote you need to:

1) download Heroku windows installer found here https://devcenter.heroku.com/articles/heroku-cli#download-and-install
	on macOS run brew install heroku/brew/heroku
	on linux run curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

2) run command---  heroku git:clone --app peaceful-woodland-41811

3) then cd to your new repo directory

4) run the command heroku local web

This process gives you all the backend files and allows you to run the backend app via heroku

Heroku is hosting the backend code and deploying that backend.  You cannot view the git repo here but you can view the code on a local machine. 


