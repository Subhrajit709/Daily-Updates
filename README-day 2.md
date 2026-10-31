


# Daily Work Update – 30 October 2026

**Date:** 30 October 2026

----------------------------------------------------------------

## 1. Git & GitHub Essentials – Learning and Practice

### Objective
To understand Git and GitHub workflows and confidently use Git commands in daily development and team collaboration.

### Topics Covered

1. **Git & GitHub Fundamentals**
   - Understood the fundamentals of Git and GitHub.
   - Learned the difference between Git (version control system) and GitHub (cloud-based code hosting platform).

2. **Three Main Areas of Git**
   - Working Directory
   - Staging Area
   - Local Repository

3. **Essential Git Commands**
   - `git init`
   - `git status`
   - `git add`
   - `git commit`
   - `git log`

4. **Tracking Changes**
   - Learned how to track code changes using `git diff`.
   - Understood selective staging using `git add -p`.

5. **Branching in Git**
   - Learned how to create, switch, and manage branches.
   - Understood the importance of feature branches in team collaboration.

6. **Merging & Conflict Resolution**
   - Learned how to merge branches.
   - Understood why merge conflicts occur and how to resolve them.

7. **Git Ignore**
   - Learned about `.gitignore`.
   - Understood how to exclude unnecessary files and folders, such as `node_modules` and `.env`.

8. **Conventional Commits**
   - Learned standard commit message formats and their purposes:
     - `feat` – New features
     - `fix` – Bug fixes
     - `docs` – Documentation changes
     - `refactor` – Code improvements
     - `test` – Test-related changes
     - `chore` – Maintenance tasks

9. **Remote Repository Management**
   - Understood the differences between `git push`, `git pull`, and `git fetch`.

10. **Professional Git Workflow**
    - Studied the complete development workflow, from creating a feature branch to committing changes, pushing code to GitHub, and creating a Pull Request.

### Practical Learning

I'm also practicing these concepts through a separate Git practice repository to gain hands-on experience and improve my confidence in using Git from the terminal.

---

## 2. Shopify Integration for OrcaMail – Research & Planning

### Objective

Explore how OrcaMail can integrate with Shopify and become available to Shopify store owners, allowing them to connect their stores, synchronize customer data, and manage email marketing campaigns.

### Integration Approaches Explored

I researched three possible approaches:

**1. Shopify App Store Integration (Recommended)**

- Publish OrcaMail as an application on the Shopify App Store.
- Allow store owners to install and connect OrcaMail directly.
- Synchronize customers and order information with OrcaMail.
- Support email marketing automation and customer segmentation.

**2. Selling OrcaMail Plans Through a Shopify Store**

- Explore selling OrcaMail subscriptions through a Shopify storefront.
- Identified potential limitations because Shopify primarily focuses on e-commerce product sales.

**3. Shopify Buy Button Integration**

- Explore using Shopify Buy Buttons on the OrcaMail website.
- Considered this as a simpler alternative, but subscription billing could be a limitation.

### Recommended Approach

The recommended approach is to publish OrcaMail as a Shopify App Store application.

- Continue using Stripe for customers subscribing through the OrcaMail website.
- Use Shopify's billing system for merchants installing OrcaMail through the Shopify App Store, following Shopify's billing requirements.

### Proposed Integration Workflow

1. **Setup:** Create a Shopify Partner account and configure a development store.
2. **Installation:** Allow merchants to install OrcaMail and authorize the required permissions.
3. **Customer Import:** Import existing Shopify customers while respecting marketing consent.
4. **Data Synchronization:** Use Shopify webhooks to receive updates about new customers and orders.
5. **Segmentation & Automation:** Enable customer segmentation and automated campaigns, such as abandoned cart emails and recently purchased customer campaigns.
6. **Billing:** Integrate Shopify's billing system for App Store merchants.
7. **App Review:** Prepare the application for Shopify review, including privacy, data deletion, performance, and listing requirements.

### Areas Requiring Development

Most of the integration work will involve the OrcaMail application and backend.

The marketing website will require:
- A dedicated Shopify integration page.
- An "Install on Shopify" button.
- Updating the Integrations page to reflect Shopify's integration status once available.

### Dependencies & Team Requirements

- Shopify Partner account ownership.
- Access to the backend codebase.
- Backend review and implementation support.
- Assistance with deploying synchronization jobs.
- Decisions regarding Shopify pricing and privacy policy requirements.

### Potential Challenges

- Shopify App Store approval and compliance requirements.
- Proper handling of customer information and marketing consent.
- Shopify billing requirements and associated platform fees.
- Reliable synchronization of customer and order data.

### Proposed Next Steps

1. Get approval to create a Shopify Partner account and development store.
2. Review the existing OrcaMail backend architecture.
3. Build a small proof of concept covering Shopify installation, authorization, and customer import.
4. Evaluate webhook-based synchronization.
5. Plan the billing integration and App Store submission process.

---

## 3. Overall Progress

| Area | Progress |
|---|---|
| Git Fundamentals | Learned |
| Git Commands | Learned and practicing |
| Branching & Merging | Studied |
| Merge Conflict Resolution | Studied |
| GitHub Workflow | Studied |
| Shopify Integration | Researched |
| Integration Architecture | Proposed |
| Development Implementation | Next step |

### Summary

Today, I focused on strengthening my Git and GitHub knowledge for daily development activities. I also researched the possible approaches for integrating Shopify with OrcaMail, evaluated the available options, and prepared a recommended integration workflow along with the technical requirements and proposed next steps.

**Current Focus:** Practicing Git commands and understanding the implementation requirements for Shopify integration.