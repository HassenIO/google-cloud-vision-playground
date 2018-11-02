My hello world using Google Cloud Vision for text labeling. Used Node.js to send a bunch of images to GC Vision.

## Config

- Add your Google Cloud Vision JSON credentials in `credentials/` folder. Rename it to `gcp.json`. For more info about getting the credentials for Cloud Vision, [https://cloud.google.com/vision/docs/quickstart-client-libraries#client-libraries-install-nodejs](Follow this link).
- Put your sample images in `samples/` folder

Given also the previous link, don't forget to add `export GOOGLE_APPLICATION_CREDENTIALS="/path/to/project/folder/credentials/gcp.json"`
