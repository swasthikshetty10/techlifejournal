import React from 'react'
import Article from './ArticlePage'
import Style from '../../../styles/Article.module.css'
function Index() {
    return (
        <div className={`${Style.article} w-full items-center`}>
            <Article />
        </div>
    )
}

export default Index
