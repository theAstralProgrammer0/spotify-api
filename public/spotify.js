"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
async function handler(req, res) {
    const backgroundColor = req.query.background_color || "FFFFFF";
    const borderColor = req.query.border_color || "000000";
    res.status(200).json({
        message: "Spotify API endpoint",
        backgroundColor: `#${backgroundColor}`,
        borderColor: `#${borderColor}`
    });
}
