# Yedidya's comments app
## Installation

### Clone

> Clone this repo to your local machine using `https://github.com/yedidyas/comments_app_yedidya.git`

### Mongo setup
> A running MongoDB localhost proccess on port 27017 (default port) is necessary (download here: https://www.mongodb.com/download-center#community)

### Server setup
> Go to the server's folder
```shell
cd comments_app_yedidya/server
```
> install npm packages

```shell
$ npm install
```

> Start running the server
```shell
$ npm start
```

### Client setup
> Go to the client's folder
```shell
cd comments_app_yedidya/client
```
> install npm packages

```shell
$ npm install
```

> Start running the client
```shell
$ npm start
```
### Port setting - Mac/Windows

> Please not that the client must run on port 3001. 
> It appears that the syntax of port setting in the package.json is different between mac to windows.
> In mac its:
```shell
"start": "export PORT=3001 && react-scripts start"
```
> Instead of windows which works with:
```shell
"start": "set PORT=3001 && react-scripts start"
```
> The default client 'npm start' is immutable to Mac.

> To start the client on Windows, run:
```shell
$ npm run windows-start
```
> To start the client on Mac, run:
```shell
$ npm run mac-start
```

## Browse

> browse to:

```shell
http://localhost:3001
```



