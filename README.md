# TYPEORM-MANUAL-JUNCTION-TABLE

## 概要

typeorm で中間テーブルを`ManyToMany`を用いないで作成するサンプルアプリです。

実装の詳細は[こちらの記事]()を参照。

## 実行環境

- node 14.14.0

## 実行方法

### docker で mysql を起動

```bash
docker compose up -d
```

### node.js を実行

```bash
ts-node ./src/index.ts
```

以下表示されたら成功

```bash
Inserting a new user into the database...
Inserting a new work into the database...
Inserting a new userWork into the database...
Here you can setup and run express/koa/any other framework.
```

## 動作確認

### table を確認

```bash
mysql -u root --port 3306 -h 127.0.0.1 -D typeorm_db -e 'SHOW tables;' -p
```

```bash
+----------------------+
| Tables_in_typeorm_db |
+----------------------+
| user                 |
| user_works           |
| work                 |
+----------------------+
```

### table の要素を確認

```bash
mysql -u root --port 3306 -h 127.0.0.1 -D typeorm_db -e 'SELECT * FROM user; SELECT * FROM work; SELECT * FROM user_works;' -p
```

```bash
+----+-----------+----------+-----+
| id | firstName | lastName | age |
+----+-----------+----------+-----+
|  1 | hoge      | hoge     |  25 |
|  2 | fuga      | fuga     |  25 |
|  3 | piyo      | piyo     |  35 |
+----+-----------+----------+-----+
+----+--------------------+-----------+
| id | title              | body      |
+----+--------------------+-----------+
|  1 | フロント           | 運用      |
|  2 | バックエンド       | API作成   |
|  3 | DB                 | ER設計    |
+----+--------------------+-----------+
+---------+---------+
| user_id | work_id |
+---------+---------+
|       1 |       1 |
|       2 |       1 |
|       1 |       2 |
|       3 |       3 |
+---------+---------+
```
