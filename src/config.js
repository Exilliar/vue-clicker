var config = {
    items: [{
        id: 0,
        name: "Item 1",
        total: 0,
        clickValue: 1,
        clickTime: 1,
        cost: 50,
        unlocked: true,
        unlockAt: 5,
        intervalID: undefined
      }, {
        id: 1,
        name: "Item 2",
        total: 0,
        clickValue: 4,
        clickTime: 2,
        cost: 100,
        unlocked: true,
        unlockAt: 5,
        intervalID: undefined
      }, {
        id: 2,
        name: "Item 3",
        total: 0,
        clickValue: 8,
        clickTime: 3,
        cost: 150,
        unlocked: false,
        unlockAt: 5, // the number of the previous item required before this item is unlocked
        intervalID: undefined
    }],
}

export default config;