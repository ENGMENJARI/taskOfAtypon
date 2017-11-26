$(document).ready(function() {

    $(".aside-header a").click();
    $(".ui-content").removeClass('no-padding');
    var $wrapperChildren, $tabs, $currentTab, $tabLen, $tabIndex, $wrapperChildrenMob, $tabsMob;
    $tabs = $('#sidbar-tabs li');
    $wrapperChildren = $('#all-wrappers').children();
    $tabsMob = $('#sidbar-tabs.mob li');
    $wrapperChildrenMob = $('#all-wrappers-mob').children();

    function showHideTabs(tabs, $wrapperChildren) {
        $($tabs).bind('click', function(e) {
            $tabLen = $tabs.length;
            $currentTab = event.currentTarget;
            $tabIndex = $($currentTab).index();

            $tabs.removeClass('active');
            $($currentTab).addClass('active');
            if ($($wrapperChildren.get($tabIndex)).hasClass('hidden')) {
                $wrapperChildren.addClass('hidden');
                $($wrapperChildren.get($tabIndex)).removeClass('hidden');
            }
        });
    }

    $('#sidbar-tabs.hidden-on-md li').bind('click', function(e) {
        $(".logo-container").addClass('hidden');
    });
    $('.aside-header a').bind('click', function(e) {
        $(".logo-container").removeClass('hidden');
    });
    showHideTabs($tabs, $wrapperChildren);
    showHideTabs($tabsMob, $wrapperChildrenMob);

});
