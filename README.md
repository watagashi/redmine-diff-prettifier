# Redmine Diff Prettifier

## What's this?

This is Chrome Extension to changes diff style on Redmine Wiki.

-   Change to Monospace font.
-   Disable soft wrap.
-   Remove extra line breaks.

Both Textile and Markdown are supported, but it is particularly effective for Markdown.

## Usage

1.  Clone from this repository.

2.  Setup `node_modules`

    `yarn` or `npm install`

3.  Make private key.

    `yarn run keygen` or `npm run keygen`

4.  Build scripts and crx.

    `yarn run build` or `npm run build`

5.  Install Extension to Web browser

    -   Vivaldi, Opera, etc... (based on Chromium)

        1.  Open extension tab.

        2.  Drag and drop crx file.

    -   Google Chrome

        Chrome extension cannot be installed from outside Chrome Web Store.
        Therefore install script sources.

        1.  Open extension tab.

        2.  Change developer mode.

        3.  Drag and drop `build` directory.

## Scripts

-   `yarn run build` or `npm run build`

    Make crx file to `dist` directories.

-   `yarn run clean` or `yarn run clean`

    Erase files in `dist` and `build` directories.

-   `yarn run keygen` or `npm run keygen`

    Make private key to `cert` directory.
