function openNav() {
    document.getElementById("closeNav").style.display="inline-block";
    document.getElementById("openNav").style.display="none";
    var nav = document.querySelector('.nav-links');
    nav.style.display = 'block';
    // nav.style.display = 'flex';
  }

  function closeNav() {
    document.getElementById("openNav").style.display="inline-block";
    document.getElementById("closeNav").style.display="none";
    var nav = document.querySelector('.nav-links');
    nav.style.display = 'none';
  }


  function closeMessage() {
    document.getElementById("closeable-message").style.display="none";
    document.getElementById("nav-toggle").style.top="65px";
  }

 