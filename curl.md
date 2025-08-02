# Ping endpoint
curl --location '{{domain}}/v1/social/soundcloud/ping'

# Search
curl --location '{{domain}}/v1/social/soundcloud/search' \
--header 'Content-Type: application/json' \
--data '{
    "query": "skrillex",
    "limit": 20,
    "offset": 0,
    "facet": "model",
    "linked_partitioning": 1
}'

# Search tracks
curl --location '{{domain}}/v1/social/soundcloud/search/tracks' \
--header 'Content-Type: application/json' \
--data '{
    "query": "dance & edm",
    "limit": 20,
    "offset": 0,
    "facet": "genre",
    "linked_partitioning": 1
}'

# Search users
curl --location '{{domain}}/v1/social/soundcloud/search/users' \
--header 'Content-Type: application/json' \
--data '{
    "query": "skrillex",
    "limit": 20,
    "offset": 0,
    "facet": "place",
    "linked_partitioning": 1
}'

# Search albums
curl --location '{{domain}}/v1/social/soundcloud/search/albums' \
--header 'Content-Type: application/json' \
--data '{
    "query": "skrillex album",
    "limit": 20,
    "offset": 0,
    "facet": "genre",
    "linked_partitioning": 1
}'

# Search playlists
curl --location '{{domain}}/v1/social/soundcloud/search/playlists' \
--header 'Content-Type: application/json' \
--data '{
    "query": "workout playlist",
    "limit": 20,
    "offset": 0,
    "facet": "genre",
    "linked_partitioning": 1
}'

# Search by genre
curl --location '{{domain}}/v1/social/soundcloud/search/genre' \
--header 'Content-Type: application/json' \
--data '{
    "genre": "electronic",
    "limit": 10,
    "offset": 0,
    "sort": "popular",
    "linked_partitioning": 1
}'

# Get multiple tracks
curl --location '{{domain}}/v1/social/soundcloud/tracks/multiple' \
--header 'Content-Type: application/json' \
--data '{
    "ids": [956017639, 789012]
}'

# Get track comments
curl --location '{{domain}}/v1/social/soundcloud/tracks/comments' \
--header 'Content-Type: application/json' \
--data '{
    "trackId": 956017639,
    "threaded": 0,
    "limit": 200,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get related tracks
curl --location '{{domain}}/v1/social/soundcloud/tracks/related' \
--header 'Content-Type: application/json' \
--data '{
    "trackId": 956017639,
    "limit": 10,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get oembed tracks
curl --location '{{domain}}/v1/social/soundcloud/tracks/oembed' \
--header 'Content-Type: application/json' \
--data '{
    "url": "https://soundcloud.com/forss/flickermood",
    "maxwidth": 600,
    "auto_play": true
}'

# Get resolve url tracks 
curl --location '{{domain}}/v1/social/soundcloud/tracks/resolve' \
--header 'Content-Type: application/json' \
--data '{
    "url": "https://soundcloud.com/forss/flickermood"
}'

# Get user info
curl --location '{{domain}}/v1/social/soundcloud/user/info' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 856062
}'

# Get user spotlight
curl --location '{{domain}}/v1/social/soundcloud/users/spotlight' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 856062,
    "limit": 10,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get user likes
curl --location '{{domain}}/v1/social/soundcloud/users/likes' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 856062,
    "limit": 10,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get user followings
curl --location '{{domain}}/v1/social/soundcloud/users/followings' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 856062,
    "limit": 3,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get related artists
curl --location '{{domain}}/v1/social/soundcloud/users/related-artists' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 856062,
    "creators_only": false,
    "page_size": 12,
    "limit": 12,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get user tracks
curl --location '{{domain}}/v1/social/soundcloud/users/tracks' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 856062,
    "limit": 20
}'

# Get user playlists
curl --location '{{domain}}/v1/social/soundcloud/users/playlists' \
--header 'Content-Type: application/json' \
--data '{
    "userId": 856062,
    "limit": 10,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get playlist info
curl --location '{{domain}}/v1/social/soundcloud/playlists/info' \
--header 'Content-Type: application/json' \
--data '{
    "playlistId": 1236491080,
    "representation": "full"
}'

# Get playlists by genre
curl --location '{{domain}}/v1/social/soundcloud/playlists/genre' \
--header 'Content-Type: application/json' \
--data '{
    "genre": "electronic",
    "limit": 10,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get media URL
curl --location '{{domain}}/v1/social/soundcloud/media/url' \
--header 'Content-Type: application/json' \
--data '{
    "trackId": 956017639,
    "protocol": "progressive"
}'

# Get playback URL
curl --location '{{domain}}/v1/social/soundcloud/media/playback' \
--header 'Content-Type: application/json' \
--data '{
    "trackId": 956017639
}'

# Get download URL
curl --location '{{domain}}/v1/social/soundcloud/media/download' \
--header 'Content-Type: application/json' \
--data '{
    "trackId": 956017639
}'

# Get discover home content
curl --location '{{domain}}/v1/social/soundcloud/discover/home' \
--header 'Content-Type: application/json' \

# Get recent tracks by genre
curl --location '{{domain}}/v1/social/soundcloud/discover/recent-tracks' \
--header 'Content-Type: application/json' \
--data '{
    "genre": "electronic",
    "limit": 10,
    "offset": 0,
    "linked_partitioning": 1
}'

# Get recent tracks by country
curl --location '{{domain}}/v1/social/soundcloud/discover/recent-tracks-by-country' \
--header 'Content-Type: application/json' \
