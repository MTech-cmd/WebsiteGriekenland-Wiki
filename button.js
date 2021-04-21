const btn = document.querySelector(".btn-toggle");
      const theme = document.querySelector("#theme-link");
      btn.addEventListener("click", function() {
        if (theme.getAttribute("href") == "dark.css") {
          theme.href = "light.css";
        } else {
          theme.href = "dark.css";
        }
      });
