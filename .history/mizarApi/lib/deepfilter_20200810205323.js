const products = [
  {
    name: "product1",
    tags: [
      {
        tag: "tag11",
        atr: "atr11",
      },
      {
        tag: "tag12",
        atr: "atr12",
      },
    ],
  },
  {
    name: "product2",
    tags: [
      {
        tag: "tag11",
        atr: "atr21",
      },
      {
        tag: "tag22",
        atr: "atr22",
      },
    ],
  },
  {
    name: "product3",
    tags: [
      {
        tag: "tag31",
        atr: "atr31",
      },
      {
        tag: "tag32",
        atr: "atr32",
      },
    ],
  },
];

const deepFilter = function (
  objectList = [{}],
  filter = { key: "tags.tag", val: "ios" }
) {
  const [key, prop] = filter.key.split(".");
  const result = objectList.filter((item) => {
    if (item[key] && Array.isArray(item[key])) {
      const v = helper(prop, item[key], filter.val);
      console.log(v);
      return v;
    } else {
      return false;
    }
  });
  return result;
};

const helper = function (prop, items, val) {
  const bool = false;
  items.findIndex((item) => {
    // console.log(item);
    if (item[prop] && item[prop] === val) {
      return true;
    } else {
      return false;
    }
  });
};

const coll = deepFilter(products, { key: "tags.tag", val: "tag11" });
console.log(coll);
