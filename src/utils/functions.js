import {detect} from 'detect-browser'

export default function generateRandomId() {
 let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
 let idLength = 6;
 let randomId = '';

 for (let i = 0; i < idLength; i++) {
   randomId += characters.charAt(Math.floor(Math.random() * characters.length));
 }

 return 'id-' + randomId;
}

export const svgToPng = (svgDataurl, width, height) => new Promise((resolve, reject) => {
  let canvas;
  let ctx;
  let img;

  img = new Image();
  img.src = svgDataurl;
  img.onload = () => {
    canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);

    img = new Image();
    img.src = canvas.toDataURL('image/png');
    img.onload = () => {
      canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    }
  };
});

export const detecter = () => detect()
export const isIOS = () => detect().name == 'safari' || detect().name == 'ios' || detect().name == 'crios'
export const isIphone = () => detect().os == 'iOS' && (detect().name == 'ios' || detect().name == 'crios')
export const isAndroid = () => detect().os == 'Android OS'