const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");


//@description     Create or fetch One to One Chat
//@route           POST /api/chat/
//@access          Protected
const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

    if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

    var isChat = await Chat.find({ //finds such that it isnt a group chat and the two users exist in the users array
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")//populates the users array in the chat model with user/chat information from the DB except the password
    .populate("latestMessage");

    isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "name pic email",
    });

    if (isChat.length > 0) {
        res.send(isChat[0]);
    } else {
        var chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.user._id, userId],
        };

        try {
        const createdChat = await Chat.create(chatData);
        const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
            "users",
            "-password"
        );
        res.status(200).send(FullChat);
        } catch (error) {
        res.status(400);
        throw new Error(error.message);
        }
    }
});

module.exports = {accessChat};