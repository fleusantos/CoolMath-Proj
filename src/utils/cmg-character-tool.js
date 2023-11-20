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

export function cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, callback) {
  let userid = null
  const cookieKey = "cmg_uid"

  if (
    typeof getCookie("cmg_uid") != "undefined"
    && getCookie("cmg_uid") != null
    && getCookie("cmg_uid") != "") {
      
    userid = getCookie(cookieKey)
  }

  const { head, hair, fa, fx, top, bottom, sh } = characterBodyData
  var fd = JSON.stringify({
    "profileimage": profileimage.trim(),
    "bodyfullimage": bodyfullimage.trim(),
    "userid": userid,
    "characterBody": {
      "head": head,
      "hair": hair,
      "fa":  fa,
      "fx": fx,
      "top": top,
      "bottom": bottom,
      "sh": sh
    }
  });
  $.ajax({
    url: 'https://char-tool-img.coolmathgames.com/upload-avatar',
    //url : 'http://localhost:3000/upload-avatar',
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
          cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, callback);
        } else {
          console.log('response', response);
          var message = "avataruploads";
          // localStorage.setItem("my-coolmather-avatar", response);
          localStorage.setItem("cmg_avatar_profile_image", response[0]);
          localStorage.setItem("cmg_avatar_fullbody_image", response[1]);
          localStorage.setItem("charactor_body_data", JSON.stringify(response[2]));
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
      cmgSaveAvatar(profileimage, bodyfullimage, characterBodyData, callback);
    }
  });
}





