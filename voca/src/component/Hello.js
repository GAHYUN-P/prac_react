// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

export default function Hello() {

    function showName() {
        console.log("Mike");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(e) {
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            {/* 여기에 showName()을 넣어주면 showName이 반환하는 값을 가져오는데
            지금은 반환하는 값이 없으니까 undefined가 들어가게 된다.
            함수명만 적어주면 기능만 실행해줌! */}
            <button onClick= {() => {
                showAge(10);
            }
            // 매개변수를 전달하기 편하다
            }>Show age</button>
            <input type="text" onChange={showText}/>
            {/* <input type="text" onChange={(e)=>{
                console.log(e.target.value)
            }}/> */}
        </div>
        
    );
}