interface IAward {
    _id: string
    name: string
    type: string
    point: number
    isDelete: boolean
}

const awards: Array<IAward> = [
    {
        _id: "1",
        name: "Gift Card IDR 1.000.000",
        type: 'voucher',
        point: 500000,
        isDelete: false
    },
    {
        _id: "2",
        name: "Gift Card IDR 1.000.000",
        type: 'voucher',
        point: 100000,
        isDelete: false
    },
    {
        _id: "3",
        name: "Gift Card IDR 1.000.000",
        type: 'voucher',
        point: 600000,
        isDelete: false
    },
    {
        _id: "4",
        name: "Gift Card IDR 1.000.000",
        type: 'voucher',
        point: 1000000,
        isDelete: false
    },
    {
        _id: "5",
        name: "Gift Card IDR 1.000.000",
        type: 'voucher',
        point: 800000,
        isDelete: false
    },
    {
        _id: "6",
        name: "Gift Card IDR 1.000.000",
        type: 'product',
        point: 500000,
        isDelete: false
    },
    {
        _id: "7",
        name: "Gift Card IDR 1.000.000",
        type: 'voucher',
        point: 700000,
        isDelete: false
    },
    {
        _id: "8",
        name: "Gift Card IDR 1.000.000",
        type: 'voucher',
        point: 900000,
        isDelete: false
    },
    {
        _id: "9",
        name: "Gift Card IDR 1.000.000",
        type: 'product',
        point: 500000,
        isDelete: false
    },
]

export { IAward };

export default awards;