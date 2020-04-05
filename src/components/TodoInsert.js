import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const[value, setValue] = useState('');

    const onChange = useCallback(e => {      //추가로 인풋에 넣어줄 때 리렌더링 시 함수 새로 생성x 를 위해 useCallback Hook사용
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');  //value값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
            // 이를 방지하기 위해 아래 함수를 호출한다.
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
             <input placeholder="할일을 입력하세요!" value={value} onChange={onChange}/>
             <button type="submit">
                 <MdAdd/>
             </button>
        </form>
    );
};

export default TodoInsert;