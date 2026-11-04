/*
  作者：杨祺轩
  建立时间：2026-11-04 13:41:44
  使用大模型：GLM-5.3-Flash
  功能名称：可复用的 tab 选项卡切换
*/

/**
 * 初始化一组选项卡（可复用函数）。
 * 传入任意一个包含 .yqx_tab_item 和 .yqx_tab_panel 的容器，
 * 即可让该容器内的选项卡获得切换能力，页面中可以使用多组。
 * @param {HTMLElement} container 选项卡最外层容器
 */
function yqx_initTabs(container) {
    // 取出当前容器内的全部选项卡按钮和对应面板
    var yqx_tabs = container.querySelectorAll('.yqx_tab_item');
    var yqx_panels = container.querySelectorAll('.yqx_tab_panel');

    /**
     * 该函数用于处理选项卡的点击切换：
     * 先清除所有选项卡的选中状态，再设置当前元素的选中状态。
     * @param {Event} e 点击事件对象
     */
    function yqx_switchTab(e) {
        // 当前被点击的选项卡按钮
        var yqx_current = e.currentTarget;
        // 通过位置关系找到对应的显示面板
        var yqx_index = Array.prototype.indexOf.call(yqx_tabs, yqx_current);

        // 第一步：先清除所有选项卡的选中状态（按钮和面板全部还原）
        for (var i = 0; i < yqx_tabs.length; i++) {
            yqx_tabs[i].classList.remove('yqx_active');
            yqx_panels[i].classList.remove('yqx_show');
        }

        // 第二步：再设置当前元素的选中状态（只高亮被点击的按钮，显示对应面板）
        yqx_current.classList.add('yqx_active');
        yqx_panels[yqx_index].classList.add('yqx_show');
    }

    // 为每个选项卡按钮绑定监听事件
    for (var i = 0; i < yqx_tabs.length; i++) {
        yqx_tabs[i].addEventListener('click', yqx_switchTab);
    }
}

/**
 * 该函数用于页面加载完成后，自动初始化页面中所有的选项卡组件。
 * 只要按类名规范写好结构，无需改动这里就能新增任意多组选项卡。
 */
document.addEventListener('DOMContentLoaded', function () {
    // 查找页面中全部的选项卡组件，逐组初始化
    var yqx_groups = document.querySelectorAll('.yqx_tabs');
    for (var i = 0; i < yqx_groups.length; i++) {
        yqx_initTabs(yqx_groups[i]);
    }
});
