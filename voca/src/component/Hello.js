// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
    return (
        <div>
            <h1 style = {
{
    color : '#f00',  // 객체기때문에 쉼표로 구분
    borderRight : '12px solid #000',
    // 키는 CSS에서는 border-right라고 썼다면 여기서는 borderRight라고 쓴다
    marginBottom : '50px',
    opacity : 0.5,
}

            }>Hello</h1>
            <World />
            <World />
            <div className={styles.box}>Hello</div>
        </div>
        // JSX는 하나의 태그만 만들 수 있기때문에 div가 없으면 에러가 난다
        // <></> 빈태그로 감싸줘도 된다
    );
}