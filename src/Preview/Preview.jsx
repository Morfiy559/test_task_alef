import React from "react";
import './Preview.scss';

const Preview = ({saved, profile}) => {
    if (saved) return (
        <div className={'Preview-wrapper'}>
           <div className={'Preview'}>
               <div className={'title_profile'}>Пресональные данные</div>
               <div className={'profile'}>{profile.name + ', ' + profile.age}</div>
               <div className={'title_children'}>Дети</div>
               <div className={'children'}>
                   {profile.children.map(child=><p className={'child'} key={child.id}>{child.name+', '+child.age}</p>)}
               </div>
           </div>
        </div>
    )
    return (
        <h1>Вы не сохранили персональные данные</h1>
    )

}
export default Preview;