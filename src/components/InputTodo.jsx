import React from "react";

// CSS-in-JS このコンポーネント内のみで使用するスタイルはJS内で記載してしまおうという１つの考え方
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px",
};
// TODO入力部分のコンポーネント化
export const InputTodo = (props) => {
  // 渡されたpropsの分割代入
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};
