function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5]
  };
  let observer = new IntersectionObserver(onEntry, options);
  
  let elementsAnimation = document.querySelectorAll('.img-2');
  for (let elm of elementsAnimation) {
    observer.observe(elm);
  }
  
  let elementsP1r = document.querySelectorAll('.img-1');
  for (let elm of elementsP1r) {
    observer.observe(elm);
  }
  
  let elementsP2r = document.querySelectorAll('.img-3');
  for (let elm of elementsP2r) {
    observer.observe(elm);
  }
  let elementsP3r = document.querySelectorAll('.img-4');
  for (let elm of elementsP3r) {
    observer.observe(elm);
  }
  let elementsP4r = document.querySelectorAll('.scroll-text1');
  for (let elm of elementsP4r) {
    observer.observe(elm);
  }
  let elementsP5r = document.querySelectorAll('.scroll_photo1');
  for (let elm of elementsP5r) {
    observer.observe(elm);
  }
  let elementsP6r = document.querySelectorAll('.scroll-text2');
  for (let elm of elementsP6r) {
    observer.observe(elm);
  }

  document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function() {
        this.querySelector('.dropdown-content').classList.toggle('show');
      });
    });
  });
  


  