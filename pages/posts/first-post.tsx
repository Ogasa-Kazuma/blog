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

function TitleBlock(){
  return(
    <div className="flex flex-row justify-center items-center w-full bg-gray-500 text-center">
      <span className = "absolute align-center font-thin text-5xl text-white">大森Life</span>
      <img src="img/flower.jpg" className="w-full opacity-30"/>
    </div>
  )
}

function PostLists(){
  return(
    <div>
    </div>
  )
}

export default function FirstPost(props) {
  return (
    <div>
      <TitleBlock/>
      <PostLists/>
    </div>
  );
}
