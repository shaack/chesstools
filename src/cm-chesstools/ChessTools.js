/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chesstools
 * License: MIT, see file 'LICENSE'
 */

import {TextUtils} from "../../lib/cm-web-modules/utils/TextUtils.js"


export const COLOR = {
    white: "w",
    black: "b"
}

export const PIECES = {
    rw: "♖", nw: "♘", bw: "♗", qw: "♕", kw: "♔", pw: "♙",
    rb: "♜", nb: "♞", bb: "♝", qb: "♛", kb: "♚", pb: "♟"
}

export class ChessTools {
    static renderSan(san, ply, pieces) {
        if (!pieces) {
            pieces = PIECES
        }
        if (this.colorToMove(ply) === COLOR.white) {
            return TextUtils.replaceAll(san, {
                "R": pieces.rw,
                "N": pieces.nw,
                "B": pieces.bw,
                "Q": pieces.qw,
                "K": pieces.kw
            })
        } else {
            return TextUtils.replaceAll(san, {
                "R": pieces.rb,
                "N": pieces.nb,
                "B": pieces.bb,
                "Q": pieces.qb,
                "K": pieces.kb
            })
        }
    }

    static colorToMove(plyCount) {
        if (plyCount % 2 === 1) {
            return COLOR.white
        } else {
            return COLOR.black
        }
    }

}