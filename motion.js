function deviceMotionRequest () {
    if (DeviceMotionEvent.requestPermission) {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener("devicemotion", function (event) {
              if (!event.accelerationIncludingGravity) {
                alert('event.accelerationIncludingGravity is null');
                return;
              }
              document.getElementById('motion_x').innerHTML = Math.round(event.accelerationIncludingGravity.x);
              document.getElementById('motion_y').innerHTML = Math.round(event.accelerationIncludingGravity.y);
              document.getElementById('motion_z').innerHTML = Math.round(event.accelerationIncludingGravity.z);
            })
          }
        })
        .catch(console.error);
    } else {
      alert('DeviceMotionEvent.requestPermission is not found')
    }
  }