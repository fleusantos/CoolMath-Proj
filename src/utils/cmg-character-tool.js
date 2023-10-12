/*
  version 1.0
*/
import $ from 'jquery'

export function getCookie(key) {
  var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
  return keyValue ? keyValue[2] : null;
}
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
export function cmgSaveAvatar(filename,filename1) {
  var fd = JSON.stringify({
    "datas": filename.trim(),
    "data1": filename1.trim(),
    "userid": getCookie("cmg_uid")
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
      if (response != 0) {
        if (response.auth == false) {
          gettoken();
          cmgSaveAvatar(filename);
        } else {
          var message = "avataruploads";
          localStorage.setItem("my-coolmather-avatar", response);
          setTimeout(() => {
              window.parent.postMessage(message, "*");
            },
            1000
          );
        }
      } else {
        alert('file not uploaded');
      }
    }, error: function (jqXHR, exception) {
      gettoken();
      cmgSaveAvatar(filename);
    }
  });
}