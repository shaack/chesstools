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
    // https://en.wikipedia.org/wiki/Chess_piece_relative_value
    values: {
        r: 5, n: 3, b: 3, q: 9, k: 4, p: 1
    },
    notation: {
        en: {
            r: "R", n: "N", b: "B", q: "Q", k: "K", p: ""
        },
        de: {
            r: "T", n: "S", b: "L", q: "Q", k: "K", p: ""
        }
    },
    figures: {
        utf8: {
            rw: "♖", nw: "♘", bw: "♗", qw: "♕", kw: "♔", pw: "♙",
            rb: "♜", nb: "♞", bb: "♝", qb: "♛", kb: "♚", pb: "♟"
        },
        fontAwesomePro: {
            rw: '<i class="far fa-fw fa-chess-rook"></i>',
            nw: '<i class="far fa-fw fa-chess-knight"></i>',
            bw: '<i class="far fa-fw fa-chess-bishop"></i>',
            qw: '<i class="far fa-fw fa-chess-queen"></i>',
            kw: '<i class="far fa-fw fa-chess-king"></i>',
            pw: '<i class="far fa-fw fa-chess-pawn"></i>',
            rb: '<i class="fas fa-fw fa-chess-rook"></i>',
            nb: '<i class="fas fa-fw fa-chess-knight"></i>',
            bb: '<i class="fas fa-fw fa-chess-bishop"></i>',
            qb: '<i class="fas fa-fw fa-chess-queen"></i>',
            kb: '<i class="fas fa-fw fa-chess-king"></i>',
            pb: '<i class="fas fa-fw fa-chess-pawn"></i>'
        }
    }
}

export class ChessTools {

    static renderSan(san, plyCount, lang = "en", mode = "text", pieces = PIECES.figures.utf8) {
        if(mode === "figures") {
            if (this.plyCountToColor(plyCount) === COLOR.white) {
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
        } else if(mode === "text") {
            return TextUtils.replaceAll(san, PIECES.notation[lang])
        } else {
            console.error("mode must be 'text' or 'figures'")
        }
    }

    static plyCountToColor(plyCount) {
        if (plyCount % 2 === 1) {
            return COLOR.white
        } else {
            return COLOR.black
        }
    }

}