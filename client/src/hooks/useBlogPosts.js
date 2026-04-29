import { useState, useEffect } from 'react'
import axios from 'axios'

function useBlogPosts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('http://localhost:4001/posts')
        setPosts(response.data.data)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return { posts, isLoading, isError }
}

export default useBlogPosts