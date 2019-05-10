/*!
CSSLint v1.0.5
Copyright (c) 2017 Nicole Sullivan and Nicholas C. Zakas. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var CSSLint = (function(){
  var module = module || {},
      exports = exports || {};

/*!
Parser-Lib
Copyright (c) 2009-2016 Nicholas C. Zakas. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/* Version v1.1.0, Build time: 6-December-2016 10:31:29 */
var parserlib = (function () {
var require;
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/* exported Colors */

var Colors = module.exports = {
    __proto__       :null,
    aliceblue       :"#f0f8ff",
    antiquewhite    :"#faebd7",
    aqua            :"#00ffff",
    aquamarine      :"#7fffd4",
    azure           :"#f0ffff",
    beige           :"#f5f5dc",
    bisque          :"#ffe4c4",
    black           :"#000000",
    blanchedalmond  :"#ffebcd",
    blue            :"#0000ff",
    blueviolet      :"#8a2be2",
    brown           :"#a52a2a",
    burlywood       :"#deb887",
    cadetblue       :"#5f9ea0",
    chartreuse      :"#7fff00",
    chocolate       :"#d2691e",
    coral           :"#ff7f50",
    cornflowerblue  :"#6495ed",
    cornsilk        :"#fff8dc",
    crimson         :"#dc143c",
    cyan            :"#00ffff",
    darkblue        :"#00008b",
    darkcyan        :"#008b8b",
    darkgoldenrod   :"#b8860b",
    darkgray        :"#a9a9a9",
    darkgrey        :"#a9a9a9",
    darkgreen       :"#006400",
    darkkhaki       :"#bdb76b",
    darkmagenta     :"#8b008b",
    darkolivegreen  :"#556b2f",
    darkorange      :"#ff8c00",
    darkorchid      :"#9932cc",
    darkred         :"#8b0000",
    darksalmon      :"#e9967a",
    darkseagreen    :"#8fbc8f",
    darkslateblue   :"#483d8b",
    darkslategray   :"#2f4f4f",
    darkslategrey   :"#2f4f4f",
    darkturquoise   :"#00ced1",
    darkviolet      :"#9400d3",
    deeppink        :"#ff1493",
    deepskyblue     :"#00bfff",
    dimgray         :"#696969",
    dimgrey         :"#696969",
    dodgerblue      :"#1e90ff",
    firebrick       :"#b22222",
    floralwhite     :"#fffaf0",
    forestgreen     :"#228b22",
    fuchsia         :"#ff00ff",
    gainsboro       :"#dcdcdc",
    ghostwhite      :"#f8f8ff",
    gold            :"#ffd700",
    goldenrod       :"#daa520",
    gray            :"#808080",
    grey            :"#808080",
    green           :"#008000",
    greenyellow     :"#adff2f",
    honeydew        :"#f0fff0",
    hotpink         :"#ff69b4",
    indianred       :"#cd5c5c",
    indigo          :"#4b0082",
    ivory           :"#fffff0",
    khaki           :"#f0e68c",
    lavender        :"#e6e6fa",
    lavenderblush   :"#fff0f5",
    lawngreen       :"#7cfc00",
    lemonchiffon    :"#fffacd",
    lightblue       :"#add8e6",
    lightcoral      :"#f08080",
    lightcyan       :"#e0ffff",
    lightgoldenrodyellow  :"#fafad2",
    lightgray       :"#d3d3d3",
    lightgrey       :"#d3d3d3",
    lightgreen      :"#90ee90",
    lightpink       :"#ffb6c1",
    lightsalmon     :"#ffa07a",
    lightseagreen   :"#20b2aa",
    lightskyblue    :"#87cefa",
    lightslategray  :"#778899",
    lightslategrey  :"#778899",
    lightsteelblue  :"#b0c4de",
    lightyellow     :"#ffffe0",
    lime            :"#00ff00",
    limegreen       :"#32cd32",
    linen           :"#faf0e6",
    magenta         :"#ff00ff",
    maroon          :"#800000",
    mediumaquamarine:"#66cdaa",
    mediumblue      :"#0000cd",
    mediumorchid    :"#ba55d3",
    mediumpurple    :"#9370d8",
    mediumseagreen  :"#3cb371",
    mediumslateblue :"#7b68ee",
    mediumspringgreen   :"#00fa9a",
    mediumturquoise :"#48d1cc",
    mediumvioletred :"#c71585",
    midnightblue    :"#191970",
    mintcream       :"#f5fffa",
    mistyrose       :"#ffe4e1",
    moccasin        :"#ffe4b5",
    navajowhite     :"#ffdead",
    navy            :"#000080",
    oldlace         :"#fdf5e6",
    olive           :"#808000",
    olivedrab       :"#6b8e23",
    orange          :"#ffa500",
    orangered       :"#ff4500",
    orchid          :"#da70d6",
    palegoldenrod   :"#eee8aa",
    palegreen       :"#98fb98",
    paleturquoise   :"#afeeee",
    palevioletred   :"#d87093",
    papayawhip      :"#ffefd5",
    peachpuff       :"#ffdab9",
    peru            :"#cd853f",
    pink            :"#ffc0cb",
    plum            :"#dda0dd",
    powderblue      :"#b0e0e6",
    purple          :"#800080",
    red             :"#ff0000",
    rosybrown       :"#bc8f8f",
    royalblue       :"#4169e1",
    saddlebrown     :"#8b4513",
    salmon          :"#fa8072",
    sandybrown      :"#f4a460",
    seagreen        :"#2e8b57",
    seashell        :"#fff5ee",
    sienna          :"#a0522d",
    silver          :"#c0c0c0",
    skyblue         :"#87ceeb",
    slateblue       :"#6a5acd",
    slategray       :"#708090",
    slategrey       :"#708090",
    snow            :"#fffafa",
    springgreen     :"#00ff7f",
    steelblue       :"#4682b4",
    tan             :"#d2b48c",
    teal            :"#008080",
    thistle         :"#d8bfd8",
    tomato          :"#ff6347",
    turquoise       :"#40e0d0",
    violet          :"#ee82ee",
    wheat           :"#f5deb3",
    white           :"#ffffff",
    whitesmoke      :"#f5f5f5",
    yellow          :"#ffff00",
    yellowgreen     :"#9acd32",
    //'currentColor' color keyword https://www.w3.org/TR/css3-color/#currentcolor
    currentColor        :"The value of the 'color' property.",
    //CSS2 system colors https://www.w3.org/TR/css3-color/#css2-system
    activeBorder        :"Active window border.",
    activecaption       :"Active window caption.",
    appworkspace        :"Background color of multiple document interface.",
    background          :"Desktop background.",
    buttonface          :"The face background color for 3-D elements that appear 3-D due to one layer of surrounding border.",
    buttonhighlight     :"The color of the border facing the light source for 3-D elements that appear 3-D due to one layer of surrounding border.",
    buttonshadow        :"The color of the border away from the light source for 3-D elements that appear 3-D due to one layer of surrounding border.",
    buttontext          :"Text on push buttons.",
    captiontext         :"Text in caption, size box, and scrollbar arrow box.",
    graytext            :"Grayed (disabled) text. This color is set to #000 if the current display driver does not support a solid gray color.",
    greytext            :"Greyed (disabled) text. This color is set to #000 if the current display driver does not support a solid grey color.",
    highlight           :"Item(s) selected in a control.",
    highlighttext       :"Text of item(s) selected in a control.",
    inactiveborder      :"Inactive window border.",
    inactivecaption     :"Inactive window caption.",
    inactivecaptiontext :"Color of text in an inactive caption.",
    infobackground      :"Background color for tooltip controls.",
    infotext            :"Text color for tooltip controls.",
    menu                :"Menu background.",
    menutext            :"Text in menus.",
    scrollbar           :"Scroll bar gray area.",
    threeddarkshadow    :"The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    threedface          :"The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    threedhighlight     :"The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    threedlightshadow   :"The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    threedshadow        :"The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
    window              :"Window background.",
    windowframe         :"Window frame.",
    windowtext          :"Text in windows."
};

},{}],2:[function(require,module,exports){
"use strict";

module.exports = Combinator;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents a selector combinator (whitespace, +, >).
 * @namespace parserlib.css
 * @class Combinator
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {String} text The text representation of the unit.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function Combinator(text, line, col) {

    SyntaxUnit.call(this, text, line, col, Parser.COMBINATOR_TYPE);

    /**
     * The type of modifier.
     * @type String
     * @property type
     */
    this.type = "unknown";

    //pretty simple
    if (/^\s+$/.test(text)) {
        this.type = "descendant";
    } else if (text === ">") {
        this.type = "child";
    } else if (text === "+") {
        this.type = "adjacent-sibling";
    } else if (text === "~") {
        this.type = "sibling";
    }

}

Combinator.prototype = new SyntaxUnit();
Combinator.prototype.constructor = Combinator;


},{"../util/SyntaxUnit":26,"./Parser":6}],3:[function(require,module,exports){
"use strict";

module.exports = Matcher;

var StringReader = require("../util/StringReader");
var SyntaxError = require("../util/SyntaxError");

/**
 * This class implements a combinator library for matcher functions.
 * The combinators are described at:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax#Component_value_combinators
 */
function Matcher(matchFunc, toString) {
    this.match = function(expression) {
        // Save/restore marks to ensure that failed matches always restore
        // the original location in the expression.
        var result;
        expression.mark();
        result = matchFunc(expression);
        if (result) {
            expression.drop();
        } else {
            expression.restore();
        }
        return result;
    };
    this.toString = typeof toString === "function" ? toString : function() {
        return toString;
    };
}

/** Precedence table of combinators. */
Matcher.prec = {
    MOD:    5,
    SEQ:    4,
    ANDAND: 3,
    OROR:   2,
    ALT:    1
};

/** Simple recursive-descent grammar to build matchers from strings. */
Matcher.parse = function(str) {
    var reader, eat, expr, oror, andand, seq, mod, term, result;
    reader = new StringReader(str);
    eat = function(matcher) {
        var result = reader.readMatch(matcher);
        if (result === null) {
            throw new SyntaxError(
                "Expected "+matcher, reader.getLine(), reader.getCol());
        }
        return result;
    };
    expr = function() {
        // expr = oror (" | " oror)*
        var m = [ oror() ];
        while (reader.readMatch(" | ") !== null) {
            m.push(oror());
        }
        return m.length === 1 ? m[0] : Matcher.alt.apply(Matcher, m);
    };
    oror = function() {
        // oror = andand ( " || " andand)*
        var m = [ andand() ];
        while (reader.readMatch(" || ") !== null) {
            m.push(andand());
        }
        return m.length === 1 ? m[0] : Matcher.oror.apply(Matcher, m);
    };
    andand = function() {
        // andand = seq ( " && " seq)*
        var m = [ seq() ];
        while (reader.readMatch(" && ") !== null) {
            m.push(seq());
        }
        return m.length === 1 ? m[0] : Matcher.andand.apply(Matcher, m);
    };
    seq = function() {
        // seq = mod ( " " mod)*
        var m = [ mod() ];
        while (reader.readMatch(/^ (?![&|\]])/) !== null) {
            m.push(mod());
        }
        return m.length === 1 ? m[0] : Matcher.seq.apply(Matcher, m);
    };
    mod = function() {
        // mod = term ( "?" | "*" | "+" | "#" | "{<num>,<num>}" )?
        var m = term();
        if (reader.readMatch("?") !== null) {
            return m.question();
        } else if (reader.readMatch("*") !== null) {
            return m.star();
        } else if (reader.readMatch("+") !== null) {
            return m.plus();
        } else if (reader.readMatch("#") !== null) {
            return m.hash();
        } else if (reader.readMatch(/^\{\s*/) !== null) {
            var min = eat(/^\d+/);
            eat(/^\s*,\s*/);
            var max = eat(/^\d+/);
            eat(/^\s*\}/);
            return m.braces(+min, +max);
        }
        return m;
    };
    term = function() {
        // term = <nt> | literal | "[ " expression " ]"
        if (reader.readMatch("[ ") !== null) {
            var m = expr();
            eat(" ]");
            return m;
        }
        return Matcher.fromType(eat(/^[^ ?*+#{]+/));
    };
    result = expr();
    if (!reader.eof()) {
        throw new SyntaxError(
            "Expected end of string", reader.getLine(), reader.getCol());
    }
    return result;
};

/**
 * Convert a string to a matcher (parsing simple alternations),
 * or do nothing if the argument is already a matcher.
 */
Matcher.cast = function(m) {
    if (m instanceof Matcher) {
        return m;
    }
    return Matcher.parse(m);
};

/**
 * Create a matcher for a single type.
 */
Matcher.fromType = function(type) {
    // Late require of ValidationTypes to break a dependency cycle.
    var ValidationTypes = require("./ValidationTypes");
    return new Matcher(function(expression) {
        return expression.hasNext() && ValidationTypes.isType(expression, type);
    }, type);
};

/**
 * Create a matcher for one or more juxtaposed words, which all must
 * occur, in the given order.
 */
Matcher.seq = function() {
    var ms = Array.prototype.slice.call(arguments).map(Matcher.cast);
    if (ms.length === 1) {
        return ms[0];
    }
    return new Matcher(function(expression) {
        var i, result = true;
        for (i = 0; result && i < ms.length; i++) {
            result = ms[i].match(expression);
        }
        return result;
    }, function(prec) {
        var p = Matcher.prec.SEQ;
        var s = ms.map(function(m) {
            return m.toString(p);
        }).join(" ");
        if (prec > p) {
            s = "[ " + s + " ]";
        }
        return s;
    });
};

/**
 * Create a matcher for one or more alternatives, where exactly one
 * must occur.
 */
Matcher.alt = function() {
    var ms = Array.prototype.slice.call(arguments).map(Matcher.cast);
    if (ms.length === 1) {
        return ms[0];
    }
    return new Matcher(function(expression) {
        var i, result = false;
        for (i = 0; !result && i < ms.length; i++) {
            result = ms[i].match(expression);
        }
        return result;
    }, function(prec) {
        var p = Matcher.prec.ALT;
        var s = ms.map(function(m) {
            return m.toString(p);
        }).join(" | ");
        if (prec > p) {
            s = "[ " + s + " ]";
        }
        return s;
    });
};

/**
 * Create a matcher for two or more options.  This implements the
 * double bar (||) and double ampersand (&&) operators, as well as
 * variants of && where some of the alternatives are optional.
 * This will backtrack through even successful matches to try to
 * maximize the number of items matched.
 */
Matcher.many = function(required) {
    var ms = Array.prototype.slice.call(arguments, 1).reduce(function(acc, v) {
        if (v.expand) {
            // Insert all of the options for the given complex rule as
            // individual options.
            var ValidationTypes = require("./ValidationTypes");
            acc.push.apply(acc, ValidationTypes.complex[v.expand].options);
        } else {
            acc.push(Matcher.cast(v));
        }
        return acc;
    }, []);

    if (required === true) {
        required = ms.map(function() {
            return true;
        });
    }

    var result = new Matcher(function(expression) {
        var seen = [], max = 0, pass = 0;
        var success = function(matchCount) {
            if (pass === 0) {
                max = Math.max(matchCount, max);
                return matchCount === ms.length;
            } else {
                return matchCount === max;
            }
        };
        var tryMatch = function(matchCount) {
            for (var i = 0; i < ms.length; i++) {
                if (seen[i]) {
                    continue;
                }
                expression.mark();
                if (ms[i].match(expression)) {
                    seen[i] = true;
                    // Increase matchCount iff this was a required element
                    // (or if all the elements are optional)
                    if (tryMatch(matchCount + ((required === false || required[i]) ? 1 : 0))) {
                        expression.drop();
                        return true;
                    }
                    // Backtrack: try *not* matching using this rule, and
                    // let's see if it leads to a better overall match.
                    expression.restore();
                    seen[i] = false;
                } else {
                    expression.drop();
                }
            }
            return success(matchCount);
        };
        if (!tryMatch(0)) {
            // Couldn't get a complete match, retrace our steps to make the
            // match with the maximum # of required elements.
            pass++;
            tryMatch(0);
        }

        if (required === false) {
            return max > 0;
        }
        // Use finer-grained specification of which matchers are required.
        for (var i = 0; i < ms.length; i++) {
            if (required[i] && !seen[i]) {
                return false;
            }
        }
        return true;
    }, function(prec) {
        var p = required === false ? Matcher.prec.OROR : Matcher.prec.ANDAND;
        var s = ms.map(function(m, i) {
            if (required !== false && !required[i]) {
                return m.toString(Matcher.prec.MOD) + "?";
            }
            return m.toString(p);
        }).join(required === false ? " || " : " && ");
        if (prec > p) {
            s = "[ " + s + " ]";
        }
        return s;
    });
    result.options = ms;
    return result;
};

/**
 * Create a matcher for two or more options, where all options are
 * mandatory but they may appear in any order.
 */
Matcher.andand = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(true);
    return Matcher.many.apply(Matcher, args);
};

/**
 * Create a matcher for two or more options, where options are
 * optional and may appear in any order, but at least one must be
 * present.
 */
Matcher.oror = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(false);
    return Matcher.many.apply(Matcher, args);
};

/** Instance methods on Matchers. */
Matcher.prototype = {
    constructor: Matcher,
    // These are expected to be overridden in every instance.
    match: function() { throw new Error("unimplemented"); },
    toString: function() { throw new Error("unimplemented"); },
    // This returns a standalone function to do the matching.
    func: function() { return this.match.bind(this); },
    // Basic combinators
    then: function(m) { return Matcher.seq(this, m); },
    or: function(m) { return Matcher.alt(this, m); },
    andand: function(m) { return Matcher.many(true, this, m); },
    oror: function(m) { return Matcher.many(false, this, m); },
    // Component value multipliers
    star: function() { return this.braces(0, Infinity, "*"); },
    plus: function() { return this.braces(1, Infinity, "+"); },
    question: function() { return this.braces(0, 1, "?"); },
    hash: function() {
        return this.braces(1, Infinity, "#", Matcher.cast(","));
    },
    braces: function(min, max, marker, optSep) {
        var m1 = this, m2 = optSep ? optSep.then(this) : this;
        if (!marker) {
            marker = "{" + min + "," + max + "}";
        }
        return new Matcher(function(expression) {
            var result = true, i;
            for (i = 0; i < max; i++) {
                if (i > 0 && optSep) {
                    result = m2.match(expression);
                } else {
                    result = m1.match(expression);
                }
                if (!result) {
                    break;
                }
            }
            return i >= min;
        }, function() {
            return m1.toString(Matcher.prec.MOD) + marker;
        });
    }
};

},{"../util/StringReader":24,"../util/SyntaxError":25,"./ValidationTypes":21}],4:[function(require,module,exports){
"use strict";

module.exports = MediaFeature;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents a media feature, such as max-width:500.
 * @namespace parserlib.css
 * @class MediaFeature
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {SyntaxUnit} name The name of the feature.
 * @param {SyntaxUnit} value The value of the feature or null if none.
 */
function MediaFeature(name, value) {

    SyntaxUnit.call(this, "(" + name + (value !== null ? ":" + value : "") + ")", name.startLine, name.startCol, Parser.MEDIA_FEATURE_TYPE);

    /**
     * The name of the media feature
     * @type String
     * @property name
     */
    this.name = name;

    /**
     * The value for the feature or null if there is none.
     * @type SyntaxUnit
     * @property value
     */
    this.value = value;
}

MediaFeature.prototype = new SyntaxUnit();
MediaFeature.prototype.constructor = MediaFeature;


},{"../util/SyntaxUnit":26,"./Parser":6}],5:[function(require,module,exports){
"use strict";

module.exports = MediaQuery;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents an individual media query.
 * @namespace parserlib.css
 * @class MediaQuery
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {String} modifier The modifier "not" or "only" (or null).
 * @param {String} mediaType The type of media (i.e., "print").
 * @param {Array} parts Array of selectors parts making up this selector.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function MediaQuery(modifier, mediaType, features, line, col) {

    SyntaxUnit.call(this, (modifier ? modifier + " ": "") + (mediaType ? mediaType : "") + (mediaType && features.length > 0 ? " and " : "") + features.join(" and "), line, col, Parser.MEDIA_QUERY_TYPE);

    /**
     * The media modifier ("not" or "only")
     * @type String
     * @property modifier
     */
    this.modifier = modifier;

    /**
     * The mediaType (i.e., "print")
     * @type String
     * @property mediaType
     */
    this.mediaType = mediaType;

    /**
     * The parts that make up the selector.
     * @type Array
     * @property features
     */
    this.features = features;

}

MediaQuery.prototype = new SyntaxUnit();
MediaQuery.prototype.constructor = MediaQuery;


},{"../util/SyntaxUnit":26,"./Parser":6}],6:[function(require,module,exports){
"use strict";

module.exports = Parser;

var EventTarget = require("../util/EventTarget");
var SyntaxError = require("../util/SyntaxError");
var SyntaxUnit = require("../util/SyntaxUnit");

var Combinator = require("./Combinator");
var MediaFeature = require("./MediaFeature");
var MediaQuery = require("./MediaQuery");
var PropertyName = require("./PropertyName");
var PropertyValue = require("./PropertyValue");
var PropertyValuePart = require("./PropertyValuePart");
var Selector = require("./Selector");
var SelectorPart = require("./SelectorPart");
var SelectorSubPart = require("./SelectorSubPart");
var TokenStream = require("./TokenStream");
var Tokens = require("./Tokens");
var Validation = require("./Validation");

/**
 * A CSS3 parser.
 * @namespace parserlib.css
 * @class Parser
 * @constructor
 * @param {Object} options (Optional) Various options for the parser:
 *      starHack (true|false) to allow IE6 star hack as valid,
 *      underscoreHack (true|false) to interpret leading underscores
 *      as IE6-7 targeting for known properties, ieFilters (true|false)
 *      to indicate that IE < 8 filters should be accepted and not throw
 *      syntax errors.
 */
function Parser(options) {

    //inherit event functionality
    EventTarget.call(this);


    this.options = options || {};

    this._tokenStream = null;
}

//Static constants
Parser.DEFAULT_TYPE = 0;
Parser.COMBINATOR_TYPE = 1;
Parser.MEDIA_FEATURE_TYPE = 2;
Parser.MEDIA_QUERY_TYPE = 3;
Parser.PROPERTY_NAME_TYPE = 4;
Parser.PROPERTY_VALUE_TYPE = 5;
Parser.PROPERTY_VALUE_PART_TYPE = 6;
Parser.SELECTOR_TYPE = 7;
Parser.SELECTOR_PART_TYPE = 8;
Parser.SELECTOR_SUB_PART_TYPE = 9;

Parser.prototype = function() {

    var proto = new EventTarget(),  //new prototype
        prop,
        additions =  {
            __proto__: null,

            //restore constructor
            constructor: Parser,

            //instance constants - yuck
            DEFAULT_TYPE : 0,
            COMBINATOR_TYPE : 1,
            MEDIA_FEATURE_TYPE : 2,
            MEDIA_QUERY_TYPE : 3,
            PROPERTY_NAME_TYPE : 4,
            PROPERTY_VALUE_TYPE : 5,
            PROPERTY_VALUE_PART_TYPE : 6,
            SELECTOR_TYPE : 7,
            SELECTOR_PART_TYPE : 8,
            SELECTOR_SUB_PART_TYPE : 9,

            //-----------------------------------------------------------------
            // Grammar
            //-----------------------------------------------------------------

            _stylesheet: function() {

                /*
                 * stylesheet
                 *  : [ CHARSET_SYM S* STRING S* ';' ]?
                 *    [S|CDO|CDC]* [ import [S|CDO|CDC]* ]*
                 *    [ namespace [S|CDO|CDC]* ]*
                 *    [ [ ruleset | media | page | font_face | keyframes_rule | supports_rule ] [S|CDO|CDC]* ]*
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                    count,
                    token,
                    tt;

                this.fire("startstylesheet");

                //try to read character set
                this._charset();

                this._skipCruft();

                //try to read imports - may be more than one
                while (tokenStream.peek() === Tokens.IMPORT_SYM) {
                    this._import();
                    this._skipCruft();
                }

                //try to read namespaces - may be more than one
                while (tokenStream.peek() === Tokens.NAMESPACE_SYM) {
                    this._namespace();
                    this._skipCruft();
                }

                //get the next token
                tt = tokenStream.peek();

                //try to read the rest
                while (tt > Tokens.EOF) {

                    try {

                        switch (tt) {
                            case Tokens.MEDIA_SYM:
                                this._media();
                                this._skipCruft();
                                break;
                            case Tokens.PAGE_SYM:
                                this._page();
                                this._skipCruft();
                                break;
                            case Tokens.FONT_FACE_SYM:
                                this._font_face();
                                this._skipCruft();
                                break;
                            case Tokens.KEYFRAMES_SYM:
                                this._keyframes();
                                this._skipCruft();
                                break;
                            case Tokens.VIEWPORT_SYM:
                                this._viewport();
                                this._skipCruft();
                                break;
                            case Tokens.DOCUMENT_SYM:
                                this._document();
                                this._skipCruft();
                                break;
                            case Tokens.SUPPORTS_SYM:
                                this._supports();
                                this._skipCruft();
                                break;
                            case Tokens.UNKNOWN_SYM:  //unknown @ rule
                                tokenStream.get();
                                if (!this.options.strict) {

                                    //fire error event
                                    this.fire({
                                        type:       "error",
                                        error:      null,
                                        message:    "Unknown @ rule: " + tokenStream.LT(0).value + ".",
                                        line:       tokenStream.LT(0).startLine,
                                        col:        tokenStream.LT(0).startCol
                                    });

                                    //skip braces
                                    count=0;
                                    while (tokenStream.advance([Tokens.LBRACE, Tokens.RBRACE]) === Tokens.LBRACE) {
                                        count++;    //keep track of nesting depth
                                    }

                                    while (count) {
                                        tokenStream.advance([Tokens.RBRACE]);
                                        count--;
                                    }

                                } else {
                                    //not a syntax error, rethrow it
                                    throw new SyntaxError("Unknown @ rule.", tokenStream.LT(0).startLine, tokenStream.LT(0).startCol);
                                }
                                break;
                            case Tokens.S:
                                this._readWhitespace();
                                break;
                            default:
                                if (!this._ruleset()) {

                                    //error handling for known issues
                                    switch (tt) {
                                        case Tokens.CHARSET_SYM:
                                            token = tokenStream.LT(1);
                                            this._charset(false);
                                            throw new SyntaxError("@charset not allowed here.", token.startLine, token.startCol);
                                        case Tokens.IMPORT_SYM:
                                            token = tokenStream.LT(1);
                                            this._import(false);
                                            throw new SyntaxError("@import not allowed here.", token.startLine, token.startCol);
                                        case Tokens.NAMESPACE_SYM:
                                            token = tokenStream.LT(1);
                                            this._namespace(false);
                                            throw new SyntaxError("@namespace not allowed here.", token.startLine, token.startCol);
                                        default:
                                            tokenStream.get();  //get the last token
                                            this._unexpectedToken(tokenStream.token());
                                    }

                                }
                        }
                    } catch (ex) {
                        if (ex instanceof SyntaxError && !this.options.strict) {
                            this.fire({
                                type:       "error",
                                error:      ex,
                                message:    ex.message,
                                line:       ex.line,
                                col:        ex.col
                            });
                        } else {
                            throw ex;
                        }
                    }

                    tt = tokenStream.peek();
                }

                if (tt !== Tokens.EOF) {
                    this._unexpectedToken(tokenStream.token());
                }

                this.fire("endstylesheet");
            },

            _charset: function(emit) {
                var tokenStream = this._tokenStream,
                    charset,
                    token,
                    line,
                    col;

                if (tokenStream.match(Tokens.CHARSET_SYM)) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;

                    this._readWhitespace();
                    tokenStream.mustMatch(Tokens.STRING);

                    token = tokenStream.token();
                    charset = token.value;

                    this._readWhitespace();
                    tokenStream.mustMatch(Tokens.SEMICOLON);

                    if (emit !== false) {
                        this.fire({
                            type:   "charset",
                            charset:charset,
                            line:   line,
                            col:    col
                        });
                    }
                }
            },

            _import: function(emit) {
                /*
                 * import
                 *   : IMPORT_SYM S*
                 *    [STRING|URI] S* media_query_list? ';' S*
                 */

                var tokenStream = this._tokenStream,
                    uri,
                    importToken,
                    mediaList   = [];

                //read import symbol
                tokenStream.mustMatch(Tokens.IMPORT_SYM);
                importToken = tokenStream.token();
                this._readWhitespace();

                tokenStream.mustMatch([Tokens.STRING, Tokens.URI]);

                //grab the URI value
                uri = tokenStream.token().value.replace(/^(?:url\()?["']?([^"']+?)["']?\)?$/, "$1");

                this._readWhitespace();

                mediaList = this._media_query_list();

                //must end with a semicolon
                tokenStream.mustMatch(Tokens.SEMICOLON);
                this._readWhitespace();

                if (emit !== false) {
                    this.fire({
                        type:   "import",
                        uri:    uri,
                        media:  mediaList,
                        line:   importToken.startLine,
                        col:    importToken.startCol
                    });
                }

            },

            _namespace: function(emit) {
                /*
                 * namespace
                 *   : NAMESPACE_SYM S* [namespace_prefix S*]? [STRING|URI] S* ';' S*
                 */

                var tokenStream = this._tokenStream,
                    line,
                    col,
                    prefix,
                    uri;

                //read import symbol
                tokenStream.mustMatch(Tokens.NAMESPACE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();

                //it's a namespace prefix - no _namespace_prefix() method because it's just an IDENT
                if (tokenStream.match(Tokens.IDENT)) {
                    prefix = tokenStream.token().value;
                    this._readWhitespace();
                }

                tokenStream.mustMatch([Tokens.STRING, Tokens.URI]);
                /*if (!tokenStream.match(Tokens.STRING)){
                    tokenStream.mustMatch(Tokens.URI);
                }*/

                //grab the URI value
                uri = tokenStream.token().value.replace(/(?:url\()?["']([^"']+)["']\)?/, "$1");

                this._readWhitespace();

                //must end with a semicolon
                tokenStream.mustMatch(Tokens.SEMICOLON);
                this._readWhitespace();

                if (emit !== false) {
                    this.fire({
                        type:   "namespace",
                        prefix: prefix,
                        uri:    uri,
                        line:   line,
                        col:    col
                    });
                }

            },

            _supports: function(emit) {
                /*
                 * supports_rule
                 *  : SUPPORTS_SYM S* supports_condition S* group_rule_body
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                    line,
                    col;

                if (tokenStream.match(Tokens.SUPPORTS_SYM)) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;

                    this._readWhitespace();
                    this._supports_condition();
                    this._readWhitespace();

                    tokenStream.mustMatch(Tokens.LBRACE);
                    this._readWhitespace();

                    if (emit !== false) {
                        this.fire({
                            type:   "startsupports",
                            line:   line,
                            col:    col
                        });
                    }

                    while (true) {
                        if (!this._ruleset()) {
                            break;
                        }
                    }

                    tokenStream.mustMatch(Tokens.RBRACE);
                    this._readWhitespace();

                    this.fire({
                        type:   "endsupports",
                        line:   line,
                        col:    col
                    });
                }
            },

            _supports_condition: function() {
                /*
                 * supports_condition
                 *  : supports_negation | supports_conjunction | supports_disjunction |
                 *    supports_condition_in_parens
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                    ident;

                if (tokenStream.match(Tokens.IDENT)) {
                    ident = tokenStream.token().value.toLowerCase();

                    if (ident === "not") {
                        tokenStream.mustMatch(Tokens.S);
                        this._supports_condition_in_parens();
                    } else {
                        tokenStream.unget();
                    }
                } else {
                    this._supports_condition_in_parens();
                    this._readWhitespace();

                    while (tokenStream.peek() === Tokens.IDENT) {
                        ident = tokenStream.LT(1).value.toLowerCase();
                        if (ident === "and" || ident === "or") {
                            tokenStream.mustMatch(Tokens.IDENT);
                            this._readWhitespace();
                            this._supports_condition_in_parens();
                            this._readWhitespace();
                        }
                    }
                }
            },

            _supports_condition_in_parens: function() {
                /*
                 * supports_condition_in_parens
                 *  : ( '(' S* supports_condition S* ')' ) | supports_declaration_condition |
                 *    general_enclosed
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                    ident;

                if (tokenStream.match(Tokens.LPAREN)) {
                    this._readWhitespace();
                    if (tokenStream.match(Tokens.IDENT)) {
                        // look ahead for not keyword, if not given, continue with declaration condition.
                        ident = tokenStream.token().value.toLowerCase();
                        if (ident === "not") {
                            this._readWhitespace();
                            this._supports_condition();
                            this._readWhitespace();
                            tokenStream.mustMatch(Tokens.RPAREN);
                        } else {
                            tokenStream.unget();
                            this._supports_declaration_condition(false);
                        }
                    } else {
                        this._supports_condition();
                        this._readWhitespace();
                        tokenStream.mustMatch(Tokens.RPAREN);
                    }
                } else {
                    this._supports_declaration_condition();
                }
            },

            _supports_declaration_condition: function(requireStartParen) {
                /*
                 * supports_declaration_condition
                 *  : '(' S* declaration ')'
                 *  ;
                 */
                var tokenStream = this._tokenStream;

                if (requireStartParen !== false) {
                    tokenStream.mustMatch(Tokens.LPAREN);
                }
                this._readWhitespace();
                this._declaration();
                tokenStream.mustMatch(Tokens.RPAREN);
            },

            _media: function() {
                /*
                 * media
                 *   : MEDIA_SYM S* media_query_list S* '{' S* ruleset* '}' S*
                 *   ;
                 */
                var tokenStream     = this._tokenStream,
                    line,
                    col,
                    mediaList;//       = [];

                //look for @media
                tokenStream.mustMatch(Tokens.MEDIA_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;

                this._readWhitespace();

                mediaList = this._media_query_list();

                tokenStream.mustMatch(Tokens.LBRACE);
                this._readWhitespace();

                this.fire({
                    type:   "startmedia",
                    media:  mediaList,
                    line:   line,
                    col:    col
                });

                while (true) {
                    if (tokenStream.peek() === Tokens.PAGE_SYM) {
                        this._page();
                    } else if (tokenStream.peek() === Tokens.FONT_FACE_SYM) {
                        this._font_face();
                    } else if (tokenStream.peek() === Tokens.VIEWPORT_SYM) {
                        this._viewport();
                    } else if (tokenStream.peek() === Tokens.DOCUMENT_SYM) {
                        this._document();
                    } else if (tokenStream.peek() === Tokens.SUPPORTS_SYM) {
                        this._supports();
                    } else if (tokenStream.peek() === Tokens.MEDIA_SYM) {
                        this._media();
                    } else if (!this._ruleset()) {
                        break;
                    }
                }

                tokenStream.mustMatch(Tokens.RBRACE);
                this._readWhitespace();

                this.fire({
                    type:   "endmedia",
                    media:  mediaList,
                    line:   line,
                    col:    col
                });
            },


            //CSS3 Media Queries
            _media_query_list: function() {
                /*
                 * media_query_list
                 *   : S* [media_query [ ',' S* media_query ]* ]?
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    mediaList   = [];


                this._readWhitespace();

                if (tokenStream.peek() === Tokens.IDENT || tokenStream.peek() === Tokens.LPAREN) {
                    mediaList.push(this._media_query());
                }

                while (tokenStream.match(Tokens.COMMA)) {
                    this._readWhitespace();
                    mediaList.push(this._media_query());
                }

                return mediaList;
            },

            /*
             * Note: "expression" in the grammar maps to the _media_expression
             * method.

             */
            _media_query: function() {
                /*
                 * media_query
                 *   : [ONLY | NOT]? S* media_type S* [ AND S* expression ]*
                 *   | expression [ AND S* expression ]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    type        = null,
                    ident       = null,
                    token       = null,
                    expressions = [];

                if (tokenStream.match(Tokens.IDENT)) {
                    ident = tokenStream.token().value.toLowerCase();

                    //since there's no custom tokens for these, need to manually check
                    if (ident !== "only" && ident !== "not") {
                        tokenStream.unget();
                        ident = null;
                    } else {
                        token = tokenStream.token();
                    }
                }

                this._readWhitespace();

                if (tokenStream.peek() === Tokens.IDENT) {
                    type = this._media_type();
                    if (token === null) {
                        token = tokenStream.token();
                    }
                } else if (tokenStream.peek() === Tokens.LPAREN) {
                    if (token === null) {
                        token = tokenStream.LT(1);
                    }
                    expressions.push(this._media_expression());
                }

                if (type === null && expressions.length === 0) {
                    return null;
                } else {
                    this._readWhitespace();
                    while (tokenStream.match(Tokens.IDENT)) {
                        if (tokenStream.token().value.toLowerCase() !== "and") {
                            this._unexpectedToken(tokenStream.token());
                        }

                        this._readWhitespace();
                        expressions.push(this._media_expression());
                    }
                }

                return new MediaQuery(ident, type, expressions, token.startLine, token.startCol);
            },

            //CSS3 Media Queries
            _media_type: function() {
                /*
                 * media_type
                 *   : IDENT
                 *   ;
                 */
                return this._media_feature();
            },

            /**
             * Note: in CSS3 Media Queries, this is called "expression".
             * Renamed here to avoid conflict with CSS3 Selectors
             * definition of "expression". Also note that "expr" in the
             * grammar now maps to "expression" from CSS3 selectors.
             * @method _media_expression
             * @private
             */
            _media_expression: function() {
                /*
                 * expression
                 *  : '(' S* media_feature S* [ ':' S* expr ]? ')' S*
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                    feature     = null,
                    token,
                    expression  = null;

                tokenStream.mustMatch(Tokens.LPAREN);

                feature = this._media_feature();
                this._readWhitespace();

                if (tokenStream.match(Tokens.COLON)) {
                    this._readWhitespace();
                    token = tokenStream.LT(1);
                    expression = this._expression();
                }

                tokenStream.mustMatch(Tokens.RPAREN);
                this._readWhitespace();

                return new MediaFeature(feature, expression ? new SyntaxUnit(expression, token.startLine, token.startCol) : null);
            },

            //CSS3 Media Queries
            _media_feature: function() {
                /*
                 * media_feature
                 *   : IDENT
                 *   ;
                 */
                var tokenStream = this._tokenStream;

                this._readWhitespace();

                tokenStream.mustMatch(Tokens.IDENT);

                return SyntaxUnit.fromToken(tokenStream.token());
            },

            //CSS3 Paged Media
            _page: function() {
                /*
                 * page:
                 *    PAGE_SYM S* IDENT? pseudo_page? S*
                 *    '{' S* [ declaration | margin ]? [ ';' S* [ declaration | margin ]? ]* '}' S*
                 *    ;
                 */
                var tokenStream = this._tokenStream,
                    line,
                    col,
                    identifier  = null,
                    pseudoPage  = null;

                //look for @page
                tokenStream.mustMatch(Tokens.PAGE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;

                this._readWhitespace();

                if (tokenStream.match(Tokens.IDENT)) {
                    identifier = tokenStream.token().value;

                    //The value 'auto' may not be used as a page name and MUST be treated as a syntax error.
                    if (identifier.toLowerCase() === "auto") {
                        this._unexpectedToken(tokenStream.token());
                    }
                }

                //see if there's a colon upcoming
                if (tokenStream.peek() === Tokens.COLON) {
                    pseudoPage = this._pseudo_page();
                }

                this._readWhitespace();

                this.fire({
                    type:   "startpage",
                    id:     identifier,
                    pseudo: pseudoPage,
                    line:   line,
                    col:    col
                });

                this._readDeclarations(true, true);

                this.fire({
                    type:   "endpage",
                    id:     identifier,
                    pseudo: pseudoPage,
                    line:   line,
                    col:    col
                });

            },

            //CSS3 Paged Media
            _margin: function() {
                /*
                 * margin :
                 *    margin_sym S* '{' declaration [ ';' S* declaration? ]* '}' S*
                 *    ;
                 */
                var tokenStream = this._tokenStream,
                    line,
                    col,
                    marginSym   = this._margin_sym();

                if (marginSym) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;

                    this.fire({
                        type: "startpagemargin",
                        margin: marginSym,
                        line:   line,
                        col:    col
                    });

                    this._readDeclarations(true);

                    this.fire({
                        type: "endpagemargin",
                        margin: marginSym,
                        line:   line,
                        col:    col
                    });
                    return true;
                } else {
                    return false;
                }
            },

            //CSS3 Paged Media
            _margin_sym: function() {

                /*
                 * margin_sym :
                 *    TOPLEFTCORNER_SYM |
                 *    TOPLEFT_SYM |
                 *    TOPCENTER_SYM |
                 *    TOPRIGHT_SYM |
                 *    TOPRIGHTCORNER_SYM |
                 *    BOTTOMLEFTCORNER_SYM |
                 *    BOTTOMLEFT_SYM |
                 *    BOTTOMCENTER_SYM |
                 *    BOTTOMRIGHT_SYM |
                 *    BOTTOMRIGHTCORNER_SYM |
                 *    LEFTTOP_SYM |
                 *    LEFTMIDDLE_SYM |
                 *    LEFTBOTTOM_SYM |
                 *    RIGHTTOP_SYM |
                 *    RIGHTMIDDLE_SYM |
                 *    RIGHTBOTTOM_SYM
                 *    ;
                 */

                var tokenStream = this._tokenStream;

                if (tokenStream.match([Tokens.TOPLEFTCORNER_SYM, Tokens.TOPLEFT_SYM,
                        Tokens.TOPCENTER_SYM, Tokens.TOPRIGHT_SYM, Tokens.TOPRIGHTCORNER_SYM,
                        Tokens.BOTTOMLEFTCORNER_SYM, Tokens.BOTTOMLEFT_SYM,
                        Tokens.BOTTOMCENTER_SYM, Tokens.BOTTOMRIGHT_SYM,
                        Tokens.BOTTOMRIGHTCORNER_SYM, Tokens.LEFTTOP_SYM,
                        Tokens.LEFTMIDDLE_SYM, Tokens.LEFTBOTTOM_SYM, Tokens.RIGHTTOP_SYM,
                        Tokens.RIGHTMIDDLE_SYM, Tokens.RIGHTBOTTOM_SYM])) {
                    return SyntaxUnit.fromToken(tokenStream.token());
                } else {
                    return null;
                }

            },

            _pseudo_page: function() {
                /*
                 * pseudo_page
                 *   : ':' IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream;

                tokenStream.mustMatch(Tokens.COLON);
                tokenStream.mustMatch(Tokens.IDENT);

                //TODO: CSS3 Paged Media says only "left", "center", and "right" are allowed

                return tokenStream.token().value;
            },

            _font_face: function() {
                /*
                 * font_face
                 *   : FONT_FACE_SYM S*
                 *     '{' S* declaration [ ';' S* declaration ]* '}' S*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    line,
                    col;

                //look for @page
                tokenStream.mustMatch(Tokens.FONT_FACE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;

                this._readWhitespace();

                this.fire({
                    type:   "startfontface",
                    line:   line,
                    col:    col
                });

                this._readDeclarations(true);

                this.fire({
                    type:   "endfontface",
                    line:   line,
                    col:    col
                });
            },

            _viewport: function() {
                /*
                 * viewport
                 *   : VIEWPORT_SYM S*
                 *     '{' S* declaration? [ ';' S* declaration? ]* '}' S*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    line,
                    col;

                tokenStream.mustMatch(Tokens.VIEWPORT_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;

                this._readWhitespace();

                this.fire({
                    type:   "startviewport",
                    line:   line,
                    col:    col
                });

                this._readDeclarations(true);

                this.fire({
                    type:   "endviewport",
                    line:   line,
                    col:    col
                });

            },

            _document: function() {
                /*
                 * document
                 *   : DOCUMENT_SYM S*
                 *     _document_function [ ',' S* _document_function ]* S*
                 *     '{' S* ruleset* '}'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    token,
                    functions = [],
                    prefix = "";

                tokenStream.mustMatch(Tokens.DOCUMENT_SYM);
                token = tokenStream.token();
                if (/^@\-([^\-]+)\-/.test(token.value)) {
                    prefix = RegExp.$1;
                }

                this._readWhitespace();
                functions.push(this._document_function());

                while (tokenStream.match(Tokens.COMMA)) {
                    this._readWhitespace();
                    functions.push(this._document_function());
                }

                tokenStream.mustMatch(Tokens.LBRACE);
                this._readWhitespace();

                this.fire({
                    type:      "startdocument",
                    functions: functions,
                    prefix:    prefix,
                    line:      token.startLine,
                    col:       token.startCol
                });

                var ok = true;
                while (ok) {
                    switch (tokenStream.peek()) {
                        case Tokens.PAGE_SYM:
                            this._page();
                            break;
                        case Tokens.FONT_FACE_SYM:
                            this._font_face();
                            break;
                        case Tokens.VIEWPORT_SYM:
                            this._viewport();
                            break;
                        case Tokens.MEDIA_SYM:
                            this._media();
                            break;
                        case Tokens.KEYFRAMES_SYM:
                            this._keyframes();
                            break;
                        case Tokens.DOCUMENT_SYM:
                            this._document();
                            break;
                        default:
                            ok = Boolean(this._ruleset());
                    }
                }

                tokenStream.mustMatch(Tokens.RBRACE);
                token = tokenStream.token();
                this._readWhitespace();

                this.fire({
                    type:      "enddocument",
                    functions: functions,
                    prefix:    prefix,
                    line:      token.startLine,
                    col:       token.startCol
                });
            },

            _document_function: function() {
                /*
                 * document_function
                 *   : function | URI S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    value;

                if (tokenStream.match(Tokens.URI)) {
                    value = tokenStream.token().value;
                    this._readWhitespace();
                } else {
                    value = this._function();
                }

                return value;
            },

            _operator: function(inFunction) {

                /*
                 * operator (outside function)
                 *  : '/' S* | ',' S* | /( empty )/
                 * operator (inside function)
                 *  : '/' S* | '+' S* | '*' S* | '-' S* /( empty )/
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                    token       = null;

                if (tokenStream.match([Tokens.SLASH, Tokens.COMMA]) ||
                    (inFunction && tokenStream.match([Tokens.PLUS, Tokens.STAR, Tokens.MINUS]))) {
                    token =  tokenStream.token();
                    this._readWhitespace();
                }
                return token ? PropertyValuePart.fromToken(token) : null;

            },

            _combinator: function() {

                /*
                 * combinator
                 *  : PLUS S* | GREATER S* | TILDE S* | S+
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                    value       = null,
                    token;

                if (tokenStream.match([Tokens.PLUS, Tokens.GREATER, Tokens.TILDE])) {
                    token = tokenStream.token();
                    value = new Combinator(token.value, token.startLine, token.startCol);
                    this._readWhitespace();
                }

                return value;
            },

            _unary_operator: function() {

                /*
                 * unary_operator
                 *  : '-' | '+'
                 *  ;
                 */

                var tokenStream = this._tokenStream;

                if (tokenStream.match([Tokens.MINUS, Tokens.PLUS])) {
                    return tokenStream.token().value;
                } else {
                    return null;
                }
            },

            _property: function() {

                /*
                 * property
                 *   : IDENT S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    value       = null,
                    hack        = null,
                    tokenValue,
                    token,
                    line,
                    col;

                //check for star hack - throws error if not allowed
                if (tokenStream.peek() === Tokens.STAR && this.options.starHack) {
                    tokenStream.get();
                    token = tokenStream.token();
                    hack = token.value;
                    line = token.startLine;
                    col = token.startCol;
                }

                if (tokenStream.match(Tokens.IDENT)) {
                    token = tokenStream.token();
                    tokenValue = token.value;

                    //check for underscore hack - no error if not allowed because it's valid CSS syntax
                    if (tokenValue.charAt(0) === "_" && this.options.underscoreHack) {
                        hack = "_";
                        tokenValue = tokenValue.substring(1);
                    }

                    value = new PropertyName(tokenValue, hack, (line||token.startLine), (col||token.startCol));
                    this._readWhitespace();
                }

                return value;
            },

            //Augmented with CSS3 Selectors
            _ruleset: function() {
                /*
                 * ruleset
                 *   : selectors_group
                 *     '{' S* declaration? [ ';' S* declaration? ]* '}' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    tt,
                    selectors;


                /*
                 * Error Recovery: If even a single selector fails to parse,
                 * then the entire ruleset should be thrown away.
                 */
                try {
                    selectors = this._selectors_group();
                } catch (ex) {
                    if (ex instanceof SyntaxError && !this.options.strict) {

                        //fire error event
                        this.fire({
                            type:       "error",
                            error:      ex,
                            message:    ex.message,
                            line:       ex.line,
                            col:        ex.col
                        });

                        //skip over everything until closing brace
                        tt = tokenStream.advance([Tokens.RBRACE]);
                        if (tt === Tokens.RBRACE) {
                            //if there's a right brace, the rule is finished so don't do anything
                        } else {
                            //otherwise, rethrow the error because it wasn't handled properly
                            throw ex;
                        }

                    } else {
                        //not a syntax error, rethrow it
                        throw ex;
                    }

                    //trigger parser to continue
                    return true;
                }

                //if it got here, all selectors parsed
                if (selectors) {

                    this.fire({
                        type:       "startrule",
                        selectors:  selectors,
                        line:       selectors[0].line,
                        col:        selectors[0].col
                    });

                    this._readDeclarations(true);

                    this.fire({
                        type:       "endrule",
                        selectors:  selectors,
                        line:       selectors[0].line,
                        col:        selectors[0].col
                    });

                }

                return selectors;

            },

            //CSS3 Selectors
            _selectors_group: function() {

                /*
                 * selectors_group
                 *   : selector [ COMMA S* selector ]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    selectors   = [],
                    selector;

                selector = this._selector();
                if (selector !== null) {

                    selectors.push(selector);
                    while (tokenStream.match(Tokens.COMMA)) {
                        this._readWhitespace();
                        selector = this._selector();
                        if (selector !== null) {
                            selectors.push(selector);
                        } else {
                            this._unexpectedToken(tokenStream.LT(1));
                        }
                    }
                }

                return selectors.length ? selectors : null;
            },

            //CSS3 Selectors
            _selector: function() {
                /*
                 * selector
                 *   : simple_selector_sequence [ combinator simple_selector_sequence ]*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    selector    = [],
                    nextSelector = null,
                    combinator  = null,
                    ws          = null;

                //if there's no simple selector, then there's no selector
                nextSelector = this._simple_selector_sequence();
                if (nextSelector === null) {
                    return null;
                }

                selector.push(nextSelector);

                do {

                    //look for a combinator
                    combinator = this._combinator();

                    if (combinator !== null) {
                        selector.push(combinator);
                        nextSelector = this._simple_selector_sequence();

                        //there must be a next selector
                        if (nextSelector === null) {
                            this._unexpectedToken(tokenStream.LT(1));
                        } else {

                            //nextSelector is an instance of SelectorPart
                            selector.push(nextSelector);
                        }
                    } else {

                        //if there's not whitespace, we're done
                        if (this._readWhitespace()) {

                            //add whitespace separator
                            ws = new Combinator(tokenStream.token().value, tokenStream.token().startLine, tokenStream.token().startCol);

                            //combinator is not required
                            combinator = this._combinator();

                            //selector is required if there's a combinator
                            nextSelector = this._simple_selector_sequence();
                            if (nextSelector === null) {
                                if (combinator !== null) {
                                    this._unexpectedToken(tokenStream.LT(1));
                                }
                            } else {

                                if (combinator !== null) {
                                    selector.push(combinator);
                                } else {
                                    selector.push(ws);
                                }

                                selector.push(nextSelector);
                            }
                        } else {
                            break;
                        }

                    }
                } while (true);

                return new Selector(selector, selector[0].line, selector[0].col);
            },

            //CSS3 Selectors
            _simple_selector_sequence: function() {
                /*
                 * simple_selector_sequence
                 *   : [ type_selector | universal ]
                 *     [ HASH | class | attrib | pseudo | negation ]*
                 *   | [ HASH | class | attrib | pseudo | negation ]+
                 *   ;
                 */

                var tokenStream = this._tokenStream,

                    //parts of a simple selector
                    elementName = null,
                    modifiers   = [],

                    //complete selector text
                    selectorText= "",

                    //the different parts after the element name to search for
                    components  = [
                        //HASH
                        function() {
                            return tokenStream.match(Tokens.HASH) ?
                                    new SelectorSubPart(tokenStream.token().value, "id", tokenStream.token().startLine, tokenStream.token().startCol) :
                                    null;
                        },
                        this._class,
                        this._attrib,
                        this._pseudo,
                        this._negation
                    ],
                    i           = 0,
                    len         = components.length,
                    component   = null,
                    line,
                    col;


                //get starting line and column for the selector
                line = tokenStream.LT(1).startLine;
                col = tokenStream.LT(1).startCol;

                elementName = this._type_selector();
                if (!elementName) {
                    elementName = this._universal();
                }

                if (elementName !== null) {
                    selectorText += elementName;
                }

                while (true) {

                    //whitespace means we're done
                    if (tokenStream.peek() === Tokens.S) {
                        break;
                    }

                    //check for each component
                    while (i < len && component === null) {
                        component = components[i++].call(this);
                    }

                    if (component === null) {

                        //we don't have a selector
                        if (selectorText === "") {
                            return null;
                        } else {
                            break;
                        }
                    } else {
                        i = 0;
                        modifiers.push(component);
                        selectorText += component.toString();
                        component = null;
                    }
                }


                return selectorText !== "" ?
                        new SelectorPart(elementName, modifiers, selectorText, line, col) :
                        null;
            },

            //CSS3 Selectors
            _type_selector: function() {
                /*
                 * type_selector
                 *   : [ namespace_prefix ]? element_name
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    ns          = this._namespace_prefix(),
                    elementName = this._element_name();

                if (!elementName) {
                    /*
                     * Need to back out the namespace that was read due to both
                     * type_selector and universal reading namespace_prefix
                     * first. Kind of hacky, but only way I can figure out
                     * right now how to not change the grammar.
                     */
                    if (ns) {
                        tokenStream.unget();
                        if (ns.length > 1) {
                            tokenStream.unget();
                        }
                    }

                    return null;
                } else {
                    if (ns) {
                        elementName.text = ns + elementName.text;
                        elementName.col -= ns.length;
                    }
                    return elementName;
                }
            },

            //CSS3 Selectors
            _class: function() {
                /*
                 * class
                 *   : '.' IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    token;

                if (tokenStream.match(Tokens.DOT)) {
                    tokenStream.mustMatch(Tokens.IDENT);
                    token = tokenStream.token();
                    return new SelectorSubPart("." + token.value, "class", token.startLine, token.startCol - 1);
                } else {
                    return null;
                }

            },

            //CSS3 Selectors
            _element_name: function() {
                /*
                 * element_name
                 *   : IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    token;

                if (tokenStream.match(Tokens.IDENT)) {
                    token = tokenStream.token();
                    return new SelectorSubPart(token.value, "elementName", token.startLine, token.startCol);

                } else {
                    return null;
                }
            },

            //CSS3 Selectors
            _namespace_prefix: function() {
                /*
                 * namespace_prefix
                 *   : [ IDENT | '*' ]? '|'
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    value       = "";

                //verify that this is a namespace prefix
                if (tokenStream.LA(1) === Tokens.PIPE || tokenStream.LA(2) === Tokens.PIPE) {

                    if (tokenStream.match([Tokens.IDENT, Tokens.STAR])) {
                        value += tokenStream.token().value;
                    }

                    tokenStream.mustMatch(Tokens.PIPE);
                    value += "|";

                }

                return value.length ? value : null;
            },

            //CSS3 Selectors
            _universal: function() {
                /*
                 * universal
                 *   : [ namespace_prefix ]? '*'
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    value       = "",
                    ns;

                ns = this._namespace_prefix();
                if (ns) {
                    value += ns;
                }

                if (tokenStream.match(Tokens.STAR)) {
                    value += "*";
                }

                return value.length ? value : null;

            },

            //CSS3 Selectors
            _attrib: function() {
                /*
                 * attrib
                 *   : '[' S* [ namespace_prefix ]? IDENT S*
                 *         [ [ PREFIXMATCH |
                 *             SUFFIXMATCH |
                 *             SUBSTRINGMATCH |
                 *             '=' |
                 *             INCLUDES |
                 *             DASHMATCH ] S* [ IDENT | STRING ] S*
                 *         ]? ']'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    value       = null,
                    ns,
                    token;

                if (tokenStream.match(Tokens.LBRACKET)) {
                    token = tokenStream.token();
                    value = token.value;
                    value += this._readWhitespace();

                    ns = this._namespace_prefix();

                    if (ns) {
                        value += ns;
                    }

                    tokenStream.mustMatch(Tokens.IDENT);
                    value += tokenStream.token().value;
                    value += this._readWhitespace();

                    if (tokenStream.match([Tokens.PREFIXMATCH, Tokens.SUFFIXMATCH, Tokens.SUBSTRINGMATCH,
                            Tokens.EQUALS, Tokens.INCLUDES, Tokens.DASHMATCH])) {

                        value += tokenStream.token().value;
                        value += this._readWhitespace();

                        tokenStream.mustMatch([Tokens.IDENT, Tokens.STRING]);
                        value += tokenStream.token().value;
                        value += this._readWhitespace();
                    }

                    tokenStream.mustMatch(Tokens.RBRACKET);

                    return new SelectorSubPart(value + "]", "attribute", token.startLine, token.startCol);
                } else {
                    return null;
                }
            },

            //CSS3 Selectors
            _pseudo: function() {

                /*
                 * pseudo
                 *   : ':' ':'? [ IDENT | functional_pseudo ]
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    pseudo      = null,
                    colons      = ":",
                    line,
                    col;

                if (tokenStream.match(Tokens.COLON)) {

                    if (tokenStream.match(Tokens.COLON)) {
                        colons += ":";
                    }

                    if (tokenStream.match(Tokens.IDENT)) {
                        pseudo = tokenStream.token().value;
                        line = tokenStream.token().startLine;
                        col = tokenStream.token().startCol - colons.length;
                    } else if (tokenStream.peek() === Tokens.FUNCTION) {
                        line = tokenStream.LT(1).startLine;
                        col = tokenStream.LT(1).startCol - colons.length;
                        pseudo = this._functional_pseudo();
                    }

                    if (pseudo) {
                        pseudo = new SelectorSubPart(colons + pseudo, "pseudo", line, col);
                    } else {
                        var startLine = tokenStream.LT(1).startLine,
                            startCol  = tokenStream.LT(0).startCol;
                        throw new SyntaxError("Expected a `FUNCTION` or `IDENT` after colon at line " + startLine + ", col " + startCol + ".", startLine, startCol);
                    }
                }

                return pseudo;
            },

            //CSS3 Selectors
            _functional_pseudo: function() {
                /*
                 * functional_pseudo
                 *   : FUNCTION S* expression ')'
                 *   ;
                */

                var tokenStream = this._tokenStream,
                    value = null;

                if (tokenStream.match(Tokens.FUNCTION)) {
                    value = tokenStream.token().value;
                    value += this._readWhitespace();
                    value += this._expression();
                    tokenStream.mustMatch(Tokens.RPAREN);
                    value += ")";
                }

                return value;
            },

            //CSS3 Selectors
            _expression: function() {
                /*
                 * expression
                 *   : [ [ PLUS | '-' | DIMENSION | NUMBER | STRING | IDENT ] S* ]+
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    value       = "";

                while (tokenStream.match([Tokens.PLUS, Tokens.MINUS, Tokens.DIMENSION,
                        Tokens.NUMBER, Tokens.STRING, Tokens.IDENT, Tokens.LENGTH,
                        Tokens.FREQ, Tokens.ANGLE, Tokens.TIME,
                        Tokens.RESOLUTION, Tokens.SLASH])) {

                    value += tokenStream.token().value;
                    value += this._readWhitespace();
                }

                return value.length ? value : null;

            },

            //CSS3 Selectors
            _negation: function() {
                /*
                 * negation
                 *   : NOT S* negation_arg S* ')'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    line,
                    col,
                    value       = "",
                    arg,
                    subpart     = null;

                if (tokenStream.match(Tokens.NOT)) {
                    value = tokenStream.token().value;
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;
                    value += this._readWhitespace();
                    arg = this._negation_arg();
                    value += arg;
                    value += this._readWhitespace();
                    tokenStream.match(Tokens.RPAREN);
                    value += tokenStream.token().value;

                    subpart = new SelectorSubPart(value, "not", line, col);
                    subpart.args.push(arg);
                }

                return subpart;
            },

            //CSS3 Selectors
            _negation_arg: function() {
                /*
                 * negation_arg
                 *   : type_selector | universal | HASH | class | attrib | pseudo
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    args        = [
                        this._type_selector,
                        this._universal,
                        function() {
                            return tokenStream.match(Tokens.HASH) ?
                                    new SelectorSubPart(tokenStream.token().value, "id", tokenStream.token().startLine, tokenStream.token().startCol) :
                                    null;
                        },
                        this._class,
                        this._attrib,
                        this._pseudo
                    ],
                    arg         = null,
                    i           = 0,
                    len         = args.length,
                    line,
                    col,
                    part;

                line = tokenStream.LT(1).startLine;
                col = tokenStream.LT(1).startCol;

                while (i < len && arg === null) {

                    arg = args[i].call(this);
                    i++;
                }

                //must be a negation arg
                if (arg === null) {
                    this._unexpectedToken(tokenStream.LT(1));
                }

                //it's an element name
                if (arg.type === "elementName") {
                    part = new SelectorPart(arg, [], arg.toString(), line, col);
                } else {
                    part = new SelectorPart(null, [arg], arg.toString(), line, col);
                }

                return part;
            },

            _declaration: function() {

                /*
                 * declaration
                 *   : property ':' S* expr prio?
                 *   | /( empty )/
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    property    = null,
                    expr        = null,
                    prio        = null,
                    invalid     = null,
                    propertyName= "";

                property = this._property();
                if (property !== null) {

                    tokenStream.mustMatch(Tokens.COLON);
                    this._readWhitespace();

                    expr = this._expr();

                    //if there's no parts for the value, it's an error
                    if (!expr || expr.length === 0) {
                        this._unexpectedToken(tokenStream.LT(1));
                    }

                    prio = this._prio();

                    /*
                     * If hacks should be allowed, then only check the root
                     * property. If hacks should not be allowed, treat
                     * _property or *property as invalid properties.
                     */
                    propertyName = property.toString();
                    if (this.options.starHack && property.hack === "*" ||
                            this.options.underscoreHack && property.hack === "_") {

                        propertyName = property.text;
                    }

                    try {
                        this._validateProperty(propertyName, expr);
                    } catch (ex) {
                        invalid = ex;
                    }

                    this.fire({
                        type:       "property",
                        property:   property,
                        value:      expr,
                        important:  prio,
                        line:       property.line,
                        col:        property.col,
                        invalid:    invalid
                    });

                    return true;
                } else {
                    return false;
                }
            },

            _prio: function() {
                /*
                 * prio
                 *   : IMPORTANT_SYM S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    result      = tokenStream.match(Tokens.IMPORTANT_SYM);

                this._readWhitespace();
                return result;
            },

            _expr: function(inFunction) {
                /*
                 * expr
                 *   : term [ operator term ]*
                 *   ;
                 */

                var values      = [],
                    //valueParts    = [],
                    value       = null,
                    operator    = null;

                value = this._term(inFunction);
                if (value !== null) {

                    values.push(value);

                    do {
                        operator = this._operator(inFunction);

                        //if there's an operator, keep building up the value parts
                        if (operator) {
                            values.push(operator);
                        } /*else {
                            //if there's not an operator, you have a full value
                            values.push(new PropertyValue(valueParts, valueParts[0].line, valueParts[0].col));
                            valueParts = [];
                        }*/

                        value = this._term(inFunction);

                        if (value === null) {
                            break;
                        } else {
                            values.push(value);
                        }
                    } while (true);
                }

                //cleanup
                /*if (valueParts.length) {
                    values.push(new PropertyValue(valueParts, valueParts[0].line, valueParts[0].col));
                }*/

                return values.length > 0 ? new PropertyValue(values, values[0].line, values[0].col) : null;
            },

            _term: function(inFunction) {

                /*
                 * term
                 *   : unary_operator?
                 *     [ NUMBER S* | PERCENTAGE S* | LENGTH S* | ANGLE S* |
                 *       TIME S* | FREQ S* | function | ie_function ]
                 *   | STRING S* | IDENT S* | URI S* | UNICODERANGE S* | hexcolor
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    unary       = null,
                    value       = null,
                    endChar     = null,
                    part        = null,
                    token,
                    line,
                    col;

                //returns the operator or null
                unary = this._unary_operator();
                if (unary !== null) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;
                }

                //exception for IE filters
                if (tokenStream.peek() === Tokens.IE_FUNCTION && this.options.ieFilters) {

                    value = this._ie_function();
                    if (unary === null) {
                        line = tokenStream.token().startLine;
                        col = tokenStream.token().startCol;
                    }

                //see if it's a simple block
                } else if (inFunction && tokenStream.match([Tokens.LPAREN, Tokens.LBRACE, Tokens.LBRACKET])) {

                    token = tokenStream.token();
                    endChar = token.endChar;
                    value = token.value + this._expr(inFunction).text;
                    if (unary === null) {
                        line = tokenStream.token().startLine;
                        col = tokenStream.token().startCol;
                    }
                    tokenStream.mustMatch(Tokens.type(endChar));
                    value += endChar;
                    this._readWhitespace();

                //see if there's a simple match
                } else if (tokenStream.match([Tokens.NUMBER, Tokens.PERCENTAGE, Tokens.LENGTH,
                        Tokens.ANGLE, Tokens.TIME,
                        Tokens.FREQ, Tokens.STRING, Tokens.IDENT, Tokens.URI, Tokens.UNICODE_RANGE])) {

                    value = tokenStream.token().value;
                    if (unary === null) {
                        line = tokenStream.token().startLine;
                        col = tokenStream.token().startCol;
                        // Correct potentially-inaccurate IDENT parsing in
                        // PropertyValuePart constructor.
                        part = PropertyValuePart.fromToken(tokenStream.token());
                    }
                    this._readWhitespace();
                } else {

                    //see if it's a color
                    token = this._hexcolor();
                    if (token === null) {

                        //if there's no unary, get the start of the next token for line/col info
                        if (unary === null) {
                            line = tokenStream.LT(1).startLine;
                            col = tokenStream.LT(1).startCol;
                        }

                        //has to be a function
                        if (value === null) {

                            /*
                             * This checks for alpha(opacity=0) style of IE
                             * functions. IE_FUNCTION only presents progid: style.
                             */
                            if (tokenStream.LA(3) === Tokens.EQUALS && this.options.ieFilters) {
                                value = this._ie_function();
                            } else {
                                value = this._function();
                            }
                        }

                        /*if (value === null) {
                            return null;
                            //throw new Error("Expected identifier at line " + tokenStream.token().startLine + ", character " +  tokenStream.token().startCol + ".");
                        }*/

                    } else {
                        value = token.value;
                        if (unary === null) {
                            line = token.startLine;
                            col = token.startCol;
                        }
                    }

                }

                return part !== null ? part : value !== null ?
                        new PropertyValuePart(unary !== null ? unary + value : value, line, col) :
                        null;

            },

            _function: function() {

                /*
                 * function
                 *   : FUNCTION S* expr ')' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    functionText = null,
                    expr        = null,
                    lt;

                if (tokenStream.match(Tokens.FUNCTION)) {
                    functionText = tokenStream.token().value;
                    this._readWhitespace();
                    expr = this._expr(true);
                    functionText += expr;

                    //START: Horrible hack in case it's an IE filter
                    if (this.options.ieFilters && tokenStream.peek() === Tokens.EQUALS) {
                        do {

                            if (this._readWhitespace()) {
                                functionText += tokenStream.token().value;
                            }

                            //might be second time in the loop
                            if (tokenStream.LA(0) === Tokens.COMMA) {
                                functionText += tokenStream.token().value;
                            }

                            tokenStream.match(Tokens.IDENT);
                            functionText += tokenStream.token().value;

                            tokenStream.match(Tokens.EQUALS);
                            functionText += tokenStream.token().value;

                            //functionText += this._term();
                            lt = tokenStream.peek();
                            while (lt !== Tokens.COMMA && lt !== Tokens.S && lt !== Tokens.RPAREN) {
                                tokenStream.get();
                                functionText += tokenStream.token().value;
                                lt = tokenStream.peek();
                            }
                        } while (tokenStream.match([Tokens.COMMA, Tokens.S]));
                    }

                    //END: Horrible Hack

                    tokenStream.match(Tokens.RPAREN);
                    functionText += ")";
                    this._readWhitespace();
                }

                return functionText;
            },

            _ie_function: function() {

                /* (My own extension)
                 * ie_function
                 *   : IE_FUNCTION S* IDENT '=' term [S* ','? IDENT '=' term]+ ')' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    functionText = null,
                    lt;

                //IE function can begin like a regular function, too
                if (tokenStream.match([Tokens.IE_FUNCTION, Tokens.FUNCTION])) {
                    functionText = tokenStream.token().value;

                    do {

                        if (this._readWhitespace()) {
                            functionText += tokenStream.token().value;
                        }

                        //might be second time in the loop
                        if (tokenStream.LA(0) === Tokens.COMMA) {
                            functionText += tokenStream.token().value;
                        }

                        tokenStream.match(Tokens.IDENT);
                        functionText += tokenStream.token().value;

                        tokenStream.match(Tokens.EQUALS);
                        functionText += tokenStream.token().value;

                        //functionText += this._term();
                        lt = tokenStream.peek();
                        while (lt !== Tokens.COMMA && lt !== Tokens.S && lt !== Tokens.RPAREN) {
                            tokenStream.get();
                            functionText += tokenStream.token().value;
                            lt = tokenStream.peek();
                        }
                    } while (tokenStream.match([Tokens.COMMA, Tokens.S]));

                    tokenStream.match(Tokens.RPAREN);
                    functionText += ")";
                    this._readWhitespace();
                }

                return functionText;
            },

            _hexcolor: function() {
                /*
                 * There is a constraint on the color that it must
                 * have either 3 or 6 hex-digits (i.e., [0-9a-fA-F])
                 * after the "#"; e.g., "#000" is OK, but "#abcd" is not.
                 *
                 * hexcolor
                 *   : HASH S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    token = null,
                    color;

                if (tokenStream.match(Tokens.HASH)) {

                    //need to do some validation here

                    token = tokenStream.token();
                    color = token.value;
                    if (!/#[a-f0-9]{3,6}/i.test(color)) {
                        throw new SyntaxError("Expected a hex color but found '" + color + "' at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
                    }
                    this._readWhitespace();
                }

                return token;
            },

            //-----------------------------------------------------------------
            // Animations methods
            //-----------------------------------------------------------------

            _keyframes: function() {

                /*
                 * keyframes:
                 *   : KEYFRAMES_SYM S* keyframe_name S* '{' S* keyframe_rule* '}' {
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    token,
                    tt,
                    name,
                    prefix = "";

                tokenStream.mustMatch(Tokens.KEYFRAMES_SYM);
                token = tokenStream.token();
                if (/^@\-([^\-]+)\-/.test(token.value)) {
                    prefix = RegExp.$1;
                }

                this._readWhitespace();
                name = this._keyframe_name();

                this._readWhitespace();
                tokenStream.mustMatch(Tokens.LBRACE);

                this.fire({
                    type:   "startkeyframes",
                    name:   name,
                    prefix: prefix,
                    line:   token.startLine,
                    col:    token.startCol
                });

                this._readWhitespace();
                tt = tokenStream.peek();

                //check for key
                while (tt === Tokens.IDENT || tt === Tokens.PERCENTAGE) {
                    this._keyframe_rule();
                    this._readWhitespace();
                    tt = tokenStream.peek();
                }

                this.fire({
                    type:   "endkeyframes",
                    name:   name,
                    prefix: prefix,
                    line:   token.startLine,
                    col:    token.startCol
                });

                this._readWhitespace();
                tokenStream.mustMatch(Tokens.RBRACE);
                this._readWhitespace();

            },

            _keyframe_name: function() {

                /*
                 * keyframe_name:
                 *   : IDENT
                 *   | STRING
                 *   ;
                 */
                var tokenStream = this._tokenStream;

                tokenStream.mustMatch([Tokens.IDENT, Tokens.STRING]);
                return SyntaxUnit.fromToken(tokenStream.token());
            },

            _keyframe_rule: function() {

                /*
                 * keyframe_rule:
                 *   : key_list S*
                 *     '{' S* declaration [ ';' S* declaration ]* '}' S*
                 *   ;
                 */
                var keyList = this._key_list();

                this.fire({
                    type:   "startkeyframerule",
                    keys:   keyList,
                    line:   keyList[0].line,
                    col:    keyList[0].col
                });

                this._readDeclarations(true);

                this.fire({
                    type:   "endkeyframerule",
                    keys:   keyList,
                    line:   keyList[0].line,
                    col:    keyList[0].col
                });

            },

            _key_list: function() {

                /*
                 * key_list:
                 *   : key [ S* ',' S* key]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                    keyList = [];

                //must be least one key
                keyList.push(this._key());

                this._readWhitespace();

                while (tokenStream.match(Tokens.COMMA)) {
                    this._readWhitespace();
                    keyList.push(this._key());
                    this._readWhitespace();
                }

                return keyList;
            },

            _key: function() {
                /*
                 * There is a restriction that IDENT can be only "from" or "to".
                 *
                 * key
                 *   : PERCENTAGE
                 *   | IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                    token;

                if (tokenStream.match(Tokens.PERCENTAGE)) {
                    return SyntaxUnit.fromToken(tokenStream.token());
                } else if (tokenStream.match(Tokens.IDENT)) {
                    token = tokenStream.token();

                    if (/from|to/i.test(token.value)) {
                        return SyntaxUnit.fromToken(token);
                    }

                    tokenStream.unget();
                }

                //if it gets here, there wasn't a valid token, so time to explode
                this._unexpectedToken(tokenStream.LT(1));
            },

            //-----------------------------------------------------------------
            // Helper methods
            //-----------------------------------------------------------------

            /**
             * Not part of CSS grammar, but useful for skipping over
             * combination of white space and HTML-style comments.
             * @return {void}
             * @method _skipCruft
             * @private
             */
            _skipCruft: function() {
                while (this._tokenStream.match([Tokens.S, Tokens.CDO, Tokens.CDC])) {
                    //noop
                }
            },

            /**
             * Not part of CSS grammar, but this pattern occurs frequently
             * in the official CSS grammar. Split out here to eliminate
             * duplicate code.
             * @param {Boolean} checkStart Indicates if the rule should check
             *      for the left brace at the beginning.
             * @param {Boolean} readMargins Indicates if the rule should check
             *      for margin patterns.
             * @return {void}
             * @method _readDeclarations
             * @private
             */
            _readDeclarations: function(checkStart, readMargins) {
                /*
                 * Reads the pattern
                 * S* '{' S* declaration [ ';' S* declaration ]* '}' S*
                 * or
                 * S* '{' S* [ declaration | margin ]? [ ';' S* [ declaration | margin ]? ]* '}' S*
                 * Note that this is how it is described in CSS3 Paged Media, but is actually incorrect.
                 * A semicolon is only necessary following a declaration if there's another declaration
                 * or margin afterwards.
                 */
                var tokenStream = this._tokenStream,
                    tt;


                this._readWhitespace();

                if (checkStart) {
                    tokenStream.mustMatch(Tokens.LBRACE);
                }

                this._readWhitespace();

                try {

                    while (true) {

                        if (tokenStream.match(Tokens.SEMICOLON) || (readMargins && this._margin())) {
                            //noop
                        } else if (this._declaration()) {
                            if (!tokenStream.match(Tokens.SEMICOLON)) {
                                break;
                            }
                        } else {
                            break;
                        }

                        //if ((!this._margin() && !this._declaration()) || !tokenStream.match(Tokens.SEMICOLON)){
                        //    break;
                        //}
                        this._readWhitespace();
                    }

                    tokenStream.mustMatch(Tokens.RBRACE);
                    this._readWhitespace();

                } catch (ex) {
                    if (ex instanceof SyntaxError && !this.options.strict) {

                        //fire error event
                        this.fire({
                            type:       "error",
                            error:      ex,
                            message:    ex.message,
                            line:       ex.line,
                            col:        ex.col
                        });

                        //see if there's another declaration
                        tt = tokenStream.advance([Tokens.SEMICOLON, Tokens.RBRACE]);
                        if (tt === Tokens.SEMICOLON) {
                            //if there's a semicolon, then there might be another declaration
                            this._readDeclarations(false, readMargins);
                        } else if (tt !== Tokens.RBRACE) {
                            //if there's a right brace, the rule is finished so don't do anything
                            //otherwise, rethrow the error because it wasn't handled properly
                            throw ex;
                        }

                    } else {
                        //not a syntax error, rethrow it
                        throw ex;
                    }
                }

            },

            /**
             * In some cases, you can end up with two white space tokens in a
             * row. Instead of making a change in every function that looks for
             * white space, this function is used to match as much white space
             * as necessary.
             * @method _readWhitespace
             * @return {String} The white space if found, empty string if not.
             * @private
             */
            _readWhitespace: function() {

                var tokenStream = this._tokenStream,
                    ws = "";

                while (tokenStream.match(Tokens.S)) {
                    ws += tokenStream.token().value;
                }

                return ws;
            },


            /**
             * Throws an error when an unexpected token is found.
             * @param {Object} token The token that was found.
             * @method _unexpectedToken
             * @return {void}
             * @private
             */
            _unexpectedToken: function(token) {
                throw new SyntaxError("Unexpected token '" + token.value + "' at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
            },

            /**
             * Helper method used for parsing subparts of a style sheet.
             * @return {void}
             * @method _verifyEnd
             * @private
             */
            _verifyEnd: function() {
                if (this._tokenStream.LA(1) !== Tokens.EOF) {
                    this._unexpectedToken(this._tokenStream.LT(1));
                }
            },

            //-----------------------------------------------------------------
            // Validation methods
            //-----------------------------------------------------------------
            _validateProperty: function(property, value) {
                Validation.validate(property, value);
            },

            //-----------------------------------------------------------------
            // Parsing methods
            //-----------------------------------------------------------------

            parse: function(input) {
                this._tokenStream = new TokenStream(input, Tokens);
                this._stylesheet();
            },

            parseStyleSheet: function(input) {
                //just passthrough
                return this.parse(input);
            },

            parseMediaQuery: function(input) {
                this._tokenStream = new TokenStream(input, Tokens);
                var result = this._media_query();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
            },

            /**
             * Parses a property value (everything after the semicolon).
             * @return {parserlib.css.PropertyValue} The property value.
             * @throws parserlib.util.SyntaxError If an unexpected token is found.
             * @method parserPropertyValue
             */
            parsePropertyValue: function(input) {

                this._tokenStream = new TokenStream(input, Tokens);
                this._readWhitespace();

                var result = this._expr();

                //okay to have a trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
            },

            /**
             * Parses a complete CSS rule, including selectors and
             * properties.
             * @param {String} input The text to parser.
             * @return {Boolean} True if the parse completed successfully, false if not.
             * @method parseRule
             */
            parseRule: function(input) {
                this._tokenStream = new TokenStream(input, Tokens);

                //skip any leading white space
                this._readWhitespace();

                var result = this._ruleset();

                //skip any trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
            },

            /**
             * Parses a single CSS selector (no comma)
             * @param {String} input The text to parse as a CSS selector.
             * @return {Selector} An object representing the selector.
             * @throws parserlib.util.SyntaxError If an unexpected token is found.
             * @method parseSelector
             */
            parseSelector: function(input) {

                this._tokenStream = new TokenStream(input, Tokens);

                //skip any leading white space
                this._readWhitespace();

                var result = this._selector();

                //skip any trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
            },

            /**
             * Parses an HTML style attribute: a set of CSS declarations
             * separated by semicolons.
             * @param {String} input The text to parse as a style attribute
             * @return {void}
             * @method parseStyleAttribute
             */
            parseStyleAttribute: function(input) {
                input += "}"; // for error recovery in _readDeclarations()
                this._tokenStream = new TokenStream(input, Tokens);
                this._readDeclarations();
            }
        };

    //copy over onto prototype
    for (prop in additions) {
        if (Object.prototype.hasOwnProperty.call(additions, prop)) {
            proto[prop] = additions[prop];
        }
    }

    return proto;
}();


/*
nth
  : S* [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]? |
         ['-'|'+']? INTEGER | {O}{D}{D} | {E}{V}{E}{N} ] S*
  ;
*/

},{"../util/EventTarget":23,"../util/SyntaxError":25,"../util/SyntaxUnit":26,"./Combinator":2,"./MediaFeature":4,"./MediaQuery":5,"./PropertyName":8,"./PropertyValue":9,"./PropertyValuePart":11,"./Selector":13,"./SelectorPart":14,"./SelectorSubPart":15,"./TokenStream":17,"./Tokens":18,"./Validation":19}],7:[function(require,module,exports){
"use strict";

/* exported Properties */

var Properties = module.exports = {
    __proto__: null,

    //A
    "align-items"                   : "flex-start | flex-end | center | baseline | stretch",
    "align-content"                 : "flex-start | flex-end | center | space-between | space-around | stretch",
    "align-self"                    : "auto | flex-start | flex-end | center | baseline | stretch",
    "all"                           : "initial | inherit | unset",
    "-webkit-align-items"           : "flex-start | flex-end | center | baseline | stretch",
    "-webkit-align-content"         : "flex-start | flex-end | center | space-between | space-around | stretch",
    "-webkit-align-self"            : "auto | flex-start | flex-end | center | baseline | stretch",
    "alignment-adjust"              : "auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | <percentage> | <length>",
    "alignment-baseline"            : "auto | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
    "animation"                     : 1,
    "animation-delay"               : "<time>#",
    "animation-direction"           : "<single-animation-direction>#",
    "animation-duration"            : "<time>#",
    "animation-fill-mode"           : "[ none | forwards | backwards | both ]#",
    "animation-iteration-count"     : "[ <number> | infinite ]#",
    "animation-name"                : "[ none | <single-animation-name> ]#",
    "animation-play-state"          : "[ running | paused ]#",
    "animation-timing-function"     : 1,

    //vendor prefixed
    "-moz-animation-delay"               : "<time>#",
    "-moz-animation-direction"           : "[ normal | alternate ]#",
    "-moz-animation-duration"            : "<time>#",
    "-moz-animation-iteration-count"     : "[ <number> | infinite ]#",
    "-moz-animation-name"                : "[ none | <single-animation-name> ]#",
    "-moz-animation-play-state"          : "[ running | paused ]#",

    "-ms-animation-delay"               : "<time>#",
    "-ms-animation-direction"           : "[ normal | alternate ]#",
    "-ms-animation-duration"            : "<time>#",
    "-ms-animation-iteration-count"     : "[ <number> | infinite ]#",
    "-ms-animation-name"                : "[ none | <single-animation-name> ]#",
    "-ms-animation-play-state"          : "[ running | paused ]#",

    "-webkit-animation-delay"               : "<time>#",
    "-webkit-animation-direction"           : "[ normal | alternate ]#",
    "-webkit-animation-duration"            : "<time>#",
    "-webkit-animation-fill-mode"           : "[ none | forwards | backwards | both ]#",
    "-webkit-animation-iteration-count"     : "[ <number> | infinite ]#",
    "-webkit-animation-name"                : "[ none | <single-animation-name> ]#",
    "-webkit-animation-play-state"          : "[ running | paused ]#",

    "-o-animation-delay"               : "<time>#",
    "-o-animation-direction"           : "[ normal | alternate ]#",
    "-o-animation-duration"            : "<time>#",
    "-o-animation-iteration-count"     : "[ <number> | infinite ]#",
    "-o-animation-name"                : "[ none | <single-animation-name> ]#",
    "-o-animation-play-state"          : "[ running | paused ]#",

    "appearance"                    : "none | auto",
    "-moz-appearance"               : "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
    "-ms-appearance"                : "none | icon | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal",
    "-webkit-appearance"            : "none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | listbox	| listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button	| media-seek-forward-button	| media-slider | media-sliderthumb | menulist	| menulist-button	| menulist-text	| menulist-textfield | push-button	| radio	| searchfield	| searchfield-cancel-button	| searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical	| square-button	| textarea	| textfield	| scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical",
    "-o-appearance"                 : "none | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal",

    "azimuth"                       : "<azimuth>",

    //B
    "backface-visibility"           : "visible | hidden",
    "background"                    : 1,
    "background-attachment"         : "<attachment>#",
    "background-clip"               : "<box>#",
    "background-color"              : "<color>",
    "background-image"              : "<bg-image>#",
    "background-origin"             : "<box>#",
    "background-position"           : "<bg-position>",
    "background-repeat"             : "<repeat-style>#",
    "background-size"               : "<bg-size>#",
    "baseline-shift"                : "baseline | sub | super | <percentage> | <length>",
    "behavior"                      : 1,
    "binding"                       : 1,
    "bleed"                         : "<length>",
    "bookmark-label"                : "<content> | <attr> | <string>",
    "bookmark-level"                : "none | <integer>",
    "bookmark-state"                : "open | closed",
    "bookmark-target"               : "none | <uri> | <attr>",
    "border"                        : "<border-width> || <border-style> || <color>",
    "border-bottom"                 : "<border-width> || <border-style> || <color>",
    "border-bottom-color"           : "<color>",
    "border-bottom-left-radius"     :  "<x-one-radius>",
    "border-bottom-right-radius"    :  "<x-one-radius>",
    "border-bottom-style"           : "<border-style>",
    "border-bottom-width"           : "<border-width>",
    "border-collapse"               : "collapse | separate",
    "border-color"                  : "<color>{1,4}",
    "border-image"                  : 1,
    "border-image-outset"           : "[ <length> | <number> ]{1,4}",
    "border-image-repeat"           : "[ stretch | repeat | round ]{1,2}",
    "border-image-slice"            : "<border-image-slice>",
    "border-image-source"           : "<image> | none",
    "border-image-width"            : "[ <length> | <percentage> | <number> | auto ]{1,4}",
    "border-left"                   : "<border-width> || <border-style> || <color>",
    "border-left-color"             : "<color>",
    "border-left-style"             : "<border-style>",
    "border-left-width"             : "<border-width>",
    "border-radius"                 : "<border-radius>",
    "border-right"                  : "<border-width> || <border-style> || <color>",
    "border-right-color"            : "<color>",
    "border-right-style"            : "<border-style>",
    "border-right-width"            : "<border-width>",
    "border-spacing"                : "<length>{1,2}",
    "border-style"                  : "<border-style>{1,4}",
    "border-top"                    : "<border-width> || <border-style> || <color>",
    "border-top-color"              : "<color>",
    "border-top-left-radius"        : "<x-one-radius>",
    "border-top-right-radius"       : "<x-one-radius>",
    "border-top-style"              : "<border-style>",
    "border-top-width"              : "<border-width>",
    "border-width"                  : "<border-width>{1,4}",
    "bottom"                        : "<margin-width>",
    "-moz-box-align"                : "start | end | center | baseline | stretch",
    "-moz-box-decoration-break"     : "slice | clone",
    "-moz-box-direction"            : "normal | reverse",
    "-moz-box-flex"                 : "<number>",
    "-moz-box-flex-group"           : "<integer>",
    "-moz-box-lines"                : "single | multiple",
    "-moz-box-ordinal-group"        : "<integer>",
    "-moz-box-orient"               : "horizontal | vertical | inline-axis | block-axis",
    "-moz-box-pack"                 : "start | end | center | justify",
    "-o-box-decoration-break"       : "slice | clone",
    "-webkit-box-align"             : "start | end | center | baseline | stretch",
    "-webkit-box-decoration-break"  : "slice | clone",
    "-webkit-box-direction"         : "normal | reverse",
    "-webkit-box-flex"              : "<number>",
    "-webkit-box-flex-group"        : "<integer>",
    "-webkit-box-lines"             : "single | multiple",
    "-webkit-box-ordinal-group"     : "<integer>",
    "-webkit-box-orient"            : "horizontal | vertical | inline-axis | block-axis",
    "-webkit-box-pack"              : "start | end | center | justify",
    "box-decoration-break"          : "slice | clone",
    "box-shadow"                    : "<box-shadow>",
    "box-sizing"                    : "content-box | border-box",
    "break-after"                   : "auto | always | avoid | left | right | page | column | avoid-page | avoid-column",
    "break-before"                  : "auto | always | avoid | left | right | page | column | avoid-page | avoid-column",
    "break-inside"                  : "auto | avoid | avoid-page | avoid-column",

    //C
    "caption-side"                  : "top | bottom",
    "clear"                         : "none | right | left | both",
    "clip"                          : "<shape> | auto",
    "-webkit-clip-path"             : "<clip-source> | <clip-path> | none",
    "clip-path"                     : "<clip-source> | <clip-path> | none",
    "clip-rule"                     : "nonzero | evenodd",
    "color"                         : "<color>",
    "color-interpolation"           : "auto | sRGB | linearRGB",
    "color-interpolation-filters"   : "auto | sRGB | linearRGB",
    "color-profile"                 : 1,
    "color-rendering"               : "auto | optimizeSpeed | optimizeQuality",
    "column-count"                  : "<integer> | auto",                      //https://www.w3.org/TR/css3-multicol/
    "column-fill"                   : "auto | balance",
    "column-gap"                    : "<length> | normal",
    "column-rule"                   : "<border-width> || <border-style> || <color>",
    "column-rule-color"             : "<color>",
    "column-rule-style"             : "<border-style>",
    "column-rule-width"             : "<border-width>",
    "column-span"                   : "none | all",
    "column-width"                  : "<length> | auto",
    "columns"                       : 1,
    "content"                       : 1,
    "counter-increment"             : 1,
    "counter-reset"                 : 1,
    "crop"                          : "<shape> | auto",
    "cue"                           : "cue-after | cue-before",
    "cue-after"                     : 1,
    "cue-before"                    : 1,
    "cursor"                        : 1,

    //D
    "direction"                     : "ltr | rtl",
    "display"                       : "inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | none | -moz-box | -moz-inline-block | -moz-inline-box | -moz-inline-grid | -moz-inline-stack | -moz-inline-table | -moz-grid | -moz-grid-group | -moz-grid-line | -moz-groupbox | -moz-deck | -moz-popup | -moz-stack | -moz-marker | -webkit-box | -webkit-inline-box | -ms-flexbox | -ms-inline-flexbox | flex | -webkit-flex | inline-flex | -webkit-inline-flex",
    "dominant-baseline"             : "auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge",
    "drop-initial-after-adjust"     : "central | middle | after-edge | text-after-edge | ideographic | alphabetic | mathematical | <percentage> | <length>",
    "drop-initial-after-align"      : "baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
    "drop-initial-before-adjust"    : "before-edge | text-before-edge | central | middle | hanging | mathematical | <percentage> | <length>",
    "drop-initial-before-align"     : "caps-height | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
    "drop-initial-size"             : "auto | line | <length> | <percentage>",
    "drop-initial-value"            : "<integer>",

    //E
    "elevation"                     : "<angle> | below | level | above | higher | lower",
    "empty-cells"                   : "show | hide",
    "enable-background"             : 1,

    //F
    "fill"                          : "<paint>",
    "fill-opacity"                  : "<opacity-value>",
    "fill-rule"                     : "nonzero | evenodd",
    "filter"                        : "<filter-function-list> | none",
    "fit"                           : "fill | hidden | meet | slice",
    "fit-position"                  : 1,
    "flex"                          : "<flex>",
    "flex-basis"                    : "<width>",
    "flex-direction"                : "row | row-reverse | column | column-reverse",
    "flex-flow"                     : "<flex-direction> || <flex-wrap>",
    "flex-grow"                     : "<number>",
    "flex-shrink"                   : "<number>",
    "flex-wrap"                     : "nowrap | wrap | wrap-reverse",
    "-webkit-flex"                  : "<flex>",
    "-webkit-flex-basis"            : "<width>",
    "-webkit-flex-direction"        : "row | row-reverse | column | column-reverse",
    "-webkit-flex-flow"             : "<flex-direction> || <flex-wrap>",
    "-webkit-flex-grow"             : "<number>",
    "-webkit-flex-shrink"           : "<number>",
    "-webkit-flex-wrap"             : "nowrap | wrap | wrap-reverse",
    "-ms-flex"                      : "<flex>",
    "-ms-flex-align"                : "start | end | center | stretch | baseline",
    "-ms-flex-direction"            : "row | row-reverse | column | column-reverse",
    "-ms-flex-order"                : "<number>",
    "-ms-flex-pack"                 : "start | end | center | justify",
    "-ms-flex-wrap"                 : "nowrap | wrap | wrap-reverse",
    "float"                         : "left | right | none",
    "float-offset"                  : 1,
    "flood-color"                   : 1,
    "flood-opacity"                 : "<opacity-value>",
    "font"                          : "<font-shorthand> | caption | icon | menu | message-box | small-caption | status-bar",
    "font-family"                   : "<font-family>",
    "font-feature-settings"         : "<feature-tag-value> | normal",
    "font-kerning"                  : "auto | normal | none",
    "font-size"                     : "<font-size>",
    "font-size-adjust"              : "<number> | none",
    "font-stretch"                  : "<font-stretch>",
    "font-style"                    : "<font-style>",
    "font-variant"                  : "<font-variant> | normal | none",
    "font-variant-alternates"       : "<font-variant-alternates> | normal",
    "font-variant-caps"             : "<font-variant-caps> | normal",
    "font-variant-east-asian"       : "<font-variant-east-asian> | normal",
    "font-variant-ligatures"        : "<font-variant-ligatures> | normal | none",
    "font-variant-numeric"          : "<font-variant-numeric> | normal",
    "font-variant-position"         : "normal | sub | super",
    "font-weight"                   : "<font-weight>",

    //G
    "glyph-orientation-horizontal"  : "<glyph-angle>",
    "glyph-orientation-vertical"    : "auto | <glyph-angle>",
    "grid"                          : 1,
    "grid-area"                     : 1,
    "grid-auto-columns"             : 1,
    "grid-auto-flow"                : 1,
    "grid-auto-position"            : 1,
    "grid-auto-rows"                : 1,
    "grid-cell-stacking"            : "columns | rows | layer",
    "grid-column"                   : 1,
    "grid-columns"                  : 1,
    "grid-column-align"             : "start | end | center | stretch",
    "grid-column-sizing"            : 1,
    "grid-column-start"             : 1,
    "grid-column-end"               : 1,
    "grid-column-span"              : "<integer>",
    "grid-flow"                     : "none | rows | columns",
    "grid-layer"                    : "<integer>",
    "grid-row"                      : 1,
    "grid-rows"                     : 1,
    "grid-row-align"                : "start | end | center | stretch",
    "grid-row-start"                : 1,
    "grid-row-end"                  : 1,
    "grid-row-span"                 : "<integer>",
    "grid-row-sizing"               : 1,
    "grid-template"                 : 1,
    "grid-template-areas"           : 1,
    "grid-template-columns"         : 1,
    "grid-template-rows"            : 1,

    //H
    "hanging-punctuation"           : 1,
    "height"                        : "<margin-width> | <content-sizing>",
    "hyphenate-after"               : "<integer> | auto",
    "hyphenate-before"              : "<integer> | auto",
    "hyphenate-character"           : "<string> | auto",
    "hyphenate-lines"               : "no-limit | <integer>",
    "hyphenate-resource"            : 1,
    "hyphens"                       : "none | manual | auto",

    //I
    "icon"                          : 1,
    "image-orientation"             : "angle | auto",
    "image-rendering"               : "auto | optimizeSpeed | optimizeQuality",
    "image-resolution"              : 1,
    "ime-mode"                      : "auto | normal | active | inactive | disabled",
    "inline-box-align"              : "last | <integer>",

    //J
    "justify-content"               : "flex-start | flex-end | center | space-between | space-around",
    "-webkit-justify-content"       : "flex-start | flex-end | center | space-between | space-around",

    //K
    "kerning"                       : "auto | <length>",

    //L
    "left"                          : "<margin-width>",
    "letter-spacing"                : "<length> | normal",
    "line-height"                   : "<line-height>",
    "line-break"                    : "auto | loose | normal | strict",
    "line-stacking"                 : 1,
    "line-stacking-ruby"            : "exclude-ruby | include-ruby",
    "line-stacking-shift"           : "consider-shifts | disregard-shifts",
    "line-stacking-strategy"        : "inline-line-height | block-line-height | max-height | grid-height",
    "list-style"                    : 1,
    "list-style-image"              : "<uri> | none",
    "list-style-position"           : "inside | outside",
    "list-style-type"               : "disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none",

    //M
    "margin"                        : "<margin-width>{1,4}",
    "margin-bottom"                 : "<margin-width>",
    "margin-left"                   : "<margin-width>",
    "margin-right"                  : "<margin-width>",
    "margin-top"                    : "<margin-width>",
    "mark"                          : 1,
    "mark-after"                    : 1,
    "mark-before"                   : 1,
    "marker"                        : 1,
    "marker-end"                    : 1,
    "marker-mid"                    : 1,
    "marker-start"                  : 1,
    "marks"                         : 1,
    "marquee-direction"             : 1,
    "marquee-play-count"            : 1,
    "marquee-speed"                 : 1,
    "marquee-style"                 : 1,
    "mask"                          : 1,
    "max-height"                    : "<length> | <percentage> | <content-sizing> | none",
    "max-width"                     : "<length> | <percentage> | <content-sizing> | none",
    "min-height"                    : "<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats",
    "min-width"                     : "<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats",
    "move-to"                       : 1,

    //N
    "nav-down"                      : 1,
    "nav-index"                     : 1,
    "nav-left"                      : 1,
    "nav-right"                     : 1,
    "nav-up"                        : 1,

    //O
    "object-fit"                    : "fill | contain | cover | none | scale-down",
    "object-position"               : "<position>",
    "opacity"                       : "<opacity-value>",
    "order"                         : "<integer>",
    "-webkit-order"                 : "<integer>",
    "orphans"                       : "<integer>",
    "outline"                       : 1,
    "outline-color"                 : "<color> | invert",
    "outline-offset"                : 1,
    "outline-style"                 : "<border-style>",
    "outline-width"                 : "<border-width>",
    "overflow"                      : "visible | hidden | scroll | auto",
    "overflow-style"                : 1,
    "overflow-wrap"                 : "normal | break-word",
    "overflow-x"                    : 1,
    "overflow-y"                    : 1,

    //P
    "padding"                       : "<padding-width>{1,4}",
    "padding-bottom"                : "<padding-width>",
    "padding-left"                  : "<padding-width>",
    "padding-right"                 : "<padding-width>",
    "padding-top"                   : "<padding-width>",
    "page"                          : 1,
    "page-break-after"              : "auto | always | avoid | left | right",
    "page-break-before"             : "auto | always | avoid | left | right",
    "page-break-inside"             : "auto | avoid",
    "page-policy"                   : 1,
    "pause"                         : 1,
    "pause-after"                   : 1,
    "pause-before"                  : 1,
    "perspective"                   : 1,
    "perspective-origin"            : 1,
    "phonemes"                      : 1,
    "pitch"                         : 1,
    "pitch-range"                   : 1,
    "play-during"                   : 1,
    "pointer-events"                : "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all",
    "position"                      : "static | relative | absolute | fixed",
    "presentation-level"            : 1,
    "punctuation-trim"              : 1,

    //Q
    "quotes"                        : 1,

    //R
    "rendering-intent"              : 1,
    "resize"                        : 1,
    "rest"                          : 1,
    "rest-after"                    : 1,
    "rest-before"                   : 1,
    "richness"                      : 1,
    "right"                         : "<margin-width>",
    "rotation"                      : 1,
    "rotation-point"                : 1,
    "ruby-align"                    : 1,
    "ruby-overhang"                 : 1,
    "ruby-position"                 : 1,
    "ruby-span"                     : 1,

    //S
    "shape-rendering"               : "auto | optimizeSpeed | crispEdges | geometricPrecision",
    "size"                          : 1,
    "speak"                         : "normal | none | spell-out",
    "speak-header"                  : "once | always",
    "speak-numeral"                 : "digits | continuous",
    "speak-punctuation"             : "code | none",
    "speech-rate"                   : 1,
    "src"                           : 1,
    "stop-color"                    : 1,
    "stop-opacity"                  : "<opacity-value>",
    "stress"                        : 1,
    "string-set"                    : 1,
    "stroke"                        : "<paint>",
    "stroke-dasharray"              : "none | <dasharray>",
    "stroke-dashoffset"             : "<percentage> | <length>",
    "stroke-linecap"                : "butt | round | square",
    "stroke-linejoin"               : "miter | round | bevel",
    "stroke-miterlimit"             : "<miterlimit>",
    "stroke-opacity"                : "<opacity-value>",
    "stroke-width"                  : "<percentage> | <length>",

    "table-layout"                  : "auto | fixed",
    "tab-size"                      : "<integer> | <length>",
    "target"                        : 1,
    "target-name"                   : 1,
    "target-new"                    : 1,
    "target-position"               : 1,
    "text-align"                    : "left | right | center | justify | match-parent | start | end",
    "text-align-last"               : 1,
    "text-anchor"                   : "start | middle | end",
    "text-decoration"               : "<text-decoration-line> || <text-decoration-style> || <text-decoration-color>",
    "text-decoration-color"         : "<text-decoration-color>",
    "text-decoration-line"          : "<text-decoration-line>",
    "text-decoration-style"         : "<text-decoration-style>",
    "text-emphasis"                 : 1,
    "text-height"                   : 1,
    "text-indent"                   : "<length> | <percentage>",
    "text-justify"                  : "auto | none | inter-word | inter-ideograph | inter-cluster | distribute | kashida",
    "text-outline"                  : 1,
    "text-overflow"                 : 1,
    "text-rendering"                : "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
    "text-shadow"                   : 1,
    "text-transform"                : "capitalize | uppercase | lowercase | none",
    "text-wrap"                     : "normal | none | avoid",
    "top"                           : "<margin-width>",
    "-ms-touch-action"              : "auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation",
    "touch-action"                  : "auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation",
    "transform"                     : 1,
    "transform-origin"              : 1,
    "transform-style"               : 1,
    "transition"                    : 1,
    "transition-delay"              : 1,
    "transition-duration"           : 1,
    "transition-property"           : 1,
    "transition-timing-function"    : 1,

    //U
    "unicode-bidi"                  : "normal | embed | isolate | bidi-override | isolate-override | plaintext",
    "user-modify"                   : "read-only | read-write | write-only",
    "user-select"                   : "none | text | toggle | element | elements | all",

    //V
    "vertical-align"                : "auto | use-script | baseline | sub | super | top | text-top | central | middle | bottom | text-bottom | <percentage> | <length>",
    "visibility"                    : "visible | hidden | collapse",
    "voice-balance"                 : 1,
    "voice-duration"                : 1,
    "voice-family"                  : 1,
    "voice-pitch"                   : 1,
    "voice-pitch-range"             : 1,
    "voice-rate"                    : 1,
    "voice-stress"                  : 1,
    "voice-volume"                  : 1,
    "volume"                        : 1,

    //W
    "white-space"                   : "normal | pre | nowrap | pre-wrap | pre-line | -pre-wrap | -o-pre-wrap | -moz-pre-wrap | -hp-pre-wrap",   // https://perishablepress.com/wrapping-content/
    "white-space-collapse"          : 1,
    "widows"                        : "<integer>",
    "width"                         : "<length> | <percentage> | <content-sizing> | auto",
    "will-change"                   : "<will-change>",
    "word-break"                    : "normal | keep-all | break-all",
    "word-spacing"                  : "<length> | normal",
    "word-wrap"                     : "normal | break-word",
    "writing-mode"                  : "horizontal-tb | vertical-rl | vertical-lr | lr-tb | rl-tb | tb-rl | bt-rl | tb-lr | bt-lr | lr-bt | rl-bt | lr | rl | tb",

    //Z
    "z-index"                       : "<integer> | auto",
    "zoom"                          : "<number> | <percentage> | normal"
};

},{}],8:[function(require,module,exports){
"use strict";

module.exports = PropertyName;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents a selector combinator (whitespace, +, >).
 * @namespace parserlib.css
 * @class PropertyName
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {String} text The text representation of the unit.
 * @param {String} hack The type of IE hack applied ("*", "_", or null).
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function PropertyName(text, hack, line, col) {

    SyntaxUnit.call(this, text, line, col, Parser.PROPERTY_NAME_TYPE);

    /**
     * The type of IE hack applied ("*", "_", or null).
     * @type String
     * @property hack
     */
    this.hack = hack;

}

PropertyName.prototype = new SyntaxUnit();
PropertyName.prototype.constructor = PropertyName;
PropertyName.prototype.toString = function() {
    return (this.hack ? this.hack : "") + this.text;
};

},{"../util/SyntaxUnit":26,"./Parser":6}],9:[function(require,module,exports){
"use strict";

module.exports = PropertyValue;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents a single part of a CSS property value, meaning that it represents
 * just everything single part between ":" and ";". If there are multiple values
 * separated by commas, this type represents just one of the values.
 * @param {String[]} parts An array of value parts making up this value.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 * @namespace parserlib.css
 * @class PropertyValue
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 */
function PropertyValue(parts, line, col) {

    SyntaxUnit.call(this, parts.join(" "), line, col, Parser.PROPERTY_VALUE_TYPE);

    /**
     * The parts that make up the selector.
     * @type Array
     * @property parts
     */
    this.parts = parts;

}

PropertyValue.prototype = new SyntaxUnit();
PropertyValue.prototype.constructor = PropertyValue;


},{"../util/SyntaxUnit":26,"./Parser":6}],10:[function(require,module,exports){
"use strict";

module.exports = PropertyValueIterator;

/**
 * A utility class that allows for easy iteration over the various parts of a
 * property value.
 * @param {parserlib.css.PropertyValue} value The property value to iterate over.
 * @namespace parserlib.css
 * @class PropertyValueIterator
 * @constructor
 */
function PropertyValueIterator(value) {

    /**
     * Iterator value
     * @type int
     * @property _i
     * @private
     */
    this._i = 0;

    /**
     * The parts that make up the value.
     * @type Array
     * @property _parts
     * @private
     */
    this._parts = value.parts;

    /**
     * Keeps track of bookmarks along the way.
     * @type Array
     * @property _marks
     * @private
     */
    this._marks = [];

    /**
     * Holds the original property value.
     * @type parserlib.css.PropertyValue
     * @property value
     */
    this.value = value;

}

/**
 * Returns the total number of parts in the value.
 * @return {int} The total number of parts in the value.
 * @method count
 */
PropertyValueIterator.prototype.count = function() {
    return this._parts.length;
};

/**
 * Indicates if the iterator is positioned at the first item.
 * @return {Boolean} True if positioned at first item, false if not.
 * @method isFirst
 */
PropertyValueIterator.prototype.isFirst = function() {
    return this._i === 0;
};

/**
 * Indicates if there are more parts of the property value.
 * @return {Boolean} True if there are more parts, false if not.
 * @method hasNext
 */
PropertyValueIterator.prototype.hasNext = function() {
    return this._i < this._parts.length;
};

/**
 * Marks the current spot in the iteration so it can be restored to
 * later on.
 * @return {void}
 * @method mark
 */
PropertyValueIterator.prototype.mark = function() {
    this._marks.push(this._i);
};

/**
 * Returns the next part of the property value or null if there is no next
 * part. Does not move the internal counter forward.
 * @return {parserlib.css.PropertyValuePart} The next part of the property value or null if there is no next
 * part.
 * @method peek
 */
PropertyValueIterator.prototype.peek = function(count) {
    return this.hasNext() ? this._parts[this._i + (count || 0)] : null;
};

/**
 * Returns the next part of the property value or null if there is no next
 * part.
 * @return {parserlib.css.PropertyValuePart} The next part of the property value or null if there is no next
 * part.
 * @method next
 */
PropertyValueIterator.prototype.next = function() {
    return this.hasNext() ? this._parts[this._i++] : null;
};

/**
 * Returns the previous part of the property value or null if there is no
 * previous part.
 * @return {parserlib.css.PropertyValuePart} The previous part of the
 * property value or null if there is no previous part.
 * @method previous
 */
PropertyValueIterator.prototype.previous = function() {
    return this._i > 0 ? this._parts[--this._i] : null;
};

/**
 * Restores the last saved bookmark.
 * @return {void}
 * @method restore
 */
PropertyValueIterator.prototype.restore = function() {
    if (this._marks.length) {
        this._i = this._marks.pop();
    }
};

/**
 * Drops the last saved bookmark.
 * @return {void}
 * @method drop
 */
PropertyValueIterator.prototype.drop = function() {
    this._marks.pop();
};

},{}],11:[function(require,module,exports){
"use strict";

module.exports = PropertyValuePart;

var SyntaxUnit = require("../util/SyntaxUnit");

var Colors = require("./Colors");
var Parser = require("./Parser");
var Tokens = require("./Tokens");

/**
 * Represents a single part of a CSS property value, meaning that it represents
 * just one part of the data between ":" and ";".
 * @param {String} text The text representation of the unit.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 * @namespace parserlib.css
 * @class PropertyValuePart
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 */
function PropertyValuePart(text, line, col, optionalHint) {
    var hint = optionalHint || {};

    SyntaxUnit.call(this, text, line, col, Parser.PROPERTY_VALUE_PART_TYPE);

    /**
     * Indicates the type of value unit.
     * @type String
     * @property type
     */
    this.type = "unknown";

    //figure out what type of data it is

    var temp;

    //it is a measurement?
    if (/^([+\-]?[\d\.]+)([a-z]+)$/i.test(text)) {  //dimension
        this.type = "dimension";
        this.value = +RegExp.$1;
        this.units = RegExp.$2;

        //try to narrow down
        switch (this.units.toLowerCase()) {

            case "em":
            case "rem":
            case "ex":
            case "px":
            case "cm":
            case "mm":
            case "in":
            case "pt":
            case "pc":
            case "ch":
            case "vh":
            case "vw":
            case "vmax":
            case "vmin":
                this.type = "length";
                break;

            case "fr":
                this.type = "grid";
                break;

            case "deg":
            case "rad":
            case "grad":
            case "turn":
                this.type = "angle";
                break;

            case "ms":
            case "s":
                this.type = "time";
                break;

            case "hz":
            case "khz":
                this.type = "frequency";
                break;

            case "dpi":
            case "dpcm":
                this.type = "resolution";
                break;

            //default

        }

    } else if (/^([+\-]?[\d\.]+)%$/i.test(text)) {  //percentage
        this.type = "percentage";
        this.value = +RegExp.$1;
    } else if (/^([+\-]?\d+)$/i.test(text)) {  //integer
        this.type = "integer";
        this.value = +RegExp.$1;
    } else if (/^([+\-]?[\d\.]+)$/i.test(text)) {  //number
        this.type = "number";
        this.value = +RegExp.$1;

    } else if (/^#([a-f0-9]{3,6})/i.test(text)) {  //hexcolor
        this.type = "color";
        temp = RegExp.$1;
        if (temp.length === 3) {
            this.red    = parseInt(temp.charAt(0)+temp.charAt(0), 16);
            this.green  = parseInt(temp.charAt(1)+temp.charAt(1), 16);
            this.blue   = parseInt(temp.charAt(2)+temp.charAt(2), 16);
        } else {
            this.red    = parseInt(temp.substring(0, 2), 16);
            this.green  = parseInt(temp.substring(2, 4), 16);
            this.blue   = parseInt(temp.substring(4, 6), 16);
        }
    } else if (/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i.test(text)) { //rgb() color with absolute numbers
        this.type   = "color";
        this.red    = +RegExp.$1;
        this.green  = +RegExp.$2;
        this.blue   = +RegExp.$3;
    } else if (/^rgb\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i.test(text)) { //rgb() color with percentages
        this.type   = "color";
        this.red    = +RegExp.$1 * 255 / 100;
        this.green  = +RegExp.$2 * 255 / 100;
        this.blue   = +RegExp.$3 * 255 / 100;
    } else if (/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/i.test(text)) { //rgba() color with absolute numbers
        this.type   = "color";
        this.red    = +RegExp.$1;
        this.green  = +RegExp.$2;
        this.blue   = +RegExp.$3;
        this.alpha  = +RegExp.$4;
    } else if (/^rgba\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d\.]+)\s*\)/i.test(text)) { //rgba() color with percentages
        this.type   = "color";
        this.red    = +RegExp.$1 * 255 / 100;
        this.green  = +RegExp.$2 * 255 / 100;
        this.blue   = +RegExp.$3 * 255 / 100;
        this.alpha  = +RegExp.$4;
    } else if (/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i.test(text)) { //hsl()
        this.type   = "color";
        this.hue    = +RegExp.$1;
        this.saturation = +RegExp.$2 / 100;
        this.lightness  = +RegExp.$3 / 100;
    } else if (/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d\.]+)\s*\)/i.test(text)) { //hsla() color with percentages
        this.type   = "color";
        this.hue    = +RegExp.$1;
        this.saturation = +RegExp.$2 / 100;
        this.lightness  = +RegExp.$3 / 100;
        this.alpha  = +RegExp.$4;
    } else if (/^url\(("([^\\"]|\\.)*")\)/i.test(text)) { //URI
        // generated by TokenStream.readURI, so always double-quoted.
        this.type   = "uri";
        this.uri    = PropertyValuePart.parseString(RegExp.$1);
    } else if (/^([^\(]+)\(/i.test(text)) {
        this.type   = "function";
        this.name   = RegExp.$1;
        this.value  = text;
    } else if (/^"([^\n\r\f\\"]|\\\r\n|\\[^\r0-9a-f]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)*"/i.test(text)) {    //double-quoted string
        this.type   = "string";
        this.value  = PropertyValuePart.parseString(text);
    } else if (/^'([^\n\r\f\\']|\\\r\n|\\[^\r0-9a-f]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)*'/i.test(text)) {    //single-quoted string
        this.type   = "string";
        this.value  = PropertyValuePart.parseString(text);
    } else if (Colors[text.toLowerCase()]) {  //named color
        this.type   = "color";
        temp        = Colors[text.toLowerCase()].substring(1);
        this.red    = parseInt(temp.substring(0, 2), 16);
        this.green  = parseInt(temp.substring(2, 4), 16);
        this.blue   = parseInt(temp.substring(4, 6), 16);
    } else if (/^[,\/]$/.test(text)) {
        this.type   = "operator";
        this.value  = text;
    } else if (/^-?[a-z_\u00A0-\uFFFF][a-z0-9\-_\u00A0-\uFFFF]*$/i.test(text)) {
        this.type   = "identifier";
        this.value  = text;
    }

    // There can be ambiguity with escape sequences in identifiers, as
    // well as with "color" parts which are also "identifiers", so record
    // an explicit hint when the token generating this PropertyValuePart
    // was an identifier.
    this.wasIdent = Boolean(hint.ident);

}

PropertyValuePart.prototype = new SyntaxUnit();
PropertyValuePart.prototype.constructor = PropertyValuePart;

/**
 * Helper method to parse a CSS string.
 */
PropertyValuePart.parseString = function(str) {
    str = str.slice(1, -1); // Strip surrounding single/double quotes
    var replacer = function(match, esc) {
        if (/^(\n|\r\n|\r|\f)$/.test(esc)) {
            return "";
        }
        var m = /^[0-9a-f]{1,6}/i.exec(esc);
        if (m) {
            var codePoint = parseInt(m[0], 16);
            if (String.fromCodePoint) {
                return String.fromCodePoint(codePoint);
            } else {
                // XXX No support for surrogates on old JavaScript engines.
                return String.fromCharCode(codePoint);
            }
        }
        return esc;
    };
    return str.replace(/\\(\r\n|[^\r0-9a-f]|[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)/ig,
                       replacer);
};

/**
 * Helper method to serialize a CSS string.
 */
PropertyValuePart.serializeString = function(value) {
    var replacer = function(match, c) {
        if (c === "\"") {
            return "\\" + c;
        }
        var cp = String.codePointAt ? String.codePointAt(0) :
            // We only escape non-surrogate chars, so using charCodeAt
            // is harmless here.
            String.charCodeAt(0);
        return "\\" + cp.toString(16) + " ";
    };
    return "\"" + value.replace(/["\r\n\f]/g, replacer) + "\"";
};

/**
 * Create a new syntax unit based solely on the given token.
 * Convenience method for creating a new syntax unit when
 * it represents a single token instead of multiple.
 * @param {Object} token The token object to represent.
 * @return {parserlib.css.PropertyValuePart} The object representing the token.
 * @static
 * @method fromToken
 */
PropertyValuePart.fromToken = function(token) {
    var part = new PropertyValuePart(token.value, token.startLine, token.startCol, {
        // Tokens can have escaped characters that would fool the type
        // identification in the PropertyValuePart constructor, so pass
        // in a hint if this was an identifier.
        ident: token.type === Tokens.IDENT
    });
    return part;
};

},{"../util/SyntaxUnit":26,"./Colors":1,"./Parser":6,"./Tokens":18}],12:[function(require,module,exports){
"use strict";

var Pseudos = module.exports = {
    __proto__:       null,
    ":first-letter": 1,
    ":first-line":   1,
    ":before":       1,
    ":after":        1
};

Pseudos.ELEMENT = 1;
Pseudos.CLASS = 2;

Pseudos.isElement = function(pseudo) {
    return pseudo.indexOf("::") === 0 || Pseudos[pseudo.toLowerCase()] === Pseudos.ELEMENT;
};

},{}],13:[function(require,module,exports){
"use strict";

module.exports = Selector;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");
var Specificity = require("./Specificity");

/**
 * Represents an entire single selector, including all parts but not
 * including multiple selectors (those separated by commas).
 * @namespace parserlib.css
 * @class Selector
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {Array} parts Array of selectors parts making up this selector.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function Selector(parts, line, col) {

    SyntaxUnit.call(this, parts.join(" "), line, col, Parser.SELECTOR_TYPE);

    /**
     * The parts that make up the selector.
     * @type Array
     * @property parts
     */
    this.parts = parts;

    /**
     * The specificity of the selector.
     * @type parserlib.css.Specificity
     * @property specificity
     */
    this.specificity = Specificity.calculate(this);

}

Selector.prototype = new SyntaxUnit();
Selector.prototype.constructor = Selector;


},{"../util/SyntaxUnit":26,"./Parser":6,"./Specificity":16}],14:[function(require,module,exports){
"use strict";

module.exports = SelectorPart;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents a single part of a selector string, meaning a single set of
 * element name and modifiers. This does not include combinators such as
 * spaces, +, >, etc.
 * @namespace parserlib.css
 * @class SelectorPart
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {String} elementName The element name in the selector or null
 *      if there is no element name.
 * @param {Array} modifiers Array of individual modifiers for the element.
 *      May be empty if there are none.
 * @param {String} text The text representation of the unit.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function SelectorPart(elementName, modifiers, text, line, col) {

    SyntaxUnit.call(this, text, line, col, Parser.SELECTOR_PART_TYPE);

    /**
     * The tag name of the element to which this part
     * of the selector affects.
     * @type String
     * @property elementName
     */
    this.elementName = elementName;

    /**
     * The parts that come after the element name, such as class names, IDs,
     * pseudo classes/elements, etc.
     * @type Array
     * @property modifiers
     */
    this.modifiers = modifiers;

}

SelectorPart.prototype = new SyntaxUnit();
SelectorPart.prototype.constructor = SelectorPart;


},{"../util/SyntaxUnit":26,"./Parser":6}],15:[function(require,module,exports){
"use strict";

module.exports = SelectorSubPart;

var SyntaxUnit = require("../util/SyntaxUnit");

var Parser = require("./Parser");

/**
 * Represents a selector modifier string, meaning a class name, element name,
 * element ID, pseudo rule, etc.
 * @namespace parserlib.css
 * @class SelectorSubPart
 * @extends parserlib.util.SyntaxUnit
 * @constructor
 * @param {String} text The text representation of the unit.
 * @param {String} type The type of selector modifier.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function SelectorSubPart(text, type, line, col) {

    SyntaxUnit.call(this, text, line, col, Parser.SELECTOR_SUB_PART_TYPE);

    /**
     * The type of modifier.
     * @type String
     * @property type
     */
    this.type = type;

    /**
     * Some subparts have arguments, this represents them.
     * @type Array
     * @property args
     */
    this.args = [];

}

SelectorSubPart.prototype = new SyntaxUnit();
SelectorSubPart.prototype.constructor = SelectorSubPart;


},{"../util/SyntaxUnit":26,"./Parser":6}],16:[function(require,module,exports){
"use strict";

module.exports = Specificity;

var Pseudos = require("./Pseudos");
var SelectorPart = require("./SelectorPart");

/**
 * Represents a selector's specificity.
 * @namespace parserlib.css
 * @class Specificity
 * @constructor
 * @param {int} a Should be 1 for inline styles, zero for stylesheet styles
 * @param {int} b Number of ID selectors
 * @param {int} c Number of classes and pseudo classes
 * @param {int} d Number of element names and pseudo elements
 */
function Specificity(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Specificity.prototype = {
    constructor: Specificity,

    /**
     * Compare this specificity to another.
     * @param {Specificity} other The other specificity to compare to.
     * @return {int} -1 if the other specificity is larger, 1 if smaller, 0 if equal.
     * @method compare
     */
    compare: function(other) {
        var comps = ["a", "b", "c", "d"],
            i, len;

        for (i=0, len=comps.length; i < len; i++) {
            if (this[comps[i]] < other[comps[i]]) {
                return -1;
            } else if (this[comps[i]] > other[comps[i]]) {
                return 1;
            }
        }

        return 0;
    },

    /**
     * Creates a numeric value for the specificity.
     * @return {int} The numeric value for the specificity.
     * @method valueOf
     */
    valueOf: function() {
        return (this.a * 1000) + (this.b * 100) + (this.c * 10) + this.d;
    },

    /**
     * Returns a string representation for specificity.
     * @return {String} The string representation of specificity.
     * @method toString
     */
    toString: function() {
        return this.a + "," + this.b + "," + this.c + "," + this.d;
    }

};

/**
 * Calculates the specificity of the given selector.
 * @param {parserlib.css.Selector} The selector to calculate specificity for.
 * @return {parserlib.css.Specificity} The specificity of the selector.
 * @static
 * @method calculate
 */
Specificity.calculate = function(selector) {

    var i, len,
        part,
        b=0, c=0, d=0;

    function updateValues(part) {

        var i, j, len, num,
            elementName = part.elementName ? part.elementName.text : "",
            modifier;

        if (elementName && elementName.charAt(elementName.length-1) !== "*") {
            d++;
        }

        for (i=0, len=part.modifiers.length; i < len; i++) {
            modifier = part.modifiers[i];
            switch (modifier.type) {
                case "class":
                case "attribute":
                    c++;
                    break;

                case "id":
                    b++;
                    break;

                case "pseudo":
                    if (Pseudos.isElement(modifier.text)) {
                        d++;
                    } else {
                        c++;
                    }
                    break;

                case "not":
                    for (j=0, num=modifier.args.length; j < num; j++) {
                        updateValues(modifier.args[j]);
                    }
            }
        }
    }

    for (i=0, len=selector.parts.length; i < len; i++) {
        part = selector.parts[i];

        if (part instanceof SelectorPart) {
            updateValues(part);
        }
    }

    return new Specificity(0, b, c, d);
};

},{"./Pseudos":12,"./SelectorPart":14}],17:[function(require,module,exports){
"use strict";

module.exports = TokenStream;

var TokenStreamBase = require("../util/TokenStreamBase");

var PropertyValuePart = require("./PropertyValuePart");
var Tokens = require("./Tokens");

var h = /^[0-9a-fA-F]$/,
    nonascii = /^[\u00A0-\uFFFF]$/,
    nl = /\n|\r\n|\r|\f/,
    whitespace = /\u0009|\u000a|\u000c|\u000d|\u0020/;

//-----------------------------------------------------------------------------
// Helper functions
//-----------------------------------------------------------------------------


function isHexDigit(c) {
    return c !== null && h.test(c);
}

function isDigit(c) {
    return c !== null && /\d/.test(c);
}

function isWhitespace(c) {
    return c !== null && whitespace.test(c);
}

function isNewLine(c) {
    return c !== null && nl.test(c);
}

function isNameStart(c) {
    return c !== null && /[a-z_\u00A0-\uFFFF\\]/i.test(c);
}

function isNameChar(c) {
    return c !== null && (isNameStart(c) || /[0-9\-\\]/.test(c));
}

function isIdentStart(c) {
    return c !== null && (isNameStart(c) || /\-\\/.test(c));
}

function mix(receiver, supplier) {
    for (var prop in supplier) {
        if (Object.prototype.hasOwnProperty.call(supplier, prop)) {
            receiver[prop] = supplier[prop];
        }
    }
    return receiver;
}

//-----------------------------------------------------------------------------
// CSS Token Stream
//-----------------------------------------------------------------------------


/**
 * A token stream that produces CSS tokens.
 * @param {String|Reader} input The source of text to tokenize.
 * @constructor
 * @class TokenStream
 * @namespace parserlib.css
 */
function TokenStream(input) {
    TokenStreamBase.call(this, input, Tokens);
}

TokenStream.prototype = mix(new TokenStreamBase(), {

    /**
     * Overrides the TokenStreamBase method of the same name
     * to produce CSS tokens.
     * @return {Object} A token object representing the next token.
     * @method _getToken
     * @private
     */
    _getToken: function() {

        var c,
            reader = this._reader,
            token   = null,
            startLine   = reader.getLine(),
            startCol    = reader.getCol();

        c = reader.read();


        while (c) {
            switch (c) {

                /*
                 * Potential tokens:
                 * - COMMENT
                 * - SLASH
                 * - CHAR
                 */
                case "/":

                    if (reader.peek() === "*") {
                        token = this.commentToken(c, startLine, startCol);
                    } else {
                        token = this.charToken(c, startLine, startCol);
                    }
                    break;

                /*
                 * Potential tokens:
                 * - DASHMATCH
                 * - INCLUDES
                 * - PREFIXMATCH
                 * - SUFFIXMATCH
                 * - SUBSTRINGMATCH
                 * - CHAR
                 */
                case "|":
                case "~":
                case "^":
                case "$":
                case "*":
                    if (reader.peek() === "=") {
                        token = this.comparisonToken(c, startLine, startCol);
                    } else {
                        token = this.charToken(c, startLine, startCol);
                    }
                    break;

                /*
                 * Potential tokens:
                 * - STRING
                 * - INVALID
                 */
                case "\"":
                case "'":
                    token = this.stringToken(c, startLine, startCol);
                    break;

                /*
                 * Potential tokens:
                 * - HASH
                 * - CHAR
                 */
                case "#":
                    if (isNameChar(reader.peek())) {
                        token = this.hashToken(c, startLine, startCol);
                    } else {
                        token = this.charToken(c, startLine, startCol);
                    }
                    break;

                /*
                 * Potential tokens:
                 * - DOT
                 * - NUMBER
                 * - DIMENSION
                 * - PERCENTAGE
                 */
                case ".":
                    if (isDigit(reader.peek())) {
                        token = this.numberToken(c, startLine, startCol);
                    } else {
                        token = this.charToken(c, startLine, startCol);
                    }
                    break;

                /*
                 * Potential tokens:
                 * - CDC
                 * - MINUS
                 * - NUMBER
                 * - DIMENSION
                 * - PERCENTAGE
                 */
                case "-":
                    if (reader.peek() === "-") {  //could be closing HTML-style comment
                        token = this.htmlCommentEndToken(c, startLine, startCol);
                    } else if (isNameStart(reader.peek())) {
                        token = this.identOrFunctionToken(c, startLine, startCol);
                    } else {
                        token = this.charToken(c, startLine, startCol);
                    }
                    break;

                /*
                 * Potential tokens:
                 * - IMPORTANT_SYM
                 * - CHAR
                 */
                case "!":
                    token = this.importantToken(c, startLine, startCol);
                    break;

                /*
                 * Any at-keyword or CHAR
                 */
                case "@":
                    token = this.atRuleToken(c, startLine, startCol);
                    break;

                /*
                 * Potential tokens:
                 * - NOT
                 * - CHAR
                 */
                case ":":
                    token = this.notToken(c, startLine, startCol);
                    break;

                /*
                 * Potential tokens:
                 * - CDO
                 * - CHAR
                 */
                case "<":
                    token = this.htmlCommentStartToken(c, startLine, startCol);
                    break;

                /*
                 * Potential tokens:
                 * - IDENT
                 * - CHAR
                 */
                case "\\":
                    if (/[^\r\n\f]/.test(reader.peek())) {
                        token = this.identOrFunctionToken(this.readEscape(c, true), startLine, startCol);
                    } else {
                        token = this.charToken(c, startLine, startCol);
                    }
                    break;

                /*
                 * Potential tokens:
                 * - UNICODE_RANGE
                 * - URL
                 * - CHAR
                 */
                case "U":
                case "u":
                    if (reader.peek() === "+") {
                        token = this.unicodeRangeToken(c, startLine, startCol);
                        break;
                    }
                    /* falls through */
                default:

                    /*
                     * Potential tokens:
                     * - NUMBER
                     * - DIMENSION
                     * - LENGTH
                     * - FREQ
                     * - TIME
                     * - EMS
                     * - EXS
                     * - ANGLE
                     */
                    if (isDigit(c)) {
                        token = this.numberToken(c, startLine, startCol);
                    } else

                    /*
                     * Potential tokens:
                     * - S
                     */
                    if (isWhitespace(c)) {
                        token = this.whitespaceToken(c, startLine, startCol);
                    } else

                    /*
                     * Potential tokens:
                     * - IDENT
                     */
                    if (isIdentStart(c)) {
                        token = this.identOrFunctionToken(c, startLine, startCol);
                    } else {
                       /*
                        * Potential tokens:
                        * - CHAR
                        * - PLUS
                        */
                        token = this.charToken(c, startLine, startCol);
                    }

            }

            //make sure this token is wanted
            //TODO: check channel
            break;
        }

        if (!token && c === null) {
            token = this.createToken(Tokens.EOF, null, startLine, startCol);
        }

        return token;
    },

    //-------------------------------------------------------------------------
    // Methods to create tokens
    //-------------------------------------------------------------------------

    /**
     * Produces a token based on available data and the current
     * reader position information. This method is called by other
     * private methods to create tokens and is never called directly.
     * @param {int} tt The token type.
     * @param {String} value The text value of the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @param {Object} options (Optional) Specifies a channel property
     *      to indicate that a different channel should be scanned
     *      and/or a hide property indicating that the token should
     *      be hidden.
     * @return {Object} A token object.
     * @method createToken
     */
    createToken: function(tt, value, startLine, startCol, options) {
        var reader = this._reader;
        options = options || {};

        return {
            value:      value,
            type:       tt,
            channel:    options.channel,
            endChar:    options.endChar,
            hide:       options.hide || false,
            startLine:  startLine,
            startCol:   startCol,
            endLine:    reader.getLine(),
            endCol:     reader.getCol()
        };
    },

    //-------------------------------------------------------------------------
    // Methods to create specific tokens
    //-------------------------------------------------------------------------

    /**
     * Produces a token for any at-rule. If the at-rule is unknown, then
     * the token is for a single "@" character.
     * @param {String} first The first character for the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method atRuleToken
     */
    atRuleToken: function(first, startLine, startCol) {
        var rule    = first,
            reader  = this._reader,
            tt      = Tokens.CHAR,
            ident;

        /*
         * First, mark where we are. There are only four @ rules,
         * so anything else is really just an invalid token.
         * Basically, if this doesn't match one of the known @
         * rules, just return '@' as an unknown token and allow
         * parsing to continue after that point.
         */
        reader.mark();

        //try to find the at-keyword
        ident = this.readName();
        rule = first + ident;
        tt = Tokens.type(rule.toLowerCase());

        //if it's not valid, use the first character only and reset the reader
        if (tt === Tokens.CHAR || tt === Tokens.UNKNOWN) {
            if (rule.length > 1) {
                tt = Tokens.UNKNOWN_SYM;
            } else {
                tt = Tokens.CHAR;
                rule = first;
                reader.reset();
            }
        }

        return this.createToken(tt, rule, startLine, startCol);
    },

    /**
     * Produces a character token based on the given character
     * and location in the stream. If there's a special (non-standard)
     * token name, this is used; otherwise CHAR is used.
     * @param {String} c The character for the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method charToken
     */
    charToken: function(c, startLine, startCol) {
        var tt = Tokens.type(c);
        var opts = {};

        if (tt === -1) {
            tt = Tokens.CHAR;
        } else {
            opts.endChar = Tokens[tt].endChar;
        }

        return this.createToken(tt, c, startLine, startCol, opts);
    },

    /**
     * Produces a character token based on the given character
     * and location in the stream. If there's a special (non-standard)
     * token name, this is used; otherwise CHAR is used.
     * @param {String} first The first character for the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method commentToken
     */
    commentToken: function(first, startLine, startCol) {
        var comment = this.readComment(first);

        return this.createToken(Tokens.COMMENT, comment, startLine, startCol);
    },

    /**
     * Produces a comparison token based on the given character
     * and location in the stream. The next character must be
     * read and is already known to be an equals sign.
     * @param {String} c The character for the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method comparisonToken
     */
    comparisonToken: function(c, startLine, startCol) {
        var reader  = this._reader,
            comparison  = c + reader.read(),
            tt      = Tokens.type(comparison) || Tokens.CHAR;

        return this.createToken(tt, comparison, startLine, startCol);
    },

    /**
     * Produces a hash token based on the specified information. The
     * first character provided is the pound sign (#) and then this
     * method reads a name afterward.
     * @param {String} first The first character (#) in the hash name.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method hashToken
     */
    hashToken: function(first, startLine, startCol) {
        var name    = this.readName(first);

        return this.createToken(Tokens.HASH, name, startLine, startCol);
    },

    /**
     * Produces a CDO or CHAR token based on the specified information. The
     * first character is provided and the rest is read by the function to determine
     * the correct token to create.
     * @param {String} first The first character in the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method htmlCommentStartToken
     */
    htmlCommentStartToken: function(first, startLine, startCol) {
        var reader      = this._reader,
            text        = first;

        reader.mark();
        text += reader.readCount(3);

        if (text === "<!--") {
            return this.createToken(Tokens.CDO, text, startLine, startCol);
        } else {
            reader.reset();
            return this.charToken(first, startLine, startCol);
        }
    },

    /**
     * Produces a CDC or CHAR token based on the specified information. The
     * first character is provided and the rest is read by the function to determine
     * the correct token to create.
     * @param {String} first The first character in the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method htmlCommentEndToken
     */
    htmlCommentEndToken: function(first, startLine, startCol) {
        var reader      = this._reader,
            text        = first;

        reader.mark();
        text += reader.readCount(2);

        if (text === "-->") {
            return this.createToken(Tokens.CDC, text, startLine, startCol);
        } else {
            reader.reset();
            return this.charToken(first, startLine, startCol);
        }
    },

    /**
     * Produces an IDENT or FUNCTION token based on the specified information. The
     * first character is provided and the rest is read by the function to determine
     * the correct token to create.
     * @param {String} first The first character in the identifier.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method identOrFunctionToken
     */
    identOrFunctionToken: function(first, startLine, startCol) {
        var reader  = this._reader,
            ident   = this.readName(first),
            tt      = Tokens.IDENT,
            uriFns  = ["url(", "url-prefix(", "domain("],
            uri;

        //if there's a left paren immediately after, it's a URI or function
        if (reader.peek() === "(") {
            ident += reader.read();
            if (uriFns.indexOf(ident.toLowerCase()) > -1) {
                reader.mark();
                uri = this.readURI(ident);
                if (uri === null) {
                    //didn't find a valid URL or there's no closing paren
                    reader.reset();
                    tt = Tokens.FUNCTION;
                } else {
                    tt = Tokens.URI;
                    ident = uri;
                }
            } else {
                tt = Tokens.FUNCTION;
            }
        } else if (reader.peek() === ":") {  //might be an IE function

            //IE-specific functions always being with progid:
            if (ident.toLowerCase() === "progid") {
                ident += reader.readTo("(");
                tt = Tokens.IE_FUNCTION;
            }
        }

        return this.createToken(tt, ident, startLine, startCol);
    },

    /**
     * Produces an IMPORTANT_SYM or CHAR token based on the specified information. The
     * first character is provided and the rest is read by the function to determine
     * the correct token to create.
     * @param {String} first The first character in the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method importantToken
     */
    importantToken: function(first, startLine, startCol) {
        var reader      = this._reader,
            important   = first,
            tt          = Tokens.CHAR,
            temp,
            c;

        reader.mark();
        c = reader.read();

        while (c) {

            //there can be a comment in here
            if (c === "/") {

                //if the next character isn't a star, then this isn't a valid !important token
                if (reader.peek() !== "*") {
                    break;
                } else {
                    temp = this.readComment(c);
                    if (temp === "") {    //broken!
                        break;
                    }
                }
            } else if (isWhitespace(c)) {
                important += c + this.readWhitespace();
            } else if (/i/i.test(c)) {
                temp = reader.readCount(8);
                if (/mportant/i.test(temp)) {
                    important += c + temp;
                    tt = Tokens.IMPORTANT_SYM;

                }
                break;  //we're done
            } else {
                break;
            }

            c = reader.read();
        }

        if (tt === Tokens.CHAR) {
            reader.reset();
            return this.charToken(first, startLine, startCol);
        } else {
            return this.createToken(tt, important, startLine, startCol);
        }


    },

    /**
     * Produces a NOT or CHAR token based on the specified information. The
     * first character is provided and the rest is read by the function to determine
     * the correct token to create.
     * @param {String} first The first character in the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method notToken
     */
    notToken: function(first, startLine, startCol) {
        var reader      = this._reader,
            text        = first;

        reader.mark();
        text += reader.readCount(4);

        if (text.toLowerCase() === ":not(") {
            return this.createToken(Tokens.NOT, text, startLine, startCol);
        } else {
            reader.reset();
            return this.charToken(first, startLine, startCol);
        }
    },

    /**
     * Produces a number token based on the given character
     * and location in the stream. This may return a token of
     * NUMBER, EMS, EXS, LENGTH, ANGLE, TIME, FREQ, DIMENSION,
     * or PERCENTAGE.
     * @param {String} first The first character for the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method numberToken
     */
    numberToken: function(first, startLine, startCol) {
        var reader  = this._reader,
            value   = this.readNumber(first),
            ident,
            tt      = Tokens.NUMBER,
            c       = reader.peek();

        if (isIdentStart(c)) {
            ident = this.readName(reader.read());
            value += ident;

            if (/^em$|^ex$|^px$|^gd$|^rem$|^vw$|^vh$|^vmax$|^vmin$|^ch$|^cm$|^mm$|^in$|^pt$|^pc$/i.test(ident)) {
                tt = Tokens.LENGTH;
            } else if (/^deg|^rad$|^grad$|^turn$/i.test(ident)) {
                tt = Tokens.ANGLE;
            } else if (/^ms$|^s$/i.test(ident)) {
                tt = Tokens.TIME;
            } else if (/^hz$|^khz$/i.test(ident)) {
                tt = Tokens.FREQ;
            } else if (/^dpi$|^dpcm$/i.test(ident)) {
                tt = Tokens.RESOLUTION;
            } else {
                tt = Tokens.DIMENSION;
            }

        } else if (c === "%") {
            value += reader.read();
            tt = Tokens.PERCENTAGE;
        }

        return this.createToken(tt, value, startLine, startCol);
    },

    /**
     * Produces a string token based on the given character
     * and location in the stream. Since strings may be indicated
     * by single or double quotes, a failure to match starting
     * and ending quotes results in an INVALID token being generated.
     * The first character in the string is passed in and then
     * the rest are read up to and including the final quotation mark.
     * @param {String} first The first character in the string.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method stringToken
     */
    stringToken: function(first, startLine, startCol) {
        var delim   = first,
            string  = first,
            reader  = this._reader,
            tt      = Tokens.STRING,
            c       = reader.read(),
            i;

        while (c) {
            string += c;

            if (c === "\\") {
                c = reader.read();
                if (c === null) {
                    break; // premature EOF after backslash
                } else if (/[^\r\n\f0-9a-f]/i.test(c)) {
                    // single-character escape
                    string += c;
                } else {
                    // read up to six hex digits
                    for (i=0; isHexDigit(c) && i<6; i++) {
                        string += c;
                        c = reader.read();
                    }
                    // swallow trailing newline or space
                    if (c === "\r" && reader.peek() === "\n") {
                        string += c;
                        c = reader.read();
                    }
                    if (isWhitespace(c)) {
                        string += c;
                    } else {
                        // This character is null or not part of the escape;
                        // jump back to the top to process it.
                        continue;
                    }
                }
            } else if (c === delim) {
                break; // delimiter found.
            } else if (isNewLine(reader.peek())) {
                // newline without an escapement: it's an invalid string
                tt = Tokens.INVALID;
                break;
            }
            c = reader.read();
        }

        //if c is null, that means we're out of input and the string was never closed
        if (c === null) {
            tt = Tokens.INVALID;
        }

        return this.createToken(tt, string, startLine, startCol);
    },

    unicodeRangeToken: function(first, startLine, startCol) {
        var reader  = this._reader,
            value   = first,
            temp,
            tt      = Tokens.CHAR;

        //then it should be a unicode range
        if (reader.peek() === "+") {
            reader.mark();
            value += reader.read();
            value += this.readUnicodeRangePart(true);

            //ensure there's an actual unicode range here
            if (value.length === 2) {
                reader.reset();
            } else {

                tt = Tokens.UNICODE_RANGE;

                //if there's a ? in the first part, there can't be a second part
                if (value.indexOf("?") === -1) {

                    if (reader.peek() === "-") {
                        reader.mark();
                        temp = reader.read();
                        temp += this.readUnicodeRangePart(false);

                        //if there's not another value, back up and just take the first
                        if (temp.length === 1) {
                            reader.reset();
                        } else {
                            value += temp;
                        }
                    }

                }
            }
        }

        return this.createToken(tt, value, startLine, startCol);
    },

    /**
     * Produces a S token based on the specified information. Since whitespace
     * may have multiple characters, this consumes all whitespace characters
     * into a single token.
     * @param {String} first The first character in the token.
     * @param {int} startLine The beginning line for the character.
     * @param {int} startCol The beginning column for the character.
     * @return {Object} A token object.
     * @method whitespaceToken
     */
    whitespaceToken: function(first, startLine, startCol) {
        var value   = first + this.readWhitespace();
        return this.createToken(Tokens.S, value, startLine, startCol);
    },


    //-------------------------------------------------------------------------
    // Methods to read values from the string stream
    //-------------------------------------------------------------------------

    readUnicodeRangePart: function(allowQuestionMark) {
        var reader  = this._reader,
            part = "",
            c       = reader.peek();

        //first read hex digits
        while (isHexDigit(c) && part.length < 6) {
            reader.read();
            part += c;
            c = reader.peek();
        }

        //then read question marks if allowed
        if (allowQuestionMark) {
            while (c === "?" && part.length < 6) {
                reader.read();
                part += c;
                c = reader.peek();
            }
        }

        //there can't be any other characters after this point

        return part;
    },

    readWhitespace: function() {
        var reader  = this._reader,
            whitespace = "",
            c       = reader.peek();

        while (isWhitespace(c)) {
            reader.read();
            whitespace += c;
            c = reader.peek();
        }

        return whitespace;
    },
    readNumber: function(first) {
        var reader  = this._reader,
            number  = first,
            hasDot  = (first === "."),
            c       = reader.peek();


        while (c) {
            if (isDigit(c)) {
                number += reader.read();
            } else if (c === ".") {
                if (hasDot) {
                    break;
                } else {
                    hasDot = true;
                    number += reader.read();
                }
            } else {
                break;
            }

            c = reader.peek();
        }

        return number;
    },

    // returns null w/o resetting reader if string is invalid.
    readString: function() {
        var token = this.stringToken(this._reader.read(), 0, 0);
        return token.type === Tokens.INVALID ? null : token.value;
    },

    // returns null w/o resetting reader if URI is invalid.
    readURI: function(first) {
        var reader  = this._reader,
            uri     = first,
            inner   = "",
            c       = reader.peek();

        //skip whitespace before
        while (c && isWhitespace(c)) {
            reader.read();
            c = reader.peek();
        }

        //it's a string
        if (c === "'" || c === "\"") {
            inner = this.readString();
            if (inner !== null) {
                inner = PropertyValuePart.parseString(inner);
            }
        } else {
            inner = this.readUnquotedURL();
        }

        c = reader.peek();

        //skip whitespace after
        while (c && isWhitespace(c)) {
            reader.read();
            c = reader.peek();
        }

        //if there was no inner value or the next character isn't closing paren, it's not a URI
        if (inner === null || c !== ")") {
            uri = null;
        } else {
            // Ensure argument to URL is always double-quoted
            // (This simplifies later processing in PropertyValuePart.)
            uri += PropertyValuePart.serializeString(inner) + reader.read();
        }

        return uri;
    },
    // This method never fails, although it may return an empty string.
    readUnquotedURL: function(first) {
        var reader  = this._reader,
            url     = first || "",
            c;

        for (c = reader.peek(); c; c = reader.peek()) {
            // Note that the grammar at
            // https://www.w3.org/TR/CSS2/grammar.html#scanner
            // incorrectly includes the backslash character in the
            // `url` production, although it is correctly omitted in
            // the `baduri1` production.
            if (nonascii.test(c) || /^[\-!#$%&*-\[\]-~]$/.test(c)) {
                url += c;
                reader.read();
            } else if (c === "\\") {
                if (/^[^\r\n\f]$/.test(reader.peek(2))) {
                    url += this.readEscape(reader.read(), true);
                } else {
                    break; // bad escape sequence.
                }
            } else {
                break; // bad character
            }
        }

        return url;
    },

    readName: function(first) {
        var reader  = this._reader,
            ident   = first || "",
            c;

        for (c = reader.peek(); c; c = reader.peek()) {
            if (c === "\\") {
                if (/^[^\r\n\f]$/.test(reader.peek(2))) {
                    ident += this.readEscape(reader.read(), true);
                } else {
                    // Bad escape sequence.
                    break;
                }
            } else if (isNameChar(c)) {
                ident += reader.read();
            } else {
                break;
            }
        }

        return ident;
    },

    readEscape: function(first, unescape) {
        var reader  = this._reader,
            cssEscape = first || "",
            i       = 0,
            c       = reader.peek();

        if (isHexDigit(c)) {
            do {
                cssEscape += reader.read();
                c = reader.peek();
            } while (c && isHexDigit(c) && ++i < 6);
        }

        if (cssEscape.length === 1) {
            if (/^[^\r\n\f0-9a-f]$/.test(c)) {
                reader.read();
                if (unescape) {
                    return c;
                }
            } else {
                // We should never get here (readName won't call readEscape
                // if the escape sequence is bad).
                throw new Error("Bad escape sequence.");
            }
        } else if (c === "\r") {
            reader.read();
            if (reader.peek() === "\n") {
                c += reader.read();
            }
        } else if (/^[ \t\n\f]$/.test(c)) {
            reader.read();
        } else {
            c = "";
        }

        if (unescape) {
            var cp = parseInt(cssEscape.slice(first.length), 16);
            return String.fromCodePoint ? String.fromCodePoint(cp) :
                String.fromCharCode(cp);
        }
        return cssEscape + c;
    },

    readComment: function(first) {
        var reader  = this._reader,
            comment = first || "",
            c       = reader.read();

        if (c === "*") {
            while (c) {
                comment += c;

                //look for end of comment
                if (comment.length > 2 && c === "*" && reader.peek() === "/") {
                    comment += reader.read();
                    break;
                }

                c = reader.read();
            }

            return comment;
        } else {
            return "";
        }

    }
});

},{"../util/TokenStreamBase":27,"./PropertyValuePart":11,"./Tokens":18}],18:[function(require,module,exports){
"use strict";

var Tokens = module.exports = [

    /*
     * The following token names are defined in CSS3 Grammar: https://www.w3.org/TR/css3-syntax/#lexical
     */

    // HTML-style comments
    { name: "CDO" },
    { name: "CDC" },

    // ignorables
    { name: "S", whitespace: true/*, channel: "ws"*/ },
    { name: "COMMENT", comment: true, hide: true, channel: "comment" },

    // attribute equality
    { name: "INCLUDES", text: "~=" },
    { name: "DASHMATCH", text: "|=" },
    { name: "PREFIXMATCH", text: "^=" },
    { name: "SUFFIXMATCH", text: "$=" },
    { name: "SUBSTRINGMATCH", text: "*=" },

    // identifier types
    { name: "STRING" },
    { name: "IDENT" },
    { name: "HASH" },

    // at-keywords
    { name: "IMPORT_SYM", text: "@import" },
    { name: "PAGE_SYM", text: "@page" },
    { name: "MEDIA_SYM", text: "@media" },
    { name: "FONT_FACE_SYM", text: "@font-face" },
    { name: "CHARSET_SYM", text: "@charset" },
    { name: "NAMESPACE_SYM", text: "@namespace" },
    { name: "SUPPORTS_SYM", text: "@supports" },
    { name: "VIEWPORT_SYM", text: ["@viewport", "@-ms-viewport", "@-o-viewport"] },
    { name: "DOCUMENT_SYM", text: ["@document", "@-moz-document"] },
    { name: "UNKNOWN_SYM" },
    //{ name: "ATKEYWORD"},

    // CSS3 animations
    { name: "KEYFRAMES_SYM", text: [ "@keyframes", "@-webkit-keyframes", "@-moz-keyframes", "@-o-keyframes" ] },

    // important symbol
    { name: "IMPORTANT_SYM" },

    // measurements
    { name: "LENGTH" },
    { name: "ANGLE" },
    { name: "TIME" },
    { name: "FREQ" },
    { name: "DIMENSION" },
    { name: "PERCENTAGE" },
    { name: "NUMBER" },

    // functions
    { name: "URI" },
    { name: "FUNCTION" },

    // Unicode ranges
    { name: "UNICODE_RANGE" },

    /*
     * The following token names are defined in CSS3 Selectors: https://www.w3.org/TR/css3-selectors/#selector-syntax
     */

    // invalid string
    { name: "INVALID" },

    // combinators
    { name: "PLUS", text: "+" },
    { name: "GREATER", text: ">" },
    { name: "COMMA", text: "," },
    { name: "TILDE", text: "~" },

    // modifier
    { name: "NOT" },

    /*
     * Defined in CSS3 Paged Media
     */
    { name: "TOPLEFTCORNER_SYM", text: "@top-left-corner" },
    { name: "TOPLEFT_SYM", text: "@top-left" },
    { name: "TOPCENTER_SYM", text: "@top-center" },
    { name: "TOPRIGHT_SYM", text: "@top-right" },
    { name: "TOPRIGHTCORNER_SYM", text: "@top-right-corner" },
    { name: "BOTTOMLEFTCORNER_SYM", text: "@bottom-left-corner" },
    { name: "BOTTOMLEFT_SYM", text: "@bottom-left" },
    { name: "BOTTOMCENTER_SYM", text: "@bottom-center" },
    { name: "BOTTOMRIGHT_SYM", text: "@bottom-right" },
    { name: "BOTTOMRIGHTCORNER_SYM", text: "@bottom-right-corner" },
    { name: "LEFTTOP_SYM", text: "@left-top" },
    { name: "LEFTMIDDLE_SYM", text: "@left-middle" },
    { name: "LEFTBOTTOM_SYM", text: "@left-bottom" },
    { name: "RIGHTTOP_SYM", text: "@right-top" },
    { name: "RIGHTMIDDLE_SYM", text: "@right-middle" },
    { name: "RIGHTBOTTOM_SYM", text: "@right-bottom" },

    /*
     * The following token names are defined in CSS3 Media Queries: https://www.w3.org/TR/css3-mediaqueries/#syntax
     */
    /*{ name: "MEDIA_ONLY", state: "media"},
    { name: "MEDIA_NOT", state: "media"},
    { name: "MEDIA_AND", state: "media"},*/
    { name: "RESOLUTION", state: "media" },

    /*
     * The following token names are not defined in any CSS specification but are used by the lexer.
     */

    // not a real token, but useful for stupid IE filters
    { name: "IE_FUNCTION" },

    // part of CSS3 grammar but not the Flex code
    { name: "CHAR" },

    // TODO: Needed?
    // Not defined as tokens, but might as well be
    {
        name: "PIPE",
        text: "|"
    },
    {
        name: "SLASH",
        text: "/"
    },
    {
        name: "MINUS",
        text: "-"
    },
    {
        name: "STAR",
        text: "*"
    },

    {
        name: "LBRACE",
        endChar: "}",
        text: "{"
    },
    {
        name: "RBRACE",
        text: "}"
    },
    {
        name: "LBRACKET",
        endChar: "]",
        text: "["
    },
    {
        name: "RBRACKET",
        text: "]"
    },
    {
        name: "EQUALS",
        text: "="
    },
    {
        name: "COLON",
        text: ":"
    },
    {
        name: "SEMICOLON",
        text: ";"
    },
    {
        name: "LPAREN",
        endChar: ")",
        text: "("
    },
    {
        name: "RPAREN",
        text: ")"
    },
    {
        name: "DOT",
        text: "."
    }
];

(function() {
    var nameMap = [],
        typeMap = Object.create(null);

    Tokens.UNKNOWN = -1;
    Tokens.unshift({ name:"EOF" });
    for (var i=0, len = Tokens.length; i < len; i++) {
        nameMap.push(Tokens[i].name);
        Tokens[Tokens[i].name] = i;
        if (Tokens[i].text) {
            if (Tokens[i].text instanceof Array) {
                for (var j=0; j < Tokens[i].text.length; j++) {
                    typeMap[Tokens[i].text[j]] = i;
                }
            } else {
                typeMap[Tokens[i].text] = i;
            }
        }
    }

    Tokens.name = function(tt) {
        return nameMap[tt];
    };

    Tokens.type = function(c) {
        return typeMap[c] || -1;
    };
})();

},{}],19:[function(require,module,exports){
"use strict";

/* exported Validation */

var Matcher = require("./Matcher");
var Properties = require("./Properties");
var ValidationTypes = require("./ValidationTypes");
var ValidationError = require("./ValidationError");
var PropertyValueIterator = require("./PropertyValueIterator");

var Validation = module.exports = {

    validate: function(property, value) {

        //normalize name
        var name        = property.toString().toLowerCase(),
            expression  = new PropertyValueIterator(value),
            spec        = Properties[name],
            part;

        if (!spec) {
            if (name.indexOf("-") !== 0) {    //vendor prefixed are ok
                throw new ValidationError("Unknown property '" + property + "'.", property.line, property.col);
            }
        } else if (typeof spec !== "number") {

            // All properties accept some CSS-wide values.
            // https://drafts.csswg.org/css-values-3/#common-keywords
            if (ValidationTypes.isAny(expression, "inherit | initial | unset")) {
                if (expression.hasNext()) {
                    part = expression.next();
                    throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
                }
                return;
            }

            // Property-specific validation.
            this.singleProperty(spec, expression);

        }

    },

    singleProperty: function(types, expression) {

        var result      = false,
            value       = expression.value,
            part;

        result = Matcher.parse(types).match(expression);

        if (!result) {
            if (expression.hasNext() && !expression.isFirst()) {
                part = expression.peek();
                throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
            } else {
                throw new ValidationError("Expected (" + ValidationTypes.describe(types) + ") but found '" + value + "'.", value.line, value.col);
            }
        } else if (expression.hasNext()) {
            part = expression.next();
            throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
        }

    }

};

},{"./Matcher":3,"./Properties":7,"./PropertyValueIterator":10,"./ValidationError":20,"./ValidationTypes":21}],20:[function(require,module,exports){
"use strict";

module.exports = ValidationError;

/**
 * Type to use when a validation error occurs.
 * @class ValidationError
 * @namespace parserlib.util
 * @constructor
 * @param {String} message The error message.
 * @param {int} line The line at which the error occurred.
 * @param {int} col The column at which the error occurred.
 */
function ValidationError(message, line, col) {

    /**
     * The column at which the error occurred.
     * @type int
     * @property col
     */
    this.col = col;

    /**
     * The line at which the error occurred.
     * @type int
     * @property line
     */
    this.line = line;

    /**
     * The text representation of the unit.
     * @type String
     * @property text
     */
    this.message = message;

}

//inherit from Error
ValidationError.prototype = new Error();

},{}],21:[function(require,module,exports){
"use strict";

var ValidationTypes = module.exports;

var Matcher = require("./Matcher");

function copy(to, from) {
    Object.keys(from).forEach(function(prop) {
        to[prop] = from[prop];
    });
}
copy(ValidationTypes, {

    isLiteral: function (part, literals) {
        var text = part.text.toString().toLowerCase(),
            args = literals.split(" | "),
            i, len, found = false;

        for (i=0, len=args.length; i < len && !found; i++) {
            if (args[i].charAt(0) === "<") {
                found = this.simple[args[i]](part);
            } else if (args[i].slice(-2) === "()") {
                found = (part.type === "function" &&
                         part.name === args[i].slice(0, -2));
            } else if (text === args[i].toLowerCase()) {
                found = true;
            }
        }

        return found;
    },

    isSimple: function(type) {
        return Boolean(this.simple[type]);
    },

    isComplex: function(type) {
        return Boolean(this.complex[type]);
    },

    describe: function(type) {
        if (this.complex[type] instanceof Matcher) {
            return this.complex[type].toString(0);
        }
        return type;
    },

    /**
     * Determines if the next part(s) of the given expression
     * are any of the given types.
     */
    isAny: function (expression, types) {
        var args = types.split(" | "),
            i, len, found = false;

        for (i=0, len=args.length; i < len && !found && expression.hasNext(); i++) {
            found = this.isType(expression, args[i]);
        }

        return found;
    },

    /**
     * Determines if the next part(s) of the given expression
     * are one of a group.
     */
    isAnyOfGroup: function(expression, types) {
        var args = types.split(" || "),
            i, len, found = false;

        for (i=0, len=args.length; i < len && !found; i++) {
            found = this.isType(expression, args[i]);
        }

        return found ? args[i-1] : false;
    },

    /**
     * Determines if the next part(s) of the given expression
     * are of a given type.
     */
    isType: function (expression, type) {
        var part = expression.peek(),
            result = false;

        if (type.charAt(0) !== "<") {
            result = this.isLiteral(part, type);
            if (result) {
                expression.next();
            }
        } else if (this.simple[type]) {
            result = this.simple[type](part);
            if (result) {
                expression.next();
            }
        } else if (this.complex[type] instanceof Matcher) {
            result = this.complex[type].match(expression);
        } else {
            result = this.complex[type](expression);
        }

        return result;
    },


    simple: {
        __proto__: null,

        "<absolute-size>":
            "xx-small | x-small | small | medium | large | x-large | xx-large",

        "<animateable-feature>":
            "scroll-position | contents | <animateable-feature-name>",

        "<animateable-feature-name>": function(part) {
            return this["<ident>"](part) &&
                !/^(unset|initial|inherit|will-change|auto|scroll-position|contents)$/i.test(part);
        },

        "<angle>": function(part) {
            return part.type === "angle";
        },

        "<attachment>": "scroll | fixed | local",

        "<attr>": "attr()",

        // inset() = inset( <shape-arg>{1,4} [round <border-radius>]? )
        // circle() = circle( [<shape-radius>]? [at <position>]? )
        // ellipse() = ellipse( [<shape-radius>{2}]? [at <position>]? )
        // polygon() = polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
        "<basic-shape>": "inset() | circle() | ellipse() | polygon()",

        "<bg-image>": "<image> | <gradient> | none",

        "<border-style>":
            "none | hidden | dotted | dashed | solid | double | groove | " +
            "ridge | inset | outset",

        "<border-width>": "<length> | thin | medium | thick",

        "<box>": "padding-box | border-box | content-box",

        "<clip-source>": "<uri>",

        "<color>": function(part) {
            return part.type === "color" || String(part) === "transparent" || String(part) === "currentColor";
        },

        // The SVG <color> spec doesn't include "currentColor" or "transparent" as a color.
        "<color-svg>": function(part) {
            return part.type === "color";
        },

        "<content>": "content()",

        // https://www.w3.org/TR/css3-sizing/#width-height-keywords
        "<content-sizing>":
            "fill-available | -moz-available | -webkit-fill-available | " +
            "max-content | -moz-max-content | -webkit-max-content | " +
            "min-content | -moz-min-content | -webkit-min-content | " +
            "fit-content | -moz-fit-content | -webkit-fit-content",

        "<feature-tag-value>": function(part) {
            return part.type === "function" && /^[A-Z0-9]{4}$/i.test(part);
        },

        // custom() isn't actually in the spec
        "<filter-function>":
            "blur() | brightness() | contrast() | custom() | " +
            "drop-shadow() | grayscale() | hue-rotate() | invert() | " +
            "opacity() | saturate() | sepia()",

        "<flex-basis>": "<width>",

        "<flex-direction>": "row | row-reverse | column | column-reverse",

        "<flex-grow>": "<number>",

        "<flex-shrink>": "<number>",

        "<flex-wrap>": "nowrap | wrap | wrap-reverse",

        "<font-size>":
            "<absolute-size> | <relative-size> | <length> | <percentage>",

        "<font-stretch>":
            "normal | ultra-condensed | extra-condensed | condensed | " +
            "semi-condensed | semi-expanded | expanded | extra-expanded | " +
            "ultra-expanded",

        "<font-style>": "normal | italic | oblique",

        "<font-variant-caps>":
            "small-caps | all-small-caps | petite-caps | all-petite-caps | " +
            "unicase | titling-caps",

        "<font-variant-css21>": "normal | small-caps",

        "<font-weight>":
            "normal | bold | bolder | lighter | " +
            "100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900",

        "<generic-family>":
            "serif | sans-serif | cursive | fantasy | monospace",

        "<geometry-box>": "<shape-box> | fill-box | stroke-box | view-box",

        "<glyph-angle>": function(part) {
            return part.type === "angle" && part.units === "deg";
        },

        "<gradient>": function(part) {
            return part.type === "function" && /^(?:\-(?:ms|moz|o|webkit)\-)?(?:repeating\-)?(?:radial\-|linear\-)?gradient/i.test(part);
        },

        "<icccolor>":
            "cielab() | cielch() | cielchab() | " +
            "icc-color() | icc-named-color()",

        //any identifier
        "<ident>": function(part) {
            return part.type === "identifier" || part.wasIdent;
        },

        "<ident-not-generic-family>": function(part) {
            return this["<ident>"](part) && !this["<generic-family>"](part);
        },

        "<image>": "<uri>",

        "<integer>": function(part) {
            return part.type === "integer";
        },

        "<length>": function(part) {
            if (part.type === "function" && /^(?:\-(?:ms|moz|o|webkit)\-)?calc/i.test(part)) {
                return true;
            } else {
                return part.type === "length" || part.type === "number" || part.type === "integer" || String(part) === "0";
            }
        },

        "<line>": function(part) {
            return part.type === "integer";
        },

        "<line-height>": "<number> | <length> | <percentage> | normal",

        "<margin-width>": "<length> | <percentage> | auto",

        "<miterlimit>": function(part) {
            return this["<number>"](part) && part.value >= 1;
        },

        "<nonnegative-length-or-percentage>": function(part) {
            return (this["<length>"](part) || this["<percentage>"](part)) &&
                (String(part) === "0" || part.type === "function" || (part.value) >= 0);
        },

        "<nonnegative-number-or-percentage>": function(part) {
            return (this["<number>"](part) || this["<percentage>"](part)) &&
                (String(part) === "0" || part.type === "function" || (part.value) >= 0);
        },

        "<number>": function(part) {
            return part.type === "number" || this["<integer>"](part);
        },

        "<opacity-value>": function(part) {
            return this["<number>"](part) && part.value >= 0 && part.value <= 1;
        },

        "<padding-width>": "<nonnegative-length-or-percentage>",

        "<percentage>": function(part) {
            return part.type === "percentage" || String(part) === "0";
        },

        "<relative-size>": "smaller | larger",

        "<shape>": "rect() | inset-rect()",

        "<shape-box>": "<box> | margin-box",

        "<single-animation-direction>":
            "normal | reverse | alternate | alternate-reverse",

        "<single-animation-name>": function(part) {
            return this["<ident>"](part) &&
                /^-?[a-z_][-a-z0-9_]+$/i.test(part) &&
                !/^(none|unset|initial|inherit)$/i.test(part);
        },

        "<string>": function(part) {
            return part.type === "string";
        },

        "<time>": function(part) {
            return part.type === "time";
        },

        "<uri>": function(part) {
            return part.type === "uri";
        },

        "<width>": "<margin-width>"
    },

    complex: {
        __proto__: null,

        "<azimuth>":
            "<angle>" +
            " | " +
            "[ [ left-side | far-left | left | center-left | center | " +
            "center-right | right | far-right | right-side ] || behind ]" +
            " | "+
            "leftwards | rightwards",

        "<bg-position>": "<position>#",

        "<bg-size>":
            "[ <length> | <percentage> | auto ]{1,2} | cover | contain",

        "<border-image-slice>":
        // [<number> | <percentage>]{1,4} && fill?
        // *but* fill can appear between any of the numbers
        Matcher.many([true /* first element is required */],
                     Matcher.cast("<nonnegative-number-or-percentage>"),
                     Matcher.cast("<nonnegative-number-or-percentage>"),
                     Matcher.cast("<nonnegative-number-or-percentage>"),
                     Matcher.cast("<nonnegative-number-or-percentage>"),
                     "fill"),

        "<border-radius>":
            "<nonnegative-length-or-percentage>{1,4} " +
            "[ / <nonnegative-length-or-percentage>{1,4} ]?",

        "<box-shadow>": "none | <shadow>#",

        "<clip-path>": "<basic-shape> || <geometry-box>",

        "<dasharray>":
        // "list of comma and/or white space separated <length>s and
        // <percentage>s".  There is a non-negative constraint.
        Matcher.cast("<nonnegative-length-or-percentage>")
            .braces(1, Infinity, "#", Matcher.cast(",").question()),

        "<family-name>":
            // <string> | <IDENT>+
            "<string> | <ident-not-generic-family> <ident>*",

        "<filter-function-list>": "[ <filter-function> | <uri> ]+",

        // https://www.w3.org/TR/2014/WD-css-flexbox-1-20140325/#flex-property
        "<flex>":
            "none | [ <flex-grow> <flex-shrink>? || <flex-basis> ]",

        "<font-family>": "[ <generic-family> | <family-name> ]#",

        "<font-shorthand>":
            "[ <font-style> || <font-variant-css21> || " +
            "<font-weight> || <font-stretch> ]? <font-size> " +
            "[ / <line-height> ]? <font-family>",

        "<font-variant-alternates>":
            // stylistic(<feature-value-name>)
            "stylistic() || " +
            "historical-forms || " +
            // styleset(<feature-value-name> #)
            "styleset() || " +
            // character-variant(<feature-value-name> #)
            "character-variant() || " +
            // swash(<feature-value-name>)
            "swash() || " +
            // ornaments(<feature-value-name>)
            "ornaments() || " +
            // annotation(<feature-value-name>)
            "annotation()",

        "<font-variant-ligatures>":
            // <common-lig-values>
            "[ common-ligatures | no-common-ligatures ] || " +
            // <discretionary-lig-values>
            "[ discretionary-ligatures | no-discretionary-ligatures ] || " +
            // <historical-lig-values>
            "[ historical-ligatures | no-historical-ligatures ] || " +
            // <contextual-alt-values>
            "[ contextual | no-contextual ]",

        "<font-variant-numeric>":
            // <numeric-figure-values>
            "[ lining-nums | oldstyle-nums ] || " +
            // <numeric-spacing-values>
            "[ proportional-nums | tabular-nums ] || " +
            // <numeric-fraction-values>
            "[ diagonal-fractions | stacked-fractions ] || " +
            "ordinal || slashed-zero",

        "<font-variant-east-asian>":
            // <east-asian-variant-values>
            "[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ] || " +
            // <east-asian-width-values>
            "[ full-width | proportional-width ] || " +
            "ruby",

        // Note that <color> here is "as defined in the SVG spec", which
        // is more restrictive that the <color> defined in the CSS spec.
        // none | currentColor | <color> [<icccolor>]? |
        // <funciri> [ none | currentColor | <color> [<icccolor>]? ]?
        "<paint>": "<paint-basic> | <uri> <paint-basic>?",

        // Helper definition for <paint> above.
        "<paint-basic>": "none | currentColor | <color-svg> <icccolor>?",

        "<position>":
            // Because our `alt` combinator is ordered, we need to test these
            // in order from longest possible match to shortest.
            "[ center | [ left | right ] [ <percentage> | <length> ]? ] && " +
            "[ center | [ top | bottom ] [ <percentage> | <length> ]? ]" +
            " | " +
            "[ left | center | right | <percentage> | <length> ] " +
            "[ top | center | bottom | <percentage> | <length> ]" +
            " | " +
            "[ left | center | right | top | bottom | <percentage> | <length> ]",

        "<repeat-style>":
            "repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}",

        "<shadow>":
        //inset? && [ <length>{2,4} && <color>? ]
        Matcher.many([true /* length is required */],
                     Matcher.cast("<length>").braces(2, 4), "inset", "<color>"),

        "<text-decoration-color>":
           "<color>",

        "<text-decoration-line>":
            "none | [ underline || overline || line-through || blink ]",

        "<text-decoration-style>":
            "solid | double | dotted | dashed | wavy",

        "<will-change>":
            "auto | <animateable-feature>#",

        "<x-one-radius>":
            //[ <length> | <percentage> ] [ <length> | <percentage> ]?
            "[ <length> | <percentage> ]{1,2}"
    }
});

Object.keys(ValidationTypes.simple).forEach(function(nt) {
    var rule = ValidationTypes.simple[nt];
    if (typeof rule === "string") {
        ValidationTypes.simple[nt] = function(part) {
            return ValidationTypes.isLiteral(part, rule);
        };
    }
});

Object.keys(ValidationTypes.complex).forEach(function(nt) {
    var rule = ValidationTypes.complex[nt];
    if (typeof rule === "string") {
        ValidationTypes.complex[nt] = Matcher.parse(rule);
    }
});

// Because this is defined relative to other complex validation types,
// we need to define it *after* the rest of the types are initialized.
ValidationTypes.complex["<font-variant>"] =
    Matcher.oror({ expand: "<font-variant-ligatures>" },
                 { expand: "<font-variant-alternates>" },
                 "<font-variant-caps>",
                 { expand: "<font-variant-numeric>" },
                 { expand: "<font-variant-east-asian>" });

},{"./Matcher":3}],22:[function(require,module,exports){
"use strict";

module.exports = {
    Colors            : require("./Colors"),
    Combinator        : require("./Combinator"),
    Parser            : require("./Parser"),
    PropertyName      : require("./PropertyName"),
    PropertyValue     : require("./PropertyValue"),
    PropertyValuePart : require("./PropertyValuePart"),
    Matcher           : require("./Matcher"),
    MediaFeature      : require("./MediaFeature"),
    MediaQuery        : require("./MediaQuery"),
    Selector          : require("./Selector"),
    SelectorPart      : require("./SelectorPart"),
    SelectorSubPart   : require("./SelectorSubPart"),
    Specificity       : require("./Specificity"),
    TokenStream       : require("./TokenStream"),
    Tokens            : require("./Tokens"),
    ValidationError   : require("./ValidationError")
};

},{"./Colors":1,"./Combinator":2,"./Matcher":3,"./MediaFeature":4,"./MediaQuery":5,"./Parser":6,"./PropertyName":8,"./PropertyValue":9,"./PropertyValuePart":11,"./Selector":13,"./SelectorPart":14,"./SelectorSubPart":15,"./Specificity":16,"./TokenStream":17,"./Tokens":18,"./ValidationError":20}],23:[function(require,module,exports){
"use strict";

module.exports = EventTarget;

/**
 * A generic base to inherit from for any object
 * that needs event handling.
 * @class EventTarget
 * @constructor
 */
function EventTarget() {

    /**
     * The array of listeners for various events.
     * @type Object
     * @property _listeners
     * @private
     */
    this._listeners = Object.create(null);
}

EventTarget.prototype = {

    //restore constructor
    constructor: EventTarget,

    /**
     * Adds a listener for a given event type.
     * @param {String} type The type of event to add a listener for.
     * @param {Function} listener The function to call when the event occurs.
     * @return {void}
     * @method addListener
     */
    addListener: function(type, listener) {
        if (!this._listeners[type]) {
            this._listeners[type] = [];
        }

        this._listeners[type].push(listener);
    },

    /**
     * Fires an event based on the passed-in object.
     * @param {Object|String} event An object with at least a 'type' attribute
     *      or a string indicating the event name.
     * @return {void}
     * @method fire
     */
    fire: function(event) {
        if (typeof event === "string") {
            event = { type: event };
        }
        if (typeof event.target !== "undefined") {
            event.target = this;
        }

        if (typeof event.type === "undefined") {
            throw new Error("Event object missing 'type' property.");
        }

        if (this._listeners[event.type]) {

            //create a copy of the array and use that so listeners can't chane
            var listeners = this._listeners[event.type].concat();
            for (var i=0, len=listeners.length; i < len; i++) {
                listeners[i].call(this, event);
            }
        }
    },

    /**
     * Removes a listener for a given event type.
     * @param {String} type The type of event to remove a listener from.
     * @param {Function} listener The function to remove from the event.
     * @return {void}
     * @method removeListener
     */
    removeListener: function(type, listener) {
        if (this._listeners[type]) {
            var listeners = this._listeners[type];
            for (var i=0, len=listeners.length; i < len; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }


        }
    }
};

},{}],24:[function(require,module,exports){
"use strict";

module.exports = StringReader;

/**
 * Convenient way to read through strings.
 * @namespace parserlib.util
 * @class StringReader
 * @constructor
 * @param {String} text The text to read.
 */
function StringReader(text) {

    /**
     * The input text with line endings normalized.
     * @property _input
     * @type String
     * @private
     */
    this._input = text.replace(/(\r\n?|\n)/g, "\n");


    /**
     * The row for the character to be read next.
     * @property _line
     * @type int
     * @private
     */
    this._line = 1;


    /**
     * The column for the character to be read next.
     * @property _col
     * @type int
     * @private
     */
    this._col = 1;

    /**
     * The index of the character in the input to be read next.
     * @property _cursor
     * @type int
     * @private
     */
    this._cursor = 0;
}

StringReader.prototype = {

    // restore constructor
    constructor: StringReader,

    //-------------------------------------------------------------------------
    // Position info
    //-------------------------------------------------------------------------

    /**
     * Returns the column of the character to be read next.
     * @return {int} The column of the character to be read next.
     * @method getCol
     */
    getCol: function() {
        return this._col;
    },

    /**
     * Returns the row of the character to be read next.
     * @return {int} The row of the character to be read next.
     * @method getLine
     */
    getLine: function() {
        return this._line;
    },

    /**
     * Determines if you're at the end of the input.
     * @return {Boolean} True if there's no more input, false otherwise.
     * @method eof
     */
    eof: function() {
        return this._cursor === this._input.length;
    },

    //-------------------------------------------------------------------------
    // Basic reading
    //-------------------------------------------------------------------------

    /**
     * Reads the next character without advancing the cursor.
     * @param {int} count How many characters to look ahead (default is 1).
     * @return {String} The next character or null if there is no next character.
     * @method peek
     */
    peek: function(count) {
        var c = null;
        count = typeof count === "undefined" ? 1 : count;

        // if we're not at the end of the input...
        if (this._cursor < this._input.length) {

            // get character and increment cursor and column
            c = this._input.charAt(this._cursor + count - 1);
        }

        return c;
    },

    /**
     * Reads the next character from the input and adjusts the row and column
     * accordingly.
     * @return {String} The next character or null if there is no next character.
     * @method read
     */
    read: function() {
        var c = null;

        // if we're not at the end of the input...
        if (this._cursor < this._input.length) {

            // if the last character was a newline, increment row count
            // and reset column count
            if (this._input.charAt(this._cursor) === "\n") {
                this._line++;
                this._col=1;
            } else {
                this._col++;
            }

            // get character and increment cursor and column
            c = this._input.charAt(this._cursor++);
        }

        return c;
    },

    //-------------------------------------------------------------------------
    // Misc
    //-------------------------------------------------------------------------

    /**
     * Saves the current location so it can be returned to later.
     * @method mark
     * @return {void}
     */
    mark: function() {
        this._bookmark = {
            cursor: this._cursor,
            line:   this._line,
            col:    this._col
        };
    },

    reset: function() {
        if (this._bookmark) {
            this._cursor = this._bookmark.cursor;
            this._line = this._bookmark.line;
            this._col = this._bookmark.col;
            delete this._bookmark;
        }
    },

    //-------------------------------------------------------------------------
    // Advanced reading
    //-------------------------------------------------------------------------

    /**
     * Reads up to and including the given string. Throws an error if that
     * string is not found.
     * @param {String} pattern The string to read.
     * @return {String} The string when it is found.
     * @throws Error when the string pattern is not found.
     * @method readTo
     */
    readTo: function(pattern) {

        var buffer = "",
            c;

        /*
         * First, buffer must be the same length as the pattern.
         * Then, buffer must end with the pattern or else reach the
         * end of the input.
         */
        while (buffer.length < pattern.length || buffer.lastIndexOf(pattern) !== buffer.length - pattern.length) {
            c = this.read();
            if (c) {
                buffer += c;
            } else {
                throw new Error("Expected \"" + pattern + "\" at line " + this._line  + ", col " + this._col + ".");
            }
        }

        return buffer;

    },

    /**
     * Reads characters while each character causes the given
     * filter function to return true. The function is passed
     * in each character and either returns true to continue
     * reading or false to stop.
     * @param {Function} filter The function to read on each character.
     * @return {String} The string made up of all characters that passed the
     *      filter check.
     * @method readWhile
     */
    readWhile: function(filter) {

        var buffer = "",
            c = this.peek();

        while (c !== null && filter(c)) {
            buffer += this.read();
            c = this.peek();
        }

        return buffer;

    },

    /**
     * Reads characters that match either text or a regular expression and
     * returns those characters. If a match is found, the row and column
     * are adjusted; if no match is found, the reader's state is unchanged.
     * reading or false to stop.
     * @param {String|RegExp} matcher If a string, then the literal string
     *      value is searched for. If a regular expression, then any string
     *      matching the pattern is search for.
     * @return {String} The string made up of all characters that matched or
     *      null if there was no match.
     * @method readMatch
     */
    readMatch: function(matcher) {

        var source = this._input.substring(this._cursor),
            value = null;

        // if it's a string, just do a straight match
        if (typeof matcher === "string") {
            if (source.slice(0, matcher.length) === matcher) {
                value = this.readCount(matcher.length);
            }
        } else if (matcher instanceof RegExp) {
            if (matcher.test(source)) {
                value = this.readCount(RegExp.lastMatch.length);
            }
        }

        return value;
    },


    /**
     * Reads a given number of characters. If the end of the input is reached,
     * it reads only the remaining characters and does not throw an error.
     * @param {int} count The number of characters to read.
     * @return {String} The string made up the read characters.
     * @method readCount
     */
    readCount: function(count) {
        var buffer = "";

        while (count--) {
            buffer += this.read();
        }

        return buffer;
    }

};

},{}],25:[function(require,module,exports){
"use strict";

module.exports = SyntaxError;

/**
 * Type to use when a syntax error occurs.
 * @class SyntaxError
 * @namespace parserlib.util
 * @constructor
 * @param {String} message The error message.
 * @param {int} line The line at which the error occurred.
 * @param {int} col The column at which the error occurred.
 */
function SyntaxError(message, line, col) {
    Error.call(this);
    this.name = this.constructor.name;

    /**
     * The column at which the error occurred.
     * @type int
     * @property col
     */
    this.col = col;

    /**
     * The line at which the error occurred.
     * @type int
     * @property line
     */
    this.line = line;

    /**
     * The text representation of the unit.
     * @type String
     * @property text
     */
    this.message = message;

}

//inherit from Error
SyntaxError.prototype = Object.create(Error.prototype); // jshint ignore:line
SyntaxError.prototype.constructor = SyntaxError; // jshint ignore:line

},{}],26:[function(require,module,exports){
"use strict";

module.exports = SyntaxUnit;

/**
 * Base type to represent a single syntactic unit.
 * @class SyntaxUnit
 * @namespace parserlib.util
 * @constructor
 * @param {String} text The text of the unit.
 * @param {int} line The line of text on which the unit resides.
 * @param {int} col The column of text on which the unit resides.
 */
function SyntaxUnit(text, line, col, type) {


    /**
     * The column of text on which the unit resides.
     * @type int
     * @property col
     */
    this.col = col;

    /**
     * The line of text on which the unit resides.
     * @type int
     * @property line
     */
    this.line = line;

    /**
     * The text representation of the unit.
     * @type String
     * @property text
     */
    this.text = text;

    /**
     * The type of syntax unit.
     * @type int
     * @property type
     */
    this.type = type;
}

/**
 * Create a new syntax unit based solely on the given token.
 * Convenience method for creating a new syntax unit when
 * it represents a single token instead of multiple.
 * @param {Object} token The token object to represent.
 * @return {parserlib.util.SyntaxUnit} The object representing the token.
 * @static
 * @method fromToken
 */
SyntaxUnit.fromToken = function(token) {
    return new SyntaxUnit(token.value, token.startLine, token.startCol);
};

SyntaxUnit.prototype = {

    //restore constructor
    constructor: SyntaxUnit,

    /**
     * Returns the text representation of the unit.
     * @return {String} The text representation of the unit.
     * @method valueOf
     */
    valueOf: function() {
        return this.toString();
    },

    /**
     * Returns the text representation of the unit.
     * @return {String} The text representation of the unit.
     * @method toString
     */
    toString: function() {
        return this.text;
    }

};

},{}],27:[function(require,module,exports){
"use strict";

module.exports = TokenStreamBase;

var StringReader = require("./StringReader");
var SyntaxError = require("./SyntaxError");

/**
 * Generic TokenStream providing base functionality.
 * @class TokenStreamBase
 * @namespace parserlib.util
 * @constructor
 * @param {String|StringReader} input The text to tokenize or a reader from
 *      which to read the input.
 */
function TokenStreamBase(input, tokenData) {

    /**
     * The string reader for easy access to the text.
     * @type StringReader
     * @property _reader
     * @private
     */
    this._reader = new StringReader(input ? input.toString() : "");

    /**
     * Token object for the last consumed token.
     * @type Token
     * @property _token
     * @private
     */
    this._token = null;

    /**
     * The array of token information.
     * @type Array
     * @property _tokenData
     * @private
     */
    this._tokenData = tokenData;

    /**
     * Lookahead token buffer.
     * @type Array
     * @property _lt
     * @private
     */
    this._lt = [];

    /**
     * Lookahead token buffer index.
     * @type int
     * @property _ltIndex
     * @private
     */
    this._ltIndex = 0;

    this._ltIndexCache = [];
}

/**
 * Accepts an array of token information and outputs
 * an array of token data containing key-value mappings
 * and matching functions that the TokenStream needs.
 * @param {Array} tokens An array of token descriptors.
 * @return {Array} An array of processed token data.
 * @method createTokenData
 * @static
 */
TokenStreamBase.createTokenData = function(tokens) {

    var nameMap     = [],
        typeMap     = Object.create(null),
        tokenData     = tokens.concat([]),
        i            = 0,
        len            = tokenData.length+1;

    tokenData.UNKNOWN = -1;
    tokenData.unshift({ name:"EOF" });

    for (; i < len; i++) {
        nameMap.push(tokenData[i].name);
        tokenData[tokenData[i].name] = i;
        if (tokenData[i].text) {
            typeMap[tokenData[i].text] = i;
        }
    }

    tokenData.name = function(tt) {
        return nameMap[tt];
    };

    tokenData.type = function(c) {
        return typeMap[c];
    };

    return tokenData;
};

TokenStreamBase.prototype = {

    //restore constructor
    constructor: TokenStreamBase,

    //-------------------------------------------------------------------------
    // Matching methods
    //-------------------------------------------------------------------------

    /**
     * Determines if the next token matches the given token type.
     * If so, that token is consumed; if not, the token is placed
     * back onto the token stream. You can pass in any number of
     * token types and this will return true if any of the token
     * types is found.
     * @param {int|int[]} tokenTypes Either a single token type or an array of
     *      token types that the next token might be. If an array is passed,
     *      it's assumed that the token can be any of these.
     * @param {variant} channel (Optional) The channel to read from. If not
     *      provided, reads from the default (unnamed) channel.
     * @return {Boolean} True if the token type matches, false if not.
     * @method match
     */
    match: function(tokenTypes, channel) {

        //always convert to an array, makes things easier
        if (!(tokenTypes instanceof Array)) {
            tokenTypes = [tokenTypes];
        }

        var tt  = this.get(channel),
            i   = 0,
            len = tokenTypes.length;

        while (i < len) {
            if (tt === tokenTypes[i++]) {
                return true;
            }
        }

        //no match found, put the token back
        this.unget();
        return false;
    },

    /**
     * Determines if the next token matches the given token type.
     * If so, that token is consumed; if not, an error is thrown.
     * @param {int|int[]} tokenTypes Either a single token type or an array of
     *      token types that the next token should be. If an array is passed,
     *      it's assumed that the token must be one of these.
     * @return {void}
     * @method mustMatch
     */
    mustMatch: function(tokenTypes) {

        var token;

        //always convert to an array, makes things easier
        if (!(tokenTypes instanceof Array)) {
            tokenTypes = [tokenTypes];
        }

        if (!this.match.apply(this, arguments)) {
            token = this.LT(1);
            throw new SyntaxError("Expected " + this._tokenData[tokenTypes[0]].name +
                " at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
        }
    },

    //-------------------------------------------------------------------------
    // Consuming methods
    //-------------------------------------------------------------------------

    /**
     * Keeps reading from the token stream until either one of the specified
     * token types is found or until the end of the input is reached.
     * @param {int|int[]} tokenTypes Either a single token type or an array of
     *      token types that the next token should be. If an array is passed,
     *      it's assumed that the token must be one of these.
     * @param {variant} channel (Optional) The channel to read from. If not
     *      provided, reads from the default (unnamed) channel.
     * @return {void}
     * @method advance
     */
    advance: function(tokenTypes, channel) {

        while (this.LA(0) !== 0 && !this.match(tokenTypes, channel)) {
            this.get();
        }

        return this.LA(0);
    },

    /**
     * Consumes the next token from the token stream.
     * @return {int} The token type of the token that was just consumed.
     * @method get
     */
    get: function(channel) {

        var tokenInfo   = this._tokenData,
            i           =0,
            token,
            info;

        //check the lookahead buffer first
        if (this._lt.length && this._ltIndex >= 0 && this._ltIndex < this._lt.length) {

            i++;
            this._token = this._lt[this._ltIndex++];
            info = tokenInfo[this._token.type];

            //obey channels logic
            while ((info.channel !== undefined && channel !== info.channel) &&
                    this._ltIndex < this._lt.length) {
                this._token = this._lt[this._ltIndex++];
                info = tokenInfo[this._token.type];
                i++;
            }

            //here be dragons
            if ((info.channel === undefined || channel === info.channel) &&
                    this._ltIndex <= this._lt.length) {
                this._ltIndexCache.push(i);
                return this._token.type;
            }
        }

        //call token retriever method
        token = this._getToken();

        //if it should be hidden, don't save a token
        if (token.type > -1 && !tokenInfo[token.type].hide) {

            //apply token channel
            token.channel = tokenInfo[token.type].channel;

            //save for later
            this._token = token;
            this._lt.push(token);

            //save space that will be moved (must be done before array is truncated)
            this._ltIndexCache.push(this._lt.length - this._ltIndex + i);

            //keep the buffer under 5 items
            if (this._lt.length > 5) {
                this._lt.shift();
            }

            //also keep the shift buffer under 5 items
            if (this._ltIndexCache.length > 5) {
                this._ltIndexCache.shift();
            }

            //update lookahead index
            this._ltIndex = this._lt.length;
        }

        /*
         * Skip to the next token if:
         * 1. The token type is marked as hidden.
         * 2. The token type has a channel specified and it isn't the current channel.
         */
        info = tokenInfo[token.type];
        if (info &&
                (info.hide ||
                (info.channel !== undefined && channel !== info.channel))) {
            return this.get(channel);
        } else {
            //return just the type
            return token.type;
        }
    },

    /**
     * Looks ahead a certain number of tokens and returns the token type at
     * that position. This will throw an error if you lookahead past the
     * end of input, past the size of the lookahead buffer, or back past
     * the first token in the lookahead buffer.
     * @param {int} The index of the token type to retrieve. 0 for the
     *      current token, 1 for the next, -1 for the previous, etc.
     * @return {int} The token type of the token in the given position.
     * @method LA
     */
    LA: function(index) {
        var total = index,
            tt;
        if (index > 0) {
            //TODO: Store 5 somewhere
            if (index > 5) {
                throw new Error("Too much lookahead.");
            }

            //get all those tokens
            while (total) {
                tt = this.get();
                total--;
            }

            //unget all those tokens
            while (total < index) {
                this.unget();
                total++;
            }
        } else if (index < 0) {

            if (this._lt[this._ltIndex+index]) {
                tt = this._lt[this._ltIndex+index].type;
            } else {
                throw new Error("Too much lookbehind.");
            }

        } else {
            tt = this._token.type;
        }

        return tt;

    },

    /**
     * Looks ahead a certain number of tokens and returns the token at
     * that position. This will throw an error if you lookahead past the
     * end of input, past the size of the lookahead buffer, or back past
     * the first token in the lookahead buffer.
     * @param {int} The index of the token type to retrieve. 0 for the
     *      current token, 1 for the next, -1 for the previous, etc.
     * @return {Object} The token of the token in the given position.
     * @method LA
     */
    LT: function(index) {

        //lookahead first to prime the token buffer
        this.LA(index);

        //now find the token, subtract one because _ltIndex is already at the next index
        return this._lt[this._ltIndex+index-1];
    },

    /**
     * Returns the token type for the next token in the stream without
     * consuming it.
     * @return {int} The token type of the next token in the stream.
     * @method peek
     */
    peek: function() {
        return this.LA(1);
    },

    /**
     * Returns the actual token object for the last consumed token.
     * @return {Token} The token object for the last consumed token.
     * @method token
     */
    token: function() {
        return this._token;
    },

    /**
     * Returns the name of the token for the given token type.
     * @param {int} tokenType The type of token to get the name of.
     * @return {String} The name of the token or "UNKNOWN_TOKEN" for any
     *      invalid token type.
     * @method tokenName
     */
    tokenName: function(tokenType) {
        if (tokenType < 0 || tokenType > this._tokenData.length) {
            return "UNKNOWN_TOKEN";
        } else {
            return this._tokenData[tokenType].name;
        }
    },

    /**
     * Returns the token type value for the given token name.
     * @param {String} tokenName The name of the token whose value should be returned.
     * @return {int} The token type value for the given token name or -1
     *      for an unknown token.
     * @method tokenName
     */
    tokenType: function(tokenName) {
        return this._tokenData[tokenName] || -1;
    },

    /**
     * Returns the last consumed token to the token stream.
     * @method unget
     */
    unget: function() {
        //if (this._ltIndex > -1) {
        if (this._ltIndexCache.length) {
            this._ltIndex -= this._ltIndexCache.pop();//--;
            this._token = this._lt[this._ltIndex - 1];
        } else {
            throw new Error("Too much lookahead.");
        }
    }

};


},{"./StringReader":24,"./SyntaxError":25}],28:[function(require,module,exports){
"use strict";

module.exports = {
    StringReader    : require("./StringReader"),
    SyntaxError     : require("./SyntaxError"),
    SyntaxUnit      : require("./SyntaxUnit"),
    EventTarget     : require("./EventTarget"),
    TokenStreamBase : require("./TokenStreamBase")
};

},{"./EventTarget":23,"./StringReader":24,"./SyntaxError":25,"./SyntaxUnit":26,"./TokenStreamBase":27}],"parserlib":[function(require,module,exports){
"use strict";

module.exports = {
    css  : require("./css"),
    util : require("./util")
};

},{"./css":22,"./util":28}]},{},[]);

return require('parserlib');
})();
var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

/**
 * Main CSSLint object.
 * @class CSSLint
 * @static
 * @extends parserlib.util.EventTarget
 */

/* global parserlib, clone, Reporter */
/* exported CSSLint */

var CSSLint = (function() {
    "use strict";

    var rules           = [],
        formatters      = [],
        embeddedRuleset = /\/\*\s*csslint([^\*]*)\*\//,
        api             = new parserlib.util.EventTarget();

    api.version = "1.0.5";

    //-------------------------------------------------------------------------
    // Rule Management
    //-------------------------------------------------------------------------

    /**
     * Adds a new rule to the engine.
     * @param {Object} rule The rule to add.
     * @method addRule
     */
    api.addRule = function(rule) {
        rules.push(rule);
        rules[rule.id] = rule;
    };

    /**
     * Clears all rule from the engine.
     * @method clearRules
     */
    api.clearRules = function() {
        rules = [];
    };

    /**
     * Returns the rule objects.
     * @return An array of rule objects.
     * @method getRules
     */
    api.getRules = function() {
        return [].concat(rules).sort(function(a, b) {
            return a.id > b.id ? 1 : 0;
        });
    };

    /**
     * Returns a ruleset configuration object with all current rules.
     * @return A ruleset object.
     * @method getRuleset
     */
    api.getRuleset = function() {
        var ruleset = {},
            i = 0,
            len = rules.length;

        while (i < len) {
            ruleset[rules[i++].id] = 1;    // by default, everything is a warning
        }

        return ruleset;
    };

    /**
     * Returns a ruleset object based on embedded rules.
     * @param {String} text A string of css containing embedded rules.
     * @param {Object} ruleset A ruleset object to modify.
     * @return {Object} A ruleset object.
     * @method getEmbeddedRuleset
     */
    function applyEmbeddedRuleset(text, ruleset) {
        var valueMap,
            embedded = text && text.match(embeddedRuleset),
            rules = embedded && embedded[1];

        if (rules) {
            valueMap = {
                "true": 2,  // true is error
                "": 1,      // blank is warning
                "false": 0, // false is ignore

                "2": 2,     // explicit error
                "1": 1,     // explicit warning
                "0": 0      // explicit ignore
            };

            rules.toLowerCase().split(",").forEach(function(rule) {
                var pair = rule.split(":"),
                    property = pair[0] || "",
                    value = pair[1] || "";

                ruleset[property.trim()] = valueMap[value.trim()];
            });
        }

        return ruleset;
    }

    //-------------------------------------------------------------------------
    // Formatters
    //-------------------------------------------------------------------------

    /**
     * Adds a new formatter to the engine.
     * @param {Object} formatter The formatter to add.
     * @method addFormatter
     */
    api.addFormatter = function(formatter) {
        // formatters.push(formatter);
        formatters[formatter.id] = formatter;
    };

    /**
     * Retrieves a formatter for use.
     * @param {String} formatId The name of the format to retrieve.
     * @return {Object} The formatter or undefined.
     * @method getFormatter
     */
    api.getFormatter = function(formatId) {
        return formatters[formatId];
    };

    /**
     * Formats the results in a particular format for a single file.
     * @param {Object} result The results returned from CSSLint.verify().
     * @param {String} filename The filename for which the results apply.
     * @param {String} formatId The name of the formatter to use.
     * @param {Object} options (Optional) for special output handling.
     * @return {String} A formatted string for the results.
     * @method format
     */
    api.format = function(results, filename, formatId, options) {
        var formatter = api.getFormatter(formatId),
            result = null;

        if (formatter) {
            result = formatter.startFormat();
            result += formatter.formatResults(results, filename, options || {});
            result += formatter.endFormat();
        }

        return result;
    };

    /**
     * Indicates if the given format is supported.
     * @param {String} formatId The ID of the format to check.
     * @return {Boolean} True if the format exists, false if not.
     * @method hasFormat
     */
    api.hasFormat = function(formatId) {
        return formatters.hasOwnProperty(formatId);
    };

    //-------------------------------------------------------------------------
    // Verification
    //-------------------------------------------------------------------------

    /**
     * Starts the verification process for the given CSS text.
     * @param {String} text The CSS text to verify.
     * @param {Object} ruleset (Optional) List of rules to apply. If null, then
     *      all rules are used. If a rule has a value of 1 then it's a warning,
     *      a value of 2 means it's an error.
     * @return {Object} Results of the verification.
     * @method verify
     */
    api.verify = function(text, ruleset) {

        var i = 0,
            reporter,
            lines,
            allow = {},
            ignore = [],
            report,
            parser = new parserlib.css.Parser({
                starHack: true,
                ieFilters: true,
                underscoreHack: true,
                strict: false
            });

        // normalize line endings
        lines = text.replace(/\n\r?/g, "$split$").split("$split$");

        // find 'allow' comments
        CSSLint.Util.forEach(lines, function (line, lineno) {
            var allowLine = line && line.match(/\/\*[ \t]*csslint[ \t]+allow:[ \t]*([^\*]*)\*\//i),
                allowRules = allowLine && allowLine[1],
                allowRuleset = {};

            if (allowRules) {
                allowRules.toLowerCase().split(",").forEach(function(allowRule) {
                    allowRuleset[allowRule.trim()] = true;
                });
                if (Object.keys(allowRuleset).length > 0) {
                    allow[lineno + 1] = allowRuleset;
                }
            }
        });

        var ignoreStart = null,
            ignoreEnd = null;
        CSSLint.Util.forEach(lines, function (line, lineno) {
            // Keep oldest, "unclosest" ignore:start
            if (ignoreStart === null && line.match(/\/\*[ \t]*csslint[ \t]+ignore:start[ \t]*\*\//i)) {
                ignoreStart = lineno;
            }

            if (line.match(/\/\*[ \t]*csslint[ \t]+ignore:end[ \t]*\*\//i)) {
                ignoreEnd = lineno;
            }

            if (ignoreStart !== null && ignoreEnd !== null) {
                ignore.push([ignoreStart, ignoreEnd]);
                ignoreStart = ignoreEnd = null;
            }
        });

        // Close remaining ignore block, if any
        if (ignoreStart !== null) {
            ignore.push([ignoreStart, lines.length]);
        }

        if (!ruleset) {
            ruleset = api.getRuleset();
        }

        if (embeddedRuleset.test(text)) {
            // defensively copy so that caller's version does not get modified
            ruleset = clone(ruleset);
            ruleset = applyEmbeddedRuleset(text, ruleset);
        }

        reporter = new Reporter(lines, ruleset, allow, ignore);

        ruleset.errors = 2;       // always report parsing errors as errors
        for (i in ruleset) {
            if (ruleset.hasOwnProperty(i) && ruleset[i]) {
                if (rules[i]) {
                    rules[i].init(parser, reporter);
                }
            }
        }


        // capture most horrible error type
        try {
            parser.parse(text);
        } catch (ex) {
            reporter.error("Fatal error, cannot continue: " + ex.message, ex.line, ex.col, {});
        }

        report = {
            messages    : reporter.messages,
            stats       : reporter.stats,
            ruleset     : reporter.ruleset,
            allow       : reporter.allow,
            ignore      : reporter.ignore
        };

        // sort by line numbers, rollups at the bottom
        report.messages.sort(function (a, b) {
            if (a.rollup && !b.rollup) {
                return 1;
            } else if (!a.rollup && b.rollup) {
                return -1;
            } else {
                return a.line - b.line;
            }
        });

        return report;
    };

    //-------------------------------------------------------------------------
    // Publish the API
    //-------------------------------------------------------------------------

    return api;

})();

/**
 * An instance of Report is used to report results of the
 * verification back to the main API.
 * @class Reporter
 * @constructor
 * @param {String[]} lines The text lines of the source.
 * @param {Object} ruleset The set of rules to work with, including if
 *      they are errors or warnings.
 * @param {Object} explicitly allowed lines
 * @param {[][]} ingore list of line ranges to be ignored
 */
function Reporter(lines, ruleset, allow, ignore) {
    "use strict";

    /**
     * List of messages being reported.
     * @property messages
     * @type String[]
     */
    this.messages = [];

    /**
     * List of statistics being reported.
     * @property stats
     * @type String[]
     */
    this.stats = [];

    /**
     * Lines of code being reported on. Used to provide contextual information
     * for messages.
     * @property lines
     * @type String[]
     */
    this.lines = lines;

    /**
     * Information about the rules. Used to determine whether an issue is an
     * error or warning.
     * @property ruleset
     * @type Object
     */
    this.ruleset = ruleset;

    /**
     * Lines with specific rule messages to leave out of the report.
     * @property allow
     * @type Object
     */
    this.allow = allow;
    if (!this.allow) {
        this.allow = {};
    }

    /**
     * Linesets not to include in the report.
     * @property ignore
     * @type [][]
     */
    this.ignore = ignore;
    if (!this.ignore) {
        this.ignore = [];
    }
}

Reporter.prototype = {

    // restore constructor
    constructor: Reporter,

    /**
     * Report an error.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method error
     */
    error: function(message, line, col, rule) {
        "use strict";
        this.messages.push({
            type    : "error",
            line    : line,
            col     : col,
            message : message,
            evidence: this.lines[line-1],
            rule    : rule || {}
        });
    },

    /**
     * Report an warning.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method warn
     * @deprecated Use report instead.
     */
    warn: function(message, line, col, rule) {
        "use strict";
        this.report(message, line, col, rule);
    },

    /**
     * Report an issue.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method report
     */
    report: function(message, line, col, rule) {
        "use strict";

        // Check if rule violation should be allowed
        if (this.allow.hasOwnProperty(line) && this.allow[line].hasOwnProperty(rule.id)) {
            return;
        }

        var ignore = false;
        CSSLint.Util.forEach(this.ignore, function (range) {
            if (range[0] <= line && line <= range[1]) {
                ignore = true;
            }
        });
        if (ignore) {
            return;
        }

        this.messages.push({
            type    : this.ruleset[rule.id] === 2 ? "error" : "warning",
            line    : line,
            col     : col,
            message : message,
            evidence: this.lines[line-1],
            rule    : rule
        });
    },

    /**
     * Report some informational text.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method info
     */
    info: function(message, line, col, rule) {
        "use strict";
        this.messages.push({
            type    : "info",
            line    : line,
            col     : col,
            message : message,
            evidence: this.lines[line-1],
            rule    : rule
        });
    },

    /**
     * Report some rollup error information.
     * @param {String} message The message to store.
     * @param {Object} rule The rule this message relates to.
     * @method rollupError
     */
    rollupError: function(message, rule) {
        "use strict";
        this.messages.push({
            type    : "error",
            rollup  : true,
            message : message,
            rule    : rule
        });
    },

    /**
     * Report some rollup warning information.
     * @param {String} message The message to store.
     * @param {Object} rule The rule this message relates to.
     * @method rollupWarn
     */
    rollupWarn: function(message, rule) {
        "use strict";
        this.messages.push({
            type    : "warning",
            rollup  : true,
            message : message,
            rule    : rule
        });
    },

    /**
     * Report a statistic.
     * @param {String} name The name of the stat to store.
     * @param {Variant} value The value of the stat.
     * @method stat
     */
    stat: function(name, value) {
        "use strict";
        this.stats[name] = value;
    }
};

// expose for testing purposes
CSSLint._Reporter = Reporter;

/*
 * Utility functions that make life easier.
 */
CSSLint.Util = {
    /*
     * Adds all properties from supplier onto receiver,
     * overwriting if the same name already exists on
     * receiver.
     * @param {Object} The object to receive the properties.
     * @param {Object} The object to provide the properties.
     * @return {Object} The receiver
     */
    mix: function(receiver, supplier) {
        "use strict";
        var prop;

        for (prop in supplier) {
            if (supplier.hasOwnProperty(prop)) {
                receiver[prop] = supplier[prop];
            }
        }

        return prop;
    },

    /*
     * Polyfill for array indexOf() method.
     * @param {Array} values The array to search.
     * @param {Variant} value The value to search for.
     * @return {int} The index of the value if found, -1 if not.
     */
    indexOf: function(values, value) {
        "use strict";
        if (values.indexOf) {
            return values.indexOf(value);
        } else {
            for (var i=0, len=values.length; i < len; i++) {
                if (values[i] === value) {
                    return i;
                }
            }
            return -1;
        }
    },

    /*
     * Polyfill for array forEach() method.
     * @param {Array} values The array to operate on.
     * @param {Function} func The function to call on each item.
     * @return {void}
     */
    forEach: function(values, func) {
        "use strict";
        if (values.forEach) {
            return values.forEach(func);
        } else {
            for (var i=0, len=values.length; i < len; i++) {
                func(values[i], i, values);
            }
        }
    }
};

/*
 * Rule: Don't use adjoining classes (.foo.bar).
 */

CSSLint.addRule({

    // rule information
    id: "adjoining-classes",
    name: "Disallow adjoining classes",
    desc: "Don't use adjoining classes.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-adjoining-classes",
    browsers: "IE6",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;
        parser.addListener("startrule", function(event) {
            var selectors = event.selectors,
                selector,
                part,
                modifier,
                classCount,
                i, j, k;

            for (i=0; i < selectors.length; i++) {
                selector = selectors[i];
                for (j=0; j < selector.parts.length; j++) {
                    part = selector.parts[j];
                    if (part.type === parser.SELECTOR_PART_TYPE) {
                        classCount = 0;
                        for (k=0; k < part.modifiers.length; k++) {
                            modifier = part.modifiers[k];
                            if (modifier.type === "class") {
                                classCount++;
                            }
                            if (classCount > 1){
                                reporter.report("Adjoining classes: "+selectors[i].text, part.line, part.col, rule);
                            }
                        }
                    }
                }
            }
        });
    }

});

/*
 * Rule: Don't use width or height when using padding or border.
 */
CSSLint.addRule({

    // rule information
    id: "box-model",
    name: "Beware of broken box size",
    desc: "Don't use width or height when using padding or border.",
    url: "https://github.com/CSSLint/csslint/wiki/Beware-of-box-model-size",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            widthProperties = {
                border: 1,
                "border-left": 1,
                "border-right": 1,
                padding: 1,
                "padding-left": 1,
                "padding-right": 1
            },
            heightProperties = {
                border: 1,
                "border-bottom": 1,
                "border-top": 1,
                padding: 1,
                "padding-bottom": 1,
                "padding-top": 1
            },
            properties,
            boxSizing = false;

        function startRule() {
            properties = {};
            boxSizing = false;
        }

        function endRule() {
            var prop, value;

            if (!boxSizing) {
                if (properties.height) {
                    for (prop in heightProperties) {
                        if (heightProperties.hasOwnProperty(prop) && properties[prop]) {
                            value = properties[prop].value;
                            // special case for padding
                            if (!(prop === "padding" && value.parts.length === 2 && value.parts[0].value === 0)) {
                                reporter.report("Using height with " + prop + " can sometimes make elements larger than you expect.", properties[prop].line, properties[prop].col, rule);
                            }
                        }
                    }
                }

                if (properties.width) {
                    for (prop in widthProperties) {
                        if (widthProperties.hasOwnProperty(prop) && properties[prop]) {
                            value = properties[prop].value;

                            if (!(prop === "padding" && value.parts.length === 2 && value.parts[1].value === 0)) {
                                reporter.report("Using width with " + prop + " can sometimes make elements larger than you expect.", properties[prop].line, properties[prop].col, rule);
                            }
                        }
                    }
                }
            }
        }

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);
        parser.addListener("startpage", startRule);
        parser.addListener("startpagemargin", startRule);
        parser.addListener("startkeyframerule", startRule);
        parser.addListener("startviewport", startRule);

        parser.addListener("property", function(event) {
            var name = event.property.text.toLowerCase();

            if (heightProperties[name] || widthProperties[name]) {
                if (!/^0\S*$/.test(event.value) && !(name === "border" && event.value.toString() === "none")) {
                    properties[name] = {
                        line: event.property.line,
                        col: event.property.col,
                        value: event.value
                    };
                }
            } else {
                if (/^(width|height)/i.test(name) && /^(length|percentage)/.test(event.value.parts[0].type)) {
                    properties[name] = 1;
                } else if (name === "box-sizing") {
                    boxSizing = true;
                }
            }

        });

        parser.addListener("endrule", endRule);
        parser.addListener("endfontface", endRule);
        parser.addListener("endpage", endRule);
        parser.addListener("endpagemargin", endRule);
        parser.addListener("endkeyframerule", endRule);
        parser.addListener("endviewport", endRule);
    }

});

/*
 * Rule: box-sizing doesn't work in IE6 and IE7.
 */

CSSLint.addRule({

    // rule information
    id: "box-sizing",
    name: "Disallow use of box-sizing",
    desc: "The box-sizing properties isn't supported in IE6 and IE7.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-box-sizing",
    browsers: "IE6, IE7",
    tags: ["Compatibility"],

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        parser.addListener("property", function(event) {
            var name = event.property.text.toLowerCase();

            if (name === "box-sizing") {
                reporter.report("The box-sizing property isn't supported in IE6 and IE7.", event.line, event.col, rule);
            }
        });
    }

});

/*
 * Rule: Use the bulletproof @font-face syntax to avoid 404's in old IE
 * (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax)
 */

CSSLint.addRule({

    // rule information
    id: "bulletproof-font-face",
    name: "Use the bulletproof @font-face syntax",
    desc: "Use the bulletproof @font-face syntax to avoid 404's in old IE (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax).",
    url: "https://github.com/CSSLint/csslint/wiki/Bulletproof-font-face",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            fontFaceRule = false,
            firstSrc = true,
            ruleFailed = false,
            line, col;

        // Mark the start of a @font-face declaration so we only test properties inside it
        parser.addListener("startfontface", function() {
            fontFaceRule = true;
        });

        parser.addListener("property", function(event) {
            // If we aren't inside an @font-face declaration then just return
            if (!fontFaceRule) {
                return;
            }

            var propertyName = event.property.toString().toLowerCase(),
                value = event.value.toString();

            // Set the line and col numbers for use in the endfontface listener
            line = event.line;
            col = event.col;

            // This is the property that we care about, we can ignore the rest
            if (propertyName === "src") {
                var regex = /^\s?url\(['"].+\.eot\?.*['"]\)\s*format\(['"]embedded-opentype['"]\).*$/i;

                // We need to handle the advanced syntax with two src properties
                if (!value.match(regex) && firstSrc) {
                    ruleFailed = true;
                    firstSrc = false;
                } else if (value.match(regex) && !firstSrc) {
                    ruleFailed = false;
                }
            }


        });

        // Back to normal rules that we don't need to test
        parser.addListener("endfontface", function() {
            fontFaceRule = false;

            if (ruleFailed) {
                reporter.report("@font-face declaration doesn't follow the fontspring bulletproof syntax.", line, col, rule);
            }
        });
    }
});

/*
 * Rule: Include all compatible vendor prefixes to reach a wider
 * range of users.
 */

CSSLint.addRule({

    // rule information
    id: "compatible-vendor-prefixes",
    name: "Require compatible vendor prefixes",
    desc: "Include all compatible vendor prefixes to reach a wider range of users.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-compatible-vendor-prefixes",
    browsers: "All",

    // initialization
    init: function (parser, reporter) {
        "use strict";
        var rule = this,
            compatiblePrefixes,
            properties,
            prop,
            variations,
            prefixed,
            i,
            len,
            inKeyFrame = false,
            arrayPush = Array.prototype.push,
            applyTo = [];

        // See http://peter.sh/experiments/vendor-prefixed-css-property-overview/ for details
        compatiblePrefixes = {
            "animation"                  : "webkit",
            "animation-delay"            : "webkit",
            "animation-direction"        : "webkit",
            "animation-duration"         : "webkit",
            "animation-fill-mode"        : "webkit",
            "animation-iteration-count"  : "webkit",
            "animation-name"             : "webkit",
            "animation-play-state"       : "webkit",
            "animation-timing-function"  : "webkit",
            "appearance"                 : "webkit moz",
            "border-end"                 : "webkit moz",
            "border-end-color"           : "webkit moz",
            "border-end-style"           : "webkit moz",
            "border-end-width"           : "webkit moz",
            "border-image"               : "webkit moz o",
            "border-radius"              : "webkit",
            "border-start"               : "webkit moz",
            "border-start-color"         : "webkit moz",
            "border-start-style"         : "webkit moz",
            "border-start-width"         : "webkit moz",
            "box-align"                  : "webkit moz",
            "box-direction"              : "webkit moz",
            "box-flex"                   : "webkit moz",
            "box-lines"                  : "webkit",
            "box-ordinal-group"          : "webkit moz",
            "box-orient"                 : "webkit moz",
            "box-pack"                   : "webkit moz",
            "box-sizing"                 : "",
            "box-shadow"                 : "",
            "column-count"               : "webkit moz ms",
            "column-gap"                 : "webkit moz ms",
            "column-rule"                : "webkit moz ms",
            "column-rule-color"          : "webkit moz ms",
            "column-rule-style"          : "webkit moz ms",
            "column-rule-width"          : "webkit moz ms",
            "column-width"               : "webkit moz ms",
            "flex"                       : "webkit ms",
            "flex-basis"                 : "webkit",
            "flex-direction"             : "webkit ms",
            "flex-flow"                  : "webkit",
            "flex-grow"                  : "webkit",
            "flex-shrink"                : "webkit",
            "hyphens"                    : "epub moz",
            "line-break"                 : "webkit ms",
            "margin-end"                 : "webkit moz",
            "margin-start"               : "webkit moz",
            "marquee-speed"              : "webkit wap",
            "marquee-style"              : "webkit wap",
            "padding-end"                : "webkit moz",
            "padding-start"              : "webkit moz",
            "tab-size"                   : "moz o",
            "text-size-adjust"           : "webkit ms",
            "transform"                  : "webkit ms",
            "transform-origin"           : "webkit ms",
            "transition"                 : "",
            "transition-delay"           : "",
            "transition-duration"        : "",
            "transition-property"        : "",
            "transition-timing-function" : "",
            "user-modify"                : "webkit moz",
            "user-select"                : "webkit moz ms",
            "word-break"                 : "epub ms",
            "writing-mode"               : "epub ms"
        };


        for (prop in compatiblePrefixes) {
            if (compatiblePrefixes.hasOwnProperty(prop)) {
                variations = [];
                prefixed = compatiblePrefixes[prop].split(" ");
                for (i = 0, len = prefixed.length; i < len; i++) {
                    variations.push("-" + prefixed[i] + "-" + prop);
                }
                compatiblePrefixes[prop] = variations;
                arrayPush.apply(applyTo, variations);
            }
        }

        parser.addListener("startrule", function () {
            properties = [];
        });

        parser.addListener("startkeyframes", function (event) {
            inKeyFrame = event.prefix || true;
        });

        parser.addListener("endkeyframes", function () {
            inKeyFrame = false;
        });

        parser.addListener("property", function (event) {
            var name = event.property;
            if (CSSLint.Util.indexOf(applyTo, name.text) > -1) {

                // e.g., -moz-transform is okay to be alone in @-moz-keyframes
                if (!inKeyFrame || typeof inKeyFrame !== "string" ||
                        name.text.indexOf("-" + inKeyFrame + "-") !== 0) {
                    properties.push(name);
                }
            }
        });

        parser.addListener("endrule", function () {
            if (!properties.length) {
                return;
            }

            var propertyGroups = {},
                i,
                len,
                name,
                prop,
                variations,
                value,
                full,
                actual,
                item,
                propertiesSpecified;

            for (i = 0, len = properties.length; i < len; i++) {
                name = properties[i];

                for (prop in compatiblePrefixes) {
                    if (compatiblePrefixes.hasOwnProperty(prop)) {
                        variations = compatiblePrefixes[prop];
                        if (CSSLint.Util.indexOf(variations, name.text) > -1) {
                            if (!propertyGroups[prop]) {
                                propertyGroups[prop] = {
                                    full: variations.slice(0),
                                    actual: [],
                                    actualNodes: []
                                };
                            }
                            if (CSSLint.Util.indexOf(propertyGroups[prop].actual, name.text) === -1) {
                                propertyGroups[prop].actual.push(name.text);
                                propertyGroups[prop].actualNodes.push(name);
                            }
                        }
                    }
                }
            }

            for (prop in propertyGroups) {
                if (propertyGroups.hasOwnProperty(prop)) {
                    value = propertyGroups[prop];
                    full = value.full;
                    actual = value.actual;

                    if (full.length > actual.length) {
                        for (i = 0, len = full.length; i < len; i++) {
                            item = full[i];
                            if (CSSLint.Util.indexOf(actual, item) === -1) {
                                propertiesSpecified = (actual.length === 1) ? actual[0] : (actual.length === 2) ? actual.join(" and ") : actual.join(", ");
                                reporter.report("The property " + item + " is compatible with " + propertiesSpecified + " and should be included as well.", value.actualNodes[0].line, value.actualNodes[0].col, rule);
                            }
                        }

                    }
                }
            }
        });
    }
});

/*
 * Rule: Certain properties don't play well with certain display values.
 * - float should not be used with inline-block
 * - height, width, margin-top, margin-bottom, float should not be used with inline
 * - vertical-align should not be used with block
 * - margin, float should not be used with table-*
 */

CSSLint.addRule({

    // rule information
    id: "display-property-grouping",
    name: "Require properties appropriate for display",
    desc: "Certain properties shouldn't be used with certain display property values.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-properties-appropriate-for-display",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        var propertiesToCheck = {
                display: 1,
                "float": "none",
                height: 1,
                width: 1,
                margin: 1,
                "margin-left": 1,
                "margin-right": 1,
                "margin-bottom": 1,
                "margin-top": 1,
                padding: 1,
                "padding-left": 1,
                "padding-right": 1,
                "padding-bottom": 1,
                "padding-top": 1,
                "vertical-align": 1
            },
            properties;

        function reportProperty(name, display, msg) {
            if (properties[name]) {
                if (typeof propertiesToCheck[name] !== "string" || properties[name].value.toLowerCase() !== propertiesToCheck[name]) {
                    reporter.report(msg || name + " can't be used with display: " + display + ".", properties[name].line, properties[name].col, rule);
                }
            }
        }

        function startRule() {
            properties = {};
        }

        function endRule() {

            var display = properties.display ? properties.display.value : null;
            if (display) {
                switch (display) {

                    case "inline":
                        // height, width, margin-top, margin-bottom, float should not be used with inline
                        reportProperty("height", display);
                        reportProperty("width", display);
                        reportProperty("margin", display);
                        reportProperty("margin-top", display);
                        reportProperty("margin-bottom", display);
                        reportProperty("float", display, "display:inline has no effect on floated elements (but may be used to fix the IE6 double-margin bug).");
                        break;

                    case "block":
                        // vertical-align should not be used with block
                        reportProperty("vertical-align", display);
                        break;

                    case "inline-block":
                        // float should not be used with inline-block
                        reportProperty("float", display);
                        break;

                    default:
                        // margin, float should not be used with table
                        if (display.indexOf("table-") === 0) {
                            reportProperty("margin", display);
                            reportProperty("margin-left", display);
                            reportProperty("margin-right", display);
                            reportProperty("margin-top", display);
                            reportProperty("margin-bottom", display);
                            reportProperty("float", display);
                        }

                        // otherwise do nothing
                }
            }

        }

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);
        parser.addListener("startkeyframerule", startRule);
        parser.addListener("startpagemargin", startRule);
        parser.addListener("startpage", startRule);
        parser.addListener("startviewport", startRule);

        parser.addListener("property", function(event) {
            var name = event.property.text.toLowerCase();

            if (propertiesToCheck[name]) {
                properties[name] = {
                    value: event.value.text,
                    line: event.property.line,
                    col: event.property.col
                };
            }
        });

        parser.addListener("endrule", endRule);
        parser.addListener("endfontface", endRule);
        parser.addListener("endkeyframerule", endRule);
        parser.addListener("endpagemargin", endRule);
        parser.addListener("endpage", endRule);
        parser.addListener("endviewport", endRule);

    }

});

/*
 * Rule: Disallow duplicate background-images (using url).
 */

CSSLint.addRule({

    // rule information
    id: "duplicate-background-images",
    name: "Disallow duplicate background images",
    desc: "Every background-image should be unique. Use a common class for e.g. sprites.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-background-images",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            stack = {};

        parser.addListener("property", function(event) {
            var name = event.property.text,
                value = event.value,
                i, len;

            if (name.match(/background/i)) {
                for (i=0, len=value.parts.length; i < len; i++) {
                    if (value.parts[i].type === "uri") {
                        if (typeof stack[value.parts[i].uri] === "undefined") {
                            stack[value.parts[i].uri] = event;
                        } else {
                            reporter.report("Background image '" + value.parts[i].uri + "' was used multiple times, first declared at line " + stack[value.parts[i].uri].line + ", col " + stack[value.parts[i].uri].col + ".", event.line, event.col, rule);
                        }
                    }
                }
            }
        });
    }
});

/*
 * Rule: Duplicate properties must appear one after the other. If an already-defined
 * property appears somewhere else in the rule, then it's likely an error.
 */

CSSLint.addRule({

    // rule information
    id: "duplicate-properties",
    name: "Disallow duplicate properties",
    desc: "Duplicate properties must appear one after the other.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-properties",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            properties,
            lastProperty;

        function startRule() {
            properties = {};
        }

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);
        parser.addListener("startpage", startRule);
        parser.addListener("startpagemargin", startRule);
        parser.addListener("startkeyframerule", startRule);
        parser.addListener("startviewport", startRule);

        parser.addListener("property", function(event) {
            var property = event.property,
                name = property.text.toLowerCase();

            if (properties[name] && (lastProperty !== name || properties[name] === event.value.text)) {
                reporter.report("Duplicate property '" + event.property + "' found.", event.line, event.col, rule);
            }

            properties[name] = event.value.text;
            lastProperty = name;

        });


    }

});

/*
 * Rule: Style rules without any properties defined should be removed.
 */

CSSLint.addRule({

    // rule information
    id: "empty-rules",
    name: "Disallow empty rules",
    desc: "Rules without any properties specified should be removed.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-empty-rules",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            count = 0;

        parser.addListener("startrule", function() {
            count=0;
        });

        parser.addListener("property", function() {
            count++;
        });

        parser.addListener("endrule", function(event) {
            var selectors = event.selectors;
            if (count === 0) {
                reporter.report("Rule is empty.", selectors[0].line, selectors[0].col, rule);
            }
        });
    }

});

/*
 * Rule: There should be no syntax errors. (Duh.)
 */

CSSLint.addRule({

    // rule information
    id: "errors",
    name: "Parsing Errors",
    desc: "This rule looks for recoverable syntax errors.",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        parser.addListener("error", function(event) {
            reporter.error(event.message, event.line, event.col, rule);
        });

    }

});

CSSLint.addRule({

    // rule information
    id: "fallback-colors",
    name: "Require fallback colors",
    desc: "For older browsers that don't support RGBA, HSL, or HSLA, provide a fallback color.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-fallback-colors",
    browsers: "IE6,IE7,IE8",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            lastProperty,
            propertiesToCheck = {
                color: 1,
                background: 1,
                "border-color": 1,
                "border-top-color": 1,
                "border-right-color": 1,
                "border-bottom-color": 1,
                "border-left-color": 1,
                border: 1,
                "border-top": 1,
                "border-right": 1,
                "border-bottom": 1,
                "border-left": 1,
                "background-color": 1
            };

        function startRule() {
            lastProperty = null;
        }

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);
        parser.addListener("startpage", startRule);
        parser.addListener("startpagemargin", startRule);
        parser.addListener("startkeyframerule", startRule);
        parser.addListener("startviewport", startRule);

        parser.addListener("property", function(event) {
            var property = event.property,
                name = property.text.toLowerCase(),
                parts = event.value.parts,
                i = 0,
                colorType = "",
                len = parts.length;

            if (propertiesToCheck[name]) {
                while (i < len) {
                    if (parts[i].type === "color") {
                        if ("alpha" in parts[i] || "hue" in parts[i]) {

                            if (/([^\)]+)\(/.test(parts[i])) {
                                colorType = RegExp.$1.toUpperCase();
                            }

                            if (!lastProperty || (lastProperty.property.text.toLowerCase() !== name || lastProperty.colorType !== "compat")) {
                                reporter.report("Fallback " + name + " (hex or RGB) should precede " + colorType + " " + name + ".", event.line, event.col, rule);
                            }
                        } else {
                            event.colorType = "compat";
                        }
                    }

                    i++;
                }
            }

            lastProperty = event;
        });

    }

});

/*
 * Rule: You shouldn't use more than 10 floats. If you do, there's probably
 * room for some abstraction.
 */

CSSLint.addRule({

    // rule information
    id: "floats",
    name: "Disallow too many floats",
    desc: "This rule tests if the float property is used too many times",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-too-many-floats",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;
        var count = 0;

        // count how many times "float" is used
        parser.addListener("property", function(event) {
            if (event.property.text.toLowerCase() === "float" &&
                    event.value.text.toLowerCase() !== "none") {
                count++;
            }
        });

        // report the results
        parser.addListener("endstylesheet", function() {
            reporter.stat("floats", count);
            if (count >= 10) {
                reporter.rollupWarn("Too many floats (" + count + "), you're probably using them for layout. Consider using a grid system instead.", rule);
            }
        });
    }

});

/*
 * Rule: Avoid too many @font-face declarations in the same stylesheet.
 */

CSSLint.addRule({

    // rule information
    id: "font-faces",
    name: "Don't use too many web fonts",
    desc: "Too many different web fonts in the same stylesheet.",
    url: "https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-web-fonts",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            count = 0;


        parser.addListener("startfontface", function() {
            count++;
        });

        parser.addListener("endstylesheet", function() {
            if (count > 5) {
                reporter.rollupWarn("Too many @font-face declarations (" + count + ").", rule);
            }
        });
    }

});

/*
 * Rule: You shouldn't need more than 9 font-size declarations.
 */

CSSLint.addRule({

    // rule information
    id: "font-sizes",
    name: "Disallow too many font sizes",
    desc: "Checks the number of font-size declarations.",
    url: "https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-font-size-declarations",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            count = 0;

        // check for use of "font-size"
        parser.addListener("property", function(event) {
            if (event.property.toString() === "font-size") {
                count++;
            }
        });

        // report the results
        parser.addListener("endstylesheet", function() {
            reporter.stat("font-sizes", count);
            if (count >= 10) {
                reporter.rollupWarn("Too many font-size declarations (" + count + "), abstraction needed.", rule);
            }
        });
    }

});

/*
 * Rule: When using a vendor-prefixed gradient, make sure to use them all.
 */

CSSLint.addRule({

    // rule information
    id: "gradients",
    name: "Require all gradient definitions",
    desc: "When using a vendor-prefixed gradient, make sure to use them all.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-all-gradient-definitions",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            gradients;

        parser.addListener("startrule", function() {
            gradients = {
                moz: 0,
                webkit: 0,
                oldWebkit: 0,
                o: 0
            };
        });

        parser.addListener("property", function(event) {

            if (/\-(moz|o|webkit)(?:\-(?:linear|radial))\-gradient/i.test(event.value)) {
                gradients[RegExp.$1] = 1;
            } else if (/\-webkit\-gradient/i.test(event.value)) {
                gradients.oldWebkit = 1;
            }

        });

        parser.addListener("endrule", function(event) {
            var missing = [];

            if (!gradients.moz) {
                missing.push("Firefox 3.6+");
            }

            if (!gradients.webkit) {
                missing.push("Webkit (Safari 5+, Chrome)");
            }

            if (!gradients.oldWebkit) {
                missing.push("Old Webkit (Safari 4+, Chrome)");
            }

            if (!gradients.o) {
                missing.push("Opera 11.1+");
            }

            if (missing.length && missing.length < 4) {
                reporter.report("Missing vendor-prefixed CSS gradients for " + missing.join(", ") + ".", event.selectors[0].line, event.selectors[0].col, rule);
            }

        });

    }

});

/*
 * Rule: Don't use IDs for selectors.
 */

CSSLint.addRule({

    // rule information
    id: "ids",
    name: "Disallow IDs in selectors",
    desc: "Selectors should not contain IDs.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-IDs-in-selectors",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;
        parser.addListener("startrule", function(event) {
            var selectors = event.selectors,
                selector,
                part,
                modifier,
                idCount,
                i, j, k;

            for (i=0; i < selectors.length; i++) {
                selector = selectors[i];
                idCount = 0;

                for (j=0; j < selector.parts.length; j++) {
                    part = selector.parts[j];
                    if (part.type === parser.SELECTOR_PART_TYPE) {
                        for (k=0; k < part.modifiers.length; k++) {
                            modifier = part.modifiers[k];
                            if (modifier.type === "id") {
                                idCount++;
                            }
                        }
                    }
                }

                if (idCount === 1) {
                    reporter.report("Don't use IDs in selectors.", selector.line, selector.col, rule);
                } else if (idCount > 1) {
                    reporter.report(idCount + " IDs in the selector, really?", selector.line, selector.col, rule);
                }
            }

        });
    }

});

/*
 * Rule: IE6-9 supports up to 31 stylesheet import.
 * Reference:
 * http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/internet-explorer-stylesheet-rule-selector-import-sheet-limit-maximum.aspx
 */

CSSLint.addRule({

    // rule information
    id: "import-ie-limit",
    name: "@import limit on IE6-IE9",
    desc: "IE6-9 supports up to 31 @import per stylesheet",
    browsers: "IE6, IE7, IE8, IE9",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            MAX_IMPORT_COUNT = 31,
            count = 0;

        function startPage() {
            count = 0;
        }

        parser.addListener("startpage", startPage);

        parser.addListener("import", function() {
            count++;
        });

        parser.addListener("endstylesheet", function() {
            if (count > MAX_IMPORT_COUNT) {
                reporter.rollupError(
                    "Too many @import rules (" + count + "). IE6-9 supports up to 31 import per stylesheet.",
                    rule
                );
            }
        });
    }

});

/*
 * Rule: Don't use @import, use <link> instead.
 */

CSSLint.addRule({

    // rule information
    id: "import",
    name: "Disallow @import",
    desc: "Don't use @import, use <link> instead.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-%40import",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        parser.addListener("import", function(event) {
            reporter.report("@import prevents parallel downloads, use <link> instead.", event.line, event.col, rule);
        });

    }

});

/*
 * Rule: Make sure !important is not overused, this could lead to specificity
 * war. Display a warning on !important declarations, an error if it's
 * used more at least 10 times.
 */

CSSLint.addRule({

    // rule information
    id: "important",
    name: "Disallow !important",
    desc: "Be careful when using !important declaration",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-%21important",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            count = 0;

        // warn that important is used and increment the declaration counter
        parser.addListener("property", function(event) {
            if (event.important === true) {
                count++;
                reporter.report("Use of !important", event.line, event.col, rule);
            }
        });

        // if there are more than 10, show an error
        parser.addListener("endstylesheet", function() {
            reporter.stat("important", count);
            if (count >= 10) {
                reporter.rollupWarn("Too many !important declarations (" + count + "), try to use less than 10 to avoid specificity issues.", rule);
            }
        });
    }

});

/*
 * Rule: Properties should be known (listed in CSS3 specification) or
 * be a vendor-prefixed property.
 */

CSSLint.addRule({

    // rule information
    id: "known-properties",
    name: "Require use of known properties",
    desc: "Properties should be known (listed in CSS3 specification) or be a vendor-prefixed property.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-use-of-known-properties",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        parser.addListener("property", function(event) {

            // the check is handled entirely by the parser-lib (https://github.com/nzakas/parser-lib)
            if (event.invalid) {
                reporter.report(event.invalid.message, event.line, event.col, rule);
            }

        });
    }

});

/*
 * Rule: All properties should be in alphabetical order.
 */

CSSLint.addRule({

    // rule information
    id: "order-alphabetical",
    name: "Alphabetical order",
    desc: "Assure properties are in alphabetical order",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            properties;

        var startRule = function () {
            properties = [];
        };

        var endRule = function(event) {
            var currentProperties = properties.join(","),
                expectedProperties = properties.sort().join(",");

            if (currentProperties !== expectedProperties) {
                reporter.report("Rule doesn't have all its properties in alphabetical order.", event.line, event.col, rule);
            }
        };

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);
        parser.addListener("startpage", startRule);
        parser.addListener("startpagemargin", startRule);
        parser.addListener("startkeyframerule", startRule);
        parser.addListener("startviewport", startRule);

        parser.addListener("property", function(event) {
            var name = event.property.text,
                lowerCasePrefixLessName = name.toLowerCase().replace(/^-.*?-/, "");

            properties.push(lowerCasePrefixLessName);
        });

        parser.addListener("endrule", endRule);
        parser.addListener("endfontface", endRule);
        parser.addListener("endpage", endRule);
        parser.addListener("endpagemargin", endRule);
        parser.addListener("endkeyframerule", endRule);
        parser.addListener("endviewport", endRule);
    }

});

/*
 * Rule: outline: none or outline: 0 should only be used in a :focus rule
 *       and only if there are other properties in the same rule.
 */

CSSLint.addRule({

    // rule information
    id: "outline-none",
    name: "Disallow outline: none",
    desc: "Use of outline: none or outline: 0 should be limited to :focus rules.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-outline%3Anone",
    browsers: "All",
    tags: ["Accessibility"],

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            lastRule;

        function startRule(event) {
            if (event.selectors) {
                lastRule = {
                    line: event.line,
                    col: event.col,
                    selectors: event.selectors,
                    propCount: 0,
                    outline: false
                };
            } else {
                lastRule = null;
            }
        }

        function endRule() {
            if (lastRule) {
                if (lastRule.outline) {
                    if (lastRule.selectors.toString().toLowerCase().indexOf(":focus") === -1) {
                        reporter.report("Outlines should only be modified using :focus.", lastRule.line, lastRule.col, rule);
                    } else if (lastRule.propCount === 1) {
                        reporter.report("Outlines shouldn't be hidden unless other visual changes are made.", lastRule.line, lastRule.col, rule);
                    }
                }
            }
        }

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);
        parser.addListener("startpage", startRule);
        parser.addListener("startpagemargin", startRule);
        parser.addListener("startkeyframerule", startRule);
        parser.addListener("startviewport", startRule);

        parser.addListener("property", function(event) {
            var name = event.property.text.toLowerCase(),
                value = event.value;

            if (lastRule) {
                lastRule.propCount++;
                if (name === "outline" && (value.toString() === "none" || value.toString() === "0")) {
                    lastRule.outline = true;
                }
            }

        });

        parser.addListener("endrule", endRule);
        parser.addListener("endfontface", endRule);
        parser.addListener("endpage", endRule);
        parser.addListener("endpagemargin", endRule);
        parser.addListener("endkeyframerule", endRule);
        parser.addListener("endviewport", endRule);

    }

});

/*
 * Rule: Don't use classes or IDs with elements (a.foo or a#foo).
 */

CSSLint.addRule({

    // rule information
    id: "overqualified-elements",
    name: "Disallow overqualified elements",
    desc: "Don't use classes or IDs with elements (a.foo or a#foo).",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-overqualified-elements",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            classes = {};

        parser.addListener("startrule", function(event) {
            var selectors = event.selectors,
                selector,
                part,
                modifier,
                i, j, k;

            for (i=0; i < selectors.length; i++) {
                selector = selectors[i];

                for (j=0; j < selector.parts.length; j++) {
                    part = selector.parts[j];
                    if (part.type === parser.SELECTOR_PART_TYPE) {
                        for (k=0; k < part.modifiers.length; k++) {
                            modifier = part.modifiers[k];
                            if (part.elementName && modifier.type === "id") {
                                reporter.report("Element (" + part + ") is overqualified, just use " + modifier + " without element name.", part.line, part.col, rule);
                            } else if (modifier.type === "class") {

                                if (!classes[modifier]) {
                                    classes[modifier] = [];
                                }
                                classes[modifier].push({
                                    modifier: modifier,
                                    part: part
                                });
                            }
                        }
                    }
                }
            }
        });

        parser.addListener("endstylesheet", function() {

            var prop;
            for (prop in classes) {
                if (classes.hasOwnProperty(prop)) {

                    // one use means that this is overqualified
                    if (classes[prop].length === 1 && classes[prop][0].part.elementName) {
                        reporter.report("Element (" + classes[prop][0].part + ") is overqualified, just use " + classes[prop][0].modifier + " without element name.", classes[prop][0].part.line, classes[prop][0].part.col, rule);
                    }
                }
            }
        });
    }

});

CSSLint.addRule({
  id: "performant-transitions",
  name: "Allow only performant transisitons",
  desc: "Only allow transitions that trigger compositing for performant, 60fps transformations.",
  url: "",
  browsers: "All",

  init: function(parser, reporter){
    "use strict";
    var rule = this;

    var transitionProperties = ["transition-property", "transition", "-webkit-transition", "-o-transition"];
    var allowedTransitions = [/-webkit-transform/g, /-ms-transform/g, /transform/g, /opacity/g];

    parser.addListener("property", function(event) {
      var propertyName    = event.property.toString().toLowerCase(),
          propertyValue           = event.value.toString(),
          line            = event.line,
          col             = event.col;

      var values = propertyValue.split(",");
      if (transitionProperties.indexOf(propertyName) !== -1) {
        var reportValues = values.filter(function(value) {
          var didMatch = [];
          for (var i = 0; i < allowedTransitions.length; i++) {
            if(value.match(allowedTransitions[i])) {
              didMatch.push(i);
            }
          }
          return didMatch.length === 0;
        });
        if(reportValues.length > 0) {
            reporter.report("Unexpected transition property '"+reportValues.join(",").trim()+"'", line, col, rule);
        }
      }
    });
  }
});

/*
 * Rule: Headings (h1-h6) should not be qualified (namespaced).
 */

CSSLint.addRule({

    // rule information
    id: "qualified-headings",
    name: "Disallow qualified headings",
    desc: "Headings should not be qualified (namespaced).",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-qualified-headings",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        parser.addListener("startrule", function(event) {
            var selectors = event.selectors,
                selector,
                part,
                i, j;

            for (i=0; i < selectors.length; i++) {
                selector = selectors[i];

                for (j=0; j < selector.parts.length; j++) {
                    part = selector.parts[j];
                    if (part.type === parser.SELECTOR_PART_TYPE) {
                        if (part.elementName && /h[1-6]/.test(part.elementName.toString()) && j > 0) {
                            reporter.report("Heading (" + part.elementName + ") should not be qualified.", part.line, part.col, rule);
                        }
                    }
                }
            }
        });
    }

});

/*
 * Rule: Selectors that look like regular expressions are slow and should be avoided.
 */

CSSLint.addRule({

    // rule information
    id: "regex-selectors",
    name: "Disallow selectors that look like regexs",
    desc: "Selectors that look like regular expressions are slow and should be avoided.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-selectors-that-look-like-regular-expressions",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        parser.addListener("startrule", function(event) {
            var selectors = event.selectors,
                selector,
                part,
                modifier,
                i, j, k;

            for (i=0; i < selectors.length; i++) {
                selector = selectors[i];
                for (j=0; j < selector.parts.length; j++) {
                    part = selector.parts[j];
                    if (part.type === parser.SELECTOR_PART_TYPE) {
                        for (k=0; k < part.modifiers.length; k++) {
                            modifier = part.modifiers[k];
                            if (modifier.type === "attribute") {
                                if (/([~\|\^\$\*]=)/.test(modifier)) {
                                    reporter.report("Attribute selectors with " + RegExp.$1 + " are slow!", modifier.line, modifier.col, rule);
                                }
                            }

                        }
                    }
                }
            }
        });
    }

});

/*
 * Rule: Total number of rules should not exceed x.
 */

CSSLint.addRule({

    // rule information
    id: "rules-count",
    name: "Rules Count",
    desc: "Track how many rules there are.",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var count = 0;

        // count each rule
        parser.addListener("startrule", function() {
            count++;
        });

        parser.addListener("endstylesheet", function() {
            reporter.stat("rule-count", count);
        });
    }

});

/*
 * Rule: Warn people with approaching the IE 4095 limit
 */

CSSLint.addRule({

    // rule information
    id: "selector-max-approaching",
    name: "Warn when approaching the 4095 selector limit for IE",
    desc: "Will warn when selector count is >= 3800 selectors.",
    browsers: "IE",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this, count = 0;

        parser.addListener("startrule", function(event) {
            count += event.selectors.length;
        });

        parser.addListener("endstylesheet", function() {
            if (count >= 3800) {
                reporter.report("You have " + count + " selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.", 0, 0, rule);
            }
        });
    }

});

/*
 * Rule: Warn people past the IE 4095 limit
 */

CSSLint.addRule({

    // rule information
    id: "selector-max",
    name: "Error when past the 4095 selector limit for IE",
    desc: "Will error when selector count is > 4095.",
    browsers: "IE",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this, count = 0;

        parser.addListener("startrule", function(event) {
            count += event.selectors.length;
        });

        parser.addListener("endstylesheet", function() {
            if (count > 4095) {
                reporter.report("You have " + count + " selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.", 0, 0, rule);
            }
        });
    }

});

/*
 * Rule: Avoid new-line characters in selectors.
 */

CSSLint.addRule({

    // rule information
    id: "selector-newline",
    name: "Disallow new-line characters in selectors",
    desc: "New-line characters in selectors are usually a forgotten comma and not a descendant combinator.",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        function startRule(event) {
            var i, len, selector, p, n, pLen, part, part2, type, currentLine, nextLine,
                selectors = event.selectors;

            for (i = 0, len = selectors.length; i < len; i++) {
                selector = selectors[i];
                for (p = 0, pLen = selector.parts.length; p < pLen; p++) {
                    for (n = p + 1; n < pLen; n++) {
                        part = selector.parts[p];
                        part2 = selector.parts[n];
                        type = part.type;
                        currentLine = part.line;
                        nextLine = part2.line;

                        if (type === "descendant" && nextLine > currentLine) {
                            reporter.report("newline character found in selector (forgot a comma?)", currentLine, selectors[i].parts[0].col, rule);
                        }
                    }
                }

            }
        }

        parser.addListener("startrule", startRule);

    }
});

/*
 * Rule: Use shorthand properties where possible.
 *
 */

CSSLint.addRule({

    // rule information
    id: "shorthand",
    name: "Require shorthand properties",
    desc: "Use shorthand properties where possible.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-shorthand-properties",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            prop, i, len,
            propertiesToCheck = {},
            properties,
            mapping = {
                "margin": [
                    "margin-top",
                    "margin-bottom",
                    "margin-left",
                    "margin-right"
                ],
                "padding": [
                    "padding-top",
                    "padding-bottom",
                    "padding-left",
                    "padding-right"
                ]
            };

        // initialize propertiesToCheck
        for (prop in mapping) {
            if (mapping.hasOwnProperty(prop)) {
                for (i=0, len=mapping[prop].length; i < len; i++) {
                    propertiesToCheck[mapping[prop][i]] = prop;
                }
            }
        }

        function startRule() {
            properties = {};
        }

        // event handler for end of rules
        function endRule(event) {

            var prop, i, len, total;

            // check which properties this rule has
            for (prop in mapping) {
                if (mapping.hasOwnProperty(prop)) {
                    total=0;

                    for (i=0, len=mapping[prop].length; i < len; i++) {
                        total += properties[mapping[prop][i]] ? 1 : 0;
                    }

                    if (total === mapping[prop].length) {
                        reporter.report("The properties " + mapping[prop].join(", ") + " can be replaced by " + prop + ".", event.line, event.col, rule);
                    }
                }
            }
        }

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);

        // check for use of "font-size"
        parser.addListener("property", function(event) {
            var name = event.property.toString().toLowerCase();

            if (propertiesToCheck[name]) {
                properties[name] = 1;
            }
        });

        parser.addListener("endrule", endRule);
        parser.addListener("endfontface", endRule);

    }

});

/*
 * Rule: Don't use properties with a star prefix.
 *
 */

CSSLint.addRule({

    // rule information
    id: "star-property-hack",
    name: "Disallow properties with a star prefix",
    desc: "Checks for the star property hack (targets IE6/7)",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-star-hack",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        // check if property name starts with "*"
        parser.addListener("property", function(event) {
            var property = event.property;

            if (property.hack === "*") {
                reporter.report("Property with star prefix found.", event.property.line, event.property.col, rule);
            }
        });
    }
});

/*
 * Rule: Don't use text-indent for image replacement if you need to support rtl.
 *
 */

CSSLint.addRule({

    // rule information
    id: "text-indent",
    name: "Disallow negative text-indent",
    desc: "Checks for text indent less than -99px",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-negative-text-indent",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            textIndent,
            direction;


        function startRule() {
            textIndent = false;
            direction = "inherit";
        }

        // event handler for end of rules
        function endRule() {
            if (textIndent && direction !== "ltr") {
                reporter.report("Negative text-indent doesn't work well with RTL. If you use text-indent for image replacement explicitly set direction for that item to ltr.", textIndent.line, textIndent.col, rule);
            }
        }

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);

        // check for use of "font-size"
        parser.addListener("property", function(event) {
            var name = event.property.toString().toLowerCase(),
                value = event.value;

            if (name === "text-indent" && value.parts[0].value < -99) {
                textIndent = event.property;
            } else if (name === "direction" && value.toString() === "ltr") {
                direction = "ltr";
            }
        });

        parser.addListener("endrule", endRule);
        parser.addListener("endfontface", endRule);

    }

});

/*
 * Rule: Don't use properties with a underscore prefix.
 *
 */

CSSLint.addRule({

    // rule information
    id: "underscore-property-hack",
    name: "Disallow properties with an underscore prefix",
    desc: "Checks for the underscore property hack (targets IE6)",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-underscore-hack",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        // check if property name starts with "_"
        parser.addListener("property", function(event) {
            var property = event.property;

            if (property.hack === "_") {
                reporter.report("Property with underscore prefix found.", event.property.line, event.property.col, rule);
            }
        });
    }
});

/*
 * Rule: Headings (h1-h6) should be defined only once.
 */

CSSLint.addRule({

    // rule information
    id: "unique-headings",
    name: "Headings should only be defined once",
    desc: "Headings should be defined only once.",
    url: "https://github.com/CSSLint/csslint/wiki/Headings-should-only-be-defined-once",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        var headings = {
            h1: 0,
            h2: 0,
            h3: 0,
            h4: 0,
            h5: 0,
            h6: 0
        };

        parser.addListener("startrule", function(event) {
            var selectors = event.selectors,
                selector,
                part,
                pseudo,
                i, j;

            for (i=0; i < selectors.length; i++) {
                selector = selectors[i];
                part = selector.parts[selector.parts.length-1];

                if (part.elementName && /(h[1-6])/i.test(part.elementName.toString())) {

                    for (j=0; j < part.modifiers.length; j++) {
                        if (part.modifiers[j].type === "pseudo") {
                            pseudo = true;
                            break;
                        }
                    }

                    if (!pseudo) {
                        headings[RegExp.$1]++;
                        if (headings[RegExp.$1] > 1) {
                            reporter.report("Heading (" + part.elementName + ") has already been defined.", part.line, part.col, rule);
                        }
                    }
                }
            }
        });

        parser.addListener("endstylesheet", function() {
            var prop,
                messages = [];

            for (prop in headings) {
                if (headings.hasOwnProperty(prop)) {
                    if (headings[prop] > 1) {
                        messages.push(headings[prop] + " " + prop + "s");
                    }
                }
            }

            if (messages.length) {
                reporter.rollupWarn("You have " + messages.join(", ") + " defined in this stylesheet.", rule);
            }
        });
    }

});

/*
 * Rule: Don't use universal selector because it's slow.
 */

CSSLint.addRule({

    // rule information
    id: "universal-selector",
    name: "Disallow universal selector",
    desc: "The universal selector (*) is known to be slow.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-universal-selector",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        parser.addListener("startrule", function(event) {
            var selectors = event.selectors,
                selector,
                part,
                i;

            for (i=0; i < selectors.length; i++) {
                selector = selectors[i];

                part = selector.parts[selector.parts.length-1];
                if (part.elementName === "*") {
                    reporter.report(rule.desc, part.line, part.col, rule);
                }
            }
        });
    }

});

/*
 * Rule: Don't use unqualified attribute selectors because they're just like universal selectors.
 */

CSSLint.addRule({

    // rule information
    id: "unqualified-attributes",
    name: "Disallow unqualified attribute selectors",
    desc: "Unqualified attribute selectors are known to be slow.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";

        var rule = this;

        parser.addListener("startrule", function(event) {

            var selectors = event.selectors,
                selectorContainsClassOrId = false,
                selector,
                part,
                modifier,
                i, k;

            for (i=0; i < selectors.length; i++) {
                selector = selectors[i];

                part = selector.parts[selector.parts.length-1];
                if (part.type === parser.SELECTOR_PART_TYPE) {
                    for (k=0; k < part.modifiers.length; k++) {
                        modifier = part.modifiers[k];

                        if (modifier.type === "class" || modifier.type === "id") {
                            selectorContainsClassOrId = true;
                            break;
                        }
                    }

                    if (!selectorContainsClassOrId) {
                        for (k=0; k < part.modifiers.length; k++) {
                            modifier = part.modifiers[k];
                            if (modifier.type === "attribute" && (!part.elementName || part.elementName === "*")) {
                                reporter.report(rule.desc, part.line, part.col, rule);
                            }
                        }
                    }
                }

            }
        });
    }

});

/*
 * Rule: When using a vendor-prefixed property, make sure to
 * include the standard one.
 */

CSSLint.addRule({

    // rule information
    id: "vendor-prefix",
    name: "Require standard property with vendor prefix",
    desc: "When using a vendor-prefixed property, make sure to include the standard one.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-standard-property-with-vendor-prefix",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this,
            properties,
            num,
            propertiesToCheck = {
                "-webkit-border-radius": "border-radius",
                "-webkit-border-top-left-radius": "border-top-left-radius",
                "-webkit-border-top-right-radius": "border-top-right-radius",
                "-webkit-border-bottom-left-radius": "border-bottom-left-radius",
                "-webkit-border-bottom-right-radius": "border-bottom-right-radius",

                "-o-border-radius": "border-radius",
                "-o-border-top-left-radius": "border-top-left-radius",
                "-o-border-top-right-radius": "border-top-right-radius",
                "-o-border-bottom-left-radius": "border-bottom-left-radius",
                "-o-border-bottom-right-radius": "border-bottom-right-radius",

                "-moz-border-radius": "border-radius",
                "-moz-border-radius-topleft": "border-top-left-radius",
                "-moz-border-radius-topright": "border-top-right-radius",
                "-moz-border-radius-bottomleft": "border-bottom-left-radius",
                "-moz-border-radius-bottomright": "border-bottom-right-radius",

                "-moz-column-count": "column-count",
                "-webkit-column-count": "column-count",

                "-moz-column-gap": "column-gap",
                "-webkit-column-gap": "column-gap",

                "-moz-column-rule": "column-rule",
                "-webkit-column-rule": "column-rule",

                "-moz-column-rule-style": "column-rule-style",
                "-webkit-column-rule-style": "column-rule-style",

                "-moz-column-rule-color": "column-rule-color",
                "-webkit-column-rule-color": "column-rule-color",

                "-moz-column-rule-width": "column-rule-width",
                "-webkit-column-rule-width": "column-rule-width",

                "-moz-column-width": "column-width",
                "-webkit-column-width": "column-width",

                "-webkit-column-span": "column-span",
                "-webkit-columns": "columns",

                "-moz-box-shadow": "box-shadow",
                "-webkit-box-shadow": "box-shadow",

                "-moz-transform": "transform",
                "-webkit-transform": "transform",
                "-o-transform": "transform",
                "-ms-transform": "transform",

                "-moz-transform-origin": "transform-origin",
                "-webkit-transform-origin": "transform-origin",
                "-o-transform-origin": "transform-origin",
                "-ms-transform-origin": "transform-origin",

                "-moz-box-sizing": "box-sizing",
                "-webkit-box-sizing": "box-sizing"
            };

        // event handler for beginning of rules
        function startRule() {
            properties = {};
            num = 1;
        }

        // event handler for end of rules
        function endRule() {
            var prop,
                i,
                len,
                needed,
                actual,
                needsStandard = [];

            for (prop in properties) {
                if (propertiesToCheck[prop]) {
                    needsStandard.push({
                        actual: prop,
                        needed: propertiesToCheck[prop]
                    });
                }
            }

            for (i=0, len=needsStandard.length; i < len; i++) {
                needed = needsStandard[i].needed;
                actual = needsStandard[i].actual;

                if (!properties[needed]) {
                    reporter.report("Missing standard property '" + needed + "' to go along with '" + actual + "'.", properties[actual][0].name.line, properties[actual][0].name.col, rule);
                } else {
                    // make sure standard property is last
                    if (properties[needed][0].pos < properties[actual][0].pos) {
                        reporter.report("Standard property '" + needed + "' should come after vendor-prefixed property '" + actual + "'.", properties[actual][0].name.line, properties[actual][0].name.col, rule);
                    }
                }
            }

        }

        parser.addListener("startrule", startRule);
        parser.addListener("startfontface", startRule);
        parser.addListener("startpage", startRule);
        parser.addListener("startpagemargin", startRule);
        parser.addListener("startkeyframerule", startRule);
        parser.addListener("startviewport", startRule);

        parser.addListener("property", function(event) {
            var name = event.property.text.toLowerCase();

            if (!properties[name]) {
                properties[name] = [];
            }

            properties[name].push({
                name: event.property,
                value: event.value,
                pos: num++
            });
        });

        parser.addListener("endrule", endRule);
        parser.addListener("endfontface", endRule);
        parser.addListener("endpage", endRule);
        parser.addListener("endpagemargin", endRule);
        parser.addListener("endkeyframerule", endRule);
        parser.addListener("endviewport", endRule);
    }

});

/*
 * Rule: You don't need to specify units when a value is 0.
 */

CSSLint.addRule({

    // rule information
    id: "zero-units",
    name: "Disallow units for 0 values",
    desc: "You don't need to specify units when a value is 0.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-units-for-zero-values",
    browsers: "All",

    // initialization
    init: function(parser, reporter) {
        "use strict";
        var rule = this;

        // count how many times "float" is used
        parser.addListener("property", function(event) {
            var parts = event.value.parts,
                i = 0,
                len = parts.length;

            while (i < len) {
                if ((parts[i].units || parts[i].type === "percentage") && parts[i].value === 0 && parts[i].type !== "time") {
                    reporter.report("Values of 0 shouldn't have units specified.", parts[i].line, parts[i].col, rule);
                }
                i++;
            }

        });

    }

});

(function() {
    "use strict";

    /**
     * Replace special characters before write to output.
     *
     * Rules:
     *  - single quotes is the escape sequence for double-quotes
     *  - &amp; is the escape sequence for &
     *  - &lt; is the escape sequence for <
     *  - &gt; is the escape sequence for >
     *
     * @param {String} message to escape
     * @return escaped message as {String}
     */
    var xmlEscape = function(str) {
        if (!str || str.constructor !== String) {
            return "";
        }

        return str.replace(/["&><]/g, function(match) {
            switch (match) {
                case "\"":
                    return "&quot;";
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
            }
        });
    };

    CSSLint.addFormatter({
        // format information
        id: "checkstyle-xml",
        name: "Checkstyle XML format",

        /**
         * Return opening root XML tag.
         * @return {String} to prepend before all results
         */
        startFormat: function() {
            return "<?xml version=\"1.0\" encoding=\"utf-8\"?><checkstyle>";
        },

        /**
         * Return closing root XML tag.
         * @return {String} to append after all results
         */
        endFormat: function() {
            return "</checkstyle>";
        },

        /**
         * Returns message when there is a file read error.
         * @param {String} filename The name of the file that caused the error.
         * @param {String} message The error message
         * @return {String} The error message.
         */
        readError: function(filename, message) {
            return "<file name=\"" + xmlEscape(filename) + "\"><error line=\"0\" column=\"0\" severty=\"error\" message=\"" + xmlEscape(message) + "\"></error></file>";
        },

        /**
         * Given CSS Lint results for a file, return output for this format.
         * @param results {Object} with error and warning messages
         * @param filename {String} relative file path
         * @param options {Object} (UNUSED for now) specifies special handling of output
         * @return {String} output for results
         */
        formatResults: function(results, filename/*, options*/) {
            var messages = results.messages,
                output = [];

            /**
             * Generate a source string for a rule.
             * Checkstyle source strings usually resemble Java class names e.g
             * net.csslint.SomeRuleName
             * @param {Object} rule
             * @return rule source as {String}
             */
            var generateSource = function(rule) {
                if (!rule || !("name" in rule)) {
                    return "";
                }
                return "net.csslint." + rule.name.replace(/\s/g, "");
            };


            if (messages.length > 0) {
                output.push("<file name=\""+filename+"\">");
                CSSLint.Util.forEach(messages, function (message) {
                    // ignore rollups for now
                    if (!message.rollup) {
                        output.push("<error line=\"" + message.line + "\" column=\"" + message.col + "\" severity=\"" + message.type + "\"" +
                          " message=\"" + xmlEscape(message.message) + "\" source=\"" + generateSource(message.rule) +"\"/>");
                    }
                });
                output.push("</file>");
            }

            return output.join("");
        }
    });

}());

CSSLint.addFormatter({
    // format information
    id: "compact",
    name: "Compact, 'porcelain' format",

    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function() {
        "use strict";
        return "";
    },

    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function() {
        "use strict";
        return "";
    },

    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (Optional) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function(results, filename, options) {
        "use strict";
        var messages = results.messages,
            output = "";
        options = options || {};

        /**
         * Capitalize and return given string.
         * @param str {String} to capitalize
         * @return {String} capitalized
         */
        var capitalize = function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        };

        if (messages.length === 0) {
            return options.quiet ? "" : filename + ": Lint Free!";
        }

        CSSLint.Util.forEach(messages, function(message) {
            if (message.rollup) {
                output += filename + ": " + capitalize(message.type) + " - " + message.message + " (" + message.rule.id + ")\n";
            } else {
                output += filename + ": line " + message.line +
                    ", col " + message.col + ", " + capitalize(message.type) + " - " + message.message + " (" + message.rule.id + ")\n";
            }
        });

        return output;
    }
});

CSSLint.addFormatter({
    // format information
    id: "csslint-xml",
    name: "CSSLint XML format",

    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function() {
        "use strict";
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?><csslint>";
    },

    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function() {
        "use strict";
        return "</csslint>";
    },

    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function(results, filename/*, options*/) {
        "use strict";
        var messages = results.messages,
            output = [];

        /**
         * Replace special characters before write to output.
         *
         * Rules:
         *  - single quotes is the escape sequence for double-quotes
         *  - &amp; is the escape sequence for &
         *  - &lt; is the escape sequence for <
         *  - &gt; is the escape sequence for >
         *
         * @param {String} message to escape
         * @return escaped message as {String}
         */
        var escapeSpecialCharacters = function(str) {
            if (!str || str.constructor !== String) {
                return "";
            }
            return str.replace(/"/g, "'").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };

        if (messages.length > 0) {
            output.push("<file name=\""+filename+"\">");
            CSSLint.Util.forEach(messages, function (message) {
                if (message.rollup) {
                    output.push("<issue severity=\"" + message.type + "\" reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
                } else {
                    output.push("<issue line=\"" + message.line + "\" char=\"" + message.col + "\" severity=\"" + message.type + "\"" +
                        " reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
                }
            });
            output.push("</file>");
        }

        return output.join("");
    }
});

/* globals JSON: true */

CSSLint.addFormatter({
    // format information
    id: "json",
    name: "JSON",

    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function() {
        "use strict";
        this.json = [];
        return "";
    },

    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function() {
        "use strict";
        var ret = "";
        if (this.json.length > 0) {
            if (this.json.length === 1) {
                ret = JSON.stringify(this.json[0]);
            } else {
                ret = JSON.stringify(this.json);
            }
        }
        return ret;
    },

    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path (Unused)
     * @return {String} output for results
     */
    formatResults: function(results, filename, options) {
        "use strict";
        if (results.messages.length > 0 || !options.quiet) {
            this.json.push({
                filename: filename,
                messages: results.messages,
                stats: results.stats
            });
        }
        return "";
    }
});

CSSLint.addFormatter({
    // format information
    id: "junit-xml",
    name: "JUNIT XML format",

    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function() {
        "use strict";
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?><testsuites>";
    },

    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function() {
        "use strict";
        return "</testsuites>";
    },

    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function(results, filename/*, options*/) {
        "use strict";

        var messages = results.messages,
            output = [],
            tests = {
                "error": 0,
                "failure": 0
            };

        /**
         * Generate a source string for a rule.
         * JUNIT source strings usually resemble Java class names e.g
         * net.csslint.SomeRuleName
         * @param {Object} rule
         * @return rule source as {String}
         */
        var generateSource = function(rule) {
            if (!rule || !("name" in rule)) {
                return "";
            }
            return "net.csslint." + rule.name.replace(/\s/g, "");
        };

        /**
         * Replace special characters before write to output.
         *
         * Rules:
         *  - single quotes is the escape sequence for double-quotes
         *  - &lt; is the escape sequence for <
         *  - &gt; is the escape sequence for >
         *
         * @param {String} message to escape
         * @return escaped message as {String}
         */
        var escapeSpecialCharacters = function(str) {

            if (!str || str.constructor !== String) {
                return "";
            }

            return str.replace(/"/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        };

        if (messages.length > 0) {

            messages.forEach(function (message) {

                // since junit has no warning class
                // all issues as errors
                var type = message.type === "warning" ? "error" : message.type;

                // ignore rollups for now
                if (!message.rollup) {

                    // build the test case separately, once joined
                    // we'll add it to a custom array filtered by type
                    output.push("<testcase time=\"0\" name=\"" + generateSource(message.rule) + "\">");
                    output.push("<" + type + " message=\"" + escapeSpecialCharacters(message.message) + "\"><![CDATA[" + message.line + ":" + message.col + ":" + escapeSpecialCharacters(message.evidence) + "]]></" + type + ">");
                    output.push("</testcase>");

                    tests[type] += 1;

                }

            });

            output.unshift("<testsuite time=\"0\" tests=\"" + messages.length + "\" skipped=\"0\" errors=\"" + tests.error + "\" failures=\"" + tests.failure + "\" package=\"net.csslint\" name=\"" + filename + "\">");
            output.push("</testsuite>");

        }

        return output.join("");

    }
});

CSSLint.addFormatter({
    // format information
    id: "lint-xml",
    name: "Lint XML format",

    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function() {
        "use strict";
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?><lint>";
    },

    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function() {
        "use strict";
        return "</lint>";
    },

    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function(results, filename/*, options*/) {
        "use strict";
        var messages = results.messages,
            output = [];

        /**
         * Replace special characters before write to output.
         *
         * Rules:
         *  - single quotes is the escape sequence for double-quotes
         *  - &amp; is the escape sequence for &
         *  - &lt; is the escape sequence for <
         *  - &gt; is the escape sequence for >
         *
         * @param {String} message to escape
         * @return escaped message as {String}
         */
        var escapeSpecialCharacters = function(str) {
            if (!str || str.constructor !== String) {
                return "";
            }
            return str.replace(/"/g, "'").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        };

        if (messages.length > 0) {

            output.push("<file name=\""+filename+"\">");
            CSSLint.Util.forEach(messages, function (message) {
                if (message.rollup) {
                    output.push("<issue severity=\"" + message.type + "\" reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
                } else {
                    var rule = "";
                    if (message.rule && message.rule.id) {
                        rule = "rule=\"" + escapeSpecialCharacters(message.rule.id) + "\" ";
                    }
                    output.push("<issue " + rule + "line=\"" + message.line + "\" char=\"" + message.col + "\" severity=\"" + message.type + "\"" +
                        " reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
                }
            });
            output.push("</file>");
        }

        return output.join("");
    }
});

CSSLint.addFormatter({
    // format information
    id: "text",
    name: "Plain Text",

    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function() {
        "use strict";
        return "";
    },

    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function() {
        "use strict";
        return "";
    },

    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (Optional) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function(results, filename, options) {
        "use strict";
        var messages = results.messages,
            output = "";
        options = options || {};

        if (messages.length === 0) {
            return options.quiet ? "" : "\n\ncsslint: No errors in " + filename + ".";
        }

        output = "\n\ncsslint: There ";
        if (messages.length === 1) {
            output += "is 1 problem";
        } else {
            output += "are " + messages.length + " problems";
        }
        output += " in " + filename + ".";

        var pos = filename.lastIndexOf("/"),
            shortFilename = filename;

        if (pos === -1) {
            pos = filename.lastIndexOf("\\");
        }
        if (pos > -1) {
            shortFilename = filename.substring(pos+1);
        }

        CSSLint.Util.forEach(messages, function (message, i) {
            output = output + "\n\n" + shortFilename;
            if (message.rollup) {
                output += "\n" + (i+1) + ": " + message.type;
                output += "\n" + message.message;
            } else {
                output += "\n" + (i+1) + ": " + message.type + " at line " + message.line + ", col " + message.col;
                output += "\n" + message.message;
                output += "\n" + message.evidence;
            }
        });

        return output;
    }
});

return CSSLint;
})();
/*****/
require=function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n||e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";function r(e){return"FunctionExpression"===e.type||"FunctionDeclaration"===e.type||"ArrowFunctionExpression"===e.type||"Program"===e.type}function i(e){return"BlockStatement"===e.type||r(e)}function o(e){return"FunctionExpression"===e.type||"FunctionDeclaration"===e.type}function s(e){return"FunctionExpression"===e.type||"FunctionDeclaration"===e.type}function a(e){return u.parse(e,{allowReturnOutsideFunction:!0,allowImportExportEverywhere:!0,allowHashBang:!0})}var u=e("acorn"),c=e("acorn/dist/walk");t.exports=function(e){function t(e,t){var n=e.name;if("undefined"!==n){for(var r=0;r<t.length;r++){if("arguments"===n&&o(t[r]))return;if(t[r].locals&&n in t[r].locals)return}e.parents=t,u.push(e)}}var n,u=[];if(!(n="string"==typeof e?a(e):e)||"object"!=typeof n||"Program"!==n.type)throw new TypeError("Source must be either a string of JavaScript or an acorn AST");var l=function(e){var t=e;t.locals=t.locals||{},e.params.forEach(function(e){p(e,t)}),e.id&&(t.locals[e.id.name]=!0)},p=function(e,t){switch(e.type){case"Identifier":t.locals[e.name]=!0;break;case"ObjectPattern":e.properties.forEach(function(e){p(e.value,t)});break;case"ArrayPattern":e.elements.forEach(function(e){e&&p(e,t)});break;case"RestElement":p(e.argument,t);break;case"AssignmentPattern":p(e.left,t);break;default:throw new Error("Unrecognized pattern type: "+e.type)}},h=function(e,t){n.locals=n.locals||{},n.locals[e.local.name]=!0};c.ancestor(n,{VariableDeclaration:function(e,t){for(var n=null,o=t.length-1;o>=0&&null===n;o--)("var"===e.kind?r(t[o]):i(t[o]))&&(n=t[o]);n.locals=n.locals||{},e.declarations.forEach(function(e){p(e.id,n)})},FunctionDeclaration:function(e,t){for(var n=null,i=t.length-2;i>=0&&null===n;i--)r(t[i])&&(n=t[i]);n.locals=n.locals||{},n.locals[e.id.name]=!0,l(e)},Function:l,ClassDeclaration:function(e,t){for(var n=null,i=t.length-2;i>=0&&null===n;i--)r(t[i])&&(n=t[i]);n.locals=n.locals||{},n.locals[e.id.name]=!0},TryStatement:function(e){null!==e.handler&&(e.handler.locals=e.handler.locals||{},e.handler.locals[e.handler.param.name]=!0)},ImportDefaultSpecifier:h,ImportSpecifier:h,ImportNamespaceSpecifier:h}),c.ancestor(n,{VariablePattern:t,Identifier:t,ThisExpression:function(e,t){for(var n=0;n<t.length;n++)if(s(t[n]))return;e.parents=t,u.push(e)}});var f={};return u.forEach(function(e){var t="ThisExpression"===e.type?"this":e.name;f[t]=f[t]||[],f[t].push(e)}),Object.keys(f).sort().map(function(e){return{name:e,nodes:f[e]}})},t.exports.parse=a},{acorn:2,"acorn/dist/walk":3}],2:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n):"function"==typeof define&&define.amd?define(["exports"],r):r(e.acorn=e.acorn||{})}(this,function(e){"use strict";function t(e,t){for(var n=65536,r=0;r<t.length;r+=2){if((n+=t[r])>e)return!1;if((n+=t[r+1])>=e)return!0}}function n(e,n){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&x.test(String.fromCharCode(e)):!1!==n&&t(e,k)))}function r(e,n){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&w.test(String.fromCharCode(e)):!1!==n&&(t(e,k)||t(e,E)))))}function i(e,t){return new A(e,{beforeExpr:!0,binop:t})}function o(e,t){return void 0===t&&(t={}),t.keyword=e,T[e]=new A(e,t)}function s(e){return 10===e||13===e||8232===e||8233===e}function a(e){return"[object Array]"===Object.prototype.toString.call(e)}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n=1,r=0;;){B.lastIndex=r;var i=B.exec(e);if(!(i&&i.index<t))return new N(n,t-r);++n,r=i.index+i[0].length}}function l(e){var t={};for(var n in R)t[n]=e&&u(e,n)?e[n]:R[n];if(t.ecmaVersion>=2015&&(t.ecmaVersion-=2009),null==t.allowReserved&&(t.allowReserved=t.ecmaVersion<5),a(t.onToken)){var r=t.onToken;t.onToken=function(e){return r.push(e)}}return a(t.onComment)&&(t.onComment=p(t,t.onComment)),t}function p(e,t){return function(n,r,i,o,s,a){var u={type:n?"Block":"Line",value:r,start:i,end:o};e.locations&&(u.loc=new M(this,s,a)),e.ranges&&(u.range=[i,o]),t.push(u)}}function h(e){return new RegExp("^("+e.replace(/ /g,"|")+")$")}function f(e,t,n,r){return e.type=t,e.end=n,this.options.locations&&(e.loc.end=r),this.options.ranges&&(e.range[1]=n),e}function d(e,t,n,r){try{return new RegExp(e,t)}catch(e){if(void 0!==n)throw e instanceof SyntaxError&&r.raise(n,"Error parsing regular expression: "+e.message),e}}function m(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}var g={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},v="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",y={5:v,6:v+" const class extends export import super"},b="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",_="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",x=new RegExp("["+b+"]"),w=new RegExp("["+b+_+"]");b=_=null;var k=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541],E=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239],A=function(e,t){void 0===t&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null},C={beforeExpr:!0},S={startsExpr:!0},T={},O={num:new A("num",S),regexp:new A("regexp",S),string:new A("string",S),name:new A("name",S),eof:new A("eof"),bracketL:new A("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new A("]"),braceL:new A("{",{beforeExpr:!0,startsExpr:!0}),braceR:new A("}"),parenL:new A("(",{beforeExpr:!0,startsExpr:!0}),parenR:new A(")"),comma:new A(",",C),semi:new A(";",C),colon:new A(":",C),dot:new A("."),question:new A("?",C),arrow:new A("=>",C),template:new A("template"),ellipsis:new A("...",C),backQuote:new A("`",S),dollarBraceL:new A("${",{beforeExpr:!0,startsExpr:!0}),eq:new A("=",{beforeExpr:!0,isAssign:!0}),assign:new A("_=",{beforeExpr:!0,isAssign:!0}),incDec:new A("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new A("prefix",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:i("||",1),logicalAND:i("&&",2),bitwiseOR:i("|",3),bitwiseXOR:i("^",4),bitwiseAND:i("&",5),equality:i("==/!=",6),relational:i("</>",7),bitShift:i("<</>>",8),plusMin:new A("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:i("%",10),star:i("*",10),slash:i("/",10),starstar:new A("**",{beforeExpr:!0}),_break:o("break"),_case:o("case",C),_catch:o("catch"),_continue:o("continue"),_debugger:o("debugger"),_default:o("default",C),_do:o("do",{isLoop:!0,beforeExpr:!0}),_else:o("else",C),_finally:o("finally"),_for:o("for",{isLoop:!0}),_function:o("function",S),_if:o("if"),_return:o("return",C),_switch:o("switch"),_throw:o("throw",C),_try:o("try"),_var:o("var"),_const:o("const"),_while:o("while",{isLoop:!0}),_with:o("with"),_new:o("new",{beforeExpr:!0,startsExpr:!0}),_this:o("this",S),_super:o("super",S),_class:o("class"),_extends:o("extends",C),_export:o("export"),_import:o("import"),_null:o("null",S),_true:o("true",S),_false:o("false",S),_in:o("in",{beforeExpr:!0,binop:7}),_instanceof:o("instanceof",{beforeExpr:!0,binop:7}),_typeof:o("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:o("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:o("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},F=/\r\n?|\n|\u2028|\u2029/,B=new RegExp(F.source,"g"),D=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,L=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,N=function(e,t){this.line=e,this.column=t};N.prototype.offset=function(e){return new N(this.line,this.column+e)};var M=function(e,t,n){this.start=t,this.end=n,null!==e.sourceFile&&(this.source=e.sourceFile)},R={ecmaVersion:7,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1,plugins:{}},P={},I=function(e,t,n){this.options=e=l(e),this.sourceFile=e.sourceFile,this.keywords=h(y[e.ecmaVersion>=6?6:5]);var r="";if(!e.allowReserved){for(var i=e.ecmaVersion;!(r=g[i]);i--);"module"==e.sourceType&&(r+=" await")}this.reservedWords=h(r);var o=(r?r+" ":"")+g.strict;this.reservedWordsStrict=h(o),this.reservedWordsStrictBind=h(o+" "+g.strictBind),this.input=String(t),this.containsEsc=!1,this.loadPlugins(e.plugins),n?(this.pos=n,this.lineStart=this.input.lastIndexOf("\n",n-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(F).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=O.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule="module"===e.sourceType,this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.inFunction=this.inGenerator=this.inAsync=!1,this.yieldPos=this.awaitPos=0,this.labels=[],0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2)};I.prototype.isKeyword=function(e){return this.keywords.test(e)},I.prototype.isReservedWord=function(e){return this.reservedWords.test(e)},I.prototype.extend=function(e,t){this[e]=t(this[e])},I.prototype.loadPlugins=function(e){var t=this;for(var n in e){var r=P[n];if(!r)throw new Error("Plugin '"+n+"' not found");r(t,e[n])}},I.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)};var j=I.prototype,V=/^(?:'((?:[^\']|\.)*)'|"((?:[^\"]|\.)*)"|;)/;j.strictDirective=function(e){for(var t=this;;){L.lastIndex=e,e+=L.exec(t.input)[0].length;var n=V.exec(t.input.slice(e));if(!n)return!1;if("use strict"==(n[1]||n[2]))return!0;e+=n[0].length}},j.eat=function(e){return this.type===e&&(this.next(),!0)},j.isContextual=function(e){return this.type===O.name&&this.value===e},j.eatContextual=function(e){return this.value===e&&this.eat(O.name)},j.expectContextual=function(e){this.eatContextual(e)||this.unexpected()},j.canInsertSemicolon=function(){return this.type===O.eof||this.type===O.braceR||F.test(this.input.slice(this.lastTokEnd,this.start))},j.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},j.semicolon=function(){this.eat(O.semi)||this.insertSemicolon()||this.unexpected()},j.afterTrailingComma=function(e,t){if(this.type==e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),t||this.next(),!0},j.expect=function(e){this.eat(e)||this.unexpected()},j.unexpected=function(e){this.raise(null!=e?e:this.start,"Unexpected token")};var z=function(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=-1};j.checkPatternErrors=function(e,t){if(e){e.trailingComma>-1&&this.raiseRecoverable(e.trailingComma,"Comma is not permitted after the rest element");var n=t?e.parenthesizedAssign:e.parenthesizedBind;n>-1&&this.raiseRecoverable(n,"Parenthesized pattern")}},j.checkExpressionErrors=function(e,t){var n=e?e.shorthandAssign:-1;if(!t)return n>=0;n>-1&&this.raise(n,"Shorthand property assignments are valid only in destructuring patterns")},j.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value")},j.isSimpleAssignTarget=function(e){return"ParenthesizedExpression"===e.type?this.isSimpleAssignTarget(e.expression):"Identifier"===e.type||"MemberExpression"===e.type};var U=I.prototype;U.parseTopLevel=function(e){var t=this,n={};for(e.body||(e.body=[]);this.type!==O.eof;){var r=t.parseStatement(!0,!0,n);e.body.push(r)}return this.next(),this.options.ecmaVersion>=6&&(e.sourceType=this.options.sourceType),this.finishNode(e,"Program")};var $={kind:"loop"},q={kind:"switch"};U.isLet=function(){if(this.type!==O.name||this.options.ecmaVersion<6||"let"!=this.value)return!1;L.lastIndex=this.pos;var e=L.exec(this.input),t=this.pos+e[0].length,i=this.input.charCodeAt(t);if(91===i||123==i)return!0;if(n(i,!0)){for(var o=t+1;r(this.input.charCodeAt(o),!0);++o);var s=this.input.slice(t,o);if(!this.isKeyword(s))return!0}return!1},U.isAsyncFunction=function(){if(this.type!==O.name||this.options.ecmaVersion<8||"async"!=this.value)return!1;L.lastIndex=this.pos;var e=L.exec(this.input),t=this.pos+e[0].length;return!(F.test(this.input.slice(this.pos,t))||"function"!==this.input.slice(t,t+8)||t+8!=this.input.length&&r(this.input.charAt(t+8)))},U.parseStatement=function(e,t,n){var r,i=this.type,o=this.startNode();switch(this.isLet()&&(i=O._var,r="let"),i){case O._break:case O._continue:return this.parseBreakContinueStatement(o,i.keyword);case O._debugger:return this.parseDebuggerStatement(o);case O._do:return this.parseDoStatement(o);case O._for:return this.parseForStatement(o);case O._function:return!e&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(o,!1);case O._class:return e||this.unexpected(),this.parseClass(o,!0);case O._if:return this.parseIfStatement(o);case O._return:return this.parseReturnStatement(o);case O._switch:return this.parseSwitchStatement(o);case O._throw:return this.parseThrowStatement(o);case O._try:return this.parseTryStatement(o);case O._const:case O._var:return r=r||this.value,e||"var"==r||this.unexpected(),this.parseVarStatement(o,r);case O._while:return this.parseWhileStatement(o);case O._with:return this.parseWithStatement(o);case O.braceL:return this.parseBlock();case O.semi:return this.parseEmptyStatement(o);case O._export:case O._import:return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),i===O._import?this.parseImport(o):this.parseExport(o,n);default:if(this.isAsyncFunction()&&e)return this.next(),this.parseFunctionStatement(o,!0);var s=this.value,a=this.parseExpression();return i===O.name&&"Identifier"===a.type&&this.eat(O.colon)?this.parseLabeledStatement(o,s,a):this.parseExpressionStatement(o,a)}},U.parseBreakContinueStatement=function(e,t){var n=this,r="break"==t;this.next(),this.eat(O.semi)||this.insertSemicolon()?e.label=null:this.type!==O.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var o=n.labels[i];if(null==e.label||o.name===e.label.name){if(null!=o.kind&&(r||"loop"===o.kind))break;if(e.label&&r)break}}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,r?"BreakStatement":"ContinueStatement")},U.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},U.parseDoStatement=function(e){return this.next(),this.labels.push($),e.body=this.parseStatement(!1),this.labels.pop(),this.expect(O._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(O.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},U.parseForStatement=function(e){if(this.next(),this.labels.push($),this.expect(O.parenL),this.type===O.semi)return this.parseFor(e,null);var t=this.isLet();if(this.type===O._var||this.type===O._const||t){var n=this.startNode(),r=t?"let":this.value;return this.next(),this.parseVar(n,!0,r),this.finishNode(n,"VariableDeclaration"),!(this.type===O._in||this.options.ecmaVersion>=6&&this.isContextual("of"))||1!==n.declarations.length||"var"!==r&&n.declarations[0].init?this.parseFor(e,n):this.parseForIn(e,n)}var i=new z,o=this.parseExpression(!0,i);return this.type===O._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.toAssignable(o),this.checkLVal(o),this.checkPatternErrors(i,!0),this.parseForIn(e,o)):(this.checkExpressionErrors(i,!0),this.parseFor(e,o))},U.parseFunctionStatement=function(e,t){return this.next(),this.parseFunction(e,!0,!1,t)},U.isFunction=function(){return this.type===O._function||this.isAsyncFunction()},U.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement(!this.strict&&this.isFunction()),e.alternate=this.eat(O._else)?this.parseStatement(!this.strict&&this.isFunction()):null,this.finishNode(e,"IfStatement")},U.parseReturnStatement=function(e){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(O.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},U.parseSwitchStatement=function(e){var t=this;this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(O.braceL),this.labels.push(q);for(var n,r=!1;this.type!=O.braceR;)if(t.type===O._case||t.type===O._default){var i=t.type===O._case;n&&t.finishNode(n,"SwitchCase"),e.cases.push(n=t.startNode()),n.consequent=[],t.next(),i?n.test=t.parseExpression():(r&&t.raiseRecoverable(t.lastTokStart,"Multiple default clauses"),r=!0,n.test=null),t.expect(O.colon)}else n||t.unexpected(),n.consequent.push(t.parseStatement(!0));return n&&this.finishNode(n,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},U.parseThrowStatement=function(e){return this.next(),F.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")};var H=[];U.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===O._catch){var t=this.startNode();this.next(),this.expect(O.parenL),t.param=this.parseBindingAtom(),this.checkLVal(t.param,!0),this.expect(O.parenR),t.body=this.parseBlock(),e.handler=this.finishNode(t,"CatchClause")}return e.finalizer=this.eat(O._finally)?this.parseBlock():null,e.handler||e.finalizer||this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},U.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},U.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push($),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,"WhileStatement")},U.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement(!1),this.finishNode(e,"WithStatement")},U.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},U.parseLabeledStatement=function(e,t,n){for(var r=this,i=0;i<this.labels.length;++i)r.labels[i].name===t&&r.raise(n.start,"Label '"+t+"' is already declared");for(var o=this.type.isLoop?"loop":this.type===O._switch?"switch":null,s=this.labels.length-1;s>=0;s--){var a=r.labels[s];if(a.statementStart!=e.start)break;a.statementStart=r.start,a.kind=o}return this.labels.push({name:t,kind:o,statementStart:this.start}),e.body=this.parseStatement(!0),("ClassDeclaration"==e.body.type||"VariableDeclaration"==e.body.type&&(this.strict||"var"!=e.body.kind)||"FunctionDeclaration"==e.body.type&&(this.strict||e.body.generator))&&this.raiseRecoverable(e.body.start,"Invalid labeled declaration"),this.labels.pop(),e.label=n,this.finishNode(e,"LabeledStatement")},U.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},U.parseBlock=function(){var e=this,t=this.startNode();for(t.body=[],this.expect(O.braceL);!this.eat(O.braceR);){var n=e.parseStatement(!0);t.body.push(n)}return this.finishNode(t,"BlockStatement")},U.parseFor=function(e,t){return e.init=t,this.expect(O.semi),e.test=this.type===O.semi?null:this.parseExpression(),this.expect(O.semi),e.update=this.type===O.parenR?null:this.parseExpression(),this.expect(O.parenR),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,"ForStatement")},U.parseForIn=function(e,t){var n=this.type===O._in?"ForInStatement":"ForOfStatement";return this.next(),e.left=t,e.right=this.parseExpression(),this.expect(O.parenR),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,n)},U.parseVar=function(e,t,n){var r=this;for(e.declarations=[],e.kind=n;;){var i=r.startNode();if(r.parseVarId(i),r.eat(O.eq)?i.init=r.parseMaybeAssign(t):"const"!==n||r.type===O._in||r.options.ecmaVersion>=6&&r.isContextual("of")?"Identifier"==i.id.type||t&&(r.type===O._in||r.isContextual("of"))?i.init=null:r.raise(r.lastTokEnd,"Complex binding patterns require an initialization value"):r.unexpected(),e.declarations.push(r.finishNode(i,"VariableDeclarator")),!r.eat(O.comma))break}return e},U.parseVarId=function(e){e.id=this.parseBindingAtom(),this.checkLVal(e.id,!0)},U.parseFunction=function(e,t,n,r){this.initFunction(e),this.options.ecmaVersion>=6&&!r&&(e.generator=this.eat(O.star)),this.options.ecmaVersion>=8&&(e.async=!!r),null==t&&(t=this.type==O.name),t&&(e.id=this.parseIdent());var i=this.inGenerator,o=this.inAsync,s=this.yieldPos,a=this.awaitPos,u=this.inFunction;return this.inGenerator=e.generator,this.inAsync=e.async,this.yieldPos=0,this.awaitPos=0,this.inFunction=!0,t||this.type!==O.name||(e.id=this.parseIdent()),this.parseFunctionParams(e),this.parseFunctionBody(e,n),this.inGenerator=i,this.inAsync=o,this.yieldPos=s,this.awaitPos=a,this.inFunction=u,this.finishNode(e,t?"FunctionDeclaration":"FunctionExpression")},U.parseFunctionParams=function(e){this.expect(O.parenL),e.params=this.parseBindingList(O.parenR,!1,this.options.ecmaVersion>=8,!0),this.checkYieldAwaitInDefaultParams()},U.parseClass=function(e,t){var n=this;this.next(),null==t&&(t=this.type===O.name),this.parseClassId(e,t),this.parseClassSuper(e);var r=this.startNode(),i=!1;for(r.body=[],this.expect(O.braceL);!this.eat(O.braceR);)if(!n.eat(O.semi)){var o=n.startNode(),s=n.eat(O.star),a=!1,u=n.type===O.name&&"static"===n.value;n.parsePropertyName(o),o.static=u&&n.type!==O.parenL,o.static&&(s&&n.unexpected(),s=n.eat(O.star),n.parsePropertyName(o)),n.options.ecmaVersion>=8&&!s&&!o.computed&&"Identifier"===o.key.type&&"async"===o.key.name&&n.type!==O.parenL&&!n.canInsertSemicolon()&&(a=!0,n.parsePropertyName(o)),o.kind="method";var c=!1;if(!o.computed){var l=o.key;s||a||"Identifier"!==l.type||n.type===O.parenL||"get"!==l.name&&"set"!==l.name||(c=!0,o.kind=l.name,l=n.parsePropertyName(o)),!o.static&&("Identifier"===l.type&&"constructor"===l.name||"Literal"===l.type&&"constructor"===l.value)&&(i&&n.raise(l.start,"Duplicate constructor in the same class"),c&&n.raise(l.start,"Constructor can't have get/set modifier"),s&&n.raise(l.start,"Constructor can't be a generator"),a&&n.raise(l.start,"Constructor can't be an async method"),o.kind="constructor",i=!0)}if(n.parseClassMethod(r,o,s,a),c){var p="get"===o.kind?0:1;if(o.value.params.length!==p){var h=o.value.start;"get"===o.kind?n.raiseRecoverable(h,"getter should have no params"):n.raiseRecoverable(h,"setter should have exactly one param")}else"set"===o.kind&&"RestElement"===o.value.params[0].type&&n.raiseRecoverable(o.value.params[0].start,"Setter cannot use rest params")}}return e.body=this.finishNode(r,"ClassBody"),this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},U.parseClassMethod=function(e,t,n,r){t.value=this.parseMethod(n,r),e.body.push(this.finishNode(t,"MethodDefinition"))},U.parseClassId=function(e,t){e.id=this.type===O.name?this.parseIdent():t?this.unexpected():null},U.parseClassSuper=function(e){e.superClass=this.eat(O._extends)?this.parseExprSubscripts():null},U.parseExport=function(e,t){var n=this;if(this.next(),this.eat(O.star))return this.expectContextual("from"),e.source=this.type===O.string?this.parseExprAtom():this.unexpected(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(O._default)){this.checkExport(t,"default",this.lastTokStart);var r;if(this.type===O._function||(r=this.isAsyncFunction())){var i=this.startNode();this.next(),r&&this.next(),e.declaration=this.parseFunction(i,null,!1,r)}else if(this.type===O._class){var o=this.startNode();e.declaration=this.parseClass(o,null)}else e.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(!0),"VariableDeclaration"===e.declaration.type?this.checkVariableExport(t,e.declaration.declarations):this.checkExport(t,e.declaration.id.name,e.declaration.id.start),e.specifiers=[],e.source=null;else{if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(t),this.eatContextual("from"))e.source=this.type===O.string?this.parseExprAtom():this.unexpected();else{for(var s=0;s<e.specifiers.length;s++)(n.keywords.test(e.specifiers[s].local.name)||n.reservedWords.test(e.specifiers[s].local.name))&&n.unexpected(e.specifiers[s].local.start);e.source=null}this.semicolon()}return this.finishNode(e,"ExportNamedDeclaration")},U.checkExport=function(e,t,n){e&&(Object.prototype.hasOwnProperty.call(e,t)&&this.raiseRecoverable(n,"Duplicate export '"+t+"'"),e[t]=!0)},U.checkPatternExport=function(e,t){var n=this,r=t.type;if("Identifier"==r)this.checkExport(e,t.name,t.start);else if("ObjectPattern"==r)for(var i=0;i<t.properties.length;++i)n.checkPatternExport(e,t.properties[i].value);else if("ArrayPattern"==r)for(var o=0;o<t.elements.length;++o){var s=t.elements[o];s&&n.checkPatternExport(e,s)}else"AssignmentPattern"==r?this.checkPatternExport(e,t.left):"ParenthesizedExpression"==r&&this.checkPatternExport(e,t.expression)},U.checkVariableExport=function(e,t){var n=this;if(e)for(var r=0;r<t.length;r++)n.checkPatternExport(e,t[r].id)},U.shouldParseExportStatement=function(){return"var"===this.type.keyword||"const"===this.type.keyword||"class"===this.type.keyword||"function"===this.type.keyword||this.isLet()||this.isAsyncFunction()},U.parseExportSpecifiers=function(e){var t=this,n=[],r=!0;for(this.expect(O.braceL);!this.eat(O.braceR);){if(r)r=!1;else if(t.expect(O.comma),t.afterTrailingComma(O.braceR))break;var i=t.startNode();i.local=t.parseIdent(!0),i.exported=t.eatContextual("as")?t.parseIdent(!0):i.local,t.checkExport(e,i.exported.name,i.exported.start),n.push(t.finishNode(i,"ExportSpecifier"))}return n},U.parseImport=function(e){return this.next(),this.type===O.string?(e.specifiers=H,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===O.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},U.parseImportSpecifiers=function(){var e=this,t=[],n=!0;if(this.type===O.name){var r=this.startNode();if(r.local=this.parseIdent(),this.checkLVal(r.local,!0),t.push(this.finishNode(r,"ImportDefaultSpecifier")),!this.eat(O.comma))return t}if(this.type===O.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLVal(i.local,!0),t.push(this.finishNode(i,"ImportNamespaceSpecifier")),t}for(this.expect(O.braceL);!this.eat(O.braceR);){if(n)n=!1;else if(e.expect(O.comma),e.afterTrailingComma(O.braceR))break;var o=e.startNode();o.imported=e.parseIdent(!0),e.eatContextual("as")?o.local=e.parseIdent():(o.local=o.imported,e.isKeyword(o.local.name)&&e.unexpected(o.local.start),e.reservedWordsStrict.test(o.local.name)&&e.raiseRecoverable(o.local.start,"The keyword '"+o.local.name+"' is reserved")),e.checkLVal(o.local,!0),t.push(e.finishNode(o,"ImportSpecifier"))}return t};var W=I.prototype;W.toAssignable=function(e,t){var n=this;if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":this.inAsync&&"await"===e.name&&this.raise(e.start,"Can not use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":break;case"ObjectExpression":e.type="ObjectPattern";for(var r=0;r<e.properties.length;r++){var i=e.properties[r];"init"!==i.kind&&n.raise(i.key.start,"Object pattern can't contain getter or setter"),n.toAssignable(i.value,t)}break;case"ArrayExpression":e.type="ArrayPattern",this.toAssignableList(e.elements,t);break;case"AssignmentExpression":if("="!==e.operator){this.raise(e.left.end,"Only '=' operator can be used for specifying default value.");break}e.type="AssignmentPattern",delete e.operator,this.toAssignable(e.left,t);case"AssignmentPattern":break;case"ParenthesizedExpression":e.expression=this.toAssignable(e.expression,t);break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue")}return e},W.toAssignableList=function(e,t){var n=this,r=e.length;if(r){var i=e[r-1];if(i&&"RestElement"==i.type)--r;else if(i&&"SpreadElement"==i.type){i.type="RestElement";var o=i.argument;this.toAssignable(o,t),"Identifier"!==o.type&&"MemberExpression"!==o.type&&"ArrayPattern"!==o.type&&this.unexpected(o.start),--r}t&&i&&"RestElement"===i.type&&"Identifier"!==i.argument.type&&this.unexpected(i.argument.start)}for(var s=0;s<r;s++){var a=e[s];a&&n.toAssignable(a,t)}return e},W.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},W.parseRest=function(e){var t=this.startNode();return this.next(),t.argument=e?this.type===O.name?this.parseIdent():this.unexpected():this.type===O.name||this.type===O.bracketL?this.parseBindingAtom():this.unexpected(),this.finishNode(t,"RestElement")},W.parseBindingAtom=function(){if(this.options.ecmaVersion<6)return this.parseIdent();switch(this.type){case O.name:return this.parseIdent();case O.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(O.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case O.braceL:return this.parseObj(!0);default:this.unexpected()}},W.parseBindingList=function(e,t,n,r){for(var i=this,o=[],s=!0;!this.eat(e);)if(s?s=!1:i.expect(O.comma),t&&i.type===O.comma)o.push(null);else{if(n&&i.afterTrailingComma(e))break;if(i.type===O.ellipsis){var a=i.parseRest(r);i.parseBindingListItem(a),o.push(a),i.type===O.comma&&i.raise(i.start,"Comma is not permitted after the rest element"),i.expect(e);break}var u=i.parseMaybeDefault(i.start,i.startLoc);i.parseBindingListItem(u),o.push(u)}return o},W.parseBindingListItem=function(e){return e},W.parseMaybeDefault=function(e,t,n){if(n=n||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(O.eq))return n;var r=this.startNodeAt(e,t);return r.left=n,r.right=this.parseMaybeAssign(),this.finishNode(r,"AssignmentPattern")},W.checkLVal=function(e,t,n){var r=this;switch(e.type){case"Identifier":this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),n&&(u(n,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),n[e.name]=!0);break;case"MemberExpression":t&&this.raiseRecoverable(e.start,(t?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var i=0;i<e.properties.length;i++)r.checkLVal(e.properties[i].value,t,n);break;case"ArrayPattern":for(var o=0;o<e.elements.length;o++){var s=e.elements[o];s&&r.checkLVal(s,t,n)}break;case"AssignmentPattern":this.checkLVal(e.left,t,n);break;case"RestElement":this.checkLVal(e.argument,t,n);break;case"ParenthesizedExpression":this.checkLVal(e.expression,t,n);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue")}};var G=I.prototype;G.checkPropClash=function(e,t){if(!(this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var n,r=e.key;switch(r.type){case"Identifier":n=r.name;break;case"Literal":n=String(r.value);break;default:return}var i=e.kind;if(this.options.ecmaVersion>=6)"__proto__"===n&&"init"===i&&(t.proto&&this.raiseRecoverable(r.start,"Redefinition of __proto__ property"),t.proto=!0);else{var o=t[n="$"+n];if(o){var s="init"!==i;(!this.strict&&!s||!o[i])&&s^o.init||this.raiseRecoverable(r.start,"Redefinition of property")}else o=t[n]={init:!1,get:!1,set:!1};o[i]=!0}}},G.parseExpression=function(e,t){var n=this,r=this.start,i=this.startLoc,o=this.parseMaybeAssign(e,t);if(this.type===O.comma){var s=this.startNodeAt(r,i);for(s.expressions=[o];this.eat(O.comma);)s.expressions.push(n.parseMaybeAssign(e,t));return this.finishNode(s,"SequenceExpression")}return o},G.parseMaybeAssign=function(e,t,n){if(this.inGenerator&&this.isContextual("yield"))return this.parseYield();var r=!1,i=-1;t?(i=t.parenthesizedAssign,t.parenthesizedAssign=-1):(t=new z,r=!0);var o=this.start,s=this.startLoc;this.type!=O.parenL&&this.type!=O.name||(this.potentialArrowAt=this.start);var a=this.parseMaybeConditional(e,t);if(n&&(a=n.call(this,a,o,s)),this.type.isAssign){this.checkPatternErrors(t,!0),r||z.call(t);var u=this.startNodeAt(o,s);return u.operator=this.value,u.left=this.type===O.eq?this.toAssignable(a):a,t.shorthandAssign=-1,this.checkLVal(a),this.next(),u.right=this.parseMaybeAssign(e),this.finishNode(u,"AssignmentExpression")}return r&&this.checkExpressionErrors(t,!0),i>-1&&(t.parenthesizedAssign=i),a},G.parseMaybeConditional=function(e,t){var n=this.start,r=this.startLoc,i=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return i;if(this.eat(O.question)){var o=this.startNodeAt(n,r);return o.test=i,o.consequent=this.parseMaybeAssign(),this.expect(O.colon),o.alternate=this.parseMaybeAssign(e),this.finishNode(o,"ConditionalExpression")}return i},G.parseExprOps=function(e,t){var n=this.start,r=this.startLoc,i=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)?i:this.parseExprOp(i,n,r,-1,e)},G.parseExprOp=function(e,t,n,r,i){var o=this.type.binop;if(null!=o&&(!i||this.type!==O._in)&&o>r){var s=this.type===O.logicalOR||this.type===O.logicalAND,a=this.value;this.next();var u=this.start,c=this.startLoc,l=this.parseExprOp(this.parseMaybeUnary(null,!1),u,c,o,i),p=this.buildBinary(t,n,e,l,a,s);return this.parseExprOp(p,t,n,r,i)}return e},G.buildBinary=function(e,t,n,r,i,o){var s=this.startNodeAt(e,t);return s.left=n,s.operator=i,s.right=r,this.finishNode(s,o?"LogicalExpression":"BinaryExpression")},G.parseMaybeUnary=function(e,t){var n,r=this,i=this.start,o=this.startLoc;if(this.inAsync&&this.isContextual("await"))n=this.parseAwait(e),t=!0;else if(this.type.prefix){var s=this.startNode(),a=this.type===O.incDec;s.operator=this.value,s.prefix=!0,this.next(),s.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),a?this.checkLVal(s.argument):this.strict&&"delete"===s.operator&&"Identifier"===s.argument.type?this.raiseRecoverable(s.start,"Deleting local variable in strict mode"):t=!0,n=this.finishNode(s,a?"UpdateExpression":"UnaryExpression")}else{if(n=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return n;for(;this.type.postfix&&!this.canInsertSemicolon();){var u=r.startNodeAt(i,o);u.operator=r.value,u.prefix=!1,u.argument=n,r.checkLVal(n),r.next(),n=r.finishNode(u,"UpdateExpression")}}return!t&&this.eat(O.starstar)?this.buildBinary(i,o,n,this.parseMaybeUnary(null,!1),"**",!1):n},G.parseExprSubscripts=function(e){var t=this.start,n=this.startLoc,r=this.parseExprAtom(e),i="ArrowFunctionExpression"===r.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd);if(this.checkExpressionErrors(e)||i)return r;var o=this.parseSubscripts(r,t,n);return e&&"MemberExpression"===o.type&&(e.parenthesizedAssign>=o.start&&(e.parenthesizedAssign=-1),e.parenthesizedBind>=o.start&&(e.parenthesizedBind=-1)),o},G.parseSubscripts=function(e,t,n,r){for(var i,o=this,s=this.options.ecmaVersion>=8&&"Identifier"===e.type&&"async"===e.name&&this.lastTokEnd==e.end&&!this.canInsertSemicolon();;)if((i=o.eat(O.bracketL))||o.eat(O.dot)){var a=o.startNodeAt(t,n);a.object=e,a.property=i?o.parseExpression():o.parseIdent(!0),a.computed=!!i,i&&o.expect(O.bracketR),e=o.finishNode(a,"MemberExpression")}else if(!r&&o.eat(O.parenL)){var u=new z,c=o.yieldPos,l=o.awaitPos;o.yieldPos=0,o.awaitPos=0;var p=o.parseExprList(O.parenR,o.options.ecmaVersion>=8,!1,u);if(s&&!o.canInsertSemicolon()&&o.eat(O.arrow))return o.checkPatternErrors(u,!1),o.checkYieldAwaitInDefaultParams(),o.yieldPos=c,o.awaitPos=l,o.parseArrowExpression(o.startNodeAt(t,n),p,!0);o.checkExpressionErrors(u,!0),o.yieldPos=c||o.yieldPos,o.awaitPos=l||o.awaitPos;var h=o.startNodeAt(t,n);h.callee=e,h.arguments=p,e=o.finishNode(h,"CallExpression")}else{if(o.type!==O.backQuote)return e;var f=o.startNodeAt(t,n);f.tag=e,f.quasi=o.parseTemplate(),e=o.finishNode(f,"TaggedTemplateExpression")}},G.parseExprAtom=function(e){var t,n=this.potentialArrowAt==this.start;switch(this.type){case O._super:this.inFunction||this.raise(this.start,"'super' outside of function or class");case O._this:var r=this.type===O._this?"ThisExpression":"Super";return t=this.startNode(),this.next(),this.finishNode(t,r);case O.name:var i=this.start,o=this.startLoc,s=this.parseIdent(this.type!==O.name);if(this.options.ecmaVersion>=8&&"async"===s.name&&!this.canInsertSemicolon()&&this.eat(O._function))return this.parseFunction(this.startNodeAt(i,o),!1,!1,!0);if(n&&!this.canInsertSemicolon()){if(this.eat(O.arrow))return this.parseArrowExpression(this.startNodeAt(i,o),[s],!1);if(this.options.ecmaVersion>=8&&"async"===s.name&&this.type===O.name)return s=this.parseIdent(),!this.canInsertSemicolon()&&this.eat(O.arrow)||this.unexpected(),this.parseArrowExpression(this.startNodeAt(i,o),[s],!0)}return s;case O.regexp:var a=this.value;return t=this.parseLiteral(a.value),t.regex={pattern:a.pattern,flags:a.flags},t;case O.num:case O.string:return this.parseLiteral(this.value);case O._null:case O._true:case O._false:return t=this.startNode(),t.value=this.type===O._null?null:this.type===O._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case O.parenL:var u=this.start,c=this.parseParenAndDistinguishExpression(n);return e&&(e.parenthesizedAssign<0&&!this.isSimpleAssignTarget(c)&&(e.parenthesizedAssign=u),e.parenthesizedBind<0&&(e.parenthesizedBind=u)),c;case O.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(O.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case O.braceL:return this.parseObj(!1,e);case O._function:return t=this.startNode(),this.next(),this.parseFunction(t,!1);case O._class:return this.parseClass(this.startNode(),!1);case O._new:return this.parseNew();case O.backQuote:return this.parseTemplate();default:this.unexpected()}},G.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),this.next(),this.finishNode(t,"Literal")},G.parseParenExpression=function(){this.expect(O.parenL);var e=this.parseExpression();return this.expect(O.parenR),e},G.parseParenAndDistinguishExpression=function(e){var t,n=this,r=this.start,i=this.startLoc,o=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var s,a,u=this.start,c=this.startLoc,l=[],p=!0,h=!1,f=new z,d=this.yieldPos,m=this.awaitPos;for(this.yieldPos=0,this.awaitPos=0;this.type!==O.parenR;){if(p?p=!1:n.expect(O.comma),o&&n.afterTrailingComma(O.parenR,!0)){h=!0;break}if(n.type===O.ellipsis){s=n.start,l.push(n.parseParenItem(n.parseRest())),n.type===O.comma&&n.raise(n.start,"Comma is not permitted after the rest element");break}n.type!==O.parenL||a||(a=n.start),l.push(n.parseMaybeAssign(!1,f,n.parseParenItem))}var g=this.start,v=this.startLoc;if(this.expect(O.parenR),e&&!this.canInsertSemicolon()&&this.eat(O.arrow))return this.checkPatternErrors(f,!1),this.checkYieldAwaitInDefaultParams(),a&&this.unexpected(a),this.yieldPos=d,this.awaitPos=m,this.parseParenArrowList(r,i,l);l.length&&!h||this.unexpected(this.lastTokStart),s&&this.unexpected(s),this.checkExpressionErrors(f,!0),this.yieldPos=d||this.yieldPos,this.awaitPos=m||this.awaitPos,l.length>1?((t=this.startNodeAt(u,c)).expressions=l,this.finishNodeAt(t,"SequenceExpression",g,v)):t=l[0]}else t=this.parseParenExpression();if(this.options.preserveParens){var y=this.startNodeAt(r,i);return y.expression=t,this.finishNode(y,"ParenthesizedExpression")}return t},G.parseParenItem=function(e){return e},G.parseParenArrowList=function(e,t,n){return this.parseArrowExpression(this.startNodeAt(e,t),n)};var Y=[];G.parseNew=function(){var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(O.dot))return e.meta=t,e.property=this.parseIdent(!0),"target"!==e.property.name&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is new.target"),this.inFunction||this.raiseRecoverable(e.start,"new.target can only be used in functions"),this.finishNode(e,"MetaProperty");var n=this.start,r=this.startLoc;return e.callee=this.parseSubscripts(this.parseExprAtom(),n,r,!0),this.eat(O.parenL)?e.arguments=this.parseExprList(O.parenR,this.options.ecmaVersion>=8,!1):e.arguments=Y,this.finishNode(e,"NewExpression")},G.parseTemplateElement=function(){var e=this.startNode();return e.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),e.tail=this.type===O.backQuote,this.finishNode(e,"TemplateElement")},G.parseTemplate=function(){var e=this,t=this.startNode();this.next(),t.expressions=[];var n=this.parseTemplateElement();for(t.quasis=[n];!n.tail;)e.expect(O.dollarBraceL),t.expressions.push(e.parseExpression()),e.expect(O.braceR),t.quasis.push(n=e.parseTemplateElement());return this.next(),this.finishNode(t,"TemplateLiteral")},G.parseObj=function(e,t){var n=this,r=this.startNode(),i=!0,o={};for(r.properties=[],this.next();!this.eat(O.braceR);){if(i)i=!1;else if(n.expect(O.comma),n.afterTrailingComma(O.braceR))break;var s,a,u,c,l=n.startNode();n.options.ecmaVersion>=6&&(l.method=!1,l.shorthand=!1,(e||t)&&(u=n.start,c=n.startLoc),e||(s=n.eat(O.star))),n.parsePropertyName(l),e||!(n.options.ecmaVersion>=8)||s||l.computed||"Identifier"!==l.key.type||"async"!==l.key.name||n.type===O.parenL||n.type===O.colon||n.canInsertSemicolon()?a=!1:(a=!0,n.parsePropertyName(l,t)),n.parsePropertyValue(l,e,s,a,u,c,t),n.checkPropClash(l,o),r.properties.push(n.finishNode(l,"Property"))}return this.finishNode(r,e?"ObjectPattern":"ObjectExpression")},G.parsePropertyValue=function(e,t,n,r,i,o,s){if((n||r)&&this.type===O.colon&&this.unexpected(),this.eat(O.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,s),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===O.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(n,r);else if(this.options.ecmaVersion>=5&&!e.computed&&"Identifier"===e.key.type&&("get"===e.key.name||"set"===e.key.name)&&this.type!=O.comma&&this.type!=O.braceR){(n||r||t)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var a="get"===e.kind?0:1;if(e.value.params.length!==a){var u=e.value.start;"get"===e.kind?this.raiseRecoverable(u,"getter should have no params"):this.raiseRecoverable(u,"setter should have exactly one param")}else"set"===e.kind&&"RestElement"===e.value.params[0].type&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params")}else this.options.ecmaVersion>=6&&!e.computed&&"Identifier"===e.key.type?((this.keywords.test(e.key.name)||(this.strict?this.reservedWordsStrict:this.reservedWords).test(e.key.name)||this.inGenerator&&"yield"==e.key.name||this.inAsync&&"await"==e.key.name)&&this.raiseRecoverable(e.key.start,"'"+e.key.name+"' can not be used as shorthand property"),e.kind="init",t?e.value=this.parseMaybeDefault(i,o,e.key):this.type===O.eq&&s?(s.shorthandAssign<0&&(s.shorthandAssign=this.start),e.value=this.parseMaybeDefault(i,o,e.key)):e.value=e.key,e.shorthand=!0):this.unexpected()},G.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(O.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(O.bracketR),e.key;e.computed=!1}return e.key=this.type===O.num||this.type===O.string?this.parseExprAtom():this.parseIdent(!0)},G.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=!1,e.expression=!1),this.options.ecmaVersion>=8&&(e.async=!1)},G.parseMethod=function(e,t){var n=this.startNode(),r=this.inGenerator,i=this.inAsync,o=this.yieldPos,s=this.awaitPos,a=this.inFunction;return this.initFunction(n),this.options.ecmaVersion>=6&&(n.generator=e),this.options.ecmaVersion>=8&&(n.async=!!t),this.inGenerator=n.generator,this.inAsync=n.async,this.yieldPos=0,this.awaitPos=0,this.inFunction=!0,this.expect(O.parenL),n.params=this.parseBindingList(O.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(n,!1),this.inGenerator=r,this.inAsync=i,this.yieldPos=o,this.awaitPos=s,this.inFunction=a,this.finishNode(n,"FunctionExpression")},G.parseArrowExpression=function(e,t,n){var r=this.inGenerator,i=this.inAsync,o=this.yieldPos,s=this.awaitPos,a=this.inFunction;return this.initFunction(e),this.options.ecmaVersion>=8&&(e.async=!!n),this.inGenerator=!1,this.inAsync=e.async,this.yieldPos=0,this.awaitPos=0,this.inFunction=!0,e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0),this.inGenerator=r,this.inAsync=i,this.yieldPos=o,this.awaitPos=s,this.inFunction=a,this.finishNode(e,"ArrowFunctionExpression")},G.parseFunctionBody=function(e,t){var n=t&&this.type!==O.braceL,r=this.strict,i=!1;if(n)e.body=this.parseMaybeAssign(),e.expression=!0;else{var o=this.options.ecmaVersion>=7&&!this.isSimpleParamList(e.params);r&&!o||(i=this.strictDirective(this.end))&&o&&this.raiseRecoverable(e.start,"Illegal 'use strict' directive in function with non-simple parameter list");var s=this.labels;this.labels=[],i&&(this.strict=!0),e.body=this.parseBlock(!0),e.expression=!1,this.labels=s}r||i?(this.strict=!0,e.id&&this.checkLVal(e.id,!0),this.checkParams(e),this.strict=r):!t&&this.isSimpleParamList(e.params)||this.checkParams(e)},G.isSimpleParamList=function(e){for(var t=0;t<e.length;t++)if("Identifier"!==e[t].type)return!1;return!0},G.checkParams=function(e){for(var t=this,n={},r=0;r<e.params.length;r++)t.checkLVal(e.params[r],!0,n)},G.parseExprList=function(e,t,n,r){for(var i=this,o=[],s=!0;!this.eat(e);){if(s)s=!1;else if(i.expect(O.comma),t&&i.afterTrailingComma(e))break;var a;n&&i.type===O.comma?a=null:i.type===O.ellipsis?(a=i.parseSpread(r),r&&i.type===O.comma&&r.trailingComma<0&&(r.trailingComma=i.start)):a=i.parseMaybeAssign(!1,r),o.push(a)}return o},G.parseIdent=function(e){var t=this.startNode();return e&&"never"==this.options.allowReserved&&(e=!1),this.type===O.name?(!e&&(this.strict?this.reservedWordsStrict:this.reservedWords).test(this.value)&&(this.options.ecmaVersion>=6||-1==this.input.slice(this.start,this.end).indexOf("\\"))&&this.raiseRecoverable(this.start,"The keyword '"+this.value+"' is reserved"),this.inGenerator&&"yield"===this.value&&this.raiseRecoverable(this.start,"Can not use 'yield' as identifier inside a generator"),this.inAsync&&"await"===this.value&&this.raiseRecoverable(this.start,"Can not use 'await' as identifier inside an async function"),t.name=this.value):e&&this.type.keyword?t.name=this.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"Identifier")},G.parseYield=function(){this.yieldPos||(this.yieldPos=this.start);var e=this.startNode();return this.next(),this.type==O.semi||this.canInsertSemicolon()||this.type!=O.star&&!this.type.startsExpr?(e.delegate=!1,e.argument=null):(e.delegate=this.eat(O.star),e.argument=this.parseMaybeAssign()),this.finishNode(e,"YieldExpression")},G.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var e=this.startNode();return this.next(),e.argument=this.parseMaybeUnary(null,!0),this.finishNode(e,"AwaitExpression")};var X=I.prototype;X.raise=function(e,t){var n=c(this.input,e);t+=" ("+n.line+":"+n.column+")";var r=new SyntaxError(t);throw r.pos=e,r.loc=n,r.raisedAt=this.pos,r},X.raiseRecoverable=X.raise,X.curPosition=function(){if(this.options.locations)return new N(this.curLine,this.pos-this.lineStart)};var K=function(e,t,n){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new M(e,n)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0])},J=I.prototype;J.startNode=function(){return new K(this,this.start,this.startLoc)},J.startNodeAt=function(e,t){return new K(this,e,t)},J.finishNode=function(e,t){return f.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},J.finishNodeAt=function(e,t,n,r){return f.call(this,e,t,n,r)};var Q=function(e,t,n,r){this.token=e,this.isExpr=!!t,this.preserveSpace=!!n,this.override=r},Z={b_stat:new Q("{",!1),b_expr:new Q("{",!0),b_tmpl:new Q("${",!0),p_stat:new Q("(",!1),p_expr:new Q("(",!0),q_tmpl:new Q("`",!0,!0,function(e){return e.readTmplToken()}),f_expr:new Q("function",!0)},ee=I.prototype;ee.initialContext=function(){return[Z.b_stat]},ee.braceIsBlock=function(e){if(e===O.colon){var t=this.curContext();if(t===Z.b_stat||t===Z.b_expr)return!t.isExpr}return e===O._return?F.test(this.input.slice(this.lastTokEnd,this.start)):e===O._else||e===O.semi||e===O.eof||e===O.parenR||(e==O.braceL?this.curContext()===Z.b_stat:!this.exprAllowed)},ee.updateContext=function(e){var t,n=this.type;n.keyword&&e==O.dot?this.exprAllowed=!1:(t=n.updateContext)?t.call(this,e):this.exprAllowed=n.beforeExpr},O.parenR.updateContext=O.braceR.updateContext=function(){if(1!=this.context.length){var e=this.context.pop();e===Z.b_stat&&this.curContext()===Z.f_expr?(this.context.pop(),this.exprAllowed=!1):this.exprAllowed=e===Z.b_tmpl||!e.isExpr}else this.exprAllowed=!0},O.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Z.b_stat:Z.b_expr),this.exprAllowed=!0},O.dollarBraceL.updateContext=function(){this.context.push(Z.b_tmpl),this.exprAllowed=!0},O.parenL.updateContext=function(e){var t=e===O._if||e===O._for||e===O._with||e===O._while;this.context.push(t?Z.p_stat:Z.p_expr),this.exprAllowed=!0},O.incDec.updateContext=function(){},O._function.updateContext=function(e){e.beforeExpr&&e!==O.semi&&e!==O._else&&(e!==O.colon&&e!==O.braceL||this.curContext()!==Z.b_stat)&&this.context.push(Z.f_expr),this.exprAllowed=!1},O.backQuote.updateContext=function(){this.curContext()===Z.q_tmpl?this.context.pop():this.context.push(Z.q_tmpl),this.exprAllowed=!1};var te=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new M(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end])},ne=I.prototype,re="object"==typeof Packages&&"[object JavaPackage]"==Object.prototype.toString.call(Packages);ne.next=function(){this.options.onToken&&this.options.onToken(new te(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},ne.getToken=function(){return this.next(),new te(this)},"undefined"!=typeof Symbol&&(ne[Symbol.iterator]=function(){var e=this;return{next:function(){var t=e.getToken();return{done:t.type===O.eof,value:t}}}}),ne.curContext=function(){return this.context[this.context.length-1]},ne.nextToken=function(){var e=this.curContext();return e&&e.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(O.eof):e.override?e.override(this):void this.readToken(this.fullCharCodeAtPos())},ne.readToken=function(e){return n(e,this.options.ecmaVersion>=6)||92===e?this.readWord():this.getTokenFromCode(e)},ne.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);return e<=55295||e>=57344?e:(e<<10)+this.input.charCodeAt(this.pos+1)-56613888},ne.skipBlockComment=function(){var e=this,t=this.options.onComment&&this.curPosition(),n=this.pos,r=this.input.indexOf("*/",this.pos+=2);if(-1===r&&this.raise(this.pos-2,"Unterminated comment"),this.pos=r+2,this.options.locations){B.lastIndex=n;for(var i;(i=B.exec(this.input))&&i.index<this.pos;)++e.curLine,e.lineStart=i.index+i[0].length}this.options.onComment&&this.options.onComment(!0,this.input.slice(n+2,r),n,this.pos,t,this.curPosition())},ne.skipLineComment=function(e){for(var t=this,n=this.pos,r=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&10!==i&&13!==i&&8232!==i&&8233!==i;)++t.pos,i=t.input.charCodeAt(t.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(n+e,this.pos),n,this.pos,r,this.curPosition())},ne.skipSpace=function(){var e=this;e:for(;this.pos<this.input.length;){var t=e.input.charCodeAt(e.pos);switch(t){case 32:case 160:++e.pos;break;case 13:10===e.input.charCodeAt(e.pos+1)&&++e.pos;case 10:case 8232:case 8233:++e.pos,e.options.locations&&(++e.curLine,e.lineStart=e.pos);break;case 47:switch(e.input.charCodeAt(e.pos+1)){case 42:e.skipBlockComment();break;case 47:e.skipLineComment(2);break;default:break e}break;default:if(!(t>8&&t<14||t>=5760&&D.test(String.fromCharCode(t))))break e;++e.pos}}},ne.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var n=this.type;this.type=e,this.value=t,this.updateContext(n)},ne.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===e&&46===t?(this.pos+=3,this.finishToken(O.ellipsis)):(++this.pos,this.finishToken(O.dot))},ne.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===e?this.finishOp(O.assign,2):this.finishOp(O.slash,1)},ne.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),n=1,r=42===e?O.star:O.modulo;return this.options.ecmaVersion>=7&&42===t&&(++n,r=O.starstar,t=this.input.charCodeAt(this.pos+2)),61===t?this.finishOp(O.assign,n+1):this.finishOp(r,n)},ne.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?this.finishOp(124===e?O.logicalOR:O.logicalAND,2):61===t?this.finishOp(O.assign,2):this.finishOp(124===e?O.bitwiseOR:O.bitwiseAND,1)},ne.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(O.assign,2):this.finishOp(O.bitwiseXOR,1)},ne.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?45==t&&62==this.input.charCodeAt(this.pos+2)&&F.test(this.input.slice(this.lastTokEnd,this.pos))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(O.incDec,2):61===t?this.finishOp(O.assign,2):this.finishOp(O.plusMin,1)},ne.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),n=1;return t===e?(n=62===e&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+n)?this.finishOp(O.assign,n+1):this.finishOp(O.bitShift,n)):33==t&&60==e&&45==this.input.charCodeAt(this.pos+2)&&45==this.input.charCodeAt(this.pos+3)?(this.inModule&&this.unexpected(),this.skipLineComment(4),this.skipSpace(),this.nextToken()):(61===t&&(n=2),this.finishOp(O.relational,n))},ne.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return 61===t?this.finishOp(O.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===e&&62===t&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(O.arrow)):this.finishOp(61===e?O.eq:O.prefix,1)},ne.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(O.parenL);case 41:return++this.pos,this.finishToken(O.parenR);case 59:return++this.pos,this.finishToken(O.semi);case 44:return++this.pos,this.finishToken(O.comma);case 91:return++this.pos,this.finishToken(O.bracketL);case 93:return++this.pos,this.finishToken(O.bracketR);case 123:return++this.pos,this.finishToken(O.braceL);case 125:return++this.pos,this.finishToken(O.braceR);case 58:return++this.pos,this.finishToken(O.colon);case 63:return++this.pos,this.finishToken(O.question);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(O.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(120===t||88===t)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===t||79===t)return this.readRadixNumber(8);if(98===t||66===t)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 126:return this.finishOp(O.prefix,1)}this.raise(this.pos,"Unexpected character '"+m(e)+"'")},ne.finishOp=function(e,t){var n=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,n)};var ie=!!d("￿","u");ne.readRegexp=function(){for(var e,t,n=this,r=this.pos;;){n.pos>=n.input.length&&n.raise(r,"Unterminated regular expression");var i=n.input.charAt(n.pos);if(F.test(i)&&n.raise(r,"Unterminated regular expression"),e)e=!1;else{if("["===i)t=!0;else if("]"===i&&t)t=!1;else if("/"===i&&!t)break;e="\\"===i}++n.pos}var o=this.input.slice(r,this.pos);++this.pos;var s=this.readWord1(),a=o,u="";if(s){var c=/^[gim]*$/;this.options.ecmaVersion>=6&&(c=/^[gimuy]*$/),c.test(s)||this.raise(r,"Invalid regular expression flag"),s.indexOf("u")>=0&&(ie?u="u":(a=(a=a.replace(/\\u\{([0-9a-fA-F]+)\}/g,function(e,t,i){return(t=Number("0x"+t))>1114111&&n.raise(r+i+3,"Code point out of bounds"),"x"})).replace(/\\u([a-fA-F0-9]{4})|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x"),u=u.replace("u","")))}var l=null;return re||(d(a,u,r,this),l=d(o,s)),this.finishToken(O.regexp,{pattern:o,flags:s,value:l})},ne.readInt=function(e,t){for(var n=this,r=this.pos,i=0,o=0,s=null==t?1/0:t;o<s;++o){var a,u=n.input.charCodeAt(n.pos);if((a=u>=97?u-97+10:u>=65?u-65+10:u>=48&&u<=57?u-48:1/0)>=e)break;++n.pos,i=i*e+a}return this.pos===r||null!=t&&this.pos-r!==t?null:i},ne.readRadixNumber=function(e){this.pos+=2;var t=this.readInt(e);return null==t&&this.raise(this.start+2,"Expected number in radix "+e),n(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(O.num,t)},ne.readNumber=function(e){var t=this.pos,r=!1,i=48===this.input.charCodeAt(this.pos);e||null!==this.readInt(10)||this.raise(t,"Invalid number"),i&&this.pos==t+1&&(i=!1);var o=this.input.charCodeAt(this.pos);46!==o||i||(++this.pos,this.readInt(10),r=!0,o=this.input.charCodeAt(this.pos)),69!==o&&101!==o||i||(43!==(o=this.input.charCodeAt(++this.pos))&&45!==o||++this.pos,null===this.readInt(10)&&this.raise(t,"Invalid number"),r=!0),n(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var s,a=this.input.slice(t,this.pos);return r?s=parseFloat(a):i&&1!==a.length?/[89]/.test(a)||this.strict?this.raise(t,"Invalid number"):s=parseInt(a,8):s=parseInt(a,10),this.finishToken(O.num,s)},ne.readCodePoint=function(){var e;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var t=++this.pos;e=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,e>1114111&&this.raise(t,"Code point out of bounds")}else e=this.readHexChar(4);return e},ne.readString=function(e){for(var t=this,n="",r=++this.pos;;){t.pos>=t.input.length&&t.raise(t.start,"Unterminated string constant");var i=t.input.charCodeAt(t.pos);if(i===e)break;92===i?(n+=t.input.slice(r,t.pos),n+=t.readEscapedChar(!1),r=t.pos):(s(i)&&t.raise(t.start,"Unterminated string constant"),++t.pos)}return n+=this.input.slice(r,this.pos++),this.finishToken(O.string,n)},ne.readTmplToken=function(){for(var e=this,t="",n=this.pos;;){e.pos>=e.input.length&&e.raise(e.start,"Unterminated template");var r=e.input.charCodeAt(e.pos);if(96===r||36===r&&123===e.input.charCodeAt(e.pos+1))return e.pos===e.start&&e.type===O.template?36===r?(e.pos+=2,e.finishToken(O.dollarBraceL)):(++e.pos,e.finishToken(O.backQuote)):(t+=e.input.slice(n,e.pos),e.finishToken(O.template,t));if(92===r)t+=e.input.slice(n,e.pos),t+=e.readEscapedChar(!0),n=e.pos;else if(s(r)){switch(t+=e.input.slice(n,e.pos),++e.pos,r){case 13:10===e.input.charCodeAt(e.pos)&&++e.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(r)}e.options.locations&&(++e.curLine,e.lineStart=e.pos),n=e.pos}else++e.pos}},ne.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return m(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";default:if(t>=48&&t<=55){var n=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],r=parseInt(n,8);return r>255&&(n=n.slice(0,-1),r=parseInt(n,8)),"0"!==n&&(this.strict||e)&&this.raise(this.pos-2,"Octal literal in strict mode"),this.pos+=n.length-1,String.fromCharCode(r)}return String.fromCharCode(t)}},ne.readHexChar=function(e){var t=this.pos,n=this.readInt(16,e);return null===n&&this.raise(t,"Bad character escape sequence"),n},ne.readWord1=function(){var e=this;this.containsEsc=!1;for(var t="",i=!0,o=this.pos,s=this.options.ecmaVersion>=6;this.pos<this.input.length;){var a=e.fullCharCodeAtPos();if(r(a,s))e.pos+=a<=65535?1:2;else{if(92!==a)break;e.containsEsc=!0,t+=e.input.slice(o,e.pos);var u=e.pos;117!=e.input.charCodeAt(++e.pos)&&e.raise(e.pos,"Expecting Unicode escape sequence \\uXXXX"),++e.pos;var c=e.readCodePoint();(i?n:r)(c,s)||e.raise(u,"Invalid Unicode escape"),t+=m(c),o=e.pos}i=!1}return t+this.input.slice(o,this.pos)},ne.readWord=function(){var e=this.readWord1(),t=O.name;return this.keywords.test(e)&&(this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+e),t=T[e]),this.finishToken(t,e)};e.version="4.0.11",e.parse=function(e,t){return new I(t,e).parse()},e.parseExpressionAt=function(e,t,n){var r=new I(n,e,t);return r.nextToken(),r.parseExpression()},e.tokenizer=function(e,t){return new I(t,e)},e.addLooseExports=function(t,n,r){e.parse_dammit=t,e.LooseParser=n,e.pluginsLoose=r},e.Parser=I,e.plugins=P,e.defaultOptions=R,e.Position=N,e.SourceLocation=M,e.getLineInfo=c,e.Node=K,e.TokenType=A,e.tokTypes=O,e.keywordTypes=T,e.TokContext=Q,e.tokContexts=Z,e.isIdentifierChar=r,e.isIdentifierStart=n,e.Token=te,e.isNewLine=s,e.lineBreak=F,e.lineBreakG=B,Object.defineProperty(e,"__esModule",{value:!0})})},{}],3:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n):"function"==typeof define&&define.amd?define(["exports"],r):r((e.acorn=e.acorn||{},e.acorn.walk=e.acorn.walk||{}))}(this,function(e){"use strict";function t(e){return"string"==typeof e?function(t){return t==e}:e||function(){return!0}}function n(e,t,n){n(e,t)}function r(e,t,n){}var i=function(e,t){this.node=e,this.state=t},o=Object.create||function(e){function t(){}return t.prototype=e,new t},s={};s.Program=s.BlockStatement=function(e,t,n){for(var r=0;r<e.body.length;++r)n(e.body[r],t,"Statement")},s.Statement=n,s.EmptyStatement=r,s.ExpressionStatement=s.ParenthesizedExpression=function(e,t,n){return n(e.expression,t,"Expression")},s.IfStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Statement"),e.alternate&&n(e.alternate,t,"Statement")},s.LabeledStatement=function(e,t,n){return n(e.body,t,"Statement")},s.BreakStatement=s.ContinueStatement=r,s.WithStatement=function(e,t,n){n(e.object,t,"Expression"),n(e.body,t,"Statement")},s.SwitchStatement=function(e,t,n){n(e.discriminant,t,"Expression");for(var r=0;r<e.cases.length;++r){var i=e.cases[r];i.test&&n(i.test,t,"Expression");for(var o=0;o<i.consequent.length;++o)n(i.consequent[o],t,"Statement")}},s.ReturnStatement=s.YieldExpression=s.AwaitExpression=function(e,t,n){e.argument&&n(e.argument,t,"Expression")},s.ThrowStatement=s.SpreadElement=function(e,t,n){return n(e.argument,t,"Expression")},s.TryStatement=function(e,t,n){n(e.block,t,"Statement"),e.handler&&n(e.handler,t),e.finalizer&&n(e.finalizer,t,"Statement")},s.CatchClause=function(e,t,n){n(e.param,t,"Pattern"),n(e.body,t,"ScopeBody")},s.WhileStatement=s.DoWhileStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.body,t,"Statement")},s.ForStatement=function(e,t,n){e.init&&n(e.init,t,"ForInit"),e.test&&n(e.test,t,"Expression"),e.update&&n(e.update,t,"Expression"),n(e.body,t,"Statement")},s.ForInStatement=s.ForOfStatement=function(e,t,n){n(e.left,t,"ForInit"),n(e.right,t,"Expression"),n(e.body,t,"Statement")},s.ForInit=function(e,t,n){"VariableDeclaration"==e.type?n(e,t):n(e,t,"Expression")},s.DebuggerStatement=r,s.FunctionDeclaration=function(e,t,n){return n(e,t,"Function")},s.VariableDeclaration=function(e,t,n){for(var r=0;r<e.declarations.length;++r)n(e.declarations[r],t)},s.VariableDeclarator=function(e,t,n){n(e.id,t,"Pattern"),e.init&&n(e.init,t,"Expression")},s.Function=function(e,t,n){e.id&&n(e.id,t,"Pattern");for(var r=0;r<e.params.length;r++)n(e.params[r],t,"Pattern");n(e.body,t,e.expression?"ScopeExpression":"ScopeBody")},s.ScopeBody=function(e,t,n){return n(e,t,"Statement")},s.ScopeExpression=function(e,t,n){return n(e,t,"Expression")},s.Pattern=function(e,t,n){"Identifier"==e.type?n(e,t,"VariablePattern"):"MemberExpression"==e.type?n(e,t,"MemberPattern"):n(e,t)},s.VariablePattern=r,s.MemberPattern=n,s.RestElement=function(e,t,n){return n(e.argument,t,"Pattern")},s.ArrayPattern=function(e,t,n){for(var r=0;r<e.elements.length;++r){var i=e.elements[r];i&&n(i,t,"Pattern")}},s.ObjectPattern=function(e,t,n){for(var r=0;r<e.properties.length;++r)n(e.properties[r].value,t,"Pattern")},s.Expression=n,s.ThisExpression=s.Super=s.MetaProperty=r,s.ArrayExpression=function(e,t,n){for(var r=0;r<e.elements.length;++r){var i=e.elements[r];i&&n(i,t,"Expression")}},s.ObjectExpression=function(e,t,n){for(var r=0;r<e.properties.length;++r)n(e.properties[r],t)},s.FunctionExpression=s.ArrowFunctionExpression=s.FunctionDeclaration,s.SequenceExpression=s.TemplateLiteral=function(e,t,n){for(var r=0;r<e.expressions.length;++r)n(e.expressions[r],t,"Expression")},s.UnaryExpression=s.UpdateExpression=function(e,t,n){n(e.argument,t,"Expression")},s.BinaryExpression=s.LogicalExpression=function(e,t,n){n(e.left,t,"Expression"),n(e.right,t,"Expression")},s.AssignmentExpression=s.AssignmentPattern=function(e,t,n){n(e.left,t,"Pattern"),n(e.right,t,"Expression")},s.ConditionalExpression=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Expression"),n(e.alternate,t,"Expression")},s.NewExpression=s.CallExpression=function(e,t,n){if(n(e.callee,t,"Expression"),e.arguments)for(var r=0;r<e.arguments.length;++r)n(e.arguments[r],t,"Expression")},s.MemberExpression=function(e,t,n){n(e.object,t,"Expression"),e.computed&&n(e.property,t,"Expression")},s.ExportNamedDeclaration=s.ExportDefaultDeclaration=function(e,t,n){e.declaration&&n(e.declaration,t,"ExportNamedDeclaration"==e.type||e.declaration.id?"Statement":"Expression"),e.source&&n(e.source,t,"Expression")},s.ExportAllDeclaration=function(e,t,n){n(e.source,t,"Expression")},s.ImportDeclaration=function(e,t,n){for(var r=0;r<e.specifiers.length;r++)n(e.specifiers[r],t);n(e.source,t,"Expression")},s.ImportSpecifier=s.ImportDefaultSpecifier=s.ImportNamespaceSpecifier=s.Identifier=s.Literal=r,s.TaggedTemplateExpression=function(e,t,n){n(e.tag,t,"Expression"),n(e.quasi,t)},s.ClassDeclaration=s.ClassExpression=function(e,t,n){return n(e,t,"Class")},s.Class=function(e,t,n){e.id&&n(e.id,t,"Pattern"),e.superClass&&n(e.superClass,t,"Expression");for(var r=0;r<e.body.body.length;r++)n(e.body.body[r],t)},s.MethodDefinition=s.Property=function(e,t,n){e.computed&&n(e.key,t,"Expression"),n(e.value,t,"Expression")},e.simple=function(t,n,r,i,o){r||(r=e.base),function e(t,i,o){var s=o||t.type,a=n[s];r[s](t,i,e),a&&a(t,i)}(t,i,o)},e.ancestor=function(t,n,r,i){r||(r=e.base);var o=[];!function e(t,i,s){var a=s||t.type,u=n[a],c=t!=o[o.length-1];c&&o.push(t),r[a](t,i,e),u&&u(t,i||o,o),c&&o.pop()}(t,i)},e.recursive=function(t,n,r,i,o){var s=r?e.make(r,i):i;!function e(t,n,r){s[r||t.type](t,n,e)}(t,n,o)},e.findNodeAt=function(n,r,o,s,a,u){s=t(s),a||(a=e.base);try{!function e(t,n,u){var c=u||t.type;if((null==r||t.start<=r)&&(null==o||t.end>=o)&&a[c](t,n,e),(null==r||t.start==r)&&(null==o||t.end==o)&&s(c,t))throw new i(t,n)}(n,u)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeAround=function(n,r,o,s,a){o=t(o),s||(s=e.base);try{!function e(t,n,a){var u=a||t.type;if(!(t.start>r||t.end<r)&&(s[u](t,n,e),o(u,t)))throw new i(t,n)}(n,a)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeAfter=function(n,r,o,s,a){o=t(o),s||(s=e.base);try{!function e(t,n,a){if(!(t.end<r)){var u=a||t.type;if(t.start>=r&&o(u,t))throw new i(t,n);s[u](t,n,e)}}(n,a)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeBefore=function(n,r,o,s,a){o=t(o),s||(s=e.base);var u;return function e(t,n,a){if(!(t.start>r)){var c=a||t.type;t.end<=r&&(!u||u.node.end<t.end)&&o(c,t)&&(u=new i(t,n)),s[c](t,n,e)}}(n,a),u},e.make=function(t,n){n||(n=e.base);var r=o(n);for(var i in t)r[i]=t[i];return r},e.base=s,Object.defineProperty(e,"__esModule",{value:!0})})},{}],4:[function(e,t,n){(function(n,r){"use strict";t.exports=function(t,i){function o(e){var t,n;for(t=0;e[t];t+=1)if("."===(n=e[t]))e.splice(t,1),t-=1;else if(".."===n){if(1===t&&(".."===e[2]||".."===e[0]))break;t>0&&(e.splice(t-1,2),t-=2)}}function s(e,t){var n;return e&&"."===e.charAt(0)&&t&&(o(n=(n=(n=t.split("/")).slice(0,n.length-1)).concat(e.split("/"))),e=n.join("/")),e}function a(e){return function(t){return s(t,e)}}function u(e){function t(t){d[e]=t}return t.fromText=function(e,t){throw new Error("amdefine does not implement load.fromText")},t}function c(e,n,o){var s,a,u,c;if(e)a=d[e]={},s=p(i,a,u={id:e,uri:r,exports:a},e);else{if(m)throw new Error("amdefine with no module ID cannot be called more than once per file.");m=!0,a=t.exports,s=p(i,a,u=t,t.id)}n&&(n=n.map(function(e){return s(e)})),void 0!==(c="function"==typeof o?o.apply(u.exports,n):o)&&(u.exports=c,e&&(d[e]=u.exports))}function l(e,t,n){Array.isArray(e)?(n=t,t=e,e=void 0):"string"!=typeof e&&(n=e,e=t=void 0),t&&!Array.isArray(t)&&(n=t,t=void 0),t||(t=["require","exports","module"]),e?f[e]=[e,t,n]:c(e,t,n)}var p,h,f={},d={},m=!1,g=e("path");return p=function(e,t,r,i){function o(o,s){if("string"==typeof o)return h(e,t,r,o,i);o=o.map(function(n){return h(e,t,r,n,i)}),s&&n.nextTick(function(){s.apply(null,o)})}return o.toUrl=function(e){return 0===e.indexOf(".")?s(e,g.dirname(r.filename)):e},o},i=i||function(){return t.require.apply(t,arguments)},h=function(e,t,n,r,i){var o,l,m=r.indexOf("!"),g=r;if(-1===m){if("require"===(r=s(r,i)))return p(e,t,n,i);if("exports"===r)return t;if("module"===r)return n;if(d.hasOwnProperty(r))return d[r];if(f[r])return c.apply(null,f[r]),d[r];if(e)return e(g);throw new Error("No module with ID: "+r)}return o=r.substring(0,m),r=r.substring(m+1,r.length),l=h(e,t,n,o,i),r=l.normalize?l.normalize(r,a(i)):s(r,i),d[r]?d[r]:(l.load(r,p(e,t,n,i),u(r),{}),d[r])},l.require=function(e){return d[e]?d[e]:f[e]?(c.apply(null,f[e]),d[e]):void 0},l.amd={},l}}).call(this,e("_process"),"/node_modules/amdefine/amdefine.js")},{_process:31,path:30}],5:[function(e,t,n){"use strict";function r(e){var t;(t=s.length?s.pop():new i).task=e,o(t)}function i(){this.task=null}var o=e("./raw"),s=[],a=[],u=o.makeRequestCallFromTimer(function(){if(a.length)throw a.shift()});t.exports=r,i.prototype.call=function(){try{this.task.call()}catch(e){r.onerror?r.onerror(e):(a.push(e),u())}finally{this.task=null,s[s.length]=this}}},{"./raw":6}],6:[function(e,t,n){(function(e){"use strict";function n(e){s.length||(o(),a=!0),s[s.length]=e}function r(){for(;u<s.length;){var e=u;if(u+=1,s[e].call(),u>c){for(var t=0,n=s.length-u;t<n;t++)s[t]=s[t+u];s.length-=u,u=0}}s.length=0,u=0,a=!1}function i(e){return function(){function t(){clearTimeout(n),clearInterval(r),e()}var n=setTimeout(t,0),r=setInterval(t,50)}}t.exports=n;var o,s=[],a=!1,u=0,c=1024,l=void 0!==e?e:self,p=l.MutationObserver||l.WebKitMutationObserver;o="function"==typeof p?function(e){var t=1,n=new p(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}(r):i(r),n.requestFlush=o,n.makeRequestCallFromTimer=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){(function(n){"use strict";function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0}function i(e){return n.Buffer&&"function"==typeof n.Buffer.isBuffer?n.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}function o(e){return Object.prototype.toString.call(e)}function s(e){return!i(e)&&("function"==typeof n.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}function a(e){if(_.isFunction(e)){if(k)return e.name;var t=e.toString().match(A);return t&&t[1]}}function u(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function c(e){if(k||!_.isFunction(e))return _.inspect(e);var t=a(e);return"[Function"+(t?": "+t:"")+"]"}function l(e){return u(c(e.actual),128)+" "+e.operator+" "+u(c(e.expected),128)}function p(e,t,n,r,i){throw new E.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}function h(e,t){e||p(e,!0,t,"==",E.ok)}function f(e,t,n,a){if(e===t)return!0;if(i(e)&&i(t))return 0===r(e,t);if(_.isDate(e)&&_.isDate(t))return e.getTime()===t.getTime();if(_.isRegExp(e)&&_.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(s(e)&&s(t)&&o(e)===o(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;var u=(a=a||{actual:[],expected:[]}).actual.indexOf(e);return-1!==u&&u===a.expected.indexOf(t)||(a.actual.push(e),a.expected.push(t),m(e,t,n,a))}return n?e===t:e==t}function d(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function m(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(_.isPrimitive(e)||_.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=d(e),o=d(t);if(i&&!o||!i&&o)return!1;if(i)return e=w.call(e),t=w.call(t),f(e,t,n);var s,a,u=C(e),c=C(t);if(u.length!==c.length)return!1;for(u.sort(),c.sort(),a=u.length-1;a>=0;a--)if(u[a]!==c[a])return!1;for(a=u.length-1;a>=0;a--)if(s=u[a],!f(e[s],t[s],n,r))return!1;return!0}function g(e,t,n){f(e,t,!0)&&p(e,t,n,"notDeepStrictEqual",g)}function v(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function y(e){var t;try{e()}catch(e){t=e}return t}function b(e,t,n,r){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=y(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!i&&p(i,n,"Missing expected exception"+r);var o="string"==typeof r,s=!e&&_.isError(i),a=!e&&i&&!n;if((s&&o&&v(i,n)||a)&&p(i,n,"Got unwanted exception"+r),e&&i&&n&&!v(i,n)||!e&&i)throw i}var _=e("util/"),x=Object.prototype.hasOwnProperty,w=Array.prototype.slice,k="foo"===function(){}.name,E=t.exports=h,A=/\s*function\s+([^\(\s]*)\s*/;E.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=l(this),this.generatedMessage=!0);var t=e.stackStartFunction||p;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var r=n.stack,i=a(t),o=r.indexOf("\n"+i);if(o>=0){var s=r.indexOf("\n",o+1);r=r.substring(s+1)}this.stack=r}}},_.inherits(E.AssertionError,Error),E.fail=p,E.ok=h,E.equal=function(e,t,n){e!=t&&p(e,t,n,"==",E.equal)},E.notEqual=function(e,t,n){e==t&&p(e,t,n,"!=",E.notEqual)},E.deepEqual=function(e,t,n){f(e,t,!1)||p(e,t,n,"deepEqual",E.deepEqual)},E.deepStrictEqual=function(e,t,n){f(e,t,!0)||p(e,t,n,"deepStrictEqual",E.deepStrictEqual)},E.notDeepEqual=function(e,t,n){f(e,t,!1)&&p(e,t,n,"notDeepEqual",E.notDeepEqual)},E.notDeepStrictEqual=g,E.strictEqual=function(e,t,n){e!==t&&p(e,t,n,"===",E.strictEqual)},E.notStrictEqual=function(e,t,n){e===t&&p(e,t,n,"!==",E.notStrictEqual)},E.throws=function(e,t,n){b(!0,e,t,n)},E.doesNotThrow=function(e,t,n){b(!1,e,t,n)},E.ifError=function(e){if(e)throw e};var C=Object.keys||function(e){var t=[];for(var n in e)x.call(e,n)&&t.push(n);return t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"util/":152}],8:[function(e,t,n){"use strict";function r(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function i(e){return s[e>>18&63]+s[e>>12&63]+s[e>>6&63]+s[63&e]}function o(e,t,n){for(var r,o=[],s=t;s<n;s+=3)r=(e[s]<<16)+(e[s+1]<<8)+e[s+2],o.push(i(r));return o.join("")}n.byteLength=function(e){return 3*e.length/4-r(e)},n.toByteArray=function(e){var t,n,i,o,s,c=e.length;o=r(e),s=new u(3*c/4-o),n=o>0?c-4:c;var l=0;for(t=0;t<n;t+=4)i=a[e.charCodeAt(t)]<<18|a[e.charCodeAt(t+1)]<<12|a[e.charCodeAt(t+2)]<<6|a[e.charCodeAt(t+3)],s[l++]=i>>16&255,s[l++]=i>>8&255,s[l++]=255&i;return 2===o?(i=a[e.charCodeAt(t)]<<2|a[e.charCodeAt(t+1)]>>4,s[l++]=255&i):1===o&&(i=a[e.charCodeAt(t)]<<10|a[e.charCodeAt(t+1)]<<4|a[e.charCodeAt(t+2)]>>2,s[l++]=i>>8&255,s[l++]=255&i),s},n.fromByteArray=function(e){for(var t,n=e.length,r=n%3,i="",a=[],u=0,c=n-r;u<c;u+=16383)a.push(o(e,u,u+16383>c?c:u+16383));return 1===r?(t=e[n-1],i+=s[t>>2],i+=s[t<<4&63],i+="=="):2===r&&(t=(e[n-2]<<8)+e[n-1],i+=s[t>>10],i+=s[t>>4&63],i+=s[t<<2&63],i+="="),a.push(i),a.join("")};for(var s=[],a=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,p=c.length;l<p;++l)s[l]=c[l],a[c.charCodeAt(l)]=l;a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63},{}],9:[function(e,t,n){},{}],10:[function(e,t,n){arguments[4][9][0].apply(n,arguments)},{dup:9}],11:[function(e,t,n){"use strict";function r(e){if(e>X)throw new RangeError("Invalid typed array length");var t=new Uint8Array(e);return t.__proto__=i.prototype,t}function i(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(e)}return o(e,t,n)}function o(e,t,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return q(e)?p(e,t,n):"string"==typeof e?c(e,t):h(e)}function s(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function a(e,t,n){return s(e),e<=0?r(e):void 0!==t?"string"==typeof n?r(e).fill(t,n):r(e).fill(t):r(e)}function u(e){return s(e),r(e<0?0:0|f(e))}function c(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!i.isEncoding(t))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,t),o=r(n),s=o.write(e,t);return s!==n&&(o=o.slice(0,s)),o}function l(e){for(var t=e.length<0?0:0|f(e.length),n=r(t),i=0;i<t;i+=1)n[i]=255&e[i];return n}function p(e,t,n){if(t<0||e.byteLength<t)throw new RangeError("'offset' is out of bounds");if(e.byteLength<t+(n||0))throw new RangeError("'length' is out of bounds");var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),r.__proto__=i.prototype,r}function h(e){if(i.isBuffer(e)){var t=0|f(e.length),n=r(t);return 0===n.length?n:(e.copy(n,0,0,t),n)}if(e){if(H(e)||"length"in e)return"number"!=typeof e.length||W(e.length)?r(0):l(e);if("Buffer"===e.type&&Array.isArray(e.data))return l(e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function f(e){if(e>=X)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+X.toString(16)+" bytes");return 0|e}function d(e,t){if(i.isBuffer(e))return e.length;if(H(e)||q(e))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return j(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return U(e).length;default:if(r)return j(e).length;t=(""+t).toLowerCase(),r=!0}}function m(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,t>>>=0,n<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,n);case"utf8":case"utf-8":return C(this,t,n);case"ascii":return T(this,t,n);case"latin1":case"binary":return O(this,t,n);case"base64":return A(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function g(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function v(e,t,n,r,o){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,W(n)&&(n=o?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof t&&(t=i.from(t,r)),i.isBuffer(t))return 0===t.length?-1:y(e,t,n,r,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):y(e,[t],n,r,o);throw new TypeError("val must be string, number or Buffer")}function y(e,t,n,r,i){function o(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}var s=1,a=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,u/=2,n/=2}var c;if(i){var l=-1;for(c=n;c<a;c++)if(o(e,c)===o(t,-1===l?0:c-l)){if(-1===l&&(l=c),c-l+1===u)return l*s}else-1!==l&&(c-=c-l),l=-1}else for(n+u>a&&(n=a-u),c=n;c>=0;c--){for(var p=!0,h=0;h<u;h++)if(o(e,c+h)!==o(t,h)){p=!1;break}if(p)return c}return-1}function b(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16);if(W(a))return s;e[n+s]=a}return s}function _(e,t,n,r){return $(j(t,e.length-n),e,n,r)}function x(e,t,n,r){return $(V(t),e,n,r)}function w(e,t,n,r){return x(e,t,n,r)}function k(e,t,n,r){return $(U(t),e,n,r)}function E(e,t,n,r){return $(z(t,e.length-n),e,n,r)}function A(e,t,n){return 0===t&&n===e.length?G.fromByteArray(e):G.fromByteArray(e.slice(t,n))}function C(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o=e[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a<=n){var u,c,l,p;switch(a){case 1:o<128&&(s=o);break;case 2:128==(192&(u=e[i+1]))&&(p=(31&o)<<6|63&u)>127&&(s=p);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(p=(15&o)<<12|(63&u)<<6|63&c)>2047&&(p<55296||p>57343)&&(s=p);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(p=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&p<1114112&&(s=p)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=a}return S(r)}function S(e){var t=e.length;if(t<=K)return String.fromCharCode.apply(String,e);for(var n="",r=0;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=K));return n}function T(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function O(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function F(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=I(e[o]);return i}function B(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function L(e,t,n,r,o,s){if(!i.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function N(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function M(e,t,n,r,i){return t=+t,n>>>=0,i||N(e,t,n,4,3.4028234663852886e38,-3.4028234663852886e38),Y.write(e,t,n,r,23,4),n+4}function R(e,t,n,r,i){return t=+t,n>>>=0,i||N(e,t,n,8,1.7976931348623157e308,-1.7976931348623157e308),Y.write(e,t,n,r,52,8),n+8}function P(e){if((e=e.trim().replace(J,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}function I(e){return e<16?"0"+e.toString(16):e.toString(16)}function j(e,t){t=t||1/0;for(var n,r=e.length,i=null,o=[],s=0;s<r;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function V(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function z(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i=n%256,o.push(i),o.push(r);return o}function U(e){return G.toByteArray(P(e))}function $(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function q(e){return e instanceof ArrayBuffer||null!=e&&null!=e.constructor&&"ArrayBuffer"===e.constructor.name&&"number"==typeof e.byteLength}function H(e){return"function"==typeof ArrayBuffer.isView&&ArrayBuffer.isView(e)}function W(e){return e!==e}var G=e("base64-js"),Y=e("ieee754");n.Buffer=i,n.SlowBuffer=function(e){return+e!=e&&(e=0),i.alloc(+e)},n.INSPECT_MAX_BYTES=50;var X=2147483647;n.kMaxLength=X,i.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()}catch(e){return!1}}(),i.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),i.poolSize=8192,i.from=function(e,t,n){return o(e,t,n)},i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,i.alloc=function(e,t,n){return a(e,t,n)},i.allocUnsafe=function(e){return u(e)},i.allocUnsafeSlow=function(e){return u(e)},i.isBuffer=function(e){return null!=e&&!0===e._isBuffer},i.compare=function(e,t){if(!i.isBuffer(e)||!i.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,o=0,s=Math.min(n,r);o<s;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0},i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return i.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=i.allocUnsafe(t),o=0;for(n=0;n<e.length;++n){var s=e[n];if(!i.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,o),o+=s.length}return r},i.byteLength=d,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},i.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},i.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},i.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?C(this,0,e):m.apply(this,arguments)},i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===i.compare(this,e)},i.prototype.inspect=function(){var e="",t=n.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},i.prototype.compare=function(e,t,n,r,o){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),t<0||n>e.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&t>=n)return 0;if(r>=o)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,o>>>=0,this===e)return 0;for(var s=o-r,a=n-t,u=Math.min(s,a),c=this.slice(r,o),l=e.slice(t,n),p=0;p<u;++p)if(c[p]!==l[p]){s=c[p],a=l[p];break}return s<a?-1:a<s?1:0},i.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},i.prototype.indexOf=function(e,t,n){return v(this,e,t,n,!0)},i.prototype.lastIndexOf=function(e,t,n){return v(this,e,t,n,!1)},i.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return b(this,e,t,n);case"utf8":case"utf-8":return _(this,e,t,n);case"ascii":return x(this,e,t,n);case"latin1":case"binary":return w(this,e,t,n);case"base64":return k(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var K=4096;i.prototype.slice=function(e,t){var n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return r.__proto__=i.prototype,r},i.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},i.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},i.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},i.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},i.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},i.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},i.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},i.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},i.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},i.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},i.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},i.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},i.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),Y.read(this,e,!0,23,4)},i.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),Y.read(this,e,!1,23,4)},i.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),Y.read(this,e,!0,52,8)},i.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),Y.read(this,e,!1,52,8)},i.prototype.writeUIntLE=function(e,t,n,r){e=+e,t>>>=0,n>>>=0,r||L(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},i.prototype.writeUIntBE=function(e,t,n,r){e=+e,t>>>=0,n>>>=0,r||L(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},i.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,1,255,0),this[t]=255&e,t+1},i.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},i.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},i.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},i.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},i.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);L(this,e,t,n,i-1,-i)}var o=0,s=1,a=0;for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},i.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var i=Math.pow(2,8*n-1);L(this,e,t,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n},i.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},i.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},i.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},i.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},i.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},i.prototype.writeFloatLE=function(e,t,n){return M(this,e,t,!0,n)},i.prototype.writeFloatBE=function(e,t,n){return M(this,e,t,!1,n)},i.prototype.writeDoubleLE=function(e,t,n){return R(this,e,t,!0,n)},i.prototype.writeDoubleBE=function(e,t,n){return R(this,e,t,!1,n)},i.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i,o=r-n;if(this===e&&n<t&&t<r)for(i=o-1;i>=0;--i)e[i+t]=this[i+n];else if(o<1e3)for(i=0;i<o;++i)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},i.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0);var s;if("number"==typeof e)for(s=t;s<n;++s)this[s]=e;else{var a=i.isBuffer(e)?e:new i(e,r),u=a.length;for(s=0;s<n-t;++s)this[s+t]=a[s%u]}return this};var J=/[^+/0-9A-Za-z-_]/g},{"base64-js":8,ieee754:21}],12:[function(e,t,n){"use strict";function r(e,t,r){r=r||{},t=t||n.defaultState();for(var o=r.start||0,s=r.end||e.length,a=o;a<s;){try{i(e[a],t)}catch(e){throw e.index=a,e}a++}return t}function i(e,t){if(1!==e.length)throw(o=new Error("Character must be a string of length 1")).name="InvalidArgumentError",o.code="CHARACTER_PARSER:CHAR_LENGTH_NOT_ONE",o;(t=t||n.defaultState()).src+=e;var r=t.isComment(),i=t.history?t.history[0]:"";switch(t.regexpStart&&("/"!==e&&"*"!=e||t.stack.pop(),t.regexpStart=!1),t.current()){case p.LINE_COMMENT:"\n"===e&&t.stack.pop();break;case p.BLOCK_COMMENT:"*"===t.lastChar&&"/"===e&&t.stack.pop();break;case p.SINGLE_QUOTE:"'"!==e||t.escaped?"\\"!==e||t.escaped?t.escaped=!1:t.escaped=!0:t.stack.pop();break;case p.DOUBLE_QUOTE:'"'!==e||t.escaped?"\\"!==e||t.escaped?t.escaped=!1:t.escaped=!0:t.stack.pop();break;case p.TEMPLATE_QUOTE:"`"!==e||t.escaped?"\\"!==e||t.escaped?"$"!==e||t.escaped?"{"===e&&t.hasDollar?t.stack.push(h[e]):(t.escaped=!1,t.hasDollar=!1):t.hasDollar=!0:(t.escaped=!0,t.hasDollar=!1):(t.stack.pop(),t.hasDollar=!1);break;case p.REGEXP:"/"!==e||t.escaped?"\\"!==e||t.escaped?t.escaped=!1:t.escaped=!0:t.stack.pop();break;default:if(e in h)t.stack.push(h[e]);else if(e in f){if(t.current()!==e){var o=new SyntaxError("Mismatched Bracket: "+e);throw o.code="CHARACTER_PARSER:MISMATCHED_BRACKET",o}t.stack.pop()}else"/"===i&&"/"===e?(t.history=t.history.substr(1),t.stack.push(p.LINE_COMMENT)):"/"===i&&"*"===e?(t.history=t.history.substr(1),t.stack.push(p.BLOCK_COMMENT)):"/"===e&&c(t.history)?(t.stack.push(p.REGEXP),t.regexpStart=!0):"'"===e?t.stack.push(p.SINGLE_QUOTE):'"'===e?t.stack.push(p.DOUBLE_QUOTE):"`"===e&&t.stack.push(p.TEMPLATE_QUOTE)}return t.isComment()||r||(t.history=e+t.history),t.lastChar=e,t}function o(){this.stack=[],this.regexpStart=!1,this.escaped=!1,this.hasDollar=!1,this.src="",this.history="",this.lastChar=""}function s(e,t,n){return l(t)?t.test(e.substr(n||0)):e.substr(n||0,t.length)===t}function a(e){if(!e)return!0;switch(e.charCodeAt(0)){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:case 126:case 37:case 38:case 42:case 43:case 45:case 47:case 60:case 62:case 94:case 124:case 33:case 61:return!0;default:return!1}}function u(e){return"if"===e||"in"===e||"do"===e||"var"===e||"for"===e||"new"===e||"try"===e||"let"===e||"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e||"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e||"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e||"default"===e||"finally"===e||"extends"===e||"function"===e||"continue"===e||"debugger"===e||"package"===e||"private"===e||"interface"===e||"instanceof"===e||"implements"===e||"protected"===e||"public"===e||"static"===e}function c(e){return!(")"===(e=e.replace(/^\s*/,""))[0]||"}"!==e[0]&&!a(e[0])&&(!/^\w+\b/.test(e)||!u(/^\w+\b/.exec(e)[0].split("").reverse().join(""))))}var l=e("is-regex"),p=(n=t.exports=r).TOKEN_TYPES={LINE_COMMENT:"//",BLOCK_COMMENT:"/**/",SINGLE_QUOTE:"'",DOUBLE_QUOTE:'"',TEMPLATE_QUOTE:"`",REGEXP:"//g"},h=n.BRACKETS={"(":")","{":"}","[":"]"},f={")":"(","}":"{","]":"["};n.parse=r,n.parseUntil=function(e,t,r){for(var o=(r=r||{}).start||0,a=o,u=n.defaultState();a<e.length;){if((r.ignoreNesting||!u.isNesting(r))&&s(e,t,a)){var c=a;return{start:o,end:c,src:e.substring(o,c)}}try{i(e[a],u)}catch(e){throw e.index=a,e}a++}var l=new Error("The end of the string was reached with no closing bracket found.");throw l.code="CHARACTER_PARSER:END_OF_STRING_REACHED",l.index=a,l},n.parseChar=i,n.defaultState=function(){return new o},o.prototype.current=function(){return this.stack[this.stack.length-1]},o.prototype.isString=function(){return this.current()===p.SINGLE_QUOTE||this.current()===p.DOUBLE_QUOTE||this.current()===p.TEMPLATE_QUOTE},o.prototype.isComment=function(){return this.current()===p.LINE_COMMENT||this.current()===p.BLOCK_COMMENT},o.prototype.isNesting=function(e){return(!e||!e.ignoreLineComment||1!==this.stack.length||this.stack[0]!==p.LINE_COMMENT)&&!!this.stack.length},n.isPunctuator=a,n.isKeyword=u},{"is-regex":25}],13:[function(e,t,n){"use strict";function r(e,t){if(e="("+e+")",a===e&&c===t)return u;if(a=e,c=t,!s(e))return u=!1;var n;try{n=i.parse(e,{ecmaVersion:6,allowReturnOutsideFunction:!0,allowImportExportEverywhere:!0,allowHashBang:!0})}catch(e){return u=!1}var r=!0;return o.simple(n,{Statement:function(e){r&&!0!==l[e.type]&&(r=!1)},Expression:function(e){r&&!0!==p[e.type]&&(r=!1)},MemberExpression:function(e){r&&(e.computed?r=!1:"_"===e.property.name[0]&&(r=!1))},Identifier:function(e){r&&(t&&e.name in t||(r=!1))}}),u=r}var i=e("acorn"),o=e("acorn/dist/walk"),s=e("is-expression"),a="(null)",u=!0,c=void 0,l={EmptyStatement:!0,ExpressionStatement:!0},p={ParenthesizedExpression:!0,ArrayExpression:!0,ObjectExpression:!0,SequenceExpression:!0,TemplateLiteral:!0,UnaryExpression:!0,BinaryExpression:!0,LogicalExpression:!0,ConditionalExpression:!0,Identifier:!0,Literal:!0,ComprehensionExpression:!0,TaggedTemplateExpression:!0,MemberExpression:!0,CallExpression:!0,NewExpression:!0};t.exports=r,r.isConstant=r,r.toConstant=function(e,t){if(!r(e,t))throw new Error(JSON.stringify(e)+" is not constant.");return Function(Object.keys(t||{}).join(","),"return ("+e+")").apply(null,Object.keys(t||{}).map(function(e){return t[e]}))}},{acorn:14,"acorn/dist/walk":15,"is-expression":16}],14:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n):"function"==typeof define&&define.amd?define(["exports"],r):r(e.acorn=e.acorn||{})}(this,function(e){"use strict";function t(e,t){for(var n=65536,r=0;r<t.length;r+=2){if((n+=t[r])>e)return!1;if((n+=t[r+1])>=e)return!0}}function n(e,n){return e<65?36===e:e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&x.test(String.fromCharCode(e)):!1!==n&&t(e,k)))}function r(e,n){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||(e<=65535?e>=170&&w.test(String.fromCharCode(e)):!1!==n&&(t(e,k)||t(e,E)))))}function i(e,t){return new A(e,{beforeExpr:!0,binop:t})}function o(e,t){return void 0===t&&(t={}),t.keyword=e,T[e]=new A(e,t)}function s(e){return 10===e||13===e||8232===e||8233==e}function a(e){return"[object Array]"===Object.prototype.toString.call(e)}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n=1,r=0;;){B.lastIndex=r;var i=B.exec(e);if(!(i&&i.index<t))return new N(n,t-r);++n,r=i.index+i[0].length}}function l(e){var t={};for(var n in R)t[n]=e&&u(e,n)?e[n]:R[n];if(null==t.allowReserved&&(t.allowReserved=t.ecmaVersion<5),a(t.onToken)){var r=t.onToken;t.onToken=function(e){return r.push(e)}}return a(t.onComment)&&(t.onComment=p(t,t.onComment)),t}function p(e,t){return function(n,r,i,o,s,a){var u={type:n?"Block":"Line",value:r,start:i,end:o};e.locations&&(u.loc=new M(this,s,a)),e.ranges&&(u.range=[i,o]),t.push(u)}}function h(e){return new RegExp("^("+e.replace(/ /g,"|")+")$")}function f(e,t,n,r){return e.type=t,e.end=n,this.options.locations&&(e.loc.end=r),this.options.ranges&&(e.range[1]=n),e}function d(e,t,n,r){try{return new RegExp(e,t)}catch(e){if(void 0!==n)throw e instanceof SyntaxError&&r.raise(n,"Error parsing regular expression: "+e.message),e}}function m(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e)))}var g={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",7:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},v="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",y={5:v,6:v+" const class extends export import super"},b="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",_="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",x=new RegExp("["+b+"]"),w=new RegExp("["+b+_+"]");b=_=null;var k=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,17,26,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,26,45,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,785,52,76,44,33,24,27,35,42,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,25,391,63,32,0,449,56,264,8,2,36,18,0,50,29,881,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,881,68,12,0,67,12,65,0,32,6124,20,754,9486,1,3071,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,10591,541],E=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,1306,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,52,0,13,2,49,13,10,2,4,9,83,11,7,0,161,11,6,9,7,3,57,0,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,87,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,423,9,838,7,2,7,17,9,57,21,2,13,19882,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239],A=function(e,t){void 0===t&&(t={}),this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop||null,this.updateContext=null},C={beforeExpr:!0},S={startsExpr:!0},T={},O={num:new A("num",S),regexp:new A("regexp",S),string:new A("string",S),name:new A("name",S),eof:new A("eof"),bracketL:new A("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new A("]"),braceL:new A("{",{beforeExpr:!0,startsExpr:!0}),braceR:new A("}"),parenL:new A("(",{beforeExpr:!0,startsExpr:!0}),parenR:new A(")"),comma:new A(",",C),semi:new A(";",C),colon:new A(":",C),dot:new A("."),question:new A("?",C),arrow:new A("=>",C),template:new A("template"),ellipsis:new A("...",C),backQuote:new A("`",S),dollarBraceL:new A("${",{beforeExpr:!0,startsExpr:!0}),eq:new A("=",{beforeExpr:!0,isAssign:!0}),assign:new A("_=",{beforeExpr:!0,isAssign:!0}),incDec:new A("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new A("prefix",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:i("||",1),logicalAND:i("&&",2),bitwiseOR:i("|",3),bitwiseXOR:i("^",4),bitwiseAND:i("&",5),equality:i("==/!=",6),relational:i("</>",7),bitShift:i("<</>>",8),plusMin:new A("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:i("%",10),star:i("*",10),slash:i("/",10),starstar:new A("**",{beforeExpr:!0}),_break:o("break"),_case:o("case",C),_catch:o("catch"),_continue:o("continue"),_debugger:o("debugger"),_default:o("default",C),_do:o("do",{isLoop:!0,beforeExpr:!0}),_else:o("else",C),_finally:o("finally"),_for:o("for",{isLoop:!0}),_function:o("function",S),_if:o("if"),_return:o("return",C),_switch:o("switch"),_throw:o("throw",C),_try:o("try"),_var:o("var"),_const:o("const"),_while:o("while",{isLoop:!0}),_with:o("with"),_new:o("new",{beforeExpr:!0,startsExpr:!0}),_this:o("this",S),_super:o("super",S),_class:o("class"),_extends:o("extends",C),_export:o("export"),_import:o("import"),_null:o("null",S),_true:o("true",S),_false:o("false",S),_in:o("in",{beforeExpr:!0,binop:7}),_instanceof:o("instanceof",{beforeExpr:!0,binop:7}),_typeof:o("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:o("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:o("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},F=/\r\n?|\n|\u2028|\u2029/,B=new RegExp(F.source,"g"),D=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,L=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,N=function(e,t){this.line=e,this.column=t};N.prototype.offset=function(e){return new N(this.line,this.column+e)};var M=function(e,t,n){this.start=t,this.end=n,null!==e.sourceFile&&(this.source=e.sourceFile)},R={ecmaVersion:6,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1,plugins:{}},P={},I=function(e,t,n){this.options=e=l(e),this.sourceFile=e.sourceFile,this.keywords=h(y[e.ecmaVersion>=6?6:5]);var r=e.allowReserved?"":g[e.ecmaVersion]+("module"==e.sourceType?" await":"");this.reservedWords=h(r);var i=(r?r+" ":"")+g.strict;this.reservedWordsStrict=h(i),this.reservedWordsStrictBind=h(i+" "+g.strictBind),this.input=String(t),this.containsEsc=!1,this.loadPlugins(e.plugins),n?(this.pos=n,this.lineStart=Math.max(0,this.input.lastIndexOf("\n",n)),this.curLine=this.input.slice(0,this.lineStart).split(F).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=O.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.strict=this.inModule="module"===e.sourceType,this.potentialArrowAt=-1,this.inFunction=this.inGenerator=!1,this.labels=[],0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2)};I.prototype.isKeyword=function(e){return this.keywords.test(e)},I.prototype.isReservedWord=function(e){return this.reservedWords.test(e)},I.prototype.extend=function(e,t){this[e]=t(this[e])},I.prototype.loadPlugins=function(e){var t=this;for(var n in e){var r=P[n];if(!r)throw new Error("Plugin '"+n+"' not found");r(t,e[n])}},I.prototype.parse=function(){var e=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(e)};var j=I.prototype;j.isUseStrict=function(e){return this.options.ecmaVersion>=5&&"ExpressionStatement"===e.type&&"Literal"===e.expression.type&&"use strict"===e.expression.raw.slice(1,-1)},j.eat=function(e){return this.type===e&&(this.next(),!0)},j.isContextual=function(e){return this.type===O.name&&this.value===e},j.eatContextual=function(e){return this.value===e&&this.eat(O.name)},j.expectContextual=function(e){this.eatContextual(e)||this.unexpected()},j.canInsertSemicolon=function(){return this.type===O.eof||this.type===O.braceR||F.test(this.input.slice(this.lastTokEnd,this.start))},j.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},j.semicolon=function(){this.eat(O.semi)||this.insertSemicolon()||this.unexpected()},j.afterTrailingComma=function(e){if(this.type==e)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),this.next(),!0},j.expect=function(e){this.eat(e)||this.unexpected()},j.unexpected=function(e){this.raise(null!=e?e:this.start,"Unexpected token")};var V=function(){this.shorthandAssign=0,this.trailingComma=0};j.checkPatternErrors=function(e,t){var n=e&&e.trailingComma;if(!t)return!!n;n&&this.raise(n,"Comma is not permitted after the rest element")},j.checkExpressionErrors=function(e,t){var n=e&&e.shorthandAssign;if(!t)return!!n;n&&this.raise(n,"Shorthand property assignments are valid only in destructuring patterns")};var z=I.prototype;z.parseTopLevel=function(e){var t=this,n=!0;for(e.body||(e.body=[]);this.type!==O.eof;){var r=t.parseStatement(!0,!0);e.body.push(r),n&&(t.isUseStrict(r)&&t.setStrict(!0),n=!1)}return this.next(),this.options.ecmaVersion>=6&&(e.sourceType=this.options.sourceType),this.finishNode(e,"Program")};var U={kind:"loop"},$={kind:"switch"};z.isLet=function(){if(this.type!==O.name||this.options.ecmaVersion<6||"let"!=this.value)return!1;L.lastIndex=this.pos;var e=L.exec(this.input),t=this.pos+e[0].length,i=this.input.charCodeAt(t);if(91===i||123==i)return!0;if(n(i,!0)){for(var o=t+1;r(this.input.charCodeAt(o),!0);++o);var s=this.input.slice(t,o);if(!this.isKeyword(s))return!0}return!1},z.parseStatement=function(e,t){var n,r=this.type,i=this.startNode();switch(this.isLet()&&(r=O._var,n="let"),r){case O._break:case O._continue:return this.parseBreakContinueStatement(i,r.keyword);case O._debugger:return this.parseDebuggerStatement(i);case O._do:return this.parseDoStatement(i);case O._for:return this.parseForStatement(i);case O._function:return!e&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(i);case O._class:return e||this.unexpected(),this.parseClass(i,!0);case O._if:return this.parseIfStatement(i);case O._return:return this.parseReturnStatement(i);case O._switch:return this.parseSwitchStatement(i);case O._throw:return this.parseThrowStatement(i);case O._try:return this.parseTryStatement(i);case O._const:case O._var:return n=n||this.value,e||"var"==n||this.unexpected(),this.parseVarStatement(i,n);case O._while:return this.parseWhileStatement(i);case O._with:return this.parseWithStatement(i);case O.braceL:return this.parseBlock();case O.semi:return this.parseEmptyStatement(i);case O._export:case O._import:return this.options.allowImportExportEverywhere||(t||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),r===O._import?this.parseImport(i):this.parseExport(i);default:var o=this.value,s=this.parseExpression();return r===O.name&&"Identifier"===s.type&&this.eat(O.colon)?this.parseLabeledStatement(i,o,s):this.parseExpressionStatement(i,s)}},z.parseBreakContinueStatement=function(e,t){var n=this,r="break"==t;this.next(),this.eat(O.semi)||this.insertSemicolon()?e.label=null:this.type!==O.name?this.unexpected():(e.label=this.parseIdent(),this.semicolon());for(var i=0;i<this.labels.length;++i){var o=n.labels[i];if(null==e.label||o.name===e.label.name){if(null!=o.kind&&(r||"loop"===o.kind))break;if(e.label&&r)break}}return i===this.labels.length&&this.raise(e.start,"Unsyntactic "+t),this.finishNode(e,r?"BreakStatement":"ContinueStatement")},z.parseDebuggerStatement=function(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")},z.parseDoStatement=function(e){return this.next(),this.labels.push(U),e.body=this.parseStatement(!1),this.labels.pop(),this.expect(O._while),e.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(O.semi):this.semicolon(),this.finishNode(e,"DoWhileStatement")},z.parseForStatement=function(e){if(this.next(),this.labels.push(U),this.expect(O.parenL),this.type===O.semi)return this.parseFor(e,null);var t=this.isLet();if(this.type===O._var||this.type===O._const||t){var n=this.startNode(),r=t?"let":this.value;return this.next(),this.parseVar(n,!0,r),this.finishNode(n,"VariableDeclaration"),!(this.type===O._in||this.options.ecmaVersion>=6&&this.isContextual("of"))||1!==n.declarations.length||"var"!==r&&n.declarations[0].init?this.parseFor(e,n):this.parseForIn(e,n)}var i=new V,o=this.parseExpression(!0,i);return this.type===O._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.checkPatternErrors(i,!0),this.toAssignable(o),this.checkLVal(o),this.parseForIn(e,o)):(this.checkExpressionErrors(i,!0),this.parseFor(e,o))},z.parseFunctionStatement=function(e){return this.next(),this.parseFunction(e,!0)},z.parseIfStatement=function(e){return this.next(),e.test=this.parseParenExpression(),e.consequent=this.parseStatement(!1),e.alternate=this.eat(O._else)?this.parseStatement(!1):null,this.finishNode(e,"IfStatement")},z.parseReturnStatement=function(e){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(O.semi)||this.insertSemicolon()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")},z.parseSwitchStatement=function(e){var t=this;this.next(),e.discriminant=this.parseParenExpression(),e.cases=[],this.expect(O.braceL),this.labels.push($);for(var n,r=!1;this.type!=O.braceR;)if(t.type===O._case||t.type===O._default){var i=t.type===O._case;n&&t.finishNode(n,"SwitchCase"),e.cases.push(n=t.startNode()),n.consequent=[],t.next(),i?n.test=t.parseExpression():(r&&t.raiseRecoverable(t.lastTokStart,"Multiple default clauses"),r=!0,n.test=null),t.expect(O.colon)}else n||t.unexpected(),n.consequent.push(t.parseStatement(!0));return n&&this.finishNode(n,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(e,"SwitchStatement")},z.parseThrowStatement=function(e){return this.next(),F.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")};var q=[];z.parseTryStatement=function(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.type===O._catch){var t=this.startNode();this.next(),this.expect(O.parenL),t.param=this.parseBindingAtom(),this.checkLVal(t.param,!0),this.expect(O.parenR),t.body=this.parseBlock(),e.handler=this.finishNode(t,"CatchClause")}return e.finalizer=this.eat(O._finally)?this.parseBlock():null,e.handler||e.finalizer||this.raise(e.start,"Missing catch or finally clause"),this.finishNode(e,"TryStatement")},z.parseVarStatement=function(e,t){return this.next(),this.parseVar(e,!1,t),this.semicolon(),this.finishNode(e,"VariableDeclaration")},z.parseWhileStatement=function(e){return this.next(),e.test=this.parseParenExpression(),this.labels.push(U),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,"WhileStatement")},z.parseWithStatement=function(e){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),e.object=this.parseParenExpression(),e.body=this.parseStatement(!1),this.finishNode(e,"WithStatement")},z.parseEmptyStatement=function(e){return this.next(),this.finishNode(e,"EmptyStatement")},z.parseLabeledStatement=function(e,t,n){for(var r=this,i=0;i<this.labels.length;++i)r.labels[i].name===t&&r.raise(n.start,"Label '"+t+"' is already declared");for(var o=this.type.isLoop?"loop":this.type===O._switch?"switch":null,s=this.labels.length-1;s>=0;s--){var a=r.labels[s];if(a.statementStart!=e.start)break;a.statementStart=r.start,a.kind=o}return this.labels.push({name:t,kind:o,statementStart:this.start}),e.body=this.parseStatement(!0),this.labels.pop(),e.label=n,this.finishNode(e,"LabeledStatement")},z.parseExpressionStatement=function(e,t){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")},z.parseBlock=function(e){var t,n=this,r=this.startNode(),i=!0;for(r.body=[],this.expect(O.braceL);!this.eat(O.braceR);){var o=n.parseStatement(!0);r.body.push(o),i&&e&&n.isUseStrict(o)&&(t=n.strict,n.setStrict(n.strict=!0)),i=!1}return!1===t&&this.setStrict(!1),this.finishNode(r,"BlockStatement")},z.parseFor=function(e,t){return e.init=t,this.expect(O.semi),e.test=this.type===O.semi?null:this.parseExpression(),this.expect(O.semi),e.update=this.type===O.parenR?null:this.parseExpression(),this.expect(O.parenR),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,"ForStatement")},z.parseForIn=function(e,t){var n=this.type===O._in?"ForInStatement":"ForOfStatement";return this.next(),e.left=t,e.right=this.parseExpression(),this.expect(O.parenR),e.body=this.parseStatement(!1),this.labels.pop(),this.finishNode(e,n)},z.parseVar=function(e,t,n){var r=this;for(e.declarations=[],e.kind=n;;){var i=r.startNode();if(r.parseVarId(i),r.eat(O.eq)?i.init=r.parseMaybeAssign(t):"const"!==n||r.type===O._in||r.options.ecmaVersion>=6&&r.isContextual("of")?"Identifier"==i.id.type||t&&(r.type===O._in||r.isContextual("of"))?i.init=null:r.raise(r.lastTokEnd,"Complex binding patterns require an initialization value"):r.unexpected(),e.declarations.push(r.finishNode(i,"VariableDeclarator")),!r.eat(O.comma))break}return e},z.parseVarId=function(e){e.id=this.parseBindingAtom(),this.checkLVal(e.id,!0)},z.parseFunction=function(e,t,n){this.initFunction(e),this.options.ecmaVersion>=6&&(e.generator=this.eat(O.star));var r=this.inGenerator;return this.inGenerator=e.generator,(t||this.type===O.name)&&(e.id=this.parseIdent()),this.parseFunctionParams(e),this.parseFunctionBody(e,n),this.inGenerator=r,this.finishNode(e,t?"FunctionDeclaration":"FunctionExpression")},z.parseFunctionParams=function(e){this.expect(O.parenL),e.params=this.parseBindingList(O.parenR,!1,!1,!0)},z.parseClass=function(e,t){var n=this;this.next(),this.parseClassId(e,t),this.parseClassSuper(e);var r=this.startNode(),i=!1;for(r.body=[],this.expect(O.braceL);!this.eat(O.braceR);)if(!n.eat(O.semi)){var o=n.startNode(),s=n.eat(O.star),a=n.type===O.name&&"static"===n.value;n.parsePropertyName(o),o.static=a&&n.type!==O.parenL,o.static&&(s&&n.unexpected(),s=n.eat(O.star),n.parsePropertyName(o)),o.kind="method";var u=!1;if(!o.computed){var c=o.key;s||"Identifier"!==c.type||n.type===O.parenL||"get"!==c.name&&"set"!==c.name||(u=!0,o.kind=c.name,c=n.parsePropertyName(o)),!o.static&&("Identifier"===c.type&&"constructor"===c.name||"Literal"===c.type&&"constructor"===c.value)&&(i&&n.raise(c.start,"Duplicate constructor in the same class"),u&&n.raise(c.start,"Constructor can't have get/set modifier"),s&&n.raise(c.start,"Constructor can't be a generator"),o.kind="constructor",i=!0)}if(n.parseClassMethod(r,o,s),u){var l="get"===o.kind?0:1;if(o.value.params.length!==l){var p=o.value.start;"get"===o.kind?n.raiseRecoverable(p,"getter should have no params"):n.raiseRecoverable(p,"setter should have exactly one param")}"set"===o.kind&&"RestElement"===o.value.params[0].type&&n.raise(o.value.params[0].start,"Setter cannot use rest params")}}return e.body=this.finishNode(r,"ClassBody"),this.finishNode(e,t?"ClassDeclaration":"ClassExpression")},z.parseClassMethod=function(e,t,n){t.value=this.parseMethod(n),e.body.push(this.finishNode(t,"MethodDefinition"))},z.parseClassId=function(e,t){e.id=this.type===O.name?this.parseIdent():t?this.unexpected():null},z.parseClassSuper=function(e){e.superClass=this.eat(O._extends)?this.parseExprSubscripts():null},z.parseExport=function(e){var t=this;if(this.next(),this.eat(O.star))return this.expectContextual("from"),e.source=this.type===O.string?this.parseExprAtom():this.unexpected(),this.semicolon(),this.finishNode(e,"ExportAllDeclaration");if(this.eat(O._default)){var n=this.type==O.parenL,r=this.parseMaybeAssign(),i=!0;return n||"FunctionExpression"!=r.type&&"ClassExpression"!=r.type||(i=!1,r.id&&(r.type="FunctionExpression"==r.type?"FunctionDeclaration":"ClassDeclaration")),e.declaration=r,i&&this.semicolon(),this.finishNode(e,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())e.declaration=this.parseStatement(!0),e.specifiers=[],e.source=null;else{if(e.declaration=null,e.specifiers=this.parseExportSpecifiers(),this.eatContextual("from"))e.source=this.type===O.string?this.parseExprAtom():this.unexpected();else{for(var o=0;o<e.specifiers.length;o++)(t.keywords.test(e.specifiers[o].local.name)||t.reservedWords.test(e.specifiers[o].local.name))&&t.unexpected(e.specifiers[o].local.start);e.source=null}this.semicolon()}return this.finishNode(e,"ExportNamedDeclaration")},z.shouldParseExportStatement=function(){return this.type.keyword||this.isLet()},z.parseExportSpecifiers=function(){var e=this,t=[],n=!0;for(this.expect(O.braceL);!this.eat(O.braceR);){if(n)n=!1;else if(e.expect(O.comma),e.afterTrailingComma(O.braceR))break;var r=e.startNode();r.local=e.parseIdent(e.type===O._default),r.exported=e.eatContextual("as")?e.parseIdent(!0):r.local,t.push(e.finishNode(r,"ExportSpecifier"))}return t},z.parseImport=function(e){return this.next(),this.type===O.string?(e.specifiers=q,e.source=this.parseExprAtom()):(e.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),e.source=this.type===O.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(e,"ImportDeclaration")},z.parseImportSpecifiers=function(){var e=this,t=[],n=!0;if(this.type===O.name){var r=this.startNode();if(r.local=this.parseIdent(),this.checkLVal(r.local,!0),t.push(this.finishNode(r,"ImportDefaultSpecifier")),!this.eat(O.comma))return t}if(this.type===O.star){var i=this.startNode();return this.next(),this.expectContextual("as"),i.local=this.parseIdent(),this.checkLVal(i.local,!0),t.push(this.finishNode(i,"ImportNamespaceSpecifier")),t}for(this.expect(O.braceL);!this.eat(O.braceR);){if(n)n=!1;else if(e.expect(O.comma),e.afterTrailingComma(O.braceR))break;var o=e.startNode();o.imported=e.parseIdent(!0),e.eatContextual("as")?o.local=e.parseIdent():(o.local=o.imported,e.isKeyword(o.local.name)&&e.unexpected(o.local.start),e.reservedWordsStrict.test(o.local.name)&&e.raise(o.local.start,"The keyword '"+o.local.name+"' is reserved")),e.checkLVal(o.local,!0),t.push(e.finishNode(o,"ImportSpecifier"))}return t};var H=I.prototype;H.toAssignable=function(e,t){var n=this;if(this.options.ecmaVersion>=6&&e)switch(e.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":break;case"ObjectExpression":e.type="ObjectPattern";for(var r=0;r<e.properties.length;r++){var i=e.properties[r];"init"!==i.kind&&n.raise(i.key.start,"Object pattern can't contain getter or setter"),n.toAssignable(i.value,t)}break;case"ArrayExpression":e.type="ArrayPattern",this.toAssignableList(e.elements,t);break;case"AssignmentExpression":if("="!==e.operator){this.raise(e.left.end,"Only '=' operator can be used for specifying default value.");break}e.type="AssignmentPattern",delete e.operator;case"AssignmentPattern":"YieldExpression"===e.right.type&&this.raise(e.right.start,"Yield expression cannot be a default value");break;case"ParenthesizedExpression":e.expression=this.toAssignable(e.expression,t);break;case"MemberExpression":if(!t)break;default:this.raise(e.start,"Assigning to rvalue")}return e},H.toAssignableList=function(e,t){var n=this,r=e.length;if(r){var i=e[r-1];if(i&&"RestElement"==i.type)--r;else if(i&&"SpreadElement"==i.type){i.type="RestElement";var o=i.argument;this.toAssignable(o,t),"Identifier"!==o.type&&"MemberExpression"!==o.type&&"ArrayPattern"!==o.type&&this.unexpected(o.start),--r}t&&i&&"RestElement"===i.type&&"Identifier"!==i.argument.type&&this.unexpected(i.argument.start)}for(var s=0;s<r;s++){var a=e[s];a&&n.toAssignable(a,t)}return e},H.parseSpread=function(e){var t=this.startNode();return this.next(),t.argument=this.parseMaybeAssign(!1,e),this.finishNode(t,"SpreadElement")},H.parseRest=function(e){var t=this.startNode();return this.next(),t.argument=e?this.type===O.name?this.parseIdent():this.unexpected():this.type===O.name||this.type===O.bracketL?this.parseBindingAtom():this.unexpected(),this.finishNode(t,"RestElement")},H.parseBindingAtom=function(){if(this.options.ecmaVersion<6)return this.parseIdent();switch(this.type){case O.name:return this.parseIdent();case O.bracketL:var e=this.startNode();return this.next(),e.elements=this.parseBindingList(O.bracketR,!0,!0),this.finishNode(e,"ArrayPattern");case O.braceL:return this.parseObj(!0);default:this.unexpected()}},H.parseBindingList=function(e,t,n,r){for(var i=this,o=[],s=!0;!this.eat(e);)if(s?s=!1:i.expect(O.comma),t&&i.type===O.comma)o.push(null);else{if(n&&i.afterTrailingComma(e))break;if(i.type===O.ellipsis){var a=i.parseRest(r);i.parseBindingListItem(a),o.push(a),i.type===O.comma&&i.raise(i.start,"Comma is not permitted after the rest element"),i.expect(e);break}var u=i.parseMaybeDefault(i.start,i.startLoc);i.parseBindingListItem(u),o.push(u)}return o},H.parseBindingListItem=function(e){return e},H.parseMaybeDefault=function(e,t,n){if(n=n||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(O.eq))return n;var r=this.startNodeAt(e,t);return r.left=n,r.right=this.parseMaybeAssign(),this.finishNode(r,"AssignmentPattern")},H.checkLVal=function(e,t,n){var r=this;switch(e.type){case"Identifier":this.strict&&this.reservedWordsStrictBind.test(e.name)&&this.raiseRecoverable(e.start,(t?"Binding ":"Assigning to ")+e.name+" in strict mode"),n&&(u(n,e.name)&&this.raiseRecoverable(e.start,"Argument name clash"),n[e.name]=!0);break;case"MemberExpression":t&&this.raiseRecoverable(e.start,(t?"Binding":"Assigning to")+" member expression");break;case"ObjectPattern":for(var i=0;i<e.properties.length;i++)r.checkLVal(e.properties[i].value,t,n);break;case"ArrayPattern":for(var o=0;o<e.elements.length;o++){var s=e.elements[o];s&&r.checkLVal(s,t,n)}break;case"AssignmentPattern":this.checkLVal(e.left,t,n);break;case"RestElement":this.checkLVal(e.argument,t,n);break;case"ParenthesizedExpression":this.checkLVal(e.expression,t,n);break;default:this.raise(e.start,(t?"Binding":"Assigning to")+" rvalue")}};var W=I.prototype;W.checkPropClash=function(e,t){if(!(this.options.ecmaVersion>=6&&(e.computed||e.method||e.shorthand))){var n,r=e.key;switch(r.type){case"Identifier":n=r.name;break;case"Literal":n=String(r.value);break;default:return}var i=e.kind;if(this.options.ecmaVersion>=6)"__proto__"===n&&"init"===i&&(t.proto&&this.raiseRecoverable(r.start,"Redefinition of __proto__ property"),t.proto=!0);else{var o=t[n="$"+n];if(o){var s="init"!==i;(!this.strict&&!s||!o[i])&&s^o.init||this.raiseRecoverable(r.start,"Redefinition of property")}else o=t[n]={init:!1,get:!1,set:!1};o[i]=!0}}},W.parseExpression=function(e,t){var n=this,r=this.start,i=this.startLoc,o=this.parseMaybeAssign(e,t);if(this.type===O.comma){var s=this.startNodeAt(r,i);for(s.expressions=[o];this.eat(O.comma);)s.expressions.push(n.parseMaybeAssign(e,t));return this.finishNode(s,"SequenceExpression")}return o},W.parseMaybeAssign=function(e,t,n){if(this.inGenerator&&this.isContextual("yield"))return this.parseYield();var r=!1;t||(t=new V,r=!0);var i=this.start,o=this.startLoc;this.type!=O.parenL&&this.type!=O.name||(this.potentialArrowAt=this.start);var s=this.parseMaybeConditional(e,t);if(n&&(s=n.call(this,s,i,o)),this.type.isAssign){this.checkPatternErrors(t,!0),r||V.call(t);var a=this.startNodeAt(i,o);return a.operator=this.value,a.left=this.type===O.eq?this.toAssignable(s):s,t.shorthandAssign=0,this.checkLVal(s),this.next(),a.right=this.parseMaybeAssign(e),this.finishNode(a,"AssignmentExpression")}return r&&this.checkExpressionErrors(t,!0),s},W.parseMaybeConditional=function(e,t){var n=this.start,r=this.startLoc,i=this.parseExprOps(e,t);if(this.checkExpressionErrors(t))return i;if(this.eat(O.question)){var o=this.startNodeAt(n,r);return o.test=i,o.consequent=this.parseMaybeAssign(),this.expect(O.colon),o.alternate=this.parseMaybeAssign(e),this.finishNode(o,"ConditionalExpression")}return i},W.parseExprOps=function(e,t){var n=this.start,r=this.startLoc,i=this.parseMaybeUnary(t,!1);return this.checkExpressionErrors(t)?i:this.parseExprOp(i,n,r,-1,e)},W.parseExprOp=function(e,t,n,r,i){var o=this.type.binop;if(null!=o&&(!i||this.type!==O._in)&&o>r){var s=this.type===O.logicalOR||this.type===O.logicalAND,a=this.value;this.next();var u=this.start,c=this.startLoc,l=this.parseExprOp(this.parseMaybeUnary(null,!1),u,c,o,i),p=this.buildBinary(t,n,e,l,a,s);return this.parseExprOp(p,t,n,r,i)}return e},W.buildBinary=function(e,t,n,r,i,o){var s=this.startNodeAt(e,t);return s.left=n,s.operator=i,s.right=r,this.finishNode(s,o?"LogicalExpression":"BinaryExpression")},W.parseMaybeUnary=function(e,t){var n,r=this,i=this.start,o=this.startLoc;if(this.type.prefix){var s=this.startNode(),a=this.type===O.incDec;s.operator=this.value,s.prefix=!0,this.next(),s.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),a?this.checkLVal(s.argument):this.strict&&"delete"===s.operator&&"Identifier"===s.argument.type?this.raiseRecoverable(s.start,"Deleting local variable in strict mode"):t=!0,n=this.finishNode(s,a?"UpdateExpression":"UnaryExpression")}else{if(n=this.parseExprSubscripts(e),this.checkExpressionErrors(e))return n;for(;this.type.postfix&&!this.canInsertSemicolon();){var u=r.startNodeAt(i,o);u.operator=r.value,u.prefix=!1,u.argument=n,r.checkLVal(n),r.next(),n=r.finishNode(u,"UpdateExpression")}}return!t&&this.eat(O.starstar)?this.buildBinary(i,o,n,this.parseMaybeUnary(null,!1),"**",!1):n},W.parseExprSubscripts=function(e){var t=this.start,n=this.startLoc,r=this.parseExprAtom(e),i="ArrowFunctionExpression"===r.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd);return this.checkExpressionErrors(e)||i?r:this.parseSubscripts(r,t,n)},W.parseSubscripts=function(e,t,n,r){for(var i=this;;)if(i.eat(O.dot)){var o=i.startNodeAt(t,n);o.object=e,o.property=i.parseIdent(!0),o.computed=!1,e=i.finishNode(o,"MemberExpression")}else if(i.eat(O.bracketL)){var s=i.startNodeAt(t,n);s.object=e,s.property=i.parseExpression(),s.computed=!0,i.expect(O.bracketR),e=i.finishNode(s,"MemberExpression")}else if(!r&&i.eat(O.parenL)){var a=i.startNodeAt(t,n);a.callee=e,a.arguments=i.parseExprList(O.parenR,!1),e=i.finishNode(a,"CallExpression")}else{if(i.type!==O.backQuote)return e;var u=i.startNodeAt(t,n);u.tag=e,u.quasi=i.parseTemplate(),e=i.finishNode(u,"TaggedTemplateExpression")}},W.parseExprAtom=function(e){var t,n=this.potentialArrowAt==this.start;switch(this.type){case O._super:this.inFunction||this.raise(this.start,"'super' outside of function or class");case O._this:var r=this.type===O._this?"ThisExpression":"Super";return t=this.startNode(),this.next(),this.finishNode(t,r);case O.name:var i=this.start,o=this.startLoc,s=this.parseIdent(this.type!==O.name);return n&&!this.canInsertSemicolon()&&this.eat(O.arrow)?this.parseArrowExpression(this.startNodeAt(i,o),[s]):s;case O.regexp:var a=this.value;return t=this.parseLiteral(a.value),t.regex={pattern:a.pattern,flags:a.flags},t;case O.num:case O.string:return this.parseLiteral(this.value);case O._null:case O._true:case O._false:return t=this.startNode(),t.value=this.type===O._null?null:this.type===O._true,t.raw=this.type.keyword,this.next(),this.finishNode(t,"Literal");case O.parenL:return this.parseParenAndDistinguishExpression(n);case O.bracketL:return t=this.startNode(),this.next(),t.elements=this.parseExprList(O.bracketR,!0,!0,e),this.finishNode(t,"ArrayExpression");case O.braceL:return this.parseObj(!1,e);case O._function:return t=this.startNode(),this.next(),this.parseFunction(t,!1);case O._class:return this.parseClass(this.startNode(),!1);case O._new:return this.parseNew();case O.backQuote:return this.parseTemplate();default:this.unexpected()}},W.parseLiteral=function(e){var t=this.startNode();return t.value=e,t.raw=this.input.slice(this.start,this.end),this.next(),this.finishNode(t,"Literal")},W.parseParenExpression=function(){this.expect(O.parenL);var e=this.parseExpression();return this.expect(O.parenR),e},W.parseParenAndDistinguishExpression=function(e){var t,n=this,r=this.start,i=this.startLoc;if(this.options.ecmaVersion>=6){this.next();for(var o,s,a=this.start,u=this.startLoc,c=[],l=!0,p=new V;this.type!==O.parenR;){if(l?l=!1:n.expect(O.comma),n.type===O.ellipsis){o=n.start,c.push(n.parseParenItem(n.parseRest()));break}n.type!==O.parenL||s||(s=n.start),c.push(n.parseMaybeAssign(!1,p,n.parseParenItem))}var h=this.start,f=this.startLoc;if(this.expect(O.parenR),e&&!this.canInsertSemicolon()&&this.eat(O.arrow))return this.checkPatternErrors(p,!0),s&&this.unexpected(s),this.parseParenArrowList(r,i,c);c.length||this.unexpected(this.lastTokStart),o&&this.unexpected(o),this.checkExpressionErrors(p,!0),c.length>1?((t=this.startNodeAt(a,u)).expressions=c,this.finishNodeAt(t,"SequenceExpression",h,f)):t=c[0]}else t=this.parseParenExpression();if(this.options.preserveParens){var d=this.startNodeAt(r,i);return d.expression=t,this.finishNode(d,"ParenthesizedExpression")}return t},W.parseParenItem=function(e){return e},W.parseParenArrowList=function(e,t,n){return this.parseArrowExpression(this.startNodeAt(e,t),n)};var G=[];W.parseNew=function(){var e=this.startNode(),t=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(O.dot))return e.meta=t,e.property=this.parseIdent(!0),"target"!==e.property.name&&this.raiseRecoverable(e.property.start,"The only valid meta property for new is new.target"),this.inFunction||this.raiseRecoverable(e.start,"new.target can only be used in functions"),this.finishNode(e,"MetaProperty");var n=this.start,r=this.startLoc;return e.callee=this.parseSubscripts(this.parseExprAtom(),n,r,!0),this.eat(O.parenL)?e.arguments=this.parseExprList(O.parenR,!1):e.arguments=G,this.finishNode(e,"NewExpression")},W.parseTemplateElement=function(){var e=this.startNode();return e.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),e.tail=this.type===O.backQuote,this.finishNode(e,"TemplateElement")},W.parseTemplate=function(){var e=this,t=this.startNode();this.next(),t.expressions=[];var n=this.parseTemplateElement();for(t.quasis=[n];!n.tail;)e.expect(O.dollarBraceL),t.expressions.push(e.parseExpression()),e.expect(O.braceR),t.quasis.push(n=e.parseTemplateElement());return this.next(),this.finishNode(t,"TemplateLiteral")},W.parseObj=function(e,t){var n=this,r=this.startNode(),i=!0,o={};for(r.properties=[],this.next();!this.eat(O.braceR);){if(i)i=!1;else if(n.expect(O.comma),n.afterTrailingComma(O.braceR))break;var s,a,u,c=n.startNode();n.options.ecmaVersion>=6&&(c.method=!1,c.shorthand=!1,(e||t)&&(a=n.start,u=n.startLoc),e||(s=n.eat(O.star))),n.parsePropertyName(c),n.parsePropertyValue(c,e,s,a,u,t),n.checkPropClash(c,o),r.properties.push(n.finishNode(c,"Property"))}return this.finishNode(r,e?"ObjectPattern":"ObjectExpression")},W.parsePropertyValue=function(e,t,n,r,i,o){if(this.eat(O.colon))e.value=t?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,o),e.kind="init";else if(this.options.ecmaVersion>=6&&this.type===O.parenL)t&&this.unexpected(),e.kind="init",e.method=!0,e.value=this.parseMethod(n);else if(this.options.ecmaVersion>=5&&!e.computed&&"Identifier"===e.key.type&&("get"===e.key.name||"set"===e.key.name)&&this.type!=O.comma&&this.type!=O.braceR){(n||t)&&this.unexpected(),e.kind=e.key.name,this.parsePropertyName(e),e.value=this.parseMethod(!1);var s="get"===e.kind?0:1;if(e.value.params.length!==s){var a=e.value.start;"get"===e.kind?this.raiseRecoverable(a,"getter should have no params"):this.raiseRecoverable(a,"setter should have exactly one param")}"set"===e.kind&&"RestElement"===e.value.params[0].type&&this.raiseRecoverable(e.value.params[0].start,"Setter cannot use rest params")}else this.options.ecmaVersion>=6&&!e.computed&&"Identifier"===e.key.type?((this.keywords.test(e.key.name)||(this.strict?this.reservedWordsStrictBind:this.reservedWords).test(e.key.name)||this.inGenerator&&"yield"==e.key.name)&&this.raiseRecoverable(e.key.start,"'"+e.key.name+"' can not be used as shorthand property"),e.kind="init",t?e.value=this.parseMaybeDefault(r,i,e.key):this.type===O.eq&&o?(o.shorthandAssign||(o.shorthandAssign=this.start),e.value=this.parseMaybeDefault(r,i,e.key)):e.value=e.key,e.shorthand=!0):this.unexpected()},W.parsePropertyName=function(e){if(this.options.ecmaVersion>=6){if(this.eat(O.bracketL))return e.computed=!0,e.key=this.parseMaybeAssign(),this.expect(O.bracketR),e.key;e.computed=!1}return e.key=this.type===O.num||this.type===O.string?this.parseExprAtom():this.parseIdent(!0)},W.initFunction=function(e){e.id=null,this.options.ecmaVersion>=6&&(e.generator=!1,e.expression=!1)},W.parseMethod=function(e){var t=this.startNode(),n=this.inGenerator;return this.inGenerator=e,this.initFunction(t),this.expect(O.parenL),t.params=this.parseBindingList(O.parenR,!1,!1),this.options.ecmaVersion>=6&&(t.generator=e),this.parseFunctionBody(t,!1),this.inGenerator=n,this.finishNode(t,"FunctionExpression")},W.parseArrowExpression=function(e,t){var n=this.inGenerator;return this.inGenerator=!1,this.initFunction(e),e.params=this.toAssignableList(t,!0),this.parseFunctionBody(e,!0),this.inGenerator=n,this.finishNode(e,"ArrowFunctionExpression")},W.parseFunctionBody=function(e,t){var n=t&&this.type!==O.braceL;if(n)e.body=this.parseMaybeAssign(),e.expression=!0;else{var r=this.inFunction,i=this.labels;this.inFunction=!0,this.labels=[],e.body=this.parseBlock(!0),e.expression=!1,this.inFunction=r,this.labels=i}var o=!n&&e.body.body.length&&this.isUseStrict(e.body.body[0])?e.body.body[0]:null;if(this.strict||o){var s=this.strict;this.strict=!0,e.id&&this.checkLVal(e.id,!0),this.checkParams(e,o),this.strict=s}else t&&this.checkParams(e,o)},W.checkParams=function(e,t){for(var n=this,r={},i=0;i<e.params.length;i++)t&&n.options.ecmaVersion>=7&&"Identifier"!==e.params[i].type&&n.raiseRecoverable(t.start,"Illegal 'use strict' directive in function with non-simple parameter list"),n.checkLVal(e.params[i],!0,r)},W.parseExprList=function(e,t,n,r){for(var i=this,o=[],s=!0;!this.eat(e);){if(s)s=!1;else if(i.expect(O.comma),t&&i.afterTrailingComma(e))break;var a;n&&i.type===O.comma?a=null:i.type===O.ellipsis?(a=i.parseSpread(r),i.type===O.comma&&r&&!r.trailingComma&&(r.trailingComma=i.lastTokStart)):a=i.parseMaybeAssign(!1,r),o.push(a)}return o},W.parseIdent=function(e){var t=this.startNode();return e&&"never"==this.options.allowReserved&&(e=!1),this.type===O.name?(!e&&(this.strict?this.reservedWordsStrict:this.reservedWords).test(this.value)&&(this.options.ecmaVersion>=6||-1==this.input.slice(this.start,this.end).indexOf("\\"))&&this.raiseRecoverable(this.start,"The keyword '"+this.value+"' is reserved"),!e&&this.inGenerator&&"yield"===this.value&&this.raiseRecoverable(this.start,"Can not use 'yield' as identifier inside a generator"),t.name=this.value):e&&this.type.keyword?t.name=this.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"Identifier")},W.parseYield=function(){var e=this.startNode();return this.next(),this.type==O.semi||this.canInsertSemicolon()||this.type!=O.star&&!this.type.startsExpr?(e.delegate=!1,e.argument=null):(e.delegate=this.eat(O.star),e.argument=this.parseMaybeAssign()),this.finishNode(e,"YieldExpression")};var Y=I.prototype;Y.raise=function(e,t){var n=c(this.input,e);t+=" ("+n.line+":"+n.column+")";var r=new SyntaxError(t);throw r.pos=e,r.loc=n,r.raisedAt=this.pos,r},Y.raiseRecoverable=Y.raise,Y.curPosition=function(){if(this.options.locations)return new N(this.curLine,this.pos-this.lineStart)};var X=function(e,t,n){this.type="",this.start=t,this.end=0,e.options.locations&&(this.loc=new M(e,n)),e.options.directSourceFile&&(this.sourceFile=e.options.directSourceFile),e.options.ranges&&(this.range=[t,0])},K=I.prototype;K.startNode=function(){return new X(this,this.start,this.startLoc)},K.startNodeAt=function(e,t){return new X(this,e,t)},K.finishNode=function(e,t){return f.call(this,e,t,this.lastTokEnd,this.lastTokEndLoc)},K.finishNodeAt=function(e,t,n,r){return f.call(this,e,t,n,r)};var J=function(e,t,n,r){this.token=e,this.isExpr=!!t,this.preserveSpace=!!n,this.override=r},Q={b_stat:new J("{",!1),b_expr:new J("{",!0),b_tmpl:new J("${",!0),p_stat:new J("(",!1),p_expr:new J("(",!0),q_tmpl:new J("`",!0,!0,function(e){return e.readTmplToken()}),f_expr:new J("function",!0)},Z=I.prototype;Z.initialContext=function(){return[Q.b_stat]},Z.braceIsBlock=function(e){if(e===O.colon){var t=this.curContext();if(t===Q.b_stat||t===Q.b_expr)return!t.isExpr}return e===O._return?F.test(this.input.slice(this.lastTokEnd,this.start)):e===O._else||e===O.semi||e===O.eof||e===O.parenR||(e==O.braceL?this.curContext()===Q.b_stat:!this.exprAllowed)},Z.updateContext=function(e){var t,n=this.type;n.keyword&&e==O.dot?this.exprAllowed=!1:(t=n.updateContext)?t.call(this,e):this.exprAllowed=n.beforeExpr},O.parenR.updateContext=O.braceR.updateContext=function(){if(1!=this.context.length){var e=this.context.pop();e===Q.b_stat&&this.curContext()===Q.f_expr?(this.context.pop(),this.exprAllowed=!1):this.exprAllowed=e===Q.b_tmpl||!e.isExpr}else this.exprAllowed=!0},O.braceL.updateContext=function(e){this.context.push(this.braceIsBlock(e)?Q.b_stat:Q.b_expr),this.exprAllowed=!0},O.dollarBraceL.updateContext=function(){this.context.push(Q.b_tmpl),this.exprAllowed=!0},O.parenL.updateContext=function(e){var t=e===O._if||e===O._for||e===O._with||e===O._while;this.context.push(t?Q.p_stat:Q.p_expr),this.exprAllowed=!0},O.incDec.updateContext=function(){},O._function.updateContext=function(e){e.beforeExpr&&e!==O.semi&&e!==O._else&&(e!==O.colon&&e!==O.braceL||this.curContext()!==Q.b_stat)&&this.context.push(Q.f_expr),this.exprAllowed=!1},O.backQuote.updateContext=function(){this.curContext()===Q.q_tmpl?this.context.pop():this.context.push(Q.q_tmpl),this.exprAllowed=!1};var ee=function(e){this.type=e.type,this.value=e.value,this.start=e.start,this.end=e.end,e.options.locations&&(this.loc=new M(e,e.startLoc,e.endLoc)),e.options.ranges&&(this.range=[e.start,e.end])},te=I.prototype,ne="object"==typeof Packages&&"[object JavaPackage]"==Object.prototype.toString.call(Packages);te.next=function(){this.options.onToken&&this.options.onToken(new ee(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},te.getToken=function(){return this.next(),new ee(this)},"undefined"!=typeof Symbol&&(te[Symbol.iterator]=function(){var e=this;return{next:function(){var t=e.getToken();return{done:t.type===O.eof,value:t}}}}),te.setStrict=function(e){var t=this;if(this.strict=e,this.type===O.num||this.type===O.string){if(this.pos=this.start,this.options.locations)for(;this.pos<this.lineStart;)t.lineStart=t.input.lastIndexOf("\n",t.lineStart-2)+1,--t.curLine;this.nextToken()}},te.curContext=function(){return this.context[this.context.length-1]},te.nextToken=function(){var e=this.curContext();return e&&e.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(O.eof):e.override?e.override(this):void this.readToken(this.fullCharCodeAtPos())},te.readToken=function(e){return n(e,this.options.ecmaVersion>=6)||92===e?this.readWord():this.getTokenFromCode(e)},te.fullCharCodeAtPos=function(){var e=this.input.charCodeAt(this.pos);return e<=55295||e>=57344?e:(e<<10)+this.input.charCodeAt(this.pos+1)-56613888},te.skipBlockComment=function(){var e=this,t=this.options.onComment&&this.curPosition(),n=this.pos,r=this.input.indexOf("*/",this.pos+=2);if(-1===r&&this.raise(this.pos-2,"Unterminated comment"),this.pos=r+2,this.options.locations){B.lastIndex=n;for(var i;(i=B.exec(this.input))&&i.index<this.pos;)++e.curLine,e.lineStart=i.index+i[0].length}this.options.onComment&&this.options.onComment(!0,this.input.slice(n+2,r),n,this.pos,t,this.curPosition())},te.skipLineComment=function(e){for(var t=this,n=this.pos,r=this.options.onComment&&this.curPosition(),i=this.input.charCodeAt(this.pos+=e);this.pos<this.input.length&&10!==i&&13!==i&&8232!==i&&8233!==i;)++t.pos,i=t.input.charCodeAt(t.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(n+e,this.pos),n,this.pos,r,this.curPosition())},te.skipSpace=function(){var e=this;e:for(;this.pos<this.input.length;){var t=e.input.charCodeAt(e.pos);switch(t){case 32:case 160:++e.pos;break;case 13:10===e.input.charCodeAt(e.pos+1)&&++e.pos;case 10:case 8232:case 8233:++e.pos,e.options.locations&&(++e.curLine,e.lineStart=e.pos);break;case 47:switch(e.input.charCodeAt(e.pos+1)){case 42:e.skipBlockComment();break;case 47:e.skipLineComment(2);break;default:break e}break;default:if(!(t>8&&t<14||t>=5760&&D.test(String.fromCharCode(t))))break e;++e.pos}}},te.finishToken=function(e,t){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var n=this.type;this.type=e,this.value=t,this.updateContext(n)},te.readToken_dot=function(){var e=this.input.charCodeAt(this.pos+1);if(e>=48&&e<=57)return this.readNumber(!0);var t=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===e&&46===t?(this.pos+=3,this.finishToken(O.ellipsis)):(++this.pos,this.finishToken(O.dot))},te.readToken_slash=function(){var e=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===e?this.finishOp(O.assign,2):this.finishOp(O.slash,1)},te.readToken_mult_modulo_exp=function(e){var t=this.input.charCodeAt(this.pos+1),n=1,r=42===e?O.star:O.modulo;return this.options.ecmaVersion>=7&&42===t&&(++n,r=O.starstar,t=this.input.charCodeAt(this.pos+2)),61===t?this.finishOp(O.assign,n+1):this.finishOp(r,n)},te.readToken_pipe_amp=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?this.finishOp(124===e?O.logicalOR:O.logicalAND,2):61===t?this.finishOp(O.assign,2):this.finishOp(124===e?O.bitwiseOR:O.bitwiseAND,1)},te.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(O.assign,2):this.finishOp(O.bitwiseXOR,1)},te.readToken_plus_min=function(e){var t=this.input.charCodeAt(this.pos+1);return t===e?45==t&&62==this.input.charCodeAt(this.pos+2)&&F.test(this.input.slice(this.lastTokEnd,this.pos))?(this.skipLineComment(3),this.skipSpace(),this.nextToken()):this.finishOp(O.incDec,2):61===t?this.finishOp(O.assign,2):this.finishOp(O.plusMin,1)},te.readToken_lt_gt=function(e){var t=this.input.charCodeAt(this.pos+1),n=1;return t===e?(n=62===e&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+n)?this.finishOp(O.assign,n+1):this.finishOp(O.bitShift,n)):33==t&&60==e&&45==this.input.charCodeAt(this.pos+2)&&45==this.input.charCodeAt(this.pos+3)?(this.inModule&&this.unexpected(),this.skipLineComment(4),this.skipSpace(),this.nextToken()):(61===t&&(n=2),this.finishOp(O.relational,n))},te.readToken_eq_excl=function(e){var t=this.input.charCodeAt(this.pos+1);return 61===t?this.finishOp(O.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===e&&62===t&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(O.arrow)):this.finishOp(61===e?O.eq:O.prefix,1)},te.getTokenFromCode=function(e){switch(e){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(O.parenL);case 41:return++this.pos,this.finishToken(O.parenR);case 59:return++this.pos,this.finishToken(O.semi);case 44:return++this.pos,this.finishToken(O.comma);case 91:return++this.pos,this.finishToken(O.bracketL);case 93:return++this.pos,this.finishToken(O.bracketR);case 123:return++this.pos,this.finishToken(O.braceL);case 125:return++this.pos,this.finishToken(O.braceR);case 58:return++this.pos,this.finishToken(O.colon);case 63:return++this.pos,this.finishToken(O.question);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(O.backQuote);case 48:var t=this.input.charCodeAt(this.pos+1);if(120===t||88===t)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===t||79===t)return this.readRadixNumber(8);if(98===t||66===t)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(e);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(e);case 124:case 38:return this.readToken_pipe_amp(e);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(e);case 60:case 62:return this.readToken_lt_gt(e);case 61:case 33:return this.readToken_eq_excl(e);case 126:return this.finishOp(O.prefix,1)}this.raise(this.pos,"Unexpected character '"+m(e)+"'")},te.finishOp=function(e,t){var n=this.input.slice(this.pos,this.pos+t);return this.pos+=t,this.finishToken(e,n)};var re=!!d("￿","u");te.readRegexp=function(){for(var e,t,n=this,r=this.pos;;){n.pos>=n.input.length&&n.raise(r,"Unterminated regular expression");var i=n.input.charAt(n.pos);if(F.test(i)&&n.raise(r,"Unterminated regular expression"),e)e=!1;else{if("["===i)t=!0;else if("]"===i&&t)t=!1;else if("/"===i&&!t)break;e="\\"===i}++n.pos}var o=this.input.slice(r,this.pos);++this.pos;var s=this.readWord1(),a=o,u="";if(s){var c=/^[gim]*$/;this.options.ecmaVersion>=6&&(c=/^[gimuy]*$/),c.test(s)||this.raise(r,"Invalid regular expression flag"),s.indexOf("u")>=0&&(re?u="u":(a=(a=a.replace(/\\u\{([0-9a-fA-F]+)\}/g,function(e,t,i){return(t=Number("0x"+t))>1114111&&n.raise(r+i+3,"Code point out of bounds"),"x"})).replace(/\\u([a-fA-F0-9]{4})|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x"),u=u.replace("u","")))}var l=null;return ne||(d(a,u,r,this),l=d(o,s)),this.finishToken(O.regexp,{pattern:o,flags:s,value:l})},te.readInt=function(e,t){for(var n=this,r=this.pos,i=0,o=0,s=null==t?1/0:t;o<s;++o){var a,u=n.input.charCodeAt(n.pos);if((a=u>=97?u-97+10:u>=65?u-65+10:u>=48&&u<=57?u-48:1/0)>=e)break;++n.pos,i=i*e+a}return this.pos===r||null!=t&&this.pos-r!==t?null:i},te.readRadixNumber=function(e){this.pos+=2;var t=this.readInt(e);return null==t&&this.raise(this.start+2,"Expected number in radix "+e),n(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(O.num,t)},te.readNumber=function(e){var t=this.pos,r=!1,i=48===this.input.charCodeAt(this.pos);e||null!==this.readInt(10)||this.raise(t,"Invalid number");var o=this.input.charCodeAt(this.pos);46===o&&(++this.pos,this.readInt(10),r=!0,o=this.input.charCodeAt(this.pos)),69!==o&&101!==o||(43!==(o=this.input.charCodeAt(++this.pos))&&45!==o||++this.pos,null===this.readInt(10)&&this.raise(t,"Invalid number"),r=!0),n(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var s,a=this.input.slice(t,this.pos);return r?s=parseFloat(a):i&&1!==a.length?/[89]/.test(a)||this.strict?this.raise(t,"Invalid number"):s=parseInt(a,8):s=parseInt(a,10),this.finishToken(O.num,s)},te.readCodePoint=function(){var e;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var t=++this.pos;e=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,e>1114111&&this.raise(t,"Code point out of bounds")}else e=this.readHexChar(4);return e},te.readString=function(e){for(var t=this,n="",r=++this.pos;;){t.pos>=t.input.length&&t.raise(t.start,"Unterminated string constant");var i=t.input.charCodeAt(t.pos);if(i===e)break;92===i?(n+=t.input.slice(r,t.pos),n+=t.readEscapedChar(!1),r=t.pos):(s(i)&&t.raise(t.start,"Unterminated string constant"),++t.pos)}return n+=this.input.slice(r,this.pos++),this.finishToken(O.string,n)},te.readTmplToken=function(){for(var e=this,t="",n=this.pos;;){e.pos>=e.input.length&&e.raise(e.start,"Unterminated template");var r=e.input.charCodeAt(e.pos);if(96===r||36===r&&123===e.input.charCodeAt(e.pos+1))return e.pos===e.start&&e.type===O.template?36===r?(e.pos+=2,e.finishToken(O.dollarBraceL)):(++e.pos,e.finishToken(O.backQuote)):(t+=e.input.slice(n,e.pos),e.finishToken(O.template,t));if(92===r)t+=e.input.slice(n,e.pos),t+=e.readEscapedChar(!0),n=e.pos;else if(s(r)){switch(t+=e.input.slice(n,e.pos),++e.pos,r){case 13:10===e.input.charCodeAt(e.pos)&&++e.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(r)}e.options.locations&&(++e.curLine,e.lineStart=e.pos),n=e.pos}else++e.pos}},te.readEscapedChar=function(e){var t=this.input.charCodeAt(++this.pos);switch(++this.pos,t){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return m(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";default:if(t>=48&&t<=55){var n=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],r=parseInt(n,8);return r>255&&(n=n.slice(0,-1),r=parseInt(n,8)),"0"!==n&&(this.strict||e)&&this.raise(this.pos-2,"Octal literal in strict mode"),this.pos+=n.length-1,String.fromCharCode(r)}return String.fromCharCode(t)}},te.readHexChar=function(e){var t=this.pos,n=this.readInt(16,e);return null===n&&this.raise(t,"Bad character escape sequence"),n},te.readWord1=function(){var e=this;this.containsEsc=!1;for(var t="",i=!0,o=this.pos,s=this.options.ecmaVersion>=6;this.pos<this.input.length;){var a=e.fullCharCodeAtPos();if(r(a,s))e.pos+=a<=65535?1:2;else{if(92!==a)break;e.containsEsc=!0,t+=e.input.slice(o,e.pos);var u=e.pos;117!=e.input.charCodeAt(++e.pos)&&e.raise(e.pos,"Expecting Unicode escape sequence \\uXXXX"),++e.pos;var c=e.readCodePoint();(i?n:r)(c,s)||e.raise(u,"Invalid Unicode escape"),t+=m(c),o=e.pos}i=!1}return t+this.input.slice(o,this.pos)},te.readWord=function(){var e=this.readWord1(),t=O.name;return(this.options.ecmaVersion>=6||!this.containsEsc)&&this.keywords.test(e)&&(t=T[e]),this.finishToken(t,e)};e.version="3.3.0",e.parse=function(e,t){return new I(t,e).parse()},e.parseExpressionAt=function(e,t,n){var r=new I(n,e,t);return r.nextToken(),r.parseExpression()},e.tokenizer=function(e,t){return new I(t,e)},e.Parser=I,e.plugins=P,e.defaultOptions=R,e.Position=N,e.SourceLocation=M,e.getLineInfo=c,e.Node=X,e.TokenType=A,e.tokTypes=O,e.TokContext=J,e.tokContexts=Q,e.isIdentifierChar=r,e.isIdentifierStart=n,e.Token=ee,e.isNewLine=s,e.lineBreak=F,e.lineBreakG=B,Object.defineProperty(e,"__esModule",{value:!0})})},{}],15:[function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n):"function"==typeof define&&define.amd?define(["exports"],r):r((e.acorn=e.acorn||{},e.acorn.walk=e.acorn.walk||{}))}(this,function(e){"use strict";function t(e){return"string"==typeof e?function(t){return t==e}:e||function(){return!0}}function n(e,t,n){n(e,t)}function r(e,t,n){}var i=function(e,t){this.node=e,this.state=t},o=Object.create||function(e){function t(){}return t.prototype=e,new t},s={};s.Program=s.BlockStatement=function(e,t,n){for(var r=0;r<e.body.length;++r)n(e.body[r],t,"Statement")},s.Statement=n,s.EmptyStatement=r,s.ExpressionStatement=s.ParenthesizedExpression=function(e,t,n){return n(e.expression,t,"Expression")},s.IfStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Statement"),e.alternate&&n(e.alternate,t,"Statement")},s.LabeledStatement=function(e,t,n){return n(e.body,t,"Statement")},s.BreakStatement=s.ContinueStatement=r,s.WithStatement=function(e,t,n){n(e.object,t,"Expression"),n(e.body,t,"Statement")},s.SwitchStatement=function(e,t,n){n(e.discriminant,t,"Expression");for(var r=0;r<e.cases.length;++r){var i=e.cases[r];i.test&&n(i.test,t,"Expression");for(var o=0;o<i.consequent.length;++o)n(i.consequent[o],t,"Statement")}},s.ReturnStatement=s.YieldExpression=function(e,t,n){e.argument&&n(e.argument,t,"Expression")},s.ThrowStatement=s.SpreadElement=function(e,t,n){return n(e.argument,t,"Expression")},s.TryStatement=function(e,t,n){n(e.block,t,"Statement"),e.handler&&n(e.handler,t),e.finalizer&&n(e.finalizer,t,"Statement")},s.CatchClause=function(e,t,n){n(e.param,t,"Pattern"),n(e.body,t,"ScopeBody")},s.WhileStatement=s.DoWhileStatement=function(e,t,n){n(e.test,t,"Expression"),n(e.body,t,"Statement")},s.ForStatement=function(e,t,n){e.init&&n(e.init,t,"ForInit"),e.test&&n(e.test,t,"Expression"),e.update&&n(e.update,t,"Expression"),n(e.body,t,"Statement")},s.ForInStatement=s.ForOfStatement=function(e,t,n){n(e.left,t,"ForInit"),n(e.right,t,"Expression"),n(e.body,t,"Statement")},s.ForInit=function(e,t,n){"VariableDeclaration"==e.type?n(e,t):n(e,t,"Expression")},s.DebuggerStatement=r,s.FunctionDeclaration=function(e,t,n){return n(e,t,"Function")},s.VariableDeclaration=function(e,t,n){for(var r=0;r<e.declarations.length;++r)n(e.declarations[r],t)},s.VariableDeclarator=function(e,t,n){n(e.id,t,"Pattern"),e.init&&n(e.init,t,"Expression")},s.Function=function(e,t,n){e.id&&n(e.id,t,"Pattern");for(var r=0;r<e.params.length;r++)n(e.params[r],t,"Pattern");n(e.body,t,e.expression?"ScopeExpression":"ScopeBody")},s.ScopeBody=function(e,t,n){return n(e,t,"Statement")},s.ScopeExpression=function(e,t,n){return n(e,t,"Expression")},s.Pattern=function(e,t,n){"Identifier"==e.type?n(e,t,"VariablePattern"):"MemberExpression"==e.type?n(e,t,"MemberPattern"):n(e,t)},s.VariablePattern=r,s.MemberPattern=n,s.RestElement=function(e,t,n){return n(e.argument,t,"Pattern")},s.ArrayPattern=function(e,t,n){for(var r=0;r<e.elements.length;++r){var i=e.elements[r];i&&n(i,t,"Pattern")}},s.ObjectPattern=function(e,t,n){for(var r=0;r<e.properties.length;++r)n(e.properties[r].value,t,"Pattern")},s.Expression=n,s.ThisExpression=s.Super=s.MetaProperty=r,s.ArrayExpression=function(e,t,n){for(var r=0;r<e.elements.length;++r){var i=e.elements[r];i&&n(i,t,"Expression")}},s.ObjectExpression=function(e,t,n){for(var r=0;r<e.properties.length;++r)n(e.properties[r],t)},s.FunctionExpression=s.ArrowFunctionExpression=s.FunctionDeclaration,s.SequenceExpression=s.TemplateLiteral=function(e,t,n){for(var r=0;r<e.expressions.length;++r)n(e.expressions[r],t,"Expression")},s.UnaryExpression=s.UpdateExpression=function(e,t,n){n(e.argument,t,"Expression")},s.BinaryExpression=s.LogicalExpression=function(e,t,n){n(e.left,t,"Expression"),n(e.right,t,"Expression")},s.AssignmentExpression=s.AssignmentPattern=function(e,t,n){n(e.left,t,"Pattern"),n(e.right,t,"Expression")},s.ConditionalExpression=function(e,t,n){n(e.test,t,"Expression"),n(e.consequent,t,"Expression"),n(e.alternate,t,"Expression")},s.NewExpression=s.CallExpression=function(e,t,n){if(n(e.callee,t,"Expression"),e.arguments)for(var r=0;r<e.arguments.length;++r)n(e.arguments[r],t,"Expression")},s.MemberExpression=function(e,t,n){n(e.object,t,"Expression"),e.computed&&n(e.property,t,"Expression")},s.ExportNamedDeclaration=s.ExportDefaultDeclaration=function(e,t,n){e.declaration&&n(e.declaration,t,"ExportNamedDeclaration"==e.type||e.declaration.id?"Statement":"Expression"),e.source&&n(e.source,t,"Expression")},s.ExportAllDeclaration=function(e,t,n){n(e.source,t,"Expression")},s.ImportDeclaration=function(e,t,n){for(var r=0;r<e.specifiers.length;r++)n(e.specifiers[r],t);n(e.source,t,"Expression")},s.ImportSpecifier=s.ImportDefaultSpecifier=s.ImportNamespaceSpecifier=s.Identifier=s.Literal=r,s.TaggedTemplateExpression=function(e,t,n){n(e.tag,t,"Expression"),n(e.quasi,t)},s.ClassDeclaration=s.ClassExpression=function(e,t,n){return n(e,t,"Class")},s.Class=function(e,t,n){e.id&&n(e.id,t,"Pattern"),e.superClass&&n(e.superClass,t,"Expression");for(var r=0;r<e.body.body.length;r++)n(e.body.body[r],t)},s.MethodDefinition=s.Property=function(e,t,n){e.computed&&n(e.key,t,"Expression"),n(e.value,t,"Expression")},e.simple=function(t,n,r,i,o){r||(r=e.base),function e(t,i,o){var s=o||t.type,a=n[s];r[s](t,i,e),a&&a(t,i)}(t,i,o)},e.ancestor=function(t,n,r,i){r||(r=e.base);var o=[];!function e(t,i,s){var a=s||t.type,u=n[a],c=t!=o[o.length-1];c&&o.push(t),r[a](t,i,e),u&&u(t,i||o,o),c&&o.pop()}(t,i)},e.recursive=function(t,n,r,i,o){var s=r?e.make(r,i):i;!function e(t,n,r){s[r||t.type](t,n,e)}(t,n,o)},e.findNodeAt=function(n,r,o,s,a,u){s=t(s),a||(a=e.base);try{!function e(t,n,u){var c=u||t.type;if((null==r||t.start<=r)&&(null==o||t.end>=o)&&a[c](t,n,e),(null==r||t.start==r)&&(null==o||t.end==o)&&s(c,t))throw new i(t,n)}(n,u)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeAround=function(n,r,o,s,a){o=t(o),s||(s=e.base);try{!function e(t,n,a){var u=a||t.type;if(!(t.start>r||t.end<r)&&(s[u](t,n,e),o(u,t)))throw new i(t,n)}(n,a)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeAfter=function(n,r,o,s,a){o=t(o),s||(s=e.base);try{!function e(t,n,a){if(!(t.end<r)){var u=a||t.type;if(t.start>=r&&o(u,t))throw new i(t,n);s[u](t,n,e)}}(n,a)}catch(e){if(e instanceof i)return e;throw e}},e.findNodeBefore=function(n,r,o,s,a){o=t(o),s||(s=e.base);var u;return function e(t,n,a){if(!(t.start>r)){var c=a||t.type;t.end<=r&&(!u||u.node.end<t.end)&&o(c,t)&&(u=new i(t,n)),s[c](t,n,e)}}(n,a),u},e.make=function(t,n){n||(n=e.base);var r=o(n);for(var i in t)r[i]=t[i];return r},e.base=s,Object.defineProperty(e,"__esModule",{value:!0})})},{}],16:[function(e,t,n){"use strict";var r=e("acorn"),i=e("object-assign");t.exports=function(e,t){t=i({},o,t);try{var n=new r.Parser(t,e,0);t.strict&&(n.strict=!0),t.lineComment||(n.skipLineComment=function(e){this.raise(this.pos,"Line comments not allowed in an expression")}),n.nextToken(),n.parseExpression(),n.type!==r.tokTypes.eof&&n.unexpected()}catch(e){if(!t.throw)return!1;throw e}return!0};var o={throw:!1,strict:!1,lineComment:!1}},{acorn:14,"object-assign":28}],17:[function(e,t,n){"use strict";t.exports={html:"<!DOCTYPE html>",xml:'<?xml version="1.0" encoding="utf-8" ?>',transitional:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',strict:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">',frameset:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">',1.1:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">',basic:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">',mobile:'<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">',plist:'<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">'}},{}],18:[function(e,t,n){"use strict";var r=Array.prototype.slice,i=Object.prototype.toString;t.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==i.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var n,o=r.call(arguments,1),s=Math.max(0,t.length-o.length),a=[],u=0;u<s;u++)a.push("$"+u);if(n=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof n){var i=t.apply(this,o.concat(r.call(arguments)));return Object(i)===i?i:this}return t.apply(e,o.concat(r.call(arguments)))}),t.prototype){var c=function(){};c.prototype=t.prototype,n.prototype=new c,c.prototype=null}return n}},{}],19:[function(e,t,n){"use strict";var r=e("./implementation");t.exports=Function.prototype.bind||r},{"./implementation":18}],20:[function(e,t,n){var r=e("function-bind");t.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},{"function-bind":19}],21:[function(e,t,n){n.read=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,p=n?i-1:0,h=n?-1:1,f=e[t+p];for(p+=h,o=f&(1<<-l)-1,f>>=-l,l+=a;l>0;o=256*o+e[t+p],p+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[t+p],p+=h,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,r),o-=c}return(f?-1:1)*s*Math.pow(2,o-r)},n.write=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,p=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,d=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+p>=1?h/u:h*Math.pow(2,1-p))*u>=2&&(s++,u/=2),s+p>=l?(a=0,s=l):s+p>=1?(a=(t*u-1)*Math.pow(2,i),s+=p):(a=t*Math.pow(2,p-1)*Math.pow(2,i),s=0));i>=8;e[n+f]=255&a,f+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+f]=255&s,f+=d,s/=256,c-=8);e[n+f-d]|=128*m}},{}],22:[function(e,t,n){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function i(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}t.exports=function(e){return null!=e&&(r(e)||i(e)||!!e._isBuffer)}},{}],23:[function(e,t,n){arguments[4][16][0].apply(n,arguments)},{acorn:2,dup:16,"object-assign":28}],24:[function(e,t,n){t.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},{}],25:[function(e,t,n){"use strict";var r=e("has"),i=RegExp.prototype.exec,o=Object.getOwnPropertyDescriptor,s=function(e){try{var t=e.lastIndex;return e.lastIndex=0,i.call(e),!0}catch(e){return!1}finally{e.lastIndex=t}},a=Object.prototype.toString,u="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!u)return"[object RegExp]"===a.call(e);var t=o(e,"lastIndex");return!(!t||!r(t,"value"))&&s(e)}},{has:20}],26:[function(e,t,n){"use strict";function r(e){return e instanceof Date?"new Date("+r(e.toISOString())+")":void 0===e?"undefined":JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/</g,"\\u003C").replace(/>/g,"\\u003E").replace(/\//g,"\\u002F")}t.exports=r},{}],27:[function(e,t,n){"use strict";function r(e){o(e,"Transformer must be an object"),o("string"==typeof e.name,"Transformer must have a name"),o("string"==typeof e.outputFormat,"Transformer must have an output format"),o(["compile","compileAsync","compileFile","compileFileAsync","compileClient","compileClientAsync","compileFileClient","compileFileClientAsync","render","renderAsync","renderFile","renderFileAsync"].some(function(t){return"function"==typeof e[t]}),"Transformer must implement at least one of the potential methods."),this._tr=e,this.name=this._tr.name,this.outputFormat=this._tr.outputFormat,this.inputFormats=this._tr.inputFormats||[this.name]}var i=e("fs"),o=e("assert"),s=e("promise"),a=e("is-promise"),u=t.exports=function(e){return new r(e)};u.Transformer=r,u.normalizeFn=function(e){if("function"==typeof e)return{fn:e,dependencies:[]};if(e&&"object"==typeof e&&"function"==typeof e.fn){if("dependencies"in e){if(!Array.isArray(e.dependencies))throw new Error("Result should have a dependencies property that is an array")}else e.dependencies=[];return e}throw new Error("Invalid result object from transform.")},u.normalizeFnAsync=function(e,t){return s.resolve(e).then(function(e){return e&&a(e.fn)?e.fn.then(function(t){return e.fn=t,e}):e}).then(u.normalizeFn).nodeify(t)},u.normalize=function(e){if("string"==typeof e)return{body:e,dependencies:[]};if(e&&"object"==typeof e&&"string"==typeof e.body){if("dependencies"in e){if(!Array.isArray(e.dependencies))throw new Error("Result should have a dependencies property that is an array")}else e.dependencies=[];return e}throw new Error("Invalid result object from transform.")},u.normalizeAsync=function(e,t){return s.resolve(e).then(function(e){return e&&a(e.body)?e.body.then(function(t){return e.body=t,e}):e}).then(u.normalize).nodeify(t)},i.readFile?(u.readFile=s.denodeify(i.readFile),u.readFileSync=i.readFileSync):(u.readFile=function(){throw new Error("fs.readFile unsupported")},u.readFileSync=function(){throw new Error("fs.readFileSync unsupported")});var c={compile:["compile","render"],compileAsync:["compileAsync","compile","render"],compileFile:["compileFile","compile","renderFile","render"],compileFileAsync:["compileFileAsync","compileFile","compileAsync","compile","renderFile","render"],compileClient:["compileClient"],compileClientAsync:["compileClientAsync","compileClient"],compileFileClient:["compileFileClient","compileClient"],compileFileClientAsync:["compileFileClientAsync","compileFileClient","compileClientAsync","compileClient"],render:["render","compile"],renderAsync:["renderAsync","render","compileAsync","compile"],renderFile:["renderFile","render","compileFile","compile"],renderFileAsync:["renderFileAsync","renderFile","renderAsync","render","compileFileAsync","compileFile","compileAsync","compile"]};r.prototype._hasMethod=function(e){return"function"==typeof this._tr[e]},r.prototype.can=function(e){return c[e].some(function(e){return this._hasMethod(e)}.bind(this))},r.prototype.compile=function(e,t){if(!this._hasMethod("compile")){if(this.can("render")){var n=this;return{fn:function(r){return u.normalize(n._tr.render(e,t,r)).body},dependencies:[]}}throw this.can("compileAsync")?new Error('The Transform "'+this.name+'" does not support synchronous compilation'):this.can("compileFileAsync")?new Error('The Transform "'+this.name+'" does not support compiling plain strings'):new Error('The Transform "'+this.name+'" does not support compilation')}return u.normalizeFn(this._tr.compile(e,t))},r.prototype.compileAsync=function(e,t,n){return this.can("compileAsync")?this._hasMethod("compileAsync")?u.normalizeFnAsync(this._tr.compileAsync(e,t),n):u.normalizeFnAsync(this.compile(e,t),n):s.reject(new Error('The Transform "'+this.name+'" does not support compiling plain strings')).nodeify(n)},r.prototype.compileFile=function(e,t){if(!this.can("compileFile"))throw new Error('The Transform "'+this.name+'" does not support synchronous compilation');return this._hasMethod("compileFile")?u.normalizeFn(this._tr.compileFile(e,t)):this._hasMethod("renderFile")?u.normalizeFn(function(n){return u.normalize(this._tr.renderFile(e,t,n)).body}.bind(this)):(t||(t={}),void 0===t.filename&&(t.filename=e),this.compile(u.readFileSync(e,"utf8"),t))},r.prototype.compileFileAsync=function(e,t,n){return this.can("compileFileAsync")?this._hasMethod("compileFileAsync")?u.normalizeFnAsync(this._tr.compileFileAsync(e,t),n):this._hasMethod("compileFile")||this._hasMethod("renderFile")?u.normalizeFnAsync(this.compileFile(e,t),n):(t||(t={}),void 0===t.filename&&(t.filename=e),u.normalizeFnAsync(u.readFile(e,"utf8").then(function(e){return this._hasMethod("compileAsync")?this._tr.compileAsync(e,t):this.compile(e,t)}.bind(this)),n)):s.reject(new Error('The Transform "'+this.name+'" does not support compilation'))},r.prototype.compileClient=function(e,t){if(!this.can("compileClient"))throw this.can("compileClientAsync")?new Error('The Transform "'+this.name+'" does not support compiling for the client synchronously.'):this.can("compileFileClientAsync")?new Error('The Transform "'+this.name+'" does not support compiling for the client from a string.'):new Error('The Transform "'+this.name+'" does not support compiling for the client');return u.normalize(this._tr.compileClient(e,t))},r.prototype.compileClientAsync=function(e,t,n){return this.can("compileClientAsync")?this._hasMethod("compileClientAsync")?u.normalizeAsync(this._tr.compileClientAsync(e,t),n):u.normalizeAsync(this._tr.compileClient(e,t),n):this.can("compileFileClientAsync")?s.reject(new Error('The Transform "'+this.name+'" does not support compiling for the client from a string.')).nodeify(n):s.reject(new Error('The Transform "'+this.name+'" does not support compiling for the client')).nodeify(n)},r.prototype.compileFileClient=function(e,t){if(!this.can("compileFileClient"))throw this.can("compileFileClientAsync")?new Error('The Transform "'+this.name+'" does not support compiling for the client synchronously.'):new Error('The Transform "'+this.name+'" does not support compiling for the client');return this._hasMethod("compileFileClient")?u.normalize(this._tr.compileFileClient(e,t)):(t||(t={}),void 0===t.filename&&(t.filename=e),u.normalize(this._tr.compileClient(u.readFileSync(e,"utf8"),t)))},r.prototype.compileFileClientAsync=function(e,t,n){return this.can("compileFileClientAsync")?this._hasMethod("compileFileClientAsync")?u.normalizeAsync(this._tr.compileFileClientAsync(e,t),n):this._hasMethod("compileFileClient")?u.normalizeAsync(this._tr.compileFileClient(e,t),n):(t||(t={}),void 0===t.filename&&(t.filename=e),u.normalizeAsync(u.readFile(e,"utf8").then(function(e){return this._hasMethod("compileClientAsync")?this._tr.compileClientAsync(e,t):this._tr.compileClient(e,t)}.bind(this)),n)):s.reject(new Error('The Transform "'+this.name+'" does not support compiling for the client')).nodeify(n)},r.prototype.render=function(e,t,n){if(!this.can("render"))throw this.can("renderAsync")?new Error('The Transform "'+this.name+'" does not support rendering synchronously.'):this.can("renderFileAsync")?new Error('The Transform "'+this.name+'" does not support rendering from a string.'):new Error('The Transform "'+this.name+'" does not support rendering');if(this._hasMethod("render"))return u.normalize(this._tr.render(e,t,n));var r=u.normalizeFn(this._tr.compile(e,t)),i=r.fn(n||t);if("string"!=typeof i)throw new Error('The Transform "'+this.name+'" does not support rendering synchronously.');return u.normalize({body:i,dependencies:r.dependencies})},r.prototype.renderAsync=function(e,t,n,r){return"function"==typeof n&&(r=n,n=t),this.can("renderAsync")?this._hasMethod("renderAsync")?u.normalizeAsync(this._tr.renderAsync(e,t,n),r):this._hasMethod("render")?u.normalizeAsync(this._tr.render(e,t,n),r):u.normalizeAsync(this.compileAsync(e,t).then(function(e){return{body:e.fn(n||t),dependencies:e.dependencies}}),r):this.can("renderFileAsync")?s.reject(new Error('The Transform "'+this.name+'" does not support rendering from a string.')).nodeify(r):s.reject(new Error('The Transform "'+this.name+'" does not support rendering')).nodeify(r)},r.prototype.renderFile=function(e,t,n){if(!this.can("renderFile"))throw new Error('The Transform "'+this.name+'" does not support rendering synchronously.');if(this._hasMethod("renderFile"))return u.normalize(this._tr.renderFile(e,t,n));if(this._hasMethod("render"))return t||(t={}),void 0===t.filename&&(t.filename=e),u.normalize(this._tr.render(u.readFileSync(e,"utf8"),t,n));var r=this.compileFile(e,t);return u.normalize({body:r.fn(n||t),dependencies:r.dependencies})},r.prototype.renderFileAsync=function(e,t,n,r){if(!this.can("renderFileAsync"))throw new Error('The Transform "'+this.name+'" does not support rendering.');return"function"==typeof n&&(r=n,n=t),this._hasMethod("renderFileAsync")?u.normalizeAsync(this._tr.renderFileAsync(e,t,n),r):this._hasMethod("renderFile")?u.normalizeAsync(this._tr.renderFile(e,t,n),r):this._hasMethod("compile")||this._hasMethod("compileAsync")||this._hasMethod("compileFile")||this._hasMethod("compileFileAsync")?u.normalizeAsync(this.compileFileAsync(e,t).then(function(e){return{body:e.fn(n||t),dependencies:e.dependencies}}),r):(t||(t={}),void 0===t.filename&&(t.filename=e),u.normalizeAsync(u.readFile(e,"utf8").then(function(e){return this.renderAsync(e,t,n)}.bind(this)),r))}},{assert:7,fs:10,"is-promise":24,promise:32}],28:[function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,u=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)o.call(n,l)&&(u[l]=n[l]);if(i){a=i(n);for(var p=0;p<a.length;p++)s.call(n,a[p])&&(u[a[p]]=n[a[p]])}}return u}},{}],29:[function(e,t,n){n.endianness=function(){return"LE"},n.hostname=function(){return"undefined"!=typeof location?location.hostname:""},n.loadavg=function(){return[]},n.uptime=function(){return 0},n.freemem=function(){return Number.MAX_VALUE},n.totalmem=function(){return Number.MAX_VALUE},n.cpus=function(){return[]},n.type=function(){return"Browser"},n.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},n.networkInterfaces=n.getNetworkInterfaces=function(){return{}},n.arch=function(){return"javascript"},n.platform=function(){return"browser"},n.tmpdir=n.tmpDir=function(){return"/tmp"},n.EOL="\n",n.homedir=function(){return"/"}},{}],30:[function(e,t,n){(function(e){function t(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return i.exec(e).slice(1)};n.resolve=function(){for(var n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,i="/"===s.charAt(0))}return n=t(r(n.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+n||"."},n.normalize=function(e){var i=n.isAbsolute(e),o="/"===s(e,-1);return(e=t(r(e.split("/"),function(e){return!!e}),!i).join("/"))||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=n.resolve(e).substr(1),t=n.resolve(t).substr(1);for(var i=r(e.split("/")),o=r(t.split("/")),s=Math.min(i.length,o.length),a=s,u=0;u<s;u++)if(i[u]!==o[u]){a=u;break}for(var c=[],u=a;u<i.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var t=o(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},n.basename=function(e,t){var n=o(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},n.extname=function(e){return o(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,e("_process"))},{_process:31}],31:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(p===setTimeout)return setTimeout(e,0);if((p===r||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function s(e){if(h===clearTimeout)return clearTimeout(e);if((h===i||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{return h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}function a(){g&&d&&(g=!1,d.length?m=d.concat(m):v=-1,m.length&&u())}function u(){if(!g){var e=o(a);g=!0;for(var t=m.length;t;){for(d=m,m=[];++v<t;)d&&d[v].run();v=-1,t=m.length}d=null,g=!1,s(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var p,h,f=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:r}catch(e){p=r}try{h="function"==typeof clearTimeout?clearTimeout:i}catch(e){h=i}}();var d,m=[],g=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||g||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],32:[function(e,t,n){"use strict";t.exports=e("./lib")},{"./lib":37}],33:[function(e,t,n){"use strict";function r(){}function i(e){try{return e.then}catch(e){return v=e,y}}function o(e,t){try{return e(t)}catch(e){return v=e,y}}function s(e,t,n){try{e(t,n)}catch(e){return v=e,y}}function a(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("Promise constructor's argument is not a function");this._40=0,this._65=0,this._55=null,this._72=null,e!==r&&m(e,this)}function u(e,t,n){return new e.constructor(function(i,o){var s=new a(r);s.then(i,o),c(e,new d(t,n,s))})}function c(e,t){for(;3===e._65;)e=e._55;if(a._37&&a._37(e),0===e._65)return 0===e._40?(e._40=1,void(e._72=t)):1===e._40?(e._40=2,void(e._72=[e._72,t])):void e._72.push(t);l(e,t)}function l(e,t){g(function(){var n=1===e._65?t.onFulfilled:t.onRejected;if(null!==n){var r=o(n,e._55);r===y?h(t.promise,v):p(t.promise,r)}else 1===e._65?p(t.promise,e._55):h(t.promise,e._55)})}function p(e,t){if(t===e)return h(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var n=i(t);if(n===y)return h(e,v);if(n===e.then&&t instanceof a)return e._65=3,e._55=t,void f(e);if("function"==typeof n)return void m(n.bind(t),e)}e._65=1,e._55=t,f(e)}function h(e,t){e._65=2,e._55=t,a._87&&a._87(e,t),f(e)}function f(e){if(1===e._40&&(c(e,e._72),e._72=null),2===e._40){for(var t=0;t<e._72.length;t++)c(e,e._72[t]);e._72=null}}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function m(e,t){var n=!1,r=s(e,function(e){n||(n=!0,p(t,e))},function(e){n||(n=!0,h(t,e))});n||r!==y||(n=!0,h(t,v))}var g=e("asap/raw"),v=null,y={};t.exports=a,a._37=null,a._87=null,a._61=r,a.prototype.then=function(e,t){if(this.constructor!==a)return u(this,e,t);var n=new a(r);return c(this,new d(e,t,n)),n}},{"asap/raw":6}],34:[function(e,t,n){"use strict";var r=e("./core.js");t.exports=r,r.prototype.done=function(e,t){(arguments.length?this.then.apply(this,arguments):this).then(null,function(e){setTimeout(function(){throw e},0)})}},{"./core.js":33}],35:[function(e,t,n){"use strict";function r(e){var t=new i(i._61);return t._65=1,t._55=e,t}var i=e("./core.js");t.exports=i;var o=r(!0),s=r(!1),a=r(null),u=r(void 0),c=r(0),l=r("");i.resolve=function(e){if(e instanceof i)return e;if(null===e)return a;if(void 0===e)return u;if(!0===e)return o;if(!1===e)return s;if(0===e)return c;if(""===e)return l;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new i(t.bind(e))}catch(e){return new i(function(t,n){n(e)})}return r(e)},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(s,a){if(a&&("object"==typeof a||"function"==typeof a)){if(a instanceof i&&a.then===i.prototype.then){for(;3===a._65;)a=a._55;return 1===a._65?r(s,a._55):(2===a._65&&n(a._55),void a.then(function(e){r(s,e)},n))}var u=a.then;if("function"==typeof u)return void new i(u.bind(a)).then(function(e){r(s,e)},n)}t[s]=a,0==--o&&e(t)}if(0===t.length)return e([]);for(var o=t.length,s=0;s<t.length;s++)r(s,t[s])})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){e.forEach(function(e){i.resolve(e).then(t,n)})})},i.prototype.catch=function(e){return this.then(null,e)}},{"./core.js":33}],36:[function(e,t,n){"use strict";var r=e("./core.js");t.exports=r,r.prototype.finally=function(e){return this.then(function(t){return r.resolve(e()).then(function(){return t})},function(t){return r.resolve(e()).then(function(){throw t})})}},{"./core.js":33}],37:[function(e,t,n){"use strict";t.exports=e("./core.js"),e("./done.js"),e("./finally.js"),e("./es6-extensions.js"),e("./node-extensions.js"),e("./synchronous.js")},{"./core.js":33,"./done.js":34,"./es6-extensions.js":35,"./finally.js":36,"./node-extensions.js":38,"./synchronous.js":39}],38:[function(e,t,n){"use strict";function r(e,t){for(var n=[],r=0;r<t;r++)n.push("a"+r);var i=["return function ("+n.join(",")+") {","var self = this;","return new Promise(function (rs, rj) {","var res = fn.call(",["self"].concat(n).concat([a]).join(","),");","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],i)(o,e)}function i(e){for(var t=Math.max(e.length-1,3),n=[],r=0;r<t;r++)n.push("a"+r);var i=["return function ("+n.join(",")+") {","var self = this;","var args;","var argLength = arguments.length;","if (arguments.length > "+t+") {","args = new Array(arguments.length + 1);","for (var i = 0; i < arguments.length; i++) {","args[i] = arguments[i];","}","}","return new Promise(function (rs, rj) {","var cb = "+a+";","var res;","switch (argLength) {",n.concat(["extra"]).map(function(e,t){return"case "+t+":res = fn.call("+["self"].concat(n.slice(0,t)).concat("cb").join(",")+");break;"}).join(""),"default:","args[argLength] = cb;","res = fn.apply(self, args);","}","if (res &&",'(typeof res === "object" || typeof res === "function") &&','typeof res.then === "function"',") {rs(res);}","});","};"].join("");return Function(["Promise","fn"],i)(o,e)}var o=e("./core.js"),s=e("asap");t.exports=o,o.denodeify=function(e,t){return"number"==typeof t&&t!==1/0?r(e,t):i(e)};var a="function (err, res) {if (err) { rj(err); } else { rs(res); }}";o.nodeify=function(e){return function(){var t=Array.prototype.slice.call(arguments),n="function"==typeof t[t.length-1]?t.pop():null,r=this;try{return e.apply(this,arguments).nodeify(n,r)}catch(e){if(null===n||void 0===n)return new o(function(t,n){n(e)});s(function(){n.call(r,e)})}}},o.prototype.nodeify=function(e,t){if("function"!=typeof e)return this;this.then(function(n){s(function(){e.call(t,null,n)})},function(n){s(function(){e.call(t,n)})})}},{"./core.js":33,asap:5}],39:[function(e,t,n){"use strict";var r=e("./core.js");t.exports=r,r.enableSynchronous=function(){r.prototype.isPending=function(){return 0==this.getState()},r.prototype.isFulfilled=function(){return 1==this.getState()},r.prototype.isRejected=function(){return 2==this.getState()},r.prototype.getValue=function(){if(3===this._65)return this._55.getValue();if(!this.isFulfilled())throw new Error("Cannot get a value of an unfulfilled promise.");return this._55},r.prototype.getReason=function(){if(3===this._65)return this._55.getReason();if(!this.isRejected())throw new Error("Cannot get a rejection reason of a non-rejected promise.");return this._55},r.prototype.getState=function(){return 3===this._65?this._55.getState():-1===this._65||-2===this._65?0:this._65}},r.disableSynchronous=function(){r.prototype.isPending=void 0,r.prototype.isFulfilled=void 0,r.prototype.isRejected=void 0,r.prototype.getValue=void 0,r.prototype.getReason=void 0,r.prototype.getState=void 0}},{"./core.js":33}],40:[function(e,t,n){"use strict";function r(e){return s(e,{pug:a,pug_interp:void 0})}function i(e){return s.toConstant(e,{pug:a,pug_interp:void 0})}var o=e("assert"),s=e("constantinople"),a=e("pug-runtime"),u=e("js-stringify");t.exports=function(e,t){function n(e,n,o,s){if(r(n))if("html"===t.format){var c=u(a.attr(e,i(n),o,t.terse)),l=s[s.length-1];l&&l[l.length-1]===c[0]?s[s.length-1]=l.substr(0,l.length-1)+c.substr(1):s.push(c)}else n=i(n),o&&(n=a.escape(n)),s.push(u(e)+": "+u(n));else"html"===t.format?s.push(t.runtime("attr")+'("'+e+'", '+n+", "+u(o)+", "+u(t.terse)+")"):(o&&(n=t.runtime("escape")+"("+n+")"),s.push(u(e)+": "+n))}o(Array.isArray(e),"Attrs should be an array"),o(e.every(function(e){return e&&"object"==typeof e&&"string"==typeof e.name&&("string"==typeof e.val||"boolean"==typeof e.val)&&"boolean"==typeof e.mustEscape}),"All attributes should be supplied as an object of the form {name, val, mustEscape}"),o(t&&"object"==typeof t,"Options should be an object"),o("boolean"==typeof t.terse,"Options.terse should be a boolean"),o("function"==typeof t.runtime,"Options.runtime should be a function that takes a runtime function name and returns the source code that will evaluate to that function at runtime"),o("html"===t.format||"object"===t.format,'Options.format should be "html" or "object"');var s=[],c=[],l=[];e.forEach(function(e){var o=e.name,p=e.val,h=e.mustEscape;"class"===o?(c.push(p),l.push(h)):("style"===o&&(p=r(p)?u(a.style(i(p))):t.runtime("style")+"("+p+")"),n(o,p,h,s))});var p=[];return c.length&&(c.every(r)?n("class",u(a.classes(c.map(i),l)),!1,p):(c=c.map(function(e,t){return r(e)&&(e=u(l[t]?a.escape(i(e)):i(e)),l[t]=!1),e}),n("class",t.runtime("classes")+"(["+c.join(",")+"], "+u(l)+")",!1,p))),s=p.concat(s),"html"===t.format?s.length?s.join("+"):'""':"{"+s.join(",")+"}"}},{assert:7,constantinople:13,"js-stringify":26,"pug-runtime":123}],41:[function(e,t,n){"use strict";function r(e){return f(e,{pug:l,pug_interp:void 0})}function i(e){return f.toConstant(e,{pug:l,pug_interp:void 0})}function o(e,t){this.options=t=t||{},this.node=e,this.bufferedConcatenationCount=0,this.hasCompiledDoctype=!1,this.hasCompiledTag=!1,this.pp=t.pretty||!1,this.pp&&"string"!=typeof this.pp&&(this.pp="  "),this.debug=!1!==t.compileDebug,this.indents=0,this.parentIndents=0,this.terse=!1,this.mixins={},this.dynamicMixins=!1,this.eachCount=0,t.doctype&&this.setDoctype(t.doctype),this.runtimeFunctionsUsed=[],this.inlineRuntimeFunctions=t.inlineRuntimeFunctions||!1,this.debug&&this.inlineRuntimeFunctions&&this.runtimeFunctionsUsed.push("rethrow")}function s(e){function t(e){return"Block"===e.type?e.nodes.every(t):"YieldBlock"===e.type||("Text"===e.type&&!/\n/.test(e.val)||e.isInline)}return e.block.nodes.every(t)}var a=e("doctypes"),u=e("pug-error"),c=e("pug-runtime/build"),l=e("pug-runtime"),p=e("pug-attrs"),h=e("void-elements"),f=e("constantinople"),d=e("js-stringify"),m=e("with"),g={pre:!0,textarea:!0},v=["pug","pug_mixins","pug_interp","pug_debug_filename","pug_debug_line","pug_debug_sources","pug_html"];t.exports=function(e,t){return new o(e,t).compile()},t.exports.CodeGenerator=o,o.prototype={runtime:function(e){return this.inlineRuntimeFunctions?(this.runtimeFunctionsUsed.push(e),"pug_"+e):"pug."+e},error:function(e,t,n){throw u(t,e,{line:n.line,column:n.column,filename:n.filename})},compile:function(){if(this.buf=[],this.pp&&this.buf.push("var pug_indent = [];"),this.lastBufferedIdx=-1,this.visit(this.node),!this.dynamicMixins)for(var e=Object.keys(this.mixins),t=0;t<e.length;t++){var n=this.mixins[e[t]];if(!n.used)for(var r=0;r<n.instances.length;r++)for(var i=n.instances[r].start;i<n.instances[r].end;i++)this.buf[i]=""}var o=this.buf.join("\n"),s=this.options.globals?this.options.globals.concat(v):v;return o=this.options.self?"var self = locals || {};"+o:m("locals || {}",o,s.concat(this.runtimeFunctionsUsed.map(function(e){return"pug_"+e}))),this.debug&&(this.options.includeSources&&(o="var pug_debug_sources = "+d(this.options.includeSources)+";\n"+o),o="var pug_debug_filename, pug_debug_line;try {"+o+"} catch (err) {"+(this.inlineRuntimeFunctions?"pug_rethrow":"pug.rethrow")+"(err, pug_debug_filename, pug_debug_line"+(this.options.includeSources?", pug_debug_sources[pug_debug_filename]":"")+");}"),c(this.runtimeFunctionsUsed)+"function "+(this.options.templateName||"template")+'(locals) {var pug_html = "", pug_mixins = {}, pug_interp;'+o+";return pug_html;}"},setDoctype:function(e){this.doctype=a[e.toLowerCase()]||"<!DOCTYPE "+e+">",this.terse="<!doctype html>"==this.doctype.toLowerCase(),this.xml=0==this.doctype.indexOf("<?xml")},buffer:function(e){e=(e=d(e)).substr(1,e.length-2),this.lastBufferedIdx==this.buf.length&&this.bufferedConcatenationCount<100?("code"===this.lastBufferedType&&(this.lastBuffered+=' + "',this.bufferedConcatenationCount++),this.lastBufferedType="text",this.lastBuffered+=e,this.buf[this.lastBufferedIdx-1]="pug_html = pug_html + "+this.bufferStartChar+this.lastBuffered+'";'):(this.bufferedConcatenationCount=0,this.buf.push('pug_html = pug_html + "'+e+'";'),this.lastBufferedType="text",this.bufferStartChar='"',this.lastBuffered=e,this.lastBufferedIdx=this.buf.length)},bufferExpression:function(e){if(r(e))return this.buffer(i(e)+"");this.lastBufferedIdx==this.buf.length&&this.bufferedConcatenationCount<100?(this.bufferedConcatenationCount++,"text"===this.lastBufferedType&&(this.lastBuffered+='"'),this.lastBufferedType="code",this.lastBuffered+=" + ("+e+")",this.buf[this.lastBufferedIdx-1]="pug_html = pug_html + ("+this.bufferStartChar+this.lastBuffered+");"):(this.bufferedConcatenationCount=0,this.buf.push("pug_html = pug_html + ("+e+");"),this.lastBufferedType="code",this.bufferStartChar="",this.lastBuffered="("+e+")",this.lastBufferedIdx=this.buf.length)},prettyIndent:function(e,t){e=e||0,t=t?"\n":"",this.buffer(t+Array(this.indents+e).join(this.pp)),this.parentIndents&&this.buf.push('pug_html = pug_html + pug_indent.join("");')},visit:function(e,t){var n=this.debug;if(!e){throw i=t?"A child of "+t.type+" ("+(t.filename||"Pug")+":"+t.line+")":"A top-level node",i+=" is "+e+", expected a Pug AST Node.",new TypeError(i)}if(n&&!1!==e.debug&&"Block"!==e.type&&e.line){var r=";pug_debug_line = "+e.line;e.filename&&(r+=";pug_debug_filename = "+d(e.filename)),this.buf.push(r+";")}if(!this["visit"+e.type]){var i;switch(i=t?"A child of "+t.type:"A top-level node",i+=" ("+(e.filename||"Pug")+":"+e.line+") is of type "+e.type+", which is not supported by pug-code-gen.",e.type){case"Filter":i+=" Please use pug-filters to preprocess this AST.";break;case"Extends":case"Include":case"NamedBlock":case"FileReference":i+=" Please use pug-linker to preprocess this AST."}throw new TypeError(i)}this.visitNode(e)},visitNode:function(e){return this["visit"+e.type](e)},visitCase:function(e){this.buf.push("switch ("+e.expr+"){"),this.visit(e.block,e),this.buf.push("}")},visitWhen:function(e){"default"==e.expr?this.buf.push("default:"):this.buf.push("case "+e.expr+":"),e.block&&(this.visit(e.block,e),this.buf.push("  break;"))},visitLiteral:function(e){this.buffer(e.str)},visitNamedBlock:function(e){return this.visitBlock(e)},visitBlock:function(e){var t=this.escapePrettyMode,n=this.pp;n&&e.nodes.length>1&&!t&&"Text"===e.nodes[0].type&&"Text"===e.nodes[1].type&&this.prettyIndent(1,!0);for(var r=0;r<e.nodes.length;++r)n&&r>0&&!t&&"Text"===e.nodes[r].type&&"Text"===e.nodes[r-1].type&&/\n$/.test(e.nodes[r-1].val)&&this.prettyIndent(1,!1),this.visit(e.nodes[r],e)},visitMixinBlock:function(e){this.pp&&this.buf.push("pug_indent.push('"+Array(this.indents+1).join(this.pp)+"');"),this.buf.push("block && block();"),this.pp&&this.buf.push("pug_indent.pop();")},visitDoctype:function(e){!e||!e.val&&this.doctype||this.setDoctype(e.val||"html"),this.doctype&&this.buffer(this.doctype),this.hasCompiledDoctype=!0},visitMixin:function(e){var t="pug_mixins[",n=e.args||"",r=e.block,i=e.attrs,o=this.attributeBlocks(e.attributeBlocks),s=this.pp,a="#"===e.name[0],u=e.name;if(a&&(this.dynamicMixins=!0),t+=(a?e.name.substr(2,e.name.length-3):'"'+e.name+'"')+"]",this.mixins[u]=this.mixins[u]||{used:!1,instances:[]},e.call){if(this.mixins[u].used=!0,s&&this.buf.push("pug_indent.push('"+Array(this.indents+1).join(s)+"');"),r||i.length||o.length){if(this.buf.push(t+".call({"),r){this.buf.push("block: function(){"),this.parentIndents++;var c=this.indents;this.indents=0,this.visit(e.block,e),this.indents=c,this.parentIndents--,i.length||o.length?this.buf.push("},"):this.buf.push("}")}if(o.length){if(i.length){l=this.attrs(i);o.unshift(l)}o.length>1?this.buf.push("attributes: "+this.runtime("merge")+"(["+o.join(",")+"])"):this.buf.push("attributes: "+o[0])}else if(i.length){var l=this.attrs(i);this.buf.push("attributes: "+l)}n?this.buf.push("}, "+n+");"):this.buf.push("});")}else this.buf.push(t+"("+n+");");s&&this.buf.push("pug_indent.pop();")}else{var p,h=this.buf.length;(n=n?n.split(","):[]).length&&/^\.\.\./.test(n[n.length-1].trim())&&(p=n.pop().trim().replace(/^\.\.\./,"")),this.buf.push(t+" = pug_interp = function("+n.join(",")+"){"),this.buf.push("var block = (this && this.block), attributes = (this && this.attributes) || {};"),p&&(this.buf.push("var "+p+" = [];"),this.buf.push("for (pug_interp = "+n.length+"; pug_interp < arguments.length; pug_interp++) {"),this.buf.push("  "+p+".push(arguments[pug_interp]);"),this.buf.push("}")),this.parentIndents++,this.visit(r,e),this.parentIndents--,this.buf.push("};");var f=this.buf.length;this.mixins[u].instances.push({start:h,end:f})}},visitTag:function(e,t){function n(){t?o.bufferExpression(e.expr):o.buffer(r)}this.indents++;var r=e.name,i=this.pp,o=this;!0===g[e.name]&&(this.escapePrettyMode=!0),this.hasCompiledTag||(this.hasCompiledDoctype||"html"!=r||this.visitDoctype(),this.hasCompiledTag=!0),i&&!e.isInline&&this.prettyIndent(0,!0),e.selfClosing||!this.xml&&h[e.name]?(this.buffer("<"),n(),this.visitAttributes(e.attrs,this.attributeBlocks(e.attributeBlocks)),this.terse&&!e.selfClosing?this.buffer(">"):this.buffer("/>"),(e.code||e.block&&("Block"!==e.block.type||0!==e.block.nodes.length)&&e.block.nodes.some(function(e){return"Text"!==e.type||!/^\s*$/.test(e.val)}))&&this.error(r+" is a self closing element: <"+r+"/> but contains nested content.","SELF_CLOSING_CONTENT",e)):(this.buffer("<"),n(),this.visitAttributes(e.attrs,this.attributeBlocks(e.attributeBlocks)),this.buffer(">"),e.code&&this.visitCode(e.code),this.visit(e.block,e),!i||e.isInline||!0===g[e.name]||s(e)||this.prettyIndent(0,!0),this.buffer("</"),n(),this.buffer(">")),!0===g[e.name]&&(this.escapePrettyMode=!1),this.indents--},visitInterpolatedTag:function(e){return this.visitTag(e,!0)},visitText:function(e){this.buffer(e.val)},visitComment:function(e){e.buffer&&(this.pp&&this.prettyIndent(1,!0),this.buffer("\x3c!--"+e.val+"--\x3e"))},visitYieldBlock:function(e){},visitBlockComment:function(e){e.buffer&&(this.pp&&this.prettyIndent(1,!0),this.buffer("\x3c!--"+(e.val||"")),this.visit(e.block,e),this.pp&&this.prettyIndent(1,!0),this.buffer("--\x3e"))},visitCode:function(e){if(e.buffer){var t=e.val.trim();t="null == (pug_interp = "+t+') ? "" : pug_interp',!1!==e.mustEscape&&(t=this.runtime("escape")+"("+t+")"),this.bufferExpression(t)}else this.buf.push(e.val);e.block&&(e.buffer||this.buf.push("{"),this.visit(e.block,e),e.buffer||this.buf.push("}"))},visitConditional:function(e){var t=e.test;this.buf.push("if ("+t+") {"),this.visit(e.consequent,e),this.buf.push("}"),e.alternate&&("Conditional"===e.alternate.type?(this.buf.push("else"),this.visitConditional(e.alternate)):(this.buf.push("else {"),this.visit(e.alternate,e),this.buf.push("}")))},visitWhile:function(e){var t=e.test;this.buf.push("while ("+t+") {"),this.visit(e.block,e),this.buf.push("}")},visitEach:function(e){var t=e.key||"pug_index"+this.eachCount;this.eachCount++,this.buf.push("// iterate "+e.obj+"\n;(function(){\n  var $$obj = "+e.obj+";\n  if ('number' == typeof $$obj.length) {"),e.alternate&&this.buf.push("    if ($$obj.length) {"),this.buf.push("      for (var "+t+" = 0, $$l = $$obj.length; "+t+" < $$l; "+t+"++) {\n        var "+e.val+" = $$obj["+t+"];"),this.visit(e.block,e),this.buf.push("      }"),e.alternate&&(this.buf.push("    } else {"),this.visit(e.alternate,e),this.buf.push("    }")),this.buf.push("  } else {\n    var $$l = 0;\n    for (var "+t+" in $$obj) {\n      $$l++;\n      var "+e.val+" = $$obj["+t+"];"),this.visit(e.block,e),this.buf.push("    }"),e.alternate&&(this.buf.push("    if ($$l === 0) {"),this.visit(e.alternate,e),this.buf.push("    }")),this.buf.push("  }\n}).call(this);\n")},visitAttributes:function(e,t){if(t.length){if(e.length){var n=this.attrs(e);t.unshift(n)}t.length>1?this.bufferExpression(this.runtime("attrs")+"("+this.runtime("merge")+"(["+t.join(",")+"]), "+d(this.terse)+")"):this.bufferExpression(this.runtime("attrs")+"("+t[0]+", "+d(this.terse)+")")}else e.length&&this.attrs(e,!0)},attrs:function(e,t){var n=p(e,{terse:this.terse,format:t?"html":"object",runtime:this.runtime.bind(this)});return t&&this.bufferExpression(n),n},attributeBlocks:e=>e&&e.slice().map(function(e){return e.val})}},{constantinople:13,doctypes:17,"js-stringify":26,"pug-attrs":40,"pug-error":42,"pug-runtime":123,"pug-runtime/build":122,"void-elements":153,with:154}],42:[function(e,t,n){"use strict";t.exports=function(e,t,n){var r,i=n.line,o=n.column,s=n.filename,a=n.src,u=i+(o?":"+o:"");if(a&&i>=1&&i<=a.split("\n").length){var c=a.split("\n"),l=Math.max(i-3,0),p=Math.min(c.length,i+3),h=c.slice(l,p).map(function(e,t){var n=t+l+1,r=(n==i?"  > ":"    ")+n+"| ",s=r+e;return n===i&&o>0&&(s+="\n",s+=Array(r.length+o).join("-")+"^"),s}).join("\n");r=(s||"Pug")+":"+u+"\n"+h+"\n\n"+t}else r=(s||"Pug")+":"+u+"\n\n"+t;var f=new Error(r);return f.code="PUG:"+e,f.msg=t,f.line=i,f.column=o,f.filename=s,f.src=a,f.toJSON=function(){return{code:this.code,msg:this.msg,line:this.line,column:this.column,filename:this.filename}},f}},{}],43:[function(e,t,n){"use strict";n.runFilter=e("./lib/run-filter"),n.handleFilters=e("./lib/handle-filters")},{"./lib/handle-filters":44,"./lib/run-filter":45}],44:[function(e,t,n){"use strict";function r(e,t,n,r){function u(e){var t=e.name;if(r&&r[t]&&(t=r[t],r[t]))throw l("FILTER_ALISE_CHAIN",'The filter "'+e.name+'" is an alias for "'+t+'", which is an alias for "'+r[t]+'".  Pug does not support chains of filter aliases.',e);return t}return n=n||{},c(e,function(e){function c(e,n,r,i){try{var o=u(e);return t&&t[o]?t[o](n,r):p(o,n,r,h,i)}catch(t){if("UNKNOWN_FILTER"===t.code)throw l(t.code,t.message,e);throw t}}var h=e.filename?a(e.filename):null;if("Filter"===e.type){i(e,t,n,r);var f=o(e);(m=s(e,n)).filename=e.filename,e.type="Text",e.val=c(e,f,m)}else if("RawInclude"===e.type&&e.filters.length){var d=e.filters.shift(),m=s(d,n),g=m.filename=e.file.fullPath,v=e.file.str;e.type="Text",e.val=function(e,n,r,i){var o=u(e);return t&&t[o]?t[o](r,i):c(e,n,i,"renderFile")}(d,g,v,m),e.filters.forEach(function(t){var r=s(t,n);r.filename=g,e.val=c(t,e.val,r)}),e.filters=void 0,e.file=void 0}},{includeDependencies:!0}),e}function i(e,t,n,i){e.block.nodes[0]&&"Filter"===e.block.nodes[0].type&&(e.block.nodes[0]=r(e.block,t,n,i).nodes[0])}function o(e){return e.block.nodes.map(function(e){return e.val}).join("")}function s(e,t){var n={};e.attrs.forEach(function(t){try{n[t.name]=u.toConstant(t.val)}catch(t){if(/not constant/.test(t.message))throw l("FILTER_OPTION_NOT_CONSTANT",t.message+" All filters are rendered compile-time so filter options must be constants.",e);throw t}});var r=t[e.name]||{};return Object.keys(r).forEach(function(e){n.hasOwnProperty(e)||(n[e]=r[e])}),n}var a=e("path").dirname,u=e("constantinople"),c=e("pug-walk"),l=e("pug-error"),p=e("./run-filter");t.exports=r},{"./run-filter":45,constantinople:13,path:30,"pug-error":42,"pug-walk":129}],45:[function(e,t,n){(function(n){"use strict";var r=e("jstransformer"),i=e("uglify-js"),o=e("clean-css"),s=e("resolve");t.exports=function(t,a,u,c,l){l=l||"render";var p;try{try{p=e(s.sync("jstransformer-"+t,{basedir:c||n.cwd()}))}catch(n){p=e("jstransformer-"+t)}p=r(p)}catch(e){}if(p){var h=p[l](a,u,u).body;if(u&&u.minify)try{switch(p.outputFormat){case"js":h=i.minify(h,{fromString:!0}).code;break;case"css":h=(new o).minify(h).styles}}catch(e){}return h}var f=new Error('unknown filter ":'+t+'"');throw f.code="UNKNOWN_FILTER",f}}).call(this,e("_process"))},{_process:31,"clean-css":46,jstransformer:27,resolve:10,"uglify-js":147}],46:[function(e,t,n){t.exports=e("./lib/clean")},{"./lib/clean":47}],47:[function(e,t,n){(function(n){function r(e){return void 0===e?["all"]:e}function i(e){return!T.existsSync(e)&&!/\.css$/.test(e)}function o(e){return T.existsSync(e)&&T.statSync(e).isDirectory()}function s(e){return e?{hostname:F.parse(e).hostname,port:parseInt(F.parse(e).port)}:{}}function a(e,t){function n(n){return n=t.options.debug?c(t,n):p(t,n),n=u(t,n),e?e.call(null,t.errors.length>0?t.errors:null,n):n}return function(e){return t.options.sourceMap?t.inputSourceMapTracker.track(e,function(){return t.options.sourceMapInlineSources?t.inputSourceMapTracker.resolveSources(function(){return n(e)}):n(e)}):n(e)}}function u(e,t){return t.stats=e.stats,t.errors=e.errors,t.warnings=e.warnings,t}function c(e,t){var r=n.hrtime();e.stats.originalSize=e.sourceTracker.removeAll(t).length,t=p(e,t);var i=n.hrtime(r);return e.stats.timeSpent=~~(1e3*i[0]+i[1]/1e6),e.stats.efficiency=1-t.styles.length/e.stats.originalSize,e.stats.minifiedSize=t.styles.length,t}function l(e){return function(t,r){var i=t.constructor.name+"#"+r,o=n.hrtime();e(t,r);var s=n.hrtime(o);console.log("%d ms: "+i,1e3*s[0]+s[1]/1e6)}}function p(e,t){var n=e.options,r=new b(e,n.keepSpecialComments,n.keepBreaks,n.sourceMap),i=new _(n.sourceMap),o=new x(n.sourceMap),s=new w(e,n.sourceMap,n.compatibility.properties.urlQuotes),a=n.sourceMap?y:v,u=function(e,n){t="function"==typeof e?e(t):e[n](t)};n.benchmark&&(u=l(u)),u(r,"escape"),u(i,"escape"),u(s,"escape"),u(o,"escape");var c=d(t,e);return m(c,n,e),n.advanced&&g(c,n,e,!0),a(c,n,function(t,a){return t=o.restore(t,a),t=s.restore(t),t=n.rebase?f(t,e):t,t=i.restore(t),r.restore(t)},e.inputSourceMapTracker)}var h=e("./imports/inliner"),f=e("./urls/rebase"),d=e("./tokenizer/tokenize"),m=e("./selectors/simple"),g=e("./selectors/advanced"),v=e("./stringifier/simple"),y=e("./stringifier/source-maps"),b=e("./text/comments-processor"),_=e("./text/expressions-processor"),x=e("./text/free-text-processor"),w=e("./text/urls-processor"),k=e("./utils/compatibility"),E=e("./utils/input-source-map-tracker"),A=e("./utils/source-tracker"),C=e("./utils/source-reader"),S=e("./properties/validator"),T=e("fs"),O=e("path"),F=e("url"),B=e("./utils/object").override;(t.exports=function(e){e=e||{},this.options={advanced:void 0===e.advanced||!!e.advanced,aggressiveMerging:void 0===e.aggressiveMerging||!!e.aggressiveMerging,benchmark:e.benchmark,compatibility:new k(e.compatibility).toOptions(),debug:e.debug,explicitRoot:!!e.root,explicitTarget:!!e.target,inliner:e.inliner||{},keepBreaks:e.keepBreaks||!1,keepSpecialComments:"keepSpecialComments"in e?e.keepSpecialComments:"*",mediaMerging:void 0===e.mediaMerging||!!e.mediaMerging,processImport:void 0===e.processImport||!!e.processImport,processImportFrom:r(e.processImportFrom),rebase:void 0===e.rebase||!!e.rebase,relativeTo:e.relativeTo,restructuring:void 0===e.restructuring||!!e.restructuring,root:e.root||n.cwd(),roundingPrecision:e.roundingPrecision,semanticMerging:void 0!==e.semanticMerging&&!!e.semanticMerging,shorthandCompacting:void 0===e.shorthandCompacting||!!e.shorthandCompacting,sourceMap:e.sourceMap,sourceMapInlineSources:!!e.sourceMapInlineSources,target:!e.target||i(e.target)||o(e.target)?e.target:O.dirname(e.target)},this.options.inliner.timeout=this.options.inliner.timeout||5e3,this.options.inliner.request=B(s(n.env.HTTP_PROXY||n.env.http_proxy),this.options.inliner.request||{})}).prototype.minify=function(e,t){var r={stats:{},errors:[],warnings:[],options:this.options,debug:this.options.debug,localOnly:!t,sourceTracker:new A,validator:new S(this.options.compatibility)};return r.options.sourceMap&&(r.inputSourceMapTracker=new E(r)),r.sourceReader=new C(r,e),e=r.sourceReader.toString(),r.options.processImport||e.indexOf("@shallow")>0?(t?n.nextTick:function(e){return e()})(function(){return new h(r).process(e,{localOnly:r.localOnly,imports:r.options.processImportFrom,whenDone:a(t,r)})}):a(t,r)(e)}}).call(this,e("_process"))},{"./imports/inliner":51,"./properties/validator":66,"./selectors/advanced":69,"./selectors/simple":82,"./stringifier/simple":86,"./stringifier/source-maps":87,"./text/comments-processor":88,"./text/expressions-processor":90,"./text/free-text-processor":91,"./text/urls-processor":92,"./tokenizer/tokenize":95,"./urls/rebase":96,"./utils/compatibility":100,"./utils/input-source-map-tracker":101,"./utils/object":102,"./utils/source-reader":104,"./utils/source-tracker":105,_process:31,fs:10,path:30,url:148}],48:[function(e,t,n){function r(e,t,n,r){return t+a[n.toLowerCase()]+r}function i(e,t,n){return u[t.toLowerCase()]+n}var o={},s={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#0ff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000",blanchedalmond:"#ffebcd",blue:"#00f",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#f0f",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#0f0",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#f00",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#fff",whitesmoke:"#f5f5f5",yellow:"#ff0",yellowgreen:"#9acd32"},a={},u={};for(var c in s){var l=s[c];c.length<l.length?u[l]=c:a[c]=l}var p=new RegExp("(^| |,|\\))("+Object.keys(a).join("|")+")( |,|\\)|$)","ig"),h=new RegExp("("+Object.keys(u).join("|")+")([^a-f0-9]|$)","ig");o.shorten=function(e){var t=e.indexOf("#")>-1,n=e.replace(p,r);return n!=e&&(n=n.replace(p,r)),t?n.replace(h,i):n},t.exports=o},{}],49:[function(e,t,n){function r(e,t,n){this.hue=e,this.saturation=t,this.lightness=n}function i(e,t,n){var r,i,s;if((e%=360)<0&&(e+=360),e=~~e/360,t<0?t=0:t>100&&(t=100),t=~~t/100,n<0?n=0:n>100&&(n=100),n=~~n/100,0===t)r=i=s=n;else{var a=n<.5?n*(1+t):n+t-n*t,u=2*n-a;r=o(u,a,e+1/3),i=o(u,a,e),s=o(u,a,e-1/3)}return[~~(255*r),~~(255*i),~~(255*s)]}function o(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}r.prototype.toHex=function(){var e=i(this.hue,this.saturation,this.lightness),t=e[0].toString(16),n=e[1].toString(16),r=e[2].toString(16);return"#"+(1==t.length?"0":"")+t+(1==n.length?"0":"")+n+(1==r.length?"0":"")+r},t.exports=r},{}],50:[function(e,t,n){function r(e,t,n){this.red=e,this.green=t,this.blue=n}r.prototype.toHex=function(){return"#"+("00000"+(Math.max(0,Math.min(~~this.red,255))<<16|Math.max(0,Math.min(~~this.green,255))<<8|Math.max(0,Math.min(~~this.blue,255))).toString(16)).slice(-6)},t.exports=r},{}],51:[function(e,t,n){(function(n){function r(e){this.outerContext=e}function i(e,t){if(t.shallow)return t.shallow=!1,t.done.push(e),a(t);for(var n=0,r=0,i=0,o=u(e);r<e.length&&-1!=(n=s(e,i));){if(!o(n)){if(-1==(r=e.indexOf(";",n))){i=e.length,e="";break}var p=e.substring(0,n);return t.done.push(p),t.left.unshift([e.substring(r+1),w(t,{shallow:!1})]),t.afterContent=c(p),l(e,n,r,t)}i=n+1}return t.done.push(e),a(t)}function o(e,t){return e.replace(k,function(e,n){return E.test(n)?e:e.replace(n,b.resolve(t,n))})}function s(e,t){var n=e.indexOf("@import",t),r=e.indexOf("@IMPORT",t);return n>-1&&-1==r?n:-1==n&&r>-1?r:Math.min(n,r)}function a(e){return e.left.length>0?i.apply(null,e.left.shift()):e.whenDone(e.done.join(""))}function u(e){var t=/(\/\*(?!\*\/)[\s\S]*?\*\/)/,n=0,r=0,i=!1;return function(o){var s,a=0,u=0,c=0,l=0;if(i)return!1;do{if(o>n&&o<r)return!0;if(!(s=e.match(t)))return i=!0,!1;n=a=s.index,c=(l=(u=a+s[0].length)+r)-s[0].length,e=e.substring(u),r=l}while(l<o);return l>o&&o>c}}function c(e){for(var t=u(e),n=-1;;)if(-1==(n=e.indexOf("{",n+1))||!t(n))break;return n>-1}function l(e,t,n,r){r.shallow=e.indexOf("@shallow")>0;var i=e.substring(s(e,t)+"@import".length+1,n).replace(/@shallow\)$/,")").trim(),o=0===i.indexOf("url("),u=o?4:0,l=/^['"]/.exec(i.substring(u,u+2)),m=l?i.indexOf(l[0],u+1):x(i," ")[0].length-(o?1:0),g=i.substring(u,m).replace(/['"]/g,"").replace(/\)$/,"").trim(),v=i.substring(m+1).replace(/^\)/,"").trim(),y=r.isRemote||E.test(g);return!y||!r.localOnly&&p(g,!0,r.imports)?y||p(g,!1,r.imports)?!y&&r.afterContent?(r.warnings.push('Ignoring local @import of "'+g+'" as after other CSS content.'),a(r)):(y?h:f)(g,v,r):(r.afterImport?r.warnings.push('Ignoring local @import of "'+g+'" as after other inlined content.'):d(g,v,r),a(r)):(r.afterContent||c(r.done.join(""))?r.warnings.push('Ignoring remote @import of "'+g+'" as no callback given.'):d(g,v,r),a(r))}function p(e,t,n){if(0===n.length)return!1;t&&A.test(e)&&(e="http:"+e);for(var r=t?b.parse(e).host:e,i=!0,o=0;o<n.length;o++){var s=n[o];"all"==s?i=!0:t&&"local"==s?i=!1:t&&"remote"==s?i=!0:t||"remote"!=s?t||"local"!=s?"!"==s[0]&&s.substring(1)===r&&(i=!1):i=!0:i=!1}return i}function h(e,t,r){function s(e){f||(f=!0,r.errors.push('Broken @import declaration of "'+u+'" - '+e),d(u,t,r),n.nextTick(function(){a(r)}))}var u=E.test(e)?e:b.resolve(r.relativeTo,e),c=u;if(A.test(u)&&(u="http:"+u),r.visited.indexOf(u)>-1)return a(r);r.debug&&console.error("Inlining remote stylesheet: "+u),r.visited.push(u);var l=r.inliner.request.protocol||r.inliner.request.hostname,p=l&&0!==l.indexOf("https://")||0===u.indexOf("http://")?v.get:y.get,f=!1,m=w(b.parse(u),r.inliner.request);void 0!==r.inliner.request.hostname&&(m.protocol=r.inliner.request.protocol||"http:",m.path=m.href),p(m,function(e){if(e.statusCode<200||e.statusCode>399)return s("error "+e.statusCode);if(e.statusCode>299)return h(b.resolve(u,e.headers.location),t,r);var a=[],l=b.parse(u);e.on("data",function(e){a.push(e.toString())}),e.on("end",function(){var e=a.join("");r.rebase&&(e=_(e,{toBase:c},r)),r.sourceReader.trackSource(u,e),e=r.sourceTracker.store(u,e),e=o(e,u),t.length>0&&(e="@media "+t+"{"+e+"}"),r.afterImport=!0;var s=w(r,{isRemote:!0,relativeTo:l.protocol+"//"+l.host+l.pathname});n.nextTick(function(){i(e,s)})})}).on("error",function(e){s(e.message)}).on("timeout",function(){s("timeout")}).setTimeout(r.inliner.timeout)}function f(e,t,n){var r="/"==e[0]?n.root:n.relativeTo,o=g.resolve(g.join(r,e));if(!m.existsSync(o)||!m.statSync(o).isFile())return n.errors.push('Broken @import declaration of "'+e+'"'),a(n);if(n.visited.indexOf(o)>-1)return a(n);n.debug&&console.error("Inlining local stylesheet: "+o),n.visited.push(o);var s=g.dirname(o),u=m.readFileSync(o,"utf8");if(n.rebase){var c={relative:!0,fromBase:s,toBase:n.baseRelativeTo};u=_(u,c,n)}var l=g.relative(n.root,o);return n.sourceReader.trackSource(l,u),u=n.sourceTracker.store(l,u),t.length>0&&(u="@media "+t+"{"+u+"}"),n.afterImport=!0,i(u,w(n,{relativeTo:s}))}function d(e,t,n){var r="@import url("+e+")"+(t.length>0?" "+t:"")+";";n.done.push(r)}var m=e("fs"),g=e("path"),v=e("http"),y=e("https"),b=e("url"),_=e("../urls/rewrite"),x=e("../utils/split"),w=e("../utils/object.js").override,k=/\/\*# sourceMappingURL=(\S+) \*\//,E=/^(https?:)?\/\//,A=/^\/\//;r.prototype.process=function(e,t){var n=this.outerContext.options.root;return t=w(t,{baseRelativeTo:this.outerContext.options.relativeTo||n,debug:this.outerContext.options.debug,done:[],errors:this.outerContext.errors,left:[],inliner:this.outerContext.options.inliner,rebase:this.outerContext.options.rebase,relativeTo:this.outerContext.options.relativeTo||n,root:n,sourceReader:this.outerContext.sourceReader,sourceTracker:this.outerContext.sourceTracker,warnings:this.outerContext.warnings,visited:[]}),i(e,t)},t.exports=r}).call(this,e("_process"))},{"../urls/rewrite":98,"../utils/object.js":102,"../utils/split":106,_process:31,fs:10,http:10,https:10,path:30,url:148}],52:[function(e,t,n){function r(e){return function(t){return"invert"==t[0]||e.isValidColor(t[0])}}function i(e){return function(t){return"inherit"!=t[0]&&e.isValidStyle(t[0])&&!e.isValidColorValue(t[0])}}function o(e,t,n){var r=n[e];return c(r.doubleValues&&2==r.defaultValue.length?[[e,t.important],[r.defaultValue[0]],[r.defaultValue[1]]]:r.doubleValues&&1==r.defaultValue.length?[[e,t.important],[r.defaultValue[0]]]:[[e,t.important],[r.defaultValue]])}function s(e){return function(t){return"inherit"!=t[0]&&e.isValidWidth(t[0])&&!e.isValidStyleKeyword(t[0])&&!e.isValidColorValue(t[0])}}function a(e,t){var n=t[e.name].components,r=[],i=e.value;if(i.length<1)return[];i.length<2&&(i[1]=i[0].slice(0)),i.length<3&&(i[2]=i[0].slice(0)),i.length<4&&(i[3]=i[1].slice(0));for(var o=n.length-1;o>=0;o--){var s=c([[n[o],e.important]]);s.value=[i[o]],r.unshift(s)}return r}function u(e,t,n){for(var a,u,c,l=t[e.name],p=[o(l.components[0],e,t),o(l.components[1],e,t),o(l.components[2],e,t)],h=0;h<3;h++){var f=p[h];f.name.indexOf("color")>0?a=f:f.name.indexOf("style")>0?u=f:c=f}if(1==e.value.length&&"inherit"==e.value[0][0]||3==e.value.length&&"inherit"==e.value[0][0]&&"inherit"==e.value[1][0]&&"inherit"==e.value[2][0])return a.value=u.value=c.value=[e.value[0]],p;var d,m,g=e.value.slice(0);return g.length>0&&(d=(m=g.filter(s(n))).length>1&&("none"==m[0][0]||"auto"==m[0][0])?m[1]:m[0])&&(c.value=[d],g.splice(g.indexOf(d),1)),g.length>0&&(d=g.filter(i(n))[0])&&(u.value=[d],g.splice(g.indexOf(d),1)),g.length>0&&(d=g.filter(r(n))[0])&&(a.value=[d],g.splice(g.indexOf(d),1)),p}var c=e("./wrap-for-optimizing").single,l=e("./invalid-property-error"),p=e("../utils/split"),h=",";t.exports={background:function(e,t,n){var r=o("background-image",e,t),i=o("background-position",e,t),s=o("background-size",e,t),a=o("background-repeat",e,t),u=o("background-attachment",e,t),c=o("background-origin",e,t),l=o("background-clip",e,t),h=o("background-color",e,t),f=[r,i,s,a,u,c,l,h],d=e.value,m=!1,g=!1,v=!1,y=!1;if(1==e.value.length&&"inherit"==e.value[0][0])return h.value=r.value=a.value=i.value=s.value=c.value=l.value=e.value,f;for(var b=d.length-1;b>=0;b--){var _=d[b];if(n.isValidBackgroundAttachment(_[0]))u.value=[_];else if(n.isValidBackgroundBox(_[0]))g?(c.value=[_],v=!0):(l.value=[_],g=!0);else if(n.isValidBackgroundRepeat(_[0]))y?a.value.unshift(_):(a.value=[_],y=!0);else if(n.isValidBackgroundPositionPart(_[0])||n.isValidBackgroundSizePart(_[0]))if(b>0){var x=d[b-1];if(x[0].indexOf("/")>0){var w=p(x[0],"/");s.value=[[w.pop()].concat(x.slice(1)),_],d[b-1]=[w.pop()].concat(x.slice(1))}else b>1&&"/"==d[b-2][0]?(s.value=[x,_],b-=2):"/"==x[0]?s.value=[_]:(m||(i.value=[]),i.value.unshift(_),m=!0)}else m||(i.value=[]),i.value.unshift(_),m=!0;else if(n.isValidBackgroundPositionAndSize(_[0])){var k=p(_[0],"/");s.value=[[k.pop()].concat(_.slice(1))],i.value=[[k.pop()].concat(_.slice(1))]}else h.value[0][0]!=t[h.name].defaultValue&&"none"!=h.value[0][0]||!n.isValidColor(_[0])?(n.isValidUrl(_[0])||n.isValidFunction(_[0]))&&(r.value=[_]):h.value=[_]}return g&&!v&&(c.value=l.value.slice(0)),f},border:u,borderRadius:function(e,t){for(var n=e.value,r=-1,i=0,s=n.length;i<s;i++)if("/"==n[i][0]){r=i;break}if(0===r||r===n.length-1)throw new l("Invalid border-radius value.");var u=o(e.name,e,t);u.value=r>-1?n.slice(0,r):n.slice(0),u.components=a(u,t);var c=o(e.name,e,t);c.value=r>-1?n.slice(r+1):n.slice(0),c.components=a(c,t);for(var p=0;p<4;p++)u.components[p].multiplex=!0,u.components[p].value=u.components[p].value.concat(c.components[p].value);return u.components},fourValues:a,listStyle:function(e,t,n){var r=o("list-style-type",e,t),i=o("list-style-position",e,t),s=o("list-style-image",e,t),a=[r,i,s];if(1==e.value.length&&"inherit"==e.value[0][0])return r.value=i.value=s.value=[e.value[0]],a;var u=e.value.slice(0),c=u.length,l=0;for(l=0,c=u.length;l<c;l++)if(n.isValidUrl(u[l][0])||"0"==u[l][0]){s.value=[u[l]],u.splice(l,1);break}for(l=0,c=u.length;l<c;l++)if(n.isValidListStyleType(u[l][0])){r.value=[u[l]],u.splice(l,1);break}return u.length>0&&n.isValidListStylePosition(u[0][0])&&(i.value=[u[0]]),a},multiplex:function(e){return function(t,n,r){var i,s,a,u,c=[],l=t.value;for(i=0,a=l.length;i<a;i++)","==l[i][0]&&c.push(i);if(0===c.length)return e(t,n,r);var p=[];for(i=0,a=c.length;i<=a;i++){var f=0===i?0:c[i-1]+1,d=i<a?c[i]:l.length,m=o(t.name,t,n);m.value=l.slice(f,d),p.push(e(m,n,r))}var g=p[0];for(i=0,a=g.length;i<a;i++)for(g[i].multiplex=!0,s=1,u=p.length;s<u;s++)g[i].value.push([h]),Array.prototype.push.apply(g[i].value,p[s][i].value);return g}},outline:u}},{"../utils/split":106,"./invalid-property-error":58,"./wrap-for-optimizing":68}],53:[function(e,t,n){function r(e,t,n){var r=e.value[0][0],o=t.value[0][0];return!(!n.colorOpacity&&(n.isValidRgbaColor(r)||n.isValidHslaColor(r)))&&(!(!n.colorOpacity&&(n.isValidRgbaColor(o)||n.isValidHslaColor(o)))&&(!(!n.isValidNamedColor(o)&&!n.isValidHexColor(o))||!n.isValidNamedColor(r)&&!n.isValidHexColor(r)&&(!(!n.isValidRgbaColor(o)&&!n.isValidHslaColor(o))||!n.isValidRgbaColor(r)&&!n.isValidHslaColor(r)&&i(e,t,n))))}function i(e,t,n){var r=e.value[0][0],i=t.value[0][0];return!!n.areSameFunction(r,i)||r===i}t.exports={always:function(){return!0},alwaysButIntoFunction:function(e,t,n){var r=e.value[0][0],i=t.value[0][0],o=n.isValidFunction(r),s=n.isValidFunction(i);return o&&s?n.areSameFunction(r,i):!(!o&&s)},backgroundImage:function(e,t,n){var r=e.value[0][0],o=t.value[0][0];return!("none"!=o&&"inherit"!=o&&!n.isValidUrl(o))||"none"!=r&&"inherit"!=r&&!n.isValidUrl(r)&&i(e,t,n)},border:function(e,t,n){return r(e.components[2],t.components[2],n)},color:r,sameValue:function(e,t){return e.value[0][0]===t.value[0][0]},sameFunctionOrValue:i,twoOptionalFunctions:function(e,t,n){var r=e.value[0][0],i=t.value[0][0];return!(n.isValidFunction(r)^n.isValidFunction(i))},unit:function(e,t,n){var r=e.value[0][0],o=t.value[0][0];return!(n.isValidAndCompatibleUnitWithoutFunction(r)&&!n.isValidAndCompatibleUnitWithoutFunction(o))&&(!!n.isValidUnitWithoutFunction(o)||!n.isValidUnitWithoutFunction(r)&&(!(!n.isValidFunctionWithoutVendorPrefix(o)||!n.isValidFunctionWithoutVendorPrefix(r))||i(e,t,n)))}}},{}],54:[function(e,t,n){function r(e){var t=i([[e.name,e.important,e.hack]]);return t.unused=!1,t}var i=e("./wrap-for-optimizing").single;t.exports={deep:function(e){for(var t=r(e),n=e.components.length-1;n>=0;n--){var i=r(e.components[n]);i.value=e.components[n].value.slice(0),t.components.unshift(i)}return t.dirty=!0,t.value=e.value.slice(0),t},shallow:r}},{"./wrap-for-optimizing":68}],55:[function(e,t,n){var r=e("./break-up"),i=e("./can-override"),o=e("./restore"),s={color:{canOverride:i.color,defaultValue:"transparent",shortestValue:"red"},background:{components:["background-image","background-position","background-size","background-repeat","background-attachment","background-origin","background-clip","background-color"],breakUp:r.multiplex(r.background),defaultValue:"0 0",restore:o.multiplex(o.background),shortestValue:"0",shorthand:!0},"background-clip":{canOverride:i.always,defaultValue:"border-box",shortestValue:"border-box"},"background-color":{canOverride:i.color,defaultValue:"transparent",multiplexLastOnly:!0,nonMergeableValue:"none",shortestValue:"red"},"background-image":{canOverride:i.backgroundImage,defaultValue:"none"},"background-origin":{canOverride:i.always,defaultValue:"padding-box",shortestValue:"border-box"},"background-repeat":{canOverride:i.always,defaultValue:["repeat"],doubleValues:!0},"background-position":{canOverride:i.alwaysButIntoFunction,defaultValue:["0","0"],doubleValues:!0,shortestValue:"0"},"background-size":{canOverride:i.alwaysButIntoFunction,defaultValue:["auto"],doubleValues:!0,shortestValue:"0 0"},"background-attachment":{canOverride:i.always,defaultValue:"scroll"},border:{breakUp:r.border,canOverride:i.border,components:["border-width","border-style","border-color"],defaultValue:"none",restore:o.withoutDefaults,shorthand:!0},"border-color":{canOverride:i.color,defaultValue:"none",shorthand:!0},"border-style":{canOverride:i.always,defaultValue:"none",shorthand:!0},"border-width":{canOverride:i.unit,defaultValue:"medium",shortestValue:"0",shorthand:!0},"list-style":{components:["list-style-type","list-style-position","list-style-image"],canOverride:i.always,breakUp:r.listStyle,restore:o.withoutDefaults,defaultValue:"outside",shortestValue:"none",shorthand:!0},"list-style-type":{canOverride:i.always,defaultValue:"__hack",shortestValue:"none"},"list-style-position":{canOverride:i.always,defaultValue:"outside",shortestValue:"inside"},"list-style-image":{canOverride:i.always,defaultValue:"none"},outline:{components:["outline-color","outline-style","outline-width"],breakUp:r.outline,restore:o.withoutDefaults,defaultValue:"0",shorthand:!0},"outline-color":{canOverride:i.color,defaultValue:"invert",shortestValue:"red"},"outline-style":{canOverride:i.always,defaultValue:"none"},"outline-width":{canOverride:i.unit,defaultValue:"medium",shortestValue:"0"},"-moz-transform":{canOverride:i.sameFunctionOrValue},"-ms-transform":{canOverride:i.sameFunctionOrValue},"-webkit-transform":{canOverride:i.sameFunctionOrValue},transform:{canOverride:i.sameFunctionOrValue}},a=function(e,t,n){n=n||{},s[e]={canOverride:n.canOverride,components:t,breakUp:n.breakUp||r.fourValues,defaultValue:n.defaultValue||"0",restore:n.restore||o.fourValues,shortestValue:n.shortestValue,shorthand:!0};for(var a=0;a<t.length;a++)s[t[a]]={breakUp:n.breakUp||r.fourValues,canOverride:n.canOverride||i.unit,defaultValue:n.defaultValue||"0",shortestValue:n.shortestValue}};["","-moz-","-o-"].forEach(function(e){a(e+"border-radius",[e+"border-top-left-radius",e+"border-top-right-radius",e+"border-bottom-right-radius",e+"border-bottom-left-radius"],{breakUp:r.borderRadius,restore:o.borderRadius})}),a("border-color",["border-top-color","border-right-color","border-bottom-color","border-left-color"],{breakUp:r.fourValues,canOverride:i.color,defaultValue:"none",shortestValue:"red"}),a("border-style",["border-top-style","border-right-style","border-bottom-style","border-left-style"],{breakUp:r.fourValues,canOverride:i.always,defaultValue:"none"}),a("border-width",["border-top-width","border-right-width","border-bottom-width","border-left-width"],{defaultValue:"medium",shortestValue:"0"}),a("padding",["padding-top","padding-right","padding-bottom","padding-left"]),a("margin",["margin-top","margin-right","margin-bottom","margin-left"]);for(var u in s)if(s[u].shorthand)for(var c=0,l=s[u].components.length;c<l;c++)s[s[u].components[c]].componentOf=u;t.exports=s},{"./break-up":52,"./can-override":53,"./restore":64}],56:[function(e,t,n){var r=e("./clone").shallow,i=",";t.exports=function(e,t,n,o){for(var s=!(t.shorthand||n.shorthand||t.multiplex||n.multiplex),a=r(t),u=r(n),c=0,l=t.value.length;c<l;c++)for(var p=0,h=n.value.length;p<h;p++)if(t.value[c][0]!=i&&n.value[p][0]!=i&&!(s&&c!=p||(a.value=[t.value[c]],u.value=[n.value[p]],e(a,u,o))))return!1;return!0}},{"./clone":54}],57:[function(e,t,n){t.exports=function(e){for(var t=e.value.length-1;t>=0;t--)if("inherit"==e.value[t][0])return!0;return!1}},{}],58:[function(e,t,n){function r(e){this.name="InvalidPropertyError",this.message=e,this.stack=(new Error).stack}(r.prototype=Object.create(Error.prototype)).constructor=r,t.exports=r},{}],59:[function(e,t,n){function r(e,t,n,r){var i,s,a={},u=null;e:for(var c=0,l=e.length;c<l;c++){var p=e[c],d=!("-ms-filter"!=p.name&&"filter"!=p.name||"background"!=u&&"background-image"!=u)?u:p.name,m=p.important,g=p.hack;if(!p.unused)if(c>0&&i&&d==u&&m==i.important&&g==i.hack&&function(t){var n=e[t-1],r=e[t];return h(n.all,n.position)==h(r.all,r.position)}(c)&&!i.unused)p.unused=!0;else{if(d in a&&(n&&d!=u||function(e){return!1===t||!0===t?t:t.indexOf(e)>-1}(c))){var v=a[d],y=o[d]&&o[d].canOverride,b=!1;for(s=v.length-1;s>=0;s--){var _=e[v[s]],x=_.name!=d,w=_.important,k=_.hack;if(!_.unused&&((!x||!w)&&(w||!(k&&!g||!k&&g))&&(!w||"star"!=g&&"underscore"!=g)&&(k||g||x||!y||y(_,p,r)))){if(w&&!m||w&&g){p.unused=!0,i=p;continue e}b=!0,_.unused=!0}}if(b){c=-1,i=null,u=null,a={};continue}}else{a[d]=a[d]||[],a[d].push(c);var E=f[d];if(E)for(s=E.length-1;s>=0;s--){var A=E[s];a[A]=a[A]||[],a[A].push(c)}}u=d,i=p}}}function i(e,t,n,o,h,f){var d=f.validator,m=f.warnings,g=s(t);a(g,d,m),r(g,n,h.aggressiveMerging,d);for(var v=0,y=g.length;v<y;v++){var b=g[v];b.variable&&b.block&&i(e,b.value[0],n,o,h,f)}o&&h.shorthandCompacting&&(u(g,h.compatibility,d),c(g,h.sourceMap,d)),p(g),l(g)}var o=e("./compactable"),s=e("./wrap-for-optimizing").all,a=e("./populate-components"),u=e("./override-compactor"),c=e("./shorthand-compactor"),l=e("./remove-unused"),p=e("./restore-from-optimizing"),h=e("../stringifier/one-time").property,f={"animation-delay":["animation"],"animation-direction":["animation"],"animation-duration":["animation"],"animation-fill-mode":["animation"],"animation-iteration-count":["animation"],"animation-name":["animation"],"animation-play-state":["animation"],"animation-timing-function":["animation"],"-moz-animation-delay":["-moz-animation"],"-moz-animation-direction":["-moz-animation"],"-moz-animation-duration":["-moz-animation"],"-moz-animation-fill-mode":["-moz-animation"],"-moz-animation-iteration-count":["-moz-animation"],"-moz-animation-name":["-moz-animation"],"-moz-animation-play-state":["-moz-animation"],"-moz-animation-timing-function":["-moz-animation"],"-o-animation-delay":["-o-animation"],"-o-animation-direction":["-o-animation"],"-o-animation-duration":["-o-animation"],"-o-animation-fill-mode":["-o-animation"],"-o-animation-iteration-count":["-o-animation"],"-o-animation-name":["-o-animation"],"-o-animation-play-state":["-o-animation"],"-o-animation-timing-function":["-o-animation"],"-webkit-animation-delay":["-webkit-animation"],"-webkit-animation-direction":["-webkit-animation"],"-webkit-animation-duration":["-webkit-animation"],"-webkit-animation-fill-mode":["-webkit-animation"],"-webkit-animation-iteration-count":["-webkit-animation"],"-webkit-animation-name":["-webkit-animation"],"-webkit-animation-play-state":["-webkit-animation"],"-webkit-animation-timing-function":["-webkit-animation"],"border-color":["border"],"border-style":["border"],"border-width":["border"],"border-bottom":["border"],"border-bottom-color":["border-bottom","border-color","border"],"border-bottom-style":["border-bottom","border-style","border"],"border-bottom-width":["border-bottom","border-width","border"],"border-left":["border"],"border-left-color":["border-left","border-color","border"],"border-left-style":["border-left","border-style","border"],"border-left-width":["border-left","border-width","border"],"border-right":["border"],"border-right-color":["border-right","border-color","border"],"border-right-style":["border-right","border-style","border"],"border-right-width":["border-right","border-width","border"],"border-top":["border"],"border-top-color":["border-top","border-color","border"],"border-top-style":["border-top","border-style","border"],"border-top-width":["border-top","border-width","border"],"font-family":["font"],"font-size":["font"],"font-style":["font"],"font-variant":["font"],"font-weight":["font"],"transition-delay":["transition"],"transition-duration":["transition"],"transition-property":["transition"],"transition-timing-function":["transition"],"-moz-transition-delay":["-moz-transition"],"-moz-transition-duration":["-moz-transition"],"-moz-transition-property":["-moz-transition"],"-moz-transition-timing-function":["-moz-transition"],"-o-transition-delay":["-o-transition"],"-o-transition-duration":["-o-transition"],"-o-transition-property":["-o-transition"],"-o-transition-timing-function":["-o-transition"],"-webkit-transition-delay":["-webkit-transition"],"-webkit-transition-duration":["-webkit-transition"],"-webkit-transition-property":["-webkit-transition"],"-webkit-transition-timing-function":["-webkit-transition"]};t.exports=i},{"../stringifier/one-time":85,"./compactable":55,"./override-compactor":60,"./populate-components":61,"./remove-unused":62,"./restore-from-optimizing":63,"./shorthand-compactor":65,"./wrap-for-optimizing":68}],60:[function(e,t,n){function r(e){return function(t){return e.name===t.name}}function i(e,t){for(var n=0;n<e.components.length;n++){var r=e.components[n],i=k[r.name],o=i&&i.canOverride||o.sameValue,s=A(r);if(s.value=[[i.defaultValue]],!o(s,r,t))return!0}return!1}function o(e,t){return k[e.name].components.indexOf(t.name)>-1}function s(e,t){t.unused=!0,p(t,h(e)),e.value=t.value}function a(e,t){t.unused=!0,e.multiplex=!0,e.value=t.value}function u(e,t){t.unused=!0,e.value=t.value}function c(e,t){t.multiplex?a(e,t):e.multiplex?s(e,t):u(e,t)}function l(e,t){t.unused=!0;for(var n=0,r=e.components.length;n<r;n++)c(e.components[n],t.components[n],e.multiplex)}function p(e,t){e.multiplex=!0;for(var n=0,r=e.components.length;n<r;n++){var i=e.components[n];if(!i.multiplex)for(var o=i.value.slice(0),s=1;s<t;s++)i.value.push([B]),Array.prototype.push.apply(i.value,o)}}function h(e){for(var t=0,n=0,r=e.value.length;n<r;n++)e.value[n][0]==B&&t++;return t+1}function f(e){var t=[[e.name]].concat(e.value);return F([t],0).length}function d(e,t,n){for(var r=0,i=t;i>=0&&(e[i].name!=n||e[i].unused||r++,!(r>1));i--);return r>1}function m(e,t){for(var n=0,r=e.components.length;n<r;n++)if(g(t.isValidFunction,e.components[n]))return!0;return!1}function g(e,t){for(var n=0,r=t.value.length;n<r;n++)if(t.value[n][0]!=B&&e(t.value[n][0]))return!0;return!1}function v(e,t){if(!e.multiplex&&!t.multiplex||e.multiplex&&t.multiplex)return!1;var n,i=e.multiplex?e:t,o=e.multiplex?t:e,u=E(i);S([u]);var c=E(o);S([c]);var l=f(u)+1+f(c);return e.multiplex?s(n=u.components.filter(r(c))[0],c):(n=c.components.filter(r(u))[0],p(c,h(u)),a(n,u)),S([c]),l<f(c)}function y(e){return e.name in k}function b(e,t){return!e.multiplex&&("background"==e.name||"background-image"==e.name)&&t.multiplex&&("background"==t.name||"background-image"==t.name)&&_(t.value)}function _(e){for(var t=x(e),n=0,r=t.length;n<r;n++)if(1==t[n].length&&"none"==t[n][0][0])return!0;return!1}function x(e){for(var t=[],n=0,r=[],i=e.length;n<i;n++){var o=e[n];o[0]==B?(t.push(r),r=[]):r.push(o)}return t.push(r),t}var w=e("./can-override"),k=e("./compactable"),E=e("./clone").deep,A=e("./clone").shallow,C=e("./has-inherit"),S=e("./restore-from-optimizing"),T=e("./every-combination"),O=e("./vendor-prefixes").same,F=e("../stringifier/one-time").property,B=",";t.exports=function(e,t,n){var s,a,u,f,_,x,E;e:for(_=e.length-1;_>=0;_--)if(a=e[_],y(a)&&!a.variable)for(s=k[a.name].canOverride||w.sameValue,x=_-1;x>=0;x--)if(u=e[x],y(u)&&!(u.variable||u.unused||a.unused||u.hack&&!a.hack||!u.hack&&a.hack||C(a)||b(u,a)))if(!u.shorthand&&a.shorthand&&o(a,u)){if(!a.important&&u.important)continue;if(!O([u],a.components))continue;if(!g(n.isValidFunction,u)&&m(a,n))continue;f=a.components.filter(r(u))[0],s=k[u.name]&&k[u.name].canOverride||w.sameValue,T(s,u,f,n)&&(u.unused=!0)}else if(u.shorthand&&!a.shorthand&&o(u,a)){if(a.important&&!u.important)continue;if(!a.important&&u.important){a.unused=!0;continue}if(d(e,_-1,u.name))continue;if(m(u,n))continue;if(f=u.components.filter(r(a))[0],T(s,f,a,n)){var A=!t.properties.backgroundClipMerging&&f.name.indexOf("background-clip")>-1||!t.properties.backgroundOriginMerging&&f.name.indexOf("background-origin")>-1||!t.properties.backgroundSizeMerging&&f.name.indexOf("background-size")>-1,S=k[a.name].nonMergeableValue===a.value[0][0];if(A||S)continue;if(!t.properties.merging&&i(u,n))continue;if(f.value[0][0]!=a.value[0][0]&&(C(u)||C(a)))continue;if(v(u,a))continue;!u.multiplex&&a.multiplex&&p(u,h(a)),c(f,a),u.dirty=!0}}else if(u.shorthand&&a.shorthand&&u.name==a.name){if(!u.multiplex&&a.multiplex)continue;if(!a.important&&u.important){a.unused=!0;continue e}if(a.important&&!u.important){u.unused=!0;continue}for(E=u.components.length-1;E>=0;E--){var F=u.components[E],B=a.components[E];if(s=k[F.name].canOverride||w.sameValue,!T(s,F,B,n))continue e;if(!T(w.twoOptionalFunctions,F,B,n)&&n.isValidFunction(B))continue e}l(u,a),u.dirty=!0}else if(u.shorthand&&a.shorthand&&o(u,a)){if(!u.important&&a.important)continue;if(f=u.components.filter(r(a))[0],s=k[a.name].canOverride||w.sameValue,!T(s,f,a,n))continue;if(u.important&&!a.important){a.unused=!0;continue}if(k[a.name].restore(a,k).length>1)continue;c(f=u.components.filter(r(a))[0],a),a.dirty=!0}else if(u.name==a.name){if(u.important&&!a.important){a.unused=!0;continue}if(s=k[a.name].canOverride||w.sameValue,!T(s,u,a,n))continue;u.unused=!0}}},{"../stringifier/one-time":85,"./can-override":53,"./clone":54,"./compactable":55,"./every-combination":56,"./has-inherit":57,"./restore-from-optimizing":63,"./vendor-prefixes":67}],61:[function(e,t,n){var r=e("./compactable"),i=e("./invalid-property-error");t.exports=function(e,t,n){for(var o=e.length-1;o>=0;o--){var s=e[o],a=r[s.name];if(a&&a.shorthand){s.shorthand=!0,s.dirty=!0;try{s.components=a.breakUp(s,r,t)}catch(e){if(!(e instanceof i))throw e;s.components=[],n.push(e.message)}s.components.length>0?s.multiplex=s.components[0].multiplex:s.unused=!0}}}},{"./compactable":55,"./invalid-property-error":58}],62:[function(e,t,n){t.exports=function(e){for(var t=e.length-1;t>=0;t--){var n=e[t];n.unused&&n.all.splice(n.position,1)}}},{}],63:[function(e,t,n){function r(e){e.value[e.value.length-1][0]+=a}function i(e){"underscore"==e.hack?e.name=c+e.name:"star"==e.hack?e.name=u+e.name:"backslash"==e.hack?e.value[e.value.length-1][0]+=s:"bang"==e.hack&&(e.value[e.value.length-1][0]+=" "+l)}var o=e("./compactable"),s="\\9",a="!important",u="*",c="_",l="!ie";t.exports=function(e,t){for(var n=e.length-1;n>=0;n--){var s,a=e[n],u=o[a.name];if(!a.unused&&(a.dirty||a.important||a.hack)&&(!t&&u&&u.shorthand?(s=u.restore(a,o),a.value=s):s=a.value,a.important&&r(a),a.hack&&i(a),"all"in a)){var c=a.all[a.position];c[0][0]=a.name,c.splice(1,c.length-1),Array.prototype.push.apply(c,s)}}}},{"./compactable":55}],64:[function(e,t,n){function r(e){for(var t=0,n=e.length;t<n;t++){var r=e[t][0];if("inherit"!=r&&r!=s&&r!=a)return!1}return!0}function i(e){var t=e.components,n=t[0].value[0],r=t[1].value[0],i=t[2].value[0],o=t[3].value[0];return n[0]==r[0]&&n[0]==i[0]&&n[0]==o[0]?[n]:n[0]==i[0]&&r[0]==o[0]?[n,r]:r[0]==o[0]?[n,r,i]:[n,r,i,o]}var o=e("./clone").shallow,s=",",a="/";t.exports={background:function(e,t,n){function i(e){Array.prototype.unshift.apply(l,e.value)}function o(e){var n=t[e.name];return n.doubleValues?1==n.defaultValue.length?e.value[0][0]==n.defaultValue[0]&&(!e.value[1]||e.value[1][0]==n.defaultValue[0]):e.value[0][0]==n.defaultValue[0]&&(e.value[1]?e.value[1][0]:e.value[0][0])==n.defaultValue[1]:e.value[0][0]==n.defaultValue}for(var s,u,c=e.components,l=[],p=c.length-1;p>=0;p--){var h=c[p],f=o(h);if("background-clip"==h.name){var d=c[p-1],m=o(d);u=!(s=h.value[0][0]==d.value[0][0])&&(m&&!f||!m&&!f||!m&&f&&h.value[0][0]!=d.value[0][0]),s?i(d):u&&(i(h),i(d)),p--}else if("background-size"==h.name){var g=c[p-1],v=o(g);u=!(s=!v&&f)&&(v&&!f||!v&&!f),s?i(g):u?(i(h),l.unshift([a]),i(g)):1==g.value.length&&i(g),p--}else{if(f||t[h.name].multiplexLastOnly&&!n)continue;i(h)}}return 0===l.length&&1==e.value.length&&"0"==e.value[0][0]&&l.push(e.value[0]),0===l.length&&l.push([t[e.name].defaultValue]),r(l)?[l[0]]:l},borderRadius:function(e,t){if(e.multiplex){for(var n=o(e),r=o(e),s=0;s<4;s++){var a=e.components[s],u=o(e);u.value=[a.value[0]],n.components.push(u);var c=o(e);c.value=[a.value[1]||a.value[0]],r.components.push(c)}var l=i(n),p=i(r);return l.length!=p.length||l[0][0]!=p[0][0]||l.length>1&&l[1][0]!=p[1][0]||l.length>2&&l[2][0]!=p[2][0]||l.length>3&&l[3][0]!=p[3][0]?l.concat([["/"]]).concat(p):l}return i(e)},fourValues:i,multiplex:function(e){return function(t,n){if(!t.multiplex)return e(t,n,!0);var r,i,a=0,u=[],c={};for(r=0,i=t.components[0].value.length;r<i;r++)t.components[0].value[r][0]==s&&a++;for(r=0;r<=a;r++){for(var l=o(t),p=0,h=t.components.length;p<h;p++){var f=t.components[p],d=o(f);l.components.push(d);for(var m=c[d.name]||0,g=f.value.length;m<g;m++){if(f.value[m][0]==s){c[d.name]=m+1;break}d.value.push(f.value[m])}}var v=e(l,n,r==a);Array.prototype.push.apply(u,v),r<a&&u.push([","])}return u}},withoutDefaults:function(e,t){for(var n=e.components,i=[],o=n.length-1;o>=0;o--){var s=n[o],a=t[s.name];s.value[0][0]!=a.defaultValue&&i.unshift(s.value[0])}return 0===i.length&&i.push([t[e.name].defaultValue]),r(i)?[i[0]]:i}}},{"./clone":54}],65:[function(e,t,n){function r(e){var t;for(var n in e){if(void 0!==t&&e[n].important!=t)return!0;t=e[n].important}return!1}function i(e){var t=[];for(var n in e){var r=e[n],i=r.all[r.position],o=i[0][i[0].length-1];Array.isArray(o)&&Array.prototype.push.apply(t,o)}return t}function o(e,t,n,r,o){var s,f=a[n],d=[[n],[f.defaultValue]],m=p(d);m.shorthand=!0,m.dirty=!0,l([m],o,[]);for(var g=0,v=f.components.length;g<v;g++){var y=t[f.components[g]],b=a[y.name].canOverride;if(c(y))return;if(!h(b,m.components[g],y,o))return;m.components[g]=u(y),m.important=y.important,s=y.all}for(var _ in t)t[_].unused=!0;if(r){var x=i(t);x.length>0&&d[0].push(x)}m.position=s.length,m.all=s,m.all.push(d),e.push(m)}function s(e,t,n,i,s){var u=e[t];for(var c in n)if(void 0===u||c!=u.name){var l=a[c],p=n[c];l.components.length>Object.keys(p).length?delete n[c]:r(p)||o(e,p,c,i,s)}}var a=e("./compactable"),u=e("./clone").deep,c=e("./has-inherit"),l=e("./populate-components"),p=e("./wrap-for-optimizing").single,h=e("./every-combination");t.exports=function(e,t,n){var r={};if(!(e.length<3)){for(var i=0,o=e.length;i<o;i++){var u=e[i];if(!u.unused&&!u.hack&&!u.variable){var c=a[u.name];if(c&&c.componentOf)if(u.shorthand)s(e,i,r,t,n);else{var l=c.componentOf;r[l]=r[l]||{},r[l][u.name]=u}}}s(e,i,r,t,n)}}},{"./clone":54,"./compactable":55,"./every-combination":56,"./has-inherit":57,"./populate-components":61,"./wrap-for-optimizing":68}],66:[function(e,t,n){function r(e){var t="(\\-?\\.?\\d+\\.?\\d*("+s.slice(0).filter(function(t){return!(t in e.units)||!0===e.units[t]}).join("|")+"|)|auto|inherit)";this.compatibleCssUnitRegex=new RegExp("^"+t+"$","i"),this.compatibleCssUnitAnyRegex=new RegExp("^(none|"+o.join("|")+"|"+t+"|"+l+"|"+u+"|"+c+")$","i"),this.colorOpacity=e.colors.opacity}var i=e("../utils/split"),o=["thin","thick","medium","inherit","initial"],s=["px","%","em","in","cm","mm","ex","pt","pc","ch","rem","vh","vm","vmin","vmax","vw"],a="(\\-?\\.?\\d+\\.?\\d*("+s.join("|")+"|)|auto|inherit)",u="[A-Z]+(\\-|[A-Z]|[0-9])+\\(.*?\\)",c="\\-(\\-|[A-Z]|[0-9])+\\(.*?\\)",l="var\\(\\-\\-[^\\)]+\\)",p="("+l+"|"+u+"|"+c+")",h="("+a+"|(\\-moz\\-|\\-webkit\\-)?calc\\([^\\)]+\\))",f="(none|"+o.join("|")+"|"+a+"|"+l+"|"+u+"|"+c+")",d=new RegExp("^"+u+"$","i"),m=new RegExp("^"+c+"$","i"),g=new RegExp("^"+l+"$","i"),v=new RegExp("^"+p+"$","i"),y=new RegExp("^"+a+"$","i"),b=new RegExp("^"+h+"$","i"),_=new RegExp("^"+f+"$","i"),x=["repeat","no-repeat","repeat-x","repeat-y","inherit"],w=["inherit","scroll","fixed","local"],k=["center","top","bottom","left","right"],E=["contain","cover"],A=["border-box","content-box","padding-box"],C=["auto","inherit","hidden","none","dotted","dashed","solid","double","groove","ridge","inset","outset"],S=["armenian","circle","cjk-ideographic","decimal","decimal-leading-zero","disc","georgian","hebrew","hiragana","hiragana-iroha","inherit","katakana","katakana-iroha","lower-alpha","lower-greek","lower-latin","lower-roman","none","square","upper-alpha","upper-latin","upper-roman"],T=["inside","outside","inherit"];r.prototype.isValidHexColor=function(e){return(4===e.length||7===e.length)&&"#"===e[0]},r.prototype.isValidRgbaColor=function(e){return(e=e.split(" ").join("")).length>0&&0===e.indexOf("rgba(")&&e.indexOf(")")===e.length-1},r.prototype.isValidHslaColor=function(e){return(e=e.split(" ").join("")).length>0&&0===e.indexOf("hsla(")&&e.indexOf(")")===e.length-1},r.prototype.isValidNamedColor=function(e){return"auto"!==e&&("transparent"===e||"inherit"===e||/^[a-zA-Z]+$/.test(e))},r.prototype.isValidVariable=function(e){return g.test(e)},r.prototype.isValidColor=function(e){return this.isValidNamedColor(e)||this.isValidColorValue(e)||this.isValidVariable(e)||this.isValidVendorPrefixedValue(e)},r.prototype.isValidColorValue=function(e){return this.isValidHexColor(e)||this.isValidRgbaColor(e)||this.isValidHslaColor(e)},r.prototype.isValidUrl=function(e){return 0===e.indexOf("__ESCAPED_URL_CLEAN_CSS")},r.prototype.isValidUnit=function(e){return _.test(e)},r.prototype.isValidUnitWithoutFunction=function(e){return y.test(e)},r.prototype.isValidAndCompatibleUnit=function(e){return this.compatibleCssUnitAnyRegex.test(e)},r.prototype.isValidAndCompatibleUnitWithoutFunction=function(e){return this.compatibleCssUnitRegex.test(e)},r.prototype.isValidFunctionWithoutVendorPrefix=function(e){return d.test(e)},r.prototype.isValidFunctionWithVendorPrefix=function(e){return m.test(e)},r.prototype.isValidFunction=function(e){return v.test(e)},r.prototype.isValidBackgroundRepeat=function(e){return x.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidBackgroundAttachment=function(e){return w.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidBackgroundBox=function(e){return A.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidBackgroundPositionPart=function(e){return k.indexOf(e)>=0||b.test(e)||this.isValidVariable(e)},r.prototype.isValidBackgroundPosition=function(e){if("inherit"===e)return!0;for(var t=e.split(" "),n=0,r=t.length;n<r;n++)if(""!==t[n]&&!this.isValidBackgroundPositionPart(t[n])&&!this.isValidVariable(t[n]))return!1;return!0},r.prototype.isValidBackgroundSizePart=function(e){return E.indexOf(e)>=0||y.test(e)||this.isValidVariable(e)},r.prototype.isValidBackgroundPositionAndSize=function(e){if(e.indexOf("/")<0)return!1;var t=i(e,"/");return this.isValidBackgroundSizePart(t.pop())&&this.isValidBackgroundPositionPart(t.pop())},r.prototype.isValidListStyleType=function(e){return S.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidListStylePosition=function(e){return T.indexOf(e)>=0||this.isValidVariable(e)},r.prototype.isValidStyle=function(e){return this.isValidStyleKeyword(e)||this.isValidVariable(e)},r.prototype.isValidStyleKeyword=function(e){return C.indexOf(e)>=0},r.prototype.isValidWidth=function(e){return this.isValidUnit(e)||this.isValidWidthKeyword(e)||this.isValidVariable(e)},r.prototype.isValidWidthKeyword=function(e){return o.indexOf(e)>=0},r.prototype.isValidVendorPrefixedValue=function(e){return/^-([A-Za-z0-9]|-)*$/gi.test(e)},r.prototype.areSameFunction=function(e,t){return!(!this.isValidFunction(e)||!this.isValidFunction(t))&&e.substring(0,e.indexOf("("))===t.substring(0,t.indexOf("("))},t.exports=r},{"../utils/split":106}],67:[function(e,t,n){function r(e){for(var t=[],n=0,r=e.length;n<r;n++)for(var o=e[n],s=0,a=o.value.length;s<a;s++){var u=i.exec(o.value[s][0]);u&&-1==t.indexOf(u[0])&&t.push(u[0])}return t}var i=/$\-moz\-|\-ms\-|\-o\-|\-webkit\-/;t.exports={same:function(e,t){return r(e).sort().join(",")==r(t).sort().join(",")}}},{}],68:[function(e,t,n){function r(e){for(var t=1,n=e.length;t<n;t++)if(","==e[t][0]||"/"==e[t][0])return!0;return!1}function i(e){var t=!1,n=e[0][0],r=e[e.length-1];return n[0]==d?t="underscore":n[0]==f?t="star":r[0][0]!=m||r[0].match(p)?r[0].indexOf(m)>0&&!r[0].match(p)?t="bang":r[0].indexOf(l)>0&&r[0].indexOf(l)==r[0].length-l.length-1?t="backslash":0===r[0].indexOf(l)&&2==r[0].length&&(t="backslash"):t="bang",t}function o(e){if(e.length>1){var t=e[e.length-1][0];if("string"==typeof t)return h.test(t)}return!1}function s(e){e.length>0&&(e[e.length-1][0]=e[e.length-1][0].replace(h,""))}function a(e){e[0][0]=e[0][0].substring(1)}function u(e,t){var n=e[e.length-1];n[0]=n[0].substring(0,n[0].indexOf("backslash"==t?l:m)).trim(),0===n[0].length&&e.pop()}function c(e){var t=o(e);t&&s(e);var n=i(e);"star"==n||"underscore"==n?a(e):"backslash"!=n&&"bang"!=n||u(e,n);var c=0===e[0][0].indexOf("--");return{block:c&&e[1]&&Array.isArray(e[1][0][0]),components:[],dirty:!1,hack:n,important:t,name:e[0][0],multiplex:e.length>2&&r(e),position:0,shorthand:!1,unused:e.length<2,value:e.slice(1),variable:c}}var l="\\",p=new RegExp("important$","i"),h=new RegExp("!important$","i"),f="*",d="_",m="!";t.exports={all:function(e){for(var t=[],n=e.length-1;n>=0;n--)if("string"!=typeof e[n][0]){var r=c(e[n]);r.all=e,r.position=n,t.unshift(r)}return t},single:c}},{}],69:[function(e,t,n){function r(e){for(var t=0,n=e.length;t<n;t++){var i=e[t],o=!1;switch(i[0]){case"selector":o=0===i[1].length||0===i[2].length;break;case"block":r(i[2]),o=0===i[2].length}o&&(e.splice(t,1),t--,n--)}}function i(e,t,n){for(var r=0,i=e.length;r<i;r++){var o=e[r];if("block"==o[0]){var a=/@(-moz-|-o-|-webkit-)?keyframes/.test(o[1][0]);s(o[2],t,n,!a)}}}function o(e,t,n){for(var r=0,i=e.length;r<i;r++){var s=e[r];switch(s[0]){case"selector":a(s[1],s[2],!1,!0,t,n);break;case"block":o(s[2],t,n)}}}function s(e,t,n,a){if(i(e,t,n),o(e,t,n),u(e),c(e,t,n),l(e,t,n),p(e,t,n),h(e,t),t.restructuring&&a&&(f(e,t),c(e,t,n)),t.mediaMerging){d(e);for(var g=m(e),v=g.length-1;v>=0;v--)s(g[v][2],t,n,!1)}r(e)}var a=e("../properties/optimizer"),u=e("./remove-duplicates"),c=e("./merge-adjacent"),l=e("./reduce-non-adjacent"),p=e("./merge-non-adjacent-by-selector"),h=e("./merge-non-adjacent-by-body"),f=e("./restructure"),d=e("./remove-duplicate-media-queries"),m=e("./merge-media-queries");t.exports=s},{"../properties/optimizer":59,"./merge-adjacent":73,"./merge-media-queries":74,"./merge-non-adjacent-by-body":75,"./merge-non-adjacent-by-selector":76,"./reduce-non-adjacent":77,"./remove-duplicate-media-queries":78,"./remove-duplicates":79,"./restructure":81}],70:[function(e,t,n){function r(e,t){return"["+t.replace(/ /g,"")+"]"}function i(e,t){return e[0]>t[0]?1:-1}function o(e,t,n,r){return t&&n&&r.length?t+n+" ":t&&n?t+n:n}var s={selectors:function(e,t,n){for(var s=[],a=[],u=0,c=e.length;u<c;u++){var l=e[u],p=l[0].replace(/\s+/g," ").replace(/ ?, ?/g,",").replace(/\s*(\\)?([>+~])(\s*)/g,o).trim();n&&p.indexOf("nav")>0&&(p=p.replace(/\+nav(\S|$)/,"+ nav$1")),(!t||-1==p.indexOf("*+html ")&&-1==p.indexOf("*:first-child+html "))&&(p.indexOf("*")>-1&&(p=p.replace(/\*([:#\.\[])/g,"$1").replace(/^(\:first\-child)?\+html/,"*$1+html")),p.indexOf("[")>-1&&(p=p.replace(/\[([^\]]+)\]/g,r)),-1==a.indexOf(p)&&(l[0]=p,a.push(p),s.push(l)))}return s.sort(i)},selectorDuplicates:function(e){for(var t=[],n=[],r=0,o=e.length;r<o;r++){var s=e[r];-1==n.indexOf(s[0])&&(n.push(s[0]),t.push(s))}return t.sort(i)},block:function(e,t){e[0]=e[0].replace(/\s+/g," ").replace(/(,|:|\() /g,"$1").replace(/ \)/g,")"),t||(e[0]=e[0].replace(/\) /g,")"))},atRule:function(e){e[0]=e[0].replace(/\s+/g," ").trim()}};t.exports=s},{}],71:[function(e,t,n){function r(e){var t=[];if("selector"==e[0])for(var n=!/[\.\+>~]/.test(o(e[1])),u=0,c=e[2].length;u<c;u++){var l=e[2][u];if(0!==l.indexOf("__ESCAPED")&&l[0]!=a){var p=e[2][u][0][0];if(0!==p.length&&0!==p.indexOf("--")){var h=s(e[2],u);t.push([p,h,i(p),e[2][u],p+":"+h,e[1],n])}}}else if("block"==e[0])for(var f=0,d=e[2].length;f<d;f++)t=t.concat(r(e[2][f]));return t}function i(e){return"list-style"==e?e:e.indexOf("-radius")>0?"border-radius":"border-collapse"==e||"border-spacing"==e||"border-image"==e?e:0===e.indexOf("border-")&&/^border\-\w+\-\w+$/.test(e)?e.match(/border\-\w+/)[0]:0===e.indexOf("border-")&&/^border\-\w+$/.test(e)?"border":0===e.indexOf("text-")?e:e.replace(/^\-\w+\-/,"").match(/([a-zA-Z]+)/)[0].toLowerCase()}var o=e("../stringifier/one-time").selectors,s=e("../stringifier/one-time").value,a="at-rule";t.exports=r},{"../stringifier/one-time":85}],72:[function(e,t,n){t.exports=function(e,t){return e.compatibility.selectors.special.test(t)}},{}],73:[function(e,t,n){var r=e("../properties/optimizer"),i=e("../stringifier/one-time").body,o=e("../stringifier/one-time").selectors,s=e("./clean-up").selectors,a=e("./is-special");t.exports=function(e,t,n){for(var u=[null,[],[]],c=t.compatibility.selectors.adjacentSpace,l=0,p=e.length;l<p;l++){var h=e[l];if("selector"==h[0])if("selector"==u[0]&&o(h[1])==o(u[1])){var f=[u[2].length];Array.prototype.push.apply(u[2],h[2]),r(h[1],u[2],f,!0,t,n),h[2]=[]}else"selector"!=u[0]||i(h[2])!=i(u[2])||a(t,o(h[1]))||a(t,o(u[1]))?u=h:(u[1]=s(u[1].concat(h[1]),!1,c),h[2]=[]);else u=[null,[],[]]}}},{"../properties/optimizer":59,"../stringifier/one-time":85,"./clean-up":70,"./is-special":72}],74:[function(e,t,n){var r=e("./reorderable").canReorder,i=e("./extractor");t.exports=function(e){for(var t={},n=[],o=e.length-1;o>=0;o--){var s=e[o];if("block"==s[0]){var a=t[s[1][0]];a||(a=[],t[s[1][0]]=a),a.push(o)}}for(var u in t){var c=t[u];e:for(var l=c.length-1;l>0;l--){var p=c[l],h=e[p],f=c[l-1],d=e[f];t:for(var m=1;m>=-1;m-=2){for(var g=1==m,v=g?p+1:f-1,y=g?f:p,b=g?1:-1,_=g?h:d,x=g?d:h,w=i(_);v!=y;){var k=i(e[v]);if(v+=b,!r(w,k))continue t}x[2]=g?_[2].concat(x[2]):x[2].concat(_[2]),_[2]=[],n.push(x);continue e}}}return n}},{"./extractor":71,"./reorderable":80}],75:[function(e,t,n){function r(e){return/\.|\*| :/.test(e)}function i(e){var t=u(e[1]);return t.indexOf("__")>-1||t.indexOf("--")>-1}function o(e){return e.replace(/--[^ ,>\+~:]+/g,"")}function s(e,t){var n=o(u(e[1]));for(var r in t){var i=t[r],s=o(u(i[1]));(s.indexOf(n)>-1||n.indexOf(s)>-1)&&delete t[r]}}var a=e("../stringifier/one-time").body,u=e("../stringifier/one-time").selectors,c=e("./clean-up").selectors,l=e("./is-special");t.exports=function(e,t){for(var n={},o=t.compatibility.selectors.adjacentSpace,p=e.length-1;p>=0;p--){var h=e[p];if("selector"==h[0]){h[2].length>0&&!t.semanticMerging&&r(u(h[1]))&&(n={}),h[2].length>0&&t.semanticMerging&&i(h)&&s(h,n);var f=a(h[2]),d=n[f];!d||l(t,u(h[1]))||l(t,u(d[1]))||(h[1]=h[2].length>0?c(d[1].concat(h[1]),!1,o):d[1].concat(h[1]),d[2]=[],n[f]=null),n[a(h[2])]=h}}}},{"../stringifier/one-time":85,"./clean-up":70,"./is-special":72}],76:[function(e,t,n){var r=e("../properties/optimizer"),i=e("../stringifier/one-time").selectors,o=e("./extractor"),s=e("./reorderable").canReorder;t.exports=function(e,t,n){var a,u={},c=[];for(a=e.length-1;a>=0;a--)if("selector"==e[a][0]&&0!==e[a][2].length){var l=i(e[a][1]);u[l]=[a].concat(u[l]||[]),2==u[l].length&&c.push(l)}for(a=c.length-1;a>=0;a--){var p=u[c[a]];e:for(var h=p.length-1;h>0;h--){var f=p[h-1],d=e[f],m=p[h],g=e[m];t:for(var v=1;v>=-1;v-=2){for(var y,b=1==v,_=b?f+1:m-1,x=b?m:f,w=b?1:-1,k=b?d:g,E=b?g:d,A=o(k);_!=x;){var C=o(e[_]);_+=w;var S=b?s(A,C):s(C,A);if(!S&&!b)continue e;if(!S&&b)continue t}b?(y=[k[2].length],Array.prototype.push.apply(k[2],E[2]),E[2]=k[2]):(y=[E[2].length],Array.prototype.push.apply(E[2],k[2])),r(E[1],E[2],y,!0,t,n),k[2]=[]}}}}},{"../properties/optimizer":59,"../stringifier/one-time":85,"./extractor":71,"./reorderable":80}],77:[function(e,t,n){function r(e){for(var t=[],n=0;n<e.length;n++)t.push([e[n][0]]);return t}function i(e,t,n,r,i){for(var o=0,a=t.length;o<a;o++){var u=t[o],c=n[u];s(e,u,c,{filterOut:function(e,t){return c[e].isPartial&&0===t.length},callback:function(e,t,n,r){c[n-r-1].isPartial||(e[2]=t)}},r,i)}}function o(e,t,n,r){var i={};e:for(var o in t){var a=t[o];if(a[0].isComplex){var c=a[a.length-1].where,p=e[c],h=[],f=l(n,o)?[o]:a[0].list;i.intoPosition=c,i.reducedBodies=h;for(var d=0,m=f.length;d<m;d++){var g=f[d],v=t[g];if(v.length<2)continue e;if(i.data=v,s(e,g,v,{filterOut:function(e){return i.data[e].where<i.intoPosition},callback:function(e,t,n,r){0===r&&i.reducedBodies.push(t)}},n,r),u(h[h.length-1])!=u(h[0]))continue e}p[2]=h[0]}}}function s(e,t,n,r,i,o){for(var s=[],u=[],c=[],l=[],h=n.length-1,f=0;h>=0;h--)if(!r.filterOut(h,s)){var d=n[h].where,m=e[d],g=p(m[2]);s=s.concat(g),u.push(g),l.push(d)}for(h=0,f=u.length;h<f;h++)u[h].length>0&&c.push((c.length>0?c[c.length-1]:0)+u[h].length);a(t,s,c,!1,i,o);for(var v=l.length,y=s.length-1,b=v-1;b>=0;)if((0===b||s[y]&&u[b].indexOf(s[y])>-1)&&y>-1)y--;else{var _=s.splice(y+1);r.callback(e[l[b]],_,v,b),b--}}var a=e("../properties/optimizer"),u=e("../stringifier/one-time").body,c=e("../stringifier/one-time").selectors,l=e("./is-special"),p=e("../utils/clone-array");t.exports=function(e,t,n){for(var s={},a=[],u=e.length-1;u>=0;u--){var p=e[u];if("selector"==p[0]&&0!==p[2].length)for(var h=c(p[1]),f=p[1].length>1&&!l(t,h),d=t.sourceMap?r(p[1]):p[1],m=f?[h].concat(d):[h],g=0,v=m.length;g<v;g++){var y=m[g];s[y]?a.push(y):s[y]=[],s[y].push({where:u,list:d,isPartial:f&&g>0,isComplex:f&&0===g})}}i(e,a,s,t,n),o(e,s,t,n)}},{"../properties/optimizer":59,"../stringifier/one-time":85,"../utils/clone-array":99,"./is-special":72}],78:[function(e,t,n){var r=e("../stringifier/one-time").all;t.exports=function(e){for(var t={},n=0,i=e.length;n<i;n++){var o=e[n];if("block"==o[0]){var s=o[1][0]+"%"+r(o[2]),a=t[s];a&&(a[2]=[]),t[s]=o}}}},{"../stringifier/one-time":85}],79:[function(e,t,n){var r=e("../stringifier/one-time").body,i=e("../stringifier/one-time").selectors;t.exports=function(e){for(var t,n,o,s,a={},u=[],c=0,l=e.length;c<l;c++)"selector"==(n=e[c])[0]&&(a[t=i(n[1])]&&1==a[t].length?u.push(t):a[t]=a[t]||[],a[t].push(c));for(c=0,l=u.length;c<l;c++){s=[];for(var p=a[t=u[c]].length-1;p>=0;p--)n=e[a[t][p]],o=r(n[2]),s.indexOf(o)>-1?n[2]=[]:s.push(o)}}},{"../stringifier/one-time":85}],80:[function(e,t,n){function r(e,t){var n=e[0],r=e[1],d=e[2],m=e[5],g=e[6],v=t[0],y=t[1],b=t[2],_=t[5],x=t[6];return!("font"==n&&"line-height"==v||"font"==v&&"line-height"==n)&&((!h.test(n)||!h.test(v))&&(!(d==b&&o(n)==o(v)&&i(n)^i(v))&&(("border"!=d||!f.test(b)||!("border"==n||n==b||r!=y&&s(n,v)))&&(("border"!=b||!f.test(d)||!("border"==v||v==d||r!=y&&s(n,v)))&&(("border"!=d||"border"!=b||n==v||!(a(n)&&u(v)||u(n)&&a(v)))&&(d!=b||(!(n!=v||d!=b||r!=y&&!c(r,y))||(n!=v&&d==b&&n!=d&&v!=b||(n!=v&&d==b&&r==y||!(!x||!g||p(d)||p(b)||!l(_,m)))))))))))}function i(e){return/^\-(?:moz|webkit|ms|o)\-/.test(e)}function o(e){return e.replace(/^\-(?:moz|webkit|ms|o)\-/,"")}function s(e,t){return e.split("-").pop()==t.split("-").pop()}function a(e){return"border-top"==e||"border-right"==e||"border-bottom"==e||"border-left"==e}function u(e){return"border-color"==e||"border-style"==e||"border-width"==e}function c(e,t){return i(e)&&i(t)&&e.split("-")[1]!=t.split("-")[2]}function l(e,t){for(var n=0,r=e.length;n<r;n++)for(var i=0,o=t.length;i<o;i++)if(e[n][0]==t[i][0])return!1;return!0}function p(e){return"font"==e||"line-height"==e||"list-style"==e}var h=/align\-items|box\-align|box\-pack|flex|justify/,f=/^border\-(top|right|bottom|left|color|style|width|radius)/;t.exports={canReorder:function(e,t){for(var n=t.length-1;n>=0;n--)for(var i=e.length-1;i>=0;i--)if(!r(e[i],t[n]))return!1;return!0},canReorderSingle:r}},{}],81:[function(e,t,n){function r(e,t){return e>t}function i(e,t){var n=p(e);return n[5]=n[5].concat(t[5]),n}var o=e("./extractor"),s=e("./reorderable").canReorderSingle,a=e("../stringifier/one-time").body,u=e("../stringifier/one-time").selectors,c=e("./clean-up").selectorDuplicates,l=e("./is-special"),p=e("../utils/clone-array");t.exports=function(e,t){function n(e,t,n){for(var r=n.length-1;r>=0;r--){var i=p(t,n[r][0]);if(C[i].length>1&&k(e,C[i])){h(i);break}}}function p(e,t){var n=f(t);return C[n]=C[n]||[],C[n].push([e,t]),n}function h(e){var t,n=e.split(O),r=[];for(var i in C){var o=i.split(O);for(t=o.length-1;t>=0;t--)if(n.indexOf(o[t])>-1){r.push(i);break}}for(t=r.length-1;t>=0;t--)delete C[r[t]]}function f(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(u(e[n][1]));return t.join(O)}function d(e){for(var n=[],r=[],i=e.length-1;i>=0;i--)l(t,u(e[i][1]))||(r.unshift(e[i]),e[i][2].length>0&&-1==n.indexOf(e[i])&&n.push(e[i]));return n.length>1?r:[]}function m(e,t){var r=t[0],i=t[1],o=t[4],s=r.length+i.length+1,a=[],u=[],l=d(E[o]);if(!(l.length<2)){var p=v(l,s,1),h=p[0];if(h[1]>0)return n(e,t,p);for(var f=h[0].length-1;f>=0;f--)a=h[0][f][1].concat(a),u.unshift(h[0][f]);_(e,[t],a=c(a),u)}}function g(e,t){return e[1]>t[1]}function v(e,t,n){return y(e,t,n,T-1).sort(g)}function y(e,t,n,r){var i=[[e,b(e,t,n)]];if(e.length>2&&r>0)for(var o=e.length-1;o>=0;o--){var s=Array.prototype.slice.call(e,0);s.splice(o,1),i=i.concat(y(s,t,n,r-1))}return i}function b(e,t,n){for(var r=0,i=e.length-1;i>=0;i--)r+=e[i][2].length>n?u(e[i][1]).length:-1;return r-(e.length-1)*t+1}function _(t,n,r,i){var o,s,u,c,l=[];for(o=i.length-1;o>=0;o--){var p=i[o];for(s=p[2].length-1;s>=0;s--){var h=p[2][s];for(u=0,c=n.length;u<c;u++){var f=n[u],d=h[0][0],m=f[0],g=f[4];if(d==m&&a([h])==g){p[2].splice(s,1);break}}}}for(o=n.length-1;o>=0;o--)l.unshift(n[o][3]);var v=["selector",r,l];e.splice(t,0,v)}function x(e,t){var n=t[4],r=E[n];r&&r.length>1&&(w(e,t)||m(e,t))}function w(e,t){var n,r,i=[],o=[],s=t[4],a=d(E[s]);if(!(a.length<2)){e:for(var u in E){var c=E[u];for(n=a.length-1;n>=0;n--)if(-1==c.indexOf(a[n]))continue e;i.push(u)}if(i.length<2)return!1;for(n=i.length-1;n>=0;n--)for(r=A.length-1;r>=0;r--)if(A[r][4]==i[n]){o.unshift([A[r],a]);break}return k(e,o)}}function k(e,t){for(var n,r=0,i=[],o=t.length-1;o>=0;o--)r+=(n=t[o][0])[4].length+(o>0?1:0),i.push(n);var s=v(t[0][1],r,i.length)[0];if(s[1]>0)return!1;var a=[],u=[];for(o=s[0].length-1;o>=0;o--)a=s[0][o][1].concat(a),u.unshift(s[0][o]);for(_(e,i,a=c(a),u),o=i.length-1;o>=0;o--){n=i[o];var l=A.indexOf(n);delete E[n[4]],l>-1&&-1==S.indexOf(l)&&S.push(l)}return!0}for(var E={},A=[],C={},S=[],T=2,O="%",F=e.length-1;F>=0;F--){var B,D,L,N,M,R=e[F];if("selector"==R[0])B=!0;else{if("block"!=R[0])continue;B=!1}var P=A.length,I=o(R);S=[];var j=[];for(D=I.length-1;D>=0;D--)for(L=D-1;L>=0;L--)if(!s(I[D],I[L])){j.push(D);break}for(D=I.length-1;D>=0;D--){var V=I[D],z=!1;for(L=0;L<P;L++){var U=A[L];-1!=S.indexOf(L)||s(V,U)||function(e,t,n){if(e[0]!=t[0])return!1;var r=t[4],i=E[r];return i&&i.indexOf(n)>-1}(V,U,R)||(x(F+1,U),-1==S.indexOf(L)&&(S.push(L),delete E[U[4]])),z||(z=V[0]==U[0]&&V[1]==U[1])&&(M=L)}if(B&&!(j.indexOf(D)>-1)){var $=V[4];E[$]=E[$]||[],E[$].push(R),z?A[M]=i(A[M],V):A.push(V)}}for(D=0,N=(S=S.sort(r)).length;D<N;D++){var q=S[D]-D;A.splice(q,1)}}for(var H=e[0]&&"at-rule"==e[0][0]&&0===e[0][1][0].indexOf("@charset")?1:0;H<e.length-1;H++){var W="at-rule"===e[H][0]&&0===e[H][1][0].indexOf("@import"),G="text"===e[H][0]&&0===e[H][1][0].indexOf("__ESCAPED_COMMENT_SPECIAL");if(!W&&!G)break}for(F=0;F<A.length;F++)x(H,A[F])}},{"../stringifier/one-time":85,"../utils/clone-array":99,"./clean-up":70,"./extractor":71,"./is-special":72,"./reorderable":80}],82:[function(e,t,n){function r(e,t){return e.value[t]&&"-"==e.value[t][0][0]&&parseFloat(e.value[t][0])<0}function i(e,t){return-1==t.indexOf("0")?t:(t.indexOf("-")>-1&&(t=t.replace(/([^\w\d\-]|^)\-0([^\.]|$)/g,"$10$2").replace(/([^\w\d\-]|^)\-0([^\.]|$)/g,"$10$2")),t.replace(/(^|\s)0+([1-9])/g,"$1$2").replace(/(^|\D)\.0+(\D|$)/g,"$10$2").replace(/(^|\D)\.0+(\D|$)/g,"$10$2").replace(/\.([1-9]*)0+(\D|$)/g,function(e,t,n){return(t.length>0?".":"")+t+n}).replace(/(^|\D)0\.(\d)/g,"$1.$2"))}function o(e,t){return-1==t.indexOf("0deg")?t:t.replace(/\(0deg\)/g,"(0)")}function s(e,t){return e.indexOf("filter")>-1||-1==t.indexOf(" ")?t:((t=t.replace(/\s+/g," ")).indexOf("calc")>-1&&(t=t.replace(/\) ?\/ ?/g,")/ ")),t.replace(/\( /g,"(").replace(/ \)/g,")").replace(/, /g,","))}function a(e,t,n){return-1===n.value||-1===t.indexOf(".")?t:t.replace(n.regexp,function(e,t){return Math.round(parseFloat(t)*n.multiplier)/n.multiplier+"px"}).replace(/(\d)\.($|\D)/g,"$1$2")}function u(e,t,n){return/^(?:\-moz\-calc|\-webkit\-calc|calc)\(/.test(t)?t:"flex"==e||"-ms-flex"==e||"-webkit-flex"==e||"flex-basis"==e||"-webkit-flex-basis"==e?t:t.indexOf("%")>0&&("height"==e||"max-height"==e||"width"==e||"max-width"==e)?t:t.replace(n,"$10$2").replace(n,"$10$2")}function c(e){var t,n=e.value;4==n.length&&"0"===n[0][0]&&"0"===n[1][0]&&"0"===n[2][0]&&"0"===n[3][0]&&(t=e.name.indexOf("box-shadow")>-1?2:1),t&&(e.value.splice(t),e.dirty=!0)}function l(e,t,n){return-1===t.indexOf("#")&&-1==t.indexOf("rgb")&&-1==t.indexOf("hsl")?S.shorten(t):(t=t.replace(/rgb\((\-?\d+),(\-?\d+),(\-?\d+)\)/g,function(e,t,n,r){return new A(t,n,r).toHex()}).replace(/hsl\((-?\d+),(-?\d+)%?,(-?\d+)%?\)/g,function(e,t,n,r){return new C(t,n,r).toHex()}).replace(/(^|[^='"])#([0-9a-f]{6})/gi,function(e,t,n){return n[0]==n[1]&&n[2]==n[3]&&n[4]==n[5]?t+"#"+n[0]+n[2]+n[4]:t+"#"+n}).replace(/(rgb|rgba|hsl|hsla)\(([^\)]+)\)/g,function(e,t,n){var r=n.split(",");return"hsl"==t&&3==r.length||"hsla"==t&&4==r.length||"rgb"==t&&3==r.length&&n.indexOf("%")>0||"rgba"==t&&4==r.length&&n.indexOf("%")>0?(-1==r[1].indexOf("%")&&(r[1]+="%"),-1==r[2].indexOf("%")&&(r[2]+="%"),t+"("+r.join(",")+")"):e}),n.colors.opacity&&-1==e.indexOf("background")&&(t=t.replace(/(?:rgba|hsla)\(0,0%?,0%?,0\)/g,function(e){return E(t,",").pop().indexOf("gradient(")>-1?e:"transparent"})),S.shorten(t))}function p(e,t,n){return I.test(t)?t.replace(I,function(e,t){var r,i=parseInt(t);return 0===i?e:(n.properties.shorterLengthUnits&&n.units.pt&&3*i%4==0&&(r=3*i/4+"pt"),n.properties.shorterLengthUnits&&n.units.pc&&i%16==0&&(r=i/16+"pc"),n.properties.shorterLengthUnits&&n.units.in&&i%96==0&&(r=i/96+"in"),r&&(r=e.substring(0,e.indexOf(t))+r),r&&r.length<e.length?r:e)}):t}function h(e,t){return j.test(t)?t.replace(j,function(e,t,n){var r;return"ms"==n?r=parseInt(t)/1e3+"s":"s"==n&&(r=1e3*parseFloat(t)+"ms"),r.length<e.length?r:e}):t}function f(e){var t,n=e.value;3==n.length&&"/"==n[1][0]&&n[0][0]==n[2][0]?t=1:5==n.length&&"/"==n[2][0]&&n[0][0]==n[3][0]&&n[1][0]==n[4][0]?t=2:7==n.length&&"/"==n[3][0]&&n[0][0]==n[4][0]&&n[1][0]==n[5][0]&&n[2][0]==n[6][0]?t=3:9==n.length&&"/"==n[4][0]&&n[0][0]==n[5][0]&&n[1][0]==n[6][0]&&n[2][0]==n[7][0]&&n[3][0]==n[8][0]&&(t=4),t&&(e.value.splice(t),e.dirty=!0)}function d(e){1==e.value.length&&(e.value[0][0]=e.value[0][0].replace(/progid:DXImageTransform\.Microsoft\.(Alpha|Chroma)(\W)/,function(e,t,n){return t.toLowerCase()+n})),e.value[0][0]=e.value[0][0].replace(/,(\S)/g,", $1").replace(/ ?= ?/g,"=")}function m(e){var t=e.value;if(!(M.indexOf(t[0][0])>-1||t[1]&&M.indexOf(t[1][0])>-1||t[2]&&M.indexOf(t[2][0])>-1)&&"/"!=t[1]){var n=0;if("normal"==t[0][0]&&n++,t[1]&&"normal"==t[1][0]&&n++,t[2]&&"normal"==t[2][0]&&n++,!(n>1)){var r;P.indexOf(t[0][0])>-1?r=0:t[1]&&P.indexOf(t[1][0])>-1?r=1:t[2]&&P.indexOf(t[2][0])>-1?r=2:R.indexOf(t[0][0])>-1?r=0:t[1]&&R.indexOf(t[1][0])>-1?r=1:t[2]&&R.indexOf(t[2][0])>-1&&(r=2),void 0!==r&&(e.value[r][0]=V["font-weight"](t[r][0]),e.dirty=!0)}}}function g(e,t){for(var n,v,y,b=T(e),_=0,x=b.length;_<x;_++)if(n=b[_],v=n.name,n.hack&&(("star"==n.hack||"underscore"==n.hack)&&!t.compatibility.properties.iePrefixHack||"backslash"==n.hack&&!t.compatibility.properties.ieSuffixHack||"bang"==n.hack&&!t.compatibility.properties.ieBangHack)&&(n.unused=!0),0===v.indexOf("padding")&&(r(n,0)||r(n,1)||r(n,2)||r(n,3))&&(n.unused=!0),!n.unused)if(n.variable)n.block&&g(n.value[0],t);else{for(var w=0,k=n.value.length;w<k;w++)y=n.value[w][0],V[v]&&(y=V[v](y,w,k)),y=i(v,y=h(v,y=p(v,y=a(v,y=s(v,y),t.precision),t.compatibility))),t.compatibility.properties.zeroUnits&&(y=u(v,y=o(v,y),t.unitsRegexp)),t.compatibility.properties.colors&&(y=l(v,y,t.compatibility)),n.value[w][0]=y;c(n),0===v.indexOf("border")&&v.indexOf("radius")>0?f(n):"filter"==v?d(n):"font"==v&&m(n)}O(b,!0),F(b)}function v(e){for(var t=!1,n=0,r=e.length;n<r;n++){var i=e[n];"at-rule"==i[0]&&(L.test(i[1][0])&&(t||-1==i[1][0].indexOf(D)?(e.splice(n,1),n--,r--):(t=!0,e.splice(n,1),e.unshift(["at-rule",[i[1][0].replace(L,D)]]))))}}function y(e){var t=["px","em","ex","cm","mm","in","pt","pc","%"];return["ch","rem","vh","vm","vmax","vmin","vw"].forEach(function(n){e.compatibility.units[n]&&t.push(n)}),new RegExp("(^|\\s|\\(|,)0(?:"+t.join("|")+")(\\W|$)","g")}function b(e){var t={};return t.value=void 0===e.roundingPrecision?B:e.roundingPrecision,t.multiplier=Math.pow(10,t.value),t.regexp=new RegExp("(\\d*\\.\\d{"+(t.value+1)+",})px","g"),t}function _(e,t,n){var r=t.compatibility.selectors.ie7Hack,i=t.compatibility.selectors.adjacentSpace,o=t.compatibility.properties.spaceAfterClosingBrace,s=!1,a=!1;t.unitsRegexp=y(t),t.precision=b(t);for(var u=0,c=e.length;u<c;u++){var l=e[u];switch(l[0]){case"selector":l[1]=x(l[1],!r,i),g(l[2],t),a=!0;break;case"block":w(l[1],o),_(l[2],t,n),a=!0;break;case"flat-block":w(l[1],o),g(l[2],t),a=!0;break;case"at-rule":k(l[1]),s=!0}"at-rule"==l[0]&&N.test(l[1])&&a&&(n.warnings.push('Ignoring @import rule "'+l[1]+'" as it appears after rules thus browsers will ignore them.'),l[1]=""),(0===l[1].length||l[2]&&0===l[2].length)&&(e.splice(u,1),u--,c--)}s&&v(e)}var x=e("./clean-up").selectors,w=e("./clean-up").block,k=e("./clean-up").atRule,E=e("../utils/split"),A=e("../colors/rgb"),C=e("../colors/hsl"),S=e("../colors/hex-name-shortener"),T=e("../properties/wrap-for-optimizing").all,O=e("../properties/restore-from-optimizing"),F=e("../properties/remove-unused"),B=2,D="@charset",L=new RegExp("^"+D,"i"),N=/^@import["'\s]/i,M=["100","200","300","400","500","600","700","800","900"],R=["normal","bold","bolder","lighter"],P=["bold","bolder","lighter"],I=/(?:^|\s|\()(-?\d+)px/,j=/^(\-?[\d\.]+)(m?s)$/,V={background:function(e,t,n){return 0!==t||1!=n||"none"!=e&&"transparent"!=e?e:"0 0"},"font-weight":function(e){return"normal"==e?"400":"bold"==e?"700":e},outline:function(e,t,n){return 0===t&&1==n&&"none"==e?"0":e}};t.exports=_},{"../colors/hex-name-shortener":48,"../colors/hsl":49,"../colors/rgb":50,"../properties/remove-unused":62,"../properties/restore-from-optimizing":63,"../properties/wrap-for-optimizing":68,"../utils/split":106,"./clean-up":70}],83:[function(e,t,n){function r(e,t,n){if(!n&&-1==e.indexOf("\n"))return 0===e.indexOf(a)?e:void(t.column+=e.length);for(var r=0,i=e.split("\n"),o=i.length,s=0;;){if(r==o-1)break;var u=i[r];if(/\S/.test(u))break;s+=u.length+1,r++}return t.line+=r,t.column=r>0?0:t.column,t.column+=/^(\s)*/.exec(i[r])[0].length,e.substring(s).trimLeft()}function i(e,t,n){var r=e.source||t.source;return r&&n.resolvePath?n.resolvePath(t.source,r):r}function o(e,t,n){var r={line:t.line,column:t.column,source:t.source},o=null,s=t.sourceMapTracker.isTracking(r.source)?t.sourceMapTracker.originalPositionFor(r,e,n||0):{};if(r.line=s.line||r.line,r.column=s.column||r.column,r.source=s.sourceResolved?s.source:i(s,r,t),t.sourceMapInlineSources){var a=t.sourceMapTracker.sourcesContentFor(t.source);o=a&&a[r.source]?a:t.sourceReader.sourceAt(t.source)}return o?[r.line,r.column,r.source,o]:[r.line,r.column,r.source]}function s(e,t){for(var n=e.split("\n"),r=0,i=n.length;r<i;r++){var o=n[r],s=0;for(r>0&&(t.line++,t.column=0);;){var u=o.indexOf(a,s);if(-1==u){t.column+=o.substring(s).length;break}t.column+=u-s,s+=u-s;var c=o.substring(u,o.indexOf("__",u+1)+2),l=c.substring(c.indexOf("(")+1,c.indexOf(")")).split(",");t.line+=~~l[0],t.column=(0==~~l[0]?t.column:0)+~~l[1],s+=c.length}}}var a="__ESCAPED_";t.exports=function(e,t,n,i){var a=r(e,t,n),u=n?o(a,t,i):[];return a&&s(a,t),u}},{}],84:[function(e,t,n){function r(e,t){for(var n=t,r=e.length;n<r;n++)if("string"!=typeof e[n])return!0;return!1}function i(e){return"background"==e[0][0]||"transform"==e[0][0]||"src"==e[0][0]}function o(e,t){return")"==e[t][0][e[t][0].length-1]||0===e[t][0].indexOf("__ESCAPED_URL_CLEAN_CSS")}function s(e,t){return","==e[t][0]}function a(e,t){return"/"==e[t][0]}function u(e,t){return e[t+1]&&","==e[t+1][0]}function c(e,t){return e[t+1]&&"/"==e[t+1][0]}function l(e){return"filter"==e[0][0]||"-ms-filter"==e[0][0]}function p(e,t,n){return!n.spaceAfterClosingBrace&&i(e)&&o(e,t)||c(e,t)||a(e,t)||u(e,t)||s(e,t)}function h(e,t){for(var n=t.store,r=0,i=e.length;r<i;r++)n(e[r],t),r<i-1&&n(",",t)}function f(e,t){for(var n=0,r=e.length;n<r;n++)d(e,n,n==r-1,t)}function d(e,t,n,r){var i=r.store,o=e[t];"string"==typeof o?i(o,r):o[0]==_?m(o[1],!1,r):(i(o[0],r),i(":",r),g(e,t,n,r))}function m(e,t,n){var r=n.store;r(e,n),t||r(x,n)}function g(e,t,n,i){var o=i.store,s=e[t],a=0===s[0][0].indexOf("--"),u=a&&Array.isArray(s[1][0]);if(a&&u&&v(s[1]))return o("{",i),f(s[1],i),void o("};",i);for(var c=1,h=s.length;c<h;c++)o(s[c],i),c<h-1&&(l(s)||!p(s,c,i))?o(" ",i):c==h-1&&!n&&r(e,t+1)&&o(x,i)}function v(e){for(var t=0,n=e.length;t<n;t++)if(e[t][0]==_||Array.isArray(e[t][0]))return!0;return!1}function y(e,t){for(var n=t.keepBreaks?b:"",r=t.store,i=0,o=e.length;i<o;i++){var s=e[i];switch(s[0]){case"at-rule":case"text":r(s[1][0],t),r(n,t);break;case"block":h([s[1]],t),r("{",t),y(s[2],t),r("}",t),r(n,t);break;case"flat-block":h([s[1]],t),r("{",t),f(s[2],t),r("}",t),r(n,t);break;default:h(s[1],t),r("{",t),f(s[2],t),r("}",t),r(n,t)}}}var b=e("os").EOL,_="at-rule",x=";";t.exports={all:y,body:f,property:d,selectors:h,value:g}},{os:29}],85:[function(e,t,n){function r(e,t){t.output.push("string"==typeof e?e:e[0])}function i(){return{output:[],store:r}}var o=e("./helpers");t.exports={all:function(e){var t=i();return o.all(e,t),t.output.join("")},body:function(e){var t=i();return o.body(e,t),t.output.join("")},property:function(e,t){var n=i();return o.property(e,t,!0,n),n.output.join("")},selectors:function(e){var t=i();return o.selectors(e,t),t.output.join("")},value:function(e,t){var n=i();return o.value(e,t,!0,n),n.output.join("")}}},{"./helpers":84}],86:[function(e,t,n){function r(e,t){t.output.push("string"==typeof e?e:e[0])}var i=e("./helpers").all;t.exports=function(e,t,n){var o={keepBreaks:t.keepBreaks,output:[],spaceAfterClosingBrace:t.compatibility.properties.spaceAfterClosingBrace,store:r};return i(e,o,!1),{styles:n(o.output.join("")).trim()}}},{"./helpers":84}],87:[function(e,t,n){(function(n){function r(e,t){var n="string"==typeof e,r=n?e:e[0];r.indexOf("_")>-1&&(r=t.restore(r,i(t.output))),o(r,n?null:e,t),t.output.push(r)}function i(e){for(var t=[],n=e.length-1;n>=0;n--){var r=e[n];if(t.unshift(r),"{"==r||";"==r)break}return t.join("")}function o(e,t,n){t&&s(t,n);var r=e.split("\n");n.line+=r.length-1,n.column=r.length>1?0:n.column+r.pop().length}function s(e,t){var n=e[e.length-1];if(Array.isArray(n))for(var r=0,i=n.length;r<i;r++)a(n[r],t)}function a(e,t){var n=e[2]||p;l&&(n=n.replace(/\\/g,"/")),t.outputMap.addMapping({generated:{line:t.line,column:t.column},source:n,original:{line:e[0],column:e[1]}}),e[3]&&t.outputMap.setSourceContent(n,e[3][e[2]])}var u=e("source-map").SourceMapGenerator,c=e("./helpers").all,l="win32"==n.platform,p="$stdin";t.exports=function(e,t,n,i){var o={column:0,inputMapTracker:i,keepBreaks:t.keepBreaks,line:1,output:[],outputMap:new u,restore:n,sourceMapInlineSources:t.sourceMapInlineSources,spaceAfterClosingBrace:t.compatibility.properties.spaceAfterClosingBrace,store:r};return c(e,o,!1),{sourceMap:o.outputMap,styles:o.output.join("").trim()}}}).call(this,e("_process"))},{"./helpers":84,_process:31,"source-map":107}],88:[function(e,t,n){function r(e,t,n,r){this.comments=new s("COMMENT"),this.specialComments=new s("COMMENT_SPECIAL"),this.context=e,this.restored=0,this.keepAll="*"==t,this.keepOne="1"==t||1===t,this.keepBreaks=n,this.saveWaypoints=r}function i(e){var t=[];return new a(e).each(function(e,n,r){t.push([r,r+e.length])}),function(e){for(var n=0,r=t.length;n<r;n++)if(t[n][0]<e&&t[n][1]>e)return!0;return!1}}function o(e,t,n,r){for(var i=[],o=0;o<t.length;){var s=n.nextMatch(t,o);if(s.start<0)break;i.push(t.substring(o,s.start));var a=n.restore(s.match);r&&(e.keepAll||e.keepOne&&0===e.restored)?(e.restored++,i.push(a),o=s.end):o=s.end+(e.keepBreaks&&t.substring(s.end,s.end+u.length)==u?u.length:0)}return i.length>0?i.join("")+t.substring(o,t.length):t}var s=e("./escape-store"),a=e("../utils/quote-scanner"),u=e("os").EOL;r.prototype.escape=function(e){for(var t,n,r,o=[],s=0,a=0,c=0,l=0,p=i(e),h=this.saveWaypoints;a<e.length&&-1!=(s=e.indexOf("/*",c));)if(p(s))o.push(e.substring(c,s+"/*".length)),c=s+"/*".length;else{-1==(a=e.indexOf("*/",s+"/*".length))&&(this.context.warnings.push("Broken comment: '"+e.substring(s)+"'."),a=e.length-2),o.push(e.substring(c,s));var f=e.substring(s,a+"*/".length),d=0===f.indexOf("/*!");if(h&&(t=f.split(u).length-1,r=(n=f.lastIndexOf(u))>0?f.substring(n+u.length).length:l+f.length),h||d){var m=h?[t,r]:null,g=d?this.specialComments.store(f,m):this.comments.store(f,m);o.push(g)}h&&(l=r+1),c=a+"*/".length}return o.length>0?o.join("")+e.substring(c,e.length):e},r.prototype.restore=function(e){return e=o(this,e,this.comments,!1),e=o(this,e,this.specialComments,!0)},t.exports=r},{"../utils/quote-scanner":103,"./escape-store":89,os:29}],89:[function(e,t,n){function r(e){this.placeholderRoot="ESCAPED_"+e+"_CLEAN_CSS",this.placeholderToData={},this.dataToPlaceholder={},this.count=0,this.restoreMatcher=new RegExp(this.placeholderRoot+"(\\d+)")}r.prototype._nextPlaceholder=function(e){return{index:this.count,value:"__"+this.placeholderRoot+this.count+++e+"__"}},r.prototype.store=function(e,t){var n=t?"("+t.join(",")+")":"",r=this.dataToPlaceholder[e];if(!r){var i=this._nextPlaceholder(n);r=i.value,this.placeholderToData[i.index]=e,this.dataToPlaceholder[e]=i.value}return t&&(r=r.replace(/\([^\)]+\)/,n)),r},r.prototype.nextMatch=function(e,t){var n={};return n.start=e.indexOf(this.placeholderRoot,t)-"__".length,n.end=e.indexOf("__",n.start+"__".length)+"__".length,n.start>-1&&n.end>-1&&(n.match=e.substring(n.start,n.end)),n},r.prototype.restore=function(e){var t=this.restoreMatcher.exec(e)[1];return this.placeholderToData[t]},t.exports=r},{}],90:[function(e,t,n){function r(e,t){for(var n=t+s.length,r=0,i=!1,o=!1;;){var c=e[n++];if(i?i="'"!=c&&'"'!=c:(i="'"==c||'"'==c,c==a&&r++,c==u&&r--,c==l&&(o=!0),c!=p||o||1!=r||(n--,r--)),0===r&&c==u)break;if(!c){n=e.substring(0,n).lastIndexOf(p);break}}return n}function i(e){this.expressions=new o("EXPRESSION"),this.saveWaypoints=e}var o=e("./escape-store"),s="expression",a="(",u=")",c=s+a,l="{",p="}",h=e("os").EOL;i.prototype.escape=function(e){for(var t,n,i,o=0,s=0,a=0,u=[],l=0,p=this.saveWaypoints;s<e.length&&-1!=(o=e.indexOf(c,s));){s=r(e,o);var f=e.substring(o,s);p&&(t=f.split(h).length-1,i=(n=f.lastIndexOf(h))>0?f.substring(n+h.length).length:l+f.length);var d=p?[t,i]:null,m=this.expressions.store(f,d);u.push(e.substring(a,o)),u.push(m),p&&(l=i+1),a=s}return u.length>0?u.join("")+e.substring(a,e.length):e},i.prototype.restore=function(e){for(var t=[],n=0;n<e.length;){var r=this.expressions.nextMatch(e,n);if(r.start<0)break;t.push(e.substring(n,r.start));var i=this.expressions.restore(r.match);t.push(i),n=r.end}return t.length>0?t.join("")+e.substring(n,e.length):e},t.exports=i},{"./escape-store":89,os:29}],91:[function(e,t,n){function r(e){this.matches=new o("FREE_TEXT"),this.saveWaypoints=e}function i(e,t,n,r){var i=t;n&&(r=(i=n+t.substring(0,t.indexOf("__ESCAPED_FREE_TEXT_CLEAN_CSS"))).length);var o=i.lastIndexOf(";",r),s=i.lastIndexOf("{",r),a=0;a=o>-1&&s>-1?Math.max(o,s):-1==o?s:o;var u=i.substring(a+1,r);if(/\[[\w\d\-]+[\*\|\~\^\$]?=$/.test(u)&&(e=e.replace(/\\\n|\\\r\n/g,"").replace(/\n|\r\n/g,"")),/^['"][a-zA-Z][a-zA-Z\d\-_]+['"]$/.test(e)&&!/format\($/.test(u)){var c=/^(font|font\-family):/.test(u),l=/\[[\w\d\-]+[\*\|\~\^\$]?=$/.test(u),p=/@(-moz-|-o-|-webkit-)?keyframes /.test(u),h=/^(-moz-|-o-|-webkit-)?animation(-name)?:/.test(u);(c||l||p||h)&&(e=e.substring(1,e.length-1))}return e}var o=e("./escape-store"),s=e("../utils/quote-scanner"),a=e("os").EOL;r.prototype.escape=function(e){var t,n,r,i,o=this,u=this.saveWaypoints;return new s(e).each(function(e,s){u&&(t=e.split(a).length-1,n=e.lastIndexOf(a),r=n>0?e.substring(n+a.length).length:e.length,i=[t,r]);var c=o.matches.store(e,i);s.push(c)})},r.prototype.restore=function(e,t){for(var n=[],r=0;r<e.length;){var o=this.matches.nextMatch(e,r);if(o.start<0)break;n.push(e.substring(r,o.start));var s=i(this.matches.restore(o.match),e,t,o.start);n.push(s),r=o.end}return n.length>0?n.join("")+e.substring(r,e.length):e},t.exports=r},{"../utils/quote-scanner":103,"./escape-store":89,os:29}],92:[function(e,t,n){function r(e,t,n){this.urls=new o("URL"),this.context=e,this.saveWaypoints=t,this.keepUrlQuotes=n}function i(e,t){return e=e.replace(/^url/gi,"url").replace(/\\?\n|\\?\r\n/g,"").replace(/(\s{2,}|\s)/g," ").replace(/^url\((['"])? /,"url($1").replace(/ (['"])?\)$/,"$1)"),/url\(".*'.*"\)/.test(e)||/url\('.*".*'\)/.test(e)?e:(t||/^['"].+['"]$/.test(e)||/url\(.*[\s\(\)].*\)/.test(e)||/url\(['"]data:[^;]+;charset/.test(e)||(e=e.replace(/["']/g,"")),e)}var o=e("./escape-store"),s=e("../urls/reduce"),a=e("os").EOL;r.prototype.escape=function(e){var t,n,r,i=this.saveWaypoints,o=this;return s(e,this.context,function(e,s){i&&(t=e.split(a).length-1,n=e.lastIndexOf(a),r=n>0?e.substring(n+a.length).length:e.length);var u=o.urls.store(e,i?[t,r]:null);s.push(u)})},r.prototype.restore=function(e){for(var t=[],n=0;n<e.length;){var r=this.urls.nextMatch(e,n);if(r.start<0)break;t.push(e.substring(n,r.start));var o=i(this.urls.restore(r.match),this.keepUrlQuotes);t.push(o),n=r.end}return t.length>0?t.join("")+e.substring(n,e.length):e},t.exports=r},{"../urls/reduce":97,"./escape-store":89,os:29}],93:[function(e,t,n){function r(e){return e[0]}function i(){}function o(e,t,n,r){for(var o=n?/^__ESCAPED_COMMENT_/:/__ESCAPED_COMMENT_/,s=n?r.track:i;o.test(e);){var a=e.indexOf("__"),u=e.indexOf("__",a+1)+2,c=e.substring(a,u);e=e.substring(0,a)+e.substring(u),s(c),t.push(c)}return e}function s(e,t,n){return o(e,t,!0,n)}function a(e,t,n){return o(e,t,!1,n)}function u(e,t,n){for(var r=0,i=e.length;r<i;r++)n.track(e[r]),t.push(e[r])}function c(e,t,n){var i=[],o=[],v=/[\s,\/]/;if("string"!=typeof e)return[];e.indexOf(")")>-1&&(e=e.replace(/\)([^\s_;:,\)])/g,n.sourceMap?") __ESCAPED_COMMENT_CLEAN_CSS(0,-1)__ $1":") $1")),e.indexOf("ESCAPED_URL_CLEAN_CSS")>-1&&(e=e.replace(/(ESCAPED_URL_CLEAN_CSS[^_]+?__)/g,n.sourceMap?"$1 __ESCAPED_COMMENT_CLEAN_CSS(0,-1)__ ":"$1 "));for(var y=l(e,";",!1,"{","}"),b=0,_=y.length;b<_;b++){var x=y[b],w=x.indexOf(":");if("@"==x.trim()[0])n.track(x),i.push([f,x.trim()]);else if(-1!=w)if(x.indexOf("{")>0&&x.indexOf("{")<w)n.track(x);else{var k=[],E=x.substring(0,w);o=[],E.indexOf("__ESCAPED_COMMENT")>-1&&(E=s(E,i,n)),E.indexOf("__ESCAPED_COMMENT")>-1&&(E=a(E,o,n)),k.push([E.trim()].concat(n.track(E,!0))),n.track(":"),u(o,i,n);var A=x.indexOf("{");if(0===E.trim().indexOf("--")&&A>0){var C=x.substring(w+1,A+1),S=x.substring(x.indexOf("}")),T=x.substring(A+1,x.length-S.length);n.track(C),k.push(c(T,t,n)),i.push(k),n.track(S),n.track(b<_-1?";":"")}else{var O=l(x.substring(w+1),v,!0);if(1!=O.length||""!==O[0]){for(var F=0,B=O.length;F<B;F++){var D=O[F],L=D.trim();if(0!==L.length){var N=L[L.length-1],M=L.length>1&&(N==p||N==h);if(M&&(L=L.substring(0,L.length-1)),L.indexOf("__ESCAPED_COMMENT_CLEAN_CSS(0,-")>-1)n.track(L);else if(o=[],L.indexOf("__ESCAPED_COMMENT")>-1&&(L=s(L,i,n)),L.indexOf("__ESCAPED_COMMENT")>-1&&(L=a(L,o,n)),0!==L.length){var R=k.length-1;m.test(L)&&"!"==k[R][0]?(n.track(L),k[R-1][0]+=d,k.pop()):g.test(L)||m.test(L)&&"!"==k[R][0][k[R][0].length-1]?(n.track(L),k[R][0]+=L):(k.push([L].concat(n.track(D,!0))),u(o,i,n),M&&(k.push([N]),n.track(N)))}else u(o,i,n)}}b<_-1&&n.track(";"),i.push(k)}else n.warnings.push("Empty property '"+E+"' inside '"+t.filter(r).join(",")+"' selector. Ignoring.")}}else n.track(x),x.indexOf("__ESCAPED_COMMENT_SPECIAL")>-1&&i.push(x.trim())}return i}var l=e("../utils/split"),p=",",h="/",f="at-rule",d="!important",m=new RegExp("^important$","i"),g=new RegExp("^"+d+"$","i");t.exports=c},{"../utils/split":106}],94:[function(e,t,n){var r=e("../utils/split");t.exports=function(e,t){for(var n,i=[],o=r(e,","),s=0,a=o.length;s<a;s++)n=t.track(o[s],!0,s),t.track(","),i.push([o[s].trim()].concat(n));return i}},{"../utils/split":106}],95:[function(e,t,n){function r(e){return e.replace(/\r\n/g,"\n")}function i(e,t){var n=f.relative(e,t);return function(e,t){return e!=t?f.normalize(f.join(f.relative(n,f.dirname(e)),t)):t}}function o(e){var t,n=e.mode,r=e.chunk;if(r.length==e.cursor){if(0===e.chunks.length)return null;e.chunk=r=e.chunks.shift(),e.cursor=0}if("body"==n)return"}"==r[e.cursor]?[e.cursor,"bodyEnd"]:-1==r.indexOf("}",e.cursor)?null:(t=e.cursor+h(r.substring(e.cursor-1),"}",!0,"{","}")[0].length-2,[t,"bodyEnd"]);var i=s(e,"@"),o=r.indexOf("__ESCAPED_",e.cursor),a=s(e,"{"),u=s(e,"}");return i>-1&&e.cursor>0&&!/\s|\{|\}|\/|_|,|;/.test(r.substring(i-1,i))&&(i=-1),o>-1&&/\S/.test(r.substring(e.cursor,o))&&(o=-1),(-1==(t=i)||o>-1&&o<t)&&(t=o),(-1==t||a>-1&&a<t)&&(t=a),(-1==t||u>-1&&u<t)&&(t=u),-1!=t?o===t?[t,"escape"]:a===t?[t,"bodyStart"]:u===t?[t,"bodyEnd"]:i===t?[t,"special"]:void 0:void 0}function s(e,t){for(var n,r=e.cursor,i=e.chunk;(n=i.indexOf(t,r))>-1;){if(!a(i,n))return n;r=n+1}return-1}function a(e,t){for(var n=t,r=0;n>0&&e[n-1]==m;)r++,n--;return r%2!=0}function u(e){for(var t,n,r=e.chunk,i=[];;){var s=o(e);if(!s){var a=e.chunk.substring(e.cursor);a.trim().length>0&&("body"==e.mode?e.warnings.push("Missing '}' after '"+a+"'. Ignoring."):i.push(["text",[a]]),e.cursor+=a.length);break}var p,h,f=s[0],m=s[1];if(r=e.chunk,e.cursor!=f&&"bodyEnd"!=m){var g=r.substring(e.cursor,f),v=/^\s+/.exec(g);v&&(e.cursor+=v[0].length,e.track(v[0]))}if("special"==m){var y=r.indexOf("{",f),b=r.indexOf(";",f),_=b>-1&&(-1==y||b<y);if(-1==y&&-1==b)e.warnings.push("Broken declaration: '"+r.substring(e.cursor)+"'."),e.cursor=r.length;else if(_)p=r.indexOf(";",f+1),n=r.substring(e.cursor,p+1),i.push(["at-rule",[n].concat(e.track(n,!0))]),e.track(";"),e.cursor=p+1;else{p=r.indexOf("{",f+1);var x=(n=r.substring(e.cursor,p)).trim(),w=d.test(x);h=e.mode,e.cursor=p+1,e.mode=w?"body":"block",(t=[w?"flat-block":"block"]).push([x].concat(e.track(n,!0))),e.track("{"),t.push(u(e)),"string"==typeof t[2]&&(t[2]=c(t[2],[[x]],e)),e.mode=h,e.track("}"),i.push(t)}}else if("escape"==m){p=r.indexOf("__",f+1);var k=r.substring(e.cursor,p+2),E=!!e.sourceTracker.nextStart(k),A=!!e.sourceTracker.nextEnd(k);if(E)e.track(k),e.state.push({source:e.source,line:e.line,column:e.column}),e.source=e.sourceTracker.nextStart(k).filename,e.line=1,e.column=0;else if(A){var C=e.state.pop();e.source=C.source,e.line=C.line,e.column=C.column,e.track(k)}else 0===k.indexOf("__ESCAPED_COMMENT_SPECIAL")&&i.push(["text",[k]]),e.track(k);e.cursor=p+2}else if("bodyStart"==m){var S=l(r.substring(e.cursor,f),e);h=e.mode,e.cursor=f+1,e.mode="body";var T=c(u(e),S,e);e.track("{"),e.mode=h,i.push(["selector",S,T])}else if("bodyEnd"==m){if("top"==e.mode){var O=e.cursor,F="}"==r[e.cursor]?"Unexpected '}' in '"+r.substring(O-20,O+20)+"'. Ignoring.":"Unexpected content: '"+r.substring(O,f+1)+"'. Ignoring.";e.warnings.push(F),e.cursor=f+1;continue}"block"==e.mode&&e.track(r.substring(e.cursor,f)),"block"!=e.mode&&(i=r.substring(e.cursor,f)),e.cursor=f+1;break}}return i}var c=e("./extract-properties"),l=e("./extract-selectors"),p=e("../source-maps/track"),h=e("../utils/split"),f=e("path"),d=/(@(font\-face|page|\-ms\-viewport|\-o\-viewport|viewport|counter\-style)|\\@.+?)/,m="\\";t.exports=function(e,t){var n=h(r(e),"}",!0,"{","}");if(0===n.length)return[];var o={chunk:n.shift(),chunks:n,column:0,cursor:0,line:1,mode:"top",resolvePath:t.options.explicitTarget?i(t.options.root,t.options.target):null,source:void 0,sourceMap:t.options.sourceMap,sourceMapInlineSources:t.options.sourceMapInlineSources,sourceMapTracker:t.inputSourceMapTracker,sourceReader:t.sourceReader,sourceTracker:t.sourceTracker,state:[],track:t.options.sourceMap?function(e,t,n){return[[p(e,o,t,n)]]}:function(){return[]},warnings:t.warnings};return u(o)}},{"../source-maps/track":83,"../utils/split":106,"./extract-properties":93,"./extract-selectors":94,path:30}],96:[function(e,t,n){var r=e("path"),i=e("./rewrite");t.exports=function(e,t){var n={absolute:t.options.explicitRoot,relative:!t.options.explicitRoot&&t.options.explicitTarget,fromBase:t.options.relativeTo};return n.absolute||n.relative?(n.absolute&&t.options.explicitTarget&&t.warnings.push("Both 'root' and output file given so rebasing URLs as absolute paths"),n.absolute&&(n.toBase=r.resolve(t.options.root)),n.relative&&(n.toBase=r.resolve(t.options.target)),n.fromBase&&n.toBase?i(e,n,t):e):e}},{"./rewrite":98,path:30}],97:[function(e,t,n){function r(e,t,n){for(var r,i=0,f=0,d=0,m=0,g=[],v=e.indexOf(a)>-1;d<e.length&&(i=e.indexOf(s,d),f=v?e.indexOf(a,d):-1,-1!=i||-1!=f);)-1==i&&f>-1&&(i=f),-1==(d='"'==e[i+s.length]?e.indexOf(l,i):"'"==e[i+s.length]?e.indexOf(c,i):p.test(e.substring(i+s.length))?(r=o(e.substring(i),h,!1,"(",")",!0).pop())&&r[r.length-1]==u?i+r.length-u.length:-1:e.indexOf(u,i))?(-1==(d=e.indexOf("}",i))?d=e.length:d--,t.warnings.push("Broken URL declaration: '"+e.substring(i,d+1)+"'.")):e[d]!=u&&(d=e.indexOf(u,d)),g.push(e.substring(m,i)),n(e.substring(i,d+1),g),m=d+1;return g.length>0?g.join("")+e.substring(m,e.length):e}function i(e,t,n){for(var r,i,o=0,s=0,a=0,u=0,c=0,l=[],p=0,h=0;u<e.length&&(o=e.indexOf(f,u),s=e.indexOf(d,u),-1!=o||-1!=s);){if(o>-1&&s>-1&&s<o&&(o=s),p=e.indexOf("'",o),h=e.indexOf('"',o),p>-1&&h>-1&&p<h)a=p,i="'";else if(p>-1&&h>-1&&p>h)a=h,i='"';else if(p>-1)a=p,i="'";else{if(!(h>-1))break;a=h,i='"'}if(l.push(e.substring(c,a)),u=e.indexOf(i,a+1),r=e.substring(o,u),-1==u||/^@import\s+(url\(|__ESCAPED)/i.test(r)||m.test(r)){c=a;break}n(e.substring(a,u+1),l),c=u+1}return l.length>0?l.join("")+e.substring(c,e.length):e}var o=e("../utils/split"),s="url(",a="URL(",u=")",c="')",l='")',p=/^\s*['"]?\s*data:/,h=/[\s\};,\/!]/,f="@import",d="@IMPORT",m=/\*\//;t.exports=function(e,t,n){return e=r(e,t,n),e=i(e,t,n)}},{"../utils/split":106}],98:[function(e,t,n){(function(n){function r(e){return"/"==e[0]}function i(e){return"#"==e[0]}function o(e){return 0===e.indexOf("__ESCAPED_URL_CLEAN_CSS__")}function s(e){return/^\w+:\w+/.test(e)}function a(e){return/^[^:]+?:\/\//.test(e)||0===e.indexOf("//")}function u(e,t){return v.parse(e).protocol==v.parse(t).protocol&&v.parse(e).host==v.parse(t).host}function c(e){return e.lastIndexOf(".css")===e.length-4}function l(e){return 0===e.indexOf("data:")}function p(e,t){return g.resolve(g.join(t.fromBase||"",e)).replace(t.toBase,"")}function h(e,t){return g.relative(t.toBase,g.join(t.fromBase||"",e))}function f(e){return b?e.replace(/\\/g,"/"):e}function d(e,t){return r(e)||i(e)||o(e)||s(e)?e:!1!==t.rebase||c(e)?!t.imports&&c(e)?e:l(e)?"'"+e+"'":a(e)&&!a(t.toBase)?e:a(e)&&!u(e,t.toBase)?e:!a(e)&&a(t.toBase)?v.resolve(t.toBase,e):f(t.absolute?p(e,t):h(e,t)):e}function m(e){return e.indexOf("'")>-1?'"':e.indexOf('"')>-1?"'":/\s/.test(e)||/[\(\)]/.test(e)?"'":""}var g=e("path"),v=e("url"),y=e("./reduce"),b="win32"==n.platform;t.exports=function(e,t,n){return y(e,n,function(e,n){var r,i=e.replace(/^(url\()?\s*['"]?|['"]?\s*\)?$/g,""),o=e.match(/^(url\()?\s*(['"]).*?(['"])\s*\)?$/);r=t.urlQuotes&&o&&o[2]===o[3]?o[2]:m(i),n.push("url("+r+d(i,t)+r+")")})}}).call(this,e("_process"))},{"./reduce":97,_process:31,path:30,url:148}],99:[function(e,t,n){function r(e){for(var t=e.slice(0),n=0,i=t.length;n<i;n++)Array.isArray(t[n])&&(t[n]=r(t[n]));return t}t.exports=r},{}],100:[function(e,t,n){function r(e){this.source=e||{}}function i(e,t){for(var n in e){var r=e[n];"object"!=typeof r||s.isRegExp(r)?t[n]=n in t?t[n]:r:t[n]=i(r,t[n]||{})}return t}function o(e){if("object"==typeof e)return e;if(!/[,\+\-]/.test(e))return a[e]||a["*"];var t=e.split(","),n=t[0]in a?a[t.shift()]:a["*"];return e={},t.forEach(function(t){var n="+"==t[0],r=t.substring(1).split("."),i=r[0],o=r[1];e[i]=e[i]||{},e[i][o]=n}),i(n,e)}var s=e("util"),a={"*":{colors:{opacity:!0},properties:{backgroundClipMerging:!1,backgroundOriginMerging:!1,backgroundSizeMerging:!1,colors:!0,ieBangHack:!1,iePrefixHack:!1,ieSuffixHack:!0,merging:!0,shorterLengthUnits:!1,spaceAfterClosingBrace:!0,urlQuotes:!1,zeroUnits:!0},selectors:{adjacentSpace:!1,ie7Hack:!1,special:/(\-moz\-|\-ms\-|\-o\-|\-webkit\-|:dir\([a-z-]*\)|:first(?![a-z-])|:fullscreen|:left|:read-only|:read-write|:right|:placeholder|:host|:content|\/deep\/|:shadow|:selection|^,)/},units:{ch:!0,in:!0,pc:!0,pt:!0,rem:!0,vh:!0,vm:!0,vmax:!0,vmin:!0,vw:!0}},ie8:{colors:{opacity:!1},properties:{backgroundClipMerging:!1,backgroundOriginMerging:!1,backgroundSizeMerging:!1,colors:!0,ieBangHack:!1,iePrefixHack:!0,ieSuffixHack:!0,merging:!1,shorterLengthUnits:!1,spaceAfterClosingBrace:!0,urlQuotes:!1,zeroUnits:!0},selectors:{adjacentSpace:!1,ie7Hack:!1,special:/(\-moz\-|\-ms\-|\-o\-|\-webkit\-|:root|:nth|:first\-of|:last|:only|:empty|:target|:checked|::selection|:enabled|:disabled|:not|:placeholder|:host|::content|\/deep\/|::shadow|^,)/},units:{ch:!1,in:!0,pc:!0,pt:!0,rem:!1,vh:!1,vm:!1,vmax:!1,vmin:!1,vw:!1}},ie7:{colors:{opacity:!1},properties:{backgroundClipMerging:!1,backgroundOriginMerging:!1,backgroundSizeMerging:!1,colors:!0,ieBangHack:!0,iePrefixHack:!0,ieSuffixHack:!0,merging:!1,shorterLengthUnits:!1,spaceAfterClosingBrace:!0,urlQuotes:!1,zeroUnits:!0},selectors:{adjacentSpace:!1,ie7Hack:!0,special:/(\-moz\-|\-ms\-|\-o\-|\-webkit\-|:focus|:before|:after|:root|:nth|:first\-of|:last|:only|:empty|:target|:checked|::selection|:enabled|:disabled|:not|:placeholder|:host|::content|\/deep\/|::shadow|^,)/},units:{ch:!1,in:!0,pc:!0,pt:!0,rem:!1,vh:!1,vm:!1,vmax:!1,vmin:!1,vw:!1}}};r.prototype.toOptions=function(){return i(a["*"],o(this.source))},t.exports=r},{util:152}],101:[function(e,t,n){(function(n,r,i){function o(e){this.options=e.options,this.errors=e.errors,this.warnings=e.warnings,this.sourceTracker=e.sourceTracker,this.timeout=this.options.inliner.timeout,this.requestOptions=this.options.inliner.request,this.localOnly=e.localOnly,this.relativeTo=e.options.target||n.cwd(),this.maps={},this.sourcesContent={}}function s(e,t,n){return e.trackLoaded(void 0,void 0,e.options.sourceMap),n()}function a(e,t,n,r){for(var i=0;r.cursor<t.length;){var o=t.substring(r.cursor),s=e.sourceTracker.nextStart(o)||{index:-1},l=e.sourceTracker.nextEnd(o)||{index:-1},p=x.exec(o)||{index:-1},h=p[1];if(i=t.length,s.index>-1&&(i=s.index),l.index>-1&&l.index<i&&(i=l.index),p.index>-1&&p.index<i&&(i=p.index),i==t.length)break;if(i==s.index)r.files.push(s.filename);else if(i==l.index)r.files.pop();else if(i==p.index){var f=/^https?:\/\//.test(h)||/^\/\//.test(h),d=k.test(h);if(f)return c(e,h,r,function(){r.cursor+=i+1,a(e,t,n,r)});var v,y,b=r.files[r.files.length-1],_=b?g.dirname(b):e.options.relativeTo;d?(v=g.resolve(e.options.root,b||""),y=u(h)):(v=g.resolve(e.options.root,g.join(_||"",h)),y=m.readFileSync(v,"utf-8")),e.trackLoaded(b||void 0,v,y)}r.cursor+=i+1}return n()}function u(e){var t=k.exec(e),n=t[2]?t[2].split(/[=;]/)[2]:"us-ascii",r=t[3]?t[3].split(";")[1]:"utf8",o="utf8"==r?E(t[4]):t[4],s=new i(o,r);return s.charset=n,s.toString()}function c(e,t,n,r){l(e,t,function(i){e.trackLoaded(n.files[n.files.length-1]||void 0,t,i),r()},function(e){return n.errors.push('Broken source map at "'+t+'" - '+e),r()})}function l(e,t,n,r){var i=0===t.indexOf("https")?y:v,o=_(b.parse(t),e.requestOptions),s=!1;i.get(o,function(e){if(e.statusCode<200||e.statusCode>299)return r(e.statusCode);var t=[];e.on("data",function(e){t.push(e.toString())}),e.on("end",function(){n(t.join(""))})}).on("error",function(e){s||(r(e.message),s=!0)}).on("timeout",function(){s||(r("timeout"),s=!0)}).setTimeout(e.timeout)}function p(e,t,n,r,i){for(var o,s=r.length,a={line:t,column:n+s};s-- >0&&(a.column--,!(o=e.data.originalPositionFor(a))););return null===o.line&&t>1&&i>0?p(e,t-1,n,r,i-1):(e.path&&o.source&&(o.source=w.test(e.path)?b.resolve(e.path,o.source):g.join(e.path,o.source),o.sourceResolved=!0),o)}function h(e,t){var n=e.maps[t].data,r=w.test(t),i={};n.sources.forEach(function(o,s){var a=r?b.resolve(g.dirname(t),o):g.relative(e.relativeTo,g.resolve(g.dirname(t||"."),o));i[a]=n.sourcesContent&&n.sourcesContent[s]}),e.sourcesContent[t]=i}function f(e,t,n){function r(){return f(e,t,n)}if(0===t.length)return n();var i=t.shift(),o=i[0],s=i[1],a=w.test(o);if(a&&e.localOnly)return e.warnings.push('No callback given to `#minify` method, cannot fetch a remote file from "'+s+'"'),r();if(!a){var u=g.join(e.options.root,s);return m.existsSync(u)?e.sourcesContent[o][s]=m.readFileSync(u,"utf-8"):e.warnings.push('Missing original source file at "'+u+'".'),r()}l(e,s,function(t){e.sourcesContent[o][s]=t,r()},function(t){e.warnings.push('Broken original source file at "'+s+'" - '+t),r()})}var d=e("source-map").SourceMapConsumer,m=e("fs"),g=e("path"),v=e("http"),y=e("https"),b=e("url"),_=e("../utils/object.js").override,x=/\/\*# sourceMappingURL=(\S+) \*\//,w=/^(https?:)?\/\//,k=/^data:(\S*?)?(;charset=[^;]+)?(;[^,]+?)?,(.+)/,E=r.unescape;o.prototype.track=function(e,t){return"string"==typeof this.options.sourceMap?s(this,0,t):a(this,e,t,{files:[],cursor:0,errors:this.errors})},o.prototype.trackLoaded=function(e,t,n){var r=this.options.explicitTarget?this.options.target:this.options.root,i=w.test(e);t&&(t=i?g.dirname(t):g.dirname(g.relative(r,t))),this.maps[e]={path:t,data:new d(n)},h(this,e)},o.prototype.isTracking=function(e){return!!this.maps[e]},o.prototype.originalPositionFor=function(e,t,n){return p(this.maps[e.source],e.line,e.column,t,n)},o.prototype.sourcesContentFor=function(e){return this.sourcesContent[e]},o.prototype.resolveSources=function(e){var t=[];for(var n in this.sourcesContent){var r=this.sourcesContent[n];for(var i in r)r[i]||t.push([n,i])}return f(this,t,e)},t.exports=o}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer)},{"../utils/object.js":102,_process:31,buffer:11,fs:10,http:10,https:10,path:30,"source-map":107,url:148}],102:[function(e,t,n){t.exports={override:function(e,t){var n={};for(var r in e)n[r]=e[r];for(var i in t)n[i]=t[i];return n}}},{}],103:[function(e,t,n){function r(e){this.data=e}function i(e,t){for(var n=t;n>-1&&!((n=e.lastIndexOf(s,n))>-1&&"*"!=e[n-1]);)n--;return n}function o(e,t,n){for(var r=n;;){if(-1==(r=e.indexOf(t,r+1)))return-1;if("\\"!=e[r-1])return r}}var s="/*",a=function(e,t,n,r){var o=e.substring(r,n),s=o.lastIndexOf("*/",n),a=i(o,n),u=!1;if(s>=n&&a>-1&&(u=!0),a<n&&a>s&&(u=!0),u){var c=e.indexOf("*/",n);return c>-1?c:(c=e.indexOf("}",n))>-1?c-1:e.length}for(;;){if(void 0===e[n])break;if(e[n]==t&&("\\"!=e[n-1]||"\\"==e[n-2]))break;n++}return n};r.prototype.each=function(e){for(var t=this.data,n=[],r=0,i=0,s=0,u=null,c=t.length;i<t.length;){var l=o(t,"'",i),p=o(t,'"',i);if(-1==l&&(l=c),-1==p&&(p=c),l<p?(r=l,u="'"):(r=p,u='"'),-1==r)break;if(-1==(i=a(t,u,r+1,s)))break;var h=t.substring(r,i+1);n.push(t.substring(s,r)),h.length>0&&e(h,n,r),s=i+1}return n.length>0?n.join("")+t.substring(s,t.length):t},t.exports=r},{}],104:[function(e,t,n){(function(n){function r(e,t){this.outerContext=e,this.data=t,this.sources={}}function i(e){var t=e.data;return e.trackSource(void 0,t),t}function o(e){var t=e.data.toString();return e.trackSource(void 0,t),t}function s(e){return e.data.map(function(t){return!1===e.outerContext.options.processImport?t+"@shallow":t}).map(function(t){return!e.outerContext.options.relativeTo||/^https?:\/\//.test(t)?t:u.relative(e.outerContext.options.relativeTo,t)}).map(function(e){return"@import url("+e+");"}).join("")}function a(e){var t=[],n=u.resolve(e.outerContext.options.target||e.outerContext.options.root);for(var r in e.data){var i=e.data[r].styles,o=e.data[r].sourceMap,s=l.test(r),a=s?r:u.resolve(r),p=u.dirname(a),h={absolute:e.outerContext.options.explicitRoot,relative:!e.outerContext.options.explicitRoot,imports:!0,rebase:e.outerContext.options.rebase,fromBase:p,toBase:s?p:n,urlQuotes:e.outerContext.options.compatibility.properties.urlQuotes};i=c(i,h,e.outerContext),e.trackSource(r,i),i=e.outerContext.sourceTracker.store(r,i),e.outerContext.options.sourceMap&&o&&e.outerContext.inputSourceMapTracker.trackLoaded(r,r,o),t.push(i)}return t.join("")}var u=e("path"),c=e("../urls/rewrite"),l=/^(https?:)?\/\//;r.prototype.sourceAt=function(e){return this.sources[e]},r.prototype.trackSource=function(e,t){this.sources[e]={},this.sources[e][e]=t},r.prototype.toString=function(){return"string"==typeof this.data?i(this):n.isBuffer(this.data)?o(this):Array.isArray(this.data)?s(this):a(this)},t.exports=r}).call(this,{isBuffer:e("../../../../../is-buffer/index.js")})},{"../../../../../is-buffer/index.js":22,"../urls/rewrite":98,path:30}],105:[function(e,t,n){function r(){this.sources=[]}r.prototype.store=function(e,t){return this.sources.push(e),"__ESCAPED_SOURCE_CLEAN_CSS"+(this.sources.length-1)+"__"+t+"__ESCAPED_SOURCE_END_CLEAN_CSS__"},r.prototype.nextStart=function(e){var t=/__ESCAPED_SOURCE_CLEAN_CSS(\d+)__/.exec(e);return t?{index:t.index,filename:this.sources[~~t[1]]}:null},r.prototype.nextEnd=function(e){return/__ESCAPED_SOURCE_END_CLEAN_CSS__/g.exec(e)},r.prototype.removeAll=function(e){return e.replace(/__ESCAPED_SOURCE_CLEAN_CSS\d+__/g,"").replace(/__ESCAPED_SOURCE_END_CLEAN_CSS__/g,"")},t.exports=r},{}],106:[function(e,t,n){t.exports=function(e,t,n,r,i,o){var s="string"!=typeof t;if(!(s?t.test(e):e.indexOf(t)))return[e];if(r=r||"(",i=i||")",-1==e.indexOf(r)&&!n&&!o)return e.split(t);for(var a=!1,u=!1,c=0,l=0,p=0,h=e.length,f=[];l<h&&(a="\\"==e[l],u||(e[l]==r?c++:e[l]==i&&c--),!(!u&&0===c&&l>0&&l+1<h&&(s?t.test(e[l]):e[l]==t)&&(f.push(e.substring(p,l+(n?1:0))),p=l+1,o&&1==f.length)));)u=a,l++;if(p<l+1){var d=e.substring(p),m=d[d.length-1];!n&&(s?t.test(m):m==t)&&(d=d.substring(0,d.length-1)),f.push(d)}return f}},{}],107:[function(e,t,n){n.SourceMapGenerator=e("./source-map/source-map-generator").SourceMapGenerator,n.SourceMapConsumer=e("./source-map/source-map-consumer").SourceMapConsumer,n.SourceNode=e("./source-map/source-node").SourceNode},{"./source-map/source-map-consumer":114,"./source-map/source-map-generator":115,"./source-map/source-node":116}],108:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(){this._array=[],this._set={}}var i=e("./util");r.fromArray=function(e,t){for(var n=new r,i=0,o=e.length;i<o;i++)n.add(e[i],t);return n},r.prototype.size=function(){return Object.getOwnPropertyNames(this._set).length},r.prototype.add=function(e,t){var n=this.has(e),r=this._array.length;n&&!t||this._array.push(e),n||(this._set[i.toSetString(e)]=r)},r.prototype.has=function(e){return Object.prototype.hasOwnProperty.call(this._set,i.toSetString(e))},r.prototype.indexOf=function(e){if(this.has(e))return this._set[i.toSetString(e)];throw new Error('"'+e+'" is not in the set.')},r.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},r.prototype.toArray=function(){return this._array.slice()},t.ArraySet=r})},{"./util":117,amdefine:4}],109:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e){return e<0?1+(-e<<1):0+(e<<1)}function i(e){var t=e>>1;return 1==(1&e)?-t:t}var o=e("./base64");t.encode=function(e){var t,n="",i=r(e);do{t=31&i,(i>>>=5)>0&&(t|=32),n+=o.encode(t)}while(i>0);return n},t.decode=function(e,t,n){var r,s,a=e.length,u=0,c=0;do{if(t>=a)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(s=o.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&s),u+=(s&=31)<<c,c+=5}while(r);n.value=i(u),n.rest=t}})},{"./base64":110,amdefine:4}],110:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+aNumber)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}})},{amdefine:4}],111:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e,n,i,o,s,a){var u=Math.floor((n-e)/2)+e,c=s(i,o[u],!0);return 0===c?u:c>0?n-u>1?r(u,n,i,o,s,a):a==t.LEAST_UPPER_BOUND?n<o.length?n:-1:u:u-e>1?r(e,u,i,o,s,a):a==t.LEAST_UPPER_BOUND?u:e<0?-1:e}t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,n,i,o){if(0===n.length)return-1;var s=r(-1,n.length,e,n,i,o||t.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&0===i(n[s],n[s-1],!0);)--s;return s}})},{amdefine:4}],112:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e,t){var n=e.generatedLine,r=t.generatedLine,i=e.generatedColumn,s=t.generatedColumn;return r>n||r==n&&s>=i||o.compareByGeneratedPositionsInflated(e,t)<=0}function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}var o=e("./util");i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){r(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(o.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.MappingList=i})},{"./util":117,amdefine:4}],113:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function i(e,t){return Math.round(e+Math.random()*(t-e))}function o(e,t,n,s){if(n<s){var a=n-1;r(e,i(n,s),s);for(var u=e[s],c=n;c<s;c++)t(e[c],u)<=0&&r(e,a+=1,c);r(e,a+1,c);var l=a+1;o(e,t,n,l-1),o(e,t,l+1,s)}}t.quickSort=function(e,t){o(e,t,0,e.length-1)}})},{amdefine:4}],114:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new s(t):new i(t)}function i(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=a.getArg(t,"version"),r=a.getArg(t,"sources"),i=a.getArg(t,"names",[]),o=a.getArg(t,"sourceRoot",null),s=a.getArg(t,"sourcesContent",null),u=a.getArg(t,"mappings"),l=a.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);r=r.map(a.normalize),this._names=c.fromArray(i,!0),this._sources=c.fromArray(r,!0),this.sourceRoot=o,this.sourcesContent=s,this._mappings=u,this.file=l}function o(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function s(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=a.getArg(t,"version"),i=a.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new c,this._names=new c;var o={line:-1,column:0};this._sections=i.map(function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=a.getArg(e,"offset"),n=a.getArg(t,"line"),i=a.getArg(t,"column");if(n<o.line||n===o.line&&i<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=t,{generatedOffset:{generatedLine:n+1,generatedColumn:i+1},consumer:new r(a.getArg(e,"map"))}})}var a=e("./util"),u=e("./binary-search"),c=e("./array-set").ArraySet,l=e("./base64-vlq"),p=e("./quick-sort").quickSort;r.fromSourceMap=function(e){return i.fromSourceMap(e)},r.prototype._version=3,r.prototype.__generatedMappings=null,Object.defineProperty(r.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),r.prototype.__originalMappings=null,Object.defineProperty(r.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),r.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},r.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},r.GENERATED_ORDER=1,r.ORIGINAL_ORDER=2,r.GREATEST_LOWER_BOUND=1,r.LEAST_UPPER_BOUND=2,r.prototype.eachMapping=function(e,t,n){var i,o=t||null;switch(n||r.GENERATED_ORDER){case r.GENERATED_ORDER:i=this._generatedMappings;break;case r.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;i.map(function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=s&&(t=a.join(s,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}},this).forEach(e,o)},r.prototype.allGeneratedPositionsFor=function(e){var t=a.getArg(e,"line"),n={source:a.getArg(e,"source"),originalLine:t,originalColumn:a.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=a.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var r=[],i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",a.compareByOriginalPositions,u.LEAST_UPPER_BOUND);if(i>=0){var o=this._originalMappings[i];if(void 0===e.column)for(var s=o.originalLine;o&&o.originalLine===s;)r.push({line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++i];else for(var c=o.originalColumn;o&&o.originalLine===t&&o.originalColumn==c;)r.push({line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++i]}return r},t.SourceMapConsumer=r,(i.prototype=Object.create(r.prototype)).consumer=r,i.fromSourceMap=function(e){var t=Object.create(i.prototype),n=t._names=c.fromArray(e._names.toArray(),!0),r=t._sources=c.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var s=e._mappings.toArray().slice(),u=t.__generatedMappings=[],l=t.__originalMappings=[],h=0,f=s.length;h<f;h++){var d=s[h],m=new o;m.generatedLine=d.generatedLine,m.generatedColumn=d.generatedColumn,d.source&&(m.source=r.indexOf(d.source),m.originalLine=d.originalLine,m.originalColumn=d.originalColumn,d.name&&(m.name=n.indexOf(d.name)),l.push(m)),u.push(m)}return p(t.__originalMappings,a.compareByOriginalPositions),t},i.prototype._version=3,Object.defineProperty(i.prototype,"sources",{get:function(){return this._sources.toArray().map(function(e){return null!=this.sourceRoot?a.join(this.sourceRoot,e):e},this)}}),i.prototype._parseMappings=function(e,t){for(var n,r,i,s,u,c=1,h=0,f=0,d=0,m=0,g=0,v=e.length,y=0,b={},_={},x=[],w=[];y<v;)if(";"===e.charAt(y))c++,y++,h=0;else if(","===e.charAt(y))y++;else{for((n=new o).generatedLine=c,s=y;s<v&&!this._charIsMappingSeparator(e,s);s++);if(r=e.slice(y,s),i=b[r])y+=r.length;else{for(i=[];y<s;)l.decode(e,y,_),u=_.value,y=_.rest,i.push(u);if(2===i.length)throw new Error("Found a source, but no line and column");if(3===i.length)throw new Error("Found a source and line, but no column");b[r]=i}n.generatedColumn=h+i[0],h=n.generatedColumn,i.length>1&&(n.source=m+i[1],m+=i[1],n.originalLine=f+i[2],f=n.originalLine,n.originalLine+=1,n.originalColumn=d+i[3],d=n.originalColumn,i.length>4&&(n.name=g+i[4],g+=i[4])),w.push(n),"number"==typeof n.originalLine&&x.push(n)}p(w,a.compareByGeneratedPositionsDeflated),this.__generatedMappings=w,p(x,a.compareByOriginalPositions),this.__originalMappings=x},i.prototype._findMapping=function(e,t,n,r,i,o){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return u.search(e,t,i,o)},i.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},i.prototype.originalPositionFor=function(e){var t={generatedLine:a.getArg(e,"line"),generatedColumn:a.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",a.compareByGeneratedPositionsDeflated,a.getArg(e,"bias",r.GREATEST_LOWER_BOUND));if(n>=0){var i=this._generatedMappings[n];if(i.generatedLine===t.generatedLine){var o=a.getArg(i,"source",null);null!==o&&(o=this._sources.at(o),null!=this.sourceRoot&&(o=a.join(this.sourceRoot,o)));var s=a.getArg(i,"name",null);return null!==s&&(s=this._names.at(s)),{source:o,line:a.getArg(i,"originalLine",null),column:a.getArg(i,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},i.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return null==e}))},i.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=a.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=a.urlParse(this.sourceRoot))){var r=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(r))return this.sourcesContent[this._sources.indexOf(r)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},i.prototype.generatedPositionFor=function(e){var t=a.getArg(e,"source");if(null!=this.sourceRoot&&(t=a.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:a.getArg(e,"line"),originalColumn:a.getArg(e,"column")},i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",a.compareByOriginalPositions,a.getArg(e,"bias",r.GREATEST_LOWER_BOUND));if(i>=0){var o=this._originalMappings[i];if(o.source===n.source)return{line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},t.BasicSourceMapConsumer=i,(s.prototype=Object.create(r.prototype)).constructor=r,s.prototype._version=3,Object.defineProperty(s.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),s.prototype.originalPositionFor=function(e){var t={generatedLine:a.getArg(e,"line"),generatedColumn:a.getArg(e,"column")},n=u.search(t,this._sections,function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn}),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},s.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})},s.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},s.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(a.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},s.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],i=r.consumer._generatedMappings,o=0;o<i.length;o++){var s=i[n],u=r.consumer._sources.at(s.source);null!==r.consumer.sourceRoot&&(u=a.join(r.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=r.consumer._names.at(s.name);this._names.add(c),c=this._names.indexOf(c);var l={source:u,generatedLine:s.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:s.column+(r.generatedOffset.generatedLine===s.generatedLine)?r.generatedOffset.generatedColumn-1:0,originalLine:s.originalLine,originalColumn:s.originalColumn,name:c};this.__generatedMappings.push(l),"number"==typeof l.originalLine&&this.__originalMappings.push(l)}p(this.__generatedMappings,a.compareByGeneratedPositionsDeflated),p(this.__originalMappings,a.compareByOriginalPositions)},t.IndexedSourceMapConsumer=s})},{"./array-set":108,"./base64-vlq":109,"./binary-search":111,"./quick-sort":113,"./util":117,amdefine:4}],115:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new s,this._names=new s,this._mappings=new a,this._sourcesContents=null}var i=e("./base64-vlq"),o=e("./util"),s=e("./array-set").ArraySet,a=e("./mapping-list").MappingList;r.prototype._version=3,r.fromSourceMap=function(e){var t=e.sourceRoot,n=new r({file:e.file,sourceRoot:t});return e.eachMapping(function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)}),n},r.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null==r||this._sources.has(r)||this._sources.add(r),null==i||this._names.has(i)||this._names.add(i),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},r.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents={}),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},r.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var a=new s,u=new s;this._mappings.unsortedForEach(function(t){if(t.source===r&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=s.source&&(t.source=s.source,null!=n&&(t.source=o.join(n,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name))}var c=t.source;null==c||a.has(c)||a.add(c);var l=t.name;null==l||u.has(l)||u.add(l)},this),this._sources=a,this._names=u,e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,r))},this)},r.prototype._validateMapping=function(e,t,n,r){if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},r.prototype._serializeMappings=function(){for(var e,t=0,n=1,r=0,s=0,a=0,u=0,c="",l=this._mappings.toArray(),p=0,h=l.length;p<h;p++){if((e=l[p]).generatedLine!==n)for(t=0;e.generatedLine!==n;)c+=";",n++;else if(p>0){if(!o.compareByGeneratedPositionsInflated(e,l[p-1]))continue;c+=","}c+=i.encode(e.generatedColumn-t),t=e.generatedColumn,null!=e.source&&(c+=i.encode(this._sources.indexOf(e.source)-u),u=this._sources.indexOf(e.source),c+=i.encode(e.originalLine-1-s),s=e.originalLine-1,c+=i.encode(e.originalColumn-r),r=e.originalColumn,null!=e.name&&(c+=i.encode(this._names.indexOf(e.name)-a),a=this._names.indexOf(e.name)))}return c},r.prototype._generateSourcesContent=function(e,t){return e.map(function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},r.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},r.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=r})},{"./array-set":108,"./base64-vlq":109,"./mapping-list":112,"./util":117,amdefine:4}],116:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this[a]=!0,null!=r&&this.add(r)}var i=e("./source-map-generator").SourceMapGenerator,o=e("./util"),s=/(\r?\n)/,a="$$$isSourceNode$$$";r.fromStringWithSourceMap=function(e,t,n){function i(e,t){if(null===e||void 0===e.source)a.add(t);else{var i=n?o.join(n,e.source):e.source;a.add(new r(e.originalLine,e.originalColumn,i,t,e.name))}}var a=new r,u=e.split(s),c=function(){return u.shift()+(u.shift()||"")},l=1,p=0,h=null;return t.eachMapping(function(e){if(null!==h){if(!(l<e.generatedLine)){t=(n=u[0]).substr(0,e.generatedColumn-p);return u[0]=n.substr(e.generatedColumn-p),p=e.generatedColumn,i(h,t),void(h=e)}var t="";i(h,c()),l++,p=0}for(;l<e.generatedLine;)a.add(c()),l++;if(p<e.generatedColumn){var n=u[0];a.add(n.substr(0,e.generatedColumn)),u[0]=n.substr(e.generatedColumn),p=e.generatedColumn}h=e},this),u.length>0&&(h&&i(h,c()),a.add(u.join(""))),t.sources.forEach(function(e){var r=t.sourceContentFor(e);null!=r&&(null!=n&&(e=o.join(n,e)),a.setSourceContent(e,r))}),a},r.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(e){this.add(e)},this);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},r.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},r.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[a]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},r.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},r.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[a]?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},r.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},r.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][a]&&this.children[t].walkSourceContents(e);for(var r=Object.keys(this.sourceContents),t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},r.prototype.toString=function(){var e="";return this.walk(function(t){e+=t}),e},r.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,o=null,s=null,a=null,u=null;return this.walk(function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(o===i.source&&s===i.line&&a===i.column&&u===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),o=i.source,s=i.line,a=i.column,u=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,r=!1);for(var c=0,l=e.length;c<l;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===l?(o=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++}),this.walkSourceContents(function(e,t){n.setSourceContent(e,t)}),{code:t.code,map:n}},t.SourceNode=r})},{"./source-map-generator":115,"./util":117,amdefine:4}],117:[function(e,t,n){if("function"!=typeof r)var r=e("amdefine")(t,e);r(function(e,t,n){function r(e){var t=e.match(a);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var t=e,n=r(e);if(n){if(!n.path)return e;t=n.path}for(var o,s="/"===t.charAt(0),a=t.split(/\/+/),u=0,c=a.length-1;c>=0;c--)"."===(o=a[c])?a.splice(c,1):".."===o?u++:u>0&&(""===o?(a.splice(c+1,u),u=0):(a.splice(c,2),u--));return""===(t=a.join("/"))&&(t=s?"/":"."),n?(n.path=t,i(n)):t}function s(e,t){return e===t?0:e>t?1:-1}t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var a=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,u=/^data:.+\,.+$/;t.urlParse=r,t.urlGenerate=i,t.normalize=o,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=r(t),s=r(e);if(s&&(e=s.path||"/"),n&&!n.scheme)return s&&(n.scheme=s.scheme),i(n);if(n||t.match(u))return t;if(s&&!s.host&&!s.path)return s.host=t,i(s);var a="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return s?(s.path=a,i(s)):a},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)},t.toSetString=function(e){return"$"+e},t.fromSetString=function(e){return e.substr(1)},t.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)||n?r:0!=(r=e.generatedColumn-t.generatedColumn)?r:0!=(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r?r:0!=(r=e.generatedColumn-t.generatedColumn)||n?r:0!=(r=e.source-t.source)?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n?n:0!=(n=e.generatedColumn-t.generatedColumn)?n:0!==(n=s(e.source,t.source))?n:0!=(n=e.originalLine-t.originalLine)?n:0!=(n=e.originalColumn-t.originalColumn)?n:s(e.name,t.name)}})},{amdefine:4}],118:[function(e,t,n){"use strict";function r(){throw e("pug-error").apply(null,arguments)}function i(e){h("Block"===e.type,"The top level element should always be a block");var t=null;if(e.nodes.length){var n="Extends"===e.nodes[0].type;p(e,n),n&&(t=e.nodes.shift())}if(e=u(e),e.declaredBlocks=o(e),t){var s=[],c=[];e.nodes.forEach(function e(t){"NamedBlock"===t.type?c.push(t):"Block"===t.type?t.nodes.forEach(e):"Mixin"===t.type&&!1===t.call?s.push(t):r("UNEXPECTED_NODES_IN_EXTENDING_ROOT","Only named blocks and mixins can appear at the top level of an extending template",t)});var l=i(t.file.ast);a(l.declaredBlocks,e);var d=[];return f(l,function(e){"NamedBlock"===e.type&&d.push(e.name)}),c.forEach(function(e){-1===d.indexOf(e.name)&&r("UNEXPECTED_BLOCK","Unexpected block "+e.name,e)}),Object.keys(e.declaredBlocks).forEach(function(t){l.declaredBlocks[t]=e.declaredBlocks[t]}),l.nodes=s.concat(l.nodes),l.hasExtends=!0,l}return e}function o(e){var t={};return f(e,function(e){"NamedBlock"===e.type&&"replace"===e.mode&&(t[e.name]=t[e.name]||[],t[e.name].push(e))}),t}function s(e,t){return t=t||[],e.forEach(function(e){e.parents&&s(e.parents,t),t.push(e)}),t}function a(e,t){var n={};f(t,function(t){if("NamedBlock"===t.type){if(n[t.name]===t.name)return t.ignore=!0;n[t.name]=t.name;var r=e[t.name]?s(e[t.name]):[];r.length&&(t.parents=r,r.forEach(function(e){switch(t.mode){case"append":e.nodes=e.nodes.concat(t.nodes);break;case"prepend":e.nodes=t.nodes.concat(e.nodes);break;case"replace":e.nodes=t.nodes}}))}},function(e){"NamedBlock"!==e.type||e.ignore||delete n[e.name]})}function u(e,t){return f(e,function(e,t){"RawInclude"===e.type&&t({type:"Text",val:e.file.str.replace(/\r/g,"")})},function(e,t){if("Include"===e.type){var n=i(e.file.ast);n.hasExtends&&(n=c(n)),t(l(n,e.block))}})}function c(e){return f(e,function(e,t){"NamedBlock"===e.type&&t({type:"Block",nodes:e.nodes})})}function l(e,t){function n(e){for(var t=e,r=0;r<e.nodes.length;r++)e.nodes[r].textOnly||("Block"===e.nodes[r].type?t=n(e.nodes[r]):e.nodes[r].block&&e.nodes[r].block.nodes.length&&(t=n(e.nodes[r].block)));return t}if(!t||!t.nodes.length)return e;var r=!1;return e=f(e,null,function(e,n){"YieldBlock"===e.type&&(r=!0,e.type="Block",e.nodes=[t])}),r||n(e).nodes.push(t),e}function p(e,t){var n=!1;f(e,function(e){"Extends"===e.type&&(t&&!n?n=!0:r("EXTENDS_NOT_FIRST",'Declaration of template inheritance ("extends") should be the first thing in the file. There can only be one extends statement per file.',e))})}var h=e("assert"),f=e("pug-walk");t.exports=i},{assert:7,"pug-error":42,"pug-walk":129}],119:[function(e,t,n){"use strict";function r(e,t){return t=i(t),e=JSON.parse(JSON.stringify(e)),a(e,function(e){if(void 0===e.str&&("Include"===e.type||"RawInclude"===e.type||"Extends"===e.type)){var n=e.file;if("FileReference"!==n.type)throw new Error('Expected file.type to be "FileReference"');var i,o;try{i=t.resolve(n.path,n.filename,t),n.fullPath=i,o=t.read(i,t)}catch(t){throw t.message+="\n    at "+e.filename+" line "+e.line,t}n.str=o,"Extends"!==e.type&&"Include"!==e.type||(n.ast=r.string(o,u({},t,{filename:i})))}})}function i(e){return r.validateOptions(e),u({resolve:r.resolve,read:r.read},e)}var o=e("fs"),s=e("path"),a=e("pug-walk"),u=e("object-assign");t.exports=r,r.string=function(e,t){var n=(t=u(i(t),{src:e})).lex(e,t);return r(t.parse(n,t),t)},r.file=function(e,t){var n=(t=u(i(t),{filename:e})).read(e);return r.string(n,t)},r.resolve=function(e,t,n){if("/"!==(e=e.trim())[0]&&!t)throw new Error('the "filename" option is required to use includes and extends with "relative" paths');if("/"===e[0]&&!n.basedir)throw new Error('the "basedir" option is required to use includes and extends with "absolute" paths');return e=s.join("/"===e[0]?n.basedir:s.dirname(t.trim()),e)},r.read=function(e,t){return o.readFileSync(e,"utf8")},r.validateOptions=function(e){if("object"!=typeof e)throw new TypeError("options must be an object");if("function"!=typeof e.lex)throw new TypeError("options.lex must be a function");if("function"!=typeof e.parse)throw new TypeError("options.parse must be a function");if(e.resolve&&"function"!=typeof e.resolve)throw new TypeError("options.resolve must be a function");if(e.read&&"function"!=typeof e.read)throw new TypeError("options.read must be a function")}},{fs:10,"object-assign":28,path:30,"pug-walk":129}],120:[function(e,t,n){"use strict";function r(e,t){if(t=t||{},!Array.isArray(e))throw new Error('Expected tokens to be an Array but got "'+typeof e+'"');if("object"!=typeof t)throw new Error('Expected "options" to be an object but got "'+typeof t+'"');this.tokens=new o(e),this.filename=t.filename,this.src=t.src,this.inMixin=0,this.plugins=t.plugins||[]}var i=e("assert"),o=e("token-stream"),s=e("pug-error"),a=e("./lib/inline-tags");t.exports=function(e,t){var n=new r(e,t).parse();return JSON.parse(JSON.stringify(n))},t.exports.Parser=r,r.prototype={constructor:r,error:function(e,t,n){throw s(e,t,{line:n.line,column:n.col,filename:this.filename,src:this.src})},advance:function(){return this.tokens.advance()},peek:function(){return this.tokens.peek()},lookahead:function(e){return this.tokens.lookahead(e)},parse:function(){for(var e=this.emptyBlock(0);"eos"!=this.peek().type;)if("newline"==this.peek().type)this.advance();else if("text-html"==this.peek().type)e.nodes=e.nodes.concat(this.parseTextHtml());else{var t=this.parseExpr();t&&("Block"===t.type?e.nodes=e.nodes.concat(t.nodes):e.nodes.push(t))}return e},expect:function(e){if(this.peek().type===e)return this.advance();this.error("INVALID_TOKEN",'expected "'+e+'", but got "'+this.peek().type+'"',this.peek())},accept:function(e){if(this.peek().type===e)return this.advance()},initBlock:function(e,t){if((0|e)!==e)throw new Error("`line` is not an integer");if(!Array.isArray(t))throw new Error("`nodes` is not an array");return{type:"Block",nodes:t,line:e,filename:this.filename}},emptyBlock:function(e){return this.initBlock(e,[])},runPlugin:function(e,t){for(var n=[this],r=2;r<arguments.length;r++)n.push(arguments[r]);for(var i,r=0;r<this.plugins.length;r++){var o=this.plugins[r];if(o[e]&&o[e][t.type]){if(i)throw new Error("Multiple plugin handlers found for context "+JSON.stringify(e)+", token type "+JSON.stringify(t.type));i=o[e]}}if(i)return i[t.type].apply(i,n)},parseExpr:function(){switch(this.peek().type){case"tag":return this.parseTag();case"mixin":return this.parseMixin();case"block":return this.parseBlock();case"mixin-block":return this.parseMixinBlock();case"case":return this.parseCase();case"extends":return this.parseExtends();case"include":return this.parseInclude();case"doctype":return this.parseDoctype();case"filter":return this.parseFilter();case"comment":return this.parseComment();case"text":case"interpolated-code":case"start-pug-interpolation":return this.parseText({block:!0});case"text-html":return this.initBlock(this.peek().line,this.parseTextHtml());case"dot":return this.parseDot();case"each":return this.parseEach();case"code":return this.parseCode();case"blockcode":return this.parseBlockCode();case"if":return this.parseConditional();case"while":return this.parseWhile();case"call":return this.parseCall();case"interpolation":return this.parseInterpolation();case"yield":return this.parseYield();case"id":case"class":return this.tokens.defer({type:"tag",val:"div",line:this.peek().line,col:this.peek().col,filename:this.filename}),this.parseExpr();default:var e=this.runPlugin("expressionTokens",this.peek());if(e)return e;this.error("INVALID_TOKEN",'unexpected token "'+this.peek().type+'"',this.peek())}},parseDot:function(){return this.advance(),this.parseTextBlock()},parseText:function(e){var t=[],n=this.peek().line,r=this.peek();e:for(;;){switch(r.type){case"text":i=this.advance();t.push({type:"Text",val:i.val,line:i.line,column:i.col,filename:this.filename});break;case"interpolated-code":i=this.advance();t.push({type:"Code",val:i.val,buffer:i.buffer,mustEscape:!1!==i.mustEscape,isInline:!0,line:i.line,column:i.col,filename:this.filename});break;case"newline":if(!e||!e.block)break e;var i=this.advance(),o=this.peek().type;"text"!==o&&"interpolated-code"!==o||t.push({type:"Text",val:"\n",line:i.line,column:i.col,filename:this.filename});break;case"start-pug-interpolation":this.advance(),t.push(this.parseExpr()),this.expect("end-pug-interpolation");break;default:if(this.runPlugin("textTokens",r,t))break;break e}r=this.peek()}return 1===t.length?t[0]:this.initBlock(n,t)},parseTextHtml:function(){var e=[],t=null;e:for(;;)switch(this.peek().type){case"text-html":var n=this.advance();t?t.val+="\n"+n.val:(t={type:"Text",val:n.val,filename:this.filename,line:n.line,column:n.col,isHtml:!0},e.push(t));break;case"indent":this.block().nodes.forEach(function(n){n.isHtml?t?t.val+="\n"+n.val:(t=n,e.push(t)):(t=null,e.push(n))});break;case"code":t=null,e.push(this.parseCode(!0));break;case"newline":this.advance();break;default:break e}return e},parseBlockExpansion:function(){var e=this.accept(":");if(e){var t=this.parseExpr();return"Block"===t.type?t:this.initBlock(e.line,[t])}return this.block()},parseCase:function(){var e=this.expect("case"),t={type:"Case",expr:e.val,line:e.line,column:e.col,filename:this.filename},n=this.emptyBlock(e.line+1);for(this.expect("indent");"outdent"!=this.peek().type;)switch(this.peek().type){case"comment":case"newline":this.advance();break;case"when":n.nodes.push(this.parseWhen());break;case"default":n.nodes.push(this.parseDefault());break;default:if(this.runPlugin("caseTokens",this.peek(),n))break;this.error("INVALID_TOKEN",'Unexpected token "'+this.peek().type+'", expected "when", "default" or "newline"',this.peek())}return this.expect("outdent"),t.block=n,t},parseWhen:function(){var e=this.expect("when");return"newline"!==this.peek().type?{type:"When",expr:e.val,block:this.parseBlockExpansion(),debug:!1,line:e.line,column:e.col,filename:this.filename}:{type:"When",expr:e.val,debug:!1,line:e.line,column:e.col,filename:this.filename}},parseDefault:function(){var e=this.expect("default");return{type:"When",expr:"default",block:this.parseBlockExpansion(),debug:!1,line:e.line,column:e.col,filename:this.filename}},parseCode:function(e){var t=this.expect("code");i("boolean"==typeof t.mustEscape,"Please update to the newest version of pug-lexer.");var n={type:"Code",val:t.val,buffer:t.buffer,mustEscape:!1!==t.mustEscape,isInline:!!e,line:t.line,column:t.col,filename:this.filename};if(n.val.match(/^ *else/)&&(n.debug=!1),e)return n;return"indent"==this.peek().type&&(t.buffer&&this.error("BLOCK_IN_BUFFERED_CODE","Buffered code cannot have a block attached to it",this.peek()),n.block=this.block()),n},parseConditional:function(){var e=this.expect("if"),t={type:"Conditional",test:e.val,consequent:this.emptyBlock(e.line),alternate:null,line:e.line,column:e.col,filename:this.filename};"indent"==this.peek().type&&(t.consequent=this.block());for(var n=t;;)if("newline"===this.peek().type)this.expect("newline");else{if("else-if"!==this.peek().type){if("else"===this.peek().type){this.expect("else"),"indent"===this.peek().type&&(n.alternate=this.block());break}break}e=this.expect("else-if"),n=n.alternate={type:"Conditional",test:e.val,consequent:this.emptyBlock(e.line),alternate:null,line:e.line,column:e.col,filename:this.filename},"indent"==this.peek().type&&(n.consequent=this.block())}return t},parseWhile:function(){var e=this.expect("while"),t={type:"While",test:e.val,line:e.line,column:e.col,filename:this.filename};return"indent"==this.peek().type?t.block=this.block():t.block=this.emptyBlock(e.line),t},parseBlockCode:function(){var e=this.expect("blockcode"),t=e.line,n=e.col,r="";if("start-pipeless-text"===this.peek().type){for(this.advance();"end-pipeless-text"!==this.peek().type;)switch((e=this.advance()).type){case"text":r+=e.val;break;case"newline":r+="\n";break;default:var i=this.runPlugin("blockCodeTokens",e,e);if(i){r+=i;break}this.error("INVALID_TOKEN","Unexpected token type: "+e.type,e)}this.advance()}return{type:"Code",val:r,buffer:!1,mustEscape:!1,isInline:!1,line:t,column:n,filename:this.filename}},parseComment:function(){var e,t=this.expect("comment");return(e=this.parseTextBlock())?{type:"BlockComment",val:t.val,block:e,buffer:t.buffer,line:t.line,column:t.col,filename:this.filename}:{type:"Comment",val:t.val,buffer:t.buffer,line:t.line,column:t.col,filename:this.filename}},parseDoctype:function(){var e=this.expect("doctype");return{type:"Doctype",val:e.val,line:e.line,column:e.col,filename:this.filename}},parseIncludeFilter:function(){var e=this.expect("filter"),t=[];return"start-attributes"===this.peek().type&&(t=this.attrs()),{type:"IncludeFilter",name:e.val,attrs:t,line:e.line,column:e.col,filename:this.filename}},parseFilter:function(){var e,t=this.expect("filter"),n=[];if("start-attributes"===this.peek().type&&(n=this.attrs()),"text"===this.peek().type){var r=this.advance();e=this.initBlock(r.line,[{type:"Text",val:r.val,line:r.line,column:r.col,filename:this.filename}])}else e="filter"===this.peek().type?this.initBlock(t.line,[this.parseFilter()]):this.parseTextBlock()||this.emptyBlock(t.line);return{type:"Filter",name:t.val,block:e,attrs:n,line:t.line,column:t.col,filename:this.filename}},parseEach:function(){var e=this.expect("each"),t={type:"Each",obj:e.code,val:e.val,key:e.key,block:this.block(),line:e.line,column:e.col,filename:this.filename};return"else"==this.peek().type&&(this.advance(),t.alternate=this.block()),t},parseExtends:function(){var e=this.expect("extends"),t=this.expect("path");return{type:"Extends",file:{type:"FileReference",path:t.val.trim(),line:t.line,column:t.col,filename:this.filename},line:e.line,column:e.col,filename:this.filename}},parseBlock:function(){var e=this.expect("block"),t="indent"==this.peek().type?this.block():this.emptyBlock(e.line);return t.type="NamedBlock",t.name=e.val.trim(),t.mode=e.mode,t.line=e.line,t.column=e.col,t},parseMixinBlock:function(){var e=this.expect("mixin-block");return this.inMixin||this.error("BLOCK_OUTISDE_MIXIN","Anonymous blocks are not allowed unless they are part of a mixin.",e),{type:"MixinBlock",line:e.line,column:e.col,filename:this.filename}},parseYield:function(){var e=this.expect("yield");return{type:"YieldBlock",line:e.line,column:e.col,filename:this.filename}},parseInclude:function(){for(var e=this.expect("include"),t={type:"Include",file:{type:"FileReference",filename:this.filename},line:e.line,column:e.col,filename:this.filename},n=[];"filter"===this.peek().type;)n.push(this.parseIncludeFilter());var r=this.expect("path");return t.file.path=r.val.trim(),t.file.line=r.line,t.file.column=r.col,!/\.jade$/.test(t.file.path)&&!/\.pug$/.test(t.file.path)||n.length?(t.type="RawInclude",t.filters=n,"indent"===this.peek().type&&this.error("RAW_INCLUDE_BLOCK","Raw inclusion cannot contain a block",this.peek())):(t.block="indent"==this.peek().type?this.block():this.emptyBlock(e.line),/\.jade$/.test(t.file.path)&&console.warn(this.filename+", line "+e.line+':\nThe .jade extension is deprecated, use .pug for "'+t.file.path+'".')),t},parseCall:function(){var e=this.expect("call"),t={type:"Mixin",name:e.val,args:e.args,block:this.emptyBlock(e.line),call:!0,attrs:[],attributeBlocks:[],line:e.line,column:e.col,filename:this.filename};return this.tag(t),t.code&&(t.block.nodes.push(t.code),delete t.code),0===t.block.nodes.length&&(t.block=null),t},parseMixin:function(){var e=this.expect("mixin"),t=e.val,n=e.args;if("indent"==this.peek().type){this.inMixin++;var r={type:"Mixin",name:t,args:n,block:this.block(),call:!1,line:e.line,column:e.col,filename:this.filename};return this.inMixin--,r}this.error("MIXIN_WITHOUT_BODY","Mixin "+t+" declared without body",e)},parseTextBlock:function(){var e=this.accept("start-pipeless-text");if(e){for(var t=this.emptyBlock(e.line);"end-pipeless-text"!==this.peek().type;)switch((e=this.advance()).type){case"text":t.nodes.push({type:"Text",val:e.val,line:e.line,column:e.col,filename:this.filename});break;case"newline":t.nodes.push({type:"Text",val:"\n",line:e.line,column:e.col,filename:this.filename});break;case"start-pug-interpolation":t.nodes.push(this.parseExpr()),this.expect("end-pug-interpolation");break;case"interpolated-code":t.nodes.push({type:"Code",val:e.val,buffer:e.buffer,mustEscape:!1!==e.mustEscape,isInline:!0,line:e.line,column:e.col,filename:this.filename});break;default:if(this.runPlugin("textBlockTokens",e,t,e))break;this.error("INVALID_TOKEN","Unexpected token type: "+e.type,e)}return this.advance(),t}},block:function(){for(var e=this.expect("indent"),t=this.emptyBlock(e.line);"outdent"!=this.peek().type;)if("newline"==this.peek().type)this.advance();else if("text-html"==this.peek().type)t.nodes=t.nodes.concat(this.parseTextHtml());else{var n=this.parseExpr();"Block"===n.type?t.nodes=t.nodes.concat(n.nodes):t.nodes.push(n)}return this.expect("outdent"),t},parseInterpolation:function(){var e=this.advance(),t={type:"InterpolatedTag",expr:e.val,selfClosing:!1,block:this.emptyBlock(e.line),attrs:[],attributeBlocks:[],isInline:!1,line:e.line,column:e.col,filename:this.filename};return this.tag(t,{selfClosingAllowed:!0})},parseTag:function(){var e=this.advance(),t={type:"Tag",name:e.val,selfClosing:!1,block:this.emptyBlock(e.line),attrs:[],attributeBlocks:[],isInline:-1!==a.indexOf(e.val),line:e.line,column:e.col,filename:this.filename};return this.tag(t,{selfClosingAllowed:!0})},tag:function(e,t){var n=!1,r=[],i=t&&t.selfClosingAllowed;e:for(;;)switch(this.peek().type){case"id":case"class":"id"===(o=this.advance()).type&&(-1!==r.indexOf("id")&&this.error("DUPLICATE_ID",'Duplicate attribute "id" is not allowed.',o),r.push("id")),e.attrs.push({name:o.type,val:"'"+o.val+"'",line:o.line,column:o.col,filename:this.filename,mustEscape:!1});continue;case"start-attributes":n&&console.warn(this.filename+", line "+this.peek().line+":\nYou should not have pug tags with multiple attributes."),n=!0,e.attrs=e.attrs.concat(this.attrs(r));continue;case"&attributes":var o=this.advance();e.attributeBlocks.push({type:"AttributeBlock",val:o.val,line:o.line,column:o.col,filename:this.filename});break;default:if(u=this.runPlugin("tagAttributeTokens",this.peek(),e,r))break;break e}switch("dot"==this.peek().type&&(e.textOnly=!0,this.advance()),this.peek().type){case"text":case"interpolated-code":var s=this.parseText();"Block"===s.type?e.block.nodes.push.apply(e.block.nodes,s.nodes):e.block.nodes.push(s);break;case"code":e.block.nodes.push(this.parseCode(!0));break;case":":this.advance();var a=this.parseExpr();e.block="Block"===a.type?a:this.initBlock(e.line,[a]);break;case"newline":case"indent":case"outdent":case"eos":case"start-pipeless-text":case"end-pug-interpolation":break;case"slash":if(i){this.advance(),e.selfClosing=!0;break}default:var u=this.runPlugin("tagTokens",this.peek(),e,t);if(u)break;this.error("INVALID_TOKEN","Unexpected token `"+this.peek().type+"` expected `text`, `interpolated-code`, `code`, `:`"+(i?", `slash`":"")+", `newline` or `eos`",this.peek())}for(;"newline"==this.peek().type;)this.advance();if(e.textOnly)e.block=this.parseTextBlock()||this.emptyBlock(e.line);else if("indent"==this.peek().type)for(var c=this.block(),l=0,p=c.nodes.length;l<p;++l)e.block.nodes.push(c.nodes[l]);return e},attrs:function(e){this.expect("start-attributes");for(var t=[],n=this.advance();"attribute"===n.type;)"class"!==n.name&&e&&(-1!==e.indexOf(n.name)&&this.error("DUPLICATE_ATTRIBUTE",'Duplicate attribute "'+n.name+'" is not allowed.',n),e.push(n.name)),t.push({name:n.name,val:n.val,line:n.line,column:n.col,filename:this.filename,mustEscape:!1!==n.mustEscape}),n=this.advance();return this.tokens.defer(n),this.expect("end-attributes"),t}}},{"./lib/inline-tags":121,assert:7,"pug-error":42,"token-stream":146}],121:[function(e,t,n){"use strict";t.exports=["a","abbr","acronym","b","br","code","em","font","i","img","ins","kbd","map","samp","small","span","strong","sub","sup"]},{}],122:[function(e,t,n){"use strict";e("fs");var r=e("./lib/dependencies.js"),i=e("./lib/internals.js"),o=e("./lib/sources.js");t.exports=function(e){var t=[];e=e.filter(function(e){return!i[e]});for(var n=0;n<e.length;n++)-1===t.indexOf(e[n])&&(t.push(e[n]),e.push.apply(e,r[e[n]]));return t.sort().map(function(e){return o[e]}).join("\n")}},{"./lib/dependencies.js":124,"./lib/internals.js":125,"./lib/sources.js":126,fs:9}],123:[function(e,t,n){"use strict";function r(e,t){if(1===arguments.length){for(var n=e[0],i=1;i<e.length;i++)n=r(n,e[i]);return n}for(var o in t)if("class"===o){s=e[o]||[];e[o]=(Array.isArray(s)?s:[s]).concat(t[o]||[])}else if("style"===o){var s=a(e[o]),u=a(t[o]);e[o]=s+u}else e[o]=t[o];return e}function i(e,t){for(var n,r="",i="",o=Array.isArray(t),a=0;a<e.length;a++)(n=s(e[a]))&&(o&&t[a]&&(n=c(n)),r=r+i+n,i=" ");return r}function o(e){var t="",n="";for(var r in e)r&&e[r]&&p.call(e,r)&&(t=t+n+r,n=" ");return t}function s(e,t){return Array.isArray(e)?i(e,t):e&&"object"==typeof e?o(e):e||""}function a(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)p.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return";"!==(e+="")[e.length-1]?e+";":e}function u(e,t,n,r){return!1!==t&&null!=t&&(t||"class"!==e&&"style"!==e)?!0===t?" "+(r?e:e+'="'+e+'"'):("function"==typeof t.toJSON&&(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=c(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"):""}function c(e){var t=""+e,n=h.exec(t);if(!n)return e;var r,i,o,s="";for(r=n.index,i=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==r&&(s+=t.substring(i,r)),i=r+1,s+=o}return i!==r?s+t.substring(i,r):s}function l(t,n,r,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&n||i))throw t.message+=" on line "+r,t;try{i=i||e("fs").readFileSync(n,"utf8")}catch(e){l(t,null,r)}var o=3,s=i.split("\n"),a=Math.max(r-o,0),u=Math.min(s.length,r+o),o=s.slice(a,u).map(function(e,t){var n=t+a+1;return(n==r?"  > ":"    ")+n+"| "+e}).join("\n");throw t.path=n,t.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+t.message,t}var p=Object.prototype.hasOwnProperty;n.merge=r,n.classes=s,n.style=a,n.attr=u,n.attrs=function(e,t){var n="";for(var r in e)if(p.call(e,r)){var i=e[r];if("class"===r){n=u(r,i=s(i),!1,t)+n;continue}"style"===r&&(i=a(i)),n+=u(r,i,!1,t)}return n};var h=/["&<>]/;n.escape=c,n.rethrow=l},{fs:9}],124:[function(e,t,n){t.exports={has_own_property:[],merge:["style"],classes_array:["classes","escape"],classes_object:["has_own_property"],classes:["classes_array","classes_object"],style:["has_own_property"],attr:["escape"],attrs:["attr","classes","has_own_property","style"],match_html:[],escape:["match_html"],rethrow:[]}},{}],125:[function(e,t,n){t.exports={dependencies:!0,internals:!0,has_own_property:!0,classes_array:!0,classes_object:!0,match_html:!0}},{}],126:[function(e,t,n){t.exports={has_own_property:"var pug_has_own_property=Object.prototype.hasOwnProperty;",merge:'function pug_merge(r,e){if(1===arguments.length){for(var t=r[0],a=1;a<r.length;a++)t=pug_merge(t,r[a]);return t}for(var g in e)if("class"===g){var l=r[g]||[];r[g]=(Array.isArray(l)?l:[l]).concat(e[g]||[])}else if("style"===g){var l=pug_style(r[g]),n=pug_style(e[g]);r[g]=l+n}else r[g]=e[g];return r}',classes_array:'function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}',classes_object:'function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}',classes:'function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}',style:'function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}',attr:'function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+\'="\'+t+\'"\'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf(\'"\')===-1)?(n&&(e=pug_escape(e))," "+t+\'="\'+e+\'"\'):" "+t+"=\'"+e.replace(/\'/g,"&#39;")+"\'"):""}',attrs:'function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}',match_html:'var pug_match_html=/["&<>]/;',escape:'function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}',rethrow:'function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\\n"+i+"\\n\\n"+n.message,n}'}},{}],127:[function(e,t,n){var r=e("./");t.exports=function(e,t){return t=t||"template",Function("pug",e+"\nreturn "+t+";")(r)}},{"./":123}],128:[function(e,t,n){"use strict";function r(e,t,n,r){throw i("UNEXPECTED_TOKEN","`"+e+"` encountered when "+t,{filename:n,line:r})}var i=e("pug-error");t.exports=function(e,t){var n=!1!==(t=t||{}).stripUnbuffered,i=!0===t.stripBuffered,o=t.filename,s=!1,a=!1;return e.filter(function(e){switch(e.type){case"comment":if(!s)return!(s=e.buffer?i:n);r("comment","already in a comment",o,e.line);case"start-pipeless-text":return!s||(a&&r("start-pipeless-text","already in pipeless text mode",o,e.line),a=!0,!1);case"end-pipeless-text":return!s||(a||r("end-pipeless-text","not in pipeless text mode",o,e.line),a=!1,s=!1,!1);case"text":return!s;default:return!a&&(s=!1,!0)}})}},{"pug-error":42}],129:[function(e,t,n){"use strict";function r(e,t,n,i){function o(e){return e.reduce(function(e,o){var s=r(o,t,n,i);return Array.isArray(s)?e.concat(s):e.concat([s])},[])}n&&"object"==typeof n&&void 0===i&&(i=n,n=null);var s=(i=i||{includeDependencies:!1}).parents=i.parents||[],a=function t(n){if(Array.isArray(n)&&!t.arrayAllowed)throw new Error("replace() can only be called with an array if the last parent is a Block or NamedBlock");e=n};if(a.arrayAllowed=s[0]&&(/^(Named)?Block$/.test(s[0].type)||"RawInclude"===s[0].type&&"IncludeFilter"===e.type),t){if(!1===t(e,a))return e;if(Array.isArray(e))return o(e)}switch(s.unshift(e),e.type){case"NamedBlock":case"Block":e.nodes=o(e.nodes);break;case"Case":case"Filter":case"Mixin":case"Tag":case"InterpolatedTag":case"When":case"Code":case"While":e.block&&(e.block=r(e.block,t,n,i));break;case"Each":e.block&&(e.block=r(e.block,t,n,i)),e.alternate&&(e.alternate=r(e.alternate,t,n,i));break;case"Conditional":e.consequent&&(e.consequent=r(e.consequent,t,n,i)),e.alternate&&(e.alternate=r(e.alternate,t,n,i));break;case"Include":r(e.block,t,n,i),r(e.file,t,n,i);break;case"Extends":r(e.file,t,n,i);break;case"RawInclude":e.filters=o(e.filters),r(e.file,t,n,i);break;case"Attrs":case"BlockComment":case"Comment":case"Doctype":case"IncludeFilter":case"MixinBlock":case"YieldBlock":case"Text":break;case"FileReference":i.includeDependencies&&e.ast&&r(e.ast,t,n,i);break;default:throw new Error("Unexpected node type "+e.type)}return s.shift(),n&&n(e,a),e}t.exports=r},{}],130:[function(e,t,n){"use strict";function r(e,t){if(t=t||{},"string"!=typeof e)throw new Error('Expected source code to be a string but got "'+typeof e+'"');if("object"!=typeof t)throw new Error('Expected "options" to be an object but got "'+typeof t+'"');e=e.replace(/^\uFEFF/,""),this.input=e.replace(/\r\n|\r/g,"\n"),this.originalInput=this.input,this.filename=t.filename,this.interpolated=t.interpolated||!1,this.lineno=t.startingLine||1,this.colno=t.startingColumn||1,this.plugins=t.plugins||[],this.indentStack=[0],this.indentRe=null,this.interpolationAllowed=!0,this.tokens=[],this.ended=!1}var i=e("assert"),o=e("is-expression"),s=e("character-parser"),a=e("pug-error");t.exports=function(e,t){var n=new r(e,t);return JSON.parse(JSON.stringify(n.getTokens()))},t.exports.Lexer=r,r.prototype={constructor:r,error:function(e,t){throw a(e,t,{line:this.lineno,column:this.colno,filename:this.filename,src:this.originalInput})},assert:function(e,t){e||this.error("ASSERT_FAILED",t)},isExpression:function(e){return o(e,{throw:!0})},assertExpression:function(e,t){try{return this.callLexerFunction("isExpression",e),!0}catch(e){if(t)return!1;if(!e.loc)throw e;this.incrementLine(e.loc.line-1),this.incrementColumn(e.loc.column);var n="Syntax Error: "+e.message.replace(/ \([0-9]+:[0-9]+\)$/,"");this.error("SYNTAX_ERROR",n)}},assertNestingCorrect:function(e){s(e).isNesting()&&this.error("INCORRECT_NESTING","Nesting must match on expression `"+e+"`")},tok:function(e,t){var n={type:e,line:this.lineno,col:this.colno};return void 0!==t&&(n.val=t),n},incrementLine:function(e){this.lineno+=e,e&&(this.colno=1)},incrementColumn:function(e){this.colno+=e},consume:function(e){this.input=this.input.substr(e)},scan:function(e,t){var n;if(n=e.exec(this.input)){var r=n[0].length,i=n[1],o=r-(i?i.length:0),s=this.tok(t,i);return this.consume(r),this.incrementColumn(o),s}},scanEndOfLine:function(e,t){var n;if(n=e.exec(this.input)){var r,i,o=0;(r=/^([ ]+)([^ ]*)/.exec(n[0]))&&(o=r[1].length,this.incrementColumn(o));var s=this.input.substr(n[0].length);if(":"===s[0])return this.input=s,i=this.tok(t,n[1]),this.incrementColumn(n[0].length-o),i;if(/^[ \t]*(\n|$)/.test(s))return this.input=s.substr(/^[ \t]*/.exec(s)[0].length),i=this.tok(t,n[1]),this.incrementColumn(n[0].length-o),i}},bracketExpression:function(e){e=e||0;var t=this.input[e];i("("===t||"{"===t||"["===t,'The start character should be "(", "{" or "["');var n,r=s.BRACKETS[t];try{n=s.parseUntil(this.input,r,{start:e+1})}catch(t){if(void 0!==t.index){for(var o=t.index,a=this.input.substr(e).indexOf("\n"),u=a+e,c=0;o>u&&-1!==a;)this.incrementLine(1),o-=u+1,c+=u+1,a=u=this.input.substr(c).indexOf("\n");this.incrementColumn(o)}throw"CHARACTER_PARSER:END_OF_STRING_REACHED"===t.code?this.error("NO_END_BRACKET","The end of the string reached with no closing bracket "+r+" found."):"CHARACTER_PARSER:MISMATCHED_BRACKET"===t.code&&this.error("BRACKET_MISMATCH",t.message),t}return n},scanIndentation:function(){var e,t;return this.indentRe?e=this.indentRe.exec(this.input):((e=(t=/^\n(\t*) */).exec(this.input))&&!e[1].length&&(e=(t=/^\n( *)/).exec(this.input)),e&&e[1].length&&(this.indentRe=t)),e},eos:function(){if(!this.input.length){this.interpolated&&this.error("NO_END_BRACKET","End of line was reached with no closing bracket for interpolation.");for(var e=0;this.indentStack[e];e++)this.tokens.push(this.tok("outdent"));return this.tokens.push(this.tok("eos")),this.ended=!0,!0}},blank:function(){var e;if(e=/^\n[ \t]*\n/.exec(this.input))return this.consume(e[0].length-1),this.incrementLine(1),!0},comment:function(){var e;if(e=/^\/\/(-)?([^\n]*)/.exec(this.input)){this.consume(e[0].length);var t=this.tok("comment",e[2]);return t.buffer="-"!=e[1],this.interpolationAllowed=t.buffer,this.tokens.push(t),this.incrementColumn(e[0].length),this.callLexerFunction("pipelessText"),!0}},interpolation:function(){if(/^#\{/.test(this.input)){var e=this.bracketExpression(1);this.consume(e.end+1);var t=this.tok("interpolation",e.src);this.tokens.push(t),this.incrementColumn(2),this.assertExpression(e.src);var n=e.src.split("\n"),r=n.length-1;return this.incrementLine(r),this.incrementColumn(n[r].length+1),!0}},tag:function(){var e;if(e=/^(\w(?:[-:\w]*\w)?)/.exec(this.input)){var t,n=e[1],r=e[0].length;return this.consume(r),t=this.tok("tag",n),this.tokens.push(t),this.incrementColumn(r),!0}},filter:function(e){var t=this.scan(/^:([\w\-]+)/,"filter"),n=e&&e.inInclude;if(t)return this.tokens.push(t),this.incrementColumn(t.val.length),this.callLexerFunction("attrs"),n||(this.interpolationAllowed=!1,this.callLexerFunction("pipelessText")),!0},doctype:function(){var e=this.scanEndOfLine(/^doctype *([^\n]*)/,"doctype");if(e)return this.tokens.push(e),!0},id:function(){var e=this.scan(/^#([\w-]+)/,"id");if(e)return this.tokens.push(e),this.incrementColumn(e.val.length),!0;/^#/.test(this.input)&&this.error("INVALID_ID",'"'+/.[^ \t\(\#\.\:]*/.exec(this.input.substr(1))[0]+'" is not a valid ID.')},className:function(){var e=this.scan(/^\.(-?-?[_a-z][_a-z0-9\-]*)/i,"class");if(e)return this.tokens.push(e),this.incrementColumn(e.val.length),!0;/^\.\-/i.test(this.input)&&this.error("INVALID_CLASS_NAME",'If a class name begins with a "-" or "--", it must be followed by a letter or underscore.'),/^\.[0-9]/i.test(this.input)&&this.error("INVALID_CLASS_NAME",'Class names must begin with "-", "_" or a letter.'),/^\./.test(this.input)&&this.error("INVALID_CLASS_NAME",'"'+/.[^ \t\(\#\.\:]*/.exec(this.input.substr(1))[0]+'" is not a valid class name.  Class names must begin with "-", "_" or a letter and can only contain "_", "-", a-z and 0-9.')},endInterpolation:function(){if(this.interpolated&&"]"===this.input[0])return this.input=this.input.substr(1),this.ended=!0,!0},addText:function(e,t,n,r){if(t+n!==""){n=n||"";var i=this.interpolated?t.indexOf("]"):-1,o=this.interpolationAllowed?t.indexOf("#["):-1,a=this.interpolationAllowed?t.indexOf("\\#["):-1,u=/(\\)?([#!]){((?:.|\n)*)$/.exec(t),c=this.interpolationAllowed&&u?u.index:1/0;if(-1===i&&(i=1/0),-1===o&&(o=1/0),-1===a&&(a=1/0),a!==1/0&&a<i&&a<o&&a<c)return n=n+t.substring(0,a)+"#[",this.addText(e,t.substring(a+3),n,!0);if(o!==1/0&&o<i&&o<a&&o<c){this.tokens.push(this.tok(e,n+t.substring(0,o))),this.incrementColumn(n.length+o),r&&this.incrementColumn(1),this.tokens.push(this.tok("start-pug-interpolation")),this.incrementColumn(2);var l,p=new this.constructor(t.substr(o+2),{filename:this.filename,interpolated:!0,startingLine:this.lineno,startingColumn:this.colno});try{l=p.getTokens()}catch(e){throw e.code&&/^PUG:/.test(e.code)&&(this.colno=e.column,this.error(e.code.substr(4),e.msg)),e}return this.colno=p.colno,this.tokens=this.tokens.concat(l),this.tokens.push(this.tok("end-pug-interpolation")),this.incrementColumn(1),void this.addText(e,p.input)}if(i!==1/0&&i<o&&i<a&&i<c)return n+t.substring(0,i)&&this.addText(e,t.substring(0,i),n),this.ended=!0,void(this.input=t.substr(t.indexOf("]")+1)+this.input);if(c!==1/0){if(u[1])return n=n+t.substring(0,c)+"#{",this.addText(e,t.substring(c+3),n);var h=t.substr(0,c);(n||h)&&(h=n+h,this.tokens.push(this.tok(e,h)),this.incrementColumn(h.length));var f,d=u[3],m=this.tok("interpolated-code");this.incrementColumn(2);try{f=s.parseUntil(d,"}")}catch(e){if(void 0!==e.index&&this.incrementColumn(e.index),"CHARACTER_PARSER:END_OF_STRING_REACHED"===e.code)this.error("NO_END_BRACKET","End of line was reached with no closing bracket for interpolation.");else{if("CHARACTER_PARSER:MISMATCHED_BRACKET"!==e.code)throw e;this.error("BRACKET_MISMATCH",e.message)}}return m.mustEscape="#"===u[2],m.buffer=!0,m.val=f.src,this.assertExpression(f.src),this.tokens.push(m),void(f.end+1<d.length?(d=d.substr(f.end+1),this.incrementColumn(f.end+1),this.addText(e,d)):this.incrementColumn(d.length))}t=n+t,this.tokens.push(this.tok(e,t)),this.incrementColumn(t.length)}},text:function(){var e=this.scan(/^(?:\| ?| )([^\n]+)/,"text")||this.scan(/^( )/,"text")||this.scan(/^\|( ?)/,"text");if(e)return this.addText("text",e.val),!0},textHtml:function(){var e=this.scan(/^(<[^\n]*)/,"text-html");if(e)return this.addText("text-html",e.val),!0},dot:function(){var e;if(e=this.scanEndOfLine(/^\./,"dot"))return this.tokens.push(e),this.callLexerFunction("pipelessText"),!0},extends:function(){var e=this.scan(/^extends?(?= |$|\n)/,"extends");if(e)return this.tokens.push(e),this.callLexerFunction("path")||this.error("NO_EXTENDS_PATH","missing path for extends"),!0;this.scan(/^extends?\b/)&&this.error("MALFORMED_EXTENDS","malformed extends")},prepend:function(){var e;if(e=/^(?:block +)?prepend +([^\n]+)/.exec(this.input)){var t=e[1].trim(),n="";if(-1!==t.indexOf("//")&&(n="//"+t.split("//").slice(1).join("//"),t=t.split("//")[0].trim()),!t)return;this.consume(e[0].length-n.length);var r=this.tok("block",t);return r.mode="prepend",this.tokens.push(r),!0}},append:function(){var e;if(e=/^(?:block +)?append +([^\n]+)/.exec(this.input)){var t=e[1].trim(),n="";if(-1!==t.indexOf("//")&&(n="//"+t.split("//").slice(1).join("//"),t=t.split("//")[0].trim()),!t)return;this.consume(e[0].length-n.length);var r=this.tok("block",t);return r.mode="append",this.tokens.push(r),!0}},block:function(){var e;if(e=/^block +([^\n]+)/.exec(this.input)){var t=e[1].trim(),n="";if(-1!==t.indexOf("//")&&(n="//"+t.split("//").slice(1).join("//"),t=t.split("//")[0].trim()),!t)return;this.consume(e[0].length-n.length);var r=this.tok("block",t);return r.mode="replace",this.tokens.push(r),!0}},mixinBlock:function(){var e;if(e=this.scanEndOfLine(/^block/,"mixin-block"))return this.tokens.push(e),!0},yield:function(){var e=this.scanEndOfLine(/^yield/,"yield");if(e)return this.tokens.push(e),!0},include:function(){var e=this.scan(/^include(?=:| |$|\n)/,"include");if(e){for(this.tokens.push(e);this.callLexerFunction("filter",{inInclude:!0}););return this.callLexerFunction("path")||(/^[^ \n]+/.test(this.input)?this.fail():this.error("NO_INCLUDE_PATH","missing path for include")),!0}this.scan(/^include\b/)&&this.error("MALFORMED_INCLUDE","malformed include")},path:function(){var e=this.scanEndOfLine(/^ ([^\n]+)/,"path");if(e&&(e.val=e.val.trim()))return this.tokens.push(e),!0},case:function(){var e=this.scanEndOfLine(/^case +([^\n]+)/,"case");if(e)return this.incrementColumn(-e.val.length),this.assertExpression(e.val),this.incrementColumn(e.val.length),this.tokens.push(e),!0;this.scan(/^case\b/)&&this.error("NO_CASE_EXPRESSION","missing expression for case")},when:function(){var e=this.scanEndOfLine(/^when +([^:\n]+)/,"when");if(e){for(var t=s(e.val);t.isNesting()||t.isString();){var n=/:([^:\n]+)/.exec(this.input);if(!n)break;e.val+=n[0],this.consume(n[0].length),this.incrementColumn(n[0].length),t=s(e.val)}return this.incrementColumn(-e.val.length),this.assertExpression(e.val),this.incrementColumn(e.val.length),this.tokens.push(e),!0}this.scan(/^when\b/)&&this.error("NO_WHEN_EXPRESSION","missing expression for when")},default:function(){var e=this.scanEndOfLine(/^default/,"default");if(e)return this.tokens.push(e),!0;this.scan(/^default\b/)&&this.error("DEFAULT_WITH_EXPRESSION","default should not have an expression")},call:function(){var e,t,n;if(t=/^\+(\s*)(([-\w]+)|(#\{))/.exec(this.input)){if(t[3])n=t[0].length,this.consume(n),e=this.tok("call",t[3]);else{var r=this.bracketExpression(2+t[1].length);n=r.end+1,this.consume(n),this.assertExpression(r.src),e=this.tok("call","#{"+r.src+"}")}if(this.incrementColumn(n),e.args=null,t=/^ *\(/.exec(this.input)){var i=this.bracketExpression(t[0].length-1);if(!/^\s*[-\w]+ *=/.test(i.src)){this.incrementColumn(1),this.consume(i.end+1),e.args=i.src,this.assertExpression("["+e.args+"]");for(var o=0;o<=e.args.length;o++)"\n"===e.args[o]?this.incrementLine(1):this.incrementColumn(1)}}return this.tokens.push(e),!0}},mixin:function(){var e;if(e=/^mixin +([-\w]+)(?: *\((.*)\))? */.exec(this.input)){this.consume(e[0].length);var t=this.tok("mixin",e[1]);return t.args=e[2]||null,this.tokens.push(t),!0}},conditional:function(){var e;if(e=/^(if|unless|else if|else)\b([^\n]*)/.exec(this.input)){this.consume(e[0].length);var t=e[1].replace(/ /g,"-"),n=e[2]&&e[2].trim(),r=this.tok(t,n);switch(this.incrementColumn(e[0].length-n.length),t){case"if":case"else-if":this.assertExpression(n);break;case"unless":this.assertExpression(n),r.val="!("+n+")",r.type="if";break;case"else":n&&this.error("ELSE_CONDITION","`else` cannot have a condition, perhaps you meant `else if`")}return this.tokens.push(r),!0}},while:function(){var e;if(e=/^while +([^\n]+)/.exec(this.input))return this.consume(e[0].length),this.assertExpression(e[1]),this.tokens.push(this.tok("while",e[1])),!0;this.scan(/^while\b/)&&this.error("NO_WHILE_EXPRESSION","missing expression for while")},each:function(){var e;if(e=/^(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? * in *([^\n]+)/.exec(this.input)){this.consume(e[0].length);var t=this.tok("each",e[1]);return t.key=e[2]||null,this.incrementColumn(e[0].length-e[3].length),this.assertExpression(e[3]),t.code=e[3],this.incrementColumn(e[3].length),this.tokens.push(t),!0}this.scan(/^(?:each|for)\b/)&&this.error("MALFORMED_EACH","malformed each"),(e=/^- *(?:each|for) +([a-zA-Z_$][\w$]*)(?: *, *([a-zA-Z_$][\w$]*))? +in +([^\n]+)/.exec(this.input))&&this.error("MALFORMED_EACH",'Pug each and for should no longer be prefixed with a dash ("-"). They are pug keywords and not part of JavaScript.')},code:function(){var e;if(e=/^(!?=|-)[ \t]*([^\n]+)/.exec(this.input)){var t=e[1],n=e[2],r=0;if(this.interpolated){var i;try{i=s.parseUntil(n,"]")}catch(t){if(void 0!==t.index&&this.incrementColumn(e[0].length-n.length+t.index),"CHARACTER_PARSER:END_OF_STRING_REACHED"===t.code)this.error("NO_END_BRACKET","End of line was reached with no closing bracket for interpolation.");else{if("CHARACTER_PARSER:MISMATCHED_BRACKET"!==t.code)throw t;this.error("BRACKET_MISMATCH",t.message)}}r=n.length-i.end,n=i.src}var o=e[0].length-r;this.consume(o);var a=this.tok("code",n);return a.mustEscape="="===t.charAt(0),a.buffer="="===t.charAt(0)||"="===t.charAt(1),this.incrementColumn(e[0].length-e[2].length),a.buffer&&this.assertExpression(n),this.tokens.push(a),this.incrementColumn(n.length),!0}},blockCode:function(){var e;if(e=this.scanEndOfLine(/^-/,"blockcode"))return this.tokens.push(e),this.interpolationAllowed=!1,this.callLexerFunction("pipelessText"),!0},attrs:function(){if("("==this.input.charAt(0)){var e=this.lineno;this.tokens.push(this.tok("start-attributes"));var t=this.bracketExpression().end,n=this.input.substr(1,t-1);this.incrementColumn(1),this.assertNestingCorrect(n);var r="",i=this;this.consume(t+1);for(var o,a=/[ \n\t]/,u=/['"]/,c=!0,l="",p="",h=s.defaultState(),f=e,d=this.colno,m="key",g=function(e){if(""===l.trim())return d=this.colno,!1;if(e===n.length)return!0;if("key"===m){if(a.test(n[e]))for(t=e;t<n.length;t++)if(!a.test(n[t]))return"="!==n[t]&&"!"!==n[t]&&","!==n[t];return","===n[e]}if("value"===m){if(h.isNesting()||h.isString())return!1;if(a.test(n[e]))for(var t=e;t<n.length;t++)if(!a.test(n[t]))return(!s.isPunctuator(n[t])||u.test(n[t])||":"===n[t])&&i.assertExpression(p,!0);return","===n[e]&&i.assertExpression(p,!0)}},v=0;v<=n.length;v++){if(g.call(this,v)){if(p.trim()){var y=this.colno;this.colno=o,this.assertExpression(p),this.colno=y}p=p.trim(),l=l.trim(),l=l.replace(/^['"]|['"]$/g,"");var b=this.tok("attribute");b.name=l,b.val=""==p||p,b.col=d,b.mustEscape=c,this.tokens.push(b),l=p="",m="key",c=!1,this.lineno=f}else switch(m){case"key-char":n[v]===r?(m="key",v+1<n.length&&!/[ ,!=\n\t]/.test(n[v+1])&&this.error("INVALID_KEY_CHARACTER",'Unexpected character "'+n[v+1]+'" expected ` `, `\\n`, `\t`, `,`, `!` or `=`')):l+=n[v];break;case"key":""===l&&u.test(n[v])?(m="key-char",r=n[v]):"!"===n[v]||"="===n[v]?(c="!"!==n[v],"!"===n[v]&&(this.incrementColumn(1),v++),"="!==n[v]&&this.error("INVALID_KEY_CHARACTER","Unexpected character "+n[v]+" expected `=`"),m="value",o=this.colno+1,h=s.defaultState()):l+=n[v];break;case"value":h=s.parseChar(n[v],h),p+=n[v]}"\n"===n[v]?(f++,this.colno=1,l.trim()||(this.lineno=f)):void 0!==n[v]&&this.incrementColumn(1)}return this.lineno=e+(n.match(/\n/g)||[]).length,this.tokens.push(this.tok("end-attributes")),this.incrementColumn(1),!0}},attributesBlock:function(){if(/^&attributes\b/.test(this.input)){var e=11;this.consume(e);var t=this.tok("&attributes");this.incrementColumn(e);var n=this.bracketExpression();return e=n.end+1,this.consume(e),t.val=n.src,this.tokens.push(t),this.incrementColumn(e),!0}},indent:function(){var e=this.scanIndentation();if(e){var t=e[1].length;if(this.incrementLine(1),this.consume(t+1)," "!=this.input[0]&&"\t"!=this.input[0]||this.error("INVALID_INDENTATION","Invalid indentation, you can use tabs or spaces but not both"),"\n"==this.input[0])return this.interpolationAllowed=!0,this.tok("newline");if(t<this.indentStack[0])for(;this.indentStack[0]>t;)this.indentStack[1]<t&&this.error("INCONSISTENT_INDENTATION","Inconsistent indentation. Expecting either "+this.indentStack[1]+" or "+this.indentStack[0]+" spaces/tabs."),this.colno=this.indentStack[1]+1,this.tokens.push(this.tok("outdent")),this.indentStack.shift();else t&&t!=this.indentStack[0]?(this.tokens.push(this.tok("indent",t)),this.colno=1+t,this.indentStack.unshift(t)):(this.tokens.push(this.tok("newline")),this.colno=1+(this.indentStack[0]||0));return this.interpolationAllowed=!0,!0}},pipelessText:function e(t){for(;this.callLexerFunction("blank"););var n=this.scanIndentation();if((t=t||n&&n[1].length)>this.indentStack[0]){this.tokens.push(this.tok("start-pipeless-text"));var r,i=[],o=0;do{var s=this.input.substr(o+1).indexOf("\n");-1==s&&(s=this.input.length-o-1);var a=this.input.substr(o+1,s),u=this.indentRe.exec("\n"+a),c=u&&u[1].length;if(r=c>=t||!a.trim())o+=a.length+1,i.push(a.substr(t));else if(c>this.indentStack[0])return this.tokens.pop(),e.call(this,u[1].length)}while(this.input.length-o&&r);for(this.consume(o);0===this.input.length&&""===i[i.length-1];)i.pop();return i.forEach(function(e,n){this.incrementLine(1),0!==n&&this.tokens.push(this.tok("newline")),this.incrementColumn(t),this.addText("text",e)}.bind(this)),this.tokens.push(this.tok("end-pipeless-text")),!0}},slash:function(){var e=this.scan(/^\//,"slash");if(e)return this.tokens.push(e),!0},colon:function(){var e=this.scan(/^: +/,":");if(e)return this.tokens.push(e),!0},fail:function(){this.error("UNEXPECTED_TEXT",'unexpected text "'+this.input.substr(0,5)+'"')},callLexerFunction:function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);for(var r=[this].concat(t),n=0;n<this.plugins.length;n++){var i=this.plugins[n];if(i[e]&&i[e].apply(i,r))return!0}return this[e].apply(this,t)},advance:function(){return this.callLexerFunction("blank")||this.callLexerFunction("eos")||this.callLexerFunction("endInterpolation")||this.callLexerFunction("yield")||this.callLexerFunction("doctype")||this.callLexerFunction("interpolation")||this.callLexerFunction("case")||this.callLexerFunction("when")||this.callLexerFunction("default")||this.callLexerFunction("extends")||this.callLexerFunction("append")||this.callLexerFunction("prepend")||this.callLexerFunction("block")||this.callLexerFunction("mixinBlock")||this.callLexerFunction("include")||this.callLexerFunction("mixin")||this.callLexerFunction("call")||this.callLexerFunction("conditional")||this.callLexerFunction("each")||this.callLexerFunction("while")||this.callLexerFunction("tag")||this.callLexerFunction("filter")||this.callLexerFunction("blockCode")||this.callLexerFunction("code")||this.callLexerFunction("id")||this.callLexerFunction("dot")||this.callLexerFunction("className")||this.callLexerFunction("attrs")||this.callLexerFunction("attributesBlock")||this.callLexerFunction("indent")||this.callLexerFunction("text")||this.callLexerFunction("textHtml")||this.callLexerFunction("comment")||this.callLexerFunction("slash")||this.callLexerFunction("colon")||this.fail()},getTokens:function(){for(;!this.ended;)this.callLexerFunction("advance");return this.tokens}}},{assert:7,"character-parser":12,"is-expression":23,"pug-error":42}],131:[function(e,t,n){(function(e){!function(r){function i(e){throw new RangeError(B[e])}function o(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function s(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+o((e=e.replace(F,".")).split("."),t).join(".")}function a(e){for(var t,n,r=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t);return r}function u(e){return o(e,function(e){var t="";return e>65535&&(t+=N((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=N(e)}).join("")}function c(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:_}function l(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function p(e,t,n){var r=0;for(e=n?L(e/E):e>>1,e+=L(e/t);e>D*w>>1;r+=_)e=L(e/D);return L(r+(D+1)*e/(e+k))}function h(e){var t,n,r,o,s,a,l,h,f,d,m=[],g=e.length,v=0,y=C,k=A;for((n=e.lastIndexOf(S))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&i("not-basic"),m.push(e.charCodeAt(r));for(o=n>0?n+1:0;o<g;){for(s=v,a=1,l=_;o>=g&&i("invalid-input"),((h=c(e.charCodeAt(o++)))>=_||h>L((b-v)/a))&&i("overflow"),v+=h*a,f=l<=k?x:l>=k+w?w:l-k,!(h<f);l+=_)a>L(b/(d=_-f))&&i("overflow"),a*=d;k=p(v-s,t=m.length+1,0==s),L(v/t)>b-y&&i("overflow"),y+=L(v/t),v%=t,m.splice(v++,0,y)}return u(m)}function f(e){var t,n,r,o,s,u,c,h,f,d,m,g,v,y,k,E=[];for(g=(e=a(e)).length,t=C,n=0,s=A,u=0;u<g;++u)(m=e[u])<128&&E.push(N(m));for(r=o=E.length,o&&E.push(S);r<g;){for(c=b,u=0;u<g;++u)(m=e[u])>=t&&m<c&&(c=m);for(c-t>L((b-n)/(v=r+1))&&i("overflow"),n+=(c-t)*v,t=c,u=0;u<g;++u)if((m=e[u])<t&&++n>b&&i("overflow"),m==t){for(h=n,f=_;d=f<=s?x:f>=s+w?w:f-s,!(h<d);f+=_)k=h-d,y=_-d,E.push(N(l(d+k%y,0))),h=L(k/y);E.push(N(l(h,0))),s=p(n,v,r==o),n=0,++r}++n,++t}return E.join("")}var d="object"==typeof n&&n&&!n.nodeType&&n,m="object"==typeof t&&t&&!t.nodeType&&t,g="object"==typeof e&&e;g.global!==g&&g.window!==g&&g.self!==g||(r=g);var v,y,b=2147483647,_=36,x=1,w=26,k=38,E=700,A=72,C=128,S="-",T=/^xn--/,O=/[^\x20-\x7E]/,F=/[\x2E\u3002\uFF0E\uFF61]/g,B={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=_-x,L=Math.floor,N=String.fromCharCode;if(v={version:"1.4.1",ucs2:{decode:a,encode:u},decode:h,encode:f,toASCII:function(e){return s(e,function(e){return O.test(e)?"xn--"+f(e):e})},toUnicode:function(e){return s(e,function(e){return T.test(e)?h(e.slice(4).toLowerCase()):e})}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return v});else if(d&&m)if(t.exports==d)m.exports=v;else for(y in v)v.hasOwnProperty(y)&&(d[y]=v[y]);else r.punycode=v}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],132:[function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,n,o){t=t||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var c=e.length;u>0&&c>u&&(c=u);for(var l=0;l<c;++l){var p,h,f,d,m=e[l].replace(a,"%20"),g=m.indexOf(n);g>=0?(p=m.substr(0,g),h=m.substr(g+1)):(p=m,h=""),f=decodeURIComponent(p),d=decodeURIComponent(h),r(s,f)?i(s[f])?s[f].push(d):s[f]=[s[f],d]:s[f]=d}return s};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],133:[function(e,t,n){"use strict";function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,n,a){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(s(e),function(s){var a=encodeURIComponent(i(s))+n;return o(e[s])?r(e[s],function(e){return a+encodeURIComponent(i(e))}).join(t):a+encodeURIComponent(i(e[s]))}).join(t):a?encodeURIComponent(i(a))+n+encodeURIComponent(i(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],134:[function(e,t,n){"use strict";n.decode=n.parse=e("./decode"),n.encode=n.stringify=e("./encode")},{"./decode":132,"./encode":133}],135:[function(e,t,n){function r(){this._array=[],this._set=s?new Map:Object.create(null)}var i=e("./util"),o=Object.prototype.hasOwnProperty,s="undefined"!=typeof Map;r.fromArray=function(e,t){for(var n=new r,i=0,o=e.length;i<o;i++)n.add(e[i],t);return n},r.prototype.size=function(){return s?this._set.size:Object.getOwnPropertyNames(this._set).length},r.prototype.add=function(e,t){var n=s?e:i.toSetString(e),r=s?this.has(e):o.call(this._set,n),a=this._array.length;r&&!t||this._array.push(e),r||(s?this._set.set(e,a):this._set[n]=a)},r.prototype.has=function(e){if(s)return this._set.has(e);var t=i.toSetString(e);return o.call(this._set,t)},r.prototype.indexOf=function(e){if(s){var t=this._set.get(e);if(t>=0)return t}else{var n=i.toSetString(e);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},r.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},r.prototype.toArray=function(){return this._array.slice()},n.ArraySet=r},{"./util":144}],136:[function(e,t,n){function r(e){return e<0?1+(-e<<1):0+(e<<1)}function i(e){var t=e>>1;return 1==(1&e)?-t:t}var o=e("./base64");n.encode=function(e){var t,n="",i=r(e);do{t=31&i,(i>>>=5)>0&&(t|=32),n+=o.encode(t)}while(i>0);return n},n.decode=function(e,t,n){var r,s,a=e.length,u=0,c=0;do{if(t>=a)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(s=o.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&s),u+=(s&=31)<<c,c+=5}while(r);n.value=i(u),n.rest=t}},{"./base64":137}],137:[function(e,t,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");n.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},n.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},{}],138:[function(e,t,n){function r(e,t,i,o,s,a){var u=Math.floor((t-e)/2)+e,c=s(i,o[u],!0);return 0===c?u:c>0?t-u>1?r(u,t,i,o,s,a):a==n.LEAST_UPPER_BOUND?t<o.length?t:-1:u:u-e>1?r(e,u,i,o,s,a):a==n.LEAST_UPPER_BOUND?u:e<0?-1:e}n.GREATEST_LOWER_BOUND=1,n.LEAST_UPPER_BOUND=2,n.search=function(e,t,i,o){if(0===t.length)return-1;var s=r(-1,t.length,e,t,i,o||n.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&0===i(t[s],t[s-1],!0);)--s;return s}},{}],139:[function(e,t,n){function r(e,t){var n=e.generatedLine,r=t.generatedLine,i=e.generatedColumn,s=t.generatedColumn;return r>n||r==n&&s>=i||o.compareByGeneratedPositionsInflated(e,t)<=0}function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}var o=e("./util");i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){r(this._last,e)?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(o.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},n.MappingList=i},{"./util":144}],140:[function(e,t,n){function r(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function i(e,t){return Math.round(e+Math.random()*(t-e))}function o(e,t,n,s){if(n<s){var a=n-1;r(e,i(n,s),s);for(var u=e[s],c=n;c<s;c++)t(e[c],u)<=0&&r(e,a+=1,c);r(e,a+1,c);var l=a+1;o(e,t,n,l-1),o(e,t,l+1,s)}}n.quickSort=function(e,t){o(e,t,0,e.length-1)}},{}],141:[function(e,t,n){function r(e){var t=e;return"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new s(t):new i(t)}function i(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=a.getArg(t,"version"),r=a.getArg(t,"sources"),i=a.getArg(t,"names",[]),o=a.getArg(t,"sourceRoot",null),s=a.getArg(t,"sourcesContent",null),u=a.getArg(t,"mappings"),l=a.getArg(t,"file",null);if(n!=this._version)throw new Error("Unsupported version: "+n);r=r.map(String).map(a.normalize).map(function(e){return o&&a.isAbsolute(o)&&a.isAbsolute(e)?a.relative(o,e):e}),this._names=c.fromArray(i.map(String),!0),this._sources=c.fromArray(r,!0),this.sourceRoot=o,this.sourcesContent=s,this._mappings=u,this.file=l}function o(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function s(e){var t=e;"string"==typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=a.getArg(t,"version"),i=a.getArg(t,"sections");if(n!=this._version)throw new Error("Unsupported version: "+n);this._sources=new c,this._names=new c;var o={line:-1,column:0};this._sections=i.map(function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=a.getArg(e,"offset"),n=a.getArg(t,"line"),i=a.getArg(t,"column");if(n<o.line||n===o.line&&i<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=t,{generatedOffset:{generatedLine:n+1,generatedColumn:i+1},consumer:new r(a.getArg(e,"map"))}})}var a=e("./util"),u=e("./binary-search"),c=e("./array-set").ArraySet,l=e("./base64-vlq"),p=e("./quick-sort").quickSort;r.fromSourceMap=function(e){return i.fromSourceMap(e)},r.prototype._version=3,r.prototype.__generatedMappings=null,Object.defineProperty(r.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),r.prototype.__originalMappings=null,Object.defineProperty(r.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),r.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},r.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},r.GENERATED_ORDER=1,r.ORIGINAL_ORDER=2,r.GREATEST_LOWER_BOUND=1,r.LEAST_UPPER_BOUND=2,r.prototype.eachMapping=function(e,t,n){var i,o=t||null;switch(n||r.GENERATED_ORDER){case r.GENERATED_ORDER:i=this._generatedMappings;break;case r.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;i.map(function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=s&&(t=a.join(s,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}},this).forEach(e,o)},r.prototype.allGeneratedPositionsFor=function(e){var t=a.getArg(e,"line"),n={source:a.getArg(e,"source"),originalLine:t,originalColumn:a.getArg(e,"column",0)};if(null!=this.sourceRoot&&(n.source=a.relative(this.sourceRoot,n.source)),!this._sources.has(n.source))return[];n.source=this._sources.indexOf(n.source);var r=[],i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",a.compareByOriginalPositions,u.LEAST_UPPER_BOUND);if(i>=0){var o=this._originalMappings[i];if(void 0===e.column)for(var s=o.originalLine;o&&o.originalLine===s;)r.push({line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++i];else for(var c=o.originalColumn;o&&o.originalLine===t&&o.originalColumn==c;)r.push({line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++i]}return r},n.SourceMapConsumer=r,(i.prototype=Object.create(r.prototype)).consumer=r,i.fromSourceMap=function(e){var t=Object.create(i.prototype),n=t._names=c.fromArray(e._names.toArray(),!0),r=t._sources=c.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var s=e._mappings.toArray().slice(),u=t.__generatedMappings=[],l=t.__originalMappings=[],h=0,f=s.length;h<f;h++){var d=s[h],m=new o;m.generatedLine=d.generatedLine,m.generatedColumn=d.generatedColumn,d.source&&(m.source=r.indexOf(d.source),m.originalLine=d.originalLine,m.originalColumn=d.originalColumn,d.name&&(m.name=n.indexOf(d.name)),l.push(m)),u.push(m)}return p(t.__originalMappings,a.compareByOriginalPositions),t},i.prototype._version=3,Object.defineProperty(i.prototype,"sources",{get:function(){return this._sources.toArray().map(function(e){return null!=this.sourceRoot?a.join(this.sourceRoot,e):e},this)}}),i.prototype._parseMappings=function(e,t){for(var n,r,i,s,u,c=1,h=0,f=0,d=0,m=0,g=0,v=e.length,y=0,b={},_={},x=[],w=[];y<v;)if(";"===e.charAt(y))c++,y++,h=0;else if(","===e.charAt(y))y++;else{for((n=new o).generatedLine=c,s=y;s<v&&!this._charIsMappingSeparator(e,s);s++);if(r=e.slice(y,s),i=b[r])y+=r.length;else{for(i=[];y<s;)l.decode(e,y,_),u=_.value,y=_.rest,i.push(u);if(2===i.length)throw new Error("Found a source, but no line and column");if(3===i.length)throw new Error("Found a source and line, but no column");b[r]=i}n.generatedColumn=h+i[0],h=n.generatedColumn,i.length>1&&(n.source=m+i[1],m+=i[1],n.originalLine=f+i[2],f=n.originalLine,n.originalLine+=1,n.originalColumn=d+i[3],d=n.originalColumn,i.length>4&&(n.name=g+i[4],g+=i[4])),w.push(n),"number"==typeof n.originalLine&&x.push(n)}p(w,a.compareByGeneratedPositionsDeflated),this.__generatedMappings=w,p(x,a.compareByOriginalPositions),this.__originalMappings=x},i.prototype._findMapping=function(e,t,n,r,i,o){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return u.search(e,t,i,o)},i.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},i.prototype.originalPositionFor=function(e){var t={generatedLine:a.getArg(e,"line"),generatedColumn:a.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",a.compareByGeneratedPositionsDeflated,a.getArg(e,"bias",r.GREATEST_LOWER_BOUND));if(n>=0){var i=this._generatedMappings[n];if(i.generatedLine===t.generatedLine){var o=a.getArg(i,"source",null);null!==o&&(o=this._sources.at(o),null!=this.sourceRoot&&(o=a.join(this.sourceRoot,o)));var s=a.getArg(i,"name",null);return null!==s&&(s=this._names.at(s)),{source:o,line:a.getArg(i,"originalLine",null),column:a.getArg(i,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},i.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(e){return null==e}))},i.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=a.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var n;if(null!=this.sourceRoot&&(n=a.urlParse(this.sourceRoot))){var r=e.replace(/^file:\/\//,"");if("file"==n.scheme&&this._sources.has(r))return this.sourcesContent[this._sources.indexOf(r)];if((!n.path||"/"==n.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},i.prototype.generatedPositionFor=function(e){var t=a.getArg(e,"source");if(null!=this.sourceRoot&&(t=a.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var n={source:t=this._sources.indexOf(t),originalLine:a.getArg(e,"line"),originalColumn:a.getArg(e,"column")},i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",a.compareByOriginalPositions,a.getArg(e,"bias",r.GREATEST_LOWER_BOUND));if(i>=0){var o=this._originalMappings[i];if(o.source===n.source)return{line:a.getArg(o,"generatedLine",null),column:a.getArg(o,"generatedColumn",null),lastColumn:a.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},n.BasicSourceMapConsumer=i,(s.prototype=Object.create(r.prototype)).constructor=r,s.prototype._version=3,Object.defineProperty(s.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),s.prototype.originalPositionFor=function(e){var t={generatedLine:a.getArg(e,"line"),generatedColumn:a.getArg(e,"column")},n=u.search(t,this._sections,function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn}),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},s.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(e){return e.consumer.hasContentsOfAllSources()})},s.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},s.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer.sources.indexOf(a.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},s.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],i=r.consumer._generatedMappings,o=0;o<i.length;o++){var s=i[o],u=r.consumer._sources.at(s.source);null!==r.consumer.sourceRoot&&(u=a.join(r.consumer.sourceRoot,u)),this._sources.add(u),u=this._sources.indexOf(u);var c=r.consumer._names.at(s.name);this._names.add(c),c=this._names.indexOf(c);var l={source:u,generatedLine:s.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:s.generatedColumn+(r.generatedOffset.generatedLine===s.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:s.originalLine,originalColumn:s.originalColumn,name:c};this.__generatedMappings.push(l),"number"==typeof l.originalLine&&this.__originalMappings.push(l)}p(this.__generatedMappings,a.compareByGeneratedPositionsDeflated),p(this.__originalMappings,a.compareByOriginalPositions)},n.IndexedSourceMapConsumer=s},{"./array-set":135,"./base64-vlq":136,"./binary-search":138,"./quick-sort":140,"./util":144}],142:[function(e,t,n){function r(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new s,this._names=new s,this._mappings=new a,this._sourcesContents=null}var i=e("./base64-vlq"),o=e("./util"),s=e("./array-set").ArraySet,a=e("./mapping-list").MappingList;r.prototype._version=3,r.fromSourceMap=function(e){var t=e.sourceRoot,n=new r({file:e.file,sourceRoot:t});return e.eachMapping(function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)}),n},r.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},r.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},r.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var a=new s,u=new s;this._mappings.unsortedForEach(function(t){if(t.source===r&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=s.source&&(t.source=s.source,null!=n&&(t.source=o.join(n,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name))}var c=t.source;null==c||a.has(c)||a.add(c);var l=t.name;null==l||u.has(l)||u.add(l)},this),this._sources=a,this._names=u,e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,r))},this)},r.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},r.prototype._serializeMappings=function(){for(var e,t,n,r,s=0,a=1,u=0,c=0,l=0,p=0,h="",f=this._mappings.toArray(),d=0,m=f.length;d<m;d++){if(t=f[d],e="",t.generatedLine!==a)for(s=0;t.generatedLine!==a;)e+=";",a++;else if(d>0){if(!o.compareByGeneratedPositionsInflated(t,f[d-1]))continue;e+=","}e+=i.encode(t.generatedColumn-s),s=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=i.encode(r-p),p=r,e+=i.encode(t.originalLine-1-c),c=t.originalLine-1,e+=i.encode(t.originalColumn-u),u=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=i.encode(n-l),l=n)),h+=e}return h},r.prototype._generateSourcesContent=function(e,t){return e.map(function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},r.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},r.prototype.toString=function(){return JSON.stringify(this.toJSON())},n.SourceMapGenerator=r},{"./array-set":135,"./base64-vlq":136,"./mapping-list":139,"./util":144}],143:[function(e,t,n){function r(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this[a]=!0,null!=r&&this.add(r)}var i=e("./source-map-generator").SourceMapGenerator,o=e("./util"),s=/(\r?\n)/,a="$$$isSourceNode$$$";r.fromStringWithSourceMap=function(e,t,n){function i(e,t){if(null===e||void 0===e.source)a.add(t);else{var i=n?o.join(n,e.source):e.source;a.add(new r(e.originalLine,e.originalColumn,i,t,e.name))}}var a=new r,u=e.split(s),c=0,l=function(){function e(){return c<u.length?u[c++]:void 0}return e()+(e()||"")},p=1,h=0,f=null;return t.eachMapping(function(e){if(null!==f){if(!(p<e.generatedLine)){var t=(n=u[c]).substr(0,e.generatedColumn-h);return u[c]=n.substr(e.generatedColumn-h),h=e.generatedColumn,i(f,t),void(f=e)}i(f,l()),p++,h=0}for(;p<e.generatedLine;)a.add(l()),p++;if(h<e.generatedColumn){var n=u[c];a.add(n.substr(0,e.generatedColumn)),u[c]=n.substr(e.generatedColumn),h=e.generatedColumn}f=e},this),c<u.length&&(f&&i(f,l()),a.add(u.splice(c).join(""))),t.sources.forEach(function(e){var r=t.sourceContentFor(e);null!=r&&(null!=n&&(e=o.join(n,e)),a.setSourceContent(e,r))}),a},r.prototype.add=function(e){if(Array.isArray(e))e.forEach(function(e){this.add(e)},this);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},r.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[a]&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},r.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n])[a]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},r.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},r.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n[a]?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},r.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},r.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t][a]&&this.children[t].walkSourceContents(e);for(var r=Object.keys(this.sourceContents),t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},r.prototype.toString=function(){var e="";return this.walk(function(t){e+=t}),e},r.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,o=null,s=null,a=null,u=null;return this.walk(function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(o===i.source&&s===i.line&&a===i.column&&u===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),o=i.source,s=i.line,a=i.column,u=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,r=!1);for(var c=0,l=e.length;c<l;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===l?(o=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++}),this.walkSourceContents(function(e,t){n.setSourceContent(e,t)}),{code:t.code,map:n}},n.SourceNode=r},{"./source-map-generator":142,"./util":144}],144:[function(e,t,n){function r(e){var t=e.match(c);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function i(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var t=e,o=r(e);if(o){if(!o.path)return e;t=o.path}for(var s,a=n.isAbsolute(t),u=t.split(/\/+/),c=0,l=u.length-1;l>=0;l--)"."===(s=u[l])?u.splice(l,1):".."===s?c++:c>0&&(""===s?(u.splice(l+1,c),c=0):(u.splice(l,2),c--));return""===(t=u.join("/"))&&(t=a?"/":"."),o?(o.path=t,i(o)):t}function s(e){return e}function a(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function u(e,t){return e===t?0:e>t?1:-1}n.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var c=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,l=/^data:.+\,.+$/;n.urlParse=r,n.urlGenerate=i,n.normalize=o,n.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=r(t),s=r(e);if(s&&(e=s.path||"/"),n&&!n.scheme)return s&&(n.scheme=s.scheme),i(n);if(n||t.match(l))return t;if(s&&!s.host&&!s.path)return s.host=t,i(s);var a="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return s?(s.path=a,i(s)):a},n.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(c)},n.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var p=!("__proto__"in Object.create(null));n.toSetString=p?s:function(e){return a(e)?"$"+e:e},n.fromSetString=p?s:function(e){return a(e)?e.slice(1):e},n.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)||n?r:0!=(r=e.generatedColumn-t.generatedColumn)?r:0!=(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},n.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r?r:0!=(r=e.generatedColumn-t.generatedColumn)||n?r:0!=(r=e.source-t.source)?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},n.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n?n:0!=(n=e.generatedColumn-t.generatedColumn)?n:0!==(n=u(e.source,t.source))?n:0!=(n=e.originalLine-t.originalLine)?n:0!=(n=e.originalColumn-t.originalColumn)?n:u(e.name,t.name)}},{}],145:[function(e,t,n){n.SourceMapGenerator=e("./lib/source-map-generator").SourceMapGenerator,n.SourceMapConsumer=e("./lib/source-map-consumer").SourceMapConsumer,n.SourceNode=e("./lib/source-node").SourceNode},{"./lib/source-map-consumer":141,"./lib/source-map-generator":142,"./lib/source-node":143}],146:[function(e,t,n){"use strict";function r(e){if(!Array.isArray(e))throw new TypeError("tokens must be passed to TokenStream as an array.");this._tokens=e}t.exports=r,r.prototype.lookahead=function(e){if(this._tokens.length<=e)throw new Error("Cannot read past the end of a stream");return this._tokens[e]},r.prototype.peek=function(){if(0===this._tokens.length)throw new Error("Cannot read past the end of a stream");return this._tokens[0]},r.prototype.advance=function(){if(0===this._tokens.length)throw new Error("Cannot read past the end of a stream");return this._tokens.shift()},r.prototype.defer=function(e){this._tokens.unshift(e)}},{}],147:[function(e,t,n){(function(t){function r(e){for(var t=Object.create(null),n=0;n<e.length;++n)t[e[n]]=!0;return t}function i(e){return e.split("")}function o(e,t){return t.indexOf(e)>=0}function s(e,t){for(var n=0,r=t.length;n<r;++n)if(e(t[n]))return t[n]}function a(e,t){if(t<=0)return"";if(1==t)return e;var n=a(e,t>>1);return n+=n,1&t&&(n+=e),n}function u(e){Object.defineProperty(e.prototype,"stack",{get:function(){var e=new Error(this.message);e.name=this.name;try{throw e}catch(e){return e.stack}}})}function c(e,t){this.message=e,this.defs=t}function l(e,t,n){!0===e&&(e={});var r=e||{};if(n)for(var i in r)E(r,i)&&!E(t,i)&&c.croak("`"+i+"` is not a supported option",t);for(var i in t)E(t,i)&&(r[i]=e&&E(e,i)?e[i]:t[i]);return r}function p(e,t){var n=0;for(var r in t)E(t,r)&&(e[r]=t[r],n++);return n}function h(){}function f(){return!1}function d(){return!0}function m(){return this}function g(){return null}function v(e,t){e.indexOf(t)<0&&e.push(t)}function y(e,t){return e.replace(/\{(.+?)\}/g,function(e,n){return t&&t[n]})}function b(e,t){for(var n=e.length;--n>=0;)e[n]===t&&e.splice(n,1)}function _(e,t){function n(e,n){for(var r=[],i=0,o=0,s=0;i<e.length&&o<n.length;)t(e[i],n[o])<=0?r[s++]=e[i++]:r[s++]=n[o++];return i<e.length&&r.push.apply(r,e.slice(i)),o<n.length&&r.push.apply(r,n.slice(o)),r}function r(e){if(e.length<=1)return e;var t=Math.floor(e.length/2),i=e.slice(0,t),o=e.slice(t);return i=r(i),o=r(o),n(i,o)}return e.length<2?e.slice():r(e)}function x(e){function t(e){return JSON.stringify(e).replace(/[\u2028\u2029]/g,function(e){switch(e){case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}return e})}function n(e){if(1==e.length)return r+="return str === "+t(e[0])+";";r+="switch(str){";for(var n=0;n<e.length;++n)r+="case "+t(e[n])+":";r+="return true}return false;"}e instanceof Array||(e=e.split(" "));var r="",i=[];e:for(s=0;s<e.length;++s){for(var o=0;o<i.length;++o)if(i[o][0].length==e[s].length){i[o].push(e[s]);continue e}i.push([e[s]])}if(i.length>3){i.sort(function(e,t){return t.length-e.length}),r+="switch(str.length){";for(var s=0;s<i.length;++s){var a=i[s];r+="case "+a[0].length+":",n(a)}r+="}"}else n(e);return new Function("str",r)}function w(e,t){for(var n=e.length;--n>=0;)if(!t(e[n]))return!1;return!0}function k(){this._values=Object.create(null),this._size=0}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e){for(var t,n=e.parent(-1),r=0;t=e.parent(r);r++){if(t instanceof oe&&t.body===n)return!0;if(!(t instanceof Ye&&t.car===n||t instanceof We&&t.expression===n&&!(t instanceof Ge)||t instanceof Ke&&t.expression===n||t instanceof Je&&t.expression===n||t instanceof nt&&t.condition===n||t instanceof tt&&t.left===n||t instanceof et&&t.expression===n))return!1;n=t}}function C(e,t,r,i){arguments.length<4&&(i=ie);var o=t=t?t.split(/\s+/):[];i&&i.PROPS&&(t=t.concat(i.PROPS));for(var s="return function AST_"+e+"(props){ if (props) { ",a=t.length;--a>=0;)s+="this."+t[a]+" = props."+t[a]+";";var u=i&&new i;(u&&u.initialize||r&&r.initialize)&&(s+="this.initialize();"),s+="}}";var c=new Function(s)();if(u&&(c.prototype=u,c.BASE=i),i&&i.SUBCLASSES.push(c),c.prototype.CTOR=c,c.PROPS=t||null,c.SELF_PROPS=o,c.SUBCLASSES=[],e&&(c.prototype.TYPE=c.TYPE=e),r)for(a in r)E(r,a)&&(/^\$/.test(a)?c[a.substr(1)]=r[a]:c.prototype[a]=r[a]);return c.DEFMETHOD=function(e,t){this.prototype[e]=t},void 0!==n&&(n["AST_"+e]=c),c}function S(e,t){var n=e.body;if(n instanceof oe)n._walk(t);else for(var r=0,i=n.length;r<i;r++)n[r]._walk(t)}function T(e){this.visit=e,this.stack=[],this.directives=Object.create(null)}function O(e){return e>=97&&e<=122||e>=65&&e<=90||e>=170&&Xt.letter.test(String.fromCharCode(e))}function F(e){return e>=48&&e<=57}function B(e){return F(e)||O(e)}function D(e){return Xt.digit.test(String.fromCharCode(e))}function L(e){return Xt.non_spacing_mark.test(e)||Xt.space_combining_mark.test(e)}function N(e){return Xt.connector_punctuation.test(e)}function M(e){return!It(e)&&/^[a-z_$][a-z0-9_$]*$/i.test(e)}function R(e){return 36==e||95==e||O(e)}function P(e){var t=e.charCodeAt(0);return R(t)||F(t)||8204==t||8205==t||L(e)||N(e)||D(t)}function I(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)}function j(e){if(zt.test(e))return parseInt(e.substr(2),16);if(Ut.test(e))return parseInt(e.substr(1),8);var t=parseFloat(e);return t==e?t:void 0}function V(e,t,n,r,i){this.message=e,this.filename=t,this.line=n,this.col=r,this.pos=i}function z(e,t,n,r,i){throw new V(e,t,n,r,i)}function U(e,t,n){return e.type==t&&(null==n||e.value==n)}function $(e,t,n,r){function i(){return S.text.charAt(S.pos)}function o(e,t){var n=S.text.charAt(S.pos++);if(e&&!n)throw Kt;return Ht(n)?(S.newline_before=S.newline_before||!t,++S.line,S.col=0,t||"\r"!=n||"\n"!=i()||(++S.pos,n="\n")):++S.col,n}function s(e){for(;e-- >0;)o()}function a(e){return S.text.substr(S.pos,e.length)==e}function u(){for(var e=S.text,t=S.pos,n=S.text.length;t<n;++t){var r=e[t];if(Ht(r))return t}return-1}function c(e,t){var n=S.text.indexOf(e,S.pos);if(t&&-1==n)throw Kt;return n}function l(){S.tokline=S.line,S.tokcol=S.col,S.tokpos=S.pos}function p(n,r,i){S.regex_allowed="operator"==n&&!Qt(r)||"keyword"==n&&jt(r)||"punc"==n&&Wt(r),"punc"==n&&"."==r?T=!0:i||(T=!1);var o={type:n,value:r,line:S.tokline,col:S.tokcol,pos:S.tokpos,endline:S.line,endcol:S.col,endpos:S.pos,nlb:S.newline_before,file:t};if(/^(?:num|string|regexp)$/i.test(n)&&(o.raw=e.substring(o.pos,o.endpos)),!i){o.comments_before=S.comments_before,S.comments_before=[];for(var s=0,a=o.comments_before.length;s<a;s++)o.nlb=o.nlb||o.comments_before[s].nlb}return S.newline_before=!1,new re(o)}function h(){for(;qt(i());)o()}function f(e){for(var t,n="",r=0;(t=i())&&e(t,r++);)n+=o();return n}function d(e){z(e,t,S.tokline,S.tokcol,S.tokpos)}function m(e){var t=!1,n=!1,r=!1,i="."==e,o=f(function(o,s){var a=o.charCodeAt(0);switch(a){case 120:case 88:return!r&&(r=!0);case 101:case 69:return!!r||!t&&(t=n=!0);case 45:return n||0==s&&!e;case 43:return n;case n=!1,46:return!(i||r||t)&&(i=!0)}return B(a)});e&&(o=e+o),Ut.test(o)&&C.has_directive("use strict")&&d("Legacy octal literals are not allowed in strict mode");var s=j(o);if(!isNaN(s))return p("num",s);d("Invalid syntax: "+o)}function g(e){var t=o(!0,e);switch(t.charCodeAt(0)){case 110:return"\n";case 114:return"\r";case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 120:return String.fromCharCode(y(2));case 117:return String.fromCharCode(y(4));case 10:return"";case 13:if("\n"==i())return o(!0,e),""}return t>="0"&&t<="7"?v(t):t}function v(e){var t=i();return t>="0"&&t<="7"&&(e+=o(!0))[0]<="3"&&(t=i())>="0"&&t<="7"&&(e+=o(!0)),"0"===e?"\0":(e.length>0&&C.has_directive("use strict")&&d("Legacy octal escape sequences are not allowed in strict mode"),String.fromCharCode(parseInt(e,8)))}function y(e){for(var t=0;e>0;--e){var n=parseInt(o(!0),16);isNaN(n)&&d("Invalid hex-character pattern in string"),t=t<<4|n}return t}function b(e){var t,n=S.regex_allowed,r=u();return-1==r?(t=S.text.substr(S.pos),S.pos=S.text.length):(t=S.text.substring(S.pos,r),S.pos=r),S.col=S.tokcol+(S.pos-S.tokpos),S.comments_before.push(p(e,t,!0)),S.regex_allowed=n,C}function _(){for(var e,t,n=!1,r="",s=!1;null!=(e=i());)if(n)"u"!=e&&d("Expecting UnicodeEscapeSequence -- uXXXX"),P(e=g())||d("Unicode char: "+e.charCodeAt(0)+" is not valid in identifier"),r+=e,n=!1;else if("\\"==e)s=n=!0,o();else{if(!P(e))break;r+=o()}return Rt(r)&&s&&(t=r.charCodeAt(0).toString(16).toUpperCase(),r="\\u"+"0000".substr(t.length)+t+r.slice(1)),r}function x(e){function t(e){if(!i())return e;var n=e+i();return $t(n)?(o(),t(n)):e}return p("operator",t(e||o()))}function w(){switch(o(),i()){case"/":return o(),b("comment1");case"*":return o(),D()}return S.regex_allowed?L(""):x("/")}function k(){return o(),F(i().charCodeAt(0))?m("."):p("punc",".")}function E(){var e=_();return T?p("name",e):Pt(e)?p("atom",e):Rt(e)?$t(e)?p("operator",e):p("keyword",e):p("name",e)}function A(e,t){return function(n){try{return t(n)}catch(t){if(t!==Kt)throw t;d(e)}}}function C(e){if(null!=e)return L(e);for(r&&0==S.pos&&a("#!")&&(l(),s(2),b("comment5"));;){if(h(),l(),n){if(a("\x3c!--")){s(4),b("comment3");continue}if(a("--\x3e")&&S.newline_before){s(3),b("comment4");continue}}var t=i();if(!t)return p("eof");var u=t.charCodeAt(0);switch(u){case 34:case 39:return O(t);case 46:return k();case 47:var c=w();if(c===C)continue;return c}if(F(u))return m();if(Gt(t))return p("punc",o());if(Vt(t))return x();if(92==u||R(u))return E();break}d("Unexpected character '"+t+"'")}var S={text:e,filename:t,pos:0,tokpos:0,line:1,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,comments_before:[],directives:{},directive_stack:[]},T=!1,O=A("Unterminated string constant",function(e){for(var t=o(),n="";;){var r=o(!0,!0);if("\\"==r)r=g(!0);else if(Ht(r))d("Unterminated string constant");else if(r==t)break;n+=r}var i=p("string",n);return i.quote=e,i}),D=A("Unterminated multiline comment",function(){var e=S.regex_allowed,t=c("*/",!0),n=S.text.substring(S.pos,t).replace(/\r\n|\r|\u2028|\u2029/g,"\n");return s(n.length+2),S.comments_before.push(p("comment2",n,!0)),S.regex_allowed=e,C}),L=A("Unterminated regular expression",function(e){for(var t,n=!1,r=!1;t=o(!0);)if(Ht(t))d("Unexpected line terminator");else if(n)e+="\\"+t,n=!1;else if("["==t)r=!0,e+=t;else if("]"==t&&r)r=!1,e+=t;else{if("/"==t&&!r)break;"\\"==t?n=!0:e+=t}var i=_();try{return p("regexp",new RegExp(e,i))}catch(e){d(e.message)}});return C.context=function(e){return e&&(S=e),S},C.add_directive=function(e){S.directive_stack[S.directive_stack.length-1].push(e),void 0===S.directives[e]?S.directives[e]=1:S.directives[e]++},C.push_directives_stack=function(){S.directive_stack.push([])},C.pop_directives_stack=function(){for(var e=S.directive_stack[S.directive_stack.length-1],t=0;t<e.length;t++)S.directives[e[t]]--;S.directive_stack.pop()},C.has_directive=function(e){return void 0!==S.directives[e]&&S.directives[e]>0},C}function q(e,t){function n(e,t){return U(V.token,e,t)}function r(){return V.peeked||(V.peeked=V.input())}function i(){return V.prev=V.token,V.peeked?(V.token=V.peeked,V.peeked=null):V.token=V.input(),V.in_directives=V.in_directives&&("string"==V.token.type||n("punc",";")),V.token}function o(){return V.prev}function a(e,t,n,r){var i=V.input.context();z(e,i.filename,null!=t?t:i.tokline,null!=n?n:i.tokcol,null!=r?r:i.tokpos)}function u(e,t){a(t,e.line,e.col)}function c(e){null==e&&(e=V.token),u(e,"Unexpected token: "+e.type+" ("+e.value+")")}function p(e,t){if(n(e,t))return i();u(V.token,"Unexpected token "+V.token.type+" «"+V.token.value+"», expected "+e+" «"+t+"»")}function h(e){return p("punc",e)}function f(){return!t.strict&&(V.token.nlb||n("eof")||n("punc","}"))}function d(e){n("punc",";")?i():e||f()||c()}function m(){h("(");var e=ie(!0);return h(")"),e}function g(e){return function(){var t=V.token,n=e(),r=o();return n.start=t,n.end=r,n}}function v(){(n("operator","/")||n("operator","/="))&&(V.peeked=null,V.token=V.input(V.token.value.substr(1)))}function y(){var e=N(bt);s(function(t){return t.name==e.name},V.labels)&&a("Label "+e.name+" defined twice"),h(":"),V.labels.push(e);var t=q();return V.labels.pop(),t instanceof de||e.references.forEach(function(t){t instanceof Le&&(t=t.label.start,a("Continue label `"+e.name+"` refers to non-IterationStatement.",t.line,t.col,t.pos))}),new fe({body:t,label:e})}function b(e){return new ue({body:(e=ie(!0),d(),e)})}function _(e){var t,n=null;f()||(n=N(xt,!0)),null!=n?((t=s(function(e){return e.name==n.name},V.labels))||a("Undefined label "+n.name),n.thedef=t):0==V.in_loop&&a(e.TYPE+" not inside a loop or switch"),d();var r=new e({label:n});return t&&t.references.push(r),r}function x(){h("(");var e=null;return!n("punc",";")&&(e=n("keyword","var")?(i(),W(!0)):ie(!0,!0),n("operator","in"))?(e instanceof $e&&e.definitions.length>1&&a("Only one variable declaration allowed in for..in loop"),i(),k(e)):w(e)}function w(e){h(";");var t=n("punc",";")?null:ie(!0);h(";");var r=n("punc",")")?null:ie(!0);return h(")"),new ye({init:e,condition:t,step:r,body:j(q)})}function k(e){var t=e instanceof $e?e.definitions[0].name:null,n=ie(!0);return h(")"),new be({init:e,name:t,object:n,body:j(q)})}function E(){var e=m(),t=q(),r=null;return n("keyword","else")&&(i(),r=q()),new Ne({condition:e,body:t,alternative:r})}function A(){h("{");for(var e=[];!n("punc","}");)n("eof")&&c(),e.push(q());return i(),e}function C(){h("{");for(var e,t=[],r=null,s=null;!n("punc","}");)n("eof")&&c(),n("keyword","case")?(s&&(s.end=o()),r=[],s=new Ie({start:(e=V.token,i(),e),expression:ie(!0),body:r}),t.push(s),h(":")):n("keyword","default")?(s&&(s.end=o()),r=[],s=new Pe({start:(e=V.token,i(),h(":"),e),body:r}),t.push(s)):(r||c(),r.push(q()));return s&&(s.end=o()),i(),t}function S(){var e=A(),t=null,r=null;if(n("keyword","catch")){u=V.token;i(),h("(");var s=N(yt);h(")"),t=new Ve({start:u,argname:s,body:A(),end:o()})}if(n("keyword","finally")){var u=V.token;i(),r=new ze({start:u,body:A(),end:o()})}return t||r||a("Missing catch/finally blocks"),new je({body:e,bcatch:t,bfinally:r})}function T(e,t){for(var r=[];r.push(new He({start:V.token,name:N(t?dt:ft),value:n("operator","=")?(i(),ie(!1,e)):null,end:o()})),n("punc",",");)i();return r}function O(){var e,t=V.token;switch(t.type){case"name":case"keyword":e=L(_t);break;case"num":e=new At({start:t,end:t,value:t.value});break;case"string":e=new Et({start:t,end:t,value:t.value,quote:t.quote});break;case"regexp":e=new Ct({start:t,end:t,value:t.value});break;case"atom":switch(t.value){case"false":e=new Nt({start:t,end:t});break;case"true":e=new Mt({start:t,end:t});break;case"null":e=new Tt({start:t,end:t})}break;case"operator":I(t.value)||a("Invalid getter/setter name: "+t.value,t.line,t.col,t.pos),e=L(_t)}return i(),e}function F(e,t,r){for(var o=!0,s=[];!n("punc",e)&&(o?o=!1:h(","),!t||!n("punc",e));)n("punc",",")&&r?s.push(new Bt({start:V.token,end:V.token})):s.push(ie(!1));return i(),s}function B(){var e=V.token;switch(e.type){case"operator":Rt(e.value)||c();case"num":case"string":case"name":case"keyword":case"atom":return i(),e.value;default:c()}}function D(){var e=V.token;return"name"!=e.type&&c(),i(),e.value}function L(e){var t=V.token.value;return new("this"==t?wt:e)({name:String(t),start:V.token,end:V.token})}function N(e,t){if(!n("name"))return t||a("Name expected"),null;var r=L(e);return i(),r}function M(e,t,n){var r=t.value;return"++"!=r&&"--"!=r||P(n)||a("Invalid use of "+r+" operator",t.line,t.col,t.pos),new e({operator:r,expression:n})}function R(e){return te(ee(!0),0,e)}function P(e){return!!t.cli||(e instanceof Xe||e instanceof _t)}function j(e){++V.in_loop;var t=e();return--V.in_loop,t}t=l(t,{bare_returns:!1,cli:!1,expression:!1,filename:null,html5_comments:!0,shebang:!0,strict:!1,toplevel:null});var V={input:"string"==typeof e?$(e,t.filename,t.html5_comments,t.shebang):e,token:null,prev:null,peeked:null,in_function:0,in_directives:!0,in_loop:0,labels:[]};V.token=i();var q=g(function(){switch(v(),V.token.type){case"string":if(V.in_directives){var e=r();-1==V.token.raw.indexOf("\\")&&(e.nlb||U(e,"eof")||U(e,"punc",";")||U(e,"punc","}"))?V.input.add_directive(V.token.value):V.in_directives=!1}var s=V.in_directives,u=b();return s?new ae(u.body):u;case"num":case"regexp":case"operator":case"atom":return b();case"name":return U(r(),"punc",":")?y():b();case"punc":switch(V.token.value){case"{":return new le({start:V.token,body:A(),end:o()});case"[":case"(":return b();case";":return V.in_directives=!1,i(),new pe;default:c()}case"keyword":switch(V.token.value){case"break":return i(),_(De);case"continue":return i(),_(Le);case"debugger":return i(),d(),new se;case"do":i();var l=j(q);p("keyword","while");var h=m();return d(!0),new ge({body:l,condition:h});case"while":return i(),new ve({condition:m(),body:j(q)});case"for":return i(),x();case"function":return i(),H(Ce);case"if":return i(),E();case"return":0!=V.in_function||t.bare_returns||a("'return' outside of function"),i();g=null;return n("punc",";")?i():f()||(g=ie(!0),d()),new Oe({value:g});case"switch":return i(),new Me({expression:m(),body:j(C)});case"throw":i(),V.token.nlb&&a("Illegal newline after 'throw'");var g=ie(!0);return d(),new Fe({value:g});case"try":return i(),S();case"var":i();w=W();return d(),w;case"const":i();var w=G();return d(),w;case"with":return V.input.has_directive("use strict")&&a("Strict mode may not include a with statement"),i(),new _e({expression:m(),body:q()})}}c()}),H=function(e){var t=e===Ce,r=n("name")?N(t?gt:vt):null;return t&&!r&&c(),h("("),new e({name:r,argnames:function(e,t){for(;!n("punc",")");)e?e=!1:h(","),t.push(N(mt));return i(),t}(!0,[]),body:function(e,t){++V.in_function,V.in_directives=!0,V.input.push_directives_stack(),V.in_loop=0,V.labels=[];var n=A();return V.input.pop_directives_stack(),--V.in_function,V.in_loop=e,V.labels=t,n}(V.in_loop,V.labels)})},W=function(e){return new $e({start:o(),definitions:T(e,!1),end:o()})},G=function(){return new qe({start:o(),definitions:T(!1,!0),end:o()})},Y=function(e){var t=V.token;p("operator","new");var r,s=X(!1);return n("punc","(")?(i(),r=F(")")):r=[],Z(new Ge({start:t,expression:s,args:r,end:o()}),e)},X=function(e){if(n("operator","new"))return Y(e);var t=V.token;if(n("punc")){switch(t.value){case"(":i();var r=ie(!0);return r.start=t,r.end=V.token,h(")"),Z(r,e);case"[":return Z(K(),e);case"{":return Z(Q(),e)}c()}if(n("keyword","function")){i();var s=H(Ae);return s.start=t,s.end=o(),Z(s,e)}if(nn[V.token.type])return Z(O(),e);c()},K=g(function(){return h("["),new it({elements:F("]",!t.strict,!0)})}),J=g(function(){return H(Ee)}),Q=g(function(){h("{");for(var e=!0,r=[];!n("punc","}")&&(e?e=!1:h(","),t.strict||!n("punc","}"));){var s=V.token,a=s.type,u=B();if("name"==a&&!n("punc",":")){var c=new pt({start:V.token,name:B(),end:o()});if("get"==u){r.push(new ct({start:s,key:c,value:J(),end:o()}));continue}if("set"==u){r.push(new ut({start:s,key:c,value:J(),end:o()}));continue}}h(":"),r.push(new at({start:s,quote:s.quote,key:u,value:ie(!1),end:o()}))}return i(),new ot({properties:r})}),Z=function(e,t){var r=e.start;if(n("punc","."))return i(),Z(new Ke({start:r,expression:e,property:D(),end:o()}),t);if(n("punc","[")){i();var s=ie(!0);return h("]"),Z(new Je({start:r,expression:e,property:s,end:o()}),t)}return t&&n("punc","(")?(i(),Z(new We({start:r,expression:e,args:F(")"),end:o()}),!0)):e},ee=function(e){var t=V.token;if(n("operator")&&Jt(t.value)){i(),v();var r=M(Ze,t,ee(e));return r.start=t,r.end=o(),r}for(var s=X(e);n("operator")&&Qt(V.token.value)&&!V.token.nlb;)(s=M(et,V.token,s)).start=t,s.end=V.token,i();return s},te=function(e,t,r){var o=n("operator")?V.token.value:null;"in"==o&&r&&(o=null);var s=null!=o?en[o]:null;if(null!=s&&s>t){i();var a=te(ee(!0),s,r);return te(new tt({start:e.start,left:e,operator:o,right:a,end:a.end}),t,r)}return e},ne=function(e){var t=V.token,r=R(e);if(n("operator","?")){i();var s=ie(!1);return h(":"),new nt({start:t,condition:r,consequent:s,alternative:ie(!1,e),end:o()})}return r},re=function(e){var t=V.token,r=ne(e),s=V.token.value;if(n("operator")&&Zt(s)){if(P(r))return i(),new rt({start:t,left:r,operator:s,right:re(e),end:o()});a("Invalid assignment")}return r},ie=function(e,t){var o=V.token,s=re(t);return e&&n("punc",",")?(i(),new Ye({start:o,car:s,cdr:ie(!0,t),end:r()})):s};return t.expression?ie(!0):function(){var e=V.token,r=[];for(V.input.push_directives_stack();!n("eof");)r.push(q());V.input.pop_directives_stack();var i=o(),s=t.toplevel;return s?(s.body=s.body.concat(r),s.end=i):s=new we({start:e,body:r,end:i}),s}()}function H(e,t){T.call(this),this.before=e,this.after=t}function W(e,t,n){this.name=n.name,this.orig=[n],this.scope=e,this.references=[],this.global=!1,this.mangled_name=null,this.undeclared=!1,this.index=t,this.id=W.next_id++}function G(e){return"comment2"==e.type&&/@preserve|@license|@cc_on/i.test(e.value)}function Y(e){function t(e,t){return e.replace(/[\u0000-\u001f\u007f-\uffff]/g,function(e){var n=e.charCodeAt(0).toString(16);if(n.length<=2&&!t){for(;n.length<2;)n="0"+n;return"\\x"+n}for(;n.length<4;)n="0"+n;return"\\u"+n})}function n(n,r){function i(){return"'"+n.replace(/\x27/g,"\\'")+"'"}function o(){return'"'+n.replace(/\x22/g,'\\"')+'"'}var s=0,a=0;switch(n=n.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,function(t,r){switch(t){case'"':return++s,'"';case"'":return++a,"'";case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\v":return e.screw_ie8?"\\v":"\\x0B";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";case"\ufeff":return"\\ufeff";case"\0":return/[0-7]/.test(n.charAt(r+1))?"\\x00":"\\0"}return t}),e.ascii_only&&(n=t(n)),e.quote_style){case 1:return i();case 2:return o();case 3:return"'"==r?i():o();default:return s>a?i():o()}}function r(t,r){var i=n(t,r);return e.inline_script&&(i=(i=(i=i.replace(/<\x2fscript([>\/\t\n\f\r ])/gi,"<\\/script$1")).replace(/\x3c!--/g,"\\x3c!--")).replace(/--\x3e/g,"--\\x3e")),i}function i(n){return n=n.toString(),e.ascii_only&&(n=t(n,!0)),n}function o(t){return a(" ",e.indent_start+y-t*e.indent_level)}function s(t){var n=(t=String(t)).charAt(0),r=S.charAt(S.length-1);if(A&&(A=!1,(":"==r&&"}"==n||(!n||";}".indexOf(n)<0)&&";"!=r)&&(e.semicolons||O(n)?(k+=";",b++,w++):(T(),k+="\n",w++,_++,b=0,/^\s+$/.test(t)&&(A=!0)),e.beautify||(E=!1))),!e.beautify&&e.preserve_line&&R[R.length-1])for(var i=R[R.length-1].start.line;_<i;)T(),k+="\n",w++,_++,b=0,E=!1;E&&((P(r)&&(P(n)||"\\"==n)||"/"==n&&n==r||("+"==n||"-"==n)&&n==S)&&(k+=" ",b++,w++),E=!1),k+=t,w+=t.length;var o=t.split(/\r?\n/),s=o.length-1;_+=s,b+=o[0].length,s>0&&(T(),b=o[s].length),S=t}function u(){A=!1,s(";")}function c(){return y+e.indent_level}function p(){return C&&T(),k}var m=f;if((e=l(e,{ascii_only:!1,beautify:!1,bracketize:!1,comments:!1,indent_level:4,indent_start:0,inline_script:!0,keep_quoted_props:!1,max_line_len:!1,preamble:null,preserve_line:!1,quote_keys:!1,quote_style:0,screw_ie8:!0,semicolons:!0,shebang:!0,source_map:null,space_colon:!0,unescape_regexps:!1,width:80,wrap_iife:!1},!0)).comments){var g=e.comments;if("string"==typeof e.comments&&/^\/.*\/[a-zA-Z]*$/.test(e.comments)){var v=e.comments.lastIndexOf("/");g=new RegExp(e.comments.substr(1,v-1),e.comments.substr(v+1))}m=g instanceof RegExp?function(e){return"comment5"!=e.type&&g.test(e.value)}:"function"==typeof g?function(e){return"comment5"!=e.type&&g(this,e)}:"some"===g?G:d}var y=0,b=0,_=1,w=0,k="",E=!1,A=!1,C=0,S="",T=e.max_line_len?function(){if(b>e.max_line_len){if(C){var t=k.slice(0,C),n=k.slice(C);k=t+"\n"+n,_++,w++,b=n.length}b>e.max_line_len&&ie.warn("Output exceeds {max_line_len} characters",e)}C=0}:h,O=x("( [ + * / - , ."),F=e.beautify?function(){s(" ")}:function(){E=!0},B=e.beautify?function(t){e.beautify&&s(o(t?.5:0))}:h,D=e.beautify?function(e,t){!0===e&&(e=c());var n=y;y=e;var r=t();return y=n,r}:function(e,t){return t()},L=e.beautify?function(){s("\n")}:e.max_line_len?function(){T(),C=k.length}:h,N=e.beautify?function(){s(";")}:function(){A=!0},M=e.source_map?function(t,n){try{t&&e.source_map.add(t.file||"?",_,b,t.line,t.col,n||"name"!=t.type?n:t.value)}catch(e){ie.warn("Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]",{file:t.file,line:t.line,col:t.col,cline:_,ccol:b,name:n||""})}}:h,R=[];return{get:p,toString:p,indent:B,indentation:function(){return y},current_width:function(){return b-y},should_break:function(){return e.width&&this.current_width()>=e.width},newline:L,print:s,space:F,comma:function(){s(","),F()},colon:function(){s(":"),e.space_colon&&F()},last:function(){return S},semicolon:N,force_semicolon:u,to_ascii:t,print_name:function(e){s(i(e))},print_string:function(e,t,n){var i=r(e,t);!0===n&&-1===i.indexOf("\\")&&(on.test(k)||u(),u()),s(i)},encode_string:r,next_indent:c,with_indent:D,with_block:function(e){var t;return s("{"),L(),D(c(),function(){t=e()}),B(),s("}"),t},with_parens:function(e){s("(");var t=e();return s(")"),t},with_square:function(e){s("[");var t=e();return s("]"),t},add_mapping:M,option:function(t){return e[t]},comment_filter:m,line:function(){return _},col:function(){return b},pos:function(){return w},push_node:function(e){R.push(e)},pop_node:function(){return R.pop()},parent:function(e){return R[R.length-2-(e||0)]}}}function X(e,t){if(!(this instanceof X))return new X(e,t);H.call(this,this.before,this.after),this.options=l(e,{angular:!1,booleans:!t,cascade:!t,collapse_vars:!t,comparisons:!t,conditionals:!t,dead_code:!t,drop_console:!1,drop_debugger:!t,evaluate:!t,expression:!1,global_defs:{},hoist_funs:!t,hoist_vars:!1,if_return:!t,join_vars:!t,keep_fargs:!0,keep_fnames:!1,keep_infinity:!1,loops:!t,negate_iife:!t,passes:1,properties:!t,pure_getters:!t&&"strict",pure_funcs:null,reduce_vars:!t,screw_ie8:!0,sequences:!t,side_effects:!t,switches:!t,top_retain:null,toplevel:!(!e||!e.top_retain),unsafe:!1,unsafe_comps:!1,unsafe_math:!1,unsafe_proto:!1,unsafe_regexp:!1,unused:!t,warnings:!0},!0);var n=this.options.pure_funcs;this.pure_funcs="function"==typeof n?n:n?function(e){return n.indexOf(e.expression.print_to_string())<0}:d;var r=this.options.top_retain;r instanceof RegExp?this.top_retain=function(e){return r.test(e.name)}:"function"==typeof r?this.top_retain=r:r&&("string"==typeof r&&(r=r.split(/,/)),this.top_retain=function(e){return r.indexOf(e.name)>=0});var i=this.options.sequences;this.sequences_limit=1==i?200:0|i,this.warnings_produced={}}function K(e){e=l(e,{file:null,root:null,orig:null,orig_line_diff:0,dest_line_diff:0});var t=new ee.SourceMapGenerator({file:e.file,sourceRoot:e.root}),n=e.orig&&new ee.SourceMapConsumer(e.orig);return n&&Array.isArray(e.orig.sources)&&n._sources.toArray().forEach(function(e){var r=n.sourceContentFor(e,!0);r&&t.setSourceContent(e,r)}),{add:function(r,i,o,s,a,u){if(n){var c=n.originalPositionFor({line:s,column:a});if(null===c.source)return;r=c.source,s=c.line,a=c.column,u=c.name||u}t.addMapping({generated:{line:i+e.dest_line_diff,column:o},original:{line:s+e.orig_line_diff,column:a},source:r,name:u})},get:function(){return t},toString:function(){return JSON.stringify(t.toJSON())}}}function J(){function e(e){v(t,e)}var t=["null","true","false","Infinity","-Infinity","undefined"];return[Object,Array,Function,Number,String,Boolean,Error,Math,Date,RegExp].forEach(function(t){Object.getOwnPropertyNames(t).map(e),t.prototype&&Object.getOwnPropertyNames(t.prototype).map(e)}),t}function Q(e,t){function n(e){return!(g.indexOf(e)>=0)&&(!(u.indexOf(e)>=0)&&(t.only_cache?c.props.has(e):!/^-?[0-9]+(\.[0-9]+)?(e[+-][0-9]+)?$/.test(e)))}function r(e){return!(f&&e in y)&&(!(h&&!h.test(e))&&(!(u.indexOf(e)>=0)&&(c.props.has(e)||m.indexOf(e)>=0)))}function i(e,t){t?y[e]=!0:(n(e)&&v(m,e),r(e)||v(g,e))}function o(e){if(!r(e))return e;var t=c.props.get(e);if(!t){if(d){var i="_$"+e+"$"+p+"_";!n(i)||f&&i in y||(t=i)}if(!t)do{t=rn(++c.cname)}while(!n(t)||f&&t in y);c.props.set(e,t)}return t}function s(e,t){var n={};try{!function e(r){r.walk(new T(function(r){if(r instanceof Ye)return e(r.cdr),!0;if(r instanceof Et)return i(r.value,t),!0;if(r instanceof nt)return e(r.consequent),e(r.alternative),!0;throw n}))}(e)}catch(e){if(e!==n)throw e}}function a(e){return e.transform(new H(function(e){return e instanceof Ye?e.cdr=a(e.cdr):e instanceof Et?e.value=o(e.value):e instanceof nt&&(e.consequent=a(e.consequent),e.alternative=a(e.alternative)),e}))}var u=(t=l(t,{cache:null,debug:!1,ignore_quoted:!1,only_cache:!1,regex:null,reserved:null})).reserved;null==u&&(u=J());var c=t.cache;null==c&&(c={cname:-1,props:new k});var p,h=t.regex,f=t.ignore_quoted,d=!1!==t.debug;d&&(p=!0===t.debug?"":t.debug);var m=[],g=[],y={};return e.walk(new T(function(e){e instanceof at?i(e.key,f&&e.quote):e instanceof st?i(e.key.name):e instanceof Ke?i(e.property):e instanceof Je&&s(e.property,f)})),e.transform(new H(function(e){e instanceof at?f&&e.quote||(e.key=o(e.key)):e instanceof st?e.key.name=o(e.key.name):e instanceof Ke?e.property=o(e.property):e instanceof Je&&(f||(e.property=a(e.property)))}))}var Z=e("util"),ee=e("source-map"),te=n;c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c.prototype.name="DefaultsError",u(c),c.croak=function(e,t){throw new c(e,t)};var ne=function(){function e(e,o,s){function a(){var a=o(e[u],u),p=a instanceof r;return p&&(a=a.v),a instanceof t?(a=a.v)instanceof n?l.push.apply(l,s?a.v.slice().reverse():a.v):l.push(a):a!==i&&(a instanceof n?c.push.apply(c,s?a.v.slice().reverse():a.v):c.push(a)),p}var u,c=[],l=[];if(e instanceof Array)if(s){for(u=e.length;--u>=0&&!a(););c.reverse(),l.reverse()}else for(u=0;u<e.length&&!a();++u);else for(u in e)if(E(e,u)&&a())break;return l.concat(c)}function t(e){this.v=e}function n(e){this.v=e}function r(e){this.v=e}e.at_top=function(e){return new t(e)},e.splice=function(e){return new n(e)},e.last=function(e){return new r(e)};var i=e.skip={};return e}();k.prototype={set:function(e,t){return this.has(e)||++this._size,this._values["$"+e]=t,this},add:function(e,t){return this.has(e)?this.get(e).push(t):this.set(e,[t]),this},get:function(e){return this._values["$"+e]},del:function(e){return this.has(e)&&(--this._size,delete this._values["$"+e]),this},has:function(e){return"$"+e in this._values},each:function(e){for(var t in this._values)e(this._values[t],t.substr(1))},size:function(){return this._size},map:function(e){var t=[];for(var n in this._values)t.push(e(this._values[n],n.substr(1)));return t},toObject:function(){return this._values}},k.fromObject=function(e){var t=new k;return t._size=p(t._values,e),t};var re=C("Token","type value line col pos endline endcol endpos nlb comments_before file raw",{},null),ie=C("Node","start end",{_clone:function(e){if(e){var t=this.clone();return t.transform(new H(function(e){if(e!==t)return e.clone(!0)}))}return new this.CTOR(this)},clone:function(e){return this._clone(e)},$documentation:"Base class of all AST nodes",$propdoc:{start:"[AST_Token] The first token of this node",end:"[AST_Token] The last token of this node"},_walk:function(e){return e._visit(this)},walk:function(e){return this._walk(e)}},null);ie.warn_function=null,ie.warn=function(e,t){ie.warn_function&&ie.warn_function(y(e,t))};var oe=C("Statement",null,{$documentation:"Base class of all statements"}),se=C("Debugger",null,{$documentation:"Represents a debugger statement"},oe),ae=C("Directive","value scope quote",{$documentation:'Represents a directive, like "use strict";',$propdoc:{value:"[string] The value of this directive as a plain string (it's not an AST_String!)",scope:"[AST_Scope/S] The scope that this directive affects",quote:"[string] the original quote character"}},oe),ue=C("SimpleStatement","body",{$documentation:"A statement consisting of an expression, i.e. a = 1 + 2",$propdoc:{body:"[AST_Node] an expression node (should not be instanceof AST_Statement)"},_walk:function(e){return e._visit(this,function(){this.body._walk(e)})}},oe),ce=C("Block","body",{$documentation:"A body of statements (usually bracketed)",$propdoc:{body:"[AST_Statement*] an array of statements"},_walk:function(e){return e._visit(this,function(){S(this,e)})}},oe),le=C("BlockStatement",null,{$documentation:"A block statement"},ce),pe=C("EmptyStatement",null,{$documentation:"The empty statement (empty block or simply a semicolon)",_walk:function(e){return e._visit(this)}},oe),he=C("StatementWithBody","body",{$documentation:"Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",$propdoc:{body:"[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"},_walk:function(e){return e._visit(this,function(){this.body._walk(e)})}},oe),fe=C("LabeledStatement","label",{$documentation:"Statement with a label",$propdoc:{label:"[AST_Label] a label definition"},_walk:function(e){return e._visit(this,function(){this.label._walk(e),this.body._walk(e)})},clone:function(e){var t=this._clone(e);if(e){var n=t.label,r=this.label;t.walk(new T(function(e){e instanceof Be&&e.label&&e.label.thedef===r&&(e.label.thedef=n,n.references.push(e))}))}return t}},he),de=C("IterationStatement",null,{$documentation:"Internal class.  All loops inherit from it."},he),me=C("DWLoop","condition",{$documentation:"Base class for do/while statements",$propdoc:{condition:"[AST_Node] the loop condition.  Should not be instanceof AST_Statement"}},de),ge=C("Do",null,{$documentation:"A `do` statement",_walk:function(e){return e._visit(this,function(){this.body._walk(e),this.condition._walk(e)})}},me),ve=C("While",null,{$documentation:"A `while` statement",_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.body._walk(e)})}},me),ye=C("For","init condition step",{$documentation:"A `for` statement",$propdoc:{init:"[AST_Node?] the `for` initialization code, or null if empty",condition:"[AST_Node?] the `for` termination clause, or null if empty",step:"[AST_Node?] the `for` update clause, or null if empty"},_walk:function(e){return e._visit(this,function(){this.init&&this.init._walk(e),this.condition&&this.condition._walk(e),this.step&&this.step._walk(e),this.body._walk(e)})}},de),be=C("ForIn","init name object",{$documentation:"A `for ... in` statement",$propdoc:{init:"[AST_Node] the `for/in` initialization code",name:"[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",object:"[AST_Node] the object that we're looping through"},_walk:function(e){return e._visit(this,function(){this.init._walk(e),this.object._walk(e),this.body._walk(e)})}},de),_e=C("With","expression",{$documentation:"A `with` statement",$propdoc:{expression:"[AST_Node] the `with` expression"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.body._walk(e)})}},he),xe=C("Scope","directives variables functions uses_with uses_eval parent_scope enclosed cname",{$documentation:"Base class for all statements introducing a lexical scope",$propdoc:{directives:"[string*/S] an array of directives declared in this scope",variables:"[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",functions:"[Object/S] like `variables`, but only lists function declarations",uses_with:"[boolean/S] tells whether this scope uses the `with` statement",uses_eval:"[boolean/S] tells whether this scope contains a direct call to the global `eval`",parent_scope:"[AST_Scope?/S] link to the parent scope",enclosed:"[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",cname:"[integer/S] current index for mangling variables (used internally by the mangler)"}},ce),we=C("Toplevel","globals",{$documentation:"The toplevel scope",$propdoc:{globals:"[Object/S] a map of name -> SymbolDef for all undeclared names"},wrap_enclose:function(e){var t=this,n=[],r=[];e.forEach(function(e){var t=e.lastIndexOf(":");n.push(e.substr(0,t)),r.push(e.substr(t+1))});var i="(function("+r.join(",")+"){ '$ORIG'; })("+n.join(",")+")";return i=q(i),i=i.transform(new H(function(e){if(e instanceof ae&&"$ORIG"==e.value)return ne.splice(t.body)}))},wrap_commonjs:function(e,t){var n=this,r=[];t&&(n.figure_out_scope(),n.walk(new T(function(e){e instanceof ht&&e.definition().global&&(s(function(t){return t.name==e.name},r)||r.push(e))})));var i="(function(exports, global){ '$ORIG'; '$EXPORTS'; global['"+e+"'] = exports; }({}, (function(){return this}())))";return i=q(i),i=i.transform(new H(function(e){if(e instanceof ae)switch(e.value){case"$ORIG":return ne.splice(n.body);case"$EXPORTS":var t=[];return r.forEach(function(e){t.push(new ue({body:new rt({left:new Je({expression:new _t({name:"exports"}),property:new Et({value:e.name})}),operator:"=",right:new _t(e)})}))}),ne.splice(t)}}))}},xe),ke=C("Lambda","name argnames uses_arguments",{$documentation:"Base class for functions",$propdoc:{name:"[AST_SymbolDeclaration?] the name of this function",argnames:"[AST_SymbolFunarg*] array of function arguments",uses_arguments:"[boolean/S] tells whether this function accesses the arguments array"},_walk:function(e){return e._visit(this,function(){this.name&&this.name._walk(e);for(var t=this.argnames,n=0,r=t.length;n<r;n++)t[n]._walk(e);S(this,e)})}},xe),Ee=C("Accessor",null,{$documentation:"A setter/getter function.  The `name` property is always null."},ke),Ae=C("Function",null,{$documentation:"A function expression"},ke),Ce=C("Defun",null,{$documentation:"A function definition"},ke),Se=C("Jump",null,{$documentation:"Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"},oe),Te=C("Exit","value",{$documentation:"Base class for “exits” (`return` and `throw`)",$propdoc:{value:"[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},_walk:function(e){return e._visit(this,this.value&&function(){this.value._walk(e)})}},Se),Oe=C("Return",null,{$documentation:"A `return` statement"},Te),Fe=C("Throw",null,{$documentation:"A `throw` statement"},Te),Be=C("LoopControl","label",{$documentation:"Base class for loop control statements (`break` and `continue`)",$propdoc:{label:"[AST_LabelRef?] the label, or null if none"},_walk:function(e){return e._visit(this,this.label&&function(){this.label._walk(e)})}},Se),De=C("Break",null,{$documentation:"A `break` statement"},Be),Le=C("Continue",null,{$documentation:"A `continue` statement"},Be),Ne=C("If","condition alternative",{$documentation:"A `if` statement",$propdoc:{condition:"[AST_Node] the `if` condition",alternative:"[AST_Statement?] the `else` part, or null if not present"},_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.body._walk(e),this.alternative&&this.alternative._walk(e)})}},he),Me=C("Switch","expression",{$documentation:"A `switch` statement",$propdoc:{expression:"[AST_Node] the `switch` “discriminant”"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),S(this,e)})}},ce),Re=C("SwitchBranch",null,{$documentation:"Base class for `switch` branches"},ce),Pe=C("Default",null,{$documentation:"A `default` switch branch"},Re),Ie=C("Case","expression",{$documentation:"A `case` switch branch",$propdoc:{expression:"[AST_Node] the `case` expression"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),S(this,e)})}},Re),je=C("Try","bcatch bfinally",{$documentation:"A `try` statement",$propdoc:{bcatch:"[AST_Catch?] the catch block, or null if not present",bfinally:"[AST_Finally?] the finally block, or null if not present"},_walk:function(e){return e._visit(this,function(){S(this,e),this.bcatch&&this.bcatch._walk(e),this.bfinally&&this.bfinally._walk(e)})}},ce),Ve=C("Catch","argname",{$documentation:"A `catch` node; only makes sense as part of a `try` statement",$propdoc:{argname:"[AST_SymbolCatch] symbol for the exception"},_walk:function(e){return e._visit(this,function(){this.argname._walk(e),S(this,e)})}},ce),ze=C("Finally",null,{$documentation:"A `finally` node; only makes sense as part of a `try` statement"},ce),Ue=C("Definitions","definitions",{$documentation:"Base class for `var` or `const` nodes (variable declarations/initializations)",$propdoc:{definitions:"[AST_VarDef*] array of variable definitions"},_walk:function(e){return e._visit(this,function(){for(var t=this.definitions,n=0,r=t.length;n<r;n++)t[n]._walk(e)})}},oe),$e=C("Var",null,{$documentation:"A `var` statement"},Ue),qe=C("Const",null,{$documentation:"A `const` statement"},Ue),He=C("VarDef","name value",{$documentation:"A variable declaration; only appears in a AST_Definitions node",$propdoc:{name:"[AST_SymbolVar|AST_SymbolConst] name of the variable",value:"[AST_Node?] initializer, or null of there's no initializer"},_walk:function(e){return e._visit(this,function(){this.name._walk(e),this.value&&this.value._walk(e)})}}),We=C("Call","expression args",{$documentation:"A function call expression",$propdoc:{expression:"[AST_Node] expression to invoke as function",args:"[AST_Node*] array of arguments"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e);for(var t=this.args,n=0,r=t.length;n<r;n++)t[n]._walk(e)})}}),Ge=C("New",null,{$documentation:"An object instantiation.  Derives from a function call since it has exactly the same properties"},We),Ye=C("Seq","car cdr",{$documentation:"A sequence expression (two comma-separated expressions)",$propdoc:{car:"[AST_Node] first element in sequence",cdr:"[AST_Node] second element in sequence"},$cons:function(e,t){var n=new Ye(e);return n.car=e,n.cdr=t,n},$from_array:function(e){if(0==e.length)return null;if(1==e.length)return e[0].clone();for(var t=null,n=e.length;--n>=0;)t=Ye.cons(e[n],t);for(var r=t;r;){if(r.cdr&&!r.cdr.cdr){r.cdr=r.cdr.car;break}r=r.cdr}return t},to_array:function(){for(var e=this,t=[];e;){if(t.push(e.car),e.cdr&&!(e.cdr instanceof Ye)){t.push(e.cdr);break}e=e.cdr}return t},add:function(e){for(var t=this;t;){if(!(t.cdr instanceof Ye)){var n=Ye.cons(t.cdr,e);return t.cdr=n}t=t.cdr}},len:function(){return this.cdr instanceof Ye?this.cdr.len()+1:2},_walk:function(e){return e._visit(this,function(){this.car._walk(e),this.cdr&&this.cdr._walk(e)})}}),Xe=C("PropAccess","expression property",{$documentation:'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',$propdoc:{expression:"[AST_Node] the “container” expression",property:"[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"}}),Ke=C("Dot",null,{$documentation:"A dotted property access expression",_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}},Xe),Je=C("Sub",null,{$documentation:'Index-style property access, i.e. `a["foo"]`',_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.property._walk(e)})}},Xe),Qe=C("Unary","operator expression",{$documentation:"Base class for unary expressions",$propdoc:{operator:"[string] the operator",expression:"[AST_Node] expression that this unary operator applies to"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}}),Ze=C("UnaryPrefix",null,{$documentation:"Unary prefix expression, i.e. `typeof i` or `++i`"},Qe),et=C("UnaryPostfix",null,{$documentation:"Unary postfix expression, i.e. `i++`"},Qe),tt=C("Binary","left operator right",{$documentation:"Binary expression, i.e. `a + b`",$propdoc:{left:"[AST_Node] left-hand side expression",operator:"[string] the operator",right:"[AST_Node] right-hand side expression"},_walk:function(e){return e._visit(this,function(){this.left._walk(e),this.right._walk(e)})}}),nt=C("Conditional","condition consequent alternative",{$documentation:"Conditional expression using the ternary operator, i.e. `a ? b : c`",$propdoc:{condition:"[AST_Node]",consequent:"[AST_Node]",alternative:"[AST_Node]"},_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.consequent._walk(e),this.alternative._walk(e)})}}),rt=C("Assign",null,{$documentation:"An assignment expression — `a = b + 5`"},tt),it=C("Array","elements",{$documentation:"An array literal",$propdoc:{elements:"[AST_Node*] array of elements"},_walk:function(e){return e._visit(this,function(){for(var t=this.elements,n=0,r=t.length;n<r;n++)t[n]._walk(e)})}}),ot=C("Object","properties",{$documentation:"An object literal",$propdoc:{properties:"[AST_ObjectProperty*] array of properties"},_walk:function(e){return e._visit(this,function(){for(var t=this.properties,n=0,r=t.length;n<r;n++)t[n]._walk(e)})}}),st=C("ObjectProperty","key value",{$documentation:"Base class for literal object properties",$propdoc:{key:"[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an AST_SymbolAccessor.",value:"[AST_Node] property value.  For setters and getters this is an AST_Accessor."},_walk:function(e){return e._visit(this,function(){this.value._walk(e)})}}),at=C("ObjectKeyVal","quote",{$documentation:"A key: value object property",$propdoc:{quote:"[string] the original quote character"}},st),ut=C("ObjectSetter",null,{$documentation:"An object setter property"},st),ct=C("ObjectGetter",null,{$documentation:"An object getter property"},st),lt=C("Symbol","scope name thedef",{$propdoc:{name:"[string] name of this symbol",scope:"[AST_Scope/S] the current scope (not necessarily the definition scope)",thedef:"[SymbolDef/S] the definition of this symbol"},$documentation:"Base class for all symbols"}),pt=C("SymbolAccessor",null,{$documentation:"The name of a property accessor (setter/getter function)"},lt),ht=C("SymbolDeclaration","init",{$documentation:"A declaration symbol (symbol in var/const, function name or argument, symbol in catch)"},lt),ft=C("SymbolVar",null,{$documentation:"Symbol defining a variable"},ht),dt=C("SymbolConst",null,{$documentation:"A constant declaration"},ht),mt=C("SymbolFunarg",null,{$documentation:"Symbol naming a function argument"},ft),gt=C("SymbolDefun",null,{$documentation:"Symbol defining a function"},ht),vt=C("SymbolLambda",null,{$documentation:"Symbol naming a function expression"},ht),yt=C("SymbolCatch",null,{$documentation:"Symbol naming the exception in catch"},ht),bt=C("Label","references",{$documentation:"Symbol naming a label (declaration)",$propdoc:{references:"[AST_LoopControl*] a list of nodes referring to this label"},initialize:function(){this.references=[],this.thedef=this}},lt),_t=C("SymbolRef",null,{$documentation:"Reference to some symbol (not definition/declaration)"},lt),xt=C("LabelRef",null,{$documentation:"Reference to a label symbol"},lt),wt=C("This",null,{$documentation:"The `this` symbol"},lt),kt=C("Constant",null,{$documentation:"Base class for all constants",getValue:function(){return this.value}}),Et=C("String","value quote",{$documentation:"A string literal",$propdoc:{value:"[string] the contents of this string",quote:"[string] the original quote character"}},kt),At=C("Number","value literal",{$documentation:"A number literal",$propdoc:{value:"[number] the numeric value",literal:"[string] numeric value as string (optional)"}},kt),Ct=C("RegExp","value",{$documentation:"A regexp literal",$propdoc:{value:"[RegExp] the actual regexp"}},kt),St=C("Atom",null,{$documentation:"Base class for atoms"},kt),Tt=C("Null",null,{$documentation:"The `null` atom",value:null},St),Ot=C("NaN",null,{$documentation:"The impossible value",value:NaN},St),Ft=C("Undefined",null,{$documentation:"The `undefined` value",value:void 0},St),Bt=C("Hole",null,{$documentation:"A hole in an array",value:void 0},St),Dt=C("Infinity",null,{$documentation:"The `Infinity` value",value:1/0},St),Lt=C("Boolean",null,{$documentation:"Base class for booleans"},St),Nt=C("False",null,{$documentation:"The `false` atom",value:!1},Lt),Mt=C("True",null,{$documentation:"The `true` atom",value:!0},Lt);T.prototype={_visit:function(e,t){this.push(e);var n=this.visit(e,t?function(){t.call(e)}:h);return!n&&t&&t.call(e),this.pop(e),n},parent:function(e){return this.stack[this.stack.length-2-(e||0)]},push:function(e){e instanceof ke?this.directives=Object.create(this.directives):e instanceof ae&&!this.directives[e.value]&&(this.directives[e.value]=e),this.stack.push(e)},pop:function(e){this.stack.pop(),e instanceof ke&&(this.directives=Object.getPrototypeOf(this.directives))},self:function(){return this.stack[this.stack.length-1]},find_parent:function(e){for(var t=this.stack,n=t.length;--n>=0;){var r=t[n];if(r instanceof e)return r}},has_directive:function(e){var t=this.directives[e];if(t)return t;var n=this.stack[this.stack.length-1];if(n instanceof xe)for(var r=0;r<n.body.length;++r){var i=n.body[r];if(!(i instanceof ae))break;if(i.value==e)return i}},in_boolean_context:function(){for(var e=this.stack,t=e.length,n=e[--t];t>0;){var r=e[--t];if(r instanceof Ne&&r.condition===n||r instanceof nt&&r.condition===n||r instanceof me&&r.condition===n||r instanceof ye&&r.condition===n||r instanceof Ze&&"!"==r.operator&&r.expression===n)return!0;if(!(r instanceof tt)||"&&"!=r.operator&&"||"!=r.operator)return!1;n=r}},loopcontrol_target:function(e){var t=this.stack;if(e.label){for(n=t.length;--n>=0;)if((r=t[n])instanceof fe&&r.label.name==e.label.name)return r.body}else for(var n=t.length;--n>=0;){var r=t[n];if(r instanceof de||e instanceof De&&r instanceof Me)return r}}};var Rt="break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with",Pt="false null true",It="abstract boolean byte char class double enum export extends final float goto implements import int interface let long native package private protected public short static super synchronized this throws transient volatile yield "+Pt+" "+Rt,jt="return new delete throw else case";Rt=x(Rt),It=x(It),jt=x(jt),Pt=x(Pt);var Vt=x(i("+-*&%=<>!?|~^")),zt=/^0x[0-9a-f]+$/i,Ut=/^0[0-7]+$/,$t=x(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),qt=x(i("  \n\r\t\f\v​           \u2028\u2029  　\ufeff")),Ht=x(i("\n\r\u2028\u2029")),Wt=x(i("[{(,;:")),Gt=x(i("[]{}(),;:")),Yt=x(i("gmsiy")),Xt={letter:new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),digit:new RegExp("[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]"),non_spacing_mark:new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),space_combining_mark:new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"),connector_punctuation:new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]")};V.prototype=Object.create(Error.prototype),V.prototype.constructor=V,V.prototype.name="SyntaxError",u(V);var Kt={},Jt=x(["typeof","void","delete","--","++","!","~","-","+"]),Qt=x(["--","++"]),Zt=x(["=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&="]),en=function(e,t){for(var n=0;n<e.length;++n)for(var r=e[n],i=0;i<r.length;++i)t[r[i]]=n+1;return t}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"]],{}),tn=r(["for","do","while","switch"]),nn=r(["atom","num","string","regexp","name"]);H.prototype=new T,function(e){function t(t,n){t.DEFMETHOD("transform",function(t,r){var i,o;return t.push(this),t.before&&(i=t.before(this,n,r)),i===e&&(t.after?(t.stack[t.stack.length-1]=i=this,n(i,t),(o=t.after(i,r))!==e&&(i=o)):n(i=this,t)),t.pop(this),i})}function n(e,t){return ne(e,function(e){return e.transform(t,!0)})}t(ie,h),t(fe,function(e,t){e.label=e.label.transform(t),e.body=e.body.transform(t)}),t(ue,function(e,t){e.body=e.body.transform(t)}),t(ce,function(e,t){e.body=n(e.body,t)}),t(me,function(e,t){e.condition=e.condition.transform(t),e.body=e.body.transform(t)}),t(ye,function(e,t){e.init&&(e.init=e.init.transform(t)),e.condition&&(e.condition=e.condition.transform(t)),e.step&&(e.step=e.step.transform(t)),e.body=e.body.transform(t)}),t(be,function(e,t){e.init=e.init.transform(t),e.object=e.object.transform(t),e.body=e.body.transform(t)}),t(_e,function(e,t){e.expression=e.expression.transform(t),e.body=e.body.transform(t)}),t(Te,function(e,t){e.value&&(e.value=e.value.transform(t))}),t(Be,function(e,t){e.label&&(e.label=e.label.transform(t))}),t(Ne,function(e,t){e.condition=e.condition.transform(t),e.body=e.body.transform(t),e.alternative&&(e.alternative=e.alternative.transform(t))}),t(Me,function(e,t){e.expression=e.expression.transform(t),e.body=n(e.body,t)}),t(Ie,function(e,t){e.expression=e.expression.transform(t),e.body=n(e.body,t)}),t(je,function(e,t){e.body=n(e.body,t),e.bcatch&&(e.bcatch=e.bcatch.transform(t)),e.bfinally&&(e.bfinally=e.bfinally.transform(t))}),t(Ve,function(e,t){e.argname=e.argname.transform(t),e.body=n(e.body,t)}),t(Ue,function(e,t){e.definitions=n(e.definitions,t)}),t(He,function(e,t){e.name=e.name.transform(t),e.value&&(e.value=e.value.transform(t))}),t(ke,function(e,t){e.name&&(e.name=e.name.transform(t)),e.argnames=n(e.argnames,t),e.body=n(e.body,t)}),t(We,function(e,t){e.expression=e.expression.transform(t),e.args=n(e.args,t)}),t(Ye,function(e,t){e.car=e.car.transform(t),e.cdr=e.cdr.transform(t)}),t(Ke,function(e,t){e.expression=e.expression.transform(t)}),t(Je,function(e,t){e.expression=e.expression.transform(t),e.property=e.property.transform(t)}),t(Qe,function(e,t){e.expression=e.expression.transform(t)}),t(tt,function(e,t){e.left=e.left.transform(t),e.right=e.right.transform(t)}),t(nt,function(e,t){e.condition=e.condition.transform(t),e.consequent=e.consequent.transform(t),e.alternative=e.alternative.transform(t)}),t(it,function(e,t){e.elements=n(e.elements,t)}),t(ot,function(e,t){e.properties=n(e.properties,t)}),t(st,function(e,t){e.value=e.value.transform(t)})}(),W.next_id=1,W.prototype={unmangleable:function(e){return e||(e={}),this.global&&!e.toplevel||this.undeclared||!e.eval&&(this.scope.uses_eval||this.scope.uses_with)||e.keep_fnames&&(this.orig[0]instanceof vt||this.orig[0]instanceof gt)},mangle:function(e){var t=e.cache&&e.cache.props;if(this.global&&t&&t.has(this.name))this.mangled_name=t.get(this.name);else if(!this.mangled_name&&!this.unmangleable(e)){var n=this.scope,r=this.orig[0];!e.screw_ie8&&r instanceof vt&&(n=n.parent_scope);var i;this.defun&&(i=this.defun.variables.get(this.name))?this.mangled_name=i.mangled_name||i.name:this.mangled_name=n.next_mangled(e,this),this.global&&t&&t.set(this.name,this.mangled_name)}}},we.DEFMETHOD("figure_out_scope",function(e){e=l(e,{cache:null,screw_ie8:!0});var t=this,n=t.parent_scope=null,r=new k,i=null,o=new T(function(t,o){if(t instanceof Ve){s=n;return(n=new xe(t)).init_scope_vars(s),o(),n=s,!0}if(t instanceof xe){t.init_scope_vars(n);var s=n,a=i,u=r;return i=n=t,r=new k,o(),n=s,i=a,r=u,!0}if(t instanceof fe){var c=t.label;if(r.has(c.name))throw new Error(y("Label {name} defined twice",c));return r.set(c.name,c),o(),r.del(c.name),!0}if(t instanceof _e)for(var l=n;l;l=l.parent_scope)l.uses_with=!0;else if(t instanceof lt&&(t.scope=n),t instanceof bt&&(t.thedef=t,t.references=[]),t instanceof vt)i.def_function(t);else if(t instanceof gt)(t.scope=i.parent_scope).def_function(t);else if(t instanceof ft||t instanceof dt){if(i.def_variable(t),i!==n){t.mark_enclosed(e);var p=n.find_variable(t);t.thedef!==p&&(t.thedef=p,t.reference(e))}}else if(t instanceof yt)n.def_variable(t).defun=i;else if(t instanceof xt){var h=r.get(t.name);if(!h)throw new Error(y("Undefined label {name} [{line},{col}]",{name:t.name,line:t.start.line,col:t.start.col}));t.thedef=h}});t.walk(o);var s=null,o=(t.globals=new k,new T(function(n,r){if(n instanceof ke){var i=s;return s=n,r(),s=i,!0}if(n instanceof Be&&n.label)return n.label.thedef.references.push(n),!0;if(n instanceof _t){var a=n.name;if("eval"==a&&o.parent()instanceof We)for(var u=n.scope;u&&!u.uses_eval;u=u.parent_scope)u.uses_eval=!0;var c=n.scope.find_variable(a);return n.scope instanceof ke&&"arguments"==a&&(n.scope.uses_arguments=!0),c||(c=t.def_global(n)),n.thedef=c,n.reference(e),!0}}));t.walk(o),e.screw_ie8||t.walk(new T(function(n,r){if(n instanceof yt){var i=n.name,o=n.thedef.references,s=n.thedef.defun,a=s.find_variable(i)||t.globals.get(i)||s.def_variable(n);return o.forEach(function(t){t.thedef=a,t.reference(e)}),n.thedef=a,!0}})),e.cache&&(this.cname=e.cache.cname)}),we.DEFMETHOD("def_global",function(e){var t=this.globals,n=e.name;if(t.has(n))return t.get(n);var r=new W(this,t.size(),e);return r.undeclared=!0,r.global=!0,t.set(n,r),r}),xe.DEFMETHOD("init_scope_vars",function(e){this.variables=new k,this.functions=new k,this.uses_with=!1,this.uses_eval=!1,this.parent_scope=e,this.enclosed=[],this.cname=-1}),ke.DEFMETHOD("init_scope_vars",function(){xe.prototype.init_scope_vars.apply(this,arguments),this.uses_arguments=!1,this.def_variable(new ft({name:"arguments",start:this.start,end:this.end}))}),lt.DEFMETHOD("mark_enclosed",function(e){for(var t=this.definition(),n=this.scope;n&&(v(n.enclosed,t),e.keep_fnames&&n.functions.each(function(e){v(t.scope.enclosed,e)}),n!==t.scope);)n=n.parent_scope}),lt.DEFMETHOD("reference",function(e){this.definition().references.push(this),this.mark_enclosed(e)}),xe.DEFMETHOD("find_variable",function(e){return e instanceof lt&&(e=e.name),this.variables.get(e)||this.parent_scope&&this.parent_scope.find_variable(e)}),xe.DEFMETHOD("def_function",function(e){this.functions.set(e.name,this.def_variable(e))}),xe.DEFMETHOD("def_variable",function(e){var t;return this.variables.has(e.name)?(t=this.variables.get(e.name)).orig.push(e):(t=new W(this,this.variables.size(),e),this.variables.set(e.name,t),t.global=!this.parent_scope),e.thedef=t}),xe.DEFMETHOD("next_mangled",function(e){var t=this.enclosed;e:for(;;){var n=rn(++this.cname);if(M(n)&&!(e.except.indexOf(n)>=0)){for(var r=t.length;--r>=0;){var i=t[r];if(n==(i.mangled_name||i.unmangleable(e)&&i.name))continue e}return n}}}),Ae.DEFMETHOD("next_mangled",function(e,t){for(var n=t.orig[0]instanceof mt&&this.name&&this.name.definition(),r=n?n.mangled_name||n.name:null;;){var i=ke.prototype.next_mangled.call(this,e,t);if(!r||r!=i)return i}}),lt.DEFMETHOD("unmangleable",function(e){return this.definition().unmangleable(e)}),bt.DEFMETHOD("unmangleable",function(){return!1}),lt.DEFMETHOD("unreferenced",function(){return 0==this.definition().references.length&&!(this.scope.uses_eval||this.scope.uses_with)}),lt.DEFMETHOD("undeclared",function(){return this.definition().undeclared}),xt.DEFMETHOD("undeclared",function(){return!1}),bt.DEFMETHOD("undeclared",function(){return!1}),lt.DEFMETHOD("definition",function(){return this.thedef}),lt.DEFMETHOD("global",function(){return this.definition().global}),we.DEFMETHOD("_default_mangler_options",function(e){return l(e,{eval:!1,except:[],keep_fnames:!1,screw_ie8:!0,sort:!1,toplevel:!1})}),we.DEFMETHOD("mangle_names",function(e){(e=this._default_mangler_options(e)).except.push("arguments");var t=-1,n=[];e.cache&&this.globals.each(function(t){e.except.indexOf(t.name)<0&&n.push(t)});var r=new T(function(i,o){if(i instanceof fe){var s=t;return o(),t=s,!0}if(i instanceof xe){r.parent();var a=[];return i.variables.each(function(t){e.except.indexOf(t.name)<0&&a.push(t)}),void n.push.apply(n,a)}if(i instanceof bt){var u;do{u=rn(++t)}while(!M(u));return i.mangled_name=u,!0}e.screw_ie8&&i instanceof yt&&n.push(i.definition())});this.walk(r),n.forEach(function(t){t.mangle(e)}),e.cache&&(e.cache.cname=this.cname)}),we.DEFMETHOD("compute_char_frequency",function(e){e=this._default_mangler_options(e);var t=new T(function(t){t instanceof kt?rn.consider(t.print_to_string()):t instanceof Oe?rn.consider("return"):t instanceof Fe?rn.consider("throw"):t instanceof Le?rn.consider("continue"):t instanceof De?rn.consider("break"):t instanceof se?rn.consider("debugger"):t instanceof ae?rn.consider(t.value):t instanceof ve?rn.consider("while"):t instanceof ge?rn.consider("do while"):t instanceof Ne?(rn.consider("if"),t.alternative&&rn.consider("else")):t instanceof $e?rn.consider("var"):t instanceof qe?rn.consider("const"):t instanceof ke?rn.consider("function"):t instanceof ye?rn.consider("for"):t instanceof be?rn.consider("for in"):t instanceof Me?rn.consider("switch"):t instanceof Ie?rn.consider("case"):t instanceof Pe?rn.consider("default"):t instanceof _e?rn.consider("with"):t instanceof ut?rn.consider("set"+t.key):t instanceof ct?rn.consider("get"+t.key):t instanceof at?rn.consider(t.key):t instanceof Ge?rn.consider("new"):t instanceof wt?rn.consider("this"):t instanceof je?rn.consider("try"):t instanceof Ve?rn.consider("catch"):t instanceof ze?rn.consider("finally"):t instanceof lt&&t.unmangleable(e)?rn.consider(t.name):t instanceof Qe||t instanceof tt?rn.consider(t.operator):t instanceof Ke&&rn.consider(t.property)});this.walk(t),rn.sort()});var rn=function(){function e(){r=Object.create(null),(n=i.split("").map(function(e){return e.charCodeAt(0)})).forEach(function(e){r[e]=0})}function t(e){var t="",r=54;e++;do{e--,t+=String.fromCharCode(n[e%r]),e=Math.floor(e/r),r=64}while(e>0);return t}var n,r,i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";return t.consider=function(e){for(var t=e.length;--t>=0;){var n=e.charCodeAt(t);n in r&&++r[n]}},t.sort=function(){n=_(n,function(e,t){return F(e)&&!F(t)?1:F(t)&&!F(e)?-1:r[t]-r[e]})},t.reset=e,e(),t.get=function(){return n},t.freq=function(){return r},t}();we.DEFMETHOD("scope_warnings",function(e){e=l(e,{assign_to_global:!0,eval:!0,func_arguments:!0,nested_defuns:!0,undeclared:!1,unreferenced:!0});var t=new T(function(n){if(e.undeclared&&n instanceof _t&&n.undeclared()&&ie.warn("Undeclared symbol: {name} [{file}:{line},{col}]",{name:n.name,file:n.start.file,line:n.start.line,col:n.start.col}),e.assign_to_global){var r=null;n instanceof rt&&n.left instanceof _t?r=n.left:n instanceof be&&n.init instanceof _t&&(r=n.init),r&&(r.undeclared()||r.global()&&r.scope!==r.definition().scope)&&ie.warn("{msg}: {name} [{file}:{line},{col}]",{msg:r.undeclared()?"Accidental global?":"Assignment to global",name:r.name,file:r.start.file,line:r.start.line,col:r.start.col})}e.eval&&n instanceof _t&&n.undeclared()&&"eval"==n.name&&ie.warn("Eval is used [{file}:{line},{col}]",n.start),e.unreferenced&&(n instanceof ht||n instanceof bt)&&!(n instanceof yt)&&n.unreferenced()&&ie.warn("{type} {name} is declared but not referenced [{file}:{line},{col}]",{type:n instanceof bt?"Label":"Symbol",name:n.name,file:n.start.file,line:n.start.line,col:n.start.col}),e.func_arguments&&n instanceof ke&&n.uses_arguments&&ie.warn("arguments used in function {name} [{file}:{line},{col}]",{name:n.name?n.name.name:"anonymous",file:n.start.file,line:n.start.line,col:n.start.col}),e.nested_defuns&&n instanceof Ce&&!(t.parent()instanceof xe)&&ie.warn('Function {name} declared in nested statement "{type}" [{file}:{line},{col}]',{name:n.name.name,type:t.parent().TYPE,file:n.start.file,line:n.start.line,col:n.start.col})});this.walk(t)});var on=/^$|[;{][\s\n]*$/;!function(){function e(e,t){e.DEFMETHOD("_codegen",t)}function t(e,n){Array.isArray(e)?e.forEach(function(e){t(e,n)}):e.DEFMETHOD("needs_parens",n)}function n(e,t,n,r){var i=e.length-1;v=r,e.forEach(function(e,r){!0!==v||e instanceof ae||e instanceof pe||e instanceof ue&&e.body instanceof Et||(v=!1),e instanceof pe||(n.indent(),e.print(n),r==i&&t||(n.newline(),t&&n.newline())),!0===v&&e instanceof ue&&e.body instanceof Et&&(v=!1)}),v=!1}function r(e,t,r){e.length>0?t.with_block(function(){n(e,!1,t,r)}):t.print("{}")}function i(e,t){var n=e.body;if(t.option("bracketize")||!t.option("screw_ie8")&&n instanceof ge)return f(n,t);if(!n)return t.force_semicolon();for(;;)if(n instanceof Ne){if(!n.alternative)return void f(e.body,t);n=n.alternative}else{if(!(n instanceof he))break;n=n.body}u(e.body,t)}function o(e,t,n){if(n)try{e.walk(new T(function(e){if(e instanceof tt&&"in"==e.operator)throw t})),e.print(t)}catch(n){if(n!==t)throw n;e.print(t,!0)}else e.print(t)}function s(e,t,n){n.option("quote_keys")?n.print_string(e+""):("number"==typeof e||!n.option("beautify")&&+e+""==e)&&parseFloat(e)>=0?n.print(p(e)):(It(e)?n.option("screw_ie8"):I(e))?t&&n.option("keep_quoted_props")?n.print_string(e,t):n.print_name(e):n.print_string(e,t)}function a(e){return[92,47,46,43,42,63,40,41,91,93,123,125,36,94,58,124,33,10,13,0,65279,8232,8233].indexOf(e)<0}function u(e,t){t.option("bracketize")?f(e,t):!e||e instanceof pe?t.force_semicolon():e.print(t)}function c(e,t){return e.args.length>0||t.option("beautify")}function l(e){for(var t=e[0],n=t.length,r=1;r<e.length;++r)e[r].length<n&&(n=(t=e[r]).length);return t}function p(e){var t,n=e.toString(10),r=[n.replace(/^0\./,".").replace("e+","e")];return Math.floor(e)===e?(e>=0?r.push("0x"+e.toString(16).toLowerCase(),"0"+e.toString(8)):r.push("-0x"+(-e).toString(16).toLowerCase(),"-0"+(-e).toString(8)),(t=/^(.*?)(0+)$/.exec(e))&&r.push(t[1]+"e"+t[2].length)):(t=/^0?\.(0+)(.*)$/.exec(e))&&r.push(t[2]+"e-"+(t[1].length+t[2].length),n.substr(n.indexOf("."))),l(r)}function f(e,t){!e||e instanceof pe?t.print("{}"):e instanceof le?e.print(t):t.with_block(function(){t.indent(),e.print(t),t.newline()})}function d(e,t){e.DEFMETHOD("add_source_map",function(e){t(this,e)})}function m(e,t){t.add_mapping(e.start)}var g=!1,v=!1;ie.DEFMETHOD("print",function(e,t){function n(){r.add_comments(e),r.add_source_map(e),i(r,e)}var r=this,i=r._codegen,o=g;r instanceof ae&&"use asm"==r.value&&e.parent()instanceof xe&&(g=!0),e.push_node(r),t||r.needs_parens(e)?e.with_parens(n):n(),e.pop_node(),r instanceof xe&&(g=o)}),ie.DEFMETHOD("print_to_string",function(e){var t=Y(e);return e||(t._readonly=!0),this.print(t),t.get()}),ie.DEFMETHOD("add_comments",function(e){if(!e._readonly){var t=this,n=t.start;if(n&&!n._comments_dumped){n._comments_dumped=!0;var r=n.comments_before||[];if(t instanceof Te&&t.value&&t.value.walk(new T(function(e){if(e.start&&e.start.comments_before&&(r=r.concat(e.start.comments_before),e.start.comments_before=[]),e instanceof Ae||e instanceof it||e instanceof ot)return!0})),0==e.pos()){r.length>0&&e.option("shebang")&&"comment5"==r[0].type&&(e.print("#!"+r.shift().value+"\n"),e.indent());var i=e.option("preamble");i&&e.print(i.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g,"\n"))}r=r.filter(e.comment_filter,t),!e.option("beautify")&&r.length>0&&/comment[134]/.test(r[0].type)&&0!==e.col()&&r[0].nlb&&e.print("\n"),r.forEach(function(t){/comment[134]/.test(t.type)?(e.print("//"+t.value+"\n"),e.indent()):"comment2"==t.type&&(e.print("/*"+t.value+"*/"),n.nlb?(e.print("\n"),e.indent()):e.space())})}}}),t(ie,function(){return!1}),t(Ae,function(e){if(A(e))return!0;if(e.option("wrap_iife")){var t=e.parent();return t instanceof We&&t.expression===this}return!1}),t(ot,function(e){return A(e)}),t(Qe,function(e){var t=e.parent();return t instanceof Xe&&t.expression===this||t instanceof We&&t.expression===this}),t(Ye,function(e){var t=e.parent();return t instanceof We||t instanceof Qe||t instanceof tt||t instanceof He||t instanceof Xe||t instanceof it||t instanceof st||t instanceof nt}),t(tt,function(e){var t=e.parent();if(t instanceof We&&t.expression===this)return!0;if(t instanceof Qe)return!0;if(t instanceof Xe&&t.expression===this)return!0;if(t instanceof tt){var n=t.operator,r=en[n],i=this.operator,o=en[i];if(r>o||r==o&&this===t.right)return!0}}),t(Xe,function(e){var t=e.parent();if(t instanceof Ge&&t.expression===this)try{this.walk(new T(function(e){if(e instanceof We)throw t}))}catch(e){if(e!==t)throw e;return!0}}),t(We,function(e){var t,n=e.parent();return n instanceof Ge&&n.expression===this||this.expression instanceof Ae&&n instanceof Xe&&n.expression===this&&(t=e.parent(1))instanceof rt&&t.left===n}),t(Ge,function(e){var t=e.parent();if(!c(this,e)&&(t instanceof Xe||t instanceof We&&t.expression===this))return!0}),t(At,function(e){var t=e.parent();if(t instanceof Xe&&t.expression===this){var n=this.getValue();if(n<0||/^0/.test(p(n)))return!0}}),t([rt,nt],function(e){var t=e.parent();return t instanceof Qe||(t instanceof tt&&!(t instanceof rt)||(t instanceof We&&t.expression===this||(t instanceof nt&&t.condition===this||(t instanceof Xe&&t.expression===this||void 0))))}),e(ae,function(e,t){t.print_string(e.value,e.quote),t.semicolon()}),e(se,function(e,t){t.print("debugger"),t.semicolon()}),he.DEFMETHOD("_do_print_body",function(e){u(this.body,e)}),e(oe,function(e,t){e.body.print(t),t.semicolon()}),e(we,function(e,t){n(e.body,!0,t,!0),t.print("")}),e(fe,function(e,t){e.label.print(t),t.colon(),e.body.print(t)}),e(ue,function(e,t){e.body.print(t),t.semicolon()}),e(le,function(e,t){r(e.body,t)}),e(pe,function(e,t){t.semicolon()}),e(ge,function(e,t){t.print("do"),t.space(),f(e.body,t),t.space(),t.print("while"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.semicolon()}),e(ve,function(e,t){t.print("while"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.space(),e._do_print_body(t)}),e(ye,function(e,t){t.print("for"),t.space(),t.with_parens(function(){e.init?(e.init instanceof Ue?e.init.print(t):o(e.init,t,!0),t.print(";"),t.space()):t.print(";"),e.condition?(e.condition.print(t),t.print(";"),t.space()):t.print(";"),e.step&&e.step.print(t)}),t.space(),e._do_print_body(t)}),e(be,function(e,t){t.print("for"),t.space(),t.with_parens(function(){e.init.print(t),t.space(),t.print("in"),t.space(),e.object.print(t)}),t.space(),e._do_print_body(t)}),e(_e,function(e,t){t.print("with"),t.space(),t.with_parens(function(){e.expression.print(t)}),t.space(),e._do_print_body(t)}),ke.DEFMETHOD("_do_print",function(e,t){var n=this;t||e.print("function"),n.name&&(e.space(),n.name.print(e)),e.with_parens(function(){n.argnames.forEach(function(t,n){n&&e.comma(),t.print(e)})}),e.space(),r(n.body,e,!0)}),e(ke,function(e,t){e._do_print(t)}),Te.DEFMETHOD("_do_print",function(e,t){e.print(t),this.value&&(e.space(),this.value.print(e)),e.semicolon()}),e(Oe,function(e,t){e._do_print(t,"return")}),e(Fe,function(e,t){e._do_print(t,"throw")}),Be.DEFMETHOD("_do_print",function(e,t){e.print(t),this.label&&(e.space(),this.label.print(e)),e.semicolon()}),e(De,function(e,t){e._do_print(t,"break")}),e(Le,function(e,t){e._do_print(t,"continue")}),e(Ne,function(e,t){t.print("if"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.space(),e.alternative?(i(e,t),t.space(),t.print("else"),t.space(),e.alternative instanceof Ne?e.alternative.print(t):u(e.alternative,t)):e._do_print_body(t)}),e(Me,function(e,t){t.print("switch"),t.space(),t.with_parens(function(){e.expression.print(t)}),t.space();var n=e.body.length-1;n<0?t.print("{}"):t.with_block(function(){e.body.forEach(function(e,r){t.indent(!0),e.print(t),r<n&&e.body.length>0&&t.newline()})})}),Re.DEFMETHOD("_do_print_body",function(e){e.newline(),this.body.forEach(function(t){e.indent(),t.print(e),e.newline()})}),e(Pe,function(e,t){t.print("default:"),e._do_print_body(t)}),e(Ie,function(e,t){t.print("case"),t.space(),e.expression.print(t),t.print(":"),e._do_print_body(t)}),e(je,function(e,t){t.print("try"),t.space(),r(e.body,t),e.bcatch&&(t.space(),e.bcatch.print(t)),e.bfinally&&(t.space(),e.bfinally.print(t))}),e(Ve,function(e,t){t.print("catch"),t.space(),t.with_parens(function(){e.argname.print(t)}),t.space(),r(e.body,t)}),e(ze,function(e,t){t.print("finally"),t.space(),r(e.body,t)}),Ue.DEFMETHOD("_do_print",function(e,t){e.print(t),e.space(),this.definitions.forEach(function(t,n){n&&e.comma(),t.print(e)});var n=e.parent();(n instanceof ye||n instanceof be)&&n.init===this||e.semicolon()}),e($e,function(e,t){e._do_print(t,"var")}),e(qe,function(e,t){e._do_print(t,"const")}),e(He,function(e,t){if(e.name.print(t),e.value){t.space(),t.print("="),t.space();var n=t.parent(1),r=n instanceof ye||n instanceof be;o(e.value,t,r)}}),e(We,function(e,t){e.expression.print(t),e instanceof Ge&&!c(e,t)||t.with_parens(function(){e.args.forEach(function(e,n){n&&t.comma(),e.print(t)})})}),e(Ge,function(e,t){t.print("new"),t.space(),We.prototype._codegen(e,t)}),Ye.DEFMETHOD("_do_print",function(e){this.car.print(e),this.cdr&&(e.comma(),e.should_break()&&(e.newline(),e.indent()),this.cdr.print(e))}),e(Ye,function(e,t){e._do_print(t)}),e(Ke,function(e,t){var n=e.expression;n.print(t),n instanceof At&&n.getValue()>=0&&(/[xa-f.)]/i.test(t.last())||t.print(".")),t.print("."),t.add_mapping(e.end),t.print_name(e.property)}),e(Je,function(e,t){e.expression.print(t),t.print("["),e.property.print(t),t.print("]")}),e(Ze,function(e,t){var n=e.operator;t.print(n),(/^[a-z]/i.test(n)||/[+-]$/.test(n)&&e.expression instanceof Ze&&/^[+-]/.test(e.expression.operator))&&t.space(),e.expression.print(t)}),e(et,function(e,t){e.expression.print(t),t.print(e.operator)}),e(tt,function(e,t){var n=e.operator;e.left.print(t),">"==n[0]&&e.left instanceof et&&"--"==e.left.operator?t.print(" "):t.space(),t.print(n),("<"==n||"<<"==n)&&e.right instanceof Ze&&"!"==e.right.operator&&e.right.expression instanceof Ze&&"--"==e.right.expression.operator?t.print(" "):t.space(),e.right.print(t)}),e(nt,function(e,t){e.condition.print(t),t.space(),t.print("?"),t.space(),e.consequent.print(t),t.space(),t.colon(),e.alternative.print(t)}),e(it,function(e,t){t.with_square(function(){var n=e.elements,r=n.length;r>0&&t.space(),n.forEach(function(e,n){n&&t.comma(),e.print(t),n===r-1&&e instanceof Bt&&t.comma()}),r>0&&t.space()})}),e(ot,function(e,t){e.properties.length>0?t.with_block(function(){e.properties.forEach(function(e,n){n&&(t.print(","),t.newline()),t.indent(),e.print(t)}),t.newline()}):t.print("{}")}),e(at,function(e,t){s(e.key,e.quote,t),t.colon(),e.value.print(t)}),st.DEFMETHOD("_print_getter_setter",function(e,t){t.print(e),t.space(),s(this.key.name,this.quote,t),this.value._do_print(t,!0)}),e(ut,function(e,t){e._print_getter_setter("set",t)}),e(ct,function(e,t){e._print_getter_setter("get",t)}),e(lt,function(e,t){var n=e.definition();t.print_name(n?n.mangled_name||n.name:e.name)}),e(Bt,h),e(wt,function(e,t){t.print("this")}),e(kt,function(e,t){t.print(e.getValue())}),e(Et,function(e,t){t.print_string(e.getValue(),e.quote,v)}),e(At,function(e,t){g&&e.start&&null!=e.start.raw?t.print(e.start.raw):t.print(p(e.getValue()))}),e(Ct,function(e,t){var n=e.getValue().toString();t.option("ascii_only")?n=t.to_ascii(n):t.option("unescape_regexps")&&(n=n.split("\\\\").map(function(e){return e.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g,function(e){var t=parseInt(e.substr(2),16);return a(t)?String.fromCharCode(t):e})}).join("\\\\")),t.print(n);var r=t.parent();r instanceof tt&&/^in/.test(r.operator)&&r.left===e&&t.print(" ")}),d(ie,h),d(ae,m),d(se,m),d(lt,m),d(Se,m),d(he,m),d(fe,h),d(ke,m),d(Me,m),d(Re,m),d(le,m),d(we,h),d(Ge,m),d(je,m),d(Ve,m),d(ze,m),d(Ue,m),d(kt,m),d(ut,function(e,t){t.add_mapping(e.start,e.key.name)}),d(ct,function(e,t){t.add_mapping(e.start,e.key.name)}),d(st,function(e,t){t.add_mapping(e.start,e.key)})}(),X.prototype=new H,p(X.prototype,{option:function(e){return this.options[e]},compress:function(e){this.option("expression")&&(e=e.process_expression(!0));for(var t=+this.options.passes||1,n=0;n<t&&n<3;++n)(n>0||this.option("reduce_vars"))&&e.reset_opt_flags(this,!0),e=e.transform(this);return this.option("expression")&&(e=e.process_expression(!1)),e},info:function(){"verbose"==this.options.warnings&&ie.warn.apply(ie,arguments)},warn:function(e,t){if(this.options.warnings){var n=y(e,t);n in this.warnings_produced||(this.warnings_produced[n]=!0,ie.warn.apply(ie,arguments))}},clear_warnings:function(){this.warnings_produced={}},before:function(e,t,n){if(e._squeezed)return e;var r=!1;e instanceof xe&&(e=e.hoist_declarations(this),r=!0),t(e,this),t(e,this);var i=e.optimize(this);return r&&i instanceof xe&&(i.drop_unused(this),t(i,this)),i===e&&(i._squeezed=!0),i}}),function(){function e(e,t){e.DEFMETHOD("optimize",function(e){var n=this;if(n._optimized)return n;if(e.has_directive("use asm"))return n;var r=t(n,e);return r._optimized=!0,r})}function t(e){if(!(e instanceof _t))return!1;for(var t=e.definition().orig,n=t.length;--n>=0;)if(t[n]instanceof dt)return!0}function n(e,t){for(var n,r=0;(n=e.parent(r++))&&!(n instanceof xe);)if(n instanceof Ve){n=n.argname.definition().scope;break}return n.find_variable(t)}function r(e,t,n){return n||(n={}),t&&(n.start||(n.start=t.start),n.end||(n.end=t.end)),new e(n)}function i(e,t){switch(typeof e){case"string":return r(Et,t,{value:e});case"number":return isNaN(e)?r(Ot,t):isFinite(e)?1/e<0?r(Ze,t,{operator:"-",expression:r(At,t,{value:-e})}):r(At,t,{value:e}):e<0?r(Ze,t,{operator:"-",expression:r(Dt,t)}):r(Dt,t);case"boolean":return r(e?Mt:Nt,t);case"undefined":return r(Ft,t);default:if(null===e)return r(Tt,t,{value:null});if(e instanceof RegExp)return r(Ct,t,{value:e});throw new Error(y("Can't handle constant of type: {type}",{type:typeof e}))}}function a(e,t,n){return e instanceof Ze&&"delete"==e.operator||e instanceof We&&e.expression===t&&(n instanceof Xe||n instanceof _t&&"eval"==n.name)?r(Ye,t,{car:r(At,t,{value:0}),cdr:n}):n}function u(e){if(null===e)return[];if(e instanceof le)return e.body;if(e instanceof pe)return[];if(e instanceof oe)return[e];throw new Error("Can't convert thing to statement array")}function c(e){return null===e||(e instanceof pe||e instanceof le&&0==e.body.length)}function l(e){return e instanceof Me?e:(e instanceof ye||e instanceof be||e instanceof me)&&e.body instanceof le?e.body:e}function p(e){return e instanceof We&&!(e instanceof Ge)&&(e.expression instanceof Ae||p(e.expression))}function v(e,t){function n(e,t){function i(e,t){return e instanceof _t&&B(e,t)}function o(n,o,l){if(i(n,o))return n;var p=a(o,n,x.value);return x.value=null,m.splice(_,1),0===m.length&&(e[f]=r(pe,s),u=!0),h.reset_opt_flags(t),t.info("Collapsing "+(l?"constant":"variable")+" "+w+" [{file}:{line},{col}]",n.start),c=!0,p}for(var s=t.self(),u=!1,l=t.option("toplevel"),p=e.length;--p>=0;){var h=e[p];if(!(h instanceof Ue)){if([h,h.body,h.alternative,h.bcatch,h.bfinally].forEach(function(e){e&&e.body&&n(e.body,t)}),p<=0)break;var f=p-1,d=e[f];if(d instanceof Ue){var m=d.definitions;if(null!=m)for(var g={},v=!1,y=!1,b={},_=m.length;--_>=0;){var x=m[_];if(null==x.value)break;var w=x.name.name;if(!w||!w.length)break;if(w in g)break;g[w]=!0;var k=s.find_variable&&s.find_variable(w);if(k&&k.references&&1===k.references.length&&"arguments"!=w&&(l||!k.global)){var E=k.references[0];if(E.scope.uses_eval||E.scope.uses_with)break;if(x.value.is_constant()){var A=new H(function(e){var t=A.parent();return t instanceof de&&(t.condition===e||t.init===e)?e:e===E?o(e,t,!0):void 0});h.transform(A)}else if(!(v|=y)){var C=x.value.has_side_effects(t);if(E.scope===s){var S=new T(function(e){e instanceof _t&&i(e,S.parent())&&(b[e.name]=y=!0)});x.value.walk(S);var O=!1,F=new H(function(e){if(O)return e;var t=F.parent();return e instanceof ke||e instanceof je||e instanceof _e||e instanceof Ie||e instanceof de||t instanceof Ne&&e!==t.condition||t instanceof nt&&e!==t.condition||e instanceof _t&&C&&!function(e,t){if(1===e.orig.length&&e.orig[0]instanceof gt)return!0;if(e.scope!==t)return!1;for(var n=e.references,r=0,i=n.length;r<i;r++)if(n[r].scope!==t)return!1;return!0}(e.definition(),s)||t instanceof tt&&("&&"==t.operator||"||"==t.operator)&&e===t.right||t instanceof Me&&e!==t.expression?(v=O=!0,e):void 0},function(e){return O?e:e===E?(O=!0,o(e,F.parent(),!1)):(v|=e.has_side_effects(t))?(O=!0,e):y&&e instanceof _t&&e.name in b?(v=!0,O=!0,e):void 0});h.transform(F)}else v|=C}}else v=!0}}}}if(u)for(var D=e.length;--D>=0;)e.length>1&&e[D]instanceof pe&&e.splice(D,1);return e}function i(e){var t=[];return e.reduce(function(e,n){return n instanceof le?(c=!0,e.push.apply(e,i(n.body))):n instanceof pe?c=!0:n instanceof ae?t.indexOf(n.value)<0?(e.push(n),t.push(n.value)):c=!0:e.push(n),e},[])}function o(e){for(var t=0,n=0;n<e.length;++n){var r=e[n];r instanceof Ye?t+=r.len():t++}return t}function s(e,t){function n(e){i.pop();var n=o.body;return n instanceof Ye?n.add(e):n=Ye.cons(n,e),n.transform(t)}var i=[],o=null;return e.forEach(function(e){if(o)if(e instanceof ye){var s={};try{o.body.walk(new T(function(e){if(e instanceof tt&&"in"==e.operator)throw s})),!e.init||e.init instanceof Ue?e.init||(e.init=o.body.drop_side_effect_free(t),i.pop()):e.init=n(e.init)}catch(e){if(e!==s)throw e}}else e instanceof Ne?e.condition=n(e.condition):e instanceof _e?e.expression=n(e.expression):e instanceof Te&&e.value?e.value=n(e.value):e instanceof Te?e.value=n(r(Ft,e).transform(t)):e instanceof Me&&(e.expression=n(e.expression));i.push(e),o=e instanceof ue?e:null}),i}var c,p=10;do{c=!1,t.option("angular")&&(e=function(e){function n(e){return/@ngInject/.test(e.value)}function i(e){return e.argnames.map(function(e){return r(Et,e,{value:e.name})})}function o(e,t){return r(it,e,{elements:t})}function s(e,t){return r(ue,e,{body:r(rt,e,{operator:"=",left:r(Ke,t,{expression:r(_t,t,t),property:"$inject"}),right:o(e,i(e))})})}function a(e){e&&e.args&&(e.args.forEach(function(e,t,r){var s=e.start.comments_before;e instanceof ke&&s.length&&n(s[0])&&(r[t]=o(e,i(e).concat(e)))}),e.expression&&e.expression.expression&&a(e.expression.expression))}return e.reduce(function(e,r){if(e.push(r),r.body&&r.body.args)a(r.body);else{var i=r.start,o=i.comments_before;o&&o.length>0&&n(o.pop())&&(r instanceof Ce?e.push(s(r,r.name)):r instanceof Ue?r.definitions.forEach(function(t){t.value&&t.value instanceof ke&&e.push(s(t.value,t.name))}):t.warn("Unknown statement marked with @ngInject [{file}:{line},{col}]",i))}return e},[])}(e)),e=i(e),t.option("dead_code")&&(e=function(e,t){var n=!1,r=e.length,i=t.self();return e=e.reduce(function(e,r){if(n)O(t,r,e);else{if(r instanceof Be){var o=t.loopcontrol_target(r);r instanceof De&&!(o instanceof de)&&l(o)===i||r instanceof Le&&l(o)===i?r.label&&b(r.label.thedef.references,r):e.push(r)}else e.push(r);M(r)&&(n=!0)}return e},[]),c=e.length!=r,e}(e,t)),t.option("if_return")&&(e=function(e,t){var n=t.self(),i=function(e){for(var t=0,n=e.length;--n>=0;){var r=e[n];if(r instanceof Ne&&r.body instanceof Oe&&++t>1)return!0}return!1}(e),o=n instanceof ke,s=[];e:for(var a=e.length;--a>=0;){var p=e[a];switch(!0){case o&&p instanceof Oe&&!p.value&&0==s.length:c=!0;continue e;case p instanceof Ne:if(p.body instanceof Oe){if((o&&0==s.length||s[0]instanceof Oe&&!s[0].value)&&!p.body.value&&!p.alternative){c=!0;var h=r(ue,p.condition,{body:p.condition});s.unshift(h);continue e}if(s[0]instanceof Oe&&p.body.value&&s[0].value&&!p.alternative){c=!0,(p=p.clone()).alternative=s[0],s[0]=p.transform(t);continue e}if(i&&(0==s.length||s[0]instanceof Oe)&&p.body.value&&!p.alternative&&o){c=!0,(p=p.clone()).alternative=s[0]||r(Oe,p,{value:null}),s[0]=p.transform(t);continue e}if(!p.body.value&&o){c=!0,(p=p.clone()).condition=p.condition.negate(t);var f=C(g=u(p.alternative).concat(s));p.body=r(le,p,{body:g}),p.alternative=null,s=f.concat([p.transform(t)]);continue e}if(t.option("sequences")&&a>0&&e[a-1]instanceof Ne&&e[a-1].body instanceof Oe&&1==s.length&&o&&s[0]instanceof ue&&!p.alternative){c=!0,s.push(r(Oe,s[0],{value:null}).transform(t)),s.unshift(p);continue e}}var d=M(p.body),m=d instanceof Be?t.loopcontrol_target(d):null;if(d&&(d instanceof Oe&&!d.value&&o||d instanceof Le&&n===l(m)||d instanceof De&&m instanceof le&&n===m)){d.label&&b(d.label.thedef.references,d),c=!0;var g=u(p.body).slice(0,-1);(p=p.clone()).condition=p.condition.negate(t),p.body=r(le,p,{body:u(p.alternative).concat(s)}),p.alternative=r(le,p,{body:g}),s=[p.transform(t)];continue e}if(m=(d=M(p.alternative))instanceof Be?t.loopcontrol_target(d):null,d&&(d instanceof Oe&&!d.value&&o||d instanceof Le&&n===l(m)||d instanceof De&&m instanceof le&&n===m)){d.label&&b(d.label.thedef.references,d),c=!0,(p=p.clone()).body=r(le,p.body,{body:u(p.body).concat(s)}),p.alternative=r(le,p.alternative,{body:u(p.alternative).slice(0,-1)}),s=[p.transform(t)];continue e}s.unshift(p);break;default:s.unshift(p)}}return s}(e,t)),t.sequences_limit>0&&(e=function(e,t){function n(){(i=Ye.from_array(i))&&a.push(r(ue,i,{body:i})),i=[]}if(e.length<2)return e;var i=[],a=[];return e.forEach(function(e){if(e instanceof ue){o(i)>=t.sequences_limit&&n();var r=e.body;i.length>0&&(r=r.drop_side_effect_free(t)),r&&i.push(r)}else n(),a.push(e)}),n(),a=s(a,t),c=a.length!=e.length,a}(e,t)),t.option("join_vars")&&(e=function(e,t){var n=null;return e.reduce(function(e,t){return t instanceof Ue&&n&&n.TYPE==t.TYPE?(n.definitions=n.definitions.concat(t.definitions),c=!0):t instanceof ye&&n instanceof $e&&(!t.init||t.init.TYPE==n.TYPE)?(c=!0,e.pop(),t.init?t.init.definitions=n.definitions.concat(t.init.definitions):t.init=n,e.push(t),n=t):(n=t,e.push(t)),e},[])}(e)),t.option("collapse_vars")&&(e=n(e,t))}while(c&&p-- >0);return e}function C(e){for(var t=[],n=e.length-1;n>=0;--n){var r=e[n];r instanceof Ce&&(e.splice(n,1),t.unshift(r))}return t}function O(e,t,n){t instanceof Ce||e.warn("Dropping unreachable code [{file}:{line},{col}]",t.start),t.walk(new T(function(t){return t instanceof Ue?(e.warn("Declarations in unreachable code! [{file}:{line},{col}]",t.start),t.remove_initializers(),n.push(t),!0):t instanceof Ce?(n.push(t),!0):t instanceof xe||void 0}))}function F(e,t){return e.is_undefined||e instanceof Ft||e instanceof Ze&&"void"==e.operator&&!e.expression.has_side_effects(t)}function B(e,t){return t instanceof Qe&&z(t.operator)?t.expression:t instanceof rt&&t.left===e?e:void 0}function D(e,t){return e.print_to_string().length>t.print_to_string().length?t:e}function L(e,t){return D(r(ue,e,{body:e}),r(ue,t,{body:t})).body}function N(e,t,n){return(A(e)?L:D)(t,n)}function M(e){return e&&e.aborts()}function R(e,t){function n(n){n=u(n),e.body instanceof le?(e.body=e.body.clone(),e.body.body=n.concat(e.body.body.slice(1)),e.body=e.body.transform(t)):e.body=r(le,e.body,{body:n}).transform(t),R(e,t)}var i=e.body instanceof le?e.body.body[0]:e.body;i instanceof Ne&&(i.body instanceof De&&t.loopcontrol_target(i.body)===t.self()?(e.condition?e.condition=r(tt,e.condition,{left:e.condition,operator:"&&",right:i.condition.negate(t)}):e.condition=i.condition.negate(t),n(i.alternative)):i.alternative instanceof De&&t.loopcontrol_target(i.alternative)===t.self()&&(e.condition?e.condition=r(tt,e.condition,{left:e.condition,operator:"&&",right:i.condition}):e.condition=i.condition,n(i.body)))}function P(e,t){return e instanceof _t||e.TYPE===t.TYPE}function j(e,t){return t.option("booleans")&&t.in_boolean_context()?N(t,e,r(Ye,e,{car:e,cdr:r(Mt,e)}).optimize(t)):e}e(ie,function(e,t){return e}),ie.DEFMETHOD("equivalent_to",function(e){return this.TYPE==e.TYPE&&this.print_to_string()==e.print_to_string()}),ie.DEFMETHOD("process_expression",function(e,t){var n=this,i=new H(function(o){if(e&&o instanceof ue)return r(Oe,o,{value:o.body});if(!e&&o instanceof Oe){if(t){var s=o.value&&o.value.drop_side_effect_free(t,!0);return s?r(ue,o,{body:s}):r(pe,o)}return r(ue,o,{body:o.value||r(Ze,o,{operator:"void",expression:r(At,o,{value:0})})})}if(o instanceof ke&&o!==n)return o;if(o instanceof ce){var a=o.body.length-1;a>=0&&(o.body[a]=o.body[a].transform(i))}return o instanceof Ne&&(o.body=o.body.transform(i),o.alternative&&(o.alternative=o.alternative.transform(i))),o instanceof _e&&(o.body=o.body.transform(i)),o});return n.transform(i)}),ie.DEFMETHOD("reset_opt_flags",function(e,t){function n(e,t){p[e.id]=t}function i(e){if(p[e.id]){if(null==e.fixed){var t=e.orig[0];if(t instanceof mt||"arguments"==t.name)return!1;e.fixed=r(Ft,t)}return!0}}function o(){p=Object.create(p)}function s(){p=Object.getPrototypeOf(p)}function a(e){e.escaped=!1,e.scope.uses_eval?e.fixed=!1:l||!e.global||e.orig[0]instanceof dt?e.fixed=void 0:e.fixed=!1,e.references=[],e.should_replace=void 0}function u(e,t,n){var r=f.parent(t);return!!(B(e,r)||!n&&r instanceof We&&r.expression===e)||(r instanceof Xe&&r.expression===e?!n&&u(r,t+1):void 0)}var c=t&&e.option("reduce_vars"),l=e.option("toplevel"),p=Object.create(null),h=new T(function(e){if(e instanceof lt){var t=e.definition();e instanceof _t&&t.references.push(e),t.fixed=!1}}),f=new T(function(e,t){if(e._squeezed=!1,e._optimized=!1,c){if(e instanceof we&&e.globals.each(a),e instanceof xe&&e.variables.each(a),e instanceof _t)if((m=e.definition()).references.push(e),void 0===m.fixed||!i(m)||u(e,0,e.fixed_value()instanceof ke))m.fixed=!1;else{var d=f.parent();(d instanceof rt&&"="==d.operator&&e===d.right||d instanceof We&&e!==d.expression||d instanceof Oe&&e===d.value&&e.scope!==m.scope||d instanceof He&&e===d.value)&&(m.escaped=!0)}if(e instanceof yt&&(e.definition().fixed=!1),e instanceof He){if(null==(m=e.name.definition()).fixed)return e.value?(m.fixed=function(){return e.value},n(m,!1),t()):m.fixed=null,n(m,!0),!0;e.value&&(m.fixed=!1)}if(e instanceof Ce){var m=e.name.definition();!l&&m.global||i(m)?m.fixed=!1:(m.fixed=e,n(m,!0));v=p;return p=Object.create(null),t(),p=v,!0}if(e instanceof Ae){o();var g;return!e.name&&(g=f.parent())instanceof We&&g.expression===e&&e.argnames.forEach(function(t,i){var o=t.definition();e.uses_arguments||void 0!==o.fixed?o.fixed=!1:(o.fixed=function(){return g.args[i]||r(Ft,g)},n(o,!0))}),t(),s(),!0}if(e instanceof Ee){var v=p;return p=Object.create(null),t(),p=v,!0}if(e instanceof tt&&("&&"==e.operator||"||"==e.operator))return e.left.walk(f),o(),e.right.walk(f),s(),!0;if(e instanceof nt)return e.condition.walk(f),o(),e.consequent.walk(f),s(),o(),e.alternative.walk(f),s(),!0;if(e instanceof Ne||e instanceof me)return e.condition.walk(f),o(),e.body.walk(f),s(),e.alternative&&(o(),e.alternative.walk(f),s()),!0;if(e instanceof fe)return o(),e.body.walk(f),s(),!0;if(e instanceof ye)return e.init&&e.init.walk(f),o(),e.condition&&e.condition.walk(f),e.body.walk(f),e.step&&e.step.walk(f),s(),!0;if(e instanceof be)return e.init.walk(h),e.object.walk(f),o(),e.body.walk(f),s(),!0;if(e instanceof je)return o(),S(e,f),s(),e.bcatch&&(o(),e.bcatch.walk(f),s()),e.bfinally&&e.bfinally.walk(f),!0;if(e instanceof Re)return o(),t(),s(),!0}});this.walk(f)}),_t.DEFMETHOD("fixed_value",function(){var e=this.definition().fixed;return!e||e instanceof ie?e:e()}),function(e){function t(e){return/strict/.test(e)}ie.DEFMETHOD("may_throw_on_access",function(e){var t=e.option("pure_getters");return!t||this._throw_on_access(t)}),e(ie,t),e(Tt,d),e(Ft,d),e(kt,f),e(it,f),e(ot,function(e){if(!t(e))return!1;for(var n=this.properties.length;--n>=0;)if(this.properties[n].value instanceof Ee)return!0;return!1}),e(Ae,f),e(et,f),e(Ze,function(){return"void"==this.operator}),e(tt,function(e){switch(this.operator){case"&&":return this.left._throw_on_access(e);case"||":return this.left._throw_on_access(e)&&this.right._throw_on_access(e);default:return!1}}),e(rt,function(e){return"="==this.operator&&this.right._throw_on_access(e)}),e(nt,function(e){return this.consequent._throw_on_access(e)||this.alternative._throw_on_access(e)}),e(Ye,function(e){return this.cdr._throw_on_access(e)}),e(_t,function(e){if(this.is_undefined)return!0;if(!t(e))return!1;var n=this.fixed_value();return!n||n._throw_on_access(e)})}(function(e,t){e.DEFMETHOD("_throw_on_access",t)}),function(e){var t=["!","delete"],n=["in","instanceof","==","!=","===","!==","<","<=",">=",">"];e(ie,f),e(Ze,function(){return o(this.operator,t)}),e(tt,function(){return o(this.operator,n)||("&&"==this.operator||"||"==this.operator)&&this.left.is_boolean()&&this.right.is_boolean()}),e(nt,function(){return this.consequent.is_boolean()&&this.alternative.is_boolean()}),e(rt,function(){return"="==this.operator&&this.right.is_boolean()}),e(Ye,function(){return this.cdr.is_boolean()}),e(Mt,d),e(Nt,d)}(function(e,t){e.DEFMETHOD("is_boolean",t)}),function(e){e(ie,f),e(At,d);var t=x("+ - ~ ++ --");e(Qe,function(){return t(this.operator)});var n=x("- * / % & | ^ << >> >>>");e(tt,function(e){return n(this.operator)||"+"==this.operator&&this.left.is_number(e)&&this.right.is_number(e)}),e(rt,function(e){return n(this.operator.slice(0,-1))||"="==this.operator&&this.right.is_number(e)}),e(Ye,function(e){return this.cdr.is_number(e)}),e(nt,function(e){return this.consequent.is_number(e)&&this.alternative.is_number(e)})}(function(e,t){e.DEFMETHOD("is_number",t)}),function(e){e(ie,f),e(Et,d),e(Ze,function(){return"typeof"==this.operator}),e(tt,function(e){return"+"==this.operator&&(this.left.is_string(e)||this.right.is_string(e))}),e(rt,function(e){return("="==this.operator||"+="==this.operator)&&this.right.is_string(e)}),e(Ye,function(e){return this.cdr.is_string(e)}),e(nt,function(e){return this.consequent.is_string(e)&&this.alternative.is_string(e)})}(function(e,t){e.DEFMETHOD("is_string",t)});var z=x("delete ++ --");!function(e){function t(e,n){if(e instanceof ie)return r(e.CTOR,n,e);if(Array.isArray(e))return r(it,n,{elements:e.map(function(e){return t(e,n)})});if(e&&"object"==typeof e){var o=[];for(var s in e)o.push(r(at,n,{key:s,value:t(e[s],n)}));return r(ot,n,{properties:o})}return i(e,n)}ie.DEFMETHOD("resolve_defines",function(e){if(e.option("global_defs")){var t=this._find_defs(e,"");if(t){var n,r=this,i=0;do{n=r,r=e.parent(i++)}while(r instanceof Xe&&r.expression===n);if(!B(n,r))return t;e.warn("global_defs "+this.print_to_string()+" redefined [{file}:{line},{col}]",this.start)}}}),e(ie,h),e(Ke,function(e,t){return this.expression._find_defs(e,"."+this.property+t)}),e(_t,function(e,n){if(this.global()){var r,i=e.option("global_defs");if(i&&E(i,r=this.name+n)){var o=t(i[r],this),s=e.find_parent(we);return o.walk(new T(function(e){e instanceof _t&&(e.scope=s,e.thedef=s.def_global(e))})),o}}})}(function(e,t){e.DEFMETHOD("_find_defs",t)}),function(e){function t(e,t){if(!t)throw new Error("Compressor must be passed");return e._eval(t)}ie.DEFMETHOD("evaluate",function(t){if(!t.option("evaluate"))return this;try{var n=this._eval(t);return!n||n instanceof RegExp||"object"!=typeof n?n:this}catch(t){if(t!==e)throw t;return this}});var n=x("! ~ - + void");ie.DEFMETHOD("is_constant",function(){return this instanceof kt?!(this instanceof Ct):this instanceof Ze&&this.expression instanceof kt&&n(this.operator)}),ie.DEFMETHOD("constant_value",function(e){if(this instanceof kt&&!(this instanceof Ct))return this.value;if(this instanceof Ze&&this.expression instanceof kt)switch(this.operator){case"!":return!this.expression.value;case"~":return~this.expression.value;case"-":return-this.expression.value;case"+":return+this.expression.value;default:throw new Error(y("Cannot evaluate unary expression {value}",{value:this.print_to_string()}))}var t=this.evaluate(e);if(t!==this)return t;throw new Error(y("Cannot evaluate constant [{file}:{line},{col}]",this.start))}),e(oe,function(){throw new Error(y("Cannot evaluate a statement [{file}:{line},{col}]",this.start))}),e(ke,function(){throw e}),e(ie,function(){throw e}),e(kt,function(){return this.getValue()}),e(it,function(n){if(n.option("unsafe"))return this.elements.map(function(e){return t(e,n)});throw e}),e(ot,function(n){if(n.option("unsafe")){for(var r={},i=0,o=this.properties.length;i<o;i++){var s=this.properties[i],a=s.key;if(a instanceof lt?a=a.name:a instanceof ie&&(a=t(a,n)),"function"==typeof Object.prototype[a])throw e;r[a]=t(s.value,n)}return r}throw e}),e(Ze,function(n){var r=this.expression;switch(this.operator){case"!":return!t(r,n);case"typeof":if(r instanceof Ae)return"function";if((r=t(r,n))instanceof RegExp)throw e;return typeof r;case"void":return void t(r,n);case"~":return~t(r,n);case"-":return-t(r,n);case"+":return+t(r,n)}throw e}),e(tt,function(n){var r,i=this.left,o=this.right;switch(this.operator){case"&&":r=t(i,n)&&t(o,n);break;case"||":r=t(i,n)||t(o,n);break;case"|":r=t(i,n)|t(o,n);break;case"&":r=t(i,n)&t(o,n);break;case"^":r=t(i,n)^t(o,n);break;case"+":r=t(i,n)+t(o,n);break;case"*":r=t(i,n)*t(o,n);break;case"/":r=t(i,n)/t(o,n);break;case"%":r=t(i,n)%t(o,n);break;case"-":r=t(i,n)-t(o,n);break;case"<<":r=t(i,n)<<t(o,n);break;case">>":r=t(i,n)>>t(o,n);break;case">>>":r=t(i,n)>>>t(o,n);break;case"==":r=t(i,n)==t(o,n);break;case"===":r=t(i,n)===t(o,n);break;case"!=":r=t(i,n)!=t(o,n);break;case"!==":r=t(i,n)!==t(o,n);break;case"<":r=t(i,n)<t(o,n);break;case"<=":r=t(i,n)<=t(o,n);break;case">":r=t(i,n)>t(o,n);break;case">=":r=t(i,n)>=t(o,n);break;default:throw e}if(isNaN(r)&&n.find_parent(_e))throw e;return r}),e(nt,function(e){return t(this.condition,e)?t(this.consequent,e):t(this.alternative,e)}),e(_t,function(n){if(!n.option("reduce_vars")||this._evaluating)throw e;this._evaluating=!0;try{var r=this.fixed_value();if(!r)throw e;var i=t(r,n);if(E(r,"_eval")||(r._eval=function(){return i}),i&&"object"==typeof i&&this.definition().escaped)throw e;return i}finally{this._evaluating=!1}}),e(Xe,function(n){if(n.option("unsafe")){var r=this.property;r instanceof ie&&(r=t(r,n));var i=t(this.expression,n);if(i&&E(i,r))return i[r]}throw e})}(function(e,t){e.DEFMETHOD("_eval",t)}),function(e){function t(e){return r(Ze,e,{operator:"!",expression:e})}function n(e,n,i){var o=t(e);if(i){var s=r(ue,n,{body:n});return D(o,s)===s?n:o}return D(o,n)}e(ie,function(){return t(this)}),e(oe,function(){throw new Error("Cannot negate a statement")}),e(Ae,function(){return t(this)}),e(Ze,function(){return"!"==this.operator?this.expression:t(this)}),e(Ye,function(e){var t=this.clone();return t.cdr=t.cdr.negate(e),t}),e(nt,function(e,t){var r=this.clone();return r.consequent=r.consequent.negate(e),r.alternative=r.alternative.negate(e),n(this,r,t)}),e(tt,function(e,r){var i=this.clone(),o=this.operator;if(e.option("unsafe_comps"))switch(o){case"<=":return i.operator=">",i;case"<":return i.operator=">=",i;case">=":return i.operator="<",i;case">":return i.operator="<=",i}switch(o){case"==":return i.operator="!=",i;case"!=":return i.operator="==",i;case"===":return i.operator="!==",i;case"!==":return i.operator="===",i;case"&&":return i.operator="||",i.left=i.left.negate(e,r),i.right=i.right.negate(e),n(this,i,r);case"||":return i.operator="&&",i.left=i.left.negate(e,r),i.right=i.right.negate(e),n(this,i,r)}return t(this)})}(function(e,t){e.DEFMETHOD("negate",function(e,n){return t.call(this,e,n)})}),We.DEFMETHOD("has_pure_annotation",function(e){if(!e.option("side_effects"))return!1;if(void 0!==this.pure)return this.pure;var t,n,r=!1;return this.start&&(t=this.start.comments_before)&&t.length&&/[@#]__PURE__/.test((n=t[t.length-1]).value)&&(r=n),this.pure=r}),function(e){function t(e,t){for(var n=e.length;--n>=0;)if(e[n].has_side_effects(t))return!0;return!1}e(ie,d),e(pe,f),e(kt,f),e(wt,f),e(We,function(e){if(!this.has_pure_annotation(e)&&e.pure_funcs(this))return!0;for(var t=this.args.length;--t>=0;)if(this.args[t].has_side_effects(e))return!0;return!1}),e(ce,function(e){return t(this.body,e)}),e(Me,function(e){return this.expression.has_side_effects(e)||t(this.body,e)}),e(Ie,function(e){return this.expression.has_side_effects(e)||t(this.body,e)}),e(je,function(e){return t(this.body,e)||this.bcatch&&this.bcatch.has_side_effects(e)||this.bfinally&&this.bfinally.has_side_effects(e)}),e(Ne,function(e){return this.condition.has_side_effects(e)||this.body&&this.body.has_side_effects(e)||this.alternative&&this.alternative.has_side_effects(e)}),e(fe,function(e){return this.body.has_side_effects(e)}),e(ue,function(e){return this.body.has_side_effects(e)}),e(Ce,d),e(Ae,f),e(tt,function(e){return this.left.has_side_effects(e)||this.right.has_side_effects(e)}),e(rt,d),e(nt,function(e){return this.condition.has_side_effects(e)||this.consequent.has_side_effects(e)||this.alternative.has_side_effects(e)}),e(Qe,function(e){return z(this.operator)||this.expression.has_side_effects(e)}),e(_t,function(e){return this.undeclared()}),e(ot,function(e){return t(this.properties,e)}),e(st,function(e){return this.value.has_side_effects(e)}),e(it,function(e){return t(this.elements,e)}),e(Ke,function(e){return this.expression.may_throw_on_access(e)||this.expression.has_side_effects(e)}),e(Je,function(e){return this.expression.may_throw_on_access(e)||this.expression.has_side_effects(e)||this.property.has_side_effects(e)}),e(Ye,function(e){return this.car.has_side_effects(e)||this.cdr.has_side_effects(e)})}(function(e,t){e.DEFMETHOD("has_side_effects",t)}),function(e){function t(){var e=this.body.length;return e>0&&M(this.body[e-1])}e(oe,g),e(Se,m),e(le,t),e(Re,t),e(Ne,function(){return this.alternative&&M(this.body)&&M(this.alternative)&&this})}(function(e,t){e.DEFMETHOD("aborts",t)}),e(ae,function(e,t){return t.has_directive(e.value)!==e?r(pe,e):e}),e(se,function(e,t){return t.option("drop_debugger")?r(pe,e):e}),e(fe,function(e,t){return e.body instanceof De&&t.loopcontrol_target(e.body)===e.body?r(pe,e):0==e.label.references.length?e.body:e}),e(ce,function(e,t){return e.body=v(e.body,t),e}),e(le,function(e,t){switch(e.body=v(e.body,t),e.body.length){case 1:return e.body[0];case 0:return r(pe,e)}return e}),xe.DEFMETHOD("drop_unused",function(e){var n=this;if(e.has_directive("use asm"))return n;var i=e.option("toplevel");if(e.option("unused")&&(!(n instanceof we)||i)&&!n.uses_eval&&!n.uses_with){var o=!/keep_assign/.test(e.option("unused")),s=/funcs/.test(i),u=/vars/.test(i);n instanceof we&&1!=i||(s=u=!0);var l=[],p=Object.create(null);n instanceof we&&e.top_retain&&n.variables.each(function(t){!e.top_retain(t)||t.id in p||(p[t.id]=!0,l.push(t))});var h=new k,f=this,d=new T(function(r,i){if(r!==n){if(r instanceof Ce)return s||f!==n||(a=r.name.definition()).id in p||(p[a.id]=!0,l.push(a)),h.add(r.name.name,r),!0;if(r instanceof Ue&&f===n)return r.definitions.forEach(function(t){if(!u){var n=t.name.definition();n.id in p||(p[n.id]=!0,l.push(n))}t.value&&(h.add(t.name.name,t.value),t.value.has_side_effects(e)&&t.value.walk(d))}),!0;if(o&&r instanceof rt&&"="==r.operator&&r.left instanceof _t&&!t(r.left)&&f===n)return r.right.walk(d),!0;if(r instanceof _t){var a=r.definition();return a.id in p||(p[a.id]=!0,l.push(a)),!0}if(r instanceof xe){var c=f;return f=r,i(),f=c,!0}}});n.walk(d);for(var m=0;m<l.length;++m)l[m].orig.forEach(function(e){var t=h.get(e.name);t&&t.forEach(function(e){var t=new T(function(e){if(e instanceof _t){var t=e.definition();t.id in p||(p[t.id]=!0,l.push(t))}});e.walk(t)})});var g=new H(function(t,i,l){if(t instanceof Ae&&t.name&&!e.option("keep_fnames")&&((b=t.name.definition()).id in p&&!(b.orig.length>1)||(t.name=null)),t instanceof ke&&!(t instanceof Ee))for(var h=!e.option("keep_fargs"),f=t.argnames,d=f.length;--d>=0;){var m=f[d];m.definition().id in p?h=!1:(m.__unused=!0,h&&(f.pop(),e[m.unreferenced()?"warn":"info"]("Dropping unused function argument {name} [{file}:{line},{col}]",{name:m.name,file:m.start.file,line:m.start.line,col:m.start.col})))}if(s&&t instanceof Ce&&t!==n)return t.name.definition().id in p?t:(e[t.name.unreferenced()?"warn":"info"]("Dropping unused function {name} [{file}:{line},{col}]",{name:t.name.name,file:t.name.start.file,line:t.name.start.line,col:t.name.start.col}),r(pe,t));if(u&&t instanceof Ue&&!(g.parent()instanceof be&&g.parent().init===t)){b=_(b=t.definitions.filter(function(t){t.value&&(t.value=t.value.transform(g));var n=t.name.definition();if(n.id in p)return!0;if(n.orig[0]instanceof yt)return t.value=t.value&&t.value.drop_side_effect_free(e),!0;var r={name:t.name.name,file:t.name.start.file,line:t.name.start.line,col:t.name.start.col};return t.value&&(t._unused_side_effects=t.value.drop_side_effect_free(e))?(e.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]",r),!0):(e[t.name.unreferenced()?"warn":"info"]("Dropping unused variable {name} [{file}:{line},{col}]",r),!1)}),function(e,t){return!e.value&&t.value?-1:!t.value&&e.value?1:0});for(var v=[],d=0;d<b.length;){var y=b[d];y._unused_side_effects?(v.push(y._unused_side_effects),b.splice(d,1)):(v.length>0&&(v.push(y.value),y.value=Ye.from_array(v),v=[]),++d)}return v=v.length>0?r(le,t,{body:[r(ue,t,{body:Ye.from_array(v)})]}):null,0!=b.length||v?0==b.length?l?ne.splice(v.body):v:(t.definitions=b,v?(v.body.unshift(t),l?ne.splice(v.body):v):t):r(pe,t)}if(u&&o&&t instanceof rt&&"="==t.operator&&t.left instanceof _t){var b=t.left.definition();if(!(b.id in p)&&n.variables.get(b.name)===b)return a(g.parent(),t,t.right.transform(g))}if(t instanceof ye){if(i(t,this),t.init instanceof le){x=t.init;return t.init=x.body.pop(),x.body.push(t),l?ne.splice(x.body):x}return c(t.init)&&(t.init=null),t}if(t instanceof fe&&t.body instanceof ye){if(i(t,this),t.body instanceof le){var x=t.body;return t.body=x.body.pop(),x.body.push(t),l?ne.splice(x.body):x}return t}return t instanceof xe&&t!==n?t:void 0});n.transform(g)}}),xe.DEFMETHOD("hoist_declarations",function(e){var t=this;if(e.has_directive("use asm"))return t;var n=e.option("hoist_funs"),i=e.option("hoist_vars");if(n||i){var o=[],a=[],u=new k,c=0,l=0;t.walk(new T(function(e){return e instanceof xe&&e!==t||(e instanceof $e?(++l,!0):void 0)})),i=i&&l>1;var p=new H(function(s){if(s!==t){if(s instanceof ae)return o.push(s),r(pe,s);if(s instanceof Ce&&n)return a.push(s),r(pe,s);if(s instanceof $e&&i){s.definitions.forEach(function(e){u.set(e.name.name,e),++c});var l=s.to_assignments(e),h=p.parent();if(h instanceof be&&h.init===s){if(null==l){var f=s.definitions[0].name;return r(_t,f,f)}return l}return h instanceof ye&&h.init===s?l:l?r(ue,s,{body:l}):r(pe,s)}if(s instanceof xe)return s}});if(t=t.transform(p),c>0){var h=[];if(u.each(function(e,n){t instanceof ke&&s(function(t){return t.name==e.name.name},t.argnames)?u.del(n):((e=e.clone()).value=null,h.push(e),u.set(n,e))}),h.length>0){for(;0<t.body.length;){if(t.body[0]instanceof ue){var f,d,m=t.body[0].body;if(m instanceof rt&&"="==m.operator&&(f=m.left)instanceof lt&&u.has(f.name)){if((g=u.get(f.name)).value)break;g.value=m.right,b(h,g),h.push(g),t.body.splice(0,1);continue}if(m instanceof Ye&&(d=m.car)instanceof rt&&"="==d.operator&&(f=d.left)instanceof lt&&u.has(f.name)){var g=u.get(f.name);if(g.value)break;g.value=d.right,b(h,g),h.push(g),t.body[0].body=m.cdr;continue}}if(t.body[0]instanceof pe)t.body.splice(0,1);else{if(!(t.body[0]instanceof le))break;var v=[0,1].concat(t.body[0].body);t.body.splice.apply(t.body,v)}}h=r($e,t,{definitions:h}),a.push(h)}}t.body=o.concat(a,t.body)}return t}),function(e){function t(e,t,n){for(var r=[],i=!1,o=0,s=e.length;o<s;o++){var a=e[o].drop_side_effect_free(t,n);i|=a!==e[o],a&&(r.push(a),n=!1)}return i?r.length?r:null:e}e(ie,m),e(kt,g),e(wt,g),e(We,function(e,n){if(!this.has_pure_annotation(e)&&e.pure_funcs(this)){if(this.expression instanceof Ae&&(!this.expression.name||!this.expression.name.definition().references.length)){var r=this.clone();return r.expression=r.expression.process_expression(!1,e),r}return this}this.pure&&(e.warn("Dropping __PURE__ call [{file}:{line},{col}]",this.start),this.pure.value=this.pure.value.replace(/[@#]__PURE__/g," "));var i=t(this.args,e,n);return i&&Ye.from_array(i)}),e(Ee,g),e(Ae,g),e(tt,function(e,t){var n=this.right.drop_side_effect_free(e);if(!n)return this.left.drop_side_effect_free(e,t);switch(this.operator){case"&&":case"||":if(n===this.right)return this;var i=this.clone();return i.right=n,i;default:var o=this.left.drop_side_effect_free(e,t);return o?r(Ye,this,{car:o,cdr:n}):this.right.drop_side_effect_free(e,t)}}),e(rt,m),e(nt,function(e){var t=this.consequent.drop_side_effect_free(e),n=this.alternative.drop_side_effect_free(e);if(t===this.consequent&&n===this.alternative)return this;if(!t)return n?r(tt,this,{operator:"||",left:this.condition,right:n}):this.condition.drop_side_effect_free(e);if(!n)return r(tt,this,{operator:"&&",left:this.condition,right:t});var i=this.clone();return i.consequent=t,i.alternative=n,i}),e(Qe,function(e,t){if(z(this.operator))return this;if("typeof"==this.operator&&this.expression instanceof _t)return null;var n=this.expression.drop_side_effect_free(e,t);return t&&this instanceof Ze&&p(n)?n===this.expression&&1===this.operator.length?this:r(Ze,this,{operator:1===this.operator.length?this.operator:"!",expression:n}):n}),e(_t,function(){return this.undeclared()?this:null}),e(ot,function(e,n){var r=t(this.properties,e,n);return r&&Ye.from_array(r)}),e(st,function(e,t){return this.value.drop_side_effect_free(e,t)}),e(it,function(e,n){var r=t(this.elements,e,n);return r&&Ye.from_array(r)}),e(Ke,function(e,t){return this.expression.may_throw_on_access(e)?this:this.expression.drop_side_effect_free(e,t)}),e(Je,function(e,t){if(this.expression.may_throw_on_access(e))return this;var n=this.expression.drop_side_effect_free(e,t);if(!n)return this.property.drop_side_effect_free(e,t);var i=this.property.drop_side_effect_free(e);return i?r(Ye,this,{car:n,cdr:i}):n}),e(Ye,function(e){var t=this.cdr.drop_side_effect_free(e);return t===this.cdr?this:t?r(Ye,this,{car:this.car,cdr:t}):this.car})}(function(e,t){e.DEFMETHOD("drop_side_effect_free",t)}),e(ue,function(e,t){if(t.option("side_effects")){var n=e.body,i=n.drop_side_effect_free(t,!0);if(!i)return t.warn("Dropping side-effect-free statement [{file}:{line},{col}]",e.start),r(pe,e);if(i!==n)return r(ue,e,{body:i})}return e}),e(me,function(e,t){if(!t.option("loops"))return e;var n=e.condition.evaluate(t);if(n!==e.condition){if(n)return r(ye,e,{body:e.body});if(t.option("dead_code")&&e instanceof ve){var i=[];return O(t,e.body,i),r(le,e,{body:i}).optimize(t)}if(e instanceof ge){var o=!1,s=new T(function(t){return!!(t instanceof xe||o)||(t instanceof Be&&s.loopcontrol_target(t)===e?o=!0:void 0)}),a=t.parent();if((a instanceof fe?a:e).walk(s),!o)return e.body}}return e instanceof ve?r(ye,e,e).optimize(t):e}),e(ye,function(e,t){if(!t.option("loops"))return e;if(e.condition){var n=e.condition.evaluate(t);if(t.option("dead_code")&&!n){var o=[];return e.init instanceof oe?o.push(e.init):e.init&&o.push(r(ue,e.init,{body:e.init})),O(t,e.body,o),r(le,e,{body:o}).optimize(t)}n!==e.condition&&(n=i(n,e.condition).transform(t),e.condition=D(n,e.condition))}return R(e,t),e}),e(Ne,function(e,t){if(c(e.alternative)&&(e.alternative=null),!t.option("conditionals"))return e;var n=e.condition.evaluate(t);if(n!==e.condition){if(n){if(t.warn("Condition always true [{file}:{line},{col}]",e.condition.start),t.option("dead_code")){o=[];return e.alternative&&O(t,e.alternative,o),o.push(e.body),r(le,e,{body:o}).optimize(t)}}else if(t.warn("Condition always false [{file}:{line},{col}]",e.condition.start),t.option("dead_code")){var o=[];return O(t,e.body,o),e.alternative&&o.push(e.alternative),r(le,e,{body:o}).optimize(t)}n=i(n,e.condition).transform(t),e.condition=D(n,e.condition)}var s=e.condition.negate(t),a=e.condition.print_to_string().length,u=s.print_to_string().length,l=u<a;if(e.alternative&&l){l=!1,e.condition=s;var p=e.body;e.body=e.alternative||r(pe,e),e.alternative=p}if(c(e.body)&&c(e.alternative))return r(ue,e.condition,{body:e.condition.clone()}).optimize(t);if(e.body instanceof ue&&e.alternative instanceof ue)return r(ue,e,{body:r(nt,e,{condition:e.condition,consequent:e.body.body,alternative:e.alternative.body})}).optimize(t);if(c(e.alternative)&&e.body instanceof ue)return a===u&&!l&&e.condition instanceof tt&&"||"==e.condition.operator&&(l=!0),l?r(ue,e,{body:r(tt,e,{operator:"||",left:s,right:e.body.body})}).optimize(t):r(ue,e,{body:r(tt,e,{operator:"&&",left:e.condition,right:e.body.body})}).optimize(t);if(e.body instanceof pe&&e.alternative instanceof ue)return r(ue,e,{body:r(tt,e,{operator:"||",left:e.condition,right:e.alternative.body})}).optimize(t);if(e.body instanceof Te&&e.alternative instanceof Te&&e.body.TYPE==e.alternative.TYPE)return r(e.body.CTOR,e,{value:r(nt,e,{condition:e.condition,consequent:e.body.value||r(Ft,e.body),alternative:e.alternative.value||r(Ft,e.alternative)}).transform(t)}).optimize(t);if(e.body instanceof Ne&&!e.body.alternative&&!e.alternative&&(e=r(Ne,e,{condition:r(tt,e.condition,{operator:"&&",left:e.condition,right:e.body.condition}),body:e.body.body,alternative:null})),M(e.body)&&e.alternative){var h=e.alternative;return e.alternative=null,r(le,e,{body:[e,h]}).optimize(t)}if(M(e.alternative)){var f=e.body;return e.body=e.alternative,e.condition=l?s:e.condition.negate(t),e.alternative=null,r(le,e,{body:[e,f]}).optimize(t)}return e}),e(Me,function(e,t){function n(e,n){n&&!M(n)?n.body=n.body.concat(e.body):O(t,e,l)}if(!t.option("switches"))return e;var o,s=e.expression.evaluate(t);if(s!==e.expression){var a=i(s,e.expression).transform(t);e.expression=D(a,e.expression)}if(!t.option("dead_code"))return e;for(var u,c,l=[],p=[],h=0,f=e.body.length;h<f&&!c;h++){if((o=e.body[h])instanceof Pe)u?n(o,p[p.length-1]):u=o;else if(s!==e.expression){var d=o.expression.evaluate(t);if(d===s){if(c=o,u){var m=p.indexOf(u);p.splice(m,1),n(u,p[m-1]),u=null}}else if(d!==o.expression){n(o,p[p.length-1]);continue}}if(M(o)){var g=p[p.length-1];M(g)&&g.body.length==o.body.length&&r(le,g,g).equivalent_to(r(le,o,o))&&(g.body=[])}p.push(o)}for(;h<f;)n(e.body[h++],p[p.length-1]);for(p.length>0&&(p[0].body=l.concat(p[0].body)),e.body=p;o=p[p.length-1];){var v=o.body[o.body.length-1];if(v instanceof De&&t.loopcontrol_target(v)===e&&o.body.pop(),o.body.length||o instanceof Ie&&(u||o.expression.has_side_effects(t)))break;p.pop()===u&&(u=null)}if(0==p.length)return r(le,e,{body:l.concat(r(ue,e.expression,{body:e.expression}))}).optimize(t);if(1==p.length&&(p[0]===c||p[0]===u)){var y=!1,b=new T(function(t){if(y||t instanceof ke||t instanceof ue)return!0;t instanceof De&&b.loopcontrol_target(t)===e&&(y=!0)});if(e.walk(b),!y)return(p=p[0].body.slice()).unshift(r(ue,e.expression,{body:e.expression})),r(le,e,{body:p}).optimize(t)}return e}),e(je,function(e,t){if(e.body=v(e.body,t),e.bcatch&&e.bfinally&&w(e.bfinally.body,c)&&(e.bfinally=null),w(e.body,c)){var n=[];return e.bcatch&&O(t,e.bcatch,n),e.bfinally&&(n=n.concat(e.bfinally.body)),r(le,e,{body:n}).optimize(t)}return e}),Ue.DEFMETHOD("remove_initializers",function(){this.definitions.forEach(function(e){e.value=null})}),Ue.DEFMETHOD("to_assignments",function(e){var t=e.option("reduce_vars"),n=this.definitions.reduce(function(e,n){if(n.value){var i=r(_t,n.name,n.name);e.push(r(rt,n,{operator:"=",left:i,right:n.value})),t&&(i.definition().fixed=!1)}return e},[]);return 0==n.length?null:Ye.from_array(n)}),e(Ue,function(e,t){return 0==e.definitions.length?r(pe,e):e}),e(We,function(e,t){var n=e.expression;if(t.option("reduce_vars")&&n instanceof _t){var o=n.definition(),s=n.fixed_value();s instanceof Ce&&(o.fixed=s=r(Ae,s,s).clone(!0)),s instanceof Ae&&(n=s,!t.option("unused")||1!=o.references.length||o.scope.uses_arguments&&o.orig[0]instanceof mt||o.scope.uses_eval||t.find_parent(xe)!==o.scope||(e.expression=n))}if(t.option("unused")&&n instanceof Ae&&!n.uses_arguments&&!n.uses_eval){for(var a=0,u=0,l=0,h=e.args.length;l<h;l++){var f=l>=n.argnames.length;if(f||n.argnames[l].__unused){if(E=e.args[l].drop_side_effect_free(t))e.args[a++]=E;else if(!f){e.args[a++]=r(At,e.args[l],{value:0});continue}}else e.args[a++]=e.args[l];u=a}e.args.length=u}if(t.option("unsafe"))if(n instanceof _t&&n.undeclared())switch(n.name){case"Array":if(1!=e.args.length)return r(it,e,{elements:e.args}).optimize(t);break;case"Object":if(0==e.args.length)return r(ot,e,{properties:[]});break;case"String":if(0==e.args.length)return r(Et,e,{value:""});if(e.args.length<=1)return r(tt,e,{left:e.args[0],operator:"+",right:r(Et,e,{value:""})}).optimize(t);break;case"Number":if(0==e.args.length)return r(At,e,{value:0});if(1==e.args.length)return r(Ze,e,{expression:e.args[0],operator:"+"}).optimize(t);case"Boolean":if(0==e.args.length)return r(Nt,e);if(1==e.args.length)return r(Ze,e,{expression:r(Ze,e,{expression:e.args[0],operator:"!"}),operator:"!"}).optimize(t);break;case"Function":if(0==e.args.length)return r(Ae,e,{argnames:[],body:[]});if(w(e.args,function(e){return e instanceof Et}))try{var d=q(y="(function("+e.args.slice(0,-1).map(function(e){return e.value}).join(",")+"){"+e.args[e.args.length-1].value+"})()");d.figure_out_scope({screw_ie8:t.option("screw_ie8")});var m=new X(t.options);(d=d.transform(m)).figure_out_scope({screw_ie8:t.option("screw_ie8")}),d.mangle_names();var g;try{d.walk(new T(function(e){if(e instanceof ke)throw g=e,d}))}catch(e){if(e!==d)throw e}if(!g)return e;var v=g.argnames.map(function(t,n){return r(Et,e.args[n],{value:t.print_to_string()})}),y=Y();return le.prototype._codegen.call(g,g,y),y=y.toString().replace(/^\{|\}$/g,""),v.push(r(Et,e.args[e.args.length-1],{value:y})),e.args=v,e}catch(n){if(!(n instanceof V))throw console.log(n),n;t.warn("Error parsing code passed to new Function [{file}:{line},{col}]",e.args[e.args.length-1].start),t.warn(n.toString())}}else{if(n instanceof Ke&&"toString"==n.property&&0==e.args.length)return r(tt,e,{left:r(Et,e,{value:""}),operator:"+",right:n.expression}).optimize(t);if(n instanceof Ke&&n.expression instanceof it&&"join"==n.property){var b;if(!(e.args.length>0&&(b=e.args[0].evaluate(t))===e.args[0])){var _=[],x=[];if(n.expression.elements.forEach(function(n){var i=n.evaluate(t);i!==n?x.push(i):(x.length>0&&(_.push(r(Et,e,{value:x.join(b)})),x.length=0),_.push(n))}),x.length>0&&_.push(r(Et,e,{value:x.join(b)})),0==_.length)return r(Et,e,{value:""});if(1==_.length)return _[0].is_string(t)?_[0]:r(tt,_[0],{operator:"+",left:r(Et,e,{value:""}),right:_[0]});if(""==b){var k;return k=_[0].is_string(t)||_[1].is_string(t)?_.shift():r(Et,e,{value:""}),_.reduce(function(e,t){return r(tt,t,{operator:"+",left:e,right:t})},k).optimize(t)}var E=e.clone();return E.expression=E.expression.clone(),E.expression.expression=E.expression.expression.clone(),E.expression.expression.elements=_,N(t,e,E)}}else if(n instanceof Ke&&n.expression.is_string(t)&&"charAt"==n.property){var A=e.args[0],C=A?A.evaluate(t):0;if(C!==A)return r(Je,n,{expression:n.expression,property:i(0|C,A||n)}).optimize(t)}}if(n instanceof Ae){if(n.body[0]instanceof Oe){var S=n.body[0].value;if(!S||S.is_constant()){v=e.args.concat(S||r(Ft,e));return Ye.from_array(v).transform(t)}}if(t.option("side_effects")&&w(n.body,c)){v=e.args.concat(r(Ft,e));return Ye.from_array(v).transform(t)}}if(t.option("drop_console")&&n instanceof Xe){for(var O=n.expression;O.expression;)O=O.expression;if(O instanceof _t&&"console"==O.name&&O.undeclared())return r(Ft,e).optimize(t)}return t.option("negate_iife")&&t.parent()instanceof ue&&p(e)?e.negate(t,!0):e}),e(Ge,function(e,t){if(t.option("unsafe")){var n=e.expression;if(n instanceof _t&&n.undeclared())switch(n.name){case"Object":case"RegExp":case"Function":case"Error":case"Array":return r(We,e,e).transform(t)}}return e}),e(Ye,function(e,n){if(!n.option("side_effects"))return e;if(e.car=e.car.drop_side_effect_free(n,A(n)),!e.car)return a(n.parent(),e,e.cdr);if(n.option("cascade")){var i;if(e.car instanceof rt&&!e.car.left.has_side_effects(n)?i=e.car.left:e.car instanceof Qe&&("++"==e.car.operator||"--"==e.car.operator)&&(i=e.car.expression),i&&!(i instanceof _t&&(i.definition().orig[0]instanceof vt||t(i))))for(var o,s,u=e.cdr;;){if(u.equivalent_to(i)){var c=e.car instanceof et?r(Ze,e.car,{operator:e.car.operator,expression:i}):e.car;return o?(o[s]=c,e.cdr):c}if(u instanceof tt&&!(u instanceof rt))if(u.left.is_constant()){if("||"==u.operator||"&&"==u.operator)break;s="right"}else s="left";else{if(!(u instanceof We||u instanceof Qe&&!z(u.operator)))break;s="expression"}o=u,u=u[s]}}return F(e.cdr,n)?r(Ze,e,{operator:"void",expression:e.car}):e}),Qe.DEFMETHOD("lift_sequences",function(e){if(e.option("sequences")&&this.expression instanceof Ye){var t=this.expression,n=t.to_array(),r=this.clone();return r.expression=n.pop(),n.push(r),t=Ye.from_array(n).transform(e)}return this}),e(et,function(e,t){return e.lift_sequences(t)}),e(Ze,function(e,t){var n=e.expression;if("delete"==e.operator&&!(n instanceof _t||n instanceof Xe||n instanceof Ot||n instanceof Dt||n instanceof Ft))return n instanceof Ye?((n=n.to_array()).push(r(Mt,e)),Ye.from_array(n).optimize(t)):r(Ye,e,{car:n,cdr:r(Mt,e)}).optimize(t);var o=e.lift_sequences(t);if(o!==e)return o;if(t.option("side_effects")&&"void"==e.operator)return(n=n.drop_side_effect_free(t))?(e.expression=n,e):r(Ft,e).optimize(t);if(t.option("booleans")&&t.in_boolean_context())switch(e.operator){case"!":if(n instanceof Ze&&"!"==n.operator)return n.expression;n instanceof tt&&(e=N(t,e,n.negate(t,A(t))));break;case"typeof":return t.warn("Boolean expression always true [{file}:{line},{col}]",e.start),(n instanceof _t?r(Mt,e):r(Ye,e,{car:n,cdr:r(Mt,e)})).optimize(t)}if("-"==e.operator&&n instanceof Dt&&(n=n.transform(t)),n instanceof tt&&("+"==e.operator||"-"==e.operator)&&("*"==n.operator||"/"==n.operator||"%"==n.operator))return r(tt,e,{operator:n.operator,left:r(Ze,n.left,{operator:e.operator,expression:n.left}),right:n.right});if("-"!=e.operator||!(n instanceof At||n instanceof Dt)){var s=e.evaluate(t);if(s!==e)return s=i(s,e).optimize(t),N(t,s,e)}return e}),tt.DEFMETHOD("lift_sequences",function(e){if(e.option("sequences")){if(this.left instanceof Ye){var t=(o=this.left).to_array();return(s=this.clone()).left=t.pop(),t.push(s),Ye.from_array(t).optimize(e)}if(this.right instanceof Ye&&!this.left.has_side_effects(e)){for(var n,r="="==this.operator&&this.left instanceof _t,i=this.right.clone(),o=i;(r||!o.car.has_side_effects(e))&&(n=o,o.cdr instanceof Ye);)o=o.cdr=o.cdr.clone();if(n){var s=this.clone();return s.right=n.cdr,n.cdr=s,i.optimize(e)}}}return this});var U=x("== === != !== * & | ^");e(tt,function(e,t){function n(){return e.left.is_constant()||e.right.is_constant()||!e.left.has_side_effects(t)&&!e.right.has_side_effects(t)}function o(t){if(n()){t&&(e.operator=t);var r=e.left;e.left=e.right,e.right=r}}if(U(e.operator)&&e.right.is_constant()&&!e.left.is_constant()&&(e.left instanceof tt&&en[e.left.operator]>=en[e.operator]||o()),e=e.lift_sequences(t),t.option("comparisons"))switch(e.operator){case"===":case"!==":(e.left.is_string(t)&&e.right.is_string(t)||e.left.is_number(t)&&e.right.is_number(t)||e.left.is_boolean()&&e.right.is_boolean())&&(e.operator=e.operator.substr(0,2));case"==":case"!=":if(e.left instanceof Et&&"undefined"==e.left.value&&e.right instanceof Ze&&"typeof"==e.right.operator){var s=e.right.expression;(s instanceof _t?s.undeclared():s instanceof Xe&&!t.option("screw_ie8"))||(e.right=s,e.left=r(Ft,e.left).optimize(t),2==e.operator.length&&(e.operator+="="))}}if(t.option("booleans")&&"+"==e.operator&&t.in_boolean_context()){var u=e.left.evaluate(t),c=e.right.evaluate(t);if(u&&"string"==typeof u)return t.warn("+ in boolean context always true [{file}:{line},{col}]",e.start),r(Ye,e,{car:e.right,cdr:r(Mt,e)}).optimize(t);if(c&&"string"==typeof c)return t.warn("+ in boolean context always true [{file}:{line},{col}]",e.start),r(Ye,e,{car:e.left,cdr:r(Mt,e)}).optimize(t)}if(t.option("comparisons")&&e.is_boolean()){if(!(t.parent()instanceof tt)||t.parent()instanceof rt){var l=r(Ze,e,{operator:"!",expression:e.negate(t,A(t))});e=N(t,e,l)}if(t.option("unsafe_comps"))switch(e.operator){case"<":o(">");break;case"<=":o(">=")}}if("+"==e.operator){if(e.right instanceof Et&&""==e.right.getValue()&&e.left.is_string(t))return e.left;if(e.left instanceof Et&&""==e.left.getValue()&&e.right.is_string(t))return e.right;if(e.left instanceof tt&&"+"==e.left.operator&&e.left.left instanceof Et&&""==e.left.left.getValue()&&e.right.is_string(t))return e.left=e.left.right,e.transform(t)}if(t.option("evaluate")){switch(e.operator){case"&&":if(!(u=e.left.evaluate(t)))return t.warn("Condition left of && always false [{file}:{line},{col}]",e.start),a(t.parent(),e,e.left).optimize(t);if(u!==e.left)return t.warn("Condition left of && always true [{file}:{line},{col}]",e.start),a(t.parent(),e,e.right).optimize(t);if(t.option("booleans")&&t.in_boolean_context()){if(!(c=e.right.evaluate(t)))return t.warn("Boolean && always false [{file}:{line},{col}]",e.start),r(Ye,e,{car:e.left,cdr:r(Nt,e)}).optimize(t);if(c!==e.right)return t.warn("Dropping side-effect-free && in boolean context [{file}:{line},{col}]",e.start),e.left.optimize(t)}break;case"||":if(!(u=e.left.evaluate(t)))return t.warn("Condition left of || always false [{file}:{line},{col}]",e.start),a(t.parent(),e,e.right).optimize(t);if(u!==e.left)return t.warn("Condition left of || always true [{file}:{line},{col}]",e.start),a(t.parent(),e,e.left).optimize(t);if(t.option("booleans")&&t.in_boolean_context()){if(!(c=e.right.evaluate(t)))return t.warn("Dropping side-effect-free || in boolean context [{file}:{line},{col}]",e.start),e.left.optimize(t);if(c!==e.right)return t.warn("Boolean || always true [{file}:{line},{col}]",e.start),r(Ye,e,{car:e.left,cdr:r(Mt,e)}).optimize(t)}}var p=!0;switch(e.operator){case"+":if(e.left instanceof kt&&e.right instanceof tt&&"+"==e.right.operator&&e.right.left instanceof kt&&e.right.is_string(t)&&(e=r(tt,e,{operator:"+",left:r(Et,e.left,{value:""+e.left.getValue()+e.right.left.getValue(),start:e.left.start,end:e.right.left.end}),right:e.right.right})),e.right instanceof kt&&e.left instanceof tt&&"+"==e.left.operator&&e.left.right instanceof kt&&e.left.is_string(t)&&(e=r(tt,e,{operator:"+",left:e.left.left,right:r(Et,e.right,{value:""+e.left.right.getValue()+e.right.getValue(),start:e.left.right.start,end:e.right.end})})),e.left instanceof tt&&"+"==e.left.operator&&e.left.is_string(t)&&e.left.right instanceof kt&&e.right instanceof tt&&"+"==e.right.operator&&e.right.left instanceof kt&&e.right.is_string(t)&&(e=r(tt,e,{operator:"+",left:r(tt,e.left,{operator:"+",left:e.left.left,right:r(Et,e.left.right,{value:""+e.left.right.getValue()+e.right.left.getValue(),start:e.left.right.start,end:e.right.left.end})}),right:e.right.right})),e.right instanceof Ze&&"-"==e.right.operator&&e.left.is_number(t)){e=r(tt,e,{operator:"-",left:e.left,right:e.right.expression});break}if(e.left instanceof Ze&&"-"==e.left.operator&&n()&&e.right.is_number(t)){e=r(tt,e,{operator:"-",left:e.right,right:e.left.expression});break}case"*":p=t.option("unsafe_math");case"&":case"|":case"^":if(e.left.is_number(t)&&e.right.is_number(t)&&n()&&!(e.left instanceof tt&&e.left.operator!=e.operator&&en[e.left.operator]>=en[e.operator])){var h=r(tt,e,{operator:e.operator,left:e.right,right:e.left});e=e.right instanceof kt&&!(e.left instanceof kt)?N(t,h,e):N(t,e,h)}p&&e.is_number(t)&&(e.right instanceof tt&&e.right.operator==e.operator&&(e=r(tt,e,{operator:e.operator,left:r(tt,e.left,{operator:e.operator,left:e.left,right:e.right.left,start:e.left.start,end:e.right.left.end}),right:e.right.right})),e.right instanceof kt&&e.left instanceof tt&&e.left.operator==e.operator&&(e.left.left instanceof kt?e=r(tt,e,{operator:e.operator,left:r(tt,e.left,{operator:e.operator,left:e.left.left,right:e.right,start:e.left.left.start,end:e.right.end}),right:e.left.right}):e.left.right instanceof kt&&(e=r(tt,e,{operator:e.operator,left:r(tt,e.left,{operator:e.operator,left:e.left.right,right:e.right,start:e.left.right.start,end:e.right.end}),right:e.left.left}))),e.left instanceof tt&&e.left.operator==e.operator&&e.left.right instanceof kt&&e.right instanceof tt&&e.right.operator==e.operator&&e.right.left instanceof kt&&(e=r(tt,e,{operator:e.operator,left:r(tt,e.left,{operator:e.operator,left:r(tt,e.left.left,{operator:e.operator,left:e.left.right,right:e.right.left,start:e.left.right.start,end:e.right.left.end}),right:e.left.left}),right:e.right.right})))}}if(e.right instanceof tt&&e.right.operator==e.operator&&("&&"==e.operator||"||"==e.operator||"+"==e.operator&&(e.right.left.is_string(t)||e.left.is_string(t)&&e.right.right.is_string(t))))return e.left=r(tt,e.left,{operator:e.operator,left:e.left,right:e.right.left}),e.right=e.right.right,e.transform(t);var f=e.evaluate(t);return f!==e?(f=i(f,e).optimize(t),N(t,f,e)):e}),e(_t,function(e,t){var n=e.resolve_defines(t);if(n)return n.optimize(t);if(t.option("screw_ie8")&&e.undeclared()&&(!e.scope.uses_with||!t.find_parent(_e)))switch(e.name){case"undefined":return r(Ft,e).optimize(t);case"NaN":return r(Ot,e).optimize(t);case"Infinity":return r(Dt,e).optimize(t)}if(t.option("evaluate")&&t.option("reduce_vars")&&B(e,t.parent())!==e){var o=e.definition(),s=e.fixed_value();if(s){if(void 0===o.should_replace){var a=s.evaluate(t);if(a===s||!t.option("unsafe_regexp")&&a instanceof RegExp)o.should_replace=!1;else{var u,c=(a=i(a,s)).optimize(t).print_to_string().length;!function(e){var t;return e.walk(new T(function(e){if(e instanceof _t&&(t=!0),t)return!0})),t}(s)?(c=Math.min(c,s.print_to_string().length),u=function(){var e=D(a.optimize(t),s);return e===a||e===s?e.clone(!0):e}):u=function(){var e=a.optimize(t);return e===a?e.clone(!0):e};var l=o.name.length,p=0;!t.option("unused")||o.global&&!t.option("toplevel")||(p=(l+2+c)/o.references.length),o.should_replace=c<=l+p&&u}}if(o.should_replace)return o.should_replace()}}return e}),e(Ft,function(e,t){if(t.option("unsafe")){var i=n(t,"undefined");if(i){var o=r(_t,e,{name:"undefined",scope:i.scope,thedef:i});return o.is_undefined=!0,o}}var s=B(t.self(),t.parent());return s&&P(s,e)?e:r(Ze,e,{operator:"void",expression:r(At,e,{value:0})})}),e(Dt,function(e,t){var i=B(t.self(),t.parent());return i&&P(i,e)?e:!t.option("keep_infinity")||i&&!P(i,e)||n(t,"Infinity")?r(tt,e,{operator:"/",left:r(At,e,{value:1}),right:r(At,e,{value:0})}):e}),e(Ot,function(e,t){var i=B(t.self(),t.parent());return i&&!P(i,e)||n(t,"NaN")?r(tt,e,{operator:"/",left:r(At,e,{value:0}),right:r(At,e,{value:0})}):e});var $=["+","-","/","*","%",">>","<<",">>>","|","^","&"],W=["*","|","^","&"];e(rt,function(e,t){return"="==(e=e.lift_sequences(t)).operator&&e.left instanceof _t&&e.right instanceof tt&&(e.right.left instanceof _t&&e.right.left.name==e.left.name&&o(e.right.operator,$)?(e.operator=e.right.operator+"=",e.right=e.right.right):e.right.right instanceof _t&&e.right.right.name==e.left.name&&o(e.right.operator,W)&&!e.right.left.has_side_effects(t)&&(e.operator=e.right.operator+"=",e.right=e.right.left)),e}),e(nt,function(e,t){function n(e){return e.is_boolean()?e:r(Ze,e,{operator:"!",expression:e.negate(t)})}function i(e){return e instanceof Mt||e instanceof Ze&&"!"==e.operator&&e.expression instanceof kt&&!e.expression.value}function o(e){return e instanceof Nt||e instanceof Ze&&"!"==e.operator&&e.expression instanceof kt&&!!e.expression.value}if(!t.option("conditionals"))return e;if(e.condition instanceof Ye){var s=e.condition.car;return e.condition=e.condition.cdr,Ye.cons(s,e)}var u=e.condition.evaluate(t);if(u!==e.condition)return u?(t.warn("Condition always true [{file}:{line},{col}]",e.start),a(t.parent(),e,e.consequent)):(t.warn("Condition always false [{file}:{line},{col}]",e.start),a(t.parent(),e,e.alternative));var c=u.negate(t,A(t));N(t,u,c)===c&&(e=r(nt,e,{condition:c,consequent:e.alternative,alternative:e.consequent}));var l=e.condition,p=e.consequent,h=e.alternative;return l instanceof _t&&p instanceof _t&&l.definition()===p.definition()?r(tt,e,{operator:"||",left:l,right:h}):p instanceof rt&&h instanceof rt&&p.operator==h.operator&&p.left.equivalent_to(h.left)&&(!e.condition.has_side_effects(t)||"="==p.operator&&!p.left.has_side_effects(t))?r(rt,e,{operator:p.operator,left:p.left,right:r(nt,e,{condition:e.condition,consequent:p.right,alternative:h.right})}):p instanceof We&&h.TYPE===p.TYPE&&1==p.args.length&&1==h.args.length&&p.expression.equivalent_to(h.expression)&&!p.expression.has_side_effects(t)?(p.args[0]=r(nt,e,{condition:e.condition,consequent:p.args[0],alternative:h.args[0]}),p):p instanceof nt&&p.alternative.equivalent_to(h)?r(nt,e,{condition:r(tt,e,{left:e.condition,operator:"&&",right:p.condition}),consequent:p.consequent,alternative:h}):p.equivalent_to(h)?r(Ye,e,{car:e.condition,cdr:p}).optimize(t):i(e.consequent)?o(e.alternative)?n(e.condition):r(tt,e,{operator:"||",left:n(e.condition),right:e.alternative}):o(e.consequent)?i(e.alternative)?n(e.condition.negate(t)):r(tt,e,{operator:"&&",left:n(e.condition.negate(t)),right:e.alternative}):i(e.alternative)?r(tt,e,{operator:"||",left:n(e.condition.negate(t)),right:e.consequent}):o(e.alternative)?r(tt,e,{operator:"&&",left:n(e.condition),right:e.consequent}):e}),e(Lt,function(e,t){if(t.option("booleans")){var n=t.parent();return n instanceof tt&&("=="==n.operator||"!="==n.operator)?(t.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]",{operator:n.operator,value:e.value,file:n.start.file,line:n.start.line,col:n.start.col}),r(At,e,{value:+e.value})):r(Ze,e,{operator:"!",expression:r(At,e,{value:1-e.value})})}return e}),e(Je,function(e,t){var n=e.property;if(n instanceof Et&&t.option("properties")){if(n=n.getValue(),It(n)?t.option("screw_ie8"):I(n))return r(Ke,e,{expression:e.expression,property:n}).optimize(t);var o=parseFloat(n);isNaN(o)||o.toString()!=n||(e.property=r(At,e.property,{value:o}))}var s=e.evaluate(t);return s!==e?(s=i(s,e).optimize(t),N(t,s,e)):e}),e(Ke,function(e,t){var n=e.resolve_defines(t);if(n)return n.optimize(t);var o=e.property;if(It(o)&&!t.option("screw_ie8"))return r(Je,e,{expression:e.expression,property:r(Et,e,{value:o})}).optimize(t);if(t.option("unsafe_proto")&&e.expression instanceof Ke&&"prototype"==e.expression.property){var s=e.expression.expression;if(s instanceof _t&&s.undeclared())switch(s.name){case"Array":e.expression=r(it,e.expression,{elements:[]});break;case"Object":e.expression=r(ot,e.expression,{properties:[]});break;case"String":e.expression=r(Et,e.expression,{value:""})}}var a=e.evaluate(t);return a!==e?(a=i(a,e).optimize(t),N(t,a,e)):e}),e(it,j),e(ot,j),e(Ct,j),e(Oe,function(e,t){return e.value&&F(e.value,t)&&(e.value=null),e}),e(He,function(e,t){var n=t.option("global_defs");return n&&E(n,e.name.name)&&t.warn("global_defs "+e.name.name+" redefined [{file}:{line},{col}]",e.start),e})}(),function(){function e(e){if("Literal"==e.type)return null!=e.raw?e.raw:e.value+""}function t(t){var n=t.loc,r=n&&n.start,i=t.range;return new re({file:n&&n.source,line:r&&r.line,col:r&&r.column,pos:i?i[0]:t.start,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[0]:t.start,raw:e(t)})}function r(t){var n=t.loc,r=n&&n.end,i=t.range;return new re({file:n&&n.source,line:r&&r.line,col:r&&r.column,pos:i?i[1]:t.end,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[1]:t.end,raw:e(t)})}function i(e,i,s){var p="function From_Moz_"+e+"(M){\n";p+="return new U2."+i.name+"({\nstart: my_start_token(M),\nend: my_end_token(M)";var f="function To_Moz_"+e+"(M){\n";f+="return {\ntype: "+JSON.stringify(e),s&&s.split(/\s*,\s*/).forEach(function(e){var t=/([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(e);if(!t)throw new Error("Can't understand property map: "+e);var n=t[1],r=t[2],i=t[3];switch(p+=",\n"+i+": ",f+=",\n"+n+": ",r){case"@":p+="M."+n+".map(from_moz)",f+="M."+i+".map(to_moz)";break;case">":p+="from_moz(M."+n+")",f+="to_moz(M."+i+")";break;case"=":p+="M."+n,f+="M."+i;break;case"%":p+="from_moz(M."+n+").body",f+="to_moz_block(M)";break;default:throw new Error("Can't understand operator in propmap: "+e)}}),p+="\n})\n}",f+="\n}\n}",p=new Function("U2","my_start_token","my_end_token","from_moz","return("+p+")")(n,t,r,o),f=new Function("to_moz","to_moz_block","to_moz_scope","return("+f+")")(u,c,l),h[e]=p,a(i,f)}function o(e){f.push(e);var t=null!=e?h[e.type](e):null;return f.pop(),t}function s(e,t,n){var r=e.start,i=e.end;return null!=r.pos&&null!=i.endpos&&(t.range=[r.pos,i.endpos]),r.line&&(t.loc={start:{line:r.line,column:r.col},end:i.endline?{line:i.endline,column:i.endcol}:null},r.file&&(t.loc.source=r.file)),t}function a(e,t){e.DEFMETHOD("to_mozilla_ast",function(){return s(this,t(this))})}function u(e){return null!=e?e.to_mozilla_ast():null}function c(e){return{type:"BlockStatement",body:e.body.map(u)}}function l(e,t){var n=t.body.map(u);return t.body[0]instanceof ue&&t.body[0].body instanceof Et&&n.unshift(u(new pe(t.body[0]))),{type:e,body:n}}var p=function(e){for(var t=!0,n=0;n<e.length;n++)t&&e[n]instanceof oe&&e[n].body instanceof Et?e[n]=new ae({start:e[n].start,end:e[n].end,value:e[n].body.value}):!t||e[n]instanceof oe&&e[n].body instanceof Et||(t=!1);return e},h={Program:function(e){return new we({start:t(e),end:r(e),body:p(e.body.map(o))})},FunctionDeclaration:function(e){return new Ce({start:t(e),end:r(e),name:o(e.id),argnames:e.params.map(o),body:p(o(e.body).body)})},FunctionExpression:function(e){return new Ae({start:t(e),end:r(e),name:o(e.id),argnames:e.params.map(o),body:p(o(e.body).body)})},ExpressionStatement:function(e){return new ue({start:t(e),end:r(e),body:o(e.expression)})},TryStatement:function(e){var n=e.handlers||[e.handler];if(n.length>1||e.guardedHandlers&&e.guardedHandlers.length)throw new Error("Multiple catch clauses are not supported.");return new je({start:t(e),end:r(e),body:o(e.block).body,bcatch:o(n[0]),bfinally:e.finalizer?new ze(o(e.finalizer)):null})},Property:function(e){var n=e.key,i={start:t(n),end:r(e.value),key:"Identifier"==n.type?n.name:n.value,value:o(e.value)};return"init"==e.kind?new at(i):(i.key=new pt({name:i.key}),i.value=new Ee(i.value),"get"==e.kind?new ct(i):"set"==e.kind?new ut(i):void 0)},ArrayExpression:function(e){return new it({start:t(e),end:r(e),elements:e.elements.map(function(e){return null===e?new Bt:o(e)})})},ObjectExpression:function(e){return new ot({start:t(e),end:r(e),properties:e.properties.map(function(e){return e.type="Property",o(e)})})},SequenceExpression:function(e){return Ye.from_array(e.expressions.map(o))},MemberExpression:function(e){return new(e.computed?Je:Ke)({start:t(e),end:r(e),property:e.computed?o(e.property):e.property.name,expression:o(e.object)})},SwitchCase:function(e){return new(e.test?Ie:Pe)({start:t(e),end:r(e),expression:o(e.test),body:e.consequent.map(o)})},VariableDeclaration:function(e){return new("const"===e.kind?qe:$e)({start:t(e),end:r(e),definitions:e.declarations.map(o)})},Literal:function(e){var n=e.value,i={start:t(e),end:r(e)};if(null===n)return new Tt(i);switch(typeof n){case"string":return i.value=n,new Et(i);case"number":return i.value=n,new At(i);case"boolean":return new(n?Mt:Nt)(i);default:var o=e.regex;return o&&o.pattern?i.value=new RegExp(o.pattern,o.flags).toString():i.value=e.regex&&e.raw?e.raw:n,new Ct(i)}},Identifier:function(e){var n=f[f.length-2];return new("LabeledStatement"==n.type?bt:"VariableDeclarator"==n.type&&n.id===e?"const"==n.kind?dt:ft:"FunctionExpression"==n.type?n.id===e?vt:mt:"FunctionDeclaration"==n.type?n.id===e?gt:mt:"CatchClause"==n.type?yt:"BreakStatement"==n.type||"ContinueStatement"==n.type?xt:_t)({start:t(e),end:r(e),name:e.name})}};h.UpdateExpression=h.UnaryExpression=function(e){return new(("prefix"in e?e.prefix:"UnaryExpression"==e.type)?Ze:et)({start:t(e),end:r(e),operator:e.operator,expression:o(e.argument)})},i("EmptyStatement",pe),i("BlockStatement",le,"body@body"),i("IfStatement",Ne,"test>condition, consequent>body, alternate>alternative"),i("LabeledStatement",fe,"label>label, body>body"),i("BreakStatement",De,"label>label"),i("ContinueStatement",Le,"label>label"),i("WithStatement",_e,"object>expression, body>body"),i("SwitchStatement",Me,"discriminant>expression, cases@body"),i("ReturnStatement",Oe,"argument>value"),i("ThrowStatement",Fe,"argument>value"),i("WhileStatement",ve,"test>condition, body>body"),i("DoWhileStatement",ge,"test>condition, body>body"),i("ForStatement",ye,"init>init, test>condition, update>step, body>body"),i("ForInStatement",be,"left>init, right>object, body>body"),i("DebuggerStatement",se),i("VariableDeclarator",He,"id>name, init>value"),i("CatchClause",Ve,"param>argname, body%body"),i("ThisExpression",wt),i("BinaryExpression",tt,"operator=operator, left>left, right>right"),i("LogicalExpression",tt,"operator=operator, left>left, right>right"),i("AssignmentExpression",rt,"operator=operator, left>left, right>right"),i("ConditionalExpression",nt,"test>condition, consequent>consequent, alternate>alternative"),i("NewExpression",Ge,"callee>expression, arguments@args"),i("CallExpression",We,"callee>expression, arguments@args"),a(we,function(e){return l("Program",e)}),a(Ce,function(e){return{type:"FunctionDeclaration",id:u(e.name),params:e.argnames.map(u),body:l("BlockStatement",e)}}),a(Ae,function(e){return{type:"FunctionExpression",id:u(e.name),params:e.argnames.map(u),body:l("BlockStatement",e)}}),a(ae,function(e){return{type:"ExpressionStatement",expression:{type:"Literal",value:e.value}}}),a(ue,function(e){return{type:"ExpressionStatement",expression:u(e.body)}}),a(Re,function(e){return{type:"SwitchCase",test:u(e.expression),consequent:e.body.map(u)}}),a(je,function(e){return{type:"TryStatement",block:c(e),handler:u(e.bcatch),guardedHandlers:[],finalizer:u(e.bfinally)}}),a(Ve,function(e){return{type:"CatchClause",param:u(e.argname),guard:null,body:c(e)}}),a(Ue,function(e){return{type:"VariableDeclaration",kind:e instanceof qe?"const":"var",declarations:e.definitions.map(u)}}),a(Ye,function(e){return{type:"SequenceExpression",expressions:e.to_array().map(u)}}),a(Xe,function(e){var t=e instanceof Je;return{type:"MemberExpression",object:u(e.expression),computed:t,property:t?u(e.property):{type:"Identifier",name:e.property}}}),a(Qe,function(e){return{type:"++"==e.operator||"--"==e.operator?"UpdateExpression":"UnaryExpression",operator:e.operator,prefix:e instanceof Ze,argument:u(e.expression)}}),a(tt,function(e){return{type:"&&"==e.operator||"||"==e.operator?"LogicalExpression":"BinaryExpression",left:u(e.left),operator:e.operator,right:u(e.right)}}),a(it,function(e){return{type:"ArrayExpression",elements:e.elements.map(u)}}),a(ot,function(e){return{type:"ObjectExpression",properties:e.properties.map(u)}}),a(st,function(e){var t,n={type:"Literal",value:e.key instanceof pt?e.key.name:e.key};return e instanceof at?t="init":e instanceof ct?t="get":e instanceof ut&&(t="set"),{type:"Property",kind:t,key:n,value:u(e.value)}}),a(lt,function(e){var t=e.definition();return{type:"Identifier",name:t?t.mangled_name||t.name:e.name}}),a(Ct,function(e){var t=e.value;return{type:"Literal",value:t,raw:t.toString(),regex:{pattern:t.source,flags:t.toString().match(/[gimuy]*$/)[0]}}}),a(kt,function(e){var t=e.value;return"number"==typeof t&&(t<0||0===t&&1/t<0)?{type:"UnaryExpression",operator:"-",prefix:!0,argument:{type:"Literal",value:-t,raw:e.start.raw}}:{type:"Literal",value:t,raw:e.start.raw}}),a(St,function(e){return{type:"Identifier",name:String(e.value)}}),Lt.DEFMETHOD("to_mozilla_ast",kt.prototype.to_mozilla_ast),Tt.DEFMETHOD("to_mozilla_ast",kt.prototype.to_mozilla_ast),Bt.DEFMETHOD("to_mozilla_ast",function(){return null}),ce.DEFMETHOD("to_mozilla_ast",le.prototype.to_mozilla_ast),ke.DEFMETHOD("to_mozilla_ast",Ae.prototype.to_mozilla_ast);var f=null;ie.from_mozilla_ast=function(e){var t=f;f=[];var n=o(e);return f=t,n}}(),n.Compressor=X,n.DefaultsError=c,n.Dictionary=k,n.JS_Parse_Error=V,n.MAP=ne,n.OutputStream=Y,n.SourceMap=K,n.TreeTransformer=H,n.TreeWalker=T,n.base54=rn,n.defaults=l,n.mangle_properties=Q,n.merge=p,n.parse=q,n.push_uniq=v,n.string_template=y,n.tokenizer=$,n.is_identifier=M,n.SymbolDef=W,n.sys=Z,n.MOZ_SourceMap=ee,n.UglifyJS=te,n.array_to_hash=r,n.slice=function(e,t){return Array.prototype.slice.call(e,t||0)},n.characters=i,n.member=o,n.find_if=s,n.repeat_string=a,n.configure_error_stack=u,n.DefaultsError=c,n.defaults=l,n.merge=p,n.noop=h,n.return_false=f,n.return_true=d,n.return_this=m,n.return_null=g,n.MAP=ne,n.push_uniq=v,n.string_template=y,n.remove=b,n.mergeSort=_,n.set_difference=function(e,t){return e.filter(function(e){return t.indexOf(e)<0})},n.set_intersection=function(e,t){return e.filter(function(e){return t.indexOf(e)>=0})},n.makePredicate=x,n.all=w,n.Dictionary=k,n.HOP=E,n.first_in_statement=A,n.DEFNODE=C,n.AST_Token=re,n.AST_Node=ie,n.AST_Statement=oe,n.AST_Debugger=se,n.AST_Directive=ae,n.AST_SimpleStatement=ue,n.walk_body=S,n.AST_Block=ce,n.AST_BlockStatement=le,n.AST_EmptyStatement=pe,n.AST_StatementWithBody=he,n.AST_LabeledStatement=fe,n.AST_IterationStatement=de,n.AST_DWLoop=me,n.AST_Do=ge,n.AST_While=ve,n.AST_For=ye,n.AST_ForIn=be,n.AST_With=_e,n.AST_Scope=xe,n.AST_Toplevel=we,n.AST_Lambda=ke,n.AST_Accessor=Ee,n.AST_Function=Ae,n.AST_Defun=Ce,n.AST_Jump=Se,n.AST_Exit=Te,n.AST_Return=Oe,n.AST_Throw=Fe,n.AST_LoopControl=Be,n.AST_Break=De,n.AST_Continue=Le,n.AST_If=Ne,n.AST_Switch=Me,n.AST_SwitchBranch=Re,n.AST_Default=Pe,n.AST_Case=Ie,n.AST_Try=je,n.AST_Catch=Ve,n.AST_Finally=ze,n.AST_Definitions=Ue,n.AST_Var=$e,n.AST_Const=qe,n.AST_VarDef=He,n.AST_Call=We,n.AST_New=Ge,n.AST_Seq=Ye,n.AST_PropAccess=Xe,n.AST_Dot=Ke,n.AST_Sub=Je,n.AST_Unary=Qe,n.AST_UnaryPrefix=Ze,n.AST_UnaryPostfix=et,n.AST_Binary=tt,n.AST_Conditional=nt,n.AST_Assign=rt,n.AST_Array=it,n.AST_Object=ot,n.AST_ObjectProperty=st,n.AST_ObjectKeyVal=at,n.AST_ObjectSetter=ut,n.AST_ObjectGetter=ct,n.AST_Symbol=lt,n.AST_SymbolAccessor=pt,n.AST_SymbolDeclaration=ht,n.AST_SymbolVar=ft,n.AST_SymbolConst=dt,n.AST_SymbolFunarg=mt,n.AST_SymbolDefun=gt,n.AST_SymbolLambda=vt,n.AST_SymbolCatch=yt,n.AST_Label=bt,n.AST_SymbolRef=_t,n.AST_LabelRef=xt,n.AST_This=wt,n.AST_Constant=kt,n.AST_String=Et,n.AST_Number=At,n.AST_RegExp=Ct,n.AST_Atom=St,n.AST_Null=Tt,n.AST_NaN=Ot,n.AST_Undefined=Ft,n.AST_Hole=Bt,n.AST_Infinity=Dt,n.AST_Boolean=Lt,n.AST_False=Nt,n.AST_True=Mt,n.TreeWalker=T,n.KEYWORDS=Rt,n.KEYWORDS_ATOM=Pt,n.RESERVED_WORDS=It,n.KEYWORDS_BEFORE_EXPRESSION=jt,n.OPERATOR_CHARS=Vt,n.RE_HEX_NUMBER=zt,n.RE_OCT_NUMBER=Ut,n.OPERATORS=$t,n.WHITESPACE_CHARS=qt,n.NEWLINE_CHARS=Ht,n.PUNC_BEFORE_EXPRESSION=Wt,n.PUNC_CHARS=Gt,n.REGEXP_MODIFIERS=Yt,n.UNICODE=Xt,n.is_letter=O,n.is_digit=F,n.is_alphanumeric_char=B,n.is_unicode_digit=D,n.is_unicode_combining_mark=L,n.is_unicode_connector_punctuation=N,n.is_identifier=M,n.is_identifier_start=R,n.is_identifier_char=P,n.is_identifier_string=I,n.parse_js_number=j,n.JS_Parse_Error=V,n.js_error=z,n.is_token=U,n.EX_EOF=Kt,n.tokenizer=$,n.UNARY_PREFIX=Jt,n.UNARY_POSTFIX=Qt,n.ASSIGNMENT=Zt,n.PRECEDENCE=en,n.STATEMENTS_WITH_LABELS=tn,n.ATOMIC_START_TOKEN=nn,n.parse=q,n.TreeTransformer=H,n.SymbolDef=W,n.base54=rn,n.EXPECT_DIRECTIVE=on,n.is_some_comments=G,n.OutputStream=Y,n.Compressor=X,n.SourceMap=K,n.find_builtins=J,n.mangle_properties=Q,n.AST_Node.warn_function=function(e){"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(e)},n.minify=function(e,n){n=te.defaults(n,{compress:{},fromString:!1,inSourceMap:null,mangle:{},mangleProperties:!1,nameCache:null,outFileName:null,output:null,outSourceMap:null,parse:{},sourceMapInline:!1,sourceMapUrl:null,sourceRoot:null,spidermonkey:!1,warnings:!1}),te.base54.reset();var r=n.inSourceMap;"string"==typeof r&&"inline"!=r&&(r=JSON.parse(fs.readFileSync(r,"utf8")));var i=null,o={};if(n.spidermonkey){if("inline"==r)throw new Error("inline source map only works with built-in parser");i=te.AST_Node.from_mozilla_ast(e)}else{function s(e,t){var s=n.fromString?e:fs.readFileSync(e,"utf8");"inline"==r&&(r=read_source_map(s)),o[t]=s,i=te.parse(s,{filename:t,toplevel:i,bare_returns:n.parse?n.parse.bare_returns:void 0})}if(!n.fromString&&(e=te.simple_glob(e),"inline"==r&&e.length>1))throw new Error("inline source map only works with singular input");[].concat(e).forEach(function(e,t){if("string"==typeof e)s(e,n.fromString?t:e);else for(var r in e)s(e[r],r)})}if(n.wrap&&(i=i.wrap_commonjs(n.wrap,n.exportAll)),n.compress){var a={warnings:n.warnings};te.merge(a,n.compress),i.figure_out_scope(n.mangle);var u=te.Compressor(a);i=u.compress(i)}(n.mangleProperties||n.nameCache)&&(n.mangleProperties.cache=te.readNameCache(n.nameCache,"props"),i=te.mangle_properties(i,n.mangleProperties),te.writeNameCache(n.nameCache,"props",n.mangleProperties.cache)),n.mangle&&(i.figure_out_scope(n.mangle),i.compute_char_frequency(n.mangle),i.mangle_names(n.mangle));var c={max_line_len:32e3};if((n.outSourceMap||n.sourceMapInline)&&(c.source_map=te.SourceMap({file:n.outFileName||("string"==typeof n.outSourceMap?n.outSourceMap.replace(/\.map$/i,""):null),orig:r,root:n.sourceRoot}),n.sourceMapIncludeSources))for(var l in o)o.hasOwnProperty(l)&&c.source_map.get().setSourceContent(l,o[l]);n.output&&te.merge(c,n.output);var p=te.OutputStream(c);i.print(p);var h=c.source_map;h&&(h+="");return n.sourceMapInline?p+="\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new t(h).toString("base64"):n.outSourceMap&&"string"==typeof n.outSourceMap&&!1!==n.sourceMapUrl&&(p+="\n//# sourceMappingURL="+("string"==typeof n.sourceMapUrl?n.sourceMapUrl:n.outSourceMap)),{code:p+"",map:h}},n.describe_ast=function(){function e(n){t.print("AST_"+n.TYPE);var r=n.SELF_PROPS.filter(function(e){return!/^\$/.test(e)});r.length>0&&(t.space(),t.with_parens(function(){r.forEach(function(e,n){n&&t.space(),t.print(e)})})),n.documentation&&(t.space(),t.print_string(n.documentation)),n.SUBCLASSES.length>0&&(t.space(),t.with_block(function(){n.SUBCLASSES.forEach(function(n,r){t.indent(),e(n),t.newline()})}))}var t=te.OutputStream({beautify:!0});return e(te.AST_Node),t+""}}).call(this,e("buffer").Buffer)},{buffer:11,"source-map":145,util:152}],148:[function(e,t,n){"use strict";function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(e,t,n){if(e&&s.isObject(e)&&e instanceof r)return e;var i=new r;return i.parse(e,t,n),i}var o=e("punycode"),s=e("./util");n.parse=i,n.resolve=function(e,t){return i(e,!1,!0).resolve(t)},n.resolveObject=function(e,t){return e?i(e,!1,!0).resolveObject(t):t},n.format=function(e){return s.isString(e)&&(e=i(e)),e instanceof r?e.format():r.prototype.format.call(e)},n.Url=r;var a=/^([a-z0-9.+-]+:)/i,u=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),p=["'"].concat(l),h=["%","/","?",";","#"].concat(p),f=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,g={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=e("querystring");r.prototype.parse=function(e,t,n){if(!s.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var r=e.indexOf("?"),i=-1!==r&&r<e.indexOf("#")?"?":"#",u=e.split(i);u[0]=u[0].replace(/\\/g,"/");var l=e=u.join(i);if(l=l.trim(),!n&&1===e.split("#").length){var _=c.exec(l);if(_)return this.path=l,this.href=l,this.pathname=_[1],_[2]?(this.search=_[2],this.query=t?b.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var x=a.exec(l);if(x){var w=(x=x[0]).toLowerCase();this.protocol=w,l=l.substr(x.length)}if(n||x||l.match(/^\/\/[^@\/]+@[^@\/]+/)){var k="//"===l.substr(0,2);!k||x&&v[x]||(l=l.substr(2),this.slashes=!0)}if(!v[x]&&(k||x&&!y[x])){for(var E=-1,A=0;A<f.length;A++)-1!==(T=l.indexOf(f[A]))&&(-1===E||T<E)&&(E=T);var C,S;-1!==(S=-1===E?l.lastIndexOf("@"):l.lastIndexOf("@",E))&&(C=l.slice(0,S),l=l.slice(S+1),this.auth=decodeURIComponent(C)),E=-1;for(A=0;A<h.length;A++){var T=l.indexOf(h[A]);-1!==T&&(-1===E||T<E)&&(E=T)}-1===E&&(E=l.length),this.host=l.slice(0,E),l=l.slice(E),this.parseHost(),this.hostname=this.hostname||"";var O="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!O)for(var F=this.hostname.split(/\./),A=0,B=F.length;A<B;A++){var D=F[A];if(D&&!D.match(d)){for(var L="",N=0,M=D.length;N<M;N++)D.charCodeAt(N)>127?L+="x":L+=D[N];if(!L.match(d)){var R=F.slice(0,A),P=F.slice(A+1),I=D.match(m);I&&(R.push(I[1]),P.unshift(I[2])),P.length&&(l="/"+P.join(".")+l),this.hostname=R.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),O||(this.hostname=o.toASCII(this.hostname));var j=this.port?":"+this.port:"",V=this.hostname||"";this.host=V+j,this.href+=this.host,O&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==l[0]&&(l="/"+l))}if(!g[w])for(var A=0,B=p.length;A<B;A++){var z=p[A];if(-1!==l.indexOf(z)){var U=encodeURIComponent(z);U===z&&(U=escape(z)),l=l.split(z).join(U)}}var $=l.indexOf("#");-1!==$&&(this.hash=l.substr($),l=l.slice(0,$));var q=l.indexOf("?");if(-1!==q?(this.search=l.substr(q),this.query=l.substr(q+1),t&&(this.query=b.parse(this.query)),l=l.slice(0,q)):t&&(this.search="",this.query={}),l&&(this.pathname=l),y[w]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var j=this.pathname||"",H=this.search||"";this.path=j+H}return this.href=this.format(),this},r.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,o="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(o=b.stringify(this.query));var a=this.search||o&&"?"+o||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||y[t])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),n=n.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),a=a.replace("#","%23"),t+i+n+a+r},r.prototype.resolve=function(e){return this.resolveObject(i(e,!1,!0)).format()},r.prototype.resolveObject=function(e){if(s.isString(e)){var t=new r;t.parse(e,!1,!0),e=t}for(var n=new r,i=Object.keys(this),o=0;o<i.length;o++){var a=i[o];n[a]=this[a]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var u=Object.keys(e),c=0;c<u.length;c++){var l=u[c];"protocol"!==l&&(n[l]=e[l])}return y[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!y[e.protocol]){for(var p=Object.keys(e),h=0;h<p.length;h++){var f=p[h];n[f]=e[f]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||v[e.protocol])n.pathname=e.pathname;else{for(k=(e.pathname||"").split("/");k.length&&!(e.host=k.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==k[0]&&k.unshift(""),k.length<2&&k.unshift(""),n.pathname=k.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var d=n.pathname||"",m=n.search||"";n.path=d+m}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var g=n.pathname&&"/"===n.pathname.charAt(0),b=e.host||e.pathname&&"/"===e.pathname.charAt(0),_=b||g||n.host&&e.pathname,x=_,w=n.pathname&&n.pathname.split("/")||[],k=e.pathname&&e.pathname.split("/")||[],E=n.protocol&&!y[n.protocol];if(E&&(n.hostname="",n.port=null,n.host&&(""===w[0]?w[0]=n.host:w.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===k[0]?k[0]=e.host:k.unshift(e.host)),e.host=null),_=_&&(""===k[0]||""===w[0])),b)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,w=k;else if(k.length)w||(w=[]),w.pop(),w=w.concat(k),n.search=e.search,n.query=e.query;else if(!s.isNullOrUndefined(e.search))return E&&(n.hostname=n.host=w.shift(),(F=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=F.shift(),n.host=n.hostname=F.shift())),n.search=e.search,n.query=e.query,s.isNull(n.pathname)&&s.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n;if(!w.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var A=w.slice(-1)[0],C=(n.host||e.host||w.length>1)&&("."===A||".."===A)||""===A,S=0,T=w.length;T>=0;T--)"."===(A=w[T])?w.splice(T,1):".."===A?(w.splice(T,1),S++):S&&(w.splice(T,1),S--);if(!_&&!x)for(;S--;S)w.unshift("..");!_||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),C&&"/"!==w.join("/").substr(-1)&&w.push("");var O=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(E){n.hostname=n.host=O?"":w.length?w.shift():"";var F=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@");F&&(n.auth=F.shift(),n.host=n.hostname=F.shift())}return(_=_||n.host&&w.length)&&!O&&w.unshift(""),w.length?n.pathname=w.join("/"):(n.pathname=null,n.path=null),s.isNull(n.pathname)&&s.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var e=this.host,t=u.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},{"./util":149,punycode:131,querystring:134}],149:[function(e,t,n){"use strict";t.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},{}],150:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],151:[function(e,t,n){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],152:[function(e,t,n){(function(t,r){function i(e,t){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(t)?r.showHidden=t:t&&n._extend(r,t),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),u(r,e,r.depth)}function o(e,t){var n=i.styles[t];return n?"["+i.colors[n][0]+"m"+e+"["+i.colors[n][1]+"m":e}function s(e,t){return e}function a(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function u(e,t,r){if(e.customInspect&&t&&E(t.inspect)&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(r,e);return y(i)||(i=u(e,i,r)),i}var o=c(e,t);if(o)return o;var s=Object.keys(t),m=a(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(t)),k(t)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(t);if(0===s.length){if(E(t)){var g=t.name?": "+t.name:"";return e.stylize("[Function"+g+"]","special")}if(_(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(w(t))return e.stylize(Date.prototype.toString.call(t),"date");if(k(t))return l(t)}var v="",b=!1,x=["{","}"];if(d(t)&&(b=!0,x=["[","]"]),E(t)&&(v=" [Function"+(t.name?": "+t.name:"")+"]"),_(t)&&(v=" "+RegExp.prototype.toString.call(t)),w(t)&&(v=" "+Date.prototype.toUTCString.call(t)),k(t)&&(v=" "+l(t)),0===s.length&&(!b||0==t.length))return x[0]+v+x[1];if(r<0)return _(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var A;return A=b?p(e,t,r,m,s):s.map(function(n){return h(e,t,r,m,n,b)}),e.seen.pop(),f(A,v,x)}function c(e,t){if(b(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):m(t)?e.stylize(""+t,"boolean"):g(t)?e.stylize("null","null"):void 0}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,i){for(var o=[],s=0,a=t.length;s<a;++s)T(t,String(s))?o.push(h(e,t,n,r,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(h(e,t,n,r,i,!0))}),o}function h(e,t,n,r,i,o){var s,a,c;if((c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),T(r,i)||(s="["+i+"]"),a||(e.seen.indexOf(c.value)<0?(a=g(n)?u(e,c.value,null):u(e,c.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")):a=e.stylize("[Circular]","special")),b(s)){if(o&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+a}function f(e,t,n){var r=0;return e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function d(e){return Array.isArray(e)}function m(e){return"boolean"==typeof e}function g(e){return null===e}function v(e){return"number"==typeof e}function y(e){return"string"==typeof e}function b(e){return void 0===e}function _(e){return x(e)&&"[object RegExp]"===A(e)}function x(e){return"object"==typeof e&&null!==e}function w(e){return x(e)&&"[object Date]"===A(e)}function k(e){return x(e)&&("[object Error]"===A(e)||e instanceof Error)}function E(e){return"function"==typeof e}function A(e){return Object.prototype.toString.call(e)}function C(e){return e<10?"0"+e.toString(10):e.toString(10)}function S(){var e=new Date,t=[C(e.getHours()),C(e.getMinutes()),C(e.getSeconds())].join(":");return[e.getDate(),D[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var O=/%[sdj%]/g;n.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,o=r.length,s=String(e).replace(O,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),a=r[n];n<o;a=r[++n])g(a)||!x(a)?s+=" "+a:s+=" "+i(a);return s},n.deprecate=function(e,i){if(b(r.process))return function(){return n.deprecate(e,i).apply(this,arguments)};if(!0===t.noDeprecation)return e;var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),o=!0}return e.apply(this,arguments)}};var F,B={};n.debuglog=function(e){if(b(F)&&(F=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!B[e])if(new RegExp("\\b"+e+"\\b","i").test(F)){var r=t.pid;B[e]=function(){var t=n.format.apply(n,arguments);console.error("%s %d: %s",e,r,t)}}else B[e]=function(){};return B[e]},n.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=d,n.isBoolean=m,n.isNull=g,n.isNullOrUndefined=function(e){return null==e},n.isNumber=v,n.isString=y,n.isSymbol=function(e){return"symbol"==typeof e},n.isUndefined=b,n.isRegExp=_,n.isObject=x,n.isDate=w,n.isError=k,n.isFunction=E,n.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},n.isBuffer=e("./support/isBuffer");var D=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){console.log("%s - %s",S(),n.format.apply(n,arguments))},n.inherits=e("inherits"),n._extend=function(e,t){if(!t||!x(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":151,_process:31,inherits:150}],153:[function(e,t,n){t.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},{}],154:[function(e,t,n){"use strict";function r(e){return s.parse(e,{ecmaVersion:6,allowReturnOutsideFunction:!0})}function i(e,t){function n(t){return e.slice(t.start,t.end).join("")}function i(t,n){for(var r=t.start;r<t.end;r++)e[r]="";e[t.start]=n}var o,s=e,u=!1,c=r(e);if(e=e.split(""),1!==(o=c.body).length||"ExpressionStatement"!==(o=o[0]).type||"CallExpression"!==(o=o.expression).type||"MemberExpression"!==(o=o.callee).type||!1!==o.computed||"call"!==o.property.name||"FunctionExpression"!==(o=o.object).type)throw new Error("AST does not seem to represent a self-calling function");var l=o;return a.recursive(c,null,{Function:function(e,t,n){e===l&&n(e.body,t,"ScopeBody")},ReturnStatement:function(e){u=!0,i(e,"return {value: ("+(e.argument?n(e.argument):"undefined")+")};")}}),u?"var "+t+"="+e.join("")+";if ("+t+") return "+t+".value":s}var o=e("acorn-globals"),s=e("acorn"),a=e("acorn/dist/walk");t.exports=function(e,t,n){e+="",t+="",n=(n=n||[]).concat(o(e).map(function(e){return e.name}));var r=o(t).map(function(e){return e.name}).filter(function(e){return-1===n.indexOf(e)&&"undefined"!==e&&"this"!==e});if(0===r.length)return t;var s="",a="locals_for_with",u="result_of_with";if(/^[a-zA-Z0-9$_]+$/.test(e))a=e;else{for(;-1!=r.indexOf(a)||-1!=n.indexOf(a);)a+="_";s="var "+a+" = ("+e+")"}for(;-1!=r.indexOf(u)||-1!=n.indexOf(u);)u+="_";var c=r.map(function(e){return JSON.stringify(e)+" in "+a+"?"+a+"."+e+":typeof "+e+'!=="undefined"?'+e+":undefined"});return t="(function ("+r.join(", ")+") {"+t+"}.call(this"+c.map(function(e){return","+e}).join("")+"))",";"+s+";"+i(t,u)+";"}},{acorn:155,"acorn-globals":1,"acorn/dist/walk":156}],155:[function(e,t,n){arguments[4][14][0].apply(n,arguments)},{dup:14}],156:[function(e,t,n){arguments[4][15][0].apply(n,arguments)},{dup:15}],pug:[function(e,t,n){(function(t){"use strict";function r(e,t,n,r){return n.reduce(function(e,n){return n[r]?n[r](e,t):e},e)}function i(e,t){var n=e.filter(function(e){return e[t]});if(n.length>1)throw new Error("Two or more plugins all implement "+t+" method.");return n.length?n[0][t].bind(n[0]):null}function o(e,t){var o={};o[t.filename]=e;var s=[],a=t.plugins||[],g=h.string(e,{filename:t.filename,basedir:t.basedir,lex:function(e,t){var n={};return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.plugins=a.filter(function(e){return!!e.lex}).map(function(e){return e.lex}),r(c(e,n),t,a,"postLex")},parse:function(e,t){e=e.map(function(e){return"path"===e.type&&""===u.extname(e.val)?{type:"path",line:e.line,col:e.col,val:e.val+".pug"}:e}),e=r(e=l(e,t),t,a,"preParse");var n={};return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.plugins=a.filter(function(e){return!!e.parse}).map(function(e){return e.parse}),r(r(p(e,n),t,a,"postParse"),t,a,"preLoad")},resolve:function(e,n,r){var o=i(a,"resolve");return o?o(e,n,t):h.resolve(e,n,r)},read:function(e,n){s.push(e);var u,c=i(a,"read"),l=r(u=c?c(e,t):h.read(e,n),{filename:e},a,"preLex");return o[e]=l,l}});g=r(g=r(g,t,a,"postLoad"),t,a,"preFilters");var v={};Object.keys(n.filters).forEach(function(e){v[e]=n.filters[e]}),t.filters&&Object.keys(t.filters).forEach(function(e){v[e]=t.filters[e]}),g=r(g=r(g=f.handleFilters(g,v,t.filterOptions,t.filterAliases),t,a,"postFilters"),t,a,"preLink"),g=r(g=r(g=d(g),t,a,"postLink"),t,a,"preCodeGen");var y=m(g,{pretty:t.pretty,compileDebug:t.compileDebug,doctype:t.doctype,inlineRuntimeFunctions:t.inlineRuntimeFunctions,globals:t.globals,self:t.self,includeSources:!!t.includeSources&&o,templateName:t.templateName});return y=r(y,t,a,"postCodeGen"),t.debug&&console.error("\nCompiled Function:\n\n[90m%s[0m",y.replace(/^/gm,"  ")),{body:y,dependencies:s}}function s(e,t){var r=e.filename;if(e.cache&&n.cache[r])return n.cache[r];void 0===t&&(t=a.readFileSync(e.filename,"utf8"));var i=n.compile(t,e);return e.cache&&(n.cache[r]=i),i}var a=e("fs"),u=e("path"),c=e("pug-lexer"),l=e("pug-strip-comments"),p=e("pug-parser"),h=e("pug-load"),f=e("pug-filters"),d=e("pug-linker"),m=e("pug-code-gen"),g=e("pug-runtime"),v=e("pug-runtime/wrap");n.name="Pug",n.runtime=g,n.cache={},n.filters={},n.compile=function(e,t){var t=t||{},n=o(e=String(e),{compileDebug:!1!==t.compileDebug,filename:t.filename,basedir:t.basedir,pretty:t.pretty,doctype:t.doctype,inlineRuntimeFunctions:t.inlineRuntimeFunctions,globals:t.globals,self:t.self,includeSources:!0===t.compileDebug,debug:t.debug,templateName:"template",filters:t.filters,filterOptions:t.filterOptions,filterAliases:t.filterAliases,plugins:t.plugins}),r=t.inlineRuntimeFunctions?new Function("",n.body+";return template;")():v(n.body);return r.dependencies=n.dependencies,r},n.compileClientWithDependenciesTracked=function(e,t){var t=t||{},n=o(e=String(e),{compileDebug:t.compileDebug,filename:t.filename,basedir:t.basedir,pretty:t.pretty,doctype:t.doctype,inlineRuntimeFunctions:!1!==t.inlineRuntimeFunctions,globals:t.globals,self:t.self,includeSources:t.compileDebug,debug:t.debug,templateName:t.name||"template",filters:t.filters,filterOptions:t.filterOptions,filterAliases:t.filterAliases,plugins:t.plugins}),r=n.body;return t.module&&(!1===t.inlineRuntimeFunctions&&(r='var pug = require("pug-runtime");'+r),r+=" module.exports = "+(t.name||"template")+";"),{body:r,dependencies:n.dependencies}},n.compileClient=function(e,t){return n.compileClientWithDependenciesTracked(e,t).body},n.compileFile=function(e,t){return t=t||{},t.filename=e,s(t)},n.render=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),"function"==typeof r){var i;try{i=n.render(e,t)}catch(e){return r(e)}return r(null,i)}if((t=t||{}).cache&&!t.filename)throw new Error('the "filename" option is required for caching');return s(t,e)(t)},n.renderFile=function(e,t,r){if("function"==typeof t&&(r=t,t=void 0),"function"==typeof r){var i;try{i=n.renderFile(e,t)}catch(e){return r(e)}return r(null,i)}return t=t||{},t.filename=e,s(t)(t)},n.compileFileClient=function(e,t){var r=e+":client";if(t=t||{},t.filename=e,t.cache&&n.cache[r])return n.cache[r];var i=a.readFileSync(t.filename,"utf8"),o=n.compileClient(i,t);return t.cache&&(n.cache[r]=o),o},n.__express=function(e,r,i){void 0==r.compileDebug&&"production"===t.env.NODE_ENV&&(r.compileDebug=!1),n.renderFile(e,r,i)}}).call(this,e("_process"))},{_process:31,fs:9,path:30,"pug-code-gen":41,"pug-filters":43,"pug-lexer":130,"pug-linker":118,"pug-load":119,"pug-parser":120,"pug-runtime":123,"pug-runtime/wrap":127,"pug-strip-comments":128}]},{},[]);
/*****/
window.pug=require('pug')
//https://pugjs.org/js/pug.js
//https://codepen.io/gnjo/pen/KLprJz.js

/*****/
;(function(root){
let jsConsole={
 formatArray: function(e) {
  "use strict";
  for (var t = "", n = 0, r = e.length; n < r; n++) "string" == typeof e[n] ? t += '"' + e[n] + '"' : Array.isArray(e[n]) ? (t += "Array [", t += this.formatArray(e[n]), t += "]") : t += this.formatOutput(e[n]), n < e.length - 1 && (t += ", ");
  return t
 },
 formatObject: function(e) {
  "use strict";
  var t = e.constructor.name;
  if ("String" === t) return `String { "${e.valueOf()}" }`;
  if (t.match(/^(ArrayBuffer|SharedArrayBuffer|DataView)$/)) return t + " {}";
  if (t.match(/^(Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array)$/)) return e.length > 0 ? t + " [" + this.formatArray(e) + "]" : t + " []";
  if ("Symbol" === t && void 0 !== e) return e.toString();
  if ("Object" === t) {
   var n = "",
       r = !0;
   for (var i in e) e.hasOwnProperty(i) && (r ? r = !1 : n += ", ", n = n + i + ": " + this.formatOutput(e[i]));
   return t + " { " + n + " }"
  }
  return e
 },
 formatOutput: function(e) {
  "use strict";
  return void 0 === e || null === e || "boolean" == typeof e ? String(e) : "number" == typeof e ? Object.is(e, -0) ? "-0" : String(e) : "string" == typeof e ? '"' + e + '"' : Array.isArray(e) ? "Array [" + this.formatArray(e) + "]" : this.formatObject(e)
 },
 writeOutput: function(e) {
  "use strict";
  let r="> " + e
  jsConsole.logbuffer.push(r)
  /*
  var t = document.querySelector("#console code"),
      n = t.textContent,
      r = "> " + e + "\n";
  t.textContent = n + r
  */
 }
}
jsConsole.logbuffer=[];
jsConsole.errorbuffer=[];
let logdump= function() {
 "use strict";
 var t = jsConsole,//e("./console-utils"),
 n = console.log,
  r = console.error;
 console.error = function(e) {
  t.writeOutput(e), r.apply(console, arguments)
 }, console.log = function() {
  for (var e = [], r = 0, i = arguments.length; r < i; r++) {
   var o = t.formatOutput(arguments[r]);
   e.push(o)
  }
  var a = e.join(" ");
  t.writeOutput(a), n.apply(console, arguments)
 }
}
logdump();
root.jsCode=function(code,caller){
 try {
  jsConsole.logbuffer=[];
  jsConsole.errorbuffer=[];  
  new Function(code)()
  let log=Array.from(jsConsole.logbuffer)
  ,error=Array.from(jsConsole.errorbuffer)
  caller({log:log,error:error})
  jsConsole.logbuffer=[];
  jsConsole.errorbuffer=[];
 }
 catch (e) {
  let str="Error: " + e.message
  jsConsole.errorbuffer.push(str)
  let log=Array.from(jsConsole.logbuffer)
  ,error=Array.from(jsConsole.errorbuffer)
  caller({log:log,error:error})
  jsConsole.logbuffer=[];
  jsConsole.errorbuffer=[];
 }
  
 }
 /*usage
 jsCode(code,onload)//onload is caller // d.log d.error 
 */
})(this);

/*****/
;(function(root){
 'use strict';

 let doJs=(_code,caller)=>{
  let code=_code
  jsCode(_code,(d)=>{
   let error=(d.error.length===0)?false:true
   ,obj=d
   ,message=[d.log,d.error].reduce((a,b)=>a.concat(b),[]).join("\n")||""
   caller({message:message,error:error,obj:obj})   
  })
 }
 let doPug=(_code,caller)=>{
  let code=_code
  ;
  pug.render(code,{compileDebug:true},(err)=>{
   let error=(err)?true:false
   ,html=(err)?void 0:pug.render(code,{pretty:true})
   ,obj={html:html||''}
   ,message=err||''
   caller({message:message,error:error,obj:obj})
  })
 }


 let cssoption={
  "box-model":true
  ,"display-property-grouping":true
  , "duplicate-properties":true
  , "empty-rules":true
  , "known-properties":true
 }
 let doCss=(_code,caller)=>{
  let code=_code
  ,results = CSSLint.verify(code,cssoption)
  ,messages = results.messages
  ,one =messages[0]
  ;
  let error=true
  ,obj=results
  ,message=void 0
  if(messages.length===0){
   error=false;
   message="";
  }
  else{
   error=true;
   message=`"${one.evidence}"<--${one.message}`
  }
  caller({message:message,error:error,obj:obj})
  ;
 }  


 let o={}
 o.ec=(code,mode,caller)=>{
  if(!o[mode||''])return console.warn('Dont accept mode',mode)
  if(!caller)return console.warn('need caller',caller)  
  ;
  let def={code:code,mode:mode,error:true,message:void 0,obj:void 0}
  let me=o;
  o[mode](me,def,caller)
 }
 o.pug=(me,d,caller)=>{
  let onload=(ret)=>{
   d.message=ret.message
   d.error=ret.error
   d.obj=ret.obj
   caller(d)   
  }
  doPug(d.code,onload)
 }
 o.js=(me,d,caller)=>{
  let onload=(ret)=>{
   d.message=ret.message   
   d.error=ret.error
   d.obj=ret.obj
   caller(d)   
  }
  doJs(d.code,onload)
 }
 o.css=(me,d,caller)=>{
  let onload=(ret)=>{
   d.message=ret.message   
   d.error=ret.error
   d.obj=ret.obj
   caller(d)   
  }
  doCss(d.code,onload)
 }

 root.errorConsole = o;
 root.ec=o.ec;
})(this);

/*
let css='body{width:3rem}'
ec(css,'css',(d)=>{
 console.log(d)
})

let pugt='head \n script(src="https://gnjo.github.io/use.js")\n a. r '
ec(pugt,'pug',(d)=>{
 console.log(d)
})

let jsc="console.log(1);function y(){console.log(2)};y()"
ec(jsc,'js',(d)=>{
 console.log(d)
})
*/
