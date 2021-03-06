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
  const result = objectList.map((item) => {
    if (item[root] && Array.isArray(item[root])) {
      helper(child, item[root], filter.val);
    }
  });
};

const helper = function (child, items, val) {
  items.map((item) => {
    if (item[child] && item[child] === val) {
      return true;
    }
  });
};
