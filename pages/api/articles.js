export default function handler(req, res) {
  console.log("access detect")
  res.status(200).json({
      "articles": [
        {"id": "id111", "title": "omori", "post_date": '2023-02-26', "img": "img/flower.jpg", "category": "TRIP", "content": "今日もグルメ！"},
        {"id": "id222", "title": "kamata", "post_date": '2023-02-25', "img": "img/flower.jpg", "category": "GOURMET", "content": "おいしいごはんをたべてきました！"}
      ]
    }
)
}