import Button from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import useSWR from 'swr'
import "tailwindcss/tailwind.css"

function Hello(){
  console.log("hello");
}

async function FetchMessage(props){
  let apiResult;
  console.log("saaaa")
  try{
    apiResult = (await fetch(
                             "https://ctuvwoyayc.execute-api.ap-northeast-1.amazonaws.com/dev-message-app/messages"
                                  ,{
                                    method: "GET"
                                  })
                    
  )}catch(err){
    console.log(err)
  }
  console.log(apiResult);
  props = await apiResult.json();
  console.log(props);
}

async function PostMessage(props){
  let apiResult;
  let message = {
    messageID: "from_next",
    content: "my wonder"
  }
  try{
    apiResult = (await fetch(
                             "https://ctuvwoyayc.execute-api.ap-northeast-1.amazonaws.com/dev-message-app/messages"
                                  ,{
                                    method: "POST",
                                    body: JSON.stringify(message)
                                  })
                    
  )}catch(err){
    console.log(err)
  }
  console.log(apiResult);
  props = await apiResult.json();
  console.log(props);
}



export default function FirstPost(props) {
  const arr = ["str1", "str2", "str3"];
  let content = "message-content";
  return (
    
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="h-64 w-full text-3xl font-thin bg-sky-100/50 underline">First Post</h1>
      <div onMouseDown={() => {console.log("onclick")}}>
        {
          arr.map(value => {return <div> aaa{value} </div>})
        }
      </div>
      <button onClick={() => FetchMessage({content})}>{content}</button>
      <button onClick={() => PostMessage({content})}>post message test</button>
    </Layout>
  );
}
