$(function () {

    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,

        init = function () {
            bindEvents();
            if (validIndex(openedIndex))
                animateItem($mainMenuItems.eq(openedIndex), true, 1000);
        },

        bindEvents = function () {
            $mainMenuItems.children(".images").click(function () {
                var newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);
            });

            $(".button").hover(
                function () {
                    $(this).addClass("hovered");
                },
                function () {
                    $(this).removeClass("hovered");
                }
            );

            $(".button").click(function () {
                var newIndex = $(this).index();
                checkAndAnimateItem(newIndex);
            });

        },

        validIndex = function (indexToCkeck) {
            return (indexToCkeck >= 0) && (indexToCkeck < totalMainMenuItems);
        },

        animateItem = function ($item, toOpen, speed) {

            var $colorImage = $item.find(".color"),
                /* Expression ? if true == Valeur1 if false == Valeur 2  Expression ? Valeur1: Valeur2*/
                itemParam = toOpen ? {
                    width: "420px"
                } : {
                    width: "140px"
                },
                colorImageParam = toOpen ? {
                    left: "0px"
                } : {
                    left: "140px"
                };
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
        },

        checkAndAnimateItem = function (indexToCkeckAndAnimate) {
            if (openedIndex === indexToCkeckAndAnimate) {
                animateItem($mainMenuItems.eq(indexToCkeckAndAnimate), false, 250);
                openedIndex = -1;
            } else {
                if (validIndex(indexToCkeckAndAnimate)) {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCkeckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }

        };

    init();

});
