
import { dropDownOptions } from '../../../data/dropdownData';
import { useItemContext } from '../../../context/appContext';
import MicInfo from "../../molecules/MicInfo/MicInfo"
export default function MicGrid() {
  const {
    dropdownItem1, setDropdownItem1, 
    dropdownItem2, setDropdownItem2 ,
    dropdownItem3, setDropdownItem3,
    option1, setOption1,
    option2, setOption2,
    option3, setOption3} = useItemContext()
  const grid = "col-12 col-lg-4 px-3"

  const handleChange1 = (item) => {
    setOption1(item)
    const index  = dropDownOptions.findIndex((value) => value === item)
    setDropdownItem1(index + 1)
  }
  const handleChange2 = (item) => {
    setOption2(item)
    const index  = dropDownOptions.findIndex((value) => value === item)
    setDropdownItem2(index + 1)
  }
  const handleChange3 = (item) => {
    setOption3(item)
    const index  = dropDownOptions.findIndex((value) => value === item)
    setDropdownItem3(index + 1)
  }
  return (
    <div>
        <div className="row">
            <div className={grid}>
                <MicInfo
                    dropDownOptions = { dropDownOptions }
                    option = {option1}
                    handleChange = {handleChange1}
                    dropdownItem1 = {dropdownItem1}
                />
            </div>
            <div className={grid}>
                <MicInfo
                    dropDownOptions = { dropDownOptions }
                    option = {option2}
                    handleChange = {handleChange2}
                    dropdownItem2={dropdownItem2}
                />
            </div>
            <div className={grid}>
                <MicInfo
                    dropDownOptions = { dropDownOptions }
                    option = {option3}
                    handleChange = {handleChange3}
                    dropdownItem3 = {dropdownItem3}
                />
            </div>
        </div>
    </div>
  )
}