(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.getElementById('primary-navigation');

  if (navToggle && navigation) {
    navToggle.addEventListener('click', function () {
      const isOpen = navigation.classList.toggle('is-open');

      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-open', isOpen);
    });

    navigation.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navigation.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        navigation.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) {
        navigation.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  }
})();

(function () {
  const config = window.EMAILJS_CONFIG;

  if (!config) {
    console.error(
      'EmailJS config is missing. Check config/emailjs-config.js'
    );
    return;
  }

  const {
    publicKey,
    serviceId,
    templateId,
    options = {},
  } = config;

  if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
    console.warn('EmailJS public key has not been configured yet.');
  }

  if (!serviceId || serviceId === 'YOUR_SERVICE_ID') {
    console.warn('EmailJS service ID has not been configured yet.');
  }

  if (!templateId || templateId === 'YOUR_TEMPLATE_ID') {
    console.warn('EmailJS template ID has not been configured yet.');
  }

  emailjs.init({
    publicKey,
    ...options,
  });

  const form = document.getElementById('contact-form');

  if (!form) {
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');

  const originalButtonText = submitButton
    ? submitButton.textContent
    : 'Send Request';

  const setButtonState = function (text, disabled) {
    if (!submitButton) {
      return;
    }

    submitButton.textContent = text;
    submitButton.disabled = disabled;
  };

  const showFormStatus = function (message, isError) {
    let statusEl = form.querySelector('.form-status');

    if (!statusEl) {
      statusEl = document.createElement('p');
      statusEl.className = 'form-status';
      statusEl.setAttribute('role', 'status');
      statusEl.setAttribute('aria-live', 'polite');
      form.appendChild(statusEl);
    }

    statusEl.textContent = message;
    statusEl.className = isError
      ? 'form-status error'
      : 'form-status success';
  };

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const isUnconfigured =
      !publicKey ||
      publicKey === 'YOUR_PUBLIC_KEY' ||
      !serviceId ||
      serviceId === 'YOUR_SERVICE_ID' ||
      !templateId ||
      templateId === 'YOUR_TEMPLATE_ID';

    if (isUnconfigured) {
      showFormStatus(
        'Email form is not configured yet.',
        true
      );
      return;
    }

    setButtonState('Sending...', true);
    showFormStatus('Sending your request...', false);

    try {
      await emailjs.sendForm(serviceId, templateId, form);

      form.reset();
      setButtonState('Sent!', true);

      showFormStatus(
        'Your request was sent successfully. We will get back to you soon.',
        false
      );

      window.setTimeout(function () {
        setButtonState(originalButtonText, false);
      }, 2500);
    } catch (error) {
      console.error('EmailJS error:', error);

      setButtonState('Error - Try Again', false);

      showFormStatus(
        'Something went wrong while sending your request. Please try again.',
        true
      );

      window.setTimeout(function () {
        setButtonState(originalButtonText, false);
      }, 2500);
    }
  });
})();
