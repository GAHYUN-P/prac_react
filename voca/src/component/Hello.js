// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

import { useState } from "react";

export default function Hello() {

    // let name = "Mike";
    const [name, setName] = useState('Mike');
    // [변수명,state를 변경해주는 함수]
    // setName 함수가 호출되어서 name이 변하면 리액트는 이 컴포넌트를 다시 랜더랑해준다
    // useState()의 괄호 안에는 초기값이 들어간다


    return (
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={()=>{
                setName(name === "Mike" ? "Jane" : "Mike");
            }}>Change</button>
        </div>
        
    );
}