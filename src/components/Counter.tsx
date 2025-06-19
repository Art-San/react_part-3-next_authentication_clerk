// 'use client'

// import { useAuth } from '@clerk/nextjs'
// import { useState } from 'react'

// export const Counter = () => {
//   const [count, setCount] = useState(0)
//   const { isLoaded, userId, sessionId, getToken } = useAuth()

//   if (!isLoaded || !userId) return null

//   console.log(12, isLoaded)
//   console.log(13, userId)
//   console.log(14, sessionId)
//   console.log(15, getToken)

//   return (
//     <div>
//       <p>Счетчик: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Увеличить</button>
//     </div>
//   )
// }

'use client'
// import { useUser } from '@clerk/nextjs'
import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  // const { isLoaded, isSignedIn, user } = useUser()

  // if (!isLoaded || !isSignedIn) return null

  // console.log(isSignedIn)
  // console.log(user)

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  )
}
