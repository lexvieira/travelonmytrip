const RenderSelectList = (props) => {
    // const countryIndex = props.country;
    const dataRegion = props.dataRegion;
    const onSelectChange = props.onSelectChange
    const selectedOption = props.selectedOption
    return (
      <select id="selectRegion" onChange={onSelectChange}
        value={selectedOption}
      >
        {dataRegion.map((region, index) => {
                return (
                  <option key={index} value={index + 1}
                  >
                    {region.region}
                  </option>                   
                )
               
        })}
      </select>
    )
  }

  export default RenderSelectList;