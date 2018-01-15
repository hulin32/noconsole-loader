# comment the console info on production

set the rule in the webpack

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
