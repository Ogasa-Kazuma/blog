import Button from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import useSWR from 'swr'
import "tailwindcss/tailwind.css"

function Hello(){
  console.log("hello");
}

function FetchMessage(){
  let apiResult;
  console.log("saaaa")
    apiResult = (fetch(
                             "https://ctuvwoyayc.execute-api.ap-northeast-1.amazonaws.com/dev-message-app/messages"
                                  ,{
                                    method: "GET"
                                  })
                    
  ).catch(err =>{
    console.log(err)
  })
  console.log(apiResult)
}

export default function FirstPost(props) {
  const arr = ["str1", "str2", "str3"];
  const content = "message-content";
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
      <button onClick={() => {console.error("onclick")}/*() => {Hello()}*/}>{content}</button>
    </Layout>
  );
}
