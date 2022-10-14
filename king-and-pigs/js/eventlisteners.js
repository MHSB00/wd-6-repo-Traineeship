window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "w":
        if (player.velocity.y === 0) {
          player.velocity.y = -25;
        }
        break;
      case "a":
        keys.a.pressed = true;
        break;
      case "s":
        break;
      case "d":
        keys.d.pressed = true;
        break;
  
      default:
        break;
    }
  });
  
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "w":
        if (player.velocity.y === 0) {
          player.velocity.y = -25;
        }
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "s":
        break;
      case "d":
        keys.d.pressed = false;
        break;
  
      default:
        break;
    }
  });