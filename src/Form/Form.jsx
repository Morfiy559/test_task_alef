import React from "react";
import './Form.scss';
import {connect} from "react-redux";
import {
    addChild,
    deleteChild,
    increaseNextId,
    setAge,
    setChildAge,
    setChildName,
    setName,
    setSave
} from "../redux/form-reducer";
import Child from './Child/Child';

const Form = ({
                  name,
                  age,
                  children,
                  setName,
                  setAge,
                  addChild,
                  deleteChild,
                  setChildName,
                  setChildAge,
                  increaseNextId,
                  setSave
              }) => {

    const changeName = e => {
        let Name = e.target.value;
        setName(Name);
        setSave(false);
    }
    const changeAge = e => {
        let Age = e.target.value;
        setAge(Age);
        setSave(false);
    }
    const changeChildName = (id, e) => {
        let childName = e.target.value;
        setChildName(id, childName);
        setSave(false);
    }
    const changeChildAge = (id, e) => {
        let childAge = e.target.value;
        setChildAge(id, childAge);
        setSave(false);
    }
    const addChildBtn = (e) => {
        e.preventDefault();
        if (children.length === 5) {
            return;
        }
        addChild();
        increaseNextId();
        setSave(false);
    }
    const deleteChildBtn = (id) => {
        deleteChild(id);
        setSave(false);
    }
    const saveProfile = e => {
        e.preventDefault();
        //  set saved true
        setSave(true);
    }
    return (
        <div className={'Form-wrapper'}>
            <form className={'Form'} onSubmit={saveProfile}>
                <section className={'Profile'}>
                    <h4 className={'title'}>Персональные данные</h4>
                    <div className={'input_block'}>
                        <div className={'label'}>Имя</div>
                        <input onChange={changeName} value={name} type="text"/>
                    </div>
                    <div className={'input_block'}>
                        <div className={'label'}>Возраст</div>
                        <input onChange={changeAge} value={age} type="text"/>
                    </div>
                </section>
                <section className={'Children'}>
                    <div className={'add_children'}>
                        <h4 className={'title'}>Дети (макс. 5)</h4>
                        <button onClick={addChildBtn}>Добавить ребёнка</button>
                    </div>
                    {children.map(child => <Child
                        key={child.id}
                        {...child}
                        changeChildName={changeChildName}
                        changeChildAge={changeChildAge}
                        deleteChildBtn={deleteChildBtn}
                    />)}
                </section>
                <button className={'save_form'}>Сохранить</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        name: state.profile.name,
        age: state.profile.age,
        children: state.profile.children
    }
}

export default connect(mapStateToProps,
    {
        setName, setAge, addChild,
        setChildName, setChildAge, increaseNextId,
        deleteChild, setSave
    }
)(Form);