# cari_resto
## Fungsi

Users

|Route                  |http |description|
|-----                  |---- |-----------|
/register               |post  |create user
/login                  |post  |login
/user/new               |post  |create user (admin only)
/user/all_users         |get  |get all user (admin only)
/user/find/:id          |get  |view profile (admin and current user only)
/user/delete/:id        |delete  |delete profile (admin and current user only)
/user/edit/:id          |post  |edit/update profile (admin and current user only)
/twitter/search/:search         |get  |fitur search on twitter

Restaurants (users must login first)
|Route                  |http |description|
|-----                  |---- |-----------|
/restaurants/help               |get  |view category, establishment, cuisines
/restaurants?category=<id>&establishment=<id>&sort=cost&order=asc&cuisines=<id>                  |get  |search restaurants list
/restaurants/18349559              |get  |view selected restaurants
/restaurants/go?origin=<lat>,<lon>&destination=<lat>,<lon>&avoid=<tolls|highways|ferries>&units=metrics&mode=transit        |get  |view driving direction and current weather

To Use
```javascript
npm install
npm run dev
```

## Anggota
1. ppsari
2. ridho
3. raynormw
