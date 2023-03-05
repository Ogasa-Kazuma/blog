export default function handler(req, res) {
  console.log("access detect")
  res.status(200).json({
      "articles": [
        {"id": "id111", "post_date": '2023-02-26', "img": "img/flower.jpg"},
        {"id": "id222", "post_date": '2023-02-25', "img": "img/flower.jpg"}
      ]
    }
)
}