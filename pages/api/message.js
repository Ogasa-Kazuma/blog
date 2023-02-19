export default function handler(req, res) {
  console.log("message api called");
  res.status(200).json({message_id: "dummy_message_id", chat_id: "dummy_chat_id", sender_id: "111222333444", send_time: "dummySendTime", context: 'message from Next.js api function' });
}