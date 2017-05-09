## Running locally

```
git clone https://github.com/breeze4/dice-roller-ws.git
cd dice-roller-ws
npm i

cd client
npm i

cd ..
npm start
```

## Deploying

### Background

The app is ready to be deployed to Heroku.

In production, Heroku will use `Procfile` which boots just the server:

```
web: npm run server
```

### Steps

TODO: add Travis and steps here