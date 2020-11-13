# SFDX-Scratch-Org-Login-URL-Action

This action will generate a Scratch Org URL that can be used as a clickable link for reviewers on a PR.

## Example usage

```yaml
name: SFDX Test Run on Push

on: [push]

jobs:
  test:

    runs-on: ubuntu-latest

    steps:
        # Install Salesforce CLI
        - name: Install Salesforce CLI
          run: |
            wget https://developer.salesforce.com/media/salesforce-cli/sfdx-linux-amd64.tar.xz
            mkdir sfdx-cli
            tar xJf sfdx-linux-amd64.tar.xz -C sfdx-cli --strip-components 1
            ./sfdx-cli/install

        # Checkout the code in the pull request
        - name: 'Checkout source code'
        uses: actions/checkout@v2

        # Create Comment with Scratch Org URL
        - name: Add Comment with Scratch Org URL
          id: login
          uses: dyno-dev/sfdx-scratch-org-login-url-action

        # Add Comment with Scratch Org URL
        - uses: marocchino/sticky-pull-request-comment@v2
          with:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            message: |
              Review package - [Scratch Org](${{steps.login.outputs.login-url}})
```

## License

```
MIT License

Copyright (c) 2019 Felipe Echanique Torres (felipe.echanique at gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
