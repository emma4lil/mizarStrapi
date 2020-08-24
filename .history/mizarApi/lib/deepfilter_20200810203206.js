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
  const [root, child] = filter.key.split(".");
  const result = objectList.filter((item) => {
    if (item[root] && Array.isArray(item[root])) {
      console.log(item[root]);
      const bool = helper(child, item[root], filter.val);
      return bool;
    }
  });
  return result;
};

const helper = function (child, items, val) {
  items.every((item) => {
    // console.log(item);
    if (item[child] && item[child] === val) {
      return true;
    }
  });
};

const coll = deepFilter(products, { key: "tags.tag", val: "tag21" });
console.log(coll);
