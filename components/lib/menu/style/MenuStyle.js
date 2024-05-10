import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-menu {
    padding: ${dt('menu.padding')};
    background: ${dt('menu.background')};
    color: ${dt('menu.color')};
    border: 1px solid ${dt('menu.border.color')};
    border-radius: ${dt('menu.border.radius')};
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${dt('menu.gap')};
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${dt('menu.item.padding')};
    user-select: none;
    gap: ${dt('menu.item.gap')};
}

.p-menu-item-content {
    transition: background ${dt('transition.duration')}, color ${dt('transition.duration')};
    border-radius: ${dt('menu.item.border.radius')};
    color: ${dt('menu.item.color')};
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: ${dt('menu.item.icon.color')};
}

.p-menu-item.p-focus .p-menu-item-content {
    color: ${dt('menu.item.focus.color')};
    background: ${dt('menu.item.focus.background')};
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: ${dt('menu.item.icon.focus.color')};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: ${dt('menu.item.focus.color')};
    background: ${dt('menu.item.focus.background')};
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: ${dt('menu.item.icon.focus.color')};
}

.p-menu-overlay {
    box-shadow: ${dt('menu.shadow')};
}

.p-menu-submenu-item {
    background: ${dt('menu.submenu.label.background')};
    padding: ${dt('menu.submenu.label.padding')};
    color: ${dt('menu.submenu.label.color')};
    font-weight: ${dt('menu.submenu.label.font.weight')};
}

.p-menu-separator {
    border-top: 1px solid ${dt('menu.separator.border.color')};
}
`;

const classes = {
    root: ({ props }) => [
        'p-menu p-component',
        {
            'p-menu-overlay': props.popup
        }
    ],
    start: 'p-menu-start',
    list: 'p-menu-list',
    submenuItem: 'p-menu-submenu-item',
    separator: 'p-menu-separator',
    end: 'p-menu-end',
    item: ({ instance }) => [
        'p-menu-item',
        {
            'p-focus': instance.id === instance.focusedOptionId,
            'p-disabled': instance.disabled()
        }
    ],
    itemContent: 'p-menu-item-content',
    itemLink: 'p-menu-item-link',
    itemIcon: 'p-menu-item-icon',
    itemLabel: 'p-menu-item-label'
};

export default BaseStyle.extend({
    name: 'menu',
    theme,
    classes
});
