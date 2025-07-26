let current = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
  testimonials.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) {
      card.classList.add('active');
    }
  });
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

setInterval(nextTestimonial, 6000);

