// Add event listener to the form submission
document.getElementById('appointment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value
    };
  
    try {
      const response = await fetch('/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      alert('Termin wurde erfolgreich vereinbart!');
    } catch (error) {
      console.error('Error:', error);
      alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
    }
});

// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      } else {
          entry.target.classList.remove('visible');
      }
  });
});

// Target elements for animations
const animatedElements = document.querySelectorAll('.animated');

// Observe each animated element
animatedElements.forEach(element => {
  observer.observe(element);
});

// Add event listener to the form submission
document.getElementById('appointment-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value
  };

  try {
    const response = await fetch('/book-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
    alert('Termin wurde erfolgreich vereinbart!');
  } catch (error) {
    console.error('Error:', error);
    alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
  }
});
// Form validation
document.getElementById('appointment-form').addEventListener('submit', function(event) {
  let name = document.getElementById('name').value;
  if (name.trim() === '') {
      event.preventDefault();
      alert('Bitte geben Sie Ihren Namen ein.'); // This is a simple alert; you might want to use a more user-friendly approach
  }
});

// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Function to open the Preisliste Modal
function openPreislisteModal(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("preisliste-modal").classList.remove("hidden");
}

// Attach event listeners to all elements with the 'preisliste-link' class
document.querySelectorAll(".preisliste-link").forEach(link => {
  link.addEventListener("click", openPreislisteModal);
});

// Close the modal when the close button is clicked
document.querySelector(".preisliste-modal .close").addEventListener("click", function() {
  document.getElementById("preisliste-modal").classList.add("hidden");
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
  var modal = document.getElementById("preisliste-modal");
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
});
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('toggle');
  document.querySelector('.nav-menu').classList.toggle('nav-active');
});
