import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './components/Hero'
import ArticleCard from '../../components/ArticleCard'
import Articles from './components/Articles'
import MoreArticlesButton from './components/MoreArticlesButton'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <MoreArticlesButton />
    </MainLayout>
  )
}

export default Home
