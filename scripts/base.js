
  function openNav() {
    document.getElementById("closeNav").style.display="inline-block";
    document.getElementById("openNav").style.display="none";
    var nav = document.querySelector('nav');
    nav.style.display = 'block';
    nav.style.display = 'grid';
  }

  function closeNav() {
    document.getElementById("openNav").style.display="inline-block";
    document.getElementById("closeNav").style.display="none";
    var nav = document.querySelector('nav');
    nav.style.display = 'none';
  }

