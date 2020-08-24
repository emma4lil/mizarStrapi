const products = [
  {
    name: "product1",
    tagsy: [
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
        tag: "tag21",
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
  const [key, child] = filter.key.split(".");
  const result = objectList.filter((item) => {
    if (item[key] && Array.isArray(item[key])) {
      return helper(child, item[key], filter.val);
    } else {
      return false;
    }
  });
  return result;
};

const helper = function (child, items, val) {
  items.findIndex((item) => {
    // console.log(item);
    if (item[child] && item[child] === val) {
      return true;
    }
  });
};

const coll = deepFilter(products, { key: "tags.tag", val: "tag21" });
console.log(coll);
