"use strict";
var styleSwitcher = {
    initialized: false,
    options: {
        color: 'color',
        layout: 'wide',
        pattern: 'square_bg',
        direction: 'ltr'
    },
    colors: [
        {
            'Hex': '#007dd2',
            'colorName': 'color'
        },
        {
            'Hex': '#ec005f',
            'colorName': 'pink-1'
        },
        {
            'Hex': '#d770ad',
            'colorName': 'pink-2'
        },
        {
            'Hex': '#d80018',
            'colorName': 'red-1'
        },
        {
            'Hex': '#ec1240',
            'colorName': 'red-2'
        },
        {
            'Hex': '#5687bf',
            'colorName': 'blue-1'
        },
        {
            'Hex': '#22A7F0',
            'colorName': 'blue-2'
        },
        {
            'Hex': '#06d0d7',
            'colorName': 'blue-3'
        },
        {
            'Hex': '#2e9063',
            'colorName': 'green-1'
        },
        {
            'Hex': '#1abc9c',
            'colorName': 'green-2'
        },
        {
            'Hex': '#ff9900',
            'colorName': 'yellow-1'
        },
        {
            'Hex': '#e3c552',
            'colorName': 'yellow-2'
        },
        {
            'Hex': '#e47911',
            'colorName': 'orange-1'
        },
        {
            'Hex': '#e48f4c',
            'colorName': 'orange-2'
        },
        {
            'Hex': '#563d7c',
            'colorName': 'purple-1'
        },
        {
            'Hex': '#685ab1',
            'colorName': 'purple-2'
        },
        {
            'Hex': '#696969',
            'colorName': 'gray'
        },
        {
            'Hex': '#b8a279',
            'colorName': 'cumin'
        }
    ],
    initialize: function () {
        var $this = this;
        if (this.initialized)
            return;

        $("head").append($('<link rel="stylesheet">').attr("href", "assets/plugins/style-switcher/style-switcher.css"));
        $this.build();
        $this.events();

        if ($.cookie("skin") != null) {
            $this.setColor($.cookie("skin"));
        } else {
            $this.container.find("ul[data-type=colors] li:first a").click();
        }

        if ($.cookie("initialized") == null) {
            $this.container.find("h4 a").click();
            $.cookie("initialized", true);
        }

        if ($.cookie("layout") != null) {
            $this.setLayout($.cookie("layout"));
        }

//        if ($.cookie('direction') != null) {
//            $this.setDirection($.cookie('direction'));
//        } else {
//            $this.setDirection(themeConfig.options.direction);
//        }

        if ($.cookie("pattern") != null) {
            $this.setPattern($.cookie("pattern"));
            $this.updatePatternColor();
        }

        $this.initialized = true;
    },
    build: function () {
        var $this = this;
        var switcher = $("<div />")
                .attr("id", "styleSwitcher")
                .addClass("style-switcher visible-lg")
                .append($("<h4 />").html("Style Selector")
                        .append($("<a />")
                                .attr("href", "#")
                                .append($("<i />")
                                        .addClass("fa fa-cog"))), $("<div />")
                        .addClass("style-switcher-wrap")
                        .append($()
                                .html(''), $('<ul />')
                                .addClass('options reset-settings')
                                .attr('data-type', 'reset'))
                        .append($("<h5 />")
                                .html("Theme Color"), $("<ul />")
                                .addClass("options colors")
                                .attr("data-type", "colors"))
                        .append($("<h5 />")
                                .html("Layout"), $("<ul />")
                                .addClass("options layout")
                                .attr("data-type", "layouts"))
                        .append($('<h5 />')
                                .addClass('theme-config-title')
                                .html('Direction'), $('<ul />')
                                .addClass('options directions')
                                .attr('data-type', 'directions'))
                        .append($("<h5 />")
                                .html("Pattern <small>(Boxed Layout)</small>"), $("<ul />")
                                .addClass("options pattern")
                                .attr("data-type", "patterns"))
                        );
        $("body").append(switcher);
        this.container = $("#styleSwitcher");

        //var

        var layouts = [
            {
                "Hex": "#323232",
                "colorName": "wide"
            },
            {
                "Hex": "#323232",
                "colorName": "boxed"
            }
        ];

        var directions = [
            {
                "Hex": "#323232",
                "colorName": "ltr"
            },
            {
                "Hex": "#323232",
                "colorName": "rtl"
            }
        ];

        var patternsBgHex = "#323232";
        setPatternsBgHex();
        function setPatternsBgHex() {
            $(styleSwitcher.colors).each(function (i) {
                if ($.cookie("skin") == styleSwitcher.colors[i].colorName) {
                    patternsBgHex = styleSwitcher.colors[i].Hex;
                }
            });
        }

        var patterns = [
            /*
             {
             "Hex": patternsBgHex,
             "patternImage": "square_bg",
             "patternImageName": ""
             },
             */
            {
                "Hex": patternsBgHex,
                "patternImage": "black_scales",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "dark_exa",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "escheresque_ste",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "tactile_noise",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "zwartevilt",
                "patternImageName": "" /**/
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "paven",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "ps_neutral",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "shinecaro",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "dimension",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "silver_scales",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "diagonal_waves",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "rip_jobs",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "sativa",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "sprinkles",
                "patternImageName": ""
            },
            {
                "Hex": patternsBgHex,
                "patternImage": "triangular",
                "patternImageName": ""
            }
        ];


        var themeConfigReset = this.container.find('ul[data-type=reset]');
        var themeResetLink = $('<li />').append(
                $('<a />')
                .attr({'href': '#', 'title': 'Reset settings'})
                .html('Reset settings').addClass('reset-settings-link')
                );
        themeConfigReset.append(themeResetLink);
        themeConfigReset.find('a').click(function (e) {
            e.preventDefault();
            $this.reset();
        });

        var colorList = this.container.find("ul[data-type=colors]");
        $.each(styleSwitcher.colors, function (i, value) {
            var color = $("<li />").append($("<a />").css("background-color", styleSwitcher.colors[i].Hex).attr({
                "data-color-hex": styleSwitcher.colors[i].Hex,
                "data-color-name": styleSwitcher.colors[i].colorName,
                "href": "#",
                "title": styleSwitcher.colors[i].colorName
            }).html(''));
            colorList.append(color);
        });

        var layoutList = this.container.find("ul[data-type=layouts]");
        $.each(layouts, function (i, value) {
            var layout = $("<li />").append($("<a />").css("background-color", layouts[i].Hex).attr({
                "data-color-hex": layouts[i].Hex,
                "data-color-name": layouts[i].colorName,
                "href": "#",
                "title": layouts[i].colorName
            }).html(layouts[i].colorName));
            layoutList.append(layout);
        });

        var directionList = this.container.find("ul[data-type=directions]");
        $.each(directions, function (i, value) {
            var direction = $("<li />").append($("<a />").css("background-color", directions[i].Hex).attr({
                "data-color-hex": directions[i].Hex,
                "data-color-name": directions[i].colorName,
                "href": "#",
                "title": directions[i].colorName
            }).html(directions[i].colorName));
            directionList.append(direction);
        });

        var patternList = this.container.find("ul[data-type=patterns]");
        $.each(patterns, function (i, value) {
            var pattern = $("<li />").append($("<a />")
                    .css({
                        "background": 'url("assets/img/patterns/' + patterns[i].patternImage + '.png") repeat 50% 50%' + patterns[i].Hex
                    })
                    .attr({
                        "data-color-hex": patterns[i].Hex,
                        "data-image": patterns[i].patternImage,
                        "data-image-name": patterns[i].patternImageName,
                        "href": "#",
                        "title": patterns[i].patternImageName
                    }).html(patterns[i].patternImageName));
            patternList.append(pattern);
        });

        colorList.find("a").click(function (e) {
            e.preventDefault();
            $this.setColor($(this).attr("data-color-name"));
        });

        layoutList.find("a").click(function (e) {
            e.preventDefault();
            $this.setLayout($(this).attr("data-color-name"));            
        });

        directionList.find("a").click(function (e) {
            e.preventDefault();
            $this.setDirection($(this).attr("data-color-name"));
        });

        patternList.find("a").click(function (e) {
            e.preventDefault();
            $this.setPattern($(this).attr("data-image"));
        });

        $this.container.find("a.reset").click(function (e) {
            e.preventDefault();
            $this.reset();
        });
    },
    events: function () {
        var $this = this;
        $this.container.find("h4 a").click(function (e) {
            e.preventDefault();
            if ($this.container.hasClass("active")) {
                $this.container.animate({
                    right: "-" + $this.container.width() + "px"
                }, 300).removeClass("active");
            } else {
                $this.container.animate({
                    right: "0"
                }, 300).addClass("active");
            }
        });
        if ($.cookie("showSwitcher") != null) {
            $this.container.find("h4 a").click();
            $.removeCookie("showSwitcher");
        }
    },
    setColor: function (color) {
        var $this = this;
        var $colorSwitcherLink = jQuery('#css-switcher-link');
        if (this.isChanging) {
            return false;
        }
        $colorSwitcherLink.attr('href', 'assets/css/multicolors/theme-' + color + '.css');
        $.cookie("skin", color);
        $this.updatePatternColor();
    },
    setLayout: function (layout) {
        //$('body').removeAttr('class');
        $('body').removeClass('wide').removeClass('boxed');
        $('body').addClass(layout);
        $.cookie("layout", layout);
    },
    setDirection: function (direction) {
        $('body').removeClass('ltr').removeClass('rtl');
        $('body').addClass(direction);
        $.cookie("direction", direction);
    },
    setPattern: function (pattern) {
        $('body.boxed').css({"background-image": 'url("assets/img/patterns/' + pattern + '.png")'});
        $.cookie("pattern", pattern);
    },
    updatePatternColor: function () {
        $('body.boxed').css({"background-image": 'url("assets/img/patterns/' + $.cookie("pattern") + '.png")'});
        var patternListToUpdate = this.container.find("ul[data-type=patterns] li a");
        var patternsBgHex = "";
        $(styleSwitcher.colors).each(function (i) {
            if ($.cookie("skin") == styleSwitcher.colors[i].colorName) {
                patternsBgHex = styleSwitcher.colors[i].Hex;
            }
        });
        patternListToUpdate.each(function () {
            $(this).css({"background-color": patternsBgHex});
            //$(this).css({"background-image": 'url("assets/img/patterns/' + $(this).attr('data-image') + '_' + $.cookie("skin") + '.png")'});
            $(this).css({"background-image": 'url("assets/img/patterns/' + $(this).attr('data-image') + '.png")'});
        });
    },
    reset: function () {
        $.removeCookie("skin");
        $.removeCookie("layout");
        $.removeCookie("pattern");
        $.removeCookie("color");
        $.cookie("showSwitcher", true);
        window.location.reload();
    }
  
};
styleSwitcher.initialize();
