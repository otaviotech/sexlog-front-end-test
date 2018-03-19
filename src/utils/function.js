export default {
  getEnumLike(obj) {
    const ret = {};

    Object.keys(obj).forEach((descriptor) => {
      Object.defineProperty(ret, descriptor, Object.create({ value: descriptor }));
    });

    return ret;
  },
};
