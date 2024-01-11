import {lazy} from "react"

// export const MainPageAsync = lazy(() => import('./MainPage'))
export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    //Так делать нельзя!!
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))