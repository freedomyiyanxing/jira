const testArr = [
  {
    number: 3000,
    plateSn: '1',
    boxSn: 111111,
    modelName: 'model1111',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '2',
    boxSn: 222222,
    modelName: 'model2211',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '3',
    boxSn: 222222,
    modelName: 'model2211',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '4',
    boxSn: 333333,
    modelName: 'model3311',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '5',
    boxSn: 333333,
    modelName: 'model3322',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '6',
    boxSn: 666666,
    modelName: 'model6611',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '7',
    boxSn: 666666,
    modelName: 'model6611',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '8',
    boxSn: 666666,
    modelName: 'model6622',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '9',
    boxSn: 666666,
    modelName: 'model6622',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
  {
    number: 3000,
    plateSn: '10',
    boxSn: 666666,
    modelName: 'model6622',
    brandName: 'brand1',
    batch: '[{"批次":"2035"}]',
  },
  {
    number: 3000,
    plateSn: '10',
    boxSn: 666666,
    modelName: 'model6633',
    brandName: 'brand1',
    batch: '[{"批次":"2034"}]',
  },
];

const fn = (select) => {
  const result = [];
  const objs = Object.create(null);
  select.forEach((item) => {
    if (Array.isArray(objs[item.boxSn])) {
      objs[item.boxSn].push(item);
    } else {
      objs[item.boxSn] = [item];
    }
  });
  const o = Object.create(null);
  Object.keys(objs).forEach((key) => {
    const arr = objs[key];
    if (arr.length <= 1) {
      result.push(...arr);
    } else {
      arr.forEach((item) => {
        if (!o[item.modelName + item.boxSn + item.batch + item.brandName]) {
          o[item.modelName + item.boxSn + item.batch + item.brandName] = item;
        } else {
          const is = o[item.modelName + item.boxSn + item.batch + item.brandName];
          o[item.modelName + item.boxSn + item.batch + item.brandName] = { ...item, number: is.number + item.number };
        }
      });
    }
  });
  Object.keys(o).forEach((key) => {
    result.push(o[key]);
  });
  return result;
};

fn(testArr);
