"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
server_1.app.listen(process.env.PORT || 3100, () => console.log('Running!'));
