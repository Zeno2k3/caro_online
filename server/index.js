const express = require('express');
const dotenv = require('dotenv');


// npx sequelize-cli db:migrate
// npx sequelize-cli model:generate --name games --attributes game_id:integer,player_x_id:integer,player_o_id:integer,winner_id:interger
// npx sequelize-cli model:generate --name moves --attributes game_id:integer,player_id:integer,move_x:integer,move_y:integer,move_time:date

// npx sequelize-cli db:migrate:undo:all
// npx sequelize-cli model:generate --name chat_messages --attributes game_id:integer,player_id:integer,message:text

// npx sequelize-cli model:generate --name game_views --attributes game_id:integer,player_id:integer

const AppRoutes = require('./src/router/App.routes.js');

const app = express();

dotenv.config();
app.use(express.json());
express.urlencoded({ extended: true }); // Hỗ trợ query string

AppRoutes(app);

const port = process?.env?.PORT ?? 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
