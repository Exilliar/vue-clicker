var config = {
    items: [{
        id: 0,
        name: "Item 1",
        description: "description",
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
        description: "description",
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
        description: "description",
        total: 0,
        clickValue: 8,
        clickTime: 3,
        cost: 150,
        unlocked: false,
        unlockAt: 5, // the number of the previous item required before this item is unlocked
        intervalID: undefined
    }],
    upgrades: [{
      id: 0,
      name: "Cursor upgrade",
      description: "Upgrades the clicks per cursor click by 1",
      increase: 1,
      upgradeId: -1, // -1 for cursor
      unlocked: true,
      limit: 9, // how many times the upgrade can be bought
      cost: 10,
      disabled: false,
      total: 0,
    }, {
      id: 1,
      name: "Item 1 upgrade",
      description: "Upgrades the clicks per second for Item 1 by 1",
      increase: 1,
      upgradeId: 0, // -1 for cursor
      unlocked: true,
      limit: 9, // how many times the upgrade can be bought
      cost: 20,
      disabled: false,
      total: 0,
    }, {
      id: 2,
      name: "Item 2 upgrade",
      description: "Upgrades the clicks per second for Item 2 by 1",
      increase: 2,
      upgradeId: 1, // -1 for cursor
      unlocked: true,
      limit: 9, // how many times the upgrade can be bought
      cost: 40,
      disabled: false,
      total: 0,
    }, {
      id: 3,
      name: "Item 3 upgrade",
      description: "Upgrades the clicks per second for Item 3 by 1",
      increase: 4,
      upgradeId: 2, // -1 for cursor
      unlocked: true,
      limit: 9, // how many times the upgrade can be bought
      cost: 80,
      disabled: false,
      total: 0,
    }]
}

export default config;