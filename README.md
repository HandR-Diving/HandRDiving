# Hull & Recovery Diving Website

Official website for **Hull & Recovery Diving**, a diving services company specializing in hull inspection and cleaning, lost-item recovery, and light salvage throughout the Great Lakes region and Florida Keys.

This project provides the business with a lightweight, public-facing website for presenting its services, establishing an online presence, and receiving general inquiries and job requests.

## Live Site

The website is hosted using GitHub Pages.

**Website:** [H&R Diving](https://handr-diving.github.io/HandRDiving/)

GitHub Pages deployment source:

```text
Branch: main
Folder: / (root)
```

## Services Presented

The website provides information about services including:

* Boat and vessel hull inspections
* Hull cleaning and underwater maintenance
* Lost-item recovery
* Recovery of keys, wallets, phones, cameras, GoPros, and similar items
* Light salvage and underwater object recovery
* General diving-service inquiries

## Overview

This is a lightweight, responsive website built with plain HTML, CSS, and JavaScript.

The project was designed to provide a professional web presence with minimal hosting costs, straightforward maintenance, and a simple deployment workflow. It also includes an EmailJS-powered contact form for customer inquiries and job requests.

## Features

The current version includes:

* Responsive desktop and mobile layout
* Service descriptions
* General inquiry and job-request contact form
* EmailJS browser-side form submission
* Click-to-call phone link
* Mailto email link
* GitHub Pages deployment
* Lightweight static architecture with no dedicated backend server

## Tech Stack

* HTML
* CSS
* JavaScript
* GitHub Pages
* EmailJS

## Branch Structure

| Branch  | Purpose                                              |
| ------- | ---------------------------------------------------- |
| `main`  | Live GitHub Pages deployment branch                  |
| `prod`  | Staged, production-ready version awaiting deployment |
| `other` | Active development and proposed website improvements |

The `main` branch represents the version currently published through GitHub Pages. Changes can be developed and tested on another branch before being promoted to `prod` and then deployed to `main`.

## Deployment

GitHub Pages is configured to deploy from:

```text
Branch: main
Folder: / (root)
```

### Deployment Workflow

1. Make and test changes on the appropriate working branch.
2. Commit and push the completed changes.
3. Merge or fast-forward the approved version into `prod`.
4. Verify the production-ready version.
5. Merge or fast-forward `prod` into `main`.
6. Push `main` to GitHub.
7. GitHub Pages automatically rebuilds and publishes the website.

Example:

```bash
git switch main
git merge --ff-only prod
git push origin main
```

## EmailJS Configuration

The website uses EmailJS for browser-side contact-form submissions without requiring a dedicated backend server.

EmailJS browser-side configuration is stored in:

```text
config/emailjs-config.js
```

Example configuration:

```js
window.EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
};
```

The contact-form fields are mapped to the following EmailJS template variables:

* `name`
* `email`
* `phone`
* `message`

> **Security note:** Only the EmailJS public key should be included in frontend code. Never place private keys, account passwords, administrative credentials, or other sensitive information in this repository.

## Project Structure

```text
/
├── assets/
│   └── images/
│       └── ...
├── config/
│   └── emailjs-config.js
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── index.html
└── README.md
```

## Future Improvements

Potential future improvements include:

* Add a completed-project and recovery gallery
* Add hull inspection and cleaning photographs
* Configure a custom domain
* Improve local search engine optimization
* Create or integrate a Google Business Profile
* Add a map or defined service-area section
* Improve image compression and website performance
* Add structured data for local-business search visibility
* Add customer testimonials
* Add frequently asked questions
* Add service-specific inquiry options
* Add analytics and contact-form conversion tracking

## License and Use

This project is proprietary and is not licensed for reuse, redistribution, modification, commercial deployment, or the creation of derivative works.

The repository is public for business visibility, portfolio demonstration, technical documentation, and project transparency. Public access to the repository and its source code does not grant permission to copy, reuse, redistribute, modify, publish, or commercially deploy any portion of this project without written permission from the repository owner.

Business names, branding, logos, photographs, written content, and other business-specific materials remain the property of their respective owners.

## Project Credit

Website design, frontend implementation, repository configuration, branch and deployment workflow, GitHub Pages deployment, and EmailJS contact-form integration were completed by [Alex Schlotterer](https://github.com/aschlot2).
