// CRUD OP's for game model

const GameModel = require("../model/games.model");

// Create and save a new Game

// exporting & creating function createGame
// not a default export
exports.createGame = async function (req, res) {
  if (!req.body.game_name && !req.body.no_of_players) {
    res.send({
      message: "Content can not be empty",
    });
  }

  const NewGame = new GameModel(req.body);

  try {
    await NewGame.save();
    res.send({
      message: "Game saved successfully",
      game_description: NewGame,
    });
  } catch (error) {
    res.send({ message: error.message });
  }
};