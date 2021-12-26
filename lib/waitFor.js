export default function waitFor(ms) {
  return new Promise((res) => {
    let cb;
    cb = setTimeout(() => {
      res(cb);
    }, ms);
  });
}
