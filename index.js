const vision = require('@google-cloud/vision');

const extractText = async fileName => {
  const client = new vision.ImageAnnotatorClient();
  try {
    const textDetection = await client.textDetection(fileName);
    text = textDetection[0].fullTextAnnotation.text;
    console.log('Text:', text);
  } catch (error) {
    console.log('Error:', error);
  }
};

const remoteImage =
  'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg';
const localImage = './samples/example.png';
extractText(remoteImage);
extractText(localImage);
