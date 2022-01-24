// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

export default function Hello() {

    let name = "Mike";

    function changeName() {
        name = name === "Mike" ? "Jane" : "Mike";
        console.log(name);
        document.getElementById("name").innerText = name;
        // id name인 엘리먼트에 Text를 name으로 바꿔준다
    }

    return (
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
        
    );
}