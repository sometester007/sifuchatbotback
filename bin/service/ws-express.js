"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const expressWs = require("express-ws");
const { app, getWss, applyTo } = expressWs(express());
exports.app = app;
/**
 * applyTo accepts router object
 */
applyTo(express.Router());
/**
 * applyTo accepts router-like objects
 */
applyTo({
    get() { return this; }
});
/**
 * getWss function returns ws server
 */
getWss().clients.forEach(ws => {
    if (ws.readyState !== ws.OPEN) {
        ws.terminate();
        return;
    }
    ws.ping();
});
