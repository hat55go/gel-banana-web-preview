# Gel-Banana public review files

## Purpose
Host only the exported design preview on GitHub Pages; retain its appearance, navigation, noindex metadata, and disabled forms and booking. This is not the production company site.

## Stack and updates
Static HTML, CSS, JavaScript, images and fonts exported from the private redesign workspace. No package installation or build command is configured in this repository. Update through a feature branch and PR. The feature/publish-preview branch is the Pages source.

## Verification
Verify public page and asset URLs, logo navigation, both services, contact query prefill and blocked submission, desktop and mobile layouts. Check the deployment SHA and a public file hash after publishing. Keep the initial main branch as the scaffold.

## Boundaries
Do not add the original source tree, .git history, .env files, credentials, server-side code or internal documents. Do not connect forms, booking, analytics or the production domain. No force pushes or destructive resets. Preserve unrelated work.
