   var btn_click = document.querySelector(".call-back");
    var popup = document.querySelector(".call-back-form");
    var close = document.querySelector(".modal-close");


    btn_click.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("call-back-show");
    });

    close.addEventListener("click", function (evt)  {
      evt.preventDefault();
      popup.classList.remove("call-back-show");
    });

    window.addEventListener("keydown", function (evt) {
      if  (evt.keyCode === 27)  {
        if (popup.classList.contains("call-back-show")) {
          popup.classList.remove("call-back-show");
        }
      }
    });

    