import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { currentActive, currentIntervalIncrement, currentRest, setTotalRemaining, toggleTraining } from "./actions"

//when i press button, toggle state, increment interval, display currentActive
const StartButton = () => {
    const activeLength = useSelector(state => state.timers.activeLength)
    const restLength = useSelector(state => state.timers.restLength)
    const totalInterval = useSelector(state => state.interval.totalInterval)

    const totalTime = totalInterval * (activeLength + restLength)
    console.log(totalTime)

    const dispatch = useDispatch()
    const startButtonHandler = () => {
        dispatch(currentActive(activeLength))
        dispatch(currentRest(restLength))
        dispatch(toggleTraining())
        dispatch(currentIntervalIncrement())
        dispatch(setTotalRemaining(totalTime))
    }
    return (
        <button className="StartButton" onClick={startButtonHandler}>START</button>
    )
}
export default StartButton