export const hello = (req, res) => {
  res.send('hello');
}

export const forward = (ctx, data) => {
  console.log('Data received: %o', data);
  ctx.send(data);
}