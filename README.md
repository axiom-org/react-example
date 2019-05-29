This is an example of how to use React and Axiom together.

The Axiom documentation uses this app as an example. Check out the docs for [Building an Application](/docs/#docs-build).

## Development

To develop your app locally, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To bundle your application into static files, run:

### `npm run build`

This will create a static bundle in the `build` folder.

To deploy your application onto Axiom, you have to upload the
`build` folder to a decentralized bucket. First, create
a bucket. You can check the [docs on creating a bucket](http://localhost:8080/docs/#docs-start-creating-a-bucket) if you don't have a bucket already. Then run:

### `axiom upload build <your-bucket-name>`

You can check it out by installing the [Axiom Authenticator](https://chrome.google.com/webstore/detail/axiom-authenticator/gpogeambflkelepdkgnpaicifglhlgbb) and browsing to `your-bucket-name.axiom`.
