<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TravelRoad</title>
</head>
<body>
    <h1>My Travel Bucket List</h1>
    <a href="/wished">Places I'd like to visit</a>
    <a href="/visited">Places I've already been to</a>
    <p>✨Powered by <strong>Laravel</strong></p>
</body>
</html>

<a href="">← Back home</a>

block content
  h1= "Places I've Already Been To"
  ul
    each place in visited
      li= place.name
  a(href="/") ← Back home

  block content
  h1= "Places I'd Like to Visit"
  ul
    each place in wished
      li= place.name
  a(href="/") ← Back home
