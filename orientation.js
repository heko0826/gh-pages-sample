function deviceOrientationRequest () {
    if (DeviceOrientationEvent.requestPermission) {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener("deviceorientation", function (event) {
              if (!event) {
                alert('event is null');
                return;
              }
              document.getElementById('orientation_x').innerHTML = Math.round(event.beta);
              document.getElementById('orientation_y').innerHTML = Math.round(event.gamma);
              document.getElementById('orientation_z').innerHTML = Math.round(event.alpha);
            })
          }
        })
        .catch(console.error);
    } else {
      alert('DeviceMotionEvent.requestPermission is not found')
    }
  }