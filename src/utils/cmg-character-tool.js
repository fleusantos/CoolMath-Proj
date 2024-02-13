/*
  version 1.0
*/
import $ from 'jquery'

export function getCookie(key) {
  var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
}
var profile_array = JSON.parse(localStorage.getItem("userprofile"));
export function gettoken() {
  $.post("https://char-tool-img.coolmathgames.com/logintoken",
    {
      password: "9a618248b64db62d15b300a07b00580b"
    },
    function (data, status) {
      if (data.auth) {
        localStorage.setItem("authtoken", data.token);
      }
    });
}

export function cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, characterBodyColor, bgID, callback) {
  // let userid = 4436413
  let userid = null
  const cookieKey = "cmg_uid";
  var unauthorized = false;
  if (
    typeof getCookie("cmg_uid") != "undefined"
    && getCookie("cmg_uid") != null
    && getCookie("cmg_uid") != "") {
    userid = getCookie(cookieKey);
  }
  if(userid == null){
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    var randoms = Math.floor(Math.random()*90000) + 10000;
    userid = "unauthorized"+dd.toString()+ mm.toString()+yyyy.toString();
    unauthorized = true;
  }
  const { head, hair, fa, fx, top, bottom, sh } = characterBodyData
  var fd = JSON.stringify({
    "profileimage": profileimage.trim(),
    "bodyfullimage": bodyfullimage.trim(),
    "userid": userid,
    "characterBody": {
      "head": head,
      "hair": hair,
      "fa": fa,
      "fx": fx,
      "top": top,
      "bottom": bottom,
      "sh": sh
    },
    "characterBodyColor": {
      "head": characterBodyColor.head,
      "hair": characterBodyColor.hair,
      "fa": characterBodyColor.fa,
      "fx": characterBodyColor.fx,
      "top": characterBodyColor.top,
      "bottom": characterBodyColor.bottom,
      "sh": characterBodyColor.sh
    },
    "backgroundName": bgID,
  });
  $.ajax({
    url: 'https://char-tool-img.coolmathgames.com/upload-avatar',
    type: 'post',
    data: fd,
    contentType: "application/json",
    processData: false,
    headers: {
      "x-access-token": localStorage.getItem("authtoken")
    },
    success: function (response) {
      let success = false
      if (response != 0) {
        if (response.auth == false) {
          gettoken();
          cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, characterBodyColor, bgID, callback);
        } else {
          console.log('response', response);
          var message = "avataruploads";
          localStorage.setItem("cmg_avatar_profile_image", response[1]);
          localStorage.setItem("cmg_avatar_fullbody_image", response[0]);
          if(unauthorized == true){
            localStorage.setItem("unauthorized", userid);
          }
          console.log(JSON.parse(response[2]));
          var dd = JSON.parse(response[2]);
          var result = dd.characterBody[0];
          console.log("result", result);
          localStorage.setItem("charactor_body_data", JSON.stringify(result));
          setTimeout(() => {
            window.parent.postMessage(message, "*");
          },
            1000
          );
          // flag as success
          success = true
        }
      } else {
        alert('file not uploaded');
      }
      const cookieKey = "cmg_uid"
      const uploadSuccess = getCookie(cookieKey) == null ? false : true
      callback(uploadSuccess)
    }, error: function (jqXHR, exception) {
      gettoken();
      cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, characterBodyColor, bgID, callback);
    }
  });
}

// export function cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, characterBodyColor, bgID, callback) {
//   // let userid = 4436413
//   let userid = null
//   const cookieKey = "cmg_uid"

//   if (
//     typeof getCookie("cmg_uid") != "undefined"
//     && getCookie("cmg_uid") != null
//     && getCookie("cmg_uid") != "") {

//     userid = getCookie(cookieKey)
//   }

//   const { head, hair, fa, fx, top, bottom, sh } = characterBodyData
//   var fd = JSON.stringify({
//     "profileimage": profileimage.trim(),
//     "bodyfullimage": bodyfullimage.trim(),
//     "userid": userid,
//     "characterBody": {
//       "head": head,
//       "hair": hair,
//       "fa": fa,
//       "fx": fx,
//       "top": top,
//       "bottom": bottom,
//       "sh": sh
//     },
//     "characterBodyColor": {
//       "head": characterBodyColor.head,
//       "hair": characterBodyColor.hair,
//       "fa": characterBodyColor.fa,
//       "fx": characterBodyColor.fx,
//       "top": characterBodyColor.top,
//       "bottom": characterBodyColor.bottom,
//       "sh": characterBodyColor.sh
//     },
//     "backgroundName": bgID,
//   });
//   $.ajax({
//     url: 'https://char-tool-img.coolmathgames.com/upload-avatar',
//     // url: 'http://localhost:3000/upload-avatar',
//     type: 'post',
//     data: fd,
//     contentType: "application/json",
//     processData: false,
//     headers: {
//       "x-access-token": localStorage.getItem("authtoken")
//     },
//     success: function (response) {
//       let success = false

//       if (response != 0) {
//         if (response.auth == false) {
//           gettoken();
//           cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, characterBodyColor, bgID, callback);
//         } else {
//           console.log('response', response);
//           var message = "avataruploads";
//           // localStorage.setItem("my-coolmather-avatar", response);
//           localStorage.setItem("cmg_avatar_profile_image", response[1]);
//           localStorage.setItem("cmg_avatar_fullbody_image", response[0]);
//           console.log(JSON.parse(response[2]));
//           var dd = JSON.parse(response[2]);
//           var result = dd.characterBody[0];
//           console.log("result", result);
//           localStorage.setItem("charactor_body_data", JSON.stringify(result));
//           setTimeout(() => {
//             window.parent.postMessage(message, "*");
//           },
//             1000
//           );

//           // flag as success
//           success = true
//         }
//       } else {
//         alert('file not uploaded');
//       }

//       const cookieKey = "cmg_uid"
//       const uploadSuccess = getCookie(cookieKey) == null ? false : true
//       callback(uploadSuccess)
//     }, error: function (jqXHR, exception) {
//       gettoken();
//       cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, characterBodyColor, bgID, callback);
//     }
//   });
// }