const contactPathButtons = document.querySelectorAll('[data-contact-path]');
const contactForm = document.getElementById('inquiry');
const inquiryType = document.getElementById('inquiry-type');
const contactFormTitle = document.getElementById('contact-form-title');
const contactFormDescription = document.getElementById('contact-form-description');
const projectFieldLabel = document.getElementById('project-field-label');
const projectField = document.getElementById('inquiry-project');
const inquirySubmit = document.getElementById('inquiry-submit');

const contactModes = {
  project: {
    type: 'Project inquiry',
    title: 'Start your project',
    description: 'Tell us what you need. Anchor will confirm the scope, timeline, and pricing.',
    label: 'What would you like to build?',
    placeholder: 'For example: a website, inventory system, or business automation tool',
    submit: 'Send Project Details'
  },
  quote: {
    type: 'Quote request',
    title: 'Request a quote',
    description: 'Share the basics and Anchor will reply with a clear estimate and next step.',
    label: 'What would you like quoted?',
    placeholder: 'For example: a website, inventory system, or business automation tool',
    submit: 'Request My Quote'
  },
  mockup: {
    type: 'Free mockup request',
    title: 'Request a free mockup',
    description: 'Tell us about your business and the problem you want the concept to solve.',
    label: 'What should the mockup demonstrate?',
    placeholder: 'For example: customers browsing products, checking stock, and ordering through WhatsApp',
    submit: 'Request My Mockup'
  }
};

contactPathButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const mode = contactModes[button.dataset.contactPath];
    if (!mode || !contactForm) return;

    inquiryType.value = mode.type;
    contactFormTitle.textContent = mode.title;
    contactFormDescription.textContent = mode.description;
    projectFieldLabel.textContent = mode.label;
    projectField.placeholder = mode.placeholder;
    inquirySubmit.textContent = mode.submit;

    contactPathButtons.forEach((item) => {
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('is-selected');
    button.setAttribute('aria-pressed', 'true');
    contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => document.getElementById('inquiry-name')?.focus({ preventScroll: true }), 500);
  });
});
