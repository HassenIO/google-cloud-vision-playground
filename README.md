My hello world using Google Cloud Vision for text labeling. Used Node.js to send a bunch of images to GC Vision.

## Config

- Add your Google Cloud Vision JSON credentials in `credentials/` folder. Rename it to `gcp.json`. For more info about getting the credentials for Cloud Vision, [https://cloud.google.com/docs/authentication/getting-started](Follow this link)
- Given also the previous link, don't forget to add `export GOOGLE_APPLICATION_CREDENTIALS="/path/to/project/folder/credentials/gcp.json"`. Or just run `./setup.sh` in the root of project folder
- Put your sample images in `samples/` folder

## Source

https://cloud.google.com/vision/docs/detecting-text#vision-text-detection-nodejs
