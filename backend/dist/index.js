"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./route/userRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = 3600;
app.use(body_parser_1.default.json());
app.use('/', userRouter_1.default);
//database
const mongoURI = 'mongodb+srv://syamnandhu3:syam%40yumhive@yumhive.42uda.mongodb.net/?retryWrites=true&w=majority&appName=YumHIve';
mongoose_1.default.connect(mongoURI)
    .then((res) => console.log('db connection extablished'));
app.listen(PORT, () => {
    console.log('The server running on port 3600');
});
