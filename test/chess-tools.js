/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-chesstools
 * License: MIT, see file 'LICENSE'
 */
import assert from 'assert'
import {ChessTools, COLOR, PIECES} from "../src/cm-chesstools/ChessTools.js"

describe("ChessTools", function () {

    it("should render figures SAN", function (done) {
        assert.equal(ChessTools.renderSan("Qa4", COLOR.white, "en", "figures"), PIECES.figures.utf8.qw + "a4")
        done()
    })

    it("should render text SAN", function (done) {
        assert.equal(ChessTools.renderSan("Ba4", COLOR.white, "en"), "Ba4")
        assert.equal(ChessTools.renderSan("Ba4", COLOR.white, "de"), "La4")
        done()
    })

})