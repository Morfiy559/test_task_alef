import React from "react";

const Child = ({id,name,age,changeChildName,changeChildAge,deleteChildBtn}) => {

  return(
      <div className={'child'}>
          <div className={'input_block'}>
              <div className={'label'}>Имя</div>
              <input onChange={(e)=>{changeChildName(id,e)}} value={name} type="text" placeholder={'Enter name...'}/>
          </div>
          <div className={'input_block'}>
              <div className={'label'}>Возраст</div>
              <input onChange={(e)=>{changeChildAge(id,e)}} value={age} type="number" placeholder={'Enter age...'}/>
          </div>
          <div onClick={()=>{deleteChildBtn(id)}} className={'delete'}>Удалить</div>
      </div>
  )
}
export default Child;