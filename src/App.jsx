import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
        <h1 style={{ color: "red" }}>こんにちわ</h1>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>aaaaaaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>iiiiiiiiiii</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>uuuuuuuuuuuuuu</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default App;
