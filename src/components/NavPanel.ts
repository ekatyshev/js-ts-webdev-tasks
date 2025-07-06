import { type NavPanelConfigItem } from '../types';

const navPanelConfig: NavPanelConfigItem[] = [
    {
        label: 'Products',
        path: '/products',
    },
]

export function NavPanel(): HTMLElement {
    const navPanel = document.createElement('nav')
    const itemList = document.createElement('ul')

    navPanelConfig.forEach(item => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `<a href="${item.path}">${item.label}</a>`
        itemList.append(listItem)
    })

    navPanel.append(itemList)

    return navPanel
}