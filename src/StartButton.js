import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { currentActive, currentIntervalIncrement, currentRest, toggleTraining } from "./actions"

//when i press button, toggle state, increment interval, display currentActive
const StartButton = () => {
    const activeLength = useSelector(state => state.timers.activeLength)
    const restLength = useSelector(state => state.timers.restLength)

    const dispatch = useDispatch()
    const startButtonHandler = () => {
        dispatch(currentActive(activeLength))
        dispatch(currentRest(restLength))
        dispatch(toggleTraining())
        dispatch(currentIntervalIncrement())
    }
    return (
        <button className="StartButton" onClick={startButtonHandler}>START</button>
    )
}
export default StartButton