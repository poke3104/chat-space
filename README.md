# Chatspace DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|username|string|null: false|
|email|tring|null: false|
|password|string|null: false|
### Association
- has_many :groups
- has_many :message

## messageテーブル
|Column|Type|Option|
|------|----|------|
|text|text|null: false|
|user_id|integer|null: false,foreign_key: true|
|image|mediumblob||
### Association
- belong_to :users
- belong_to :groups

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|groupname|string|false :null|
|user_id|integer|false :null,foreign_key|
## Association
- has_many :users
- has_many :messages

## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|users_id|integer|null: false,foreign_key|
|group_id|integer|null: false,foreign_key|
## Association
- belong_to :group
- belong_to :user