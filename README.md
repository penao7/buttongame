# buttongame

Simple multiplayer button game created by using Node.js as a server and React as a client. 

## Usage

Can be deployed by using [docker compose](docker-compose.yaml)

```basg
$ docker-compose up
```

or install dependencies & build the client & copy build to the server root

```bash
# client root
$ npm install
$ npm run build
$ mv build/ ../server
```
and install server dependencies and start the server
```bash
# server root
$ npm install
$ npm start
```

and the game will be available at http://localhost:5000


## How the game works
- When a player contacts to the server, he or she will get 30 clicks to be used.
- There is only one button which when clicked will increase counter by 1 at a server side.
- All the players share the the same click counter.
- When click the counter reaches certain point eg. 10, the player who clicked the button will be awarded more clicks.


