function view(columns_count) {
    switch (columns_count) {
        case 1:
            document.getElementById("myGallery").classList = "gallery1";
            document.getElementById("button1").classList.remove("column-button-pressed");
            document.getElementById("button2").classList.remove("column-button-pressed");
            document.getElementById("button3").classList.remove("column-button-pressed");
            document.getElementById("button4").classList.remove("column-button-pressed");
            document.getElementById("button5").classList.remove("column-button-pressed");
            document.getElementById("button1").classList.add("column-button-pressed");
            break;
        case 2:
            document.getElementById("myGallery").classList = "gallery2";
            document.getElementById("button1").classList.remove("column-button-pressed");
            document.getElementById("button2").classList.remove("column-button-pressed");
            document.getElementById("button3").classList.remove("column-button-pressed");
            document.getElementById("button4").classList.remove("column-button-pressed");
            document.getElementById("button5").classList.remove("column-button-pressed");
            document.getElementById("button2").classList.add("column-button-pressed");
            break;
        case 3:
            document.getElementById("myGallery").classList = "gallery3";
            document.getElementById("button1").classList.remove("column-button-pressed");
            document.getElementById("button2").classList.remove("column-button-pressed");
            document.getElementById("button3").classList.remove("column-button-pressed");
            document.getElementById("button4").classList.remove("column-button-pressed");
            document.getElementById("button5").classList.remove("column-button-pressed");
            document.getElementById("button3").classList.add("column-button-pressed");
            break;
        case 4:
            document.getElementById("myGallery").classList = "gallery4";
            document.getElementById("button1").classList.remove("column-button-pressed");
            document.getElementById("button2").classList.remove("column-button-pressed");
            document.getElementById("button3").classList.remove("column-button-pressed");
            document.getElementById("button4").classList.remove("column-button-pressed");
            document.getElementById("button5").classList.remove("column-button-pressed");
            document.getElementById("button4").classList.add("column-button-pressed");
            break;
        case 5:
            document.getElementById("myGallery").classList = "gallery5";
            document.getElementById("button1").classList.remove("column-button-pressed");
            document.getElementById("button2").classList.remove("column-button-pressed");
            document.getElementById("button3").classList.remove("column-button-pressed");
            document.getElementById("button4").classList.remove("column-button-pressed");
            document.getElementById("button5").classList.remove("column-button-pressed");
            document.getElementById("button5").classList.add("column-button-pressed");
            break;
        default:
            break;
    }
  
  
  }