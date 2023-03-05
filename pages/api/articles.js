export default function handler(req, res) {
  console.log("access detect")
  res.status(200).json({ "post_date": '2023-02-26' })
}