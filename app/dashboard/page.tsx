import React from 'react'
import { signOut } from '../utils/auth'
import { requireUser } from '../utils/hooks'

const DashboardRoute = async () => {
    const session = await requireUser()
  return (
    <div>
      <h1>Dashboard</h1>
      <form action={async () => {
        "use server"
        await signOut()
      }} >
        <button type='submit'>Logout</button>
      </form>
    </div>
  )
}

export default DashboardRoute
