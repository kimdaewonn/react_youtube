import React from 'react'
import { categories } from '../utils/content'

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? 'orange' : 'transparent',
          }} //카테고리 이름과 내가선택한 카테고리가 같을 경우 배경색 바꿔 주는거
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span className="cate__icon">{category.icon}</span>
          <span className="cate__name">{category.name}</span>
        </button>
      ))}
    </div>
  )
}
export default Category