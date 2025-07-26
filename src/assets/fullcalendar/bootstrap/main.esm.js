import { createPlugin, Theme } from '@fullcalendar/core';

var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var BootstrapTheme = /** @class */ (function (_super) {
    __extends(BootstrapTheme, _super);
    function BootstrapTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BootstrapTheme;
}(Theme));
BootstrapTheme.prototype.classes = {
    widget: 'fc-bootstrap',
    tableGrid: 'table-bordered',
    tableList: 'table',
    tableListHeading: 'table-active',
    buttonGroup: 'btn-group',
    button: 'btn btn-primary',
    buttonActive: 'active',
    today: 'alert alert-info',
    popover: 'card card-primary',
    popoverHeader: 'card-header',
    popoverContent: 'card-body',
    // day grid
    // for left/right border color when border is inset from edges (all-day in timeGrid view)
    // avoid `table` class b/c don't want margins/padding/structure. only border color.
    headerRow: 'table-bordered',
    dayRow: 'table-bordered',
    // list view
    listView: 'card card-primary'
};
BootstrapTheme.prototype.baseIconClass = 'fa';
BootstrapTheme.prototype.iconClasses = {
    close: 'fa-times',
    prev: 'fa-chevron-left',
    next: 'fa-chevron-right',
    prevYear: 'fa-angle-double-left',
    nextYear: 'fa-angle-double-right'
};
BootstrapTheme.prototype.iconOverrideOption = 'bootstrapFontAwesome';
BootstrapTheme.prototype.iconOverrideCustomButtonOption = 'bootstrapFontAwesome';
BootstrapTheme.prototype.iconOverridePrefix = 'fa-';
var main = createPlugin({
    themeClasses: {
        bootstrap: BootstrapTheme
    }
});

export default main;
export { BootstrapTheme };
