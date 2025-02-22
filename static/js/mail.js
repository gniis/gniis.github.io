document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("ZZLSDWRpVQ47uOfh2"); // Replace with actual EmailJS Public Key
});
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    try {
        const response = await emailjs.send("service_f3yw8gb", "template_lcn60zm", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        });
        console.log("✅ Email sent successfully!", response);
        alert("Email sent successfully!");
    } catch (error) {
        console.error("❌ Failed to send email:", error);
        alert("Failed to send email. Check the console for details.");
    }
});
        // Get visit count from local storage
        let visitCount = localStorage.getItem('visitCount');
        // If it's the first visit, set visitCount to 1
        if (!visitCount) {
            visitCount = 1;
        } else {
            visitCount = parseInt(visitCount) + 1; // Increment the visit count
        }
        // Store updated visit count in local storage
        localStorage.setItem('visitCount', visitCount);

        // Display visit count on the webpage
        document.getElementById('visitCount').textContent = visitCount;
        // Function to play a song
        function playSong(songFile, songName, posterFile, artistName, albumName) {
            const audioPlayer = document.getElementById('audio-player');
            const nowPlaying = document.getElementById('now-playing');
            const songPoster = document.getElementById('song-poster');
            const songDetails = document.getElementById('song-details');

            // Set the song source
            audioPlayer.src = songFile;

            // Update the "Now Playing" text
            nowPlaying.textContent = "Now Playing: " + songName;

            // Update the song poster
            songPoster.src = posterFile;
            songPoster.style.display = "block";

            // Update the song details
            songDetails.innerHTML = `<strong>Artist:</strong> ${artistName}<br><strong>Album:</strong> ${albumName}`;

            // Play the song
            audioPlayer.play();
        }

    // function buySong(songName, price) {
    //     let userConfirmed = confirm('Do you want to proceed with purchasing ' + songName + '?');

    //     if (userConfirmed) {
    //         alert('Redirecting to purchase page for ' + songName);
    //         window.location.href = 'purchase.html?songName=' + encodeURIComponent(songName) + '&price=' + encodeURIComponent(price);
    //     } else {
    //         alert('Purchase canceled.');
    //     }
    // }
  function buySong(songName, price) {
      // Ask user for their email
      var userEmail = prompt("Please enter your email to proceed with the download request.");

      // If the user cancels or enters an empty email, stop the process
      if (!userEmail || userEmail.trim() === "") {
          alert("Email is required to proceed.");
          return;
      }

      // Prepare the parameters for EmailJS
      var templateParams = {
          song: songName,
          price: price,
          user_email: userEmail,  // Include user's email
          message: "I want to download : " + songName + " for $" + price,
      };

      // Send email using EmailJS
      emailjs.send("service_wvya9qv", "template_x4ggdpv", templateParams)
          .then(function(response) {
              console.log("SUCCESS!", response.status, response.text);
              alert("Download request sent! We will contact you at " + userEmail);
          }, function(error) {
              console.log("FAILED...", error);
              alert("There was an error sending the email. Please try again later.");
          });
  }
