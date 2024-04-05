import { Application } from "pixi.js";
import { Player, Monster, Coin } from "./types";

const monsters: Monster[] = [];
let player: Player;
let coin: Coin;

function gameLoop() {
    player.update();
    coin.update();
    monsters.forEach((c) => {
        c.update();
    });
}

// let app = new PIXI.Application({ width: width, height: height, antialias: true });
// app.renderer.backgroundColor = 0x456268;
// document.querySelector("div#canvas").appendChild(app.view);
// setInterval(gameLoop, 1000 / 60);

(async () => {
    const app = new Application();

    await app.init({ background: '#1099bb', resizeTo: window });
    document.body.appendChild(app.canvas);
})();
