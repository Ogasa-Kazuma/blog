import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from 'react';
import useSWR from 'swr'
import "tailwindcss/tailwind.css"
import Image from 'next/image';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// レンダープロップ
// 高階コンポーネント
// hook は Reactの state やライフサイクルの機能などを、
// 関数コンポーネント内に使用できるようにするための関数です
// フックは関数のトップレベルのみで呼び出してください。ループや条件分岐やネストした関数の中でフックを呼び出さないでください
// returnとrenderの違い



    // const url = "http://" + location.hostname + "api/login";
    // async function onClick(message){
    //     let result = null;
    //     try{
    //         result = await fetch(url, {
    //             method: "POST",
    //             headers: {"Content-Type": "application/x-www-form-urlencoded"},
    //             body: "context="+ message,
    //             mode: "no-cors"
    //         })
    //     }catch(err){
    //         console.log(err)
    //     }
    //     return result;
    // }
    // props.setMessage(result.context);
       

function MessageForm(props, styles){
    const messageRef = useRef(null);
    function onClick(){
        if(!messageRef.current) return;
        const message = messageRef.current.value; 
        // 戻り値みたいなもの
        //
        console.log(message);
        props.setMessage(message)
    }
    
    return(
        <form>
            <input type = "text" name = "message" ref = {messageRef}/>
            <button type = "button" onClick = {onClick}>
            送信
            </button>
        </form>
    )
}

// function Messages(props){
//     const router = useRouter();
//     // パスパラメータから値を取得
//     const { chat_id } = router.query;
//     // stateは「メッセージ数」
//     const [messages, setMessages] = useState([]);
//     function update(messages){
//         messages = messages
//     }
//     const dummyMsg = ["msg1", "msg2", "msg3"];

    
    
    
//     useEffect(() => {
//         const url = "http://" + location.hostname;
//         fetch(url, {mode: "no-cors"})
//         .then(res => res.json())
//         .then(data => {
//             setMessages(data);
//             console.log(data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }, [])
    
//     if(messages.length < 1){
//         return (
//             <div>
//             { 
                
//                 dummyMsg.map(msg => (
//                     <div>{msg}</div>
//                 ))
//             }
//             </div>
//         )
//     }else{
//         return(
//             <div>
//              else
//             </div>
//         )
//     }
// }

function MessagesDisplayArea(props){
    const styles = " m-4 ";
    return(
        <div className = {props.styles + " flex flex-col "}>
            {
                props.messages.map(message => {
                    // こうやって書けばタグとJSの式を同時に書ける！ 
                    return <div>{makeMessage(message, styles)}</div>;  
                })
            }
        </div>
    )
}

function Message(props){
    return(
        <span className = {props.styles + " inline-block max-w-xs rounded-full p-8 break-all bg-lime-200 text-black "}>
            {props.message}
        </span>
    )
}



    
    // useEffect(() => {
    //     // todo: ポート番号とか直す
    //     const url = "http://" + location.hostname + ":8080/api/message";
    //     fetch(url, {mode: "no-cors"})
    //     .then(res => res.json())
    //     .then(data => {
    //         appendMessage(data);
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [messages])

// MessageFormは、親コンポーネントが何をするかに依存せず、ただ
// ただ入力されたメッセージを親に伝えるだけ、と疎結合になった
//

const makeMessage = (message, styles) => {
   if(message.context !== undefined && message.context !== ""){
      return(
        <Message message = {message.context} styles = {styles} />
    )
   }
}

function PhraseSearchForm(props){
    // これはContainer componentか?
    // presentationalか？
    // ここの設計がよくない気がする
    // formのことを知りすぎてる
    const phraseRef = useRef(null);
    function onClick(){
        if(!phraseRef.current) return;
        const phrase = phraseRef.current.value; 
        // 戻り値みたいなもの
        //
        for(let i = 0; i < props.messages.length; i++){
            const matchResult = props.messages[i].context.match(phrase);
            if(matchResult !== null){
                console.log("文字列マッチが見つかりました");
            }
        }
    }
    return(
        <form>
            <input type = "text" name = "phrase" ref = {phraseRef}/>
            <button type = "button" onClick = {onClick}>
                フレーズ検索
            </button>
        </form>
    )
}

function ChatPage(props) {

    const [messages, setMessage] = useState([]);

    function appendMessage(message){
        const newMessage = {
            "message_id": null,
            "chat_id": null,
            "context": message,
            "sender_id": null,
            "send_time": null
        }
        // 配列でpushで値を追加してもuseStateは検知してくれない！
        // Object.isで判断しているため
        const newMessages = [...messages, newMessage];
        setMessage(newMessages)
    }

  return (
    <div>
        <img src="/momiji.jpg" className = "absolute w-full h-full object-cover -z-10"/>
        <MessagesDisplayArea messages = {messages} />
        <MessageForm setMessage = {appendMessage} />
        <PhraseSearchForm messages = {messages} />
    </div>
  );
}


export default ChatPage;
