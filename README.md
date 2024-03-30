# GOR EXPLORER

This is a fork of Kaspa explorer used for the Gor network project
[https://gordanet.explorer.com](https://gordanet.explorer.com)
written in JS with React.JS library.



## Deployment

For deploying the block explorer make sure that nodejs build
environment is set up by running `npm --version`. The build requires
to configure the following mandatory environment variables:

* `REACT_APP_API_ADDRESS` which is the public address of the
  REST API endpoint.
* `REACT_APP_KGI_ADDRESS` which is the public address of the
  graph inspector to inspect a specific block.

The API endpoint and Graph Inspector must operate on a web server
secured with SSL.

Optionally you can specify the explorer version to show in the
footer:

* `REACT_APP_VERCEL_GIT_COMMIT_SHA` which is the version of
  the running explorer instance (default: xxxxxx).

Build the block explorer:

```
git clone https://github.com/gordanet/gor-explorer
cd gor-explorer
export REACT_APP_VERCEL_GIT_COMMIT_SHA="$(git log -1 --date=short --format="%h" | tr -d '-')"
export REACT_APP_API_ADDRESS=api.gord.network
export REACT_APP_KGI_ADDRESS=kgi.gord.network
npm install
```

Start the block explorer:

```
node server.js
```

## Any ideas?


Do you have any new ideas, wishes or bugs for Gor explorer?
Contact Winston, 
Do I have the change the lay out!?

Winston, 
Tht hostinger layout at Gor Discord.

