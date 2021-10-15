# cli-csv2sql

npm install cli-csv2sql -g

```bash
csv2sql run -i YOUR_FILE.csv -o YOUR_SQL.sql --createTable=false
csv2sql run -i YOUR_FILE.csv -o YOUR_SQL.sql --updateColumn='YOUR_UPDATE_COL’
```

Or (short)

```bash
csv2sql run -i YOUR_FILE.csv -o YOUR_SQL.sql -c=false
csv2sql run -i YOUR_FILE.csv -o YOUR_SQL.sql -u='YOUR_UPDATE_COL’
```
