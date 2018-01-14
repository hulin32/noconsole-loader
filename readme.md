# comment the console info on production

```
{
    test: /\.js$/,
    use: [
      {
        loader: 'noconsole-loader',
      }
    ]
}
```