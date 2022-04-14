import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIaLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setIaLoading(true)
            await callback()
        } catch (error) {
            setError(error.message)
        } finally {
            setIaLoading(false)
        }
    }

    return [fetching, isLoading, error]
}