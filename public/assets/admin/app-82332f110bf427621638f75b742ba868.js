jQuery(document).ready(function(t){function o(o){var n=o.closest("dl").find("dd.active"),d=o.children("a").attr("href")+"Tab";d=d.replace(/^.+#/,"#"),d=d.replace(/^.+#/,"#"),n.removeClass("active"),o.addClass("active"),t(d).closest(".tabs-content").children("li").hide(),t(d).css("display","block")}t("dl.tabs dd a").on("click.fndtn",function(){o(t(this).parent("dd"))}),window.location.hash&&(o(t('a[href="'+window.location.hash+'"]')),t.foundation.customForms.appendCustomMarkup()),t(".alert-box").delegate("a.close","click",function(o){o.preventDefault(),t(this).closest(".alert-box").fadeOut(function(){t(this).remove()})}),t("input, textarea").placeholder(),t(this).tooltips();var n=!1;Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)?(t(".nav-bar a.flyout-toggle").on("click.fndtn touchstart.fndtn",function(o){o.preventDefault();var d=t(this).siblings(".flyout").first();n===!1&&(t(".nav-bar .flyout").not(d).slideUp(500),d.slideToggle(500,function(){n=!1})),n=!0}),t(".nav-bar>li.has-flyout").addClass("is-touch")):t(".nav-bar>li.has-flyout").hover(function(){t(this).children(".flyout").show()},function(){t(this).children(".flyout").hide()}),t(".button.dropdown > ul").addClass("no-hover"),t(".button.dropdown").on("click.fndtn touchstart.fndtn",function(t){t.stopPropagation()}),t(".button.dropdown.split span").on("click.fndtn touchstart.fndtn",function(o){o.preventDefault(),t(".button.dropdown").not(t(this).parent()).children("ul").removeClass("show-dropdown"),t(this).siblings("ul").toggleClass("show-dropdown")}),t(".button.dropdown").not(".split").on("click.fndtn touchstart.fndtn",function(o){o.preventDefault(),t(".button.dropdown").not(this).children("ul").removeClass("show-dropdown"),t(this).children("ul").toggleClass("show-dropdown")}),t("body, html").on("click.fndtn touchstart.fndtn",function(){t(".button.dropdown ul").removeClass("show-dropdown")});var d=t(".button.dropdown:not(.large):not(.small):not(.tiny)").outerHeight()-1,l=t(".button.large.dropdown").outerHeight()-1,s=t(".button.small.dropdown").outerHeight()-1,e=t(".button.tiny.dropdown").outerHeight()-1;t(".button.dropdown:not(.large):not(.small):not(.tiny) > ul").css("top",d),t(".button.dropdown.large > ul").css("top",l),t(".button.dropdown.small > ul").css("top",s),t(".button.dropdown.tiny > ul").css("top",e)});