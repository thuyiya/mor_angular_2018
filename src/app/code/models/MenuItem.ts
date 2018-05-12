/**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
export declare abstract class MenuItem {
    /**
     * Item Title
     * @type {string}
     */
    title: string;
    /**
     * Item relative link (for routerLink)
     * @type {string}
     */
    link?: string;
    /**
     * Item URL (absolute)
     * @type {string}
     */
    url?: string;
    /**
     * Icon class name
     * @type {string}
     */
    icon?: string;
    /**
     * Expanded by defaul
     * @type {boolean}
     */
    expanded?: boolean;
    /**
     * Children items
     * @type {List<NbMenuItem>}
     */
    children?: MenuItem[];
    /**
     * HTML Link target
     * @type {string}
     */
    target?: string;
    /**
     * Hidden Item
     * @type {boolean}
     */
    hidden?: boolean;
    /**
     * Item is selected when partly or fully equal to the current url
     * @type {string}
     */
    pathMatch?: string;
    /**
     * Where this is a home item
     * @type {boolean}
     */
    home?: boolean;
    /**
     * Whether the item is just a group (non-clickable)
     * @type {boolean}
     */
    group?: boolean;
    parent?: MenuItem;
    selected?: boolean;
    data?: any;
    fragment?: string;
}
