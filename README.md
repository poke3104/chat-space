# Chatspace DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false,index: true|
|email|tring|null: false|
|password|string|null: false|
### Association
- has_many :groups,through: :groups_users
- has_many :groups_users
- has_many :messages

## messageテーブル
|Column|Type|Option|
|------|----|------|
|text|text||
|user|references|null: false,foreign_key: true|
|group|references|null: false,foreign_key: true|
|image|string||
### Association
- belong_to :user
- belong_to :group

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null :false|
## Association
- has_many :users,through: :groups_users
- has_many :groups_users
- has_many :messages

## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|users|references|null: false,foreign_key|
|group|references|null: false,foreign_key|
## Association
- belong_to :group
- belong_to :user