# cari_resto
## Fungsi

**Users**

| **Route**               | **HTTP** | **Description**                                     |
|-------------------------|----------|-----------------------------------------------------|
| /register               | POST     | Create user                                         |
| /login                  | GET      | User Login                                          |
| /user/new               | POST     | Create user (admin only)                            |
| /user/all_users         | GET      | Get all user (admin only)                           |
| /user/find/:id          | GET      | View profile (admin and current user only)          |
| /user/delete/:id        | DELETE   | Delete profile (admin and current user only)        |
| /user/edit/:id          | POST     | Edit / Update profile (admin and current user only) |
| /twitter/search/:search | GET      | Search feature on twitter                           |

**Restaurants (users must login first)**

| **Route**                                                  | **HTTP** | **Description**                            |
|------------------------------------------------------------|----------|--------------------------------------------|
| /restaurants/help                                          | GET      | View category, establishment, cuisines     |
| /restaurants?category=<id>&establishment=<id>              | GET      | Search restaurants list                    |
| &sort=cost&order=asc&cuisines=<id>                         |   -      |               -                            |
| /restaurants/:id                                           | GET      | View selected restaurants                  |
| /restaurants/go?origin=<lat>,<lon>&destination=<lat>,<lon> | GET      | View driving direction and current weather |
| &avoid=<tolls>=metrics&mode=transit                        |   -      |                 -                          |

To Use
```javascript
npm install
npm run dev
```

## Anggota
1. ppsari
2. ridho0
3. raynormw
