// Contact form validation and AJAX submission
(function() {
  var form = document.getElementById('contactForm');
  var status = document.getElementById('form-status');

  function showStatus(msg, success) {
    status.textContent = msg;
    status.style.color = success ? '#388e3c' : '#c62828';
    status.style.fontWeight = '600';
    status.style.marginTop = '1em';
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    status.textContent = '';
    var data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
      recaptcha: '' // To be filled by reCAPTCHA
    };
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      showStatus('Please fill in all required fields.', false);
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
      showStatus('Please enter a valid email address.', false);
      return;
    }
    // TODO: Integrate reCAPTCHA/hCaptcha here and set data.recaptcha
    // Example: data.recaptcha = grecaptcha.getResponse();
    // AJAX submit
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function(res) { return res.json(); })
    .then(function(res) {
      if (res.success) {
        showStatus('Thank you! Your message was received. I will try to get back to you as soon as possible.', true);
        form.reset();
      } else {
        showStatus(res.error || 'There was an error sending your message.', false);
      }
    })
    .catch(function() {
      showStatus('There was an error sending your message.', false);
    });
  });
})();
