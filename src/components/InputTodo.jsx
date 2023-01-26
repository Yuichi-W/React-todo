import React from "react";

// TODO入力部分のコンポーネント化
export const InputTodo = (props) => {
  // 渡されたpropsの分割代入
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
