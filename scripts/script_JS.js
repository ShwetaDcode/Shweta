        // --------------------------------------------------------

        const text = "This is My Tech Story...";
        const element = document.getElementById("typed-text");
        let index = 0;
        let isDeleting = false;
      
        function typeEffect() {
          if (!isDeleting) {
            element.textContent = text.substring(0, index++);
          } else {
            element.textContent = text.substring(0, index--);
          }
      
          if (index > text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Pause after typing
          } else if (index < 0) {
            isDeleting = false;
            setTimeout(typeEffect, 1000); // Pause after deleting
          } else {
            setTimeout(typeEffect, isDeleting ? 40 : 100);
          }
        }
      
        typeEffect();

        // -----------------------------------------------------------------------------

        function showUpdationMessage() {
            alert("This repository is currently under production. The link will be available in some time.");
        }

        // -----------------------------------------------------------------------------
