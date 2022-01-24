// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

export default function Hello() {

    let name = "Mike";

    function changeName() {
        name = name === "Mike" ? "Jane" : "Mike";
        console.log(name);
    }

    return (
        <div>
            <h1>State</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>Change</button>
            {/* 버튼을 눌러도 변화가 없다 */}
        </div>
        
    );
}