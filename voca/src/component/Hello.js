// const Hello = () => {
//     <p>Hello</p>;
// };

import World from "./World";

// export default Hello;

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <World />
        </div>
        // JSX는 하나의 태그만 만들 수 있기때문에 div가 없으면 에러가 난다
        // <></> 빈태그로 감싸줘도 된다
    );
}