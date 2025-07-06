export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    thumbnail: string;
}

export interface NavPanelConfigItem {
    label: string,
    path: string,
}