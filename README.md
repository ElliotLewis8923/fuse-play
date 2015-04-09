Filter an array of objects by multiple keys and expected values, for example:
```
"details.name:turkey" -> 2, 5

"details.name:turkey details.type:animal" -> 5

"details.name:turkey details.type:country" -> 2
```

Fuse.js implementation allows for fuzzy search:
```

"details.name:terkee" -> 2, 5
```



Setup:

```bash
$ npm install
```
```bash
$ npm run start&
```
```bash
$ open index.html
```
