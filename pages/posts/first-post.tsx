import React, {useState, useEffect, useRef} from 'react';
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

function PageExplain(){
  return(
    <div>
      <h2 className="flex flex-row bg-sky-500/60 text-6xl text-white">
        <div className="basis-1/2 align-bottom ml-8 my-16">
          What is this page?
        </div>
        <div className = "basis-1/2">
          <div className = "mt-12 mr-12 text-xl">
            大森は最高です！
          </div>
        </div>
      </h2>
    </div>
  )
}



function ArticleSearchArea(){
  const [posts, setPosts] = useState({"articles": [{}]});
  const [contact, setContact] = useState({
    "post_date": "2023-02-28"
  });
  // 検索条件に変更があれば、記事検索APIからfetch
  useEffect(() => {
    const apiUrl = 'https://' + location.hostname + '/api/articles' + '?post_date=' + contact.post_date;
    fetch(apiUrl, {mode: "no-cors"})
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(data => {
        setPosts(data)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [contact])
  
  
  return(
    <div>
      <ArticleSearchForm callback = {setContact}/>
    </div>
  )
}

function ArticleSearchForm(props){
  // 投稿日
  const dateRef = useRef(null);
  
  // 投稿日の検索条件が変更されたら上位コンポーネントに通知
  const onChangeEvent = () => {
    // なにやってんだろう
    if(!dateRef.current) return;
    const post_date = dateRef.current.value;
    
    props.callback({"post_date": post_date})
  }
  return(
    <form id = "articleSearchFormId" onChange = {onChangeEvent}>
      <select id = "post_date" name = "post_date" placeholder = "post_date" ref={dateRef}>
        <option value = "2022-02-27">2022-02-27</option>
        <option value = "2022-02-28">2022-02-28</option>
      </select>
    </form>
  )
}

export default function FirstPost(props) {
  return (
    <div>
      <TitleBlock/>
      <PageExplain/>
      <ArticleSearchArea/>
    </div>
  );
}
